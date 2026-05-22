import type { Metadata } from 'next';
import { Inter_Tight, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import UrgencyBanner from '@/components/UrgencyBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWAButton from '@/components/FloatingWAButton';
import './globals.css';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-inter-tight',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'arial'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'sans-serif'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
  fallback: ['monospace'],
});

export const metadata: Metadata = {
  title: {
    default: 'Holder Raket Padel 3D Print Premium | 3Dulo',
    template: '%s | 3Dulo',
  },
  description: '3Dulo — raket holder padel dan badminton buatan Indonesia. 3D printed, bisa dikustomisasi, mulai Rp 15.000. Wall mount, desk stand, dan aksesori untuk setup yang serius.',
  metadataBase: new URL('https://3dulo.id'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://3dulo.id',
    siteName: '3Dulo',
    title: 'Holder Raket Padel 3D Print Premium | 3Dulo',
    description: '3Dulo — raket holder padel dan badminton buatan Indonesia. 3D printed, bisa dikustomisasi, mulai Rp 15.000.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: '3Dulo — Raket Holder 3D Print Indonesia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Holder Raket Padel 3D Print Premium | 3Dulo',
    description: '3Dulo — raket holder padel dan badminton buatan Indonesia. 3D printed, bisa dikustomisasi, mulai Rp 15.000.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://3dulo.id',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '3Dulo',
    url: 'https://3dulo.id',
    logo: 'https://3dulo.id/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+62-813-1919-0388',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: 'Indonesian',
    },
    sameAs: [
      'https://instagram.com/3dulo.id',
      'https://tiktok.com/@3dulo.id',
    ],
  };

  return (
    <html
      lang="id"
      className={`${interTight.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: '#F5EFE0' }}>
        <UrgencyBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWAButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
