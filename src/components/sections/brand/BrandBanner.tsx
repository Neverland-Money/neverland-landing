import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function BrandBanner() {
  return (
    <section>
      <div className='font-lexend mx-auto w-full max-w-7xl px-4 pt-8 pb-12 sm:px-6 lg:px-8 lg:pt-36'>
        {/* Breadcrumb Navigation */}
        <nav className='mb-8 flex items-center space-x-2 text-sm text-gray-400'>
          <Link
            href='/'
            className='transition-colors duration-200 hover:text-white'
          >
            Home
          </Link>
          <ChevronRight className='h-4 w-4' />
          <span className='text-white'>Brand</span>
        </nav>

        <h1 className='font-cinzel text-3xl font-bold text-white lg:text-6xl'>
          Neverland Brand
        </h1>
        <div className='mt-6 space-y-4 text-gray-300'>
          <p className='font-lexend mt-4 font-light text-gray-300'>
            Keep the Neverland spirit alive by following these guidelines when
            promoting Neverland Money in ads, articles, websites, or printed
            materials.
          </p>
        </div>
      </div>
    </section>
  );
}
