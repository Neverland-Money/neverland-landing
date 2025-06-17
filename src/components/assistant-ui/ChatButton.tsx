'use client';

import { motion } from 'framer-motion';
import { MinusIcon, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Assistant } from '@/app/assistant';
import { StarIcon } from '@/components/ui/StarIcon';

import { ConfirmEndDialog } from './ConfirmEndDialog';

interface ChatButtonProps {
  isInMenu?: boolean;
  isStyled?: boolean;
}

export const ChatButton = ({
  isInMenu = false,
  isStyled = false,
}: ChatButtonProps) => {
  const [showConfirmClose, setShowConfirmClose] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [key, setKey] = useState(Date.now()); // Unique key for each conversation
  const [currentKey, setCurrentKey] = useState(key); // Current instance key that persists during minimize
  const [isNudging, setIsNudging] = useState(false); // Controls button nudge animation
  const chatRef = useRef<HTMLDivElement>(null); // Reference to the chat container
  const buttonRef = useRef<HTMLButtonElement>(null); // Reference to the button element
  const divRef = useRef<HTMLDivElement>(null); // Reference to the div element when using isStyled

  // Periodically nudge the chat button to draw attention
  useEffect(() => {
    // Don't nudge if chat is open or minimized
    if (isOpen || isMinimized) {
      setIsNudging(false);
      return;
    }

    // Set up periodic nudging every 15 seconds
    const nudgeInterval = setInterval(() => {
      // Start the nudge animation
      setIsNudging(true);

      // Stop the nudge animation after 1.5 seconds
      setTimeout(() => {
        setIsNudging(false);
      }, 1500);
    }, 5000); // Repeat every 5 seconds

    // Initial nudge after 5 seconds
    const initialNudgeTimer = setTimeout(() => {
      setIsNudging(true);
      setTimeout(() => setIsNudging(false), 1500);
    }, 5000);

    return () => {
      clearInterval(nudgeInterval);
      clearTimeout(initialNudgeTimer);
    };
  }, [isOpen, isMinimized]);

  // Only reset the key when chat is fully closed, not when minimized
  useEffect(() => {
    if (!isOpen) {
      // Generate a new key when fully closed
      const newKey = Date.now();
      setTimeout(() => {
        setKey(newKey);
        setCurrentKey(newKey); // Update the current key for next open
      }, 300); // Delay to avoid flickering during animation
    }
  }, [isOpen]); // Only depend on isOpen, not isMinimized

  // Handle clicks outside the chat to minimize it
  useEffect(() => {
    // Function to handle clicks outside the chat
    const handleClickOutside = (event: MouseEvent) => {
      // Skip if chat is already minimized or closed
      if (!isOpen || isMinimized) return;

      // Check if the click was outside both the chat and the toggle elements
      const isOutsideChat =
        chatRef.current && !chatRef.current.contains(event.target as Node);
      const isOutsideButton =
        buttonRef.current && !buttonRef.current.contains(event.target as Node);
      const isOutsideDiv =
        divRef.current && !divRef.current.contains(event.target as Node);

      if (isOutsideChat && isOutsideButton && isOutsideDiv) {
        // Minimize the chat
        setIsMinimized(true);
      }
    };

    // Add event listener when chat is open
    if (isOpen && !isMinimized) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    if (isMinimized) {
      // If minimized, just un-minimize it
      setIsMinimized(false);
      // Find the viewport element and scroll it to the bottom
      const viewport = document.querySelector('.overflow-y-scroll');
      if (viewport && viewport instanceof HTMLElement) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    } else if (isOpen) {
      // If open, minimize instead of closing
      setIsMinimized(true);
    } else {
      // If closed, open it
      setIsOpen(true);
    }
  };

  const handleCloseWithConfirm = () => {
    setShowConfirmClose(true);
  };

  const handleConfirmClose = () => {
    setShowConfirmClose(false);
    setIsOpen(false);
  };

  const handleCancelClose = () => {
    setShowConfirmClose(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  return (
    <>
      {/* Chat Button - either fixed at bottom left or within menu */}
      {!isStyled && (!isOpen || isMinimized) ? (
        <motion.button
          ref={buttonRef}
          onClick={toggleChat}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white ${isNudging ? 'animate-button-nudge cursor-pointer ring-2 ring-purple-400/50' : 'cursor-pointer'} ${isInMenu ? '' : 'fixed bottom-6 left-6 z-40'}`}
          aria-label={
            isOpen ? (isMinimized ? 'Restore chat' : 'Close chat') : 'Open chat'
          }
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0px 0px 18px #7200d6',
          }}
          whileTap={{
            scale: 0.95,
            boxShadow: '0px 0px 18px #7200d6',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 15,
          }}
          style={{
            background: 'linear-gradient(0deg, #d132e0 -31%, #530ee3 111.63%)',
            boxShadow: '0px 0px 36px #7200d6',
          }}
        >
          {isOpen && !isMinimized ? (
            <MinusIcon size={20} />
          ) : (
            <StarIcon width={28} height={28} />
          )}
        </motion.button>
      ) : (
        <>
          {!isOpen ||
            (isMinimized && (
              // When styled externally, just render the icon for clicking
              <div
                ref={divRef}
                onClick={toggleChat}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleChat();
                  }
                }}
                tabIndex={0}
                role={'button'}
                aria-label={isOpen && !isMinimized ? 'Close chat' : 'Open chat'}
                className={
                  'flex h-full w-full cursor-pointer items-center justify-center'
                }
              >
                {isOpen && !isMinimized ? (
                  <XIcon size={24} />
                ) : (
                  <div className={'h-6 w-6 rounded-full bg-purple-400'} />
                )}
              </div>
            ))}
        </>
      )}

      {/* Stardust Effect - Shows when chat is minimized and there's activity */}
      {isOpen && isMinimized && (
        <div
          className={`absolute ${isInMenu ? 'relative' : 'fixed bottom-6 left-6'} pointer-events-none`}
        >
          {/* Main dust particles flowing from button center */}
          {[...Array(16)].map((_, i) => {
            const randomX1 = (Math.random() - 0.5) * 40;
            const randomX2 = (Math.random() - 0.5) * 80;
            const randomX3 = (Math.random() - 0.5) * 120;
            const randomY1 = -Math.random() * 30 - 10;
            const randomY2 = -Math.random() * 40 - 30;
            const randomY3 = Math.random() * 60 - 20;
            const randomDelay = Math.random() * 2;
            const randomDuration = 2.5 + Math.random() * 2;

            return (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  i % 4 === 0
                    ? 'h-0.5 w-0.5 bg-purple-200'
                    : i % 4 === 1
                      ? 'h-1 w-1 bg-purple-300'
                      : i % 4 === 2
                        ? 'h-1 w-1 bg-purple-400'
                        : 'h-0.5 w-0.5 bg-white'
                }`}
                initial={{
                  x: 20,
                  y: 20,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: [20, 20 + randomX1, 20 + randomX2, 20 + randomX3],
                  y: [20, 20 + randomY1, 20 + randomY2, 20 + randomY3],
                  opacity: [0, 0.9, 0.6, 0],
                  scale: [0, 1.5, 1, 0.2],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: 'easeInOut',
                }}
              />
            );
          })}

          {/* Additional upward flowing particles */}
          {[...Array(12)].map((_, i) => {
            const randomX1 = (Math.random() - 0.5) * 30;
            const randomX2 = (Math.random() - 0.5) * 50;
            const randomY1 = -Math.random() * 40 - 20;
            const randomY2 = -Math.random() * 60 - 40;
            const randomY3 = -Math.random() * 80 - 60;
            const randomDelay = Math.random() * 3 + 0.5;
            const randomDuration = 2 + Math.random() * 2;

            return (
              <motion.div
                key={`upward-${i}`}
                className={`absolute rounded-full ${
                  i % 3 === 0
                    ? 'h-0.5 w-0.5 bg-purple-300'
                    : i % 3 === 1
                      ? 'h-0.5 w-0.5 bg-white'
                      : 'h-1 w-1 bg-purple-200'
                }`}
                initial={{
                  x: 20,
                  y: 20,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: [20, 20 + randomX1, 20 + randomX2],
                  y: [20, 20 + randomY1, 20 + randomY2, 20 + randomY3],
                  opacity: [0, 1, 0.5, 0],
                  scale: [0, 1.2, 0.8, 0.1],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: 'easeOut',
                }}
              />
            );
          })}

          {/* Cascading particles that fall from sides */}
          {[...Array(14)].map((_, i) => {
            const randomX1 = (Math.random() - 0.5) * 80;
            const randomX2 = (Math.random() - 0.5) * 120;
            const randomY1 = Math.random() * 30;
            const randomY2 = Math.random() * 60 + 20;
            const randomY3 = Math.random() * 40 + 60;
            const randomDelay = Math.random() * 4 + 1;
            const randomDuration = 3 + Math.random() * 3;

            return (
              <motion.div
                key={`cascade-${i}`}
                className={`absolute rounded-full ${
                  i % 5 === 0
                    ? 'h-0.5 w-0.5 bg-purple-100'
                    : i % 5 === 1
                      ? 'h-0.5 w-0.5 bg-purple-200'
                      : i % 5 === 2
                        ? 'h-1 w-1 bg-purple-300'
                        : i % 5 === 3
                          ? 'h-0.5 w-0.5 bg-white'
                          : 'h-1 w-1 bg-purple-400'
                }`}
                initial={{
                  x: 20,
                  y: -20,
                  opacity: 0,
                }}
                animate={{
                  x: [20, 20 + randomX1, 20 + randomX2],
                  y: [-20, -20 + randomY1, -20 + randomY2, -20 + randomY3],
                  opacity: [0, 0.8, 0.4, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: 'easeIn',
                }}
              />
            );
          })}

          {/* Fine glowing center particles */}
          {[...Array(8)].map((_, i) => {
            const randomX1 = (Math.random() - 0.5) * 24;
            const randomY1 = -Math.random() * 30 - 15;
            const randomY2 = -Math.random() * 35 - 25;
            const randomDelay = Math.random() * 2;
            const randomDuration = 2 + Math.random() * 1.5;

            return (
              <motion.div
                key={`glow-${i}`}
                className={`absolute rounded-full blur-sm ${
                  i % 2 === 0
                    ? 'h-1 w-1 bg-purple-400'
                    : 'h-1 w-1 bg-purple-300'
                }`}
                initial={{
                  x: 18,
                  y: 18,
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  x: [18, 18 + randomX1],
                  y: [18, 18 + randomY1, 18 + randomY2],
                  opacity: [0, 0.9, 0],
                  scale: [0, 1.8, 0],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  delay: randomDelay,
                  ease: 'easeOut',
                }}
              />
            );
          })}
        </div>
      )}

      {/* Full Chat Interface - Always mounted when open, just visually hidden when minimized */}
      {isOpen && !isMinimized && (
        <div
          className={
            'fixed inset-0 z-[55] bg-black/30 backdrop-blur-sm transition-opacity'
          }
          role={'button'}
          tabIndex={0}
          aria-label={'Minimize chat window'}
          onClick={handleMinimize}
          onKeyDown={(event) => {
            if (
              event.key === 'Escape' ||
              event.key === 'Enter' ||
              event.key === ' '
            ) {
              handleMinimize();
            }
          }}
        />
      )}
      {isOpen && (
        <>
          {/* Confirmation Modal for Closing Chat */}
          <ConfirmEndDialog
            open={showConfirmClose}
            onConfirm={handleConfirmClose}
            onCancel={handleCancelClose}
          />
          {/* Intentionally using keyboard/mouse handlers on a div with role="dialog" for accessibility. */}
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
          <div
            ref={chatRef}
            role={'dialog'}
            aria-modal={'true'}
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.stopPropagation();
                handleMinimize();
              }
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className={`fixed z-[1000] h-[75vh] w-[90vw] max-w-[450px] rounded-lg lg:h-[83vh] lg:w-[40vw] lg:max-w-[715px] ${
              isMinimized
                ? 'pointer-events-none -translate-y-4 scale-95 opacity-0'
                : 'font-merriweather translate-y-0 scale-100 bg-[linear-gradient(145deg,rgba(22,0,43,0.95),rgba(10,0,21,0.95))] opacity-100 backdrop-blur-sm'
            } ${isInMenu ? 'bottom-1/2 left-24 translate-y-1/2' : 'bottom-10 left-6'}`}
            style={
              !isMinimized
                ? {
                    boxShadow:
                      '0px 0px 40px rgba(114,0,214,0.4), inset 0px 1px 0px rgba(255,255,255,0.1)',
                  }
                : undefined
            }
          >
            <div className={'flex h-full flex-col overflow-hidden rounded-lg'}>
              <Assistant
                key={currentKey}
                onMinimize={handleMinimize}
                onClose={handleCloseWithConfirm}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
