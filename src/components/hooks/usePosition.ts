import { RefObject, useCallback, useEffect, useState } from 'react';

import { throttle } from '@/utils/throttle';

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

interface UsePositionParams {
  triggerRef: RefObject<HTMLElement | null>;
  tooltipRef: RefObject<HTMLElement | null>;
  position: TooltipPosition;
  offset?: number;
  isVisible: boolean;
}

export function usePosition({
  triggerRef,
  tooltipRef,
  position,
  offset = 8,
  isVisible,
}: UsePositionParams) {
  const [actual, setActual] = useState<TooltipPosition>(position);

  const calculate = useCallback(() => {
    const t = triggerRef.current;
    const p = tooltipRef.current;
    if (!t || !p) return;
    const r = t.getBoundingClientRect();
    const tip = p.getBoundingClientRect();
    const vp = { w: window.innerWidth, h: window.innerHeight };
    let pos: TooltipPosition = position;
    if (position === 'top' && r.top - tip.height - offset < 0) pos = 'bottom';
    if (position === 'bottom' && r.bottom + tip.height + offset > vp.h)
      pos = 'top';
    if (position === 'left' && r.left - tip.width - offset < 0) pos = 'right';
    if (position === 'right' && r.right + tip.width + offset > vp.w)
      pos = 'left';
    setActual(pos);
  }, [position, offset, triggerRef, tooltipRef]);

  const getStyles = useCallback((): {
    left: number;
    top: number;
    transform: string;
  } => {
    const t = triggerRef.current;
    if (!t) return { left: 0, top: 0, transform: '' };
    const r = t.getBoundingClientRect();
    switch (actual) {
      case 'top':
        return {
          left: r.left + r.width / 2,
          top: r.top - offset,
          transform: 'translate(-50%, -100%)',
        };
      case 'bottom':
        return {
          left: r.left + r.width / 2,
          top: r.bottom + offset,
          transform: 'translateX(-50%)',
        };
      case 'left':
        return {
          left: r.left - offset,
          top: r.top + r.height / 2,
          transform: 'translate(-100%, -50%)',
        };
      case 'right':
        return {
          left: r.right + offset,
          top: r.top + r.height / 2,
          transform: 'translateY(-50%)',
        };
      default:
        return { left: r.left, top: r.top, transform: '' };
    }
  }, [actual, offset, triggerRef]);

  const arrowClass = useCallback((): string => {
    const base = 'absolute h-0 w-0 border-solid';
    switch (actual) {
      case 'top':
        return `${base} border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/20 top-full left-1/2 -translate-x-1/2`;
      case 'bottom':
        return `${base} border-b-4 border-l-4 border-r-4 border-b-white/20 border-l-transparent border-r-transparent bottom-full left-1/2 -translate-x-1/2`;
      case 'left':
        return `${base} border-b-4 border-l-4 border-t-4 border-b-transparent border-l-white/20 border-t-transparent left-full top-1/2 -translate-y-1/2`;
      case 'right':
        return `${base} border-b-4 border-r-4 border-t-4 border-b-transparent border-r-white/20 border-t-transparent right-full top-1/2 -translate-y-1/2`;
      default:
        return base;
    }
  }, [actual]);

  useEffect(() => {
    if (!isVisible) return;
    calculate();
    const onScroll = throttle(calculate, 100);
    window.addEventListener('scroll', onScroll, true);
    window.addEventListener('resize', calculate);
    return () => {
      window.removeEventListener('scroll', onScroll, true);
      window.removeEventListener('resize', calculate);
    };
  }, [isVisible, calculate]);

  return { getStyles, arrowClass };
}
