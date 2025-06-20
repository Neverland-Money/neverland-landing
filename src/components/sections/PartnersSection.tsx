'use client';

import {
  motion,
  useMotionValue,
  animate,
  AnimationPlaybackControls,
} from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

import PartnerCard from '@/components/ui/PartnerCard';
import { StarIcon } from '@/components/ui/StarIcon';

// Partner logo SVG components
const PartnerLogos = {
  // Aave
  AaveLogo: () => (
    <div className='flex h-16 w-16 items-center justify-center text-3xl font-bold text-white lg:h-24 lg:w-24'>
      <Image
        src='/assets/images/partners/aave.svg'
        alt='Aave'
        width={120}
        height={120}
        className='object-cover'
        priority
      />
    </div>
  ),
  // Solidly
  SolidlyLogo: () => (
    <div className='flex h-16 w-16 items-center justify-center text-3xl font-bold text-white lg:h-24 lg:w-24'>
      <Image
        src='/assets/images/partners/solidly.svg'
        alt='Solidly'
        width={120}
        height={120}
        className='object-cover'
        priority
      />
    </div>
  ),
  // Chainlink
  ChainlinkLogo: () => (
    <div className='flex h-16 w-16 items-center justify-center text-3xl font-bold text-white lg:h-24 lg:w-24'>
      <Image
        src='/assets/images/partners/chainlink.svg'
        alt='Chainlink'
        width={120}
        height={120}
        className='object-cover'
        priority
      />
    </div>
  ),
  // Monad
  MonadLogo: () => (
    <div className='flex h-16 w-16 items-center justify-center text-3xl font-bold text-white lg:h-24 lg:w-24'>
      <Image
        src='/assets/images/partners/monad.svg'
        alt='Monad'
        width={120}
        height={120}
        className='object-cover'
        priority
      />
    </div>
  ),
  // Aerodrome
  AerodromeLogo: () => (
    <div className='flex h-16 w-16 items-center justify-center text-3xl font-bold text-white lg:h-24 lg:w-24'>
      <Image
        src='/assets/images/partners/aerodrome.svg'
        alt='Aerodrome'
        width={120}
        height={120}
        className='object-cover'
        priority
      />
    </div>
  ),
};

export default function PartnersSection() {
  const partners = [
    { name: 'Monad', logo: <PartnerLogos.MonadLogo /> },
    { name: 'Solidly', logo: <PartnerLogos.SolidlyLogo /> },
    { name: 'Chainlink', logo: <PartnerLogos.ChainlinkLogo /> },
    { name: 'Aave', logo: <PartnerLogos.AaveLogo /> },
    { name: 'Aerodrome', logo: <PartnerLogos.AerodromeLogo /> },

    { name: 'Monad', logo: <PartnerLogos.MonadLogo /> },
    { name: 'Solidly', logo: <PartnerLogos.SolidlyLogo /> },
    { name: 'Chainlink', logo: <PartnerLogos.ChainlinkLogo /> },
    { name: 'Aave', logo: <PartnerLogos.AaveLogo /> },
    { name: 'Aerodrome', logo: <PartnerLogos.AerodromeLogo /> },

    { name: 'Monad', logo: <PartnerLogos.MonadLogo /> },
    { name: 'Solidly', logo: <PartnerLogos.SolidlyLogo /> },
    { name: 'Chainlink', logo: <PartnerLogos.ChainlinkLogo /> },
    { name: 'Aave', logo: <PartnerLogos.AaveLogo /> },
    { name: 'Aerodrome', logo: <PartnerLogos.AerodromeLogo /> },

    { name: 'Monad', logo: <PartnerLogos.MonadLogo /> },
    { name: 'Solidly', logo: <PartnerLogos.SolidlyLogo /> },
    { name: 'Chainlink', logo: <PartnerLogos.ChainlinkLogo /> },
    { name: 'Aave', logo: <PartnerLogos.AaveLogo /> },
    { name: 'Aerodrome', logo: <PartnerLogos.AerodromeLogo /> },
  ];

  const [movementDistance, setMovementDistance] = useState('-400px');
  const x = useMotionValue(0);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;

      // Calculate exact pixel movement based on card + gap dimensions
      const cardWidth = mobile ? 120 : 240;
      const gapSize = mobile ? 80 : 20; // gap-20 on mobile, gap-5 on desktop
      const partnersCount = partners.length;

      // Exact width of one complete set (includes all cards + gaps between them)
      const oneSetWidth =
        partnersCount * cardWidth + (partnersCount - 1) * gapSize;

      setMovementDistance(`-${oneSetWidth}px`);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [partners.length]);

  // Start initial animation
  useEffect(() => {
    if (movementDistance !== '-400px') {
      animationRef.current = animate(x, parseFloat(movementDistance), {
        duration: 120,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }
    };
  }, [movementDistance, x]);

  const handleInteractionStart = () => {
    // Clear any pending resume timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Immediately capture position and stop animation
    const currentPosition = x.get();
    if (animationRef.current) {
      animationRef.current.stop();
    }
    x.set(currentPosition);
  };

  const handleInteractionEnd = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Resume animation after 2 seconds
    timeoutRef.current = setTimeout(() => {
      if (movementDistance !== '-400px') {
        const currentX = x.get();
        const targetX = parseFloat(movementDistance);
        const remainingDistance = targetX - currentX;
        const fullDistance = Math.abs(targetX);
        const remainingProgress = Math.abs(remainingDistance) / fullDistance;
        const remainingDuration = remainingProgress * 120;

        animationRef.current = animate(x, targetX, {
          duration: remainingDuration,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        });
      }
    }, 500);
  };

  return (
    <section id='partners' className='w-full py-[100px]'>
      <div className='mx-auto flex max-w-[1540px] flex-col items-center gap-4 px-[50px] md:gap-24'>
        {/* Header Section */}
        <div className='flex w-full max-w-[641px] flex-col items-center gap-3'>
          <h2 className='font-cinzel text-center text-[44px] leading-[110%] font-normal text-white uppercase'>
            <span className='relative inline-block'>
              O
              <div className='absolute top-[47%] left-[51%] -translate-x-1/2 -translate-y-1/2 transform'>
                <StarIcon />
              </div>
            </span>
            ur Foundations
          </h2>
          <p className='font-merriweather w-full max-w-[493px] text-center text-lg leading-[140%] font-normal text-white'>
            We’re building Neverland on the shoulders of giants.
          </p>
        </div>

        {/* Partners Grid */}
        <div className='relative w-full overflow-hidden'>
          <motion.div
            className='flex min-h-[300px] items-center gap-20 md:gap-5'
            style={{ width: 'fit-content', x }}
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <PartnerCard
                key={index}
                icon={partner.logo}
                name={partner.name}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <PartnerCard
                key={`duplicate-${index}`}
                icon={partner.logo}
                name={partner.name}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <PartnerCard
                key={`duplicate-2-${index}`}
                icon={partner.logo}
                name={partner.name}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <PartnerCard
                key={`duplicate-3-${index}`}
                icon={partner.logo}
                name={partner.name}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <PartnerCard
                key={`duplicate-4-${index}`}
                icon={partner.logo}
                name={partner.name}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <PartnerCard
                key={`duplicate-5-${index}`}
                icon={partner.logo}
                name={partner.name}
              />
            ))}
          </motion.div>
          {/* Left gradient fade */}
          <div className='pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-[#040211] to-transparent md:w-96' />
          {/* Right gradient fade */}
          <div className='pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-[#040211] to-transparent md:w-96' />
        </div>
      </div>
    </section>
  );
}
