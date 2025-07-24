'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function ColorPalette() {
  const gradientInfo = {
    name: 'Neverland Gradient',
    gradient: 'linear-gradient(to bottom, #192170 0%, #480052 100%)',
  };

  const primaryColors = [
    {
      name: 'Neverland Blue',
      hex: '#192170',
      rgb: '25, 33, 112',
    },
    {
      name: 'Neverland Purple',
      hex: '#480052',
      rgb: '72, 0, 82',
    },
  ];

  const secondaryColors = [
    {
      name: 'Neverland Magenta',
      hex: '#b506f5',
      rgb: '181, 6, 245',
    },
    {
      name: 'Neverland White',
      hex: '#FFFFFF',
      rgb: '255, 255, 255',
    },
  ];

  const useCopyToClipboard = ({
    copiedDuration = 1000,
  }: { copiedDuration?: number } = {}) => {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (value: string) => {
      navigator.clipboard.writeText(value);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), copiedDuration);
    };

    return { isCopied, copyToClipboard };
  };

  const primaryHex1 = useCopyToClipboard();
  const primaryRgb1 = useCopyToClipboard();
  const primaryHex2 = useCopyToClipboard();
  const primaryRgb2 = useCopyToClipboard();
  const secondaryHex1 = useCopyToClipboard();
  const secondaryRgb1 = useCopyToClipboard();
  const secondaryHex2 = useCopyToClipboard();
  const secondaryRgb2 = useCopyToClipboard();

  return (
    <section className='py-16'>
      <div className='w-full lg:max-w-4xl'>
        <div className='mb-12'>
          <h3 className='mb-6 text-2xl font-semibold text-white'>
            Color Palette
          </h3>
          <p className='mb-6 leading-relaxed text-gray-300'>
            Our signature gradient and brand colors that define the Neverland
            identity.
          </p>
        </div>

        <div className='space-y-12'>
          {/* Gradient Section */}
          <div>
            <h4 className='mb-6 text-xl font-semibold text-white'>Gradient</h4>
            <div className='rounded-lg bg-gray-900/50 p-8'>
              <h5 className='text-xl font-semibold text-white'>
                {gradientInfo.name}
              </h5>
              <div
                className='mt-4 h-32 w-full rounded-lg'
                style={{ background: gradientInfo.gradient }}
              ></div>
            </div>
          </div>

          {/* Primary Colors Section */}
          <div>
            <h4 className='mb-6 text-xl font-semibold text-white'>
              Primary Colors
            </h4>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {primaryColors.map((color, index) => {
                const hexCopy = index === 0 ? primaryHex1 : primaryHex2;
                const rgbCopy = index === 0 ? primaryRgb1 : primaryRgb2;

                return (
                  <div key={index} className='rounded-lg bg-gray-900/50 p-6'>
                    <h5 className='font-semibold text-white'>{color.name}</h5>

                    <div
                      className='my-4 h-20 w-full rounded-lg'
                      style={{ backgroundColor: color.hex }}
                    ></div>

                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <span className='font-mono text-sm text-gray-300'>
                          {color.hex}
                        </span>
                        <button
                          onClick={() => hexCopy.copyToClipboard(color.hex)}
                          className='cursor-pointer rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-white'
                        >
                          {hexCopy.isCopied ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </button>
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='font-mono text-sm text-gray-300'>
                          rgb({color.rgb})
                        </span>
                        <button
                          onClick={() =>
                            rgbCopy.copyToClipboard(`rgb(${color.rgb})`)
                          }
                          className='cursor-pointer rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-white'
                        >
                          {rgbCopy.isCopied ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Secondary/Accent Colors Section */}
          <div>
            <h4 className='mb-6 text-xl font-semibold text-white'>
              Secondary/Accent Colors
            </h4>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
              {secondaryColors.map((color, index) => {
                const hexCopy = index === 0 ? secondaryHex1 : secondaryHex2;
                const rgbCopy = index === 0 ? secondaryRgb1 : secondaryRgb2;

                return (
                  <div key={index} className='rounded-lg bg-gray-900/50 p-6'>
                    <h5 className='font-semibold text-white'>{color.name}</h5>

                    <div
                      className='my-4 h-20 w-full rounded-lg'
                      style={{ backgroundColor: color.hex }}
                    ></div>

                    <div className='space-y-2'>
                      <div className='flex items-center justify-between'>
                        <span className='font-mono text-sm text-gray-300'>
                          {color.hex}
                        </span>
                        <button
                          onClick={() => hexCopy.copyToClipboard(color.hex)}
                          className='cursor-pointer rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-white'
                        >
                          {hexCopy.isCopied ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </button>
                      </div>
                      <div className='flex items-center justify-between'>
                        <span className='font-mono text-sm text-gray-300'>
                          rgb({color.rgb})
                        </span>
                        <button
                          onClick={() =>
                            rgbCopy.copyToClipboard(`rgb(${color.rgb})`)
                          }
                          className='cursor-pointer rounded p-1 text-gray-400 hover:bg-gray-800 hover:text-white'
                        >
                          {rgbCopy.isCopied ? (
                            <Check className='h-4 w-4' />
                          ) : (
                            <Copy className='h-4 w-4' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
