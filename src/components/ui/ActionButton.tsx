import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import { StardustEffect } from '@/components/ui/StardustEffect';
import { StarIcon } from '@/components/ui/StarIcon';
import { EventNames, trackEvent } from '@/utils/analytics';

interface ActionButtonProps {
  /**
   * The text content of the button
   */
  text: string;

  /**
   * Custom tracking name for analytics
   */
  buttonName?: string;

  /**
   * Custom tracking location for analytics
   */
  buttonLocation?: string;

  /**
   * Show stars on both sides of the button text
   */
  showStars?: boolean;

  /**
   * Show stardust effect around the button
   */
  showStardust?: boolean;

  /**
   * Custom background style
   */
  customBackground?: string;

  /**
   * Custom box shadow
   */
  customBoxShadow?: string;

  /**
   * Optional CSS classes to add to the button
   */
  className?: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  /**
   * Custom children instead of text
   */
  children?: ReactNode;
}

export default function ActionButton({
  text,
  buttonName = 'enter_dapp',
  buttonLocation = 'hero_section',
  showStars = true,
  showStardust = true,
  customBackground = 'linear-gradient(0deg, #d132e0 -31%, #530ee3 111.63%)',
  customBoxShadow = '0px 0px 36px #7200d6',
  className = '',
  onClick,
  children,
}: ActionButtonProps) {
  const handleClick = () => {
    // Trigger stardust effect
    if (showStardust) {
      document.dispatchEvent(new CustomEvent('triggerStardust'));
    }

    // Track event
    trackEvent(EventNames.BUTTON_CLICK, {
      button_name: buttonName,
      button_text: text,
      button_location: buttonLocation,
    });

    // Call custom click handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Stardust particles */}
      {showStardust && <StardustEffect />}

      <motion.div
        className='group relative mx-auto flex cursor-pointer items-center justify-center gap-3 rounded-full px-6 py-4'
        style={{
          background: customBackground,
          boxShadow: customBoxShadow,
        }}
        whileTap={{
          scale: 0.95,
          y: 4,
          boxShadow: '0px 0px 18px #7200d6',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 15,
        }}
        onClick={handleClick}
      >
        {/* Star 1 */}
        {showStars && <StarIcon />}

        {/* Button content */}
        {children || (
          <span className='font-inter text-center text-base leading-[110%] font-medium text-white'>
            {text}
          </span>
        )}

        {/* Star 2 */}
        {showStars && <StarIcon />}
      </motion.div>
    </div>
  );
}
