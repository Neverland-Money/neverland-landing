'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
  className?: string;
  amount?: number;
}

/**
 * A wrapper component that adds a subtle fade-in animation with slight upward movement
 * when the element enters the viewport.
 */
const FadeInWhenVisible: React.FC<FadeInWhenVisibleProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 30,
  once = true,
  className = '',
  amount = 0.2, // How much of the element needs to be in view
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9], // Smooth easing function
      }}
      viewport={{ once, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
