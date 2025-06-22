'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible';

// import Link from 'next/link';

interface SecurityCardProps {
  title: string;
  description: string;
  href: string;
  disabled?: boolean;
}

function SecurityCard({
  title,
  description,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  href,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disabled = false,
  glarePosition,
  glareOpacity,
  invertGlare = false,
}: SecurityCardProps & {
  glarePosition?: { x: number; y: number };
  glareOpacity?: number;
  invertGlare?: boolean;
}) {
  return (
    <div
      className='relative flex aspect-[588/394] w-[340px] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-[#402262] p-12 backdrop-blur-sm sm:w-[350px] sm:p-13 lg:w-[480px] lg:p-28 xl:w-[588px]'
      style={
        glarePosition && glareOpacity
          ? ({
              '--glare-x-position': `${(invertGlare ? 1 - glarePosition.x : glarePosition.x) * 100}%`,
              '--glare-y-position': `${glarePosition.y * 100}%`,
              '--glare-opacity': glareOpacity,
            } as React.CSSProperties)
          : undefined
      }
    >
      {/* Security background image */}
      <div
        className='absolute inset-0 z-0 overflow-hidden bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(/assets/images/security/security-frame.webp)',
        }}
      >
        {/* Dynamic Glare */}
        {glarePosition && glareOpacity && (
          <div
            className='pointer-events-none absolute z-10 rounded-2xl transition-all duration-500 ease-out'
            style={{
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: `radial-gradient(circle at var(--glare-x-position) var(--glare-y-position), rgba(255, 255, 255, var(--glare-opacity)) 0%, ${invertGlare ? 'rgba(0, 217, 255, 0.05)' : 'rgba(190, 122, 246, 0.05)'} 40%, transparent 80%)`,
              mixBlendMode: 'overlay',
            }}
          />
        )}
      </div>
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 lg:gap-8'>
        <div className='flex w-full flex-col items-center gap-2'>
          <h3 className='font-cinzel w-full text-center text-lg leading-[110%] font-normal text-white uppercase sm:text-xl lg:text-[26px]'>
            {title}
          </h3>
          <p className='font-merriweather w-full text-center text-xs leading-[140%] text-white/60 sm:text-sm lg:text-base'>
            {description}
          </p>
        </div>
        {/* <Link
          href={disabled ? '#' : href}
          className={`flex h-4 w-[100px] items-center justify-center transition-all duration-300 hover:scale-110 hover:brightness-125 sm:h-5 sm:w-[140px] ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          onClick={disabled ? (e) => e.preventDefault() : undefined}
        >
          <svg
            width='140'
            height='20'
            viewBox='0 0 140 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-full w-full'
          >
            <path
              d='M130.244 5.35105C130.259 5.49043 130.28 5.62908 130.307 5.76681C130.334 5.90454 130.367 6.0408 130.405 6.17578C130.444 6.31076 130.488 6.44392 130.538 6.57505C130.588 6.70617 130.643 6.83511 130.703 6.96165C130.764 7.0882 130.83 7.212 130.901 7.33285C130.972 7.4539 131.048 7.57165 131.13 7.68609C131.211 7.8007 131.296 7.91147 131.387 8.01877C131.477 8.12606 131.572 8.22931 131.672 8.32853C131.771 8.42775 131.874 8.52256 131.981 8.61317C132.088 8.70359 132.199 8.78942 132.314 8.87047C132.428 8.95154 132.546 9.02784 132.667 9.09881C132.788 9.16997 132.912 9.23599 133.038 9.29669C133.165 9.35722 133.294 9.41241 133.425 9.4623C133.556 9.51201 133.689 9.5562 133.824 9.59472C133.959 9.63323 134.095 9.66588 134.233 9.69284C134.371 9.71979 134.509 9.74089 134.649 9.75611C136.001 9.90423 137.747 10 140 10C137.747 10 136.001 10.0958 134.649 10.244C134.509 10.2592 134.371 10.2802 134.233 10.3072C134.095 10.3341 133.959 10.3671 133.824 10.4055C133.689 10.4439 133.556 10.488 133.425 10.5378C133.294 10.5877 133.165 10.6429 133.038 10.7036C132.912 10.764 132.788 10.83 132.667 10.9013C132.546 10.9723 132.428 11.0485 132.314 11.1296C132.199 11.2107 132.088 11.2965 131.981 11.3869C131.874 11.4775 131.771 11.5723 131.672 11.6715C131.572 11.7708 131.477 11.874 131.387 11.9812C131.296 12.0886 131.211 12.1993 131.13 12.314C131.048 12.4285 130.972 12.5461 130.901 12.6672C130.83 12.7881 130.764 12.9118 130.703 13.0384C130.643 13.165 130.587 13.2939 130.538 13.425C130.488 13.5561 130.444 13.6893 130.405 13.8243C130.367 13.9593 130.334 14.0955 130.307 14.2333C130.28 14.371 130.259 14.5096 130.244 14.649C130.096 16.0012 130 17.7467 130 20C130 17.7468 129.904 16.0012 129.756 14.649C129.741 14.5096 129.72 14.371 129.693 14.2333C129.666 14.0955 129.633 13.9593 129.595 13.8243C129.556 13.6893 129.512 13.5561 129.462 13.425C129.412 13.2939 129.357 13.165 129.296 13.0384C129.236 12.9118 129.17 12.7881 129.099 12.6672C129.028 12.5461 128.952 12.4285 128.87 12.314C128.789 12.1993 128.704 12.0886 128.613 11.9812C128.523 11.874 128.428 11.7708 128.328 11.6715C128.229 11.5723 128.126 11.4775 128.019 11.3869C127.911 11.2965 127.801 11.2107 127.686 11.1296C127.572 11.0485 127.454 10.9723 127.333 10.9013C127.212 10.83 127.088 10.764 126.962 10.7036C126.835 10.6429 126.706 10.5877 126.575 10.5378C126.444 10.488 126.311 10.444 126.176 10.4055C126.041 10.3671 125.905 10.3341 125.767 10.3072C125.629 10.2802 125.49 10.2592 125.351 10.244C123.999 10.0958 122.253 10 120 10C122.253 10 123.999 9.90423 125.351 9.75611C125.49 9.74089 125.629 9.71979 125.767 9.69284C125.905 9.66588 126.041 9.63323 126.176 9.59472C126.311 9.5562 126.444 9.51201 126.575 9.4623C126.706 9.41241 126.835 9.35722 126.962 9.29651C127.088 9.23599 127.212 9.16997 127.333 9.09881C127.454 9.02784 127.572 8.95154 127.686 8.87047C127.801 8.78942 127.911 8.70359 128.019 8.61317C128.126 8.52256 128.229 8.42775 128.328 8.32853C128.428 8.22931 128.523 8.12606 128.613 8.01877C128.704 7.91147 128.789 7.8007 128.87 7.68609C128.952 7.57165 129.028 7.4539 129.099 7.33285C129.17 7.212 129.236 7.0882 129.296 6.96165C129.357 6.83511 129.412 6.70617 129.462 6.57505C129.512 6.44373 129.556 6.31076 129.595 6.17578C129.633 6.0408 129.666 5.90454 129.693 5.76681C129.72 5.62908 129.741 5.49043 129.756 5.35105C129.904 3.99884 130 2.25342 130 0C130 2.25324 130.096 3.99884 130.244 5.35105Z'
              fill='white'
            />
            <text
              fill='white'
              xmlSpace='preserve'
              style={{ whiteSpace: 'pre' }}
              fontFamily='Merriweather'
              fontSize='16'
              letterSpacing='0em'
            >
              <tspan x='24.4141' y='15.688'>
                Learn More
              </tspan>
            </text>
            <path
              d='M10.244 5.35105C10.2592 5.49043 10.2803 5.62908 10.3072 5.76681C10.3341 5.90454 10.3668 6.0408 10.4054 6.17578C10.4438 6.31076 10.4881 6.44392 10.5377 6.57505C10.5876 6.70617 10.6428 6.83511 10.7033 6.96165C10.764 7.0882 10.8301 7.212 10.901 7.33285C10.9722 7.4539 11.0483 7.57165 11.1296 7.68609C11.2106 7.8007 11.2965 7.91147 11.3869 8.01877C11.4773 8.12606 11.5723 8.22931 11.6716 8.32853C11.7708 8.42775 11.874 8.52256 11.9813 8.61317C12.0884 8.70359 12.1993 8.78942 12.3138 8.87047C12.4284 8.95154 12.5461 9.02784 12.667 9.09881C12.7881 9.16997 12.9119 9.23599 13.0384 9.29669C13.1649 9.35722 13.2937 9.41241 13.425 9.4623C13.5561 9.51201 13.6892 9.5562 13.8242 9.59472C13.959 9.63323 14.0955 9.66588 14.2333 9.69284C14.3709 9.71979 14.5094 9.74089 14.649 9.75611C16.0012 9.90423 17.7467 10 20 10C17.7467 10 16.0012 10.0958 14.649 10.244C14.5094 10.2592 14.3709 10.2802 14.2333 10.3072C14.0955 10.3341 13.959 10.3671 13.8242 10.4055C13.6892 10.4439 13.5561 10.488 13.425 10.5378C13.2947 10.5877 13.1649 10.6429 13.0384 10.7036C12.9119 10.764 12.7881 10.83 12.667 10.9013C12.5461 10.9723 12.4284 11.0485 12.3138 11.1296C12.1993 11.2107 12.0884 11.2965 11.9813 11.3869C11.874 11.4775 11.7708 11.5723 11.6716 11.6715C11.5723 11.7708 11.4773 11.874 11.3869 11.9812C11.2965 12.0886 11.2106 12.1993 11.1296 12.314C11.0483 12.4285 10.9722 12.5461 10.901 12.6672C10.8299 12.7881 10.764 12.9118 10.7033 13.0384C10.6428 13.165 10.5874 13.2939 10.5377 13.425C10.4881 13.5561 10.4438 13.6893 10.4054 13.8243C10.3668 13.9593 10.3341 14.0955 10.3072 14.2333C10.2803 14.371 10.2592 14.5096 10.244 14.649C10.0958 16.0012 10 17.7467 10 20C10 17.7468 9.90412 16.0012 9.75607 14.649C9.74086 14.5096 9.71979 14.371 9.69284 14.2333C9.6659 14.0955 9.63309 13.9593 9.59454 13.8243C9.55599 13.6893 9.51198 13.5561 9.4621 13.425C9.41234 13.2939 9.35726 13.165 9.29644 13.0384C9.23575 12.9118 9.16999 12.7881 9.09876 12.6672C9.02767 12.5461 8.95151 12.4285 8.87042 12.314C8.78945 12.1993 8.70356 12.0886 8.61312 11.9812C8.52256 11.874 8.42772 11.7708 8.32849 11.6715C8.22925 11.5723 8.12601 11.4775 8.01878 11.3869C7.9114 11.2965 7.80057 11.2107 7.68613 11.1296C7.57168 11.0485 7.45391 10.9723 7.3328 10.9013C7.21196 10.83 7.08818 10.764 6.9616 10.7036C6.83515 10.6429 6.70617 10.5877 6.57506 10.5378C6.44368 10.488 6.3107 10.444 6.17572 10.4055C6.04074 10.3671 5.90455 10.3341 5.76677 10.3072C5.62912 10.2802 5.49041 10.2592 5.35089 10.244C3.99867 10.0958 2.25325 10 0 10C2.25325 10 3.99867 9.90423 5.35089 9.75611C5.49041 9.74089 5.62912 9.71979 5.76677 9.69284C5.90455 9.66588 6.04074 9.63323 6.17572 9.59472C6.3107 9.5562 6.44368 9.51201 6.57506 9.4623C6.70617 9.41241 6.83515 9.35722 6.9616 9.29651C7.08818 9.23599 7.21196 9.16997 7.3328 9.09881C7.45391 9.02784 7.57168 8.95154 7.68613 8.87047C7.80057 8.78942 7.9114 8.70359 8.01878 8.61317C8.12601 8.52256 8.22925 8.42775 8.32849 8.32853C8.42772 8.22931 8.52256 8.12606 8.61299 8.01877C8.70356 7.91147 8.78945 7.8007 8.87042 7.68609C8.95151 7.57165 9.02767 7.4539 9.09876 7.33285C9.16999 7.212 9.23575 7.0882 9.29644 6.96165C9.35726 6.83511 9.41234 6.70617 9.4621 6.57505C9.51198 6.44373 9.55599 6.31076 9.59454 6.17578C9.63309 6.0408 9.6659 5.90454 9.69284 5.76681C9.71979 5.62908 9.74086 5.49043 9.75607 5.35105C9.90412 3.99884 10 2.25342 10 0C10 2.25324 10.0958 3.99884 10.244 5.35105Z'
              fill='white'
            />
          </svg>
        </Link> */}
      </div>
    </div>
  );
}

export default function SecuritySection() {
  // Track scroll position for glare effect
  const sectionRef = useRef<HTMLElement>(null);
  const scrollYRef = useRef(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0.2, y: 0.2 });
  const [glareOpacity, setGlareOpacity] = useState(0);

  // Update glare effect based on current scroll position
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
      setGlareOpacity(0.2 + Math.sin(scrollProgress * Math.PI) * 0.1); // Varies between 0.4 and 0.9
    }
  }, [sectionTop, sectionHeight]);

  // Calculate section position once on mount and set up scroll listener
  useEffect(() => {
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

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, [updateGlareEffect]);

  return (
    <section
      ref={sectionRef}
      className='mx-auto flex w-full max-w-[1280px] flex-col items-center gap-16 px-10 py-[100px] md:py-[120px] lg:gap-[100px]'
    >
      <FadeInWhenVisible delay={0} y={20}>
        <div className='flex w-full max-w-[539px] flex-col items-center gap-3 px-2'>
          <h2 className='font-cinzel w-full text-center text-4xl leading-[110%] font-normal text-white uppercase lg:text-[60px]'>
            Lost Boys&apos; Safeguard
          </h2>
          <p className='font-merriweather w-full max-w-[326px] text-center text-base leading-[140%] text-white lg:text-lg'>
            Our smart contracts have undergone rigorous audits to ensure the
            highest level of security
          </p>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0} y={20}>
        <div className='flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12 xl:gap-16'>
          <SecurityCard
            title='AUDITS'
            description='Our smart contracts are audited by top-tier security firms to maintain platform integrity and ensure user confidence.'
            href='/audits'
            disabled={true}
            glarePosition={glarePosition}
            glareOpacity={glareOpacity}
          />
          <SecurityCard
            title='BUG BOUNTY PROGRAM'
            description='Help us maintain the highest security standards. Report vulnerabilities and earn rewards for responsible disclosure.'
            href='/bounty'
            disabled={true}
            glarePosition={glarePosition}
            glareOpacity={glareOpacity}
            invertGlare={true}
          />
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
