/**
 * Utility functions for tracking events with Vercel Analytics
 */
import { track as vercelTrack } from '@vercel/analytics';

/**
 * Track a client-side event
 *
 * @param eventName The name of the event to track
 * @param properties Optional properties to include with the event
 */
export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean | null>,
) => {
  vercelTrack(eventName, properties);
};

/**
 * Common event names for consistent tracking across the application
 */
export const EventNames = {
  // Navigation events
  PAGE_VIEW: 'page_view',
  SECTION_VIEW: 'section_view',

  // Interaction events
  BUTTON_CLICK: 'button_click',
  EXTERNAL_LINK_CLICK: 'external_link_click',

  // Form events
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',

  // Custom events
  STARRY_SKY_INTERACTION: 'starry_sky_interaction',
} as const;
