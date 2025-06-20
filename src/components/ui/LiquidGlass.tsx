import { ReactNode } from 'react';

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
}

export default function LiquidGlass({
  children,
  className = '',
  width = 'auto',
  height = 'auto',
  padding = 'p-10',
  borderRadius = 'rounded-3xl',
  blur = 'sm',
  overlayColor = '#14143a',
  overlayOpacity = 0.25,
}: LiquidGlassProps) {
  // Generate the CSS class for backdrop blur
  const blurClass = `backdrop-blur-${blur}`;

  // Generate the background color with opacity
  const bgColorClass = `bg-[${overlayColor}]/${Math.floor(overlayOpacity * 100)}`;

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${borderRadius} ${padding} ${blurClass} ${className}`}
      style={{ width, height }}
    >
      {/* Dark overlay with subtle background-blur matching */}
      <div className={`absolute inset-0 ${borderRadius} ${bgColorClass}`} />
      {/* Variable thickness border container */}
      <div
        className={`absolute inset-0 overflow-hidden ${borderRadius}`}
        style={{
          borderRadius: borderRadius.includes('rounded-') ? '24px' : undefined,
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
            boxShadow: 'inset -1px -1px 0 0 rgba(255, 255, 255, 0.08)',
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
