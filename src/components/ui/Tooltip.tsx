'use client';

// Animation removed per request
import { ReactNode, useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import LiquidGlass from './LiquidGlass';

type TooltipPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

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
  zIndex?: number;
}

const sizeStyles = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
  xl: 'px-5 py-4 text-lg',
};

const maxWidthStyles = {
  sm: 'w-[100px] h-[100px]',
  md: 'w-[200px] h-[200px]',
  lg: 'w-[300px] h-[300px]',
  xl: 'w-[400px] h-[400px]',
};

export const Tooltip = ({
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
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actualPosition, setActualPosition] = useState(position);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shouldShow = !disabled && (title || description || content);

  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let newPosition = position;

    // Check if tooltip would overflow viewport and adjust position
    const positions = {
      top: triggerRect.top - tooltipRect.height - offset < 0,
      bottom:
        triggerRect.bottom + tooltipRect.height + offset > viewport.height,
      left: triggerRect.left - tooltipRect.width - offset < 0,
      right: triggerRect.right + tooltipRect.width + offset > viewport.width,
    };

    // Smart position adjustment
    if (position === 'top' && positions.top) newPosition = 'bottom';
    if (position === 'bottom' && positions.bottom) newPosition = 'top';
    if (position === 'left' && positions.left) newPosition = 'right';
    if (position === 'right' && positions.right) newPosition = 'left';

    setActualPosition(newPosition);
  }, [position, offset]);

  const getTooltipPosition = useCallback(() => {
    if (!triggerRef.current) return { left: 0, top: 0 };
    const triggerRect = triggerRef.current.getBoundingClientRect();
    let positionStyles = {};
    // Calculate position based on actualPosition
    switch (actualPosition) {
      case 'top':
        positionStyles = {
          left: triggerRect.left + triggerRect.width / 2,
          top: triggerRect.top - offset,
          transform: 'translate(-50%, -100%)',
        };
        break;
      case 'bottom':
        positionStyles = {
          left: triggerRect.left + triggerRect.width / 2,
          top: triggerRect.bottom + offset,
          transform: 'translateX(-50%)',
        };
        break;
      case 'left':
        positionStyles = {
          left: triggerRect.left - offset,
          top: triggerRect.top + triggerRect.height / 2,
          transform: 'translate(-100%, -50%)',
        };
        break;
      case 'right':
        positionStyles = {
          left: triggerRect.right + offset,
          top: triggerRect.top + triggerRect.height / 2,
          transform: 'translateY(-50%)',
        };
        break;
      default:
        positionStyles = {
          left: triggerRect.left + triggerRect.width / 2,
          top: triggerRect.top - offset,
          transform: 'translate(-50%, -100%)',
        };
    }

    return positionStyles;
  }, [triggerRef, actualPosition, offset]);

  const showTooltip = useCallback(() => {
    if (!shouldShow) return;

    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    } else {
      setIsVisible(true);
    }
  }, [shouldShow, delay]);

  const hideTooltip = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (hideDelay > 0) {
      hideTimeoutRef.current = setTimeout(() => {
        setIsVisible(false);
      }, hideDelay);
    } else {
      setIsVisible(false);
    }
  }, [hideDelay]);

  const handleMouseEnter = () => {
    if (trigger.includes('hover')) showTooltip();
  };

  const handleMouseLeave = () => {
    if (trigger.includes('hover')) hideTooltip();
  };

  const handleClick = () => {
    if (trigger.includes('click')) {
      if (isVisible) hideTooltip();
      else showTooltip();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const handleFocus = () => {
    if (trigger.includes('focus')) showTooltip();
  };

  const handleBlur = () => {
    if (trigger.includes('focus')) hideTooltip();
  };

  useEffect(() => {
    if (isVisible) {
      calculatePosition();

      // Add scroll and resize event listeners to update tooltip position
      const handlePositionUpdate = () => {
        calculatePosition();
        // Force a re-render to update tooltip position
        setIsVisible(true);
      };

      window.addEventListener('scroll', handlePositionUpdate);
      window.addEventListener('resize', handlePositionUpdate);

      return () => {
        window.removeEventListener('scroll', handlePositionUpdate);
        window.removeEventListener('resize', handlePositionUpdate);
      };
    }
  }, [isVisible, calculatePosition]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    };
  }, []);

  const getArrowStyles = () => {
    if (!showArrow) return '';

    const arrowBase = 'absolute h-0 w-0 border-solid';

    switch (actualPosition) {
      case 'top':
        return `${arrowBase} border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/20 top-full left-1/2 -translate-x-1/2 transform`;
      case 'bottom':
        return `${arrowBase} border-b-4 border-l-4 border-r-4 border-b-white/20 border-l-transparent border-r-transparent bottom-full left-1/2 -translate-x-1/2 transform`;
      case 'left':
        return `${arrowBase} border-b-4 border-l-4 border-t-4 border-b-transparent border-l-white/20 border-t-transparent left-full top-1/2 -translate-y-1/2 transform`;
      case 'right':
        return `${arrowBase} border-b-4 border-r-4 border-t-4 border-b-transparent border-r-white/20 border-t-transparent right-full top-1/2 -translate-y-1/2 transform`;
      default:
        return `${arrowBase} border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/20 top-full left-1/2 -translate-x-1/2 transform`;
    }
  };

  const renderContent = () => {
    if (content) return content;

    return (
      <div>
        {title && <div className='mb-1 font-semibold text-white'>{title}</div>}
        {description && (
          <div className='leading-relaxed text-gray-300'>{description}</div>
        )}
      </div>
    );
  };

  return (
    <>
      <div
        ref={triggerRef}
        className={`relative inline-block ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        tabIndex={
          trigger.includes('focus') || trigger.includes('click') ? 0 : undefined
        }
        role={trigger.includes('click') ? 'button' : undefined}
      >
        {children}
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          isVisible && shouldShow && (
            <div
              ref={tooltipRef}
              className={`fixed ${contentClassName}`}
              style={{
                zIndex: 99999,
                position: 'fixed',
                ...getTooltipPosition(),
              }}
              onMouseEnter={() => trigger.includes('hover') && showTooltip()}
              onMouseLeave={() => trigger.includes('hover') && hideTooltip()}
            >
              <LiquidGlass
                className={`${sizeStyles[size]} ${maxWidth || maxWidthStyles[size]}`}
                blur='sm'
                overlayColor='#14143a'
                overlayOpacity={0.25}
                borderRadius='rounded-[16px]'
                padding='p-5'
              >
                <div className='font-cinzel text-center'>{renderContent()}</div>
              </LiquidGlass>
              {showArrow && <div className={getArrowStyles()} />}
            </div>
          ),
          document.body,
        )}
    </>
  );
};
