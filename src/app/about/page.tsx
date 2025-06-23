'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import LiquidGlass from '@/components/ui/LiquidGlass';

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page with the about section anchor
    router.push('/#about');
  }, [router]);

  return (
    <div className='relative flex min-h-screen items-center justify-center'>
      {/* Background gradient */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#2a1a4a] to-[#4a2a6a]' />
      {/* Background image */}
      <div className='absolute inset-0'>
        <Image
          src='/assets/images/features/background.webp'
          alt='Starry mountain landscape background'
          fill
          className='object-cover'
          priority
        />
      </div>
      {/* iOS 26-style glass container */}
      <LiquidGlass blur='sm' padding='p-10'>
        <div className='flex flex-col items-center justify-center space-y-5'>
          <div className='relative'>
            {/* Glow effect */}
            <div className='absolute -inset-2 rounded-full bg-purple-500/30 blur-lg' />
            {/* Outer circle */}
            <div className='relative h-16 w-16 rounded-full border-4 border-purple-300/40'></div>
            {/* Spinning inner circle */}
            <div className='absolute top-0 left-0 h-16 w-16 animate-spin rounded-full border-t-4 border-l-4 border-purple-500'></div>
          </div>

          <p className='font-lexend mt-2 text-center text-white/90 drop-shadow-lg'>
            Redirecting to <span className='font-bold'>About</span> section...
          </p>
        </div>
      </LiquidGlass>
    </div>
  );
}
