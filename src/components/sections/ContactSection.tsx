'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { StardustEffect } from '@/components/ui/StardustEffect';
import { StarIcon } from '@/components/ui/StarIcon';
import { trackEvent, EventNames } from '@/utils/analytics';

export default function ContactSection() {
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

      // Track footer navigation click
      trackEvent(EventNames.BUTTON_CLICK, {
        menu_item: targetId,
        location: 'footer_navigation',
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

            <motion.div
              className='group relative mx-auto flex w-[240px] cursor-pointer items-center justify-center gap-3 rounded-full px-6 py-4 md:mx-0 md:mr-auto'
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
              onClick={() => {
                document.dispatchEvent(new CustomEvent('triggerStardust'));
                trackEvent(EventNames.BUTTON_CLICK, {
                  button_name: 'enter_dapp',
                  button_text: 'Soon™',
                  location: 'footer',
                });
              }}
            >
              {/* Disabled overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-inter">
                    Testnet Coming Soon
                  </span>
                </div> */}

              {/* Star 1 */}
              <StarIcon />

              {/* Button text */}
              <span className='font-inter text-center text-base leading-[110%] font-medium text-white'>
                Soon™
              </span>

              {/* Star 2 */}
              <StarIcon />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Footer navigation */}
      <div className='absolute right-0 bottom-7 left-0 z-10 flex flex-col items-center justify-between gap-6 px-4 sm:px-20 lg:flex-row lg:gap-0'>
        {/* Navigation links */}
        <nav className='hidden flex-wrap items-center justify-center gap-4 sm:gap-8 md:flex'>
          <Link
            href='#about'
            onClick={(e) => handleSmoothScroll(e, 'about')}
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            About
          </Link>
          <Link
            href='#stats'
            onClick={(e) => handleSmoothScroll(e, 'stats')}
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            Stats
          </Link>
          <Link
            href='#faq'
            onClick={(e) => handleSmoothScroll(e, 'faq')}
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            FAQ
          </Link>
        </nav>

        {/* Social links */}
        <div className='mb-2.5 flex flex-wrap items-center justify-center gap-4 sm:gap-8'>
          <Link
            href='https://x.com/neverland_money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
            onClick={() => {
              trackEvent(EventNames.EXTERNAL_LINK_CLICK, {
                link_name: 'x',
                location: 'footer_social',
                url: 'https://x.com/neverland_money',
              });
            }}
          >
            {`{ X }`}
          </Link>
          <Link
            href='https://discord.gg/neverland-money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
            onClick={() => {
              trackEvent(EventNames.EXTERNAL_LINK_CLICK, {
                link_name: 'discord',
                location: 'footer_social',
                url: 'https://discord.gg/neverland-money',
              });
            }}
          >
            {`{ Discord }`}
          </Link>
          <Link
            href='https://t.me/neverland_money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
            onClick={() => {
              trackEvent(EventNames.EXTERNAL_LINK_CLICK, {
                link_name: 'telegram',
                location: 'footer_social',
                url: 'https://t.me/neverland_money',
              });
            }}
          >
            {`{ Telegram }`}
          </Link>
          <Link
            href='https://news.neverland.money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
            onClick={() => {
              trackEvent(EventNames.EXTERNAL_LINK_CLICK, {
                link_name: 'news',
                location: 'footer_social',
                url: 'https://news.neverland.money',
              });
            }}
          >
            {`{ Medium }`}
          </Link>
        </div>

        {/* Legal links */}
        <div className='flex flex-wrap items-center justify-center gap-4 pb-1.5 sm:gap-9 lg:pb-0'>
          <Link
            href='/privacy-policy'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            Privacy Policy
          </Link>
          <Link
            href='/terms-of-service'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-base leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70'
          >
            Terms of Service
          </Link>
        </div>
      </div>
      {/* Bottom shadow overlay */} {/* Mobile: vertical gradient */}
      <div className='pointer-events-none absolute right-0 bottom-0 left-0 h-64 bg-gradient-to-t from-[#040211] to-transparent' />
      {/* Top shadow overlay */} {/* Mobile: vertical gradient */}
      <div className='pointer-events-none absolute top-0 right-0 left-0 h-48 bg-gradient-to-b from-[#040211] to-transparent' />
      {/* Scroll to top button */}
    </section>
  );
}
