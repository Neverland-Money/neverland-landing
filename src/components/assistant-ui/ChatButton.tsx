'use client';

import { motion } from 'framer-motion';
import { MinusIcon, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Assistant } from '@/app/assistant';
import { StarIcon } from '@/components/ui/StarIcon';
import { trackEvent, EventNames } from '@/utils/analytics';

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
  const [isGlowing, setIsGlowing] = useState(false); // Controls glow animation
  const chatRef = useRef<HTMLDivElement>(null); // Reference to the chat container
  const buttonRef = useRef<HTMLButtonElement>(null); // Reference to the button element
  const divRef = useRef<HTMLDivElement>(null); // Reference to the div element when using isStyled

  useEffect(() => {
    // Save original styles
    const originalStyles = {
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      height: document.body.style.height,
    };

    // Define constant for storage key
    const LENIS_STOPPED_KEY = 'lenisWasStopped';

    if (isOpen && !isMinimized) {
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      const scrollY = window.scrollY;

      // Completely lock the body and Lenis scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.height = '100vh';

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      // Store the scroll position for later restoration
      document.body.dataset.scrollPosition = scrollY.toString();

      // Stop Lenis scrolling completely when chat is open
      try {
        const customWindow = window as unknown as {
          lenis?: {
            stop: () => void;
          };
        };
        const lenisInstance = customWindow.lenis || null;
        if (lenisInstance && typeof lenisInstance.stop === 'function') {
          lenisInstance.stop();
          // Save to sessionStorage to access it later
          sessionStorage.setItem(LENIS_STOPPED_KEY, 'true');
        }
      } catch (error) {
        console.error('Error stopping Lenis scrolling:', error);
      }
    } else {
      // Restore scrolling with a delay to allow animations to complete
      setTimeout(() => {
        document.body.style.overflow = originalStyles.overflow;
        document.body.style.paddingRight = originalStyles.paddingRight;
        document.body.style.position = originalStyles.position;
        document.body.style.top = originalStyles.top;
        document.body.style.width = originalStyles.width;
        document.body.style.height = originalStyles.height;

        // Restore scroll position
        const scrollY = parseInt(document.body.dataset.scrollPosition || '0');
        window.scrollTo(0, scrollY);

        // Restart Lenis if it was stopped
        try {
          if (sessionStorage.getItem(LENIS_STOPPED_KEY) === 'true') {
            const customWindow = window as unknown as {
              lenis?: {
                start: () => void;
              };
            };
            const lenisInstance = customWindow.lenis || null;
            if (lenisInstance && typeof lenisInstance.start === 'function') {
              lenisInstance.start();
              sessionStorage.removeItem(LENIS_STOPPED_KEY);
            }
          }
        } catch (error) {
          console.error('Error restarting Lenis scrolling:', error);
        }
      }, 300);
    }

    return () => {
      // Cleanup function to restore original styles
      document.body.style.overflow = originalStyles.overflow;
      document.body.style.paddingRight = originalStyles.paddingRight;
      document.body.style.position = originalStyles.position;
      document.body.style.top = originalStyles.top;
      document.body.style.width = originalStyles.width;
      document.body.style.height = originalStyles.height;

      // Restore scroll position on unmount if needed
      const scrollY = parseInt(document.body.dataset.scrollPosition || '0');
      if (document.body.style.position === 'fixed') {
        window.scrollTo(0, scrollY);
      }

      // Make sure Lenis is restarted if component unmounts while chat is open
      try {
        if (sessionStorage.getItem(LENIS_STOPPED_KEY) === 'true') {
          const customWindow = window as unknown as {
            lenis?: {
              start: () => void;
            };
          };
          const lenisInstance = customWindow.lenis || null;
          if (lenisInstance && typeof lenisInstance.start === 'function') {
            lenisInstance.start();
            sessionStorage.removeItem(LENIS_STOPPED_KEY);
          }
        }
      } catch (error) {
        console.error('Error restarting Lenis on unmount:', error);
      }
    };
  }, [isOpen, isMinimized]);

  // Periodically trigger the glow effect
  useEffect(() => {
    if (isOpen || isMinimized) {
      setIsGlowing(false);
      return;
    }

    // Set up periodic glow effect every 5 seconds
    const glowInterval = setInterval(() => {
      setIsGlowing(true);
      setTimeout(() => setIsGlowing(false), 2000); // Glow duration of 2 seconds
    }, 5000);

    return () => {
      clearInterval(glowInterval);
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
      handleOpenChat(); // Use the handleOpenChat function instead
    }
  };

  const handleCloseWithConfirm = () => {
    setShowConfirmClose(true);
  };

  const handleConfirmClose = () => {
    handleEndChat(); // Use the existing handleEndChat function
  };

  const handleCancelClose = () => {
    setShowConfirmClose(false);
  };

  const handleEndChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
    setShowConfirmClose(false);
    // Generate a new key to reset the conversation
    setKey(Date.now());
    setCurrentKey(Date.now());
    trackEvent(EventNames.BUTTON_CLICK, {
      button_name: 'nadette_chat',
      action: 'close',
      location: 'assistant_ui',
    });
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setIsMinimized(false);
    trackEvent(EventNames.BUTTON_CLICK, {
      button_name: 'nadette_chat',
      action: 'open',
      location: 'assistant_ui',
    });
  };

  const handleMinimize = () => {
    setIsMinimized(true);
    trackEvent(EventNames.BUTTON_CLICK, {
      button_name: 'nadette_chat',
      action: 'minimize',
      location: 'assistant_ui',
    });
  };

  return (
    <>
      {/* Chat Button - either fixed at bottom left or within menu */}
      {!isStyled && (!isOpen || isMinimized) ? (
        <motion.button
          ref={buttonRef}
          onClick={toggleChat}
          className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-white ${isInMenu ? '' : 'fixed bottom-6 left-6 z-40'}`}
          aria-label={
            isOpen ? (isMinimized ? 'Restore chat' : 'Close chat') : 'Open chat'
          }
          initial={{ opacity: 1, scale: 1 }}
          animate={{}}
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

      {/* Pulsing glow effect */}
      {((isOpen && isMinimized) || isGlowing) && (
        <div
          className={`absolute ${isInMenu ? 'relative' : 'fixed bottom-6 left-6'} pointer-events-none z-20`}
        >
          <motion.div
            className='absolute -bottom-6 left-6 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#891de1]'
            style={{
              filter: 'blur(12px)',
              boxShadow: '0px 0px 26px #891de1',
            }}
            animate={{
              opacity: [0.3, 1, 0],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2,
              repeat: 0,
            }}
          />
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
