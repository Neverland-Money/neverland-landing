'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible';

export default function FeaturesSection() {
  // Track scroll position to update glare effect
  const sectionRef = useRef<HTMLElement>(null);
  const scrollYRef = useRef(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0.2, y: 0.2 });
  const [glareOpacity, setGlareOpacity] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Calculate glare size based on screen width
  const glareOpacityFactor = useCallback(() => {
    // Default to larger size for desktop
    let opacityFactor = 0.5; // 200% of card size

    // Adjust based on screen width breakpoints
    if (windowWidth > 0) {
      if (windowWidth < 640) {
        // Mobile - increased glow effect
        opacityFactor = 0.25;
      } else if (windowWidth < 1024) {
        // Tablet
        opacityFactor = 0.2;
      }
    }

    return opacityFactor;
  }, [windowWidth]);

  // We'll use this function to update the glare based on current scroll position
  const updateGlareEffect = useCallback(() => {
    if (sectionTop && sectionHeight) {
      const currentScrollY = scrollYRef.current;

      // Calculate how far through the section we've scrolled (0 to 1)
      const scrollProgress = Math.max(
        0,
        Math.min(
          1,
          (currentScrollY - sectionTop + window.innerHeight / 2) /
            (sectionHeight + window.innerHeight / 2),
        ),
      );

      // Update glare position based on scroll progress
      setGlarePosition({
        x: 0.3 + scrollProgress * 0.4, // Move horizontally from 0.3 to 0.7
        y: 0.2 + scrollProgress * 0.6, // Move vertically from 0.2 to 0.8
      });

      // Pulse the glare opacity based on scroll
      setGlareOpacity(
        0.4 + Math.sin(scrollProgress * Math.PI) * glareOpacityFactor(),
      ); // Varies between 0.4 and 0.9
    }
  }, [sectionTop, sectionHeight, glareOpacityFactor]);

  // Calculate section position once on mount and set up scroll listener
  useEffect(() => {
    // Initialize window width
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    // Measure the section position only once on mount
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setSectionTop(rect.top + window.scrollY);
      setSectionHeight(rect.height);
    }

    // Initialize scroll position
    if (typeof window !== 'undefined') {
      scrollYRef.current = window.scrollY;
    }

    // Initial update of glare effect
    updateGlareEffect();

    // Add scroll listener
    const handleScrollEvent = () => {
      if (typeof window !== 'undefined') {
        scrollYRef.current = window.scrollY;
        // Request animation frame to throttle updates
        requestAnimationFrame(updateGlareEffect);
      }
    };

    // Add resize listener
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateGlareEffect]); // Add updateGlareEffect as dependency

  // No longer need this effect as we're updating glare directly in the scroll handler

  return (
    <section
      ref={sectionRef}
      className='relative min-h-screen w-full overflow-hidden'
    >
      {/* Background Image with Gradients */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background: `
            linear-gradient(0deg, rgba(0, 0, 0, 0.00) 60%, #050212 100%), 
            linear-gradient(0deg, #050212 0%, rgba(5, 2, 18, 0.00) 15%), 
            url('/assets/images/features/background.webp') lightgray 50% / cover no-repeat
            `,
        }}
      />

      {/* Content */}
      <div className='relative z-10 flex min-h-screen w-full flex-col items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36'>
        {/* Header Section */}
        <FadeInWhenVisible delay={0} y={20}>
          <div className='mb-16 flex w-[329px] max-w-sm flex-col items-center gap-3 text-center lg:mb-25'>
            <h2 className='font-cinzel text-4xl leading-[110%] font-normal text-white uppercase sm:text-5xl lg:text-6xl'>
              Key Features
            </h2>
            <p className='font-merriweather text-base leading-[140%] text-white sm:text-lg'>
              Discover the magical features that make Neverland the perfect DeFi
              experience.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Feature Cards */}
        <FadeInWhenVisible delay={0} y={20}>
          <div className='flex w-full max-w-6xl flex-col items-center gap-5 lg:flex-row lg:justify-center'>
            {/* Capital Efficiency Card with dynamic glare */}
            <div
              className='group relative flex h-[250px] w-[375px] flex-col items-center gap-2 rounded-[16px] border border-white/20 px-[45px] py-[75px] backdrop-blur-[6px] transition-all duration-300 hover:border-white/30 lg:h-[370px] lg:w-[370px] lg:py-[122px]'
              style={
                {
                  '--glare-x-position': `${glarePosition.x * 100}%`,
                  '--glare-y-position': `${glarePosition.y * 100}%`,
                  '--glare-opacity': glareOpacity,
                } as React.CSSProperties
              }
            >
              {/* Card Background Frame */}
              <div className='absolute inset-0 overflow-hidden rounded-[16px]'>
                {/* Dynamic Glare */}
                <div
                  className='pointer-events-none absolute z-10 rounded-[16px] transition-all duration-500 ease-out'
                  style={{
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle at var(--glare-x-position) var(--glare-y-position), rgba(255, 255, 255, var(--glare-opacity)) 0%, transparent 60%)`,
                    mixBlendMode: 'soft-light',
                  }}
                />
                {/* Mobile Frame */}
                <Image
                  src='/assets/images/features/frame-wide.webp'
                  alt='Feature card frame'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                  className='object-cover lg:hidden'
                />
                {/* Desktop Frame */}
                <Image
                  src='/assets/images/features/frame.webp'
                  alt='Feature card frame'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                  className='hidden object-cover lg:block'
                />
              </div>

              {/* Content */}
              <div className='relative z-10 flex flex-col items-center gap-[8px] text-center'>
                <h3 className='font-cinzel text-xl leading-[110%] font-normal text-white uppercase sm:text-2xl lg:text-[24px]'>
                  Capital Efficiency
                </h3>
                <p className='font-merriweather max-w-[280px] text-sm leading-[140%] text-white/80 sm:text-base'>
                  Advanced automated looping strategies ensure users leverage
                  low-utilization pools to maximize earnings.
                </p>
              </div>
            </div>

            {/* Self-Repaying Loans Card with dynamic glare */}
            <div
              className='group relative flex h-[250px] w-[375px] flex-col items-center gap-2 rounded-[16px] border border-white/20 px-[45px] py-[75px] backdrop-blur-[6px] transition-all duration-300 hover:border-white/30 lg:h-[370px] lg:w-[370px] lg:py-[122px]'
              style={
                {
                  '--glare-x-position': `${(1 - glarePosition.x) * 100}%`, // Inverse effect for this card
                  '--glare-y-position': `${glarePosition.y * 100}%`,
                  '--glare-opacity': glareOpacity,
                } as React.CSSProperties
              }
            >
              {/* Card Background Frame */}
              <div className='absolute inset-0 overflow-hidden rounded-[16px]'>
                {/* Dynamic Glare */}
                <div
                  className='pointer-events-none absolute z-10 rounded-[16px] transition-all duration-500 ease-out'
                  style={{
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle at var(--glare-x-position) var(--glare-y-position), rgba(255, 255, 255, var(--glare-opacity)) 0%, transparent 60%)`,
                    mixBlendMode: 'soft-light',
                  }}
                />
                {/* Mobile Frame */}
                <Image
                  src='/assets/images/features/frame-wide.webp'
                  alt='Feature card frame'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                  className='scale-x-[-1] object-cover lg:hidden'
                />
                {/* Desktop Frame */}
                <Image
                  src='/assets/images/features/frame.webp'
                  alt='Feature card frame'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  fill
                  className='hidden scale-x-[-1] object-cover lg:block'
                />
              </div>

              {/* Content */}
              <div className='relative z-10 flex flex-col items-center gap-[8px] text-center'>
                <h3 className='font-cinzel text-xl leading-[110%] font-normal text-white uppercase sm:text-2xl lg:text-[24px]'>
                  Self-Repaying Loans
                </h3>
                <p className='font-merriweather max-w-[299px] text-sm leading-[140%] text-white/80 sm:text-base'>
                  Set-and-forget feature to automatically leverage platform
                  incentives into loan repayments, providing a carefree, magical
                  experience.
                </p>
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
