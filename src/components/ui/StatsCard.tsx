'use client';

import { BlurredLoadingText } from './BlurredLoadingText';
import { Tooltip } from './Tooltip';

export interface StatsCardProps {
  title: string;
  value: string;
  tooltipContent: string;
  className?: string;
  isMobile?: boolean;
}

export default function StatsCard({
  title,
  value,
  tooltipContent,
  className = '',
  isMobile = false,
}: StatsCardProps) {
  if (isMobile) {
    return (
      <div
        className={`flex w-[126px] flex-col items-start justify-center gap-1 ${className}`}
      >
        <BlurredLoadingText
          text={value}
          className='font-cinzel w-full text-center text-[28px] leading-[110%] font-normal text-white md:text-[40px]'
        />
        <div className='font-cinzel w-full text-sm leading-[110%] font-normal text-[#ead5ff] uppercase'>
          <div className='flex w-full justify-between'>
            <span>&#123; {title.split(' ')[0]}</span>
          </div>
          <div className='flex w-full justify-end'>
            <span>{title.split(' ').slice(1).join(' ')} &#125;</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-[118px] w-[255px] rounded-3xl backdrop-blur-sm ${className}`}
    >
      {/* Dark overlay with subtle background-blur matching */}
      <div className='absolute inset-0 rounded-3xl bg-[#45016d]/50' />

      {/* Variable thickness border container */}
      <div className='absolute inset-0 overflow-hidden rounded-3xl border border-white/20'>
        {/* Ultra-subtle top-left edge highlight */}
        <div
          className='absolute top-0 left-0 h-full w-full'
          style={{
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%)',
          }}
        />

        {/* Almost imperceptible bottom-right edge */}
        <div
          className='absolute right-0 bottom-0 h-full w-full'
          style={{
            boxShadow: 'inset -1px -1px 0 0 rgba(255, 255, 255, 0.08)',
            background:
              'linear-gradient(315deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%)',
          }}
        />
      </div>

      {/* Content inside glass container */}
      <div className='relative z-10 p-4'>
        <div className='font-cinzel text-sm leading-[110%] font-normal text-[#ead5ff] uppercase'>
          {title}
        </div>

        {/* Value */}
        <div className='mt-[38px]'>
          <BlurredLoadingText
            text={value}
            className='font-cinzel text-[28px] leading-[110%] font-normal text-white md:text-[40px]'
          />
        </div>
      </div>

      {/* Tooltip */}
      <Tooltip
        content={
          <div className='text-[14px] leading-[140%] text-white'>
            {tooltipContent}
          </div>
        }
        position='top'
        className='absolute -top-10 left-56 z-[99999] cursor-pointer'
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
      </Tooltip>
    </div>
  );
}
