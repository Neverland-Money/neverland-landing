'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { trackEvent, EventNames } from './analytics';

// Minimum time in milliseconds to consider a section as "viewed"
const MIN_VIEW_TIME = 2000; // 2 seconds

interface SectionTrackingProps {
  sectionId: string; // ID of the section being tracked
  sectionName: string; // Display name of the section
  children: React.ReactNode;
}

/**
 * Component that tracks when a user sees a section
 * and sends a single analytics event when the section has been viewed
 */
export function SectionTracker({
  sectionId,
  sectionName,
  children,
}: SectionTrackingProps) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Section is considered "in view" when at least 50% is visible
    triggerOnce: true, // Only trigger once when the element first meets the threshold
  });

  const hasBeenViewed = useRef<boolean>(false);
  const viewStartTime = useRef<number | null>(null);

  // Handle visibility changes
  useEffect(() => {
    // When section comes into view
    if (inView && !hasBeenViewed.current) {
      viewStartTime.current = Date.now();

      // Set a timeout to ensure user has actually seen the section (not just scrolled past)
      const timeoutId = setTimeout(() => {
        // Only track if we haven't tracked this section yet
        if (!hasBeenViewed.current) {
          trackEvent(EventNames.SECTION_VIEW, {
            section_id: sectionId,
            section_name: sectionName,
          });

          hasBeenViewed.current = true;
        }
      }, MIN_VIEW_TIME);

      return () => clearTimeout(timeoutId);
    }

    return undefined;
  }, [inView, sectionId, sectionName]);

  return (
    <div ref={ref} id={sectionId} className='scroll-mt-20'>
      {children}
    </div>
  );
}
