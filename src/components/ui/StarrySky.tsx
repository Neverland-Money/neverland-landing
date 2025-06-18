'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  cx: number;
  cy: number;
  r: number;
  hasGlow: boolean;
}

interface ShootingStar {
  left: number;
  top: number;
  delay: number;
  duration: number;
}

interface Offset {
  x: number;
  y: number;
}

interface StarrySkyProps {
  /** Number of stars to render. Scales based on screen width with this value as maximum for 4K screens. Defaults to responsive values: 100 on mobile, 500 on desktop */
  starCount?: number;
  /** Number of shooting stars to render. Set to 0 to disable shooting stars. Defaults to responsive values: 3 on mobile, 5 on desktop */
  shootingStarCount?: number;
  /** Whether to extend stars to full scrollable page height instead of just viewport. Defaults to false */
  fullPage?: boolean;
  /** Custom z-index for layering control. Defaults to 2 */
  zIndex?: number;
  /** Percentage of stars that have glow effects (0.0 to 1.0). Defaults to 0.02 (2%) */
  glowPercentage?: number;
}

export default function StarrySky({
  starCount,
  shootingStarCount,
  fullPage = false,
  zIndex = 2,
  glowPercentage = 0.02,
}: StarrySkyProps = {}) {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);
  const [mounted, setMounted] = useState(false);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    setMounted(true);

    const calculateDocumentHeight = () => {
      if (fullPage) {
        // Wait for content to render
        setTimeout(() => {
          const bodyHeight = document.body.scrollHeight; // Use scrollHeight for full content
          const documentElementHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;
          const maxHeight = Math.max(
            bodyHeight,
            documentElementHeight,
            windowHeight,
          );
          setDocumentHeight(maxHeight);
          console.log(`StarrySky: Document height updated to ${maxHeight}px`);
        }, 100); // Small delay to allow content rendering
      }
    };

    const updateDimensions = () => {
      calculateDocumentHeight();

      // More comprehensive mobile detection including Samsung devices
      const userAgent =
        navigator.userAgent ||
        navigator.vendor ||
        (window as typeof window & { opera?: string }).opera ||
        '';
      const hasTouchScreen =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        ((navigator as typeof navigator & { msMaxTouchPoints?: number })
          .msMaxTouchPoints || 0) > 0;
      const isSamsungBrowser = /SamsungBrowser/i.test(userAgent);
      const isAndroid = /Android/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 1024; // More generous width for foldables

      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|silk/i.test(
          userAgent,
        ) ||
          hasTouchScreen ||
          isSamsungBrowser ||
          isAndroid ||
          isSmallScreen,
      );
    };

    updateDimensions();

    // Set up ResizeObserver for dynamic height changes
    let resizeObserver: ResizeObserver | null = null;
    if (fullPage && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        calculateDocumentHeight();
      });
      // Observe both body and documentElement for height changes
      resizeObserver.observe(document.body);
      resizeObserver.observe(document.documentElement);
    }

    // Additional timeout for late-loading content
    const lateUpdateTimeout = setTimeout(() => {
      calculateDocumentHeight();
    }, 1000);

    // Function to update star positions based on pointer position
    const updateStarPositions = (
      x: number,
      y: number,
      isTouchEvent = false,
    ) => {
      // Calculate position as percentage of screen
      const percentX = x / window.innerWidth - 0.5; // -0.5 to 0.5
      const percentY = y / window.innerHeight - 0.5; // -0.5 to 0.5

      // Set offset for parallax effect - enhanced movement for mobile
      const movementMultiplier = isTouchEvent ? 10 : 5; // Double the movement on touch

      setOffset({
        x: percentX * movementMultiplier,
        y: percentY * movementMultiplier,
      });
    };

    // Handle mouse movement (for desktop)
    const handleMouseMove = (e: MouseEvent) => {
      updateStarPositions(e.clientX, e.clientY, false);
    };

    // Handle touch movement (for mobile) - only on move, not on tap
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        updateStarPositions(touch.clientX, touch.clientY, true);

        // Prevent default to avoid scrolling while moving stars
        // Only prevent default if specifically interacting with stars
        if ((e.target as Element)?.closest('#sky')) {
          e.preventDefault();
        }
      }
    };

    // We don't need a touchstart handler as we only want to respond to touch movement

    // Set up appropriate event listeners based on device
    if (isMobile) {
      // Only respond to touch movement, not to taps
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', updateDimensions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(lateUpdateTimeout);
    };
  }, [isMobile, starCount, shootingStarCount, fullPage]);

  // Separate effect for star generation that runs when documentHeight changes
  useEffect(() => {
    if (!mounted) return;

    // Wait until we have proper dimensions
    const effectiveHeight = fullPage ? documentHeight : window.innerHeight;
    if (fullPage && documentHeight === 0) return; // Wait for height calculation

    // Scale star count based on screen width - only for default responsive behavior
    const getScaledStarCount = () => {
      if (starCount) {
        // Use the provided starCount exactly as given
        return starCount;
      } else {
        // Scale default responsive behavior based on screen width
        const width = window.innerWidth;
        const maxWidth = 2560; // 4K width
        const minWidth = 0; // Minimum mobile width
        const baseStarCount = 500;

        const scaleFactor = Math.max(
          0.1,
          Math.min(1, (width - minWidth) / (maxWidth - minWidth)),
        );
        const scaledStarCount = Math.floor(baseStarCount * scaleFactor);
        console.log(scaledStarCount);
        return scaledStarCount;
      }
    };

    const responsiveStarCount = getScaledStarCount();
    const responsiveShootingStarCount =
      shootingStarCount ?? (window.innerWidth < 768 ? 3 : 5);
    const starCountValue = responsiveStarCount;
    const shootingStarCountValue = responsiveShootingStarCount;

    // Generate random stars data
    const newStars: Star[] = [...Array(starCountValue)].map(() => ({
      cx: Math.floor(Math.random() * window.innerWidth),
      cy: Math.floor(Math.random() * effectiveHeight),
      r: Math.random() * 0.7 + 0.1,
      hasGlow: Math.random() < glowPercentage, // Use glowPercentage prop
    }));

    setStars(newStars);

    // Generate random shooting stars data
    if (shootingStarCountValue > 0) {
      const newShootingStars: ShootingStar[] = [
        ...Array(shootingStarCountValue),
      ].map(() => {
        const direction = Math.random() > 0.5 ? 1 : -1;
        const buffer = 300;
        const left =
          direction === 1
            ? Math.floor(Math.random() * (window.innerWidth - buffer))
            : Math.floor(Math.random() * (window.innerWidth - buffer)) + buffer;

        return {
          left,
          top: Math.floor(Math.random() * (effectiveHeight * 0.5)),
          delay: Math.random() * 30,
          duration: 2 + Math.random() * 3,
        };
      });

      setShootingStars(newShootingStars);
    } else {
      setShootingStars([]);
    }
  }, [
    mounted,
    documentHeight,
    starCount,
    shootingStarCount,
    fullPage,
    glowPercentage,
  ]);

  // Prevent SSR/client mismatch
  if (!mounted) return null;

  return (
    <div id='App'>
      <motion.svg
        id='sky'
        width='100%'
        height={fullPage ? `${documentHeight}px` : '100%'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex,
        }}
        animate={{
          x: offset.x,
          y: offset.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 50,
        }}
      >
        <defs>
          <radialGradient id='starGlow' cx='50%' cy='50%' r='50%'>
            <stop offset='0%' stopColor='white' stopOpacity='0.8' />
            <stop offset='25%' stopColor='white' stopOpacity='0.6' />
            <stop offset='50%' stopColor='white' stopOpacity='0.4' />
            <stop offset='75%' stopColor='white' stopOpacity='0.2' />
            <stop offset='100%' stopColor='white' stopOpacity='0' />
          </radialGradient>
        </defs>
        {stars.map((star, i) => {
          // Calculate opacity based on position - stars less visible towards bottom (brighter area)
          const baseOpacity = Math.max(
            0.4,
            1 -
              (star.cy / (fullPage ? documentHeight : window.innerHeight)) *
                0.8,
          );

          return (
            <g key={i}>
              {/* Smooth glow background */}
              {star.hasGlow && (
                <motion.circle
                  cx={star.cx}
                  cy={star.cy}
                  r={star.r + 8}
                  fill='url(#starGlow)'
                  initial={{ opacity: baseOpacity * 0.4 }} // Start with initial opacity
                  animate={{
                    opacity: [
                      baseOpacity * 0.4,
                      baseOpacity * 0.8,
                      baseOpacity * 0.4,
                    ],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: (window.innerWidth < 768 ? 80 : 20) * i * 0.001,
                    ease: 'linear',
                  }}
                />
              )}
              {/* Main star */}
              <motion.circle
                cx={star.cx}
                cy={star.cy}
                r={star.r + (star.hasGlow ? 1 : 0.5)}
                stroke='none'
                fill='white'
                initial={{ opacity: baseOpacity * 0.3 }} // Start with initial opacity
                animate={{
                  opacity: [baseOpacity * 0.3, baseOpacity, baseOpacity * 0.3],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: (window.innerWidth < 768 ? 80 : 20) * i * 0.001,
                  ease: 'linear',
                }}
              />
            </g>
          );
        })}
      </motion.svg>

      {shootingStars.length > 0 && (
        <motion.div
          id='shootingstars'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: fullPage ? `${documentHeight}px` : '100%',
            pointerEvents: 'none',
            zIndex,
          }}
          animate={{
            x: offset.x,
            y: `calc(10vh - 70% + ${offset.y * 0.5}px)`,
            rotate: 120,
          }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 60,
          }}
        >
          {shootingStars.map((star, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                left: `${star.left}px`,
                top: `${star.top}px`,
                height: '2px',
                background: 'linear-gradient(-45deg, white, rgba(0,0,255,0))',
                filter: 'drop-shadow(0 0 6px white)',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                width: ['0px', '120px', '0px'],
                x: [0, 300],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                repeatDelay: Math.random() * 10 + 5, // 5-15s pause between repetitions
                ease: 'linear',
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
