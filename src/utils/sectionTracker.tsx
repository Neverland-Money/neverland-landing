'use client';

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { trackEvent, EventNames } from './analytics';

// Minimum time in milliseconds to consider a section as "viewed"
const MIN_VIEW_TIME = 2000; // 2 seconds

// Time interval for recording section viewing duration (in ms)
const RECORD_INTERVAL = 10000; // 10 seconds

interface SectionTrackingProps {
  sectionId: string; // ID of the section being tracked
  sectionName: string; // Display name of the section
  children: React.ReactNode;
}

/**
 * Component that tracks how long users spend viewing a specific section
 * and sends analytics events when threshold is reached
 */
export function SectionTracker({
  sectionId,
  sectionName,
  children,
}: SectionTrackingProps) {
  const { ref, inView } = useInView({
    threshold: 0.5, // Section is considered "in view" when at least 50% is visible
    triggerOnce: false,
  });

  const viewStartTime = useRef<number | null>(null);
  const totalViewTime = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastRecordedTime = useRef<number>(0);

  // Handle visibility changes
  useEffect(() => {
    // When section comes into view
    if (inView) {
      viewStartTime.current = Date.now();

      // Set up interval to record view time periodically
      intervalRef.current = setInterval(() => {
        if (viewStartTime.current !== null) {
          const currentViewTime = Date.now() - viewStartTime.current;
          totalViewTime.current += currentViewTime;

          // Record section view after reaching minimum threshold and for every interval
          if (
            totalViewTime.current - lastRecordedTime.current >=
            RECORD_INTERVAL
          ) {
            trackEvent(EventNames.SECTION_VIEW, {
              section_id: sectionId,
              section_name: sectionName,
              view_duration: Math.floor(totalViewTime.current / 1000), // Convert to seconds
            });

            lastRecordedTime.current = totalViewTime.current;
          }

          // Reset the start time
          viewStartTime.current = Date.now();
        }
      }, RECORD_INTERVAL);
    }
    // When section goes out of view
    else if (viewStartTime.current !== null) {
      const viewTime = Date.now() - viewStartTime.current;
      totalViewTime.current += viewTime;

      // Clear interval when section is no longer in view
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      // If minimum view time threshold is reached, track it
      if (
        viewTime >= MIN_VIEW_TIME &&
        totalViewTime.current > lastRecordedTime.current
      ) {
        trackEvent(EventNames.SECTION_VIEW, {
          section_id: sectionId,
          section_name: sectionName,
          view_duration: Math.floor(totalViewTime.current / 1000), // Convert to seconds
        });
      }

      viewStartTime.current = null;
    }

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [inView, sectionId, sectionName]);

  return (
    <div ref={ref} id={sectionId} className='scroll-mt-20'>
      {children}
    </div>
  );
}
