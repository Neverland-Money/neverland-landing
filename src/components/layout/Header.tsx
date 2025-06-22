'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useScrollContext } from '@/components/SmoothScroll';
import { trackEvent, EventNames } from '@/utils/analytics';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  const { lenis } = useScrollContext();

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
      // Use Lenis for smooth scrolling if available
      if (lenis) {
        lenis.scrollTo(targetElement, {
          offset: 0, // No offset
          duration: 1.5, // Smooth transition duration
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Same easing as in SmoothScroll
        });
      } else {
        // Fallback to native scrolling
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }

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
      {/* Fixed Header with permanent blur effect */}
      <nav className='fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-500'>
        {/* Main liquid glass effect container */}
        <div className='liquid-glass-container absolute inset-0 -z-10'></div>

        {/* Bottom edge glass effect */}
        <div className='liquid-glass-edge absolute right-0 -bottom-[2px] left-0 -z-10 h-[2px]'></div>

        {/* Bottom liquid pooling effect */}
        <div className='liquid-glass-pool absolute right-0 -bottom-2 left-0 -z-10 h-4'></div>

        {/* Animated shimmer effect */}
        <div className='liquid-glass-shimmer absolute inset-x-0 top-0 -z-10 h-full overflow-hidden'></div>

        {/* Light refraction effect */}
        <div className='liquid-glass-glow absolute inset-0 -z-10'></div>

        {/* CSS for liquid glass styling */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              .liquid-glass-container {
                background-color: rgba(5,2,18,0.2);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              }
              
              .liquid-glass-fade {
                background: linear-gradient(to bottom, rgba(5,2,18,0.2), transparent);
                backdrop-filter: blur(1px);
                -webkit-backdrop-filter: blur(1px);
              }
              
              .liquid-glass-glow {
                background: radial-gradient(ellipse at top, rgba(255,255,255,0.1), transparent 70%);
                opacity: 0.6;
              }
              
              .liquid-glass-shimmer {
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
                transform: translateX(-100%);
                animation: shimmer 5s infinite;
                animation-delay: 1s;
              }
              
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
                className={`h-[auto] w-[24px] transition-all ${isScrolled ? 'brightness-110' : ''}`}
                width={0}
                height={0}
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
            <div className='mb-6 flex h-[72px] w-full items-center justify-between'>
              {/* Logo Section - Left */}
              <Link href='/'>
                <div className='z-10 flex items-center gap-1 lg:z-10'>
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
              {/* Close button */}
              <button className='relative right-2' onClick={toggleMobileMenu}>
                <Image
                  loading='eager'
                  src='/assets/images/header/close.svg'
                  alt='Close Menu'
                  className='h-[auto] w-[24px]'
                  width={0}
                  height={0}
                />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            {isMainPage && (
              <div className='mt-12 flex flex-col gap-5'>
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
            <div className='absolute right-0 bottom-12 left-0 flex justify-center gap-7'>
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
