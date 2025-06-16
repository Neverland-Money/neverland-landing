'use client';

import { motion } from 'framer-motion';
import { MinusIcon, SparklesIcon, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Assistant } from '@/app/assistant';

interface ChatButtonProps {
  isInMenu?: boolean;
  isStyled?: boolean;
}

export const ChatButton = ({
  isInMenu = false,
  isStyled = false,
}: ChatButtonProps) => {
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

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button - either fixed at bottom left or within menu */}
      {!isStyled ? (
        <motion.button
          ref={buttonRef}
          onClick={toggleChat}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white ${isNudging ? 'animate-button-nudge cursor-pointer ring-2 ring-purple-400/50' : 'cursor-pointer'} ${isInMenu ? '' : 'fixed bottom-6 left-6 z-40'} `}
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
            <SparklesIcon size={20} />
          )}
        </motion.button>
      ) : (
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
          role='button'
          aria-label={isOpen && !isMinimized ? 'Close chat' : 'Open chat'}
          className='flex h-full w-full cursor-pointer items-center justify-center'
        >
          {isOpen && !isMinimized ? (
            <XIcon size={24} />
          ) : (
            <SparklesIcon size={24} />
          )}
        </div>
      )}

      {/* Minimized Chat Indicator - Only shown when minimized */}
      {isOpen && isMinimized && (
        <motion.div
          onClick={() => setIsMinimized(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMinimized(false);
            }
          }}
          tabIndex={0}
          role='button'
          aria-label='Restore chat window'
          className={`absolute flex h-10 animate-pulse cursor-pointer items-center justify-center rounded-full px-4 text-white shadow-md ${isInMenu ? 'left-full z-40 ml-4 whitespace-nowrap' : 'fixed bottom-6 left-20 z-50'} hover:animate-none`}
          style={{
            fontFamily: 'var(--font-merriweather)',
            background: 'linear-gradient(0deg, #d132e0 -31%, #530ee3 111.63%)',
            boxShadow: '0px 0px 24px #7200d6',
          }}
          whileHover={{
            boxShadow: '0px 0px 18px #7200d6',
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 15,
          }}
        >
          <span className='text-base'>Nadette is waiting...</span>
        </motion.div>
      )}

      {/* Full Chat Interface - Always mounted when open, just visually hidden when minimized */}
      {isOpen && (
        <div
          ref={chatRef}
          className={`fixed z-40 h-[83vh] w-[90vw] max-w-[450px] rounded-lg shadow-xl lg:w-[40vw] lg:max-w-[900px] ${isMinimized ? 'pointer-events-none -translate-y-4 scale-95 opacity-0' : 'translate-y-0 scale-100 opacity-100'} ${isInMenu ? 'bottom-1/2 left-24 translate-y-1/2' : 'bottom-20 left-6'} `}
          style={{
            fontFamily: 'var(--font-merriweather)',
            background:
              'linear-gradient(145deg, rgba(22, 0, 43, 0.95) 0%, rgba(10, 0, 21, 0.95) 100%)',
            borderColor: 'rgba(209, 50, 224, 0.3)',
            backdropFilter: 'blur(20px)',
            boxShadow:
              '0px 0px 40px rgba(114, 0, 214, 0.4), inset 0px 1px 0px rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className='flex h-full flex-col overflow-hidden rounded-lg'>
            <Assistant
              key={
                currentKey
              } /* Use currentKey which only changes when fully closing and reopening */
              onMinimize={handleMinimize}
              onClose={handleClose}
            />
          </div>
        </div>
      )}
    </>
  );
};
