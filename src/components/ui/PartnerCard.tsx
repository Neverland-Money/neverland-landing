'use client';

import { motion } from 'framer-motion';

interface PartnerCardProps {
  icon: React.ReactNode;
  name: string;
}

export default function PartnerCard({ icon, name }: PartnerCardProps) {
  return (
    <div className='relative h-[120px] w-[120px] flex-shrink-0 md:h-60 md:w-60'>
      {/* Radiating Lines - Rotating */}
      <motion.div
        className='absolute inset-0 [--transform-origin:60px] md:[--transform-origin:120px]'
        animate={{ rotate: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
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
      <div className='absolute top-1/2 left-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#530ee3] bg-black shadow-[0px_0px_16px_#7200d6_inset,0px_0px_90px_rgba(114,0,214,0.50)] md:h-[160px] md:w-[160px]'>
        <div
          className='w-0.55 flex h-15 items-center justify-center md:h-20 md:w-20'
          aria-label={name}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
