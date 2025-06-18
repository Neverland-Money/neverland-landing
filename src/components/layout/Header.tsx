'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
    }
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className='absolute top-0 right-0 left-0 z-50 bg-transparent'>
      <nav className='mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 xl:px-0'>
        {/* Logo Section - Left */}
        <Link href='/'>
          <div className='z-999 flex items-center gap-2'>
            <div className='flex items-center gap-1'>
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
              href='#contacts'
              onClick={(e) => handleSmoothScroll(e, 'contacts')}
              className='font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300'
            >
              Contacts
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
            className='flex items-center justify-center md:hidden'
            onClick={toggleMobileMenu}
          >
            <Image
              loading='eager'
              src='/assets/images/header/mobile-menu.svg'
              alt='Open Menu'
              width={24}
              height={24}
            />
          </button>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 z-50 overflow-y-auto bg-[rgba(5,2,18,0.40)] backdrop-blur-[17px] backdrop-filter md:hidden'>
          <div className='flex h-full w-full flex-col items-start justify-start px-4'>
            {/* Top row with Logo and Close button */}
            <div className='mb-16 flex h-[80px] w-full items-center justify-between'>
              {/* Close button */}
              <button
                className='absolute top-8 right-5'
                onClick={toggleMobileMenu}
              >
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
              <div className='mt-12 flex flex-col gap-5'>
                <Link
                  href='#about'
                  onClick={(e) => handleSmoothScroll(e, 'about')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  ABOUT
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
                  href='#contacts'
                  onClick={(e) => handleSmoothScroll(e, 'contacts')}
                  className='font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400'
                >
                  CONTACTS
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
