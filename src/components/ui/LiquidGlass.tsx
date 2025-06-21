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

export default function LiquidGlass({
  children,
  className = '',
  padding = 'p-10',
  borderRadius = 'rounded-3xl',
  blur = 'sm',
  overlayColor = '#14143a',
  overlayOpacity = 0.25,
  borderColor = '#ffffff',
  borderOpacity = 0.1,
}: LiquidGlassProps) {
  // Generate the CSS class for backdrop blur
  const blurClass = `backdrop-blur-${blur}`;

  // Generate the background color with opacity
  const bgColorClass = `bg-[${overlayColor}]/${Math.floor(overlayOpacity * 100)}`;

  // Convert borderRadius class to pixel value
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

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${borderRadius} ${padding} ${blurClass} ${className}`}
    >
      {/* Dark overlay with subtle background-blur matching */}
      <div className={`absolute inset-0 ${borderRadius} ${bgColorClass}`} />
      {/* Border with consistent rendering */}
      <div
        className={`absolute inset-0 overflow-hidden ${borderRadius}`}
        style={{
          borderRadius: radiusValue,
          border: `1px solid ${borderColor}${Math.round(borderOpacity * 100)
            .toString(16)
            .padStart(2, '0')}`,
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

        {/* Almost imperceptible bottom-right edge */}
        <div
          className='absolute right-0 bottom-0 h-full w-full'
          style={{
            background:
              'linear-gradient(315deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%)',
          }}
        />
      </div>

      {/* Content inside glass container */}
      <div className='relative z-10'>{children}</div>
    </div>
  );
}
