import type { Metadata } from 'next';
import {
  Merriweather,
  Cinzel,
  Cinzel_Decorative,
  Inter,
  Geist,
  Geist_Mono,
  Lexend,
} from 'next/font/google';
import Script from 'next/script';

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

export const metadata: Metadata = {
  title: 'Neverland Money',
  description: 'Revolutionizing Lending & Tokenomics',
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
    description: 'Revolutionizing Lending & Tokenomics',
    url: 'https://neverland.money',
    siteName: 'Neverland Money',
    images: [
      {
        url: '/assets/images/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Neverland Money',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neverland Money',
    description: 'Revolutionizing Lending & Tokenomics',
    images: ['/assets/images/og-banner.png'],
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
      <head>
        {/* Matomo Tag Manager */}
        <Script id='matomo-tag-manager' strategy='afterInteractive'>
          {`
            var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://cdn.matomo.cloud/neverland.matomo.cloud/container_bWIgkw9c.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>
      </head>
      <body
        className={`${merriweather.variable} ${cinzel.variable} ${cinzel_decorative.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} ${lexend.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
