import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import {
  Cinzel,
  Cinzel_Decorative,
  Geist,
  Geist_Mono,
  Inter,
  Lexend,
  Merriweather,
  Quicksand,
} from 'next/font/google';

import SmoothScroll from '@/components/SmoothScroll';
import './globals.css';

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cinzel_decorative = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-cinzel-decorative',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Neverland Money',
  description:
    'Neverland is a decentralized lending platform that reimagines DeFi incentives through sustainable veTokenomics, governance rewards, advanced yield strategies, self-repaying loans, and more. Coming soon on Monad!',
  metadataBase: new URL('https://neverland.money'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Neverland Money',
    description:
      'Neverland is a decentralized lending platform that reimagines DeFi incentives through sustainable veTokenomics, governance rewards, advanced yield strategies, self-repaying loans, and more. Coming soon on Monad!',
    url: 'https://neverland.money',
    siteName: 'Neverland Money',
    images: [
      {
        url: '/assets/images/og-banner.webp',
        width: 1200,
        height: 675,
        alt: 'Neverland Money',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neverland Money',
    description:
      'Neverland is a decentralized lending platform that reimagines DeFi incentives through sustainable veTokenomics, governance rewards, advanced yield strategies, self-repaying loans, and more. Coming soon on Monad!',
    images: ['/assets/images/og-banner.webp'],
  },
  keywords: [
    'decentralized finance',
    'lending',
    'crypto',
    'interest',
    'blockchain',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head></head>
      <body
        className={`${merriweather.variable} ${cinzel.variable} ${cinzel_decorative.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} ${lexend.variable} ${quicksand.variable} bg-black text-white antialiased`}
      >
        <SmoothScroll>
          {children}
          <SpeedInsights />
          <Analytics />
        </SmoothScroll>
      </body>
    </html>
  );
}
