import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Image with Gradients */}
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
      <div className='relative z-10 flex min-h-screen w-full flex-col items-center px-4 pt-28 pb-16 sm:px-6 lg:px-8 lg:pt-36'>
        {/* Header Section */}
        <div className='mb-16 flex w-[329px] max-w-sm flex-col items-center gap-3 text-center lg:mb-25'>
          <h2 className='font-cinzel text-4xl leading-[110%] font-normal text-white uppercase sm:text-5xl lg:text-6xl'>
            Key Features
          </h2>
          <p className='font-merriweather text-base leading-[140%] text-white sm:text-lg'>
            Discover the magical features that make Neverland the perfect DeFi
            experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className='flex w-full max-w-6xl flex-col items-center gap-5 lg:flex-row lg:justify-center'>
          {/* Capital Efficiency Card */}
          <div className='group relative flex h-[250px] w-[375px] flex-col items-center gap-2 rounded-[16px] border border-white/20 px-[45px] py-[75px] backdrop-blur-[6px] transition-all duration-300 hover:border-white/30 lg:h-[370px] lg:w-[370px] lg:py-[122px]'>
            {/* Card Background Frame */}
            <div className='absolute inset-0 overflow-hidden rounded-[16px]'>
              {/* Mobile Frame */}
              <Image
                src='/assets/images/features/frame-wide.webp'
                alt='Feature card frame'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                className='object-cover lg:hidden'
              />
              {/* Desktop Frame */}
              <Image
                src='/assets/images/features/frame.webp'
                alt='Feature card frame'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                className='hidden object-cover lg:block'
              />
            </div>

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center gap-[8px] text-center'>
              <h3 className='font-cinzel text-xl leading-[110%] font-normal text-white uppercase sm:text-2xl lg:text-[24px]'>
                Capital Efficiency
              </h3>
              <p className='font-merriweather max-w-[280px] text-sm leading-[140%] text-white/80 sm:text-base'>
                Advanced automated looping strategies ensure users leverage
                low-utilization pools to maximize earnings.
              </p>
            </div>
          </div>

          {/* Self-Repaying Loans Card */}
          <div className='group relative flex h-[250px] w-[375px] flex-col items-center gap-2 rounded-[16px] border border-white/20 px-[45px] py-[75px] backdrop-blur-[6px] transition-all duration-300 hover:border-white/30 lg:h-[370px] lg:w-[370px] lg:py-[122px]'>
            {/* Card Background Frame */}
            <div className='absolute inset-0 overflow-hidden rounded-[16px]'>
              {/* Mobile Frame */}
              <Image
                src='/assets/images/features/frame-wide.webp'
                alt='Feature card frame'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                className='scale-x-[-1] object-cover lg:hidden'
              />
              {/* Desktop Frame */}
              <Image
                src='/assets/images/features/frame.webp'
                alt='Feature card frame'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                fill
                className='hidden scale-x-[-1] object-cover lg:block'
              />
            </div>

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center gap-[8px] text-center'>
              <h3 className='font-cinzel text-xl leading-[110%] font-normal text-white uppercase sm:text-2xl lg:text-[24px]'>
                Self-Repaying Loans
              </h3>
              <p className='font-merriweather max-w-[299px] text-sm leading-[140%] text-white/80 sm:text-base'>
                Set-and-forget feature to automatically leverage platform
                incentives into loan repayments, providing a carefree, magical
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
