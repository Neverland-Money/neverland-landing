'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useScrollContext } from '@/components/SmoothScroll';
import { trackEvent, EventNames } from '@/utils/analytics';

export default function ScrollToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const { lenis } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.3;
      setShowScrollButton(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setIsScrolling(true);
    // Debug log to check if lenis is available
    console.log('Lenis instance:', lenis);
    if (lenis) {
      // Lenis uses scrollTo with a target element/position and optional config
      try {
        // First parameter is target (0 for top), second is options
        lenis.scrollTo('top', {
          duration: 1.5, // Match to your Lenis configuration duration
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Same easing as in SmoothScroll
        });
        console.log('Used lenis.scrollTo with target "top"');
      } catch (error) {
        // If the above syntax doesn't work, try alternative APIs
        console.error('Error with scrollTo:', error);
        try {
          // Some Lenis versions use 0 instead of 'top'
          lenis.scrollTo(0, { duration: 1.5 });
          console.log('Used lenis.scrollTo(0)');
        } catch (error2) {
          console.error('Error with alternate scrollTo:', error2);
          // Final fallback
          window.scrollTo({ top: 0, behavior: 'smooth' });
          console.log('Fell back to native scrolling');
        }
      }
    } else {
      // Fallback to native scrolling if lenis is not available
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      console.log('No Lenis instance, used native scrolling');
    }

    // Track scroll to top button click
    trackEvent(EventNames.BUTTON_CLICK, {
      button_name: 'scroll_to_top',
      location: 'floating_button',
    });

    // Hide button with delay after reaching top
    setTimeout(() => {
      setIsScrolling(false);
      setShowScrollButton(false);
    }, 1200);
  };

  return (
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
  );
}
