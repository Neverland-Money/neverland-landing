'use client';

import Lenis from 'lenis';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ScrollContextType {
  lenis: Lenis | null;
  scrollProgress: number;
}

const ScrollContext = createContext<ScrollContextType>({
  lenis: null,
  scrollProgress: 0,
});

export const useScrollContext = () => useContext(ScrollContext);

import { CustomScrollIndicator } from './ui/CustomScrollIndicator';
import { ScrollProgressBar } from './ui/ScrollProgressBar';

interface SmoothScrollProps {
  children: ReactNode;
  showProgressBar?: boolean;
  showCustomScrollbar?: boolean;
}

export default function SmoothScroll({
  children,
  showProgressBar = true,
  showCustomScrollbar = true,
}: SmoothScrollProps) {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  // Store lenis instance in state to trigger re-renders
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2, // Increased duration for smoother scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential easing function
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      touchMultiplier: 1.5, // Make touch scrolling more responsive
      wheelMultiplier: 0.75, // Even lower value for smoother mouse wheel scrolling
      lerp: 0.09, // Linear interpolation - lower = smoother (0.1 is default)
      orientation: 'vertical',
    });

    // Add event delegations to exclude the chat window from Lenis
    const wheelEventListener = (event: WheelEvent) => {
      // Check if the event target is within the chat component
      const chatWindow = document.querySelector('[role="dialog"]');
      if (
        chatWindow &&
        (chatWindow === event.target ||
          chatWindow.contains(event.target as Node))
      ) {
        // If within chat window, prevent Lenis from handling it
        event.stopPropagation();
      }
    };
    document.addEventListener('wheel', wheelEventListener, { capture: true });

    // Monitor scroll progress
    lenis.on('scroll', ({ progress }: { progress: number }) => {
      setScrollProgress(progress);
    });

    // Set both ref and state to ensure context updates
    lenisRef.current = lenis;
    setLenis(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Clean up the wheel event listener to prevent memory leaks
      document.removeEventListener('wheel', wheelEventListener, {
        capture: true,
      });
      // Destroy the Lenis instance
      lenis.destroy();
    };
  }, []);

  return (
    <ScrollContext.Provider
      value={{
        lenis,
        scrollProgress,
      }}
    >
      <div className='smooth-scroll-container'>
        {children}
        {showProgressBar && <ScrollProgressBar progress={scrollProgress} />}
        {showCustomScrollbar && <CustomScrollIndicator />}
      </div>
    </ScrollContext.Provider>
  );
}
