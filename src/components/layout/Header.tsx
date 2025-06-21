'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import LiquidGlass from '@/components/ui/LiquidGlass';
import { trackEvent, EventNames } from '@/utils/analytics';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      // The hero section has a height of 100vh
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Set isScrolled to true if we've scrolled past 90% of the hero section
      setIsScrolled(scrollPosition > windowHeight * 0.9);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Track navigation click
      trackEvent(EventNames.BUTTON_CLICK, {
        menu_item: targetId,
        location: 'header_navigation',
      });
    }
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header>
      {/* Fixed Header with LiquidGlass effect */}
      <nav className='fixed top-4 right-4 left-4 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500'>
        {/* LiquidGlass Header Background */}
        <div className='absolute inset-0 -z-10 overflow-hidden rounded-2xl border border-white/[0.06] shadow-lg'>
          <LiquidGlass
            className='h-full w-full'
            blur='md'
            overlayColor='#050212'
            overlayOpacity={0.2}
            padding='p-0'
            borderRadius='rounded-2xl'
          >
            {/* Empty div as children (required by LiquidGlass) */}
            <div></div>
          </LiquidGlass>

          {/* Shimmer effect added separately since it's not in LiquidGlass props */}
          <div
            className='absolute inset-0 overflow-hidden'
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)',
              animation: 'shimmer 5s infinite',
            }}
          />
        </div>

        {/* Animation for shimmer */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
              }
            `,
          }}
        />

        <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
          {/* Logo Section - Left */}
          <Link href='/'>
            <div className='z-10 flex items-center gap-1'>
              <Image
                src='/assets/images/header/logo.svg'
                alt='Logo'
                width={0}
                height={0}
                className='h-[auto] w-[40px] text-white'
                priority
              />
              <span className='font-cinzel-decorative text-xl font-normal tracking-wider text-white'>
                Neverland
              </span>
            </div>
          </Link>

          {/* Center Nav Menu - Desktop */}
          {isMainPage && (
            <div className='hidden items-center gap-8 md:flex'>
              <Link
                href='#about'
                onClick={(e) => handleSmoothScroll(e, 'about')}
                className='font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300'
              >
                About
              </Link>
              <Link
                href='#features'
                onClick={(e) => handleSmoothScroll(e, 'features')}
                className='font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300'
              >
                Features
              </Link>
              <Link
                href='#explore'
                onClick={(e) => handleSmoothScroll(e, 'explore')}
                className='font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300'
              >
                Explore
              </Link>
              <Link
                href='#stats'
                onClick={(e) => handleSmoothScroll(e, 'stats')}
                className='font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300'
              >
                Stats
              </Link>
              <Link
                href='#faq'
                onClick={(e) => handleSmoothScroll(e, 'faq')}
                className='font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300'
              >
                FAQ
              </Link>
              <Link
                href='#contact'
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className='font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300'
              >
                Contact
              </Link>
            </div>
          )}

          {/* Social Icons - Right (Desktop) */}
          <div className='hidden items-center gap-3 md:flex'>
            {/* X/Twitter Icon */}
            <Link
              href='https://x.com/neverland_money'
              target='_blank noreferrer noopener'
              className='flex items-center rounded-full border border-white/20 p-2 transition-colors hover:border-purple-400'
              onClick={() => {
                trackEvent(EventNames.EXTERNAL_LINK_CLICK, {
                  link_name: 'x',
                  location: 'header_social',
                  url: 'https://x.com/neverland_money',
                });
              }}
            >
              <Image
                loading='eager'
                src='/assets/images/header/x.svg'
                alt='X'
                width={0}
                height={0}
                className='h-[auto] w-[20px] text-white'
              />
            </Link>

            {/* Discord Icon */}
            <Link
              href='https://discord.com/invite/neverland-money'
              target='_blank noreferrer noopener'
              className='flex items-center rounded-full border border-white/20 p-2 transition-colors hover:border-purple-400'
              onClick={() => {
                trackEvent(EventNames.EXTERNAL_LINK_CLICK, {
                  link_name: 'discord',
                  location: 'header_social',
                  url: 'https://discord.com/invite/neverland-money',
                });
              }}
            >
              <Image
                loading='eager'
                src='/assets/images/header/discord.svg'
                alt='Discord'
                width={0}
                height={0}
                className='h-[auto] w-[20px] text-white'
              />
            </Link>

            {/* Telegram Icon */}
            <Link
              href='https://t.me/neverland_money'
              target='_blank noreferrer noopener'
              className='flex items-center rounded-full border border-white/20 p-2 transition-colors hover:border-purple-400'
              onClick={() => {
                trackEvent(EventNames.EXTERNAL_LINK_CLICK, {
                  link_name: 'telegram',
                  location: 'header_social',
                  url: 'https://t.me/neverland_money',
                });
              }}
            >
              <Image
                loading='eager'
                src='/assets/images/header/telegram.svg'
                alt='Telegram'
                width={0}
                height={0}
                className='h-[auto] w-[20px] text-white'
              />
            </Link>

            {/* Medium Icon */}
            <Link
              href='https://news.neverland.money/'
              target='_blank noreferrer noopener'
              className='flex items-center rounded-full border border-white/20 p-2 transition-colors hover:border-purple-400'
            >
              <Image
                loading='eager'
                src='/assets/images/header/medium.svg'
                alt='Medium'
                width={0}
                height={0}
                className='h-[auto] w-[20px] text-white invert'
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {isMainPage && (
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-full md:hidden ${isScrolled ? 'backdrop-blur-sm' : ''}`}
              onClick={toggleMobileMenu}
              style={{
                transition:
                  'background-color 0.3s ease, backdrop-filter 0.3s ease',
              }}
            >
              <Image
                loading='eager'
                src='/assets/images/header/mobile-menu.svg'
                alt='Open Menu'
                width={24}
                height={24}
                className={`transition-all ${isScrolled ? 'brightness-110' : ''}`}
              />
            </button>
          )}
        </div>
      </nav>

      {/* No spacer needed for overlapping header */}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-[60] overflow-y-auto bg-[rgba(5,2,18,0.85)] backdrop-blur-[17px] backdrop-filter md:hidden'>
          <div className='flex h-full w-full flex-col items-start justify-start px-4'>
            {/* Top row with Logo and Close button */}
            <div className='flex h-[80px] w-full items-center justify-end'>
              {/* Close button */}
              <button className='top-8 right-5' onClick={toggleMobileMenu}>
                <Image
                  loading='eager'
                  src='/assets/images/header/close.svg'
                  alt='Close Menu'
                  width={0}
                  height={0}
                  className='h-[auto] w-[16px]'
                />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            {isMainPage && (
              <div className='mb-12 flex h-full flex-col justify-center gap-5'>
                <Link
                  href='#about'
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  ABOUT
                </Link>
                <Link
                  href='#features'
                  onClick={(e) => handleSmoothScroll(e, 'features')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  FEATURES
                </Link>
                <Link
                  href='#explore'
                  onClick={(e) => handleSmoothScroll(e, 'explore')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  EXPLORE
                </Link>
                <Link
                  href='#stats'
                  onClick={(e) => handleSmoothScroll(e, 'stats')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  STATS
                </Link>
                <Link
                  href='#faq'
                  onClick={(e) => handleSmoothScroll(e, 'faq')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  FAQ
                </Link>
                <Link
                  href='#contact'
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  CONTACT
                </Link>
              </div>
            )}

            {/* Mobile Social Links - positioned at the bottom and centered */}
            <div className='flex w-full justify-center gap-7 pb-12'>
              <Link
                href='https://x.com/neverland_money'
                target='_blank noreferrer noopener'
                className='flex aspect-square h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border-[1.818px] border-[#942ffe]'
              >
                <Image
                  loading='eager'
                  src='/assets/images/header/x.svg'
                  alt='X'
                  width={0}
                  height={0}
                  className='h-[auto] w-[24px] text-white'
                />
              </Link>
              <Link
                href='https://discord.com/invite/neverland-money'
                target='_blank noreferrer noopener'
                className='flex aspect-square h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border-[1.818px] border-[#942ffe]'
              >
                <Image
                  loading='eager'
                  src='/assets/images/header/discord.svg'
                  alt='Discord'
                  width={0}
                  height={0}
                  className='h-[auto] w-[24px] text-white'
                />
              </Link>
              <Link
                href='https://t.me/neverland_money'
                target='_blank noreferrer noopener'
                className='flex aspect-square h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border-[1.818px] border-[#942ffe]'
              >
                <Image
                  loading='eager'
                  src='/assets/images/header/telegram.svg'
                  alt='Telegram'
                  width={0}
                  height={0}
                  className='h-[auto] w-[24px] text-white'
                />
              </Link>
              <Link
                href='https://news.neverland.money/'
                target='_blank noreferrer noopener'
                className='flex aspect-square h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full border-[1.818px] border-[#942ffe]'
              >
                <Image
                  loading='eager'
                  src='/assets/images/header/medium.svg'
                  alt='Medium'
                  width={0}
                  height={0}
                  className='h-[auto] w-[24px] text-white invert'
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
