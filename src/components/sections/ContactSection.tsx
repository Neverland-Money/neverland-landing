'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { StardustEffect } from '@/components/ui/StardustEffect';

export default function ContactSection() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past roughly one viewport height (HeroSection)
      const scrolled = window.scrollY > window.innerHeight * 0.3;
      setShowScrollButton(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Hide button with delay after reaching top
    setTimeout(() => {
      setIsScrolling(false);
      setShowScrollButton(false);
    }, 1000);
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
  };

  return (
    <section
      id='contacts'
      className='relative h-screen w-full overflow-hidden pb-6'
    >
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#2a1a4a] to-[#4a2a6a]' />
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          src='/assets/images/contact/background.webp'
          alt='Starry mountain landscape background'
          fill
          className='object-cover'
          priority
        />
      </div>
      {/* Main content */}
      <div className='relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='flex w-full max-w-[750px] flex-col items-center gap-9 text-center'>
          {/* Text content */}
          <div className='flex w-full flex-col items-center gap-2'>
            <h1 className='font-cinzel w-full text-4xl leading-[110%] font-normal text-white sm:text-5xl lg:text-6xl xl:text-[60px]'>
              READY TO EMBARK ON YOUR DEFI ADVENTURE?
            </h1>
            <p className='font-merriweather w-full max-w-[362px] text-lg leading-[140%] font-normal text-white'>
              Join thousands of users experiencing the magic of Neverland Money
            </p>
          </div>

          {/* CTA Button */}
          <div className='relative'>
            {/* Stardust particles */}
            <StardustEffect />

            <Link
              href='#'
              className='cursor-pointer'
              aria-disabled='true'
              passHref
            >
              <motion.div
                className='group relative mx-auto flex w-[240px] items-center justify-center gap-3 rounded-full px-6 py-4 md:mx-0 md:mr-auto'
                style={{
                  background:
                    'linear-gradient(0deg, #d132e0 -31%, #530ee3 111.63%)',
                  boxShadow: '0px 0px 36px #7200d6',
                }}
                whileTap={{
                  scale: 0.95,
                  y: 4,
                  boxShadow: '0px 0px 18px #7200d6',
                }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 15,
                }}
                onClick={() =>
                  document.dispatchEvent(new CustomEvent('triggerStardust'))
                }
              >
                {/* Disabled overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-inter">
                    Testnet Coming Soon
                  </span>
                </div> */}

                {/* Star 1 */}
                <Image
                  src='/assets/images/hero/star.svg'
                  alt='Star'
                  width={16}
                  height={16}
                  style={{ aspectRatio: '16/16' }}
                />

                {/* Button text */}
                <span className='font-inter text-center text-base leading-[110%] font-medium text-white'>
                  Enter Dapp
                </span>

                {/* Star 2 */}
                <Image
                  src='/assets/images/hero/star.svg'
                  alt='Star'
                  width={16}
                  height={16}
                  style={{ aspectRatio: '16/16' }}
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer navigation */}
      <div className='absolute right-0 bottom-8 left-0 z-10 flex flex-col items-center justify-between gap-6 px-4 sm:px-20 lg:flex-row lg:gap-0'>
        {/* Navigation links */}
        <nav className='hidden flex-wrap items-center justify-center gap-4 sm:gap-8 md:flex'>
          <Link
            href='#about'
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            About
          </Link>
          <Link
            href='#stats'
            onClick={(e) => handleSmoothScroll(e, 'stats')}
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            Stats
          </Link>
          <Link
            href='#faq'
            onClick={(e) => handleSmoothScroll(e, 'faq')}
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            FAQ
          </Link>
        </nav>

        {/* Social links */}
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-8'>
          <Link
            href='https://x.com/neverland_money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            {`{ X }`}
          </Link>
          <Link
            href='https://discord.gg/neverland-money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            {`{ Discord }`}
          </Link>
          <Link
            href='https://t.me/neverland_money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            {`{ Telegram }`}
          </Link>
        </div>

        {/* Legal links */}
        <div className='flex flex-wrap items-center justify-center gap-4 sm:gap-9'>
          <Link
            href='/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            License
          </Link>
          <Link
            href='/'
            target='_blank'
            rel='noopener noreferrer'
            className='font-inter text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            Terms & conditions
          </Link>
        </div>
      </div>
      {/* Bottom shadow overlay */} {/* Mobile: vertical gradient */}
      <div className='pointer-events-none absolute right-0 bottom-0 left-0 h-64 bg-gradient-to-t from-[#040211] to-transparent' />
      {/* Top shadow overlay */} {/* Mobile: vertical gradient */}
      <div className='pointer-events-none absolute top-0 right-0 left-0 h-48 bg-gradient-to-b from-[#040211] to-transparent' />
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className='fixed right-6 bottom-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
        aria-label='Scroll to top'
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollButton && !isScrolling ? 1 : 0,
          scale: showScrollButton && !isScrolling ? 1 : 0,
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 0px 18px #7200d6',
        }}
        whileTap={{
          scale: 0.95,
          boxShadow: '0px 0px 18px #7200d6',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 15,
        }}
        style={{
          background: 'linear-gradient(0deg, #d132e0 -31%, #530ee3 111.63%)',
          boxShadow: '0px 0px 36px #7200d6',
          pointerEvents: showScrollButton && !isScrolling ? 'auto' : 'none',
          scale: showScrollButton && !isScrolling ? 1 : 0,
        }}
      >
        <svg
          className='h-6 w-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M5 15l7-7 7 7'
          />
        </svg>
      </motion.button>
    </section>
  );
}
