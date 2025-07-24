'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LogoAssetCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
  height?: string;
}

function LogoAssetCard({
  src,
  alt,
  title,
  description,
  className = '',
  height = 'h-48',
}: LogoAssetCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Fetch the SVG content
      const response = await fetch(src);
      const svgContent = await response.text();

      // Copy to clipboard
      await navigator.clipboard.writeText(svgContent);
      setCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy SVG:', error);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div
        className={`relative flex ${height} items-center justify-center rounded-3xl bg-black/30 p-12`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='text-lg font-bold text-white'>
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            className='h-[64px] w-[auto] text-white'
            priority
          />
        </div>

        {/* Copy button overlay */}
        {isHovered && (
          <div className='absolute right-4 bottom-4 flex items-center gap-2'>
            {/* Hover text */}
            <div
              className={`px-2 py-1 text-xs text-white transition-all duration-300 ease-in-out ${copied ? 'opacity-100' : 'opacity-100'}`}
            >
              {copied ? 'Copied!' : 'Copy SVG'}
            </div>

            <button
              onClick={handleCopy}
              className='cursor-pointer rounded-full bg-white p-2 text-black transition-all duration-200 active:scale-90'
            >
              {copied ? (
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              ) : (
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
      <div>
        <h4 className='font-semibold text-white'>{title}</h4>
        <p className='mt-2 text-sm text-gray-400'>{description}</p>
      </div>
    </div>
  );
}

export function LogoAssets() {
  const [isMainLogoHovered, setIsMainLogoHovered] = useState(false);
  const [mainLogoCopied, setMainLogoCopied] = useState(false);

  const handleMainLogoCopy = async () => {
    try {
      // Fetch the SVG content
      const response = await fetch('/assets/brand/full.svg');
      const svgContent = await response.text();

      // Copy to clipboard
      await navigator.clipboard.writeText(svgContent);
      setMainLogoCopied(true);

      // Reset copied state after 2 seconds
      setTimeout(() => setMainLogoCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy SVG:', error);
    }
  };

  return (
    <section className='border-t border-gray-700 pb-16'>
      <div className='w-full lg:max-w-4xl'>
        <div>
          <h3 className='my-6 text-2xl font-semibold text-white'>
            Brand Logo Assets
          </h3>

          {/* Main Logo Display */}
          <div className='mt-8 rounded-lg bg-gray-900/50 p-8'>
            <div>
              <h4 className='font-semibold text-white'>Full Logo</h4>
              <p className='mt-2 text-sm text-gray-400'>
                The Neverland full logo is the primary visual element of the
                brand, representing it across digital platforms and materials.
              </p>
            </div>
            <div
              className='relative mt-4 mb-6 flex h-48 items-center justify-center rounded-3xl bg-black/30 p-12'
              onMouseEnter={() => setIsMainLogoHovered(true)}
              onMouseLeave={() => setIsMainLogoHovered(false)}
            >
              <div className='text-3xl font-bold text-white'>
                {/* Placeholder for actual logo */}
                <Image
                  src='/assets/brand/full.svg'
                  alt='Logo'
                  width={0}
                  height={0}
                  className='h-[64px] w-[auto] text-white'
                  priority
                />
              </div>

              {/* Copy button overlay */}
              {isMainLogoHovered && (
                <div className='absolute right-4 bottom-4 flex items-center gap-2'>
                  {/* Hover text */}
                  <div
                    className={`rounded px-2 py-1 text-xs text-white transition-all duration-300 ease-in-out ${mainLogoCopied ? 'opacity-100' : 'opacity-100'}`}
                  >
                    {mainLogoCopied ? 'Copied!' : 'Copy SVG'}
                  </div>

                  <button
                    onClick={handleMainLogoCopy}
                    className='cursor-pointer rounded-full bg-white p-2 text-black transition-all duration-100 active:scale-90'
                  >
                    {mainLogoCopied ? (
                      <svg
                        className='h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    ) : (
                      <svg
                        className='h-4 w-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z'
                        />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Logo Variants Grid */}
          <div className='mt-8 rounded-lg bg-gray-900/50 p-8'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
              {/* Logomark Section */}
              <LogoAssetCard
                src='/assets/brand/logomark.svg'
                alt='Neverland Logomark'
                title='Logomark'
                description='The Neverland Stars logomark is the primary visual element of the brand.'
                className='col-span-1'
              />

              {/* Wordmark Section */}
              <LogoAssetCard
                src='/assets/brand/wordmark.svg'
                alt='Neverland Wordmark'
                title='Wordmark'
                description='The Neverland wordmark is supported and extended by our typography and often used in the Neverland logo as a secondary element.'
                className='col-span-2'
              />
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className='mt-8 rounded-lg bg-gray-900/50 p-8'>
            <h4 className='mb-4 text-xl font-semibold text-white'>
              Usage Guidelines
            </h4>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div>
                <h5 className='mb-2 font-semibold text-white'>Clearspace</h5>
                <p className='text-sm text-gray-300'>
                  Always leave sufficient space around the logo to avoid visual
                  clutter. Use the height of the logomark as the minimum
                  required clearspace.
                </p>
              </div>
              <div>
                <h5 className='mb-2 font-semibold text-white'>Minimum Size</h5>
                <p className='text-sm text-gray-300'>
                  To ensure legibility, the full logo should not be scaled below
                  24px in height, and the logomark should not be scaled below
                  64px in both height and width.
                </p>
              </div>
            </div>
          </div>

          {/* Clearspace Example */}
          <div className='mt-8 rounded-lg bg-gray-900/50 p-8'>
            <h4 className='mb-4 text-xl font-semibold text-white'>
              Clearspace Example
            </h4>
            <p className='mb-6 text-sm text-gray-300'>
              The following example demonstrates the minimum clearspace
              requirements around the Neverland logo.
            </p>
            <div className='rounded-lg bg-black/30 p-2 lg:p-18'>
              <div className='flex items-center justify-center'>
                <div className='text-2xl font-bold text-white'>
                  {/* Placeholder for clearspace example image */}
                  <Image
                    src='/assets/brand/clearspace.svg'
                    alt='Logo'
                    width={0}
                    height={0}
                    className='w-[auto] text-white lg:h-[500px]'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
