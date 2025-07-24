'use client';

import { Download, Package, FileText } from 'lucide-react';

export function DownloadSection() {
  const downloadPackages = [
    {
      icon: Package,
      title: 'Complete Brand Kit',
      description: 'Complete brand package with all assets and variations',
      size: '4.72 MB',
      format: 'ZIP',
      filename: 'neverland-brand-kit.zip',
    },
    {
      icon: FileText,
      title: 'Essential Logo Assets',
      description: 'Essential logo assets in PNG and SVG formats',
      size: '232 KB',
      format: 'ZIP',
      filename: 'neverland-essential-logo-assets.zip',
    },
  ];

  return (
    <section className='py-16'>
      <div className='w-full lg:max-w-4xl'>
        <div className='mb-12'>
          <h3 className='mb-6 text-3xl font-semibold text-white'>
            Download Assets
          </h3>
          <p className='mb-6 leading-relaxed text-gray-300'>
            Get everything you need to represent Neverland Money the right way.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {downloadPackages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <a
                key={index}
                href={`/download/${pkg.filename}`}
                download={pkg.filename}
                className='group flex h-full flex-col rounded-lg border border-gray-700 bg-gray-900/50 p-6 text-left transition-all duration-200 hover:border-gray-600 hover:bg-gray-900/70 hover:shadow-lg'
              >
                <div className='mb-4 flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Icon className='h-6 w-6 text-pink-200' />
                    <h4 className='text-lg font-semibold text-white group-hover:text-pink-200'>
                      {pkg.title}
                    </h4>
                  </div>
                  <Download className='h-5 w-5 text-gray-400 transition-colors group-hover:text-pink-200' />
                </div>

                <p className='mb-4 flex-1 text-sm text-gray-300 group-hover:text-gray-200'>
                  {pkg.description}
                </p>

                <div className='flex items-center gap-3 text-xs text-gray-400 group-hover:text-gray-300'>
                  <span className='font-medium'>{pkg.format}</span>
                  <span>•</span>
                  <span>{pkg.size}</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className='mt-16 rounded-lg border border-gray-700 bg-gray-900/50 p-8'>
          <h4 className='mb-6 text-xl font-semibold text-white'>
            Download Support
          </h4>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div>
              <h5 className='mb-3 font-semibold text-white'>Need Help?</h5>
              <p className='text-sm text-gray-300'>
                <a
                  href='mailto:brand@neverland.money'
                  className='text-pink-200 transition-colors hover:text-pink-300'
                >
                  Contact our team
                </a>{' '}
                for questions about usage or custom assets
              </p>
            </div>
            <div>
              <h5 className='mb-3 font-semibold text-white'>File Formats</h5>
              <p className='text-sm text-gray-300'>
                All packages include multiple formats optimized for different
                use cases
              </p>
            </div>
            <div>
              <h5 className='mb-3 font-semibold text-white'>Usage Agreement</h5>
              <p className='text-sm text-gray-300'>
                Commercial usage requires prior approval per our brand
                guidelines
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
