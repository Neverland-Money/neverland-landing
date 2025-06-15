'use client';

import { motion } from 'framer-motion';

interface BlurredLoadingTextProps {
  text: string;
  className?: string;
  duration?: number;
}

export const BlurredLoadingText = ({
  text,
  className = '',
  duration = 1.8,
}: BlurredLoadingTextProps) => {
  return (
    <motion.span
      className={className}
      initial={{
        filter: 'blur(9px)',
        opacity: 1,
      }}
      animate={{
        filter: ['blur(9px)', 'blur(10px)', 'blur(9px)'],
        opacity: [0.9, 1, 0.9],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {text}
    </motion.span>
  );
};
