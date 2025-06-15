'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LunarCircleSection() {
  return (
    <section className='relative min-h-screen overflow-hidden'>
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
            'radial-gradient(59.76% 50% at 50% 50%, rgba(31, 18, 95, 0.00) 73.88%, #050212 99.04%)',
        }}
      />

      <div className='relative z-10 flex min-h-screen items-center justify-center px-4 py-20'>
        <div className='w-full max-w-[1440px]'>
          {/* Central moon and circles layout */}
          <div className='relative flex min-h-[400px] items-center justify-center'>
            {/* Circular rings around moon - all starting from center and expanding */}
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* All rings start at center and animate outward */}

              {/* Left outermost ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.1, ease: 'easeOut' }}
                className='absolute h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2]'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  transform: 'translate(calc(-50% - 805px), -50%)',
                  scale: 1,
                  opacity: 0.4,
                }}
              />

              {/* Right outermost ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.1, ease: 'easeOut' }}
                className='absolute h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2]'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  transform: 'translate(calc(-50% + 805px), -50%)',
                  scale: 1,
                  opacity: 0.4,
                }}
              />

              {/* Left second ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 1.3, delay: 0.3, ease: 'easeOut' }}
                className='absolute h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2]'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  transform: 'translate(calc(-50% - 520px), -50%)',
                  scale: 1,
                  opacity: 0.7,
                }}
              />

              {/* Right second ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.7 }}
                transition={{ duration: 1.3, delay: 0.3, ease: 'easeOut' }}
                className='absolute h-[400px] w-[400px] rounded-full border border-dashed border-[#5415a2]'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  transform: 'translate(calc(-50% + 520px), -50%)',
                  scale: 1,
                  opacity: 0.7,
                }}
              />

              {/* Left inner ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
                className='absolute h-[400px] w-[400px] rounded-full border border-solid border-[#5415a2]'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  transform: 'translate(calc(-50% - 274px), -50%)',
                  scale: 1,
                  opacity: 0.8,
                }}
              />

              {/* Right inner ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.8 }}
                transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
                className='absolute h-[400px] w-[400px] rounded-full border border-solid border-[#5415a2]'
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  transform: 'translate(calc(-50% + 274px), -50%)',
                  scale: 1,
                  opacity: 0.8,
                }}
              />
            </div>

            {/* Central moon */}
            <motion.div
              initial={{ scale: 1, opacity: 0.3 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className='relative z-20 flex h-[400px] w-[400px] items-center justify-center overflow-hidden rounded-full'
            >
              {/* Moon with integrated glow */}
              <div
                className='absolute overflow-hidden rounded-full'
                style={{
                  width: '400px',
                  height: '400px',
                  flexShrink: 0,
                  aspectRatio: '1/1',
                }}
              >
                {/* Moon image positioned with specific scaling */}
                <div
                  className='absolute'
                  style={{
                    left: '-267.932px',
                    top: '-229px',
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

            {/* Purple glow effect - in front of moon */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className='absolute z-25 flex items-center justify-center'
              style={{
                width: '348px',
                height: '348px',
                flexShrink: 0,
                borderRadius: '999px',
                background: '#862FE2',
                filter: 'blur(200px)',
              }}
            />

            {/* Flying silhouettes - moved outside moon container */}
            <div className='absolute inset-0 z-30 flex items-center justify-center'>
              <div className='relative h-[400px] w-[400px]'>
                {/* Peter Pan with specific styling */}
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  className='absolute left-1/2'
                  style={{
                    width: '238.323px',
                    height: '133.566px',
                    transform: 'translateX(-50%) rotate(-179.937deg)',
                    bottom: '-75px',
                    left: '80px',
                    background: `url('/assets/images/lunar/peter.png') 50% / cover no-repeat`,
                    flexShrink: 0,
                    aspectRatio: '238.32/133.57',
                  }}
                />

                {/* Tinker Bell with specific styling */}
                <motion.div
                  initial={{ x: 300, y: -100, opacity: 0 }}
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 2 }}
                  className='absolute right-16'
                  style={{
                    width: '62.005px',
                    height: '41.337px',
                    transform: 'translateY(-50%) rotate(-149.764deg)',
                    bottom: '10px',
                    left: '200px',
                    background: `url('/assets/images/lunar/tinker.png') 50% / cover no-repeat`,
                    flexShrink: 0,
                    aspectRatio: '62.00/41.34',
                  }}
                />
              </div>
            </div>

            {/* Heading positioned over the moon - moved outside moon container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className='absolute inset-0 z-40 flex items-center justify-center'
            >
              <div className='font-cinzel relative bottom-14 flex min-w-[512px] flex-col gap-1 text-6xl leading-[110%] font-normal tracking-[2px] text-white'>
                <div className='text-left'>EXPLORE</div>
                <div className='text-right'>NEVERLAND&apos;S</div>
                <div className='relative right-32 text-right'>STATS</div>
              </div>
            </motion.div>
          </div>

          {/* Stats section - Two rows with proper layout but high z-index to overlay */}
          <div className='relative z-50 mx-auto -mt-70 w-full max-w-[1280px] px-8'>
            {/* First Row Stats - Wider spacing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className='mx-auto mb-16 flex w-full max-w-[1280px] items-start justify-between'
            >
              {/* Total Value Locked */}
              <div className='flex w-[158px] flex-col items-end gap-3'>
                <div
                  className='font-cinzel text-5xl leading-[110%] font-normal text-white'
                  style={{ marginTop: '-1px' }}
                >
                  $210 M
                </div>
                <div className='relative h-9 w-full'>
                  <div className='font-cinzel absolute top-0 left-0 h-[18px] w-[158px] text-base leading-[110%] font-normal text-white/60 uppercase'>
                    &#123; TOTAL VALUE
                  </div>
                  <div className='font-cinzel absolute top-[18px] left-[79px] h-[18px] w-[77px] text-base leading-[110%] font-normal text-white/60 uppercase'>
                    LOCKED &#125;
                  </div>
                </div>
              </div>

              {/* Transactions */}
              <div className='flex w-[143px] flex-col items-end gap-3'>
                <div
                  className='font-cinzel text-5xl leading-[110%] font-normal text-white'
                  style={{ marginTop: '-1px' }}
                >
                  1.2 M+
                </div>
                <div className='relative h-10 w-full px-0.5'>
                  <div className='font-cinzel absolute top-0 left-0.5 h-5 w-[151px] text-lg leading-[110%] font-normal text-white/60 uppercase'>
                    &#123; TRANSACTIONS
                  </div>
                  <div className='font-cinzel absolute top-5 left-3.5 h-5 w-[139px] text-right text-lg leading-[110%] font-normal text-white/60 uppercase'>
                    PER MONTH &#125;
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Second Row Stats - Closer spacing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className='mx-auto flex w-full max-w-[766px] items-center justify-between'
            >
              {/* Monthly Revenue */}
              <div className='flex w-[139px] flex-col items-start gap-3'>
                <div
                  className='font-cinzel text-5xl leading-[110%] font-normal text-white'
                  style={{ marginTop: '-1px' }}
                >
                  $2.5 M
                </div>
                <div className='relative flex h-10 w-full flex-col items-start justify-center'>
                  <div className='font-cinzel absolute top-0 left-0 h-5 w-[139px] text-lg leading-[110%] font-normal text-white/60 uppercase'>
                    &#123; MONTHLY
                  </div>
                  <div className='font-cinzel absolute top-5 left-0 h-5 w-[139px] text-right text-lg leading-[110%] font-normal text-white/60 uppercase'>
                    REVENUE &#125;
                  </div>
                </div>
              </div>

              {/* Active Users */}
              <div className='flex w-[143px] flex-col items-end gap-3'>
                <div
                  className='font-cinzel text-5xl leading-[110%] font-normal text-white'
                  style={{ marginTop: '-1px' }}
                >
                  50,000
                </div>
                <div className='relative flex h-10 w-full flex-col items-start justify-center px-0.5'>
                  <div className='font-cinzel absolute top-0 left-0.5 h-5 w-[139px] text-lg leading-[110%] font-normal text-white/60 uppercase'>
                    &#123; ACTIVE
                  </div>
                  <div className='font-cinzel absolute top-5 left-0.5 h-5 w-[139px] text-right text-lg leading-[110%] font-normal text-white/60 uppercase'>
                    USERS &#125;
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom shadow overlay */}
      <div className='pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-black/80 to-transparent' />
    </section>
  );
}
