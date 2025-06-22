import { ReactNode, useMemo } from 'react';

interface LiquidGlassProps {
  children: ReactNode;
  className?: string;
  width?: string;
  height?: string;
  padding?: string;
  borderRadius?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  overlayColor?: string;
  overlayOpacity?: number;
  borderColor?: string;
  borderOpacity?: number;
}

// Map Tailwind rounded classes to their pixel values
const borderRadiusMap: Record<string, string> = {
  'rounded-none': '0px',
  'rounded-sm': '0.125rem', // 2px
  rounded: '0.25rem', // 4px
  'rounded-md': '0.375rem', // 6px
  'rounded-lg': '0.5rem', // 8px
  'rounded-xl': '0.75rem', // 12px
  'rounded-2xl': '1rem', // 16px
  'rounded-3xl': '1.5rem', // 24px
  'rounded-4xl': '2rem', // 32px
  'rounded-full': '9999px',
};

// Map blur sizes to pixel values
const blurMap: Record<string, string> = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  '2xl': '24px',
  '3xl': '32px',
};

// Map padding Tailwind classes to their values
const paddingMap: Record<string, string> = {
  'p-0': '0px',
  'p-1': '0.25rem',
  'p-2': '0.5rem',
  'p-3': '0.75rem',
  'p-4': '1rem',
  'p-5': '1.25rem',
  'p-6': '1.5rem',
  'p-8': '2rem',
  'p-10': '2.5rem',
  'p-12': '3rem',
};

export default function LiquidGlass({
  children,
  className = '',
  padding = 'p-10',
  borderRadius = 'rounded-3xl',
  blur = 'sm',
  overlayColor = '#591a7e',
  overlayOpacity = 0.4,
  borderColor = '#ffffff',
  borderOpacity = 0.2,
}: LiquidGlassProps) {
  // Convert values for inline styles
  const radiusValue = useMemo(() => {
    // First check if it's already a pixel or rem value
    if (
      borderRadius.includes('px') ||
      borderRadius.includes('rem') ||
      borderRadius.includes('%')
    ) {
      return borderRadius;
    }

    // Check if it's a Tailwind class in our map
    for (const [className, value] of Object.entries(borderRadiusMap)) {
      if (borderRadius === className) {
        return value;
      }
    }

    // Default fallback
    return '1.5rem'; // 24px
  }, [borderRadius]);

  // Convert blur value
  const blurValue = useMemo(() => {
    return blurMap[blur] || '4px';
  }, [blur]);

  // Convert padding value
  const paddingValue = useMemo(() => {
    return paddingMap[padding] || '2.5rem';
  }, [padding]);

  // Format hex opacity for border
  const hexOpacity = Math.round(borderOpacity * 255)
    .toString(16)
    .padStart(2, '0');

  // Format hex opacity for overlay
  const overlayHexOpacity = Math.round(overlayOpacity * 255)
    .toString(16)
    .padStart(2, '0');

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${className}`}
      style={{
        padding: paddingValue,
        borderRadius: radiusValue,
      }}
    >
      {/* Dark overlay with blur effect */}
      <div
        className='absolute inset-0'
        style={{
          borderRadius: radiusValue,
          backgroundColor: `${overlayColor}${overlayHexOpacity}`,
          backdropFilter: `blur(${blurValue})`,
        }}
      />

      {/* Border effect */}
      <div
        className='absolute inset-0 overflow-hidden'
        style={{
          borderRadius: radiusValue,
          border: `1px solid ${borderColor}${hexOpacity}`,
        }}
      >
        {/* Ultra-subtle top-left edge highlight */}
        <div
          className='absolute top-0 left-0 h-full w-full'
          style={{
            boxShadow: 'inset 1px 1px 0 0 rgba(255, 255, 255, 0.15)',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 40%)',
          }}
        />

        {/* Subtle bottom-right edge */}
        <div
          className='absolute right-0 bottom-0 h-full w-full'
          style={{
            background:
              'linear-gradient(315deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%)',
          }}
        />
      </div>

      {/* Content inside glass container */}
      <div className='relative z-10 w-full'>{children}</div>
    </div>
  );
}
