'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { StardustEffect } from '@/components/ui/StardustEffect';
import { StarIcon } from '@/components/ui/StarIcon';
import { trackEvent, EventNames } from '@/utils/analytics';

export default function ContactSection() {
  return (
    <section
      id='contact'
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
            <p className='font-merriweather w-full max-w-[750px] text-lg leading-[140%] font-normal text-white'>
              Join thousands of users experiencing the magic of Neverland
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
      <div className='absolute bottom-6 z-10 flex h-10 w-full flex-col justify-evenly gap-6 px-4 sm:px-20 lg:h-10 lg:flex-row'>
        {/* Legal links */}
        <div className='flex items-center justify-center gap-4 sm:gap-9'>
          <Link
            href='https://whitepaper.neverland.money'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-sm leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70 lg:text-base'
          >
            <span className='hidden lg:inline'>Whitepaper</span>
            <span className='lg:hidden'>Docs</span>
          </Link>
          <Link
            href='/privacy-policy'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-sm leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70 lg:text-base'
          >
            <span className='hidden lg:inline'>Privacy Policy</span>
            <span className='lg:hidden'>Privacy</span>
          </Link>
          <Link
            href='/terms-of-service'
            target='_blank'
            rel='noopener noreferrer'
            className='font-merriweather text-sm leading-[110%] font-normal text-white transition-opacity duration-300 hover:opacity-70 lg:text-base'
          >
            <span className='hidden lg:inline'>Terms of Service</span>
            <span className='lg:hidden'>Terms</span>
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
