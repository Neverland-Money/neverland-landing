'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { BlurredLoadingText } from '@/components/ui/BlurredLoadingText';

export default function LunarCircleSection() {
  return (
    <section className='relative h-[968px] overflow-hidden md:min-h-screen'>
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          src='/assets/images/lunar/background.webp'
          alt='Lunar background'
          fill
          className='object-cover'
          priority
        />
      </div>
      {/* Shadow overlay with radial gradient */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'radial-gradient(80% 50% at 50% 50%, rgba(31, 18, 95, 0.00) 60%, #050212 99.04%)',
        }}
      />
      <div className='relative z-10 flex h-full items-center justify-center px-4 py-20 md:min-h-screen'>
        <div className='w-full max-w-[1440px]'>
          {/* Mobile: Stats above and below moon layout */}
          <div className='flex h-[800px] flex-col items-center justify-between md:hidden'>
            {/* Stats above moon - each on own row */}
            <div className='flex w-full max-w-[600px] flex-col items-center gap-6 pt-16'>
              {/* Total Value Locked - Left aligned */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className='flex w-full flex-col items-start gap-2 px-4'
              >
                <div className='font-cinzel text-3xl leading-[110%] font-normal text-white'>
                  <BlurredLoadingText text='$000M' />
                </div>
                <div className='font-cinzel text-sm leading-[110%] font-normal text-white/60 uppercase'>
                  &#123; TOTAL VALUE LOCKED &#125;
                </div>
              </motion.div>

              {/* Monthly Revenue - Right aligned */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className='flex w-full flex-col items-end gap-2 px-4'
              >
                <div className='font-cinzel text-3xl leading-[110%] font-normal text-white'>
                  <BlurredLoadingText text='$00.0M' />
                </div>
                <div className='font-cinzel text-sm leading-[110%] font-normal text-white/60 uppercase'>
                  &#123; MONTHLY REVENUE &#125;
                </div>
              </motion.div>
            </div>

            {/* Central moon section */}
            <div className='relative flex items-center justify-center'>
              {/* Circular rings around moon - Mobile: vertical expansion */}
              <div className='absolute inset-0 flex items-center justify-center'>
                {/* Mobile rings - expand vertically */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(-50%, calc(-50% - 300px))',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.1, ease: 'easeOut' }}
                  className='absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#5415a2] md:hidden'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(-50%, calc(-50% - 200px))',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                  className='absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#5415a2] md:hidden'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(-50%, calc(-50% - 100px))',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                  className='absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#5415a2] md:hidden'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(-50%, calc(-50% + 100px))',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                  className='absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#5415a2] md:hidden'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(-50%, calc(-50% + 200px))',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                  className='absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#5415a2] md:hidden'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(-50%, calc(-50% + 300px))',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.1, ease: 'easeOut' }}
                  className='absolute h-[300px] w-[300px] rounded-full border border-dashed border-[#5415a2] md:hidden'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>

              {/* Moon container */}
              <motion.div
                initial={{ scale: 1, opacity: 0.3 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className='relative z-20 flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full'
              >
                <div
                  className='absolute h-[280px] w-[280px] overflow-hidden rounded-full'
                  style={{
                    flexShrink: 0,
                    aspectRatio: '1/1',
                  }}
                >
                  <div
                    className='absolute top-[-160.3px] left-[-187.752px]'
                    style={{
                      width: '233.966%',
                      height: '212.879%',
                    }}
                  >
                    <Image
                      src='/assets/images/lunar/moon.png'
                      alt='Moon'
                      fill
                      className='object-cover'
                    />
                  </div>

                  <div
                    className='absolute inset-0'
                    style={{
                      background: `linear-gradient(295deg, rgba(1, 7, 67, 0.50) 5.29%, rgba(49, 0, 99, 0.50) 45.85%, rgba(105, 11, 124, 0.50) 90.24%)`,
                      mixBlendMode: 'color',
                    }}
                  />
                </div>
              </motion.div>

              {/* Purple glow effect */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className='absolute z-25 flex h-[243.6px] w-[243.6px] items-center justify-center'
                style={{
                  flexShrink: 0,
                  borderRadius: '999px',
                  background: '#862FE2',
                  filter: 'blur(140px)',
                }}
              />

              {/* Flying silhouettes */}
              <div className='absolute inset-0 z-30 flex items-center justify-center'>
                <div className='relative h-[280px] w-[280px]'>
                  {/* Peter Pan */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='absolute bottom-[-60px] h-[133px] w-[238px]'
                  >
                    <div
                      className='h-full w-full'
                      style={{
                        background: `url('/assets/images/lunar/peter.png') 50% / cover no-repeat`,
                        flexShrink: 0,
                        aspectRatio: '238/133',
                      }}
                    />
                  </motion.div>

                  {/** Tinker Bell */}
                  <motion.div
                    initial={{ x: 100, y: -50, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    className='absolute bottom-[15px] left-[120px] h-[41px] w-[62px]'
                  >
                    <div
                      className='h-full w-full'
                      style={{
                        background: `url('/assets/images/lunar/tinker.png') 50% / cover no-repeat`,
                        flexShrink: 0,
                        aspectRatio: '62/41',
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Heading positioned over the moon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.9 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className='absolute inset-0 z-40 flex items-center justify-center'
              >
                <div className='font-cinzel relative bottom-10 flex min-w-[300px] flex-col gap-1 text-3xl leading-[110%] font-normal tracking-[2px] text-white'>
                  <div className='text-left'>EXPLORE</div>
                  <div className='text-right'>NEVERLAND&apos;S</div>
                  <div className='relative right-8 text-right'>STATS</div>
                </div>
              </motion.div>
            </div>

            {/* Stats below moon - each on own row */}
            <div className='flex w-full max-w-[600px] flex-col items-center gap-6 pb-16'>
              {/* Active Users - Left aligned */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className='flex w-full flex-col items-start gap-2 px-4'
              >
                <div className='font-cinzel text-3xl leading-[110%] font-normal text-white'>
                  <BlurredLoadingText text='000,000' />
                </div>
                <div className='font-cinzel text-sm leading-[110%] font-normal text-white/60 uppercase'>
                  &#123; ACTIVE USERS &#125;
                </div>
              </motion.div>

              {/* Transactions Per Month - Right aligned */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className='flex w-full flex-col items-end gap-2 px-4'
              >
                <div className='font-cinzel text-3xl leading-[110%] font-normal text-white'>
                  <BlurredLoadingText text='00.00M' />
                </div>
                <div className='font-cinzel text-sm leading-[110%] font-normal text-white/60 uppercase'>
                  &#123; TRANSACTIONS PER MONTH &#125;
                </div>
              </motion.div>
            </div>
          </div>

          {/* Desktop: Original layout - hidden on mobile */}
          <div className='hidden md:block'>
            {/* Central moon and circles layout */}
            <div className='relative flex min-h-[400px] items-center justify-center md:min-h-[400px]'>
              {/* Circular rings around moon - all starting from center and expanding */}
              <div className='absolute inset-0 flex items-center justify-center'>
                {/* All rings start at center and animate outward */}

                {/* Desktop: Left outermost ring / Mobile: Top outermost ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(calc(-50% - 805px), -50%)',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.1, ease: 'easeOut' }}
                  className='absolute hidden h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2] md:block'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Desktop: Right outermost ring / Mobile: Bottom outermost ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(calc(-50% + 805px), -50%)',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.5, delay: 0.1, ease: 'easeOut' }}
                  className='absolute hidden h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2] md:block'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Desktop: Left second ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.7,
                    transform: 'translate(calc(-50% - 520px), -50%)',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.3, delay: 0.3, ease: 'easeOut' }}
                  className='absolute hidden h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2] md:block'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Desktop: Right second ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.7,
                    transform: 'translate(calc(-50% + 520px), -50%)',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.3, delay: 0.3, ease: 'easeOut' }}
                  className='absolute hidden h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2] md:block'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Desktop: Left inner ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(calc(-50% - 274px), -50%)',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
                  className='absolute hidden h-[400px] w-[400px] rounded-full border border-solid border-[#5415a2] md:block'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />

                {/* Desktop: Right inner ring */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{
                    scale: 1,
                    opacity: 0.8,
                    transform: 'translate(calc(-50% + 274px), -50%)',
                  }}
                  viewport={{ once: true, amount: 1 }}
                  transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
                  className='absolute hidden h-[400px] w-[400px] rounded-full border border-solid border-[#5415a2] md:block'
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              </div>

              {/* Moon container with centering */}
              <motion.div
                initial={{ scale: 1, opacity: 0.3 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1, delay: 0.1 }}
                className='relative z-20 flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full md:h-[400px] md:w-[400px]'
              >
                {/* Moon with integrated glow */}
                <div
                  className='absolute h-[280px] w-[280px] overflow-hidden rounded-full md:h-[400px] md:w-[400px]'
                  style={{
                    flexShrink: 0,
                    aspectRatio: '1/1',
                  }}
                >
                  {/* Moon image positioned with specific scaling */}
                  <div
                    className='absolute top-[-160.3px] left-[-187.752px] md:top-[-229px] md:left-[-267.932px]'
                    style={{
                      width: '233.966%',
                      height: '212.879%',
                    }}
                  >
                    <Image
                      src='/assets/images/lunar/moon.png'
                      alt='Moon'
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      className='object-cover'
                    />
                  </div>

                  {/* Gradient overlay for purple accent */}
                  <div
                    className='absolute inset-0'
                    style={{
                      background: `linear-gradient(295deg, rgba(1, 7, 67, 0.50) 5.29%, rgba(49, 0, 99, 0.50) 45.85%, rgba(105, 11, 124, 0.50) 90.24%)`,
                      mixBlendMode: 'color',
                    }}
                  />
                </div>
              </motion.div>

              {/* Purple glow effect - responsive sizing */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className='absolute z-25 flex h-[243.6px] w-[243.6px] items-center justify-center md:h-[348px] md:w-[348px]'
                style={{
                  flexShrink: 0,
                  borderRadius: '999px',
                  background: '#862FE2',
                  filter: 'blur(140px)',
                }}
              />

              {/* Flying silhouettes - responsive positioning and sizing */}
              <div className='absolute inset-0 z-30 flex items-center justify-center'>
                <div className='relative h-[280px] w-[280px] md:h-[400px] md:w-[400px]'>
                  {/* Peter Pan with responsive styling */}
                  <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className='absolute bottom-[-75px] left-[80px] h-[133px] w-[238px]'
                    style={{
                      transform: 'rotate(-179.937deg)',
                    }}
                  >
                    <div
                      className='h-full w-full'
                      style={{
                        background: `url('/assets/images/lunar/peter.png') 50% / cover no-repeat`,
                        flexShrink: 0,
                        aspectRatio: '238.32/133.57',
                      }}
                    />
                  </motion.div>

                  {/* Tinker Bell with responsive styling */}
                  <motion.div
                    initial={{ x: 100, y: -50, opacity: 0 }}
                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    className='absolute bottom-[5px] left-[200px] h-[41px] w-[62px]'
                  >
                    <div
                      className='h-full w-full'
                      style={{
                        background: `url('/assets/images/lunar/tinker.png') 50% / cover no-repeat`,
                        flexShrink: 0,
                        aspectRatio: '62.00/41.34',
                      }}
                    />
                  </motion.div>
                </div>
              </div>

              {/* Heading positioned over the moon - responsive */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true, amount: 0.9 }}
                className='absolute inset-0 z-40 flex items-center justify-center'
              >
                <div className='font-cinzel relative bottom-10 flex min-w-[300px] flex-col gap-1 text-3xl leading-[110%] font-normal tracking-[2px] text-white md:bottom-14 md:min-w-[512px] md:text-6xl'>
                  <div className='text-left'>EXPLORE</div>
                  <div className='text-right'>NEVERLAND&apos;S</div>
                  <div className='relative right-8 text-right md:right-32'>
                    STATS
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Stats section - Same layout as desktop but responsive */}
            <div className='relative z-50 mx-auto w-full max-w-[1280px] px-4 md:-mt-70 md:px-8'>
              {/* First Row Stats - Responsive spacing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true, amount: 1 }}
                className='mx-auto mb-8 flex w-full max-w-[600px] items-start justify-between md:mb-16 md:max-w-[1280px]'
              >
                {/* Total Value Locked */}
                <div className='flex w-[120px] flex-col items-center gap-2 md:w-[158px] md:items-start md:gap-3'>
                  <div className='font-cinzel mt-[-1px] text-3xl leading-[110%] font-normal text-white md:w-[158px] md:text-left md:text-5xl'>
                    <BlurredLoadingText text='$000M' />
                  </div>
                  <div className='relative h-8 w-full md:h-10'>
                    <div className='font-cinzel absolute top-0 left-0 h-[16px] w-full text-lg leading-[110%] font-normal text-white/60 uppercase md:h-[18px]'>
                      &#123; TOTAL VALUE
                    </div>
                    <div className='font-cinzel absolute top-[16px] left-[60px] h-[16px] w-[158px] text-lg leading-[110%] font-normal text-white/60 uppercase md:top-[18px] md:left-[79px] md:h-[18px]'>
                      LOCKED &#125;
                    </div>
                  </div>
                </div>

                {/* Transactions */}
                <div className='flex w-[120px] flex-col items-center gap-2 md:w-[158px] md:items-start md:gap-3'>
                  <div className='font-cinzel mt-[-1px] text-3xl leading-[110%] font-normal text-white md:w-[158px] md:text-left md:text-5xl'>
                    <BlurredLoadingText text='00.00M' />
                  </div>
                  <div className='relative h-8 w-full px-0.5 md:h-10'>
                    <div className='font-cinzel absolute top-0 left-0.5 h-4 w-[114px] text-lg leading-[110%] font-normal text-white/60 uppercase md:h-5 md:w-[158px]'>
                      &#123; TRANSACTIONS
                    </div>
                    <div className='font-cinzel absolute top-4 left-2.5 h-4 w-[105px] text-right text-lg leading-[110%] font-normal text-white/60 uppercase md:top-5 md:left-3.5 md:h-5 md:w-[158px]'>
                      PER MONTH &#125;
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second Row Stats - Responsive spacing */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true, amount: 1 }}
                className='mx-auto flex w-full max-w-[460px] items-center justify-between md:max-w-[766px] md:items-start'
              >
                {/* Monthly Revenue */}
                <div className='flex w-[120px] flex-col items-center gap-2 md:w-[158px] md:items-start md:gap-3'>
                  <div className='font-cinzel mt-[-1px] text-3xl leading-[110%] font-normal text-white md:w-[158px] md:text-left md:text-5xl'>
                    <BlurredLoadingText text='$00.0M' />
                  </div>
                  <div className='flex flex-col items-center gap-0 md:relative md:h-10 md:w-full md:items-start'>
                    <div className='font-cinzel text-lg leading-[110%] font-normal text-white/60 uppercase md:absolute md:top-0 md:left-0 md:h-[16px] md:w-[158px]'>
                      &#123; MONTHLY
                    </div>
                    <div className='font-cinzel text-lg leading-[110%] font-normal text-white/60 uppercase md:absolute md:top-[16px] md:left-[60px] md:h-[16px] md:w-[158px]'>
                      REVENUE &#125;
                    </div>
                  </div>
                </div>

                {/* Active Users */}
                <div className='flex w-[120px] flex-col items-center gap-2 md:w-[158px] md:items-start md:gap-3'>
                  <div className='font-cinzel mt-[-1px] text-3xl leading-[110%] font-normal text-white md:w-[158px] md:text-left md:text-5xl'>
                    <BlurredLoadingText text='000,000' />
                  </div>
                  <div className='flex flex-col items-center gap-0 md:relative md:h-10 md:w-full md:items-start'>
                    <div className='font-cinzel text-lg leading-[110%] font-normal text-white/60 uppercase md:absolute md:top-0 md:left-0 md:h-[16px] md:w-full'>
                      &#123; ACTIVE
                    </div>
                    <div className='font-cinzel text-lg leading-[110%] font-normal text-white/60 uppercase md:absolute md:top-[16px] md:left-[60px] md:h-[16px] md:w-[158px]'>
                      USERS &#125;
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom shadow overlay */} {/* Mobile: vertical gradient */}
      <div className='pointer-events-none absolute right-0 bottom-0 left-0 h-48 from-[#040211] to-transparent md:bg-gradient-to-t' />
      {/* Top shadow overlay */} {/* Mobile: vertical gradient */}
      <div className='pointer-events-none absolute top-0 right-0 left-0 h-48 from-[#040211] to-transparent md:bg-gradient-to-b' />
    </section>
  );
}
