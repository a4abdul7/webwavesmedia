# Multi-stage Dockerfile for Next.js standalone output (Node 18 Alpine)
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_FONT_GOOGLE_TIMEOUT=60000

# Install all dependencies (including dev) for build
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Builder: copy source and run the build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure public exists so runner COPY won't fail (safe if public already present)
RUN mkdir -p public
RUN npm run build

# Runner: minimal runtime image
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOME=/app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Install only production deps in final image (optional)
COPY package.json package-lock.json* ./
RUN npm ci --only=production || true

# Copy Next.js standalone output and static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Ensure proper ownership and permissions
RUN chown -R nextjs:nodejs /app && chmod -R 775 /app/.next || true

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# server.js is created by next build from the standalone output
CMD ["node", "server.js"]
