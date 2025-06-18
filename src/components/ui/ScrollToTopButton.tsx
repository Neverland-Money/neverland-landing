'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past roughly one viewport height
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

  return (
    <motion.button
      onClick={scrollToTop}
      className='fixed right-6 bottom-6 z-50000 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
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
