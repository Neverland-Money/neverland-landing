'use client';

import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';

import { usePosition } from '@/components/hooks/usePosition';
import { useVisibility } from '@/components/hooks/useVisibility';

import LiquidGlass from './LiquidGlass';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type TooltipTrigger = 'hover' | 'click' | 'focus';
type TooltipSize = 'sm' | 'md' | 'lg' | 'xl';

interface TooltipProps {
  children: ReactNode;
  title?: string;
  description?: string;
  content?: ReactNode;
  position?: TooltipPosition;
  trigger?: TooltipTrigger[];
  size?: TooltipSize;
  delay?: number;
  hideDelay?: number;
  disabled?: boolean;
  showArrow?: boolean;
  maxWidth?: string;
  className?: string;
  contentClassName?: string;
  offset?: number;
}

const sizeStyles: Record<TooltipSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
  xl: 'px-5 py-4 text-lg',
};

const defaultMaxWidth: Record<TooltipSize, string> = {
  sm: 'w-[100px]',
  md: 'w-[260px]',
  lg: 'w-[300px]',
  xl: 'w-[400px]',
};

export function Tooltip({
  children,
  title,
  description,
  content,
  position = 'top',
  trigger = ['hover'],
  size = 'md',
  delay = 0,
  hideDelay = 0,
  disabled = false,
  showArrow = true,
  maxWidth,
  className = '',
  contentClassName = '',
  offset = 8,
}: TooltipProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const { isVisible, handlers } = useVisibility({
    trigger,
    delay,
    hideDelay,
    disabled,
  });
  const { getStyles, arrowClass } = usePosition({
    triggerRef,
    tooltipRef,
    position,
    offset,
    isVisible,
  });

  const hasContent = Boolean(title || description || content);

  return (
    <>
      <div
        ref={triggerRef}
        className={`relative inline-block ${className}`}
        {...handlers}
        tabIndex={
          trigger.includes('focus') || trigger.includes('click') ? 0 : undefined
        }
        role={trigger.includes('click') ? 'button' : undefined}
      >
        {children}
      </div>

      {hasContent &&
        isVisible &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={tooltipRef}
            className={`fixed ${contentClassName}`}
            style={{ zIndex: 99999, ...getStyles() }}
            {...(showArrow && {
              onMouseEnter: handlers.onMouseEnter,
              onMouseLeave: handlers.onMouseLeave,
            })}
          >
            <LiquidGlass
              className={`${sizeStyles[size]} ${maxWidth || defaultMaxWidth[size]}`}
              overlayColor='#30016d'
              overlayOpacity={0.7}
            >
              <div className='font-cinzel text-center'>
                {content ?? (
                  <>
                    {title && (
                      <div className='mb-1 font-semibold text-white'>
                        {title}
                      </div>
                    )}
                    {description && (
                      <div className='leading-relaxed text-gray-300'>
                        {description}
                      </div>
                    )}
                  </>
                )}
              </div>
            </LiquidGlass>
            {showArrow && <div className={arrowClass()} />}
          </div>,
          document.body,
        )}
    </>
  );
}
