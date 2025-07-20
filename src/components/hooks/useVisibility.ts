import { useCallback, useEffect, useRef, useState } from 'react';

type TooltipTrigger = 'hover' | 'click' | 'focus';

interface UseVisibilityParams {
  trigger: TooltipTrigger[];
  delay?: number;
  hideDelay?: number;
  disabled?: boolean;
}

export function useVisibility({
  trigger,
  delay = 0,
  hideDelay = 0,
  disabled = false,
}: UseVisibilityParams) {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeout = useRef<NodeJS.Timeout | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
  const isHover = trigger.includes('hover');
  const isClick = trigger.includes('click');
  const isFocus = trigger.includes('focus');

  const show = useCallback(() => {
    if (disabled) return;
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    if (delay > 0) {
      showTimeout.current = setTimeout(() => setIsVisible(true), delay);
    } else {
      setIsVisible(true);
    }
  }, [delay, disabled]);

  const hide = useCallback(() => {
    if (showTimeout.current) {
      clearTimeout(showTimeout.current);
      showTimeout.current = null;
    }
    if (hideDelay > 0) {
      hideTimeout.current = setTimeout(() => setIsVisible(false), hideDelay);
    } else {
      setIsVisible(false);
    }
  }, [hideDelay]);

  const onMouseEnter = useCallback(() => {
    if (isHover) show();
  }, [isHover, show]);

  const onMouseLeave = useCallback(() => {
    if (isHover) hide();
  }, [isHover, hide]);

  const onClick = useCallback(() => {
    if (isClick) {
      if (isVisible) hide();
      else show();
    }
  }, [isClick, isVisible, hide, show]);

  const onFocus = useCallback(() => {
    if (isFocus) show();
  }, [isFocus, show]);

  const onBlur = useCallback(() => {
    if (isFocus) hide();
  }, [isFocus, hide]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (isClick && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        if (isVisible) hide();
        else show();
      }
    },
    [isClick, isVisible, hide, show],
  );

  useEffect(() => {
    return () => {
      if (showTimeout.current) clearTimeout(showTimeout.current);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  return {
    isVisible,
    handlers: {
      onMouseEnter,
      onMouseLeave,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
    },
  };
}
