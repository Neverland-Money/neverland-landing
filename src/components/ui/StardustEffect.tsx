'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Stardust Effect Component
export const StardustEffect = () => {
  const [particles, setParticles] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      rotation: number;
      color: string;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const handleTrigger = () => {
      // Create 15-40 particles for a more dramatic effect
      const particleCount = Math.floor(Math.random() * 25) + 15;
      const newParticles = [];

      // Colors for the stars - purples and blues similar to the button gradient
      const colors = [
        '#d132e0',
        '#9945FF',
        '#7200d6',
        '#530ee3',
        '#ffffff',
        '#ff9fff',
      ];

      for (let i = 0; i < particleCount; i++) {
        // Calculate distance - some particles go further than others
        const distance = Math.random() * 500 + 200; // 200px to 500px
        const angle = Math.random() * Math.PI * 2; // 0 to 2π (full circle)

        newParticles.push({
          id: Date.now() + i,
          x: Math.cos(angle) * distance, // Use trigonometry for better radial distribution
          y: Math.sin(angle) * distance,
          size: Math.random() * 12 + 6, // 6px to 18px (larger particles)
          rotation: Math.random() * 360, // 0 to 360 degrees
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.2, // Stagger the animation starts slightly
        });
      }

      setParticles(newParticles);

      // Remove particles after animation completes (longer duration)
      setTimeout(() => {
        setParticles([]);
      }, 3000);
    };

    // Listen for the custom event triggered by button click
    document.addEventListener('triggerStardust', handleTrigger);

    return () => {
      document.removeEventListener('triggerStardust', handleTrigger);
    };
  }, []);

  return (
    <div className='pointer-events-none absolute inset-0 z-10 overflow-visible'>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: `${particle.x}px`,
            y: `${particle.y}px`,
            opacity: 0,
            scale: 1,
            rotate: particle.rotation,
          }}
          transition={{
            duration: 1.2, // Longer animation
            delay: particle.delay, // Staggered starts
            ease: [0.1, 0.7, 0.1, 1.0], // More dramatic easing
          }}
        >
          <div
            className='absolute rounded-full'
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size}px ${particle.color}`, // Bigger glow effect
              filter: 'blur(0.5px)', // Slight blur for a more magical look
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
