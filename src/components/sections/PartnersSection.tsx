'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import PartnerCard from '@/components/ui/PartnerCard';

// Partner logo SVG components
const PartnerLogos = {
  // P Logo
  PLogo: () => (
    <div className='flex h-12 w-12 items-center justify-center text-3xl font-bold text-white'>
      P
    </div>
  ),

  // S Logo
  SLogo: () => (
    <div className='flex h-12 w-12 items-center justify-center text-3xl font-bold text-white'>
      S
    </div>
  ),

  // I Logo
  ILogo: () => (
    <div className='flex h-12 w-12 items-center justify-center text-3xl font-bold text-white'>
      I
    </div>
  ),

  // L Logo
  LLogo: () => (
    <div className='flex h-12 w-12 items-center justify-center text-3xl font-bold text-white'>
      L
    </div>
  ),

  // G Logo
  GLogo: () => (
    <div className='flex h-12 w-12 items-center justify-center text-3xl font-bold text-white'>
      G
    </div>
  ),
  // A Logo
  ALogo: () => (
    <div className='flex h-12 w-12 items-center justify-center text-3xl font-bold text-white'>
      A
    </div>
  ),
  // N Logo
  NLogo: () => (
    <div className='flex h-12 w-12 items-center justify-center text-3xl font-bold text-white'>
      N
    </div>
  ),
};

export default function PartnersSection() {
  const partners = [
    { name: 'Partner 1', logo: <PartnerLogos.SLogo /> },
    { name: 'Partner 2', logo: <PartnerLogos.LLogo /> },
    { name: 'Partner 3', logo: <PartnerLogos.ILogo /> },
    { name: 'Partner 4', logo: <PartnerLogos.GLogo /> },
    { name: 'Partner 5', logo: <PartnerLogos.SLogo /> },
    { name: 'Partner 6', logo: <PartnerLogos.LLogo /> },
    { name: 'Partner 7', logo: <PartnerLogos.ILogo /> },
    { name: 'Partner 8', logo: <PartnerLogos.GLogo /> },
    { name: 'Partner 9', logo: <PartnerLogos.SLogo /> },
    { name: 'Partner 10', logo: <PartnerLogos.LLogo /> },
    { name: 'Partner 11', logo: <PartnerLogos.ILogo /> },
    { name: 'Partner 12', logo: <PartnerLogos.GLogo /> },
    { name: 'Partner 13', logo: <PartnerLogos.SLogo /> },
    { name: 'Partner 14', logo: <PartnerLogos.LLogo /> },
    { name: 'Partner 15', logo: <PartnerLogos.ILogo /> },
    { name: 'Partner 16', logo: <PartnerLogos.GLogo /> },
    { name: 'Partner 17', logo: <PartnerLogos.SLogo /> },
    { name: 'Partner 18', logo: <PartnerLogos.LLogo /> },
    { name: 'Partner 19', logo: <PartnerLogos.ILogo /> },
    { name: 'Partner 20', logo: <PartnerLogos.GLogo /> },
  ];

  const [movementDistance, setMovementDistance] = useState('-400px');

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

  return (
    <section className='w-full py-[100px]'>
      <div className='mx-auto flex max-w-[1540px] flex-col items-center gap-4 px-[50px] md:gap-24'>
        {/* Header Section */}
        <div className='flex w-full max-w-[641px] flex-col items-center gap-3'>
          <h2 className='font-cinzel text-center text-[60px] leading-[110%] font-normal text-white uppercase'>
            Our Partners
          </h2>
          <p className='font-inter w-full max-w-[493px] text-center text-lg leading-[140%] font-normal text-white'>
            We collaborate with leading partners to build innovative solutions
            and grow the Neverland ecosystem.
          </p>
        </div>

        {/* Partners Grid */}
        <div className='relative w-full overflow-hidden'>
          <motion.div
            className='flex min-h-[300px] items-center gap-20 md:gap-5'
            animate={{ x: ['0px', movementDistance] }}
            transition={{
              duration: 150,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
            style={{ width: 'fit-content' }}
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
