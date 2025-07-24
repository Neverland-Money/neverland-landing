import { ExternalLink } from 'lucide-react';

export function Typography() {
  const typographyStyles = [
    {
      name: 'Primary Brand Text',
      font: 'Cinzel Decorative',
      fontUrl: 'https://fonts.google.com/specimen/Cinzel+Decorative',
      example: 'Neverland Money',
      className: 'text-xl md:text-2xl font-cinzel-decorative',
    },
    {
      name: 'Titles & Headings',
      font: 'Cinzel',
      fontUrl: 'https://fonts.google.com/specimen/Cinzel',
      className: 'text-xl md:text-2xl font-cinzel',
      example: 'Magic & Pixie Dust',
    },
    {
      name: 'Subtitles & Body Text',
      font: 'Merriweather',
      fontUrl: 'https://fonts.google.com/specimen/Merriweather',
      className: 'text-xl md:text-2xl font-merriweather',
      example: 'Powered by Monad',
    },
    {
      name: 'Application Text',
      font: 'Quicksand',
      fontUrl: 'https://fonts.google.com/specimen/Quicksand',
      className: 'text-lg md:text-xl font-quicksand',
      example: 'Deposit Assets & Earn Rewards',
    },
    {
      name: 'Documentation Text',
      font: 'Lexend',
      fontUrl: 'https://fonts.google.com/specimen/Lexend',
      className: 'text-lg md:text-xl font-lexend',
      example: 'Self-Repaying Loans & More',
    },
  ];

  return (
    <section className='py-16'>
      <div className='w-full lg:max-w-4xl'>
        <div className='mb-12'>
          <h3 className='mb-6 text-2xl font-semibold text-white'>Typography</h3>
          <p className='mb-6 leading-relaxed text-gray-300'>
            Our typography system creates hierarchy and ensures readability
            across all platforms.
          </p>
        </div>

        <div className='space-y-8'>
          {typographyStyles.map((style, index) => (
            <div key={index} className='rounded-lg bg-gray-900/50 p-8'>
              <div className='grid grid-cols-1 items-center gap-8 lg:grid-cols-2'>
                <div>
                  <div className='mb-4'>
                    <h4 className='mb-2 text-xl font-semibold text-white'>
                      {style.name}
                    </h4>
                  </div>

                  <div className='text-sm text-gray-300'>
                    <a
                      href={style.fontUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 font-mono text-white transition-colors hover:text-pink-200'
                    >
                      {style.font}
                      <ExternalLink className='h-4 w-4' />
                    </a>
                  </div>
                </div>

                <div className='lg:text-right'>
                  <div className={`${style.className} text-white`}>
                    {style.example}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
