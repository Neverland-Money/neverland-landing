import { CheckCircle, Info } from 'lucide-react';

export function BrandGuidelines() {
  const guidelines = [
    {
      icon: CheckCircle,
      title: 'Logo Usage',
      type: 'do',
      items: [
        'Always maintain minimum clear space around the logo',
        'Use the logo on appropriate backgrounds with sufficient contrast',
        'Scale the logo proportionally - never stretch or distort',
        'Use approved logo variations for different contexts',
      ],
    },
    {
      icon: Info,
      title: 'Color Application',
      type: 'info',
      items: [
        'Primary colors should dominate the design hierarchy',
        'Secondary colors support and complement primary colors',
        'Neutral colors provide balance and readability',
        'Maintain accessibility standards with proper contrast ratios',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Typography Rules',
      type: 'do',
      items: [
        'Use the designated font hierarchy consistently',
        'Maintain proper line spacing for readability',
        'Ensure text remains legible at all sizes',
        'Apply font weights purposefully to create emphasis',
      ],
    },
    {
      icon: Info,
      title: 'Brand Voice',
      type: 'info',
      items: [
        'Professional yet approachable tone',
        'Clear and concise communication',
        'Innovative and forward-thinking language',
        'Trustworthy and reliable messaging',
      ],
    },
  ];

  const getIconColor = (type: string) => {
    switch (type) {
      case 'do':
        return 'text-green-500';
      case 'info':
        return 'text-pink-500';
      default:
        return 'text-muted-foreground';
    }
  };

  const getCardBorder = (type: string) => {
    switch (type) {
      case 'do':
        return 'border-green-200';
      case 'info':
        return 'border-pink-200';
      default:
        return 'border-border';
    }
  };

  return (
    <section className='py-16'>
      <div className='w-full lg:max-w-4xl'>
        <div className='mb-12'>
          <h3 className='mb-6 text-2xl font-semibold text-white'>
            Brand Guidelines
          </h3>
          <p className='mb-6 leading-relaxed text-gray-300'>
            Follow these guidelines to maintain brand consistency and integrity
            across all applications.
          </p>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {guidelines.map((guideline, index) => {
            const Icon = guideline.icon;
            return (
              <div
                key={index}
                className={`rounded-lg bg-gray-900/50 p-6 ${getCardBorder(guideline.type)}`}
              >
                <div className='mb-4 flex items-center gap-3'>
                  <Icon className={`h-6 w-6 ${getIconColor(guideline.type)}`} />
                  <h4 className='text-xl font-semibold text-white'>
                    {guideline.title}
                  </h4>
                </div>

                <ul className='space-y-3'>
                  {guideline.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='flex items-start gap-3'>
                      <div
                        className={`mt-2 h-2 w-2 rounded-full ${getIconColor(guideline.type).replace('text-', 'bg-')}`}
                      ></div>
                      <span className='text-gray-300'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className='mt-16 rounded-lg border border-gray-700 bg-gray-900/50 p-8'>
          <h4 className='mb-6 text-xl font-semibold text-white'>
            Quick Reference
          </h4>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div>
              <h5 className='mb-3 font-semibold text-white'>
                Logo Clear Space
              </h5>
              <p className='text-sm text-gray-300'>
                Minimum clear space equals the height of the &quot;N&quot; in
                Neverland
              </p>
            </div>
            <div>
              <h5 className='mb-3 font-semibold text-white'>Minimum Size</h5>
              <p className='text-sm text-gray-300'>
                Logo should never be smaller than 24px in height for digital use
              </p>
            </div>
            <div>
              <h5 className='mb-3 font-semibold text-white'>File Formats</h5>
              <p className='text-sm text-gray-300'>
                Use SVG for web, PNG for presentations, and vector files for
                print
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
