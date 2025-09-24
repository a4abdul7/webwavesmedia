import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import ScrollProgress from '@/components/ui/scroll-progress';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const merriweather = Merriweather({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'WebWavesMedia - Premier Digital Marketing Agency',
    template: '%s | WebWavesMedia'
  },
  description: 'Transform your digital presence with WebWavesMedia\'s comprehensive digital marketing services. From SEO to social media, we drive results that matter.',
  keywords: ['digital marketing', 'SEO', 'social media marketing', 'web design', 'PPC advertising', 'content marketing'],
  authors: [{ name: 'WebWavesMedia Team' }],
  creator: 'WebWavesMedia',
  publisher: 'WebWavesMedia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webwavesmedia.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'WebWavesMedia - Premier Digital Marketing Agency',
    description: 'Transform your digital presence with comprehensive digital marketing services that drive real results.',
    siteName: 'WebWavesMedia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WebWavesMedia - Digital Marketing Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebWavesMedia - Premier Digital Marketing Agency',
    description: 'Transform your digital presence with comprehensive digital marketing services that drive real results.',
    images: ['/og-image.jpg'],
    creator: '@webwavesmedia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WebWavesMedia',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://webwavesmedia.com',
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://webwavesmedia.com'}/logo.png`,
  description: 'Premier digital marketing agency specializing in SEO, social media, web design, and comprehensive digital strategies.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Digital Avenue',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
    availableLanguage: ['English'],
  },
  sameAs: [
    'https://facebook.com/webwavesmedia',
    'https://twitter.com/webwavesmedia',
    'https://linkedin.com/company/webwavesmedia',
    'https://instagram.com/webwavesmedia',
  ],
  services: [
    'SEO Services',
    'Social Media Marketing',
    'Web Design',
    'Content Marketing',
    'PPC Advertising',
    'Email Marketing',
    'Brand Strategy',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.variable} ${merriweather.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}