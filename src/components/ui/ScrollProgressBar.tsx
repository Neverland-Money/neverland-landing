'use client';

import { useEffect, useRef } from 'react';

interface ScrollProgressBarProps {
  progress: number;
  height?: number;
  gradient?: boolean;
  className?: string;
}

export function ScrollProgressBar({
  progress,
  height = 4,
  gradient = true,
  className = '',
}: ScrollProgressBarProps) {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress * 100}%`;
    }
  }, [progress]);

  return (
    <div
      className={`scroll-progress-container ${className}`}
      style={{ height: `${height}px` }}
    >
      <div
        ref={progressBarRef}
        className={`scroll-progress-bar ${!gradient ? 'bg-primary-dark' : ''}`}
      />
    </div>
  );
}
