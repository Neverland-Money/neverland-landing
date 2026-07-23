'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { StarIcon } from '@/components/ui/StarIcon';
import { EventNames, trackEvent } from '@/utils/analytics';

export function FloatingEnterAppButton() {
  const handleClick = () => {
    trackEvent(EventNames.BUTTON_CLICK, {
      button_name: 'enter_app',
      button_text: 'App',
      button_location: 'floating_button',
    });
  };

  return (
    <Link
      href='https://app.neverland.money/'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Enter Neverland App'
      className='fixed bottom-6 left-6 z-40 hidden md:block'
      onClick={handleClick}
    >
      <motion.div
        className='flex h-10 items-center gap-2 rounded-full px-3.5 text-white'
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
        }}
      >
        <StarIcon width={18} height={18} />
        <span className='font-cinzel text-sm leading-none font-bold text-white/90'>
          App
        </span>
        <StarIcon width={18} height={18} />
      </motion.div>
    </Link>
  );
}
