'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import Header from '@/components/layout/Header';
import ActionButton from '@/components/ui/ActionButton';

export default function NotFound() {
  return (
    <main className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Image with Gradients - Same as Features */}
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
      <div className='relative z-10'>
        {/* Shared Header */}
        <Header />

        {/* 404 Content */}
        <div className='flex min-h-screen w-full flex-col items-center justify-center px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8'>
          {/* Blurred Content Wrapper */}
          <div className='max-w-4xl rounded-3xl border border-white/10 bg-[#0a041f]/70 p-8 backdrop-blur-md sm:p-12 lg:p-16'>
            {/* 404 Number */}
            <div className='mb-8'>
              <h1 className='font-cinzel-decorative text-8xl font-bold text-white opacity-20 sm:text-9xl'>
                404
              </h1>
            </div>

            {/* Main Message */}
            <div className='mx-auto mb-12 max-w-2xl'>
              <h2 className='font-cinzel-decorative mb-6 font-bold text-white sm:text-3xl'>
                Welcome to the lost boys club!
              </h2>
              <div className='mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-purple-400 to-pink-400' />
              <p className='font-lexend mb-4 text-purple-200 sm:text-xl'>
                Looks like you&apos;ve wandered off the path to Neverland...
              </p>
            </div>

            {/* Fun Neverland Quote */}
            <div className='mx-auto mb-6 max-w-lg rounded-2xl border border-purple-400/20 bg-purple-900/10 p-6 backdrop-blur-sm md:mb-12'>
              <p className='font-cinzel text-purple-100 italic sm:text-xl'>
                &quot;All you need is faith, trust, and a little bit of pixie
                dust...
                <span className='mt-2 block text-purple-300'>
                  and maybe the right URL.&quot;
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col justify-center gap-4 sm:flex-row sm:gap-6'>
              {/* Back Button */}
              <button
                onClick={() => window.history.back()}
                className='group mx-auto flex w-[240px] cursor-pointer items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-500/20 hover:shadow-lg hover:shadow-purple-500/20'
              >
                <ArrowLeft className='h-5 w-5 transition-transform group-hover:-translate-x-1' />
                <span className='font-lexend'>Go Back</span>
              </button>

              {/* Enter App Button with Stars and Stardust */}
              <Link href='/'>
                <ActionButton
                  text='Soon'
                  className='mx-auto w-[240px]'
                  buttonName='enter_app'
                  buttonLocation='404_page'
                  showStars={true}
                  showStardust={true}
                />
              </Link>
            </div>

            {/* Footer Message */}
            <div className='mt-16 text-center'>
              <p className='font-lexend text-sm text-purple-200/50'>
                Need help finding your way? Our Lost Boys support team is here
                to guide you home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
