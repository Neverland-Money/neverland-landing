'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PartnerCardProps {
  icon: React.ReactNode;
  name: string;
  href: string | undefined;
}

export default function PartnerCard({ icon, name, href }: PartnerCardProps) {
  const [isInteracting, setIsInteracting] = useState(false);
  const [animationsPaused, setAnimationsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isInteracting) {
      setAnimationsPaused(true);
    } else {
      // Restart animations 2 seconds after interaction ends
      timeout = setTimeout(() => {
        setAnimationsPaused(false);
      }, 2000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isInteracting]);

  const handleInteractionStart = () => {
    setIsInteracting(true);
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
  };

  return (
    <div
      className='relative h-[120px] w-[120px] flex-shrink-0 md:h-60 md:w-60'
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      {/* Radiating Lines - Rotating */}
      <motion.div
        className='absolute inset-0 [--transform-origin:60px] md:[--transform-origin:120px]'
        animate={{ rotate: animationsPaused ? 0 : 360 }}
        transition={{
          duration: 8,
          repeat: animationsPaused ? 0 : Infinity,
          ease: 'linear',
        }}
      >
        {/* Top line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Top-right line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(30deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Right line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(60deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Bottom-right line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(90deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Bottom line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(120deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Bottom-left line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(150deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Left line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(180deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Top-left line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(210deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Bottom-left diagonal line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(240deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Bottom vertical line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(270deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Bottom-right diagonal line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(300deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
        {/* Top-right diagonal line */}
        <div
          className='absolute h-40 w-0.5 bg-gradient-to-b from-[#050212] via-[#6f0ec9] to-[#050212] md:h-40 md:w-0.5'
          style={{
            left: '50%',
            top: '0',
            transform: 'translateX(-50%) rotate(330deg)',
            transformOrigin: '50% var(--transform-origin)',
          }}
        />
      </motion.div>

      {/* Central Circle */}
      <Link href={href || '#'} target='_blank' rel='noopener noreferrer'>
        <div className='absolute top-1/2 left-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#530ee3] bg-black shadow-[0px_0px_16px_#7200d6_inset,0px_0px_90px_rgba(114,0,214,0.50)] md:h-[160px] md:w-[160px]'>
          <div
            className='flex h-10 w-10 items-center justify-center md:h-16 md:w-16'
            aria-label={name}
          >
            {icon}
          </div>

          {/* Partner Name Label */}

          <p className='font-merriweather mt-1 text-xs font-medium text-[#d6cfff] md:mt-2 md:text-sm'>
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
