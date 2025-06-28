'use client';

import { useEffect, useRef, useState } from 'react';

import { useScrollContext } from '../SmoothScroll';

interface CustomScrollIndicatorProps {
  barWidth?: number;
  className?: string;
}

// This component provides a custom scrollbar indicator that works with Lenis smooth scrolling
export function CustomScrollIndicator({
  barWidth = 6,
  className = '',
}: CustomScrollIndicatorProps) {
  // References to DOM elements
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Get scroll progress from context
  const { scrollProgress } = useScrollContext();

  // Client-side only mounting state
  const [isMounted, setIsMounted] = useState(false);

  // Using a single useEffect for all initialization and cleanup
  useEffect(() => {
    // Mark as mounted on client-side
    setIsMounted(true);

    // Function to update scrollbar thumb position
    const updateThumbPosition = () => {
      if (!thumbRef.current || !scrollbarRef.current) return;

      // Get viewport and document heights
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate thumb height as a proportion of visible area
      const thumbHeightPercentage = viewportHeight / documentHeight;
      const thumbHeight = Math.max(
        thumbHeightPercentage * viewportHeight,
        50, // Minimum thumb size in pixels
      );

      // Set the thumb height
      thumbRef.current.style.height = `${thumbHeight}px`;

      // Calculate and set the thumb position
      const availableTrackSpace = viewportHeight - thumbHeight;
      const thumbPosition = scrollProgress * availableTrackSpace;
      thumbRef.current.style.transform = `translateY(${thumbPosition}px)`;
    };

    // Only run scroll position logic on client
    updateThumbPosition();

    // Add resize listener to recalculate thumb height
    window.addEventListener('resize', updateThumbPosition);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateThumbPosition);
    };
  }, [scrollProgress]);

  // Handle scrolling by mouse or keyboard
  const scrollToPosition = (positionY: number) => {
    if (!scrollbarRef.current) return;

    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const thumbHeight = thumbRef.current?.offsetHeight || 50;

    // Calculate the position as a percentage
    const availableTrackSpace = viewportHeight - thumbHeight;
    const targetScrollPercentage = Math.max(
      0,
      Math.min(1, positionY / availableTrackSpace),
    );

    // Calculate the target scroll position
    const targetScrollPosition =
      targetScrollPercentage * (documentHeight - viewportHeight);

    // Use the custom window.lenis if available for smooth scrolling
    const customWindow = window as unknown as {
      lenis?: { scrollTo: (position: number) => void };
    };
    if (
      customWindow.lenis &&
      typeof customWindow.lenis.scrollTo === 'function'
    ) {
      customWindow.lenis.scrollTo(targetScrollPosition);
    } else {
      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll to position when clicking on the scrollbar track
  const handleTrackClick = (e: React.MouseEvent) => {
    if (!scrollbarRef.current || e.target === thumbRef.current) return;

    const { top: trackTop } = scrollbarRef.current.getBoundingClientRect();
    const { clientY } = e;
    const clickPositionY = clientY - trackTop;

    scrollToPosition(clickPositionY);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!scrollbarRef.current) return;

    const viewportHeight = window.innerHeight;
    const thumbHeight = thumbRef.current?.offsetHeight || 50;
    const currentThumbPosition =
      scrollProgress * (viewportHeight - thumbHeight);

    let newPosition = currentThumbPosition;
    const step = 50; // Pixels to move per key press

    switch (e.key) {
      case 'ArrowDown':
      case 'PageDown':
        newPosition =
          currentThumbPosition + (e.key === 'PageDown' ? step * 4 : step);
        e.preventDefault();
        break;
      case 'ArrowUp':
      case 'PageUp':
        newPosition =
          currentThumbPosition - (e.key === 'PageUp' ? step * 4 : step);
        e.preventDefault();
        break;
      case 'Home':
        newPosition = 0;
        e.preventDefault();
        break;
      case 'End':
        newPosition = viewportHeight;
        e.preventDefault();
        break;
      default:
        return; // Don't handle other keys
    }

    scrollToPosition(newPosition);
  };

  // Only render on client-side to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div
      ref={scrollbarRef}
      className={`custom-scrollbar-track ${className}`}
      onClick={handleTrackClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role='scrollbar'
      aria-orientation='vertical'
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(scrollProgress * 100)}
      aria-controls='scroll-container'
      style={{
        position: 'fixed',
        right: '4px',
        top: 0,
        width: `${barWidth}px`,
        height: '100%',
        zIndex: 1000,
        padding: '2px',
        opacity: 0.8,
        transition: 'opacity 0.3s',
        outline: 'none',
      }}
    >
      <div
        ref={thumbRef}
        className='custom-scrollbar-thumb'
        style={{
          position: 'absolute',
          top: 0,
          width: '100%',
          borderRadius: `${barWidth / 2}px`,
          background: 'linear-gradient(180deg, #d132e0 0%, #530ee3 100%)',
          boxShadow: '0px 0px 8px rgba(114, 0, 214, 0.3)',
          cursor: 'pointer',
          transition: 'background 0.2s, opacity 0.2s',
        }}
        aria-hidden='true'
      />
    </div>
  );
}
