'use client';

import React from 'react';
import Tilt from 'react-parallax-tilt';

import FadeInWhenVisible from '@/components/ui/FadeInWhenVisible';
import { StarIcon } from '@/components/ui/StarIcon';

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  backgroundImage,
}) => {
  return (
    <Tilt
      className='w-full -scale-x-100 sm:w-60'
      perspective={1000}
      scale={1}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor='#be7af6'
      glarePosition='all'
      glareBorderRadius='12px'
      transitionSpeed={1500}
      tiltReverse={false}
      // gyroscope={true}
    >
      <div
        className='relative flex h-60 flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-black bg-cover bg-center bg-no-repeat p-5'
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <div className='relative z-10 flex h-full -scale-x-100 flex-col items-center justify-start gap-2'>
          <h3 className='font-cinzel text-center text-lg leading-[110%] font-normal text-white uppercase'>
            {title}
          </h3>
          <p className='font-merriweather text-center text-base leading-[140%] font-normal text-white/60'>
            {description}
          </p>
        </div>
      </div>
    </Tilt>
  );
};

const InfoGridSection: React.FC = () => {
  const features = [
    {
      title: 'Community',
      description: 'Powered by vote-escrow community governance',
      backgroundImage: '/assets/images/info/community-image.webp',
    },
    {
      title: 'Instant Liquidity',
      description: 'Instant access to capital on Monad',
      backgroundImage: '/assets/images/info/instant-liquidity-image.webp',
    },
    {
      title: 'You Hold the Keys',
      description: 'Full control of your assets at all times',
      backgroundImage: '/assets/images/info/you-hold-keys-image.webp',
    },
    {
      title: 'Optimized Speed',
      description: 'Fast, efficient, and seamless performance',
      backgroundImage: '/assets/images/info/optimization-image.webp',
    },
    {
      title: 'Security',
      description: 'Audited smart contracts: Your assets stay safe',
      backgroundImage: '/assets/images/info/security-image.webp',
    },
  ];

  return (
    <section id='about' className='w-full bg-transparent px-5 py-20 md:py-44'>
      <div className='mx-auto flex max-w-screen-xl flex-col items-center gap-[100px]'>
        {/* Header Section */}
        <FadeInWhenVisible delay={0} y={20}>
          <div className='relative flex w-full max-w-[678px] flex-col items-center gap-3'>
            <div className='relative w-full'>
              <h2 className='font-cinzel text-center text-4xl leading-[110%] font-normal text-white uppercase sm:text-5xl lg:text-6xl'>
                What is Neverland?
              </h2>
              {/* Decorative Stars */}
              <div className='absolute top-5 left-[-40px] hidden lg:block'>
                <StarIcon />
              </div>
              <div className='absolute top-5 right-[-40px] hidden lg:block'>
                <StarIcon />
              </div>
            </div>
            <p className='font-merriweather mt-4 w-full max-w-[550px] text-center text-lg leading-[140%] font-normal text-white'>
              Neverland is a decentralized, non-custodial lending platform
              governed by the community through vote-escrow tokenomics,
              unlocking capital on the high-performance Monad blockchain.
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Features Grid */}
        <FadeInWhenVisible delay={0} y={20}>
          <div className='mx-auto grid max-w-full grid-cols-1 justify-center gap-5 sm:flex sm:max-w-none sm:flex-wrap'>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                backgroundImage={feature.backgroundImage}
              />
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};

export default InfoGridSection;
