'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { BlurredLoadingText } from '@/components/ui/BlurredLoadingText';
import { StardustEffect } from '@/components/ui/StardustEffect';
import { StarIcon } from '@/components/ui/StarIcon';
// import { Tooltip } from '@/components/ui/Tooltip';

export default function HeroSection() {
  return (
    <div className='relative flex h-[100vh] max-h-[1000px] min-h-[700px] w-full flex-col overflow-hidden bg-[#01020D] md:max-h-[100vh] md:min-h-[944px]'>
      {/* Background image layer - uses separate styles for mobile and desktop */}
      <div className='absolute inset-0 h-full w-full scale-x-[-1] transform md:scale-x-100'>
        {/* Mobile background - positioned from bottom */}
        <div
          className='bg-lightgray absolute inset-0 h-full w-full md:hidden'
          style={{
            backgroundImage: "url('/assets/images/hero/background.webp')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '-860px bottom',
            backgroundSize: '350% auto',
          }}
        />

        {/* Desktop background */}
        <div
          className='absolute inset-0 hidden h-full w-full md:block'
          style={{
            background:
              "url('/assets/images/hero/background.webp') lightgray -173px -274px / 124% 129% no-repeat",
          }}
        />
      </div>

      {/* Shadow bottom gradient */}
      <div
        className='absolute bottom-0 left-0 z-[1] h-full w-full'
        style={{
          background:
            'linear-gradient(0deg, #050212 0.96%, rgba(5, 2, 18, 0.00) 8.65%)',
        }}
      />

      {/* Shadow top gradient */}
      <div
        className='absolute top-0 left-0 z-[2] h-full w-full'
        style={{
          background:
            'linear-gradient(0deg, rgba(5, 2, 18, 0.00) 48.56%, rgba(5, 2, 18, 0.60) 100%)',
        }}
      />

      {/* Main content container - exactly 248px from the bottom of header on desktop, less on mobile */}
      <div className='relative z-[5] mt-[120px] flex flex-col items-center md:mt-[248px] md:items-start'>
        {/* Content wrapper with max width */}
        <div className='mx-auto w-full max-w-7xl px-4 xl:px-0'>
          <div className='flex w-full max-w-[950px] flex-col items-center justify-center gap-6 md:items-start md:gap-9'>
            {/* Title and description section */}
            <div className='flex w-full flex-col items-center justify-center gap-2 md:items-start'>
              {/* Main title SVG - hidden on mobile, shown on md screens and above */}
              <div className='hidden w-full max-w-[950px] md:block'>
                <svg
                  width='950'
                  height='160'
                  viewBox='0 0 950 160'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-auto w-full max-w-[950px]'
                  style={{ aspectRatio: '950/160' }}
                >
                  <text
                    fill='white'
                    style={{ whiteSpace: 'pre' }}
                    fontFamily='var(--font-cinzel)'
                    fontSize='80'
                    letterSpacing='0em'
                  >
                    <tspan x='0' y='64.16'>
                      MAGIC AND PIXIE{' '}
                    </tspan>
                    <tspan x='0' y='144.16'>
                      DUST ON MONAD
                    </tspan>
                  </text>
                  <path
                    d='M161.268 29.8862C161.285 30.0395 161.308 30.192 161.338 30.3435C161.368 30.495 161.403 30.6449 161.446 30.7934C161.488 30.9418 161.537 31.0883 161.591 31.2326C161.646 31.3768 161.707 31.5186 161.774 31.6578C161.84 31.797 161.913 31.9332 161.991 32.0661C162.069 32.1993 162.153 32.3288 162.243 32.4547C162.332 32.5808 162.426 32.7026 162.526 32.8206C162.625 32.9387 162.73 33.0522 162.839 33.1614C162.948 33.2705 163.061 33.3748 163.179 33.4745C163.297 33.5739 163.419 33.6684 163.545 33.7575C163.671 33.8467 163.801 33.9306 163.934 34.0087C164.067 34.087 164.203 34.1596 164.342 34.2264C164.481 34.2929 164.623 34.3537 164.767 34.4085C164.912 34.4632 165.058 34.5118 165.207 34.5542C165.355 34.5966 165.505 34.6325 165.657 34.6621C165.808 34.6918 165.96 34.715 166.114 34.7317C167.601 34.8947 169.521 35 172 35C169.521 35 167.601 35.1053 166.114 35.2684C165.96 35.2851 165.808 35.3083 165.657 35.3379C165.505 35.3675 165.355 35.4038 165.207 35.446C165.058 35.4883 164.912 35.5368 164.767 35.5916C164.623 35.6464 164.481 35.7072 164.342 35.7739C164.203 35.8404 164.067 35.913 163.934 35.9914C163.801 36.0696 163.671 36.1534 163.545 36.2426C163.419 36.3318 163.297 36.4261 163.179 36.5256C163.061 36.6252 162.948 36.7295 162.839 36.8387C162.73 36.9478 162.625 37.0614 162.526 37.1794C162.426 37.2975 162.332 37.4193 162.243 37.5454C162.153 37.6713 162.069 37.8007 161.991 37.9339C161.913 38.0669 161.84 38.203 161.774 38.3423C161.707 38.4815 161.646 38.6232 161.591 38.7675C161.537 38.9117 161.488 39.0583 161.446 39.2067C161.403 39.3552 161.368 39.505 161.338 39.6566C161.308 39.8081 161.285 39.9606 161.268 40.1139C161.105 41.6013 161 43.5213 161 46C161 43.5215 160.895 41.6013 160.732 40.1139C160.715 39.9606 160.692 39.8081 160.662 39.6566C160.632 39.505 160.596 39.3552 160.554 39.2067C160.512 39.0583 160.463 38.9117 160.408 38.7675C160.354 38.6232 160.293 38.4815 160.226 38.3423C160.159 38.203 160.087 38.0669 160.009 37.9339C159.93 37.8007 159.847 37.6713 159.757 37.5454C159.668 37.4193 159.574 37.2975 159.474 37.1794C159.375 37.0614 159.27 36.9478 159.161 36.8387C159.052 36.7295 158.939 36.6252 158.821 36.5256C158.703 36.4261 158.581 36.3318 158.455 36.2426C158.329 36.1534 158.199 36.0696 158.066 35.9914C157.933 35.913 157.797 35.8404 157.658 35.7739C157.519 35.7072 157.377 35.6464 157.233 35.5916C157.088 35.5368 156.942 35.4883 156.793 35.446C156.645 35.4038 156.495 35.3675 156.343 35.3379C156.192 35.3083 156.039 35.2851 155.886 35.2684C154.399 35.1053 152.479 35 150 35C152.479 35 154.399 34.8947 155.886 34.7317C156.039 34.715 156.192 34.6918 156.343 34.6621C156.495 34.6325 156.645 34.597 156.793 34.5542C156.942 34.512 157.088 34.4632 157.233 34.4085C157.377 34.3537 157.519 34.2929 157.658 34.2264C157.797 34.1596 157.933 34.087 158.066 34.0087C158.199 33.9306 158.329 33.8467 158.455 33.7575C158.581 33.6684 158.703 33.5739 158.821 33.4745C158.939 33.3748 159.052 33.2705 159.161 33.1614C159.27 33.0522 159.375 32.9387 159.474 32.8206C159.574 32.7026 159.668 32.5808 159.757 32.4547C159.847 32.3288 159.93 32.1993 160.009 32.0661C160.087 31.9332 160.159 31.797 160.226 31.6578C160.293 31.5186 160.354 31.3768 160.408 31.2326C160.463 31.0883 160.512 30.9418 160.554 30.7934C160.596 30.6449 160.632 30.495 160.662 30.3435C160.692 30.192 160.715 30.0395 160.732 29.8862C160.895 28.3987 161 26.4788 161 24C161 26.4786 161.105 28.3987 161.268 29.8862Z'
                    fill='white'
                  />
                  <path
                    d='M494.268 110.886C494.285 111.039 494.308 111.192 494.338 111.343C494.368 111.495 494.403 111.645 494.446 111.793C494.488 111.942 494.537 112.088 494.591 112.233C494.646 112.377 494.707 112.519 494.774 112.658C494.84 112.797 494.913 112.933 494.991 113.066C495.069 113.199 495.153 113.329 495.243 113.455C495.332 113.581 495.426 113.703 495.526 113.821C495.625 113.939 495.73 114.052 495.839 114.161C495.948 114.271 496.061 114.375 496.179 114.474C496.297 114.574 496.419 114.668 496.545 114.758C496.671 114.847 496.801 114.931 496.934 115.009C497.067 115.087 497.203 115.16 497.342 115.226C497.481 115.293 497.623 115.354 497.767 115.409C497.912 115.463 498.058 115.512 498.207 115.554C498.355 115.597 498.505 115.632 498.657 115.662C498.808 115.692 498.96 115.715 499.114 115.732C500.601 115.895 502.521 116 505 116C502.521 116 500.601 116.105 499.114 116.268C498.96 116.285 498.808 116.308 498.657 116.338C498.505 116.368 498.355 116.404 498.207 116.446C498.058 116.488 497.912 116.537 497.767 116.592C497.623 116.646 497.481 116.707 497.342 116.774C497.203 116.84 497.067 116.913 496.934 116.991C496.801 117.07 496.671 117.153 496.545 117.243C496.419 117.332 496.297 117.426 496.179 117.526C496.061 117.625 495.948 117.73 495.839 117.839C495.73 117.948 495.625 118.061 495.526 118.179C495.426 118.297 495.332 118.419 495.243 118.545C495.153 118.671 495.069 118.801 494.991 118.934C494.913 119.067 494.84 119.203 494.774 119.342C494.707 119.482 494.646 119.623 494.591 119.767C494.537 119.912 494.488 120.058 494.446 120.207C494.403 120.355 494.368 120.505 494.338 120.657C494.308 120.808 494.285 120.961 494.268 121.114C494.105 122.601 494 124.521 494 127C494 124.521 493.895 122.601 493.732 121.114C493.715 120.961 493.692 120.808 493.662 120.657C493.632 120.505 493.596 120.355 493.554 120.207C493.512 120.058 493.463 119.912 493.408 119.767C493.354 119.623 493.293 119.482 493.226 119.342C493.159 119.203 493.087 119.067 493.009 118.934C492.93 118.801 492.847 118.671 492.757 118.545C492.668 118.419 492.574 118.297 492.474 118.179C492.375 118.061 492.27 117.948 492.161 117.839C492.052 117.73 491.939 117.625 491.821 117.526C491.703 117.426 491.581 117.332 491.455 117.243C491.329 117.153 491.199 117.07 491.066 116.991C490.933 116.913 490.797 116.84 490.658 116.774C490.519 116.707 490.377 116.646 490.233 116.592C490.088 116.537 489.942 116.488 489.793 116.446C489.645 116.404 489.495 116.368 489.343 116.338C489.192 116.308 489.039 116.285 488.886 116.268C487.399 116.105 485.479 116 483 116C485.479 116 487.399 115.895 488.886 115.732C489.039 115.715 489.192 115.692 489.343 115.662C489.495 115.632 489.645 115.597 489.793 115.554C489.942 115.512 490.088 115.463 490.233 115.409C490.377 115.354 490.519 115.293 490.658 115.226C490.797 115.16 490.933 115.087 491.066 115.009C491.199 114.931 491.329 114.847 491.455 114.758C491.581 114.668 491.703 114.574 491.821 114.474C491.939 114.375 492.052 114.271 492.161 114.161C492.27 114.052 492.375 113.939 492.474 113.821C492.574 113.703 492.668 113.581 492.757 113.455C492.847 113.329 492.93 113.199 493.009 113.066C493.087 112.933 493.159 112.797 493.226 112.658C493.293 112.519 493.354 112.377 493.408 112.233C493.463 112.088 493.512 111.942 493.554 111.793C493.596 111.645 493.632 111.495 493.662 111.343C493.692 111.192 493.715 111.039 493.732 110.886C493.895 109.399 494 107.479 494 105C494 107.479 494.105 109.399 494.268 110.886Z'
                    fill='white'
                  />
                </svg>
              </div>

              {/* Mobile title - shown on mobile, hidden on md screens and above */}
              <div className='block w-full text-center md:hidden'>
                <h1 className='font-cinzel mb-2 text-[44px] leading-[130%] tracking-wide text-white'>
                  MAGIC AND
                  <br />
                  PIXIE DUST ON
                  <br />
                  MONAD
                </h1>
              </div>

              {/* Description text - hidden on mobile, shown on md screens and above */}
              <div className='mx-auto mr-auto hidden w-full max-w-[455px] md:mx-0 md:mr-auto md:block'>
                <p className='font-merriweather text-center text-base leading-[140%] text-white md:text-left md:text-lg'>
                  Neverland is a lending protocol built on Aave&apos;s secure
                  system, governed by the community, and powered by Monad&apos;s
                  fast blockchain.
                </p>
              </div>

              {/* Mobile Description text */}
              <div className='mx-auto mr-auto block w-full max-w-[455px] md:mx-0 md:mr-auto md:hidden'>
                <p className='font-merriweather text-center text-[21px] leading-[140%] text-white md:text-left md:text-lg'>
                  Neverland is a lending protocol built on Aave&apos;s secure
                  system, governed by the community, and powered by Monad&apos;s
                  fast blockchain.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className='relative'>
              {/* Stardust particles */}
              <StardustEffect />

              <Link
                href='#'
                className='cursor-pointer'
                aria-disabled='true'
                passHref
              >
                <motion.div
                  className='group relative mx-auto flex w-[240px] items-center justify-center gap-3 rounded-full px-6 py-4 md:mx-0 md:mr-auto'
                  style={{
                    background:
                      'linear-gradient(0deg, #d132e0 -31%, #530ee3 111.63%)',
                    boxShadow: '0px 0px 36px #7200d6',
                  }}
                  whileTap={{
                    scale: 0.95,
                    y: 4,
                    boxShadow: '0px 0px 18px #7200d6',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 15,
                  }}
                  onClick={() =>
                    document.dispatchEvent(new CustomEvent('triggerStardust'))
                  }
                >
                  {/* Disabled overlay */}
                  {/* <div className="absolute inset-0 bg-black bg-opacity-20 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-inter">
                    Testnet Coming Soon
                  </span>
                </div> */}

                  {/* Star 1 */}
                  <StarIcon />

                  {/* Button text */}
                  <span className='font-inter text-center text-base leading-[110%] font-medium text-white'>
                    Enter Dapp
                  </span>

                  {/* Star 2 */}
                  <StarIcon />
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - 80px from button above on desktop, 40px on mobile */}
      <div className='z-[5] mx-auto mt-[40px] flex w-full max-w-7xl flex-col gap-4 px-4 md:mt-[80px] md:flex-row md:gap-6 xl:px-0'>
        {/* Total Value Locked Card - Desktop version */}
        <div
          className='relative hidden h-[118px] w-[255px] rounded-[20px] border border-white/20 md:block'
          style={{
            background: 'rgba(50, 2, 99, 0.65)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div className='font-cinzel absolute top-4 left-4 text-sm leading-[110%] font-normal text-[#ead5ff] uppercase'>
            Total Value Locked
          </div>

          {/* Value */}
          <div className='absolute top-[58px] left-4'>
            <BlurredLoadingText
              text='000.00M'
              className='font-cinzel text-[40px] leading-[110%] font-normal text-white'
            />
          </div>

          {/* Tooltip */}
          {/* <Tooltip
            content={
              <div className='text-[14px] leading-[140%] text-white'>
                Total value of assets locked in the protocol.
              </div>
            }
            position='top'
            className='absolute top-22 left-56 cursor-pointer'
            zIndex={99999}
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='18'
                height='18'
                rx='9'
                fill='#6B5390'
                fillOpacity='0.6'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.16667 5.75C9.6499 5.75 10.0417 5.35825 10.0417 4.875C10.0417 4.39175 9.6499 4 9.16667 4C8.68343 4 8.29167 4.39175 8.29167 4.875C8.29167 5.35825 8.68343 5.75 9.16667 5.75ZM8.58333 6.91667C8.26116 6.91667 8 7.17784 8 7.5C8 7.82217 8.26116 8.08333 8.58333 8.08333V12.75C8.58333 13.0722 8.84449 13.3333 9.16667 13.3333C9.48884 13.3333 9.75 13.0722 9.75 12.75V7.5C9.75 7.17784 9.48884 6.91667 9.16667 6.91667H8.58333Z'
                fill='white'
              />
            </svg>
          </Tooltip> */}
        </div>

        {/* Active Users Card - Desktop version */}
        <div
          className='relative hidden h-[118px] w-[255px] rounded-[20px] border border-white/20 md:block'
          style={{
            background: 'rgba(50, 2, 99, 0.65)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <div className='font-cinzel absolute top-4 left-4 text-sm leading-[110%] font-normal text-[#ead5ff] uppercase'>
            Active Users
          </div>

          {/* Value */}
          <div className='absolute top-[58px] left-4'>
            <BlurredLoadingText
              text='900,000'
              className='font-cinzel text-[40px] leading-[110%] font-normal text-white'
            />
          </div>

          {/* Tooltip */}
          {/* <Tooltip
            content={
              <div className='text-[14px] leading-[140%] text-white'>
                Number of users actively interacting with the protocol.
              </div>
            }
            position='top'
            className='absolute top-22 left-56 cursor-pointer'
            zIndex={99999}
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                width='18'
                height='18'
                rx='9'
                fill='#6B5390'
                fillOpacity='0.6'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.16667 5.75C9.6499 5.75 10.0417 5.35825 10.0417 4.875C10.0417 4.39175 9.6499 4 9.16667 4C8.68343 4 8.29167 4.39175 8.29167 4.875C8.29167 5.35825 8.68343 5.75 9.16667 5.75ZM8.58333 6.91667C8.26116 6.91667 8 7.17784 8 7.5C8 7.82217 8.26116 8.08333 8.58333 8.08333V12.75C8.58333 13.0722 8.84449 13.3333 9.16667 13.3333C9.48884 13.3333 9.75 13.0722 9.75 12.75V7.5C9.75 7.17784 9.48884 6.91667 9.16667 6.91667H8.58333Z'
                fill='white'
              />
            </svg>
          </Tooltip> */}
        </div>

        {/* Mobile Stats Layout - Fixed to bottom of viewport */}
        <div className='absolute right-0 bottom-[55px] left-0 z-[5] flex w-full flex-row justify-center gap-16 md:hidden'>
          {/* Total Value Locked */}
          <div className='flex w-[126px] flex-col items-start justify-center gap-1'>
            <BlurredLoadingText
              text='$000.00M'
              className='font-cinzel text-[40px] leading-[110%] font-normal text-white'
            />
            <div className='font-cinzel w-full text-sm leading-[110%] font-normal text-[#ead5ff] uppercase'>
              <div className='flex w-full justify-between'>
                <span>&#123; TOTAL VALUE</span>
              </div>
              <div className='flex w-full justify-end'>
                <span>LOCKED &#125;</span>
              </div>
            </div>
          </div>

          {/* Active Users */}
          <div className='flex w-[126px] flex-col items-start justify-center gap-1'>
            <BlurredLoadingText
              text='900,000'
              className='font-cinzel text-[40px] leading-[110%] font-normal text-white'
            />
            <div className='font-cinzel w-full text-sm leading-[110%] font-normal text-[#ead5ff] uppercase'>
              <div className='flex w-full justify-between'>
                <span>&#123; ACTIVE</span>
              </div>
              <div className='flex w-full justify-end'>
                <span>USERS &#125;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
