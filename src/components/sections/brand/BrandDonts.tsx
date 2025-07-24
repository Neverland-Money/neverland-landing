import { X } from 'lucide-react';
import Image from 'next/image';

export function BrandDonts() {
  const dontCategories = [
    {
      title: "Logo Don'ts",
      items: [
        {
          title: "Don't stretch or distort the logo",
          description: 'Always maintain the original proportions',
          src: '/assets/brand/stretched-logo-example.png',
        },
        {
          title: "Don't use on low contrast backgrounds",
          description: 'Ensure sufficient contrast for visibility',
          src: '/assets/brand/low-contrast-example.png',
        },
        {
          title: "Don't add effects or modifications",
          description: 'No shadows, outlines, or other effects',
          src: '/assets/brand/modified-logo-example.png',
        },
        {
          title: "Don't ignore minimum clear space",
          description: 'Maintain proper spacing around the logo',
          src: '/assets/brand/cramped-logo-example.png',
        },
      ],
    },
    {
      title: "Color Don'ts",
      items: [
        {
          title: "Don't use unauthorized colors",
          description: 'Stick to the approved color palette',
          src: '/assets/brand/wrong-colors-example.png',
        },
        {
          title: "Don't create poor color combinations",
          description: 'Avoid clashing or illegible combinations',
          src: '/assets/brand/bad-color-combo-example.png',
        },
      ],
    },
  ];

  return (
    <section className='py-16'>
      <div className='w-full lg:max-w-4xl'>
        <div className='mb-12'>
          <h3 className='mb-6 text-3xl font-semibold text-white'>
            Brand Don&apos;ts
          </h3>
          <p className='mb-6 leading-relaxed text-gray-300'>
            Avoid these common mistakes to maintain brand integrity and
            consistency across all applications.
          </p>
        </div>

        <div className='space-y-16'>
          {dontCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h4 className='mb-6 text-xl font-semibold text-white'>
                {category.title}
              </h4>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className='rounded-lg border border-red-200 bg-gray-900/50 p-6'
                  >
                    <div className='mb-4 flex items-center gap-3'>
                      <X className='h-6 w-6 text-red-500' />
                      <h5 className='text-[17px] font-semibold text-white'>
                        {item.title}
                      </h5>
                    </div>

                    <p className='mb-4 text-gray-300'>{item.description}</p>

                    <div className='relative flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-red-300 bg-red-100/10 p-8'>
                      {item.src ? (
                        <>
                          <Image
                            src={item.src}
                            alt={item.title}
                            width={200}
                            height={200}
                            className='rounded-lg object-contain'
                          />
                          {/* Red X overlay */}
                          <div className='absolute right-4 bottom-4 flex h-8 w-8 items-center justify-center rounded bg-red-500/90'>
                            <X className='h-5 w-5 text-white' />
                          </div>
                        </>
                      ) : (
                        <div className='text-center text-sm text-red-400'>
                          <div className='mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500/20'>
                            <X className='h-6 w-6' />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 rounded-lg border border-gray-700 bg-gray-900/50 p-8'>
          <h4 className='mb-6 text-xl font-semibold text-white'>
            Important Reminders
          </h4>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div>
              <h5 className='mb-3 font-semibold text-white'>Asset Usage</h5>
              <p className='text-sm text-gray-300'>
                Always download the latest brand assets
              </p>
            </div>
            <div>
              <h5 className='mb-3 font-semibold text-white'>Need Help?</h5>
              <p className='text-sm text-gray-300'>
                When in doubt,{' '}
                <a
                  href='mailto:brand@neverland.money'
                  className='text-pink-200 transition-colors hover:text-pink-300'
                >
                  contact the team
                </a>{' '}
                for guidance
              </p>
            </div>
            <div>
              <h5 className='mb-3 font-semibold text-white'>Stay Updated</h5>
              <p className='text-sm text-gray-300'>
                Review these guidelines regularly to stay current
              </p>
            </div>
            <div>
              <h5 className='mb-3 font-semibold text-white'>Report Issues</h5>
              <p className='text-sm text-gray-300'>
                <a
                  href='mailto:brand@neverland.money'
                  className='text-pink-200 transition-colors hover:text-pink-300'
                >
                  Report any misuse
                </a>{' '}
                of brand elements you encounter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
