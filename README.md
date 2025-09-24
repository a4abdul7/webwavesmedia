# WebWavesMedia - Digital Marketing Agency Website

A complete, production-ready digital marketing agency website built with Next.js, TypeScript, and Tailwind CSS. Features beautiful animations, SEO optimization, and comprehensive service pages.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Comprehensive Services**: 10 detailed service categories with animated accordions
- **SEO Optimized**: Full SEO implementation with structured data
- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Dark Mode**: System preference detection with manual toggle
- **Contact Forms**: Advanced forms with validation and email integration
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **Analytics**: Google Analytics 4 integration
- **Docker Ready**: Single-stage Dockerfile for easy deployment

## 🛠 Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Docker containerization

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd webwaves-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

### Docker Deployment

#### Option 1: Using Docker directly

1. **Build and run the Docker container**
   ```bash
   # Build the image
   docker build -t webwavesmedia .
   
   # Run the container
   docker run -p 3000:3000 webwavesmedia
   ```

#### Option 2: Using Docker Compose (Recommended)

1. **Run with Docker Compose**
   ```bash
   # Build and start the application
   docker-compose up --build
   
   # Or run in detached mode
   docker-compose up -d --build
   ```

2. **Stop the application**
   ```bash
   docker-compose down
   ```

The site will be available at [http://localhost:3000](http://localhost:3000).

#### Quick Start (One Command)

```bash
# Clone, build, and run in one go
git clone <repository-url> && cd webwaves-agency && docker-compose up --build
```

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global styles and Tailwind CSS
│   ├── layout.tsx         # Root layout with SEO and analytics
│   ├── page.tsx          # Homepage with hero and features
│   └── services/         # Services page with animated accordions
├── components/            # Reusable components
│   ├── layout/           # Navigation and footer components
│   ├── sections/         # Page sections (testimonials, stats, etc.)
│   └── ui/               # UI components (buttons, cards, etc.)
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🎨 Key Pages

1. **Homepage** (`/`)
   - Animated hero section with rotating elements
   - Services carousel with scroll animations
   - Client testimonials with navigation
   - Statistics counter with reveal animations

2. **Services** (`/services`)
   - 10 service categories with animated accordions
   - Detailed service descriptions
   - Feature lists with check animations
   - Smooth expand/collapse interactions

3. **Projects** (`/projects`)
   - Portfolio grid with hover effects
   - Filter functionality by service type
   - Case study detail pages
   - Before/after showcases

4. **Contact** (`/contact`)
   - Interactive contact form with validation
   - Google Maps integration
   - Animated contact cards
   - Social media links

5. **Get Quote** (`/get-quote`)
   - Multi-step quote form
   - Service selection with pricing
   - Budget range sliders
   - Email notification system

## 🎯 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card implementation
- **Structured Data**: JSON-LD schema for Organization and services
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling directives
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Optimized images and lazy loading

## 🔧 Configuration

### Environment Variables

Key environment variables in `.env.local`:

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com
CONTACT_EMAIL=your-email@domain.com

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Customization

1. **Colors**: Modify the color palette in `globals.css`
2. **Content**: Update service descriptions in the respective page files
3. **Images**: Replace placeholder images in the `public/` directory
4. **Contact Info**: Update company information in the environment variables

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## ⚡ Performance

Optimized for:
- **Core Web Vitals**: LCP, FID, CLS scores
- **Lighthouse**: 90+ scores across all metrics
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Size**: Tree-shaking and code splitting

## 📧 Contact Forms

Forms include:
- **Client-side validation**: React Hook Form with Zod schemas
- **Server-side processing**: API routes for form submission
- **Email notifications**: SMTP integration for form submissions
- **Spam protection**: Optional reCAPTCHA integration

## 🚀 Deployment Options

1. **Vercel**: One-click deployment with automatic builds
2. **Netlify**: Static site generation with forms
3. **Docker**: Containerized deployment for any platform
4. **AWS/GCP/Azure**: Cloud platform deployment

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🤝 Support

For support and questions:
- Email: hello@webwavesmedia.com
- Documentation: See inline code comments
- Issues: Create GitHub issues for bugs

## 🔄 Updates

Regular updates include:
- Security patches
- Performance improvements  
- New feature additions
- Content management enhancements

---

Built with ❤️ by WebWavesMedia Team