import { Metadata } from 'next';

import { ChatButton } from '@/components/assistant-ui/ChatButton';
import Header from '@/components/layout/Header';
import { BrandBanner } from '@/components/sections/brand/BrandBanner';
import { BrandDonts } from '@/components/sections/brand/BrandDonts';
import { BrandNavigation } from '@/components/sections/brand/BrandNavigation';
import { ColorPalette } from '@/components/sections/brand/ColorPalette';
import { DownloadSection } from '@/components/sections/brand/DownloadSection';
import { LogoAssets } from '@/components/sections/brand/LogoAssets';
import { Typography } from '@/components/sections/brand/Typography';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import StarrySky from '@/components/ui/StarrySky';

export const metadata: Metadata = {
  title: 'Brand Kit | Neverland Money',
  description:
    'Download Neverland brand assets, logos, and learn about our brand guidelines and usage policies.',
  metadataBase: new URL('https://neverland.money'),
  alternates: {
    canonical: '/brand',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Brand Kit | Neverland Money',
    description:
      'Download Neverland brand assets, logos, and learn about our brand guidelines and usage policies.',
    url: 'https://neverland.money/brand',
    siteName: 'Neverland Money',
    images: [
      {
        url: '/assets/images/brand-page.webp',
        width: 1200,
        height: 675,
        alt: 'Brand Kit | Neverland Money',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Kit | Neverland Money',
    description:
      'Download Neverland brand assets, logos, and learn about our brand guidelines and usage policies.',
    images: ['/assets/images/brand-page.webp'],
  },
  keywords: ['brand kit', 'logo', 'assets', 'guidelines', 'Neverland'],
};

export default function BrandPage() {
  return (
    <main className='min-h-screen bg-[#01020D] py-16'>
      <StarrySky
        starCount={300}
        shootingStarCount={0}
        glowPercentage={0}
        fullPage={true}
        zIndex={1}
      />
      {/* Unified Background Layer */}
      <div className='fixed inset-0 z-0'>
        {/* Base gradient */}
        <div className='absolute inset-0 bg-gradient-to-br from-[#0b0414] via-[#2d1b69]/30 to-[#090016]' />
        {/* Subtle radial overlay */}
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent' />
      </div>

      {/* Content */}
      <div className='relative z-10 overflow-y-hidden lg:overflow-y-visible'>
        <Header />

        {/* Banner Section */}
        <BrandBanner />

        {/* Content Area */}
        <div className='font-lexend relative text-white'>
          <div className='mx-auto w-full lg:max-w-7xl'>
            <div className='flex flex-col lg:flex-row'>
              {/* Main Content - 75% on desktop, full width on mobile */}
              <main className='w-full px-6 pb-8 lg:w-3/4 lg:px-8'>
                {/* Mobile Navigation - Full width at top of logo section */}
                <div className='mb-8 lg:hidden'>
                  <BrandNavigation />
                </div>

                <section id='logo-assets'>
                  <LogoAssets />
                </section>

                <div className='mx-auto h-px w-128 bg-gradient-to-r from-transparent via-[#ffffff]/50 to-transparent'></div>

                <section id='color-palette'>
                  <ColorPalette />
                </section>

                <div className='mx-auto h-px w-128 bg-gradient-to-r from-transparent via-[#ffffff]/50 to-transparent'></div>

                <section id='typography'>
                  <Typography />
                </section>

                <div className='mx-auto h-px w-128 bg-gradient-to-r from-transparent via-[#ffffff]/50 to-transparent'></div>

                <section id='donts'>
                  <BrandDonts />
                </section>

                <div className='mx-auto h-px w-128 bg-gradient-to-r from-transparent via-[#ffffff]/50 to-transparent'></div>

                <section id='downloads'>
                  <DownloadSection />
                </section>
              </main>

              {/* Fixed Navigation Legend - 25% on desktop, hidden on mobile */}
              <aside className='hidden px-6 py-8 lg:block lg:w-1/4'>
                <div className='sticky top-24'>
                  <BrandNavigation />
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* End of document marker */}
        <div className='text-center'>
          <div className='text-2xl font-light tracking-widest text-purple-300/50'>
            • • •
          </div>
        </div>

        <ChatButton />
        <ScrollToTopButton />
      </div>
    </main>
  );
}
