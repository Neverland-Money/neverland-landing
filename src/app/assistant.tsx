'use client';

import { AssistantRuntimeProvider } from '@assistant-ui/react';
import { useChatRuntime } from '@assistant-ui/react-ai-sdk';
import { motion } from 'framer-motion';
import { MinusIcon, Sparkles, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { Thread } from '@/components/assistant-ui/thread';

interface AssistantProps {
  onMinimize?: () => void;
  onClose?: () => void;
}

export const Assistant = ({ onMinimize, onClose }: AssistantProps) => {
  // State to track if the image failed to load
  const [imageError, setImageError] = useState(false);

  // Use a simple runtime with just the API endpoint
  const runtime = useChatRuntime({
    api: '/api/chat',
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div
        className='flex h-full flex-col'
        style={{
          fontFamily: 'var(--font-merriweather)',
          background: 'linear-gradient(145deg, #16002b 0%, #0a0015 100%)',
        }}
      >
        <div
          className='flex h-14 items-center justify-between border-b px-4'
          style={{
            background: 'linear-gradient(0deg, #d132e0 -31%, #530ee3 111.63%)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className='flex items-center space-x-3'>
            <div className='relative h-9 w-9 overflow-hidden rounded-full border border-white/20 bg-white/10'>
              {/* Show image if it exists, otherwise show a fallback */}
              {!imageError ? (
                <Image
                  src='/assets/images/tinkerbell-profile.png'
                  alt='Nadette'
                  width={36}
                  height={36}
                  className='object-cover'
                  priority
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className='absolute inset-0 flex items-center justify-center text-white/80'>
                  <Sparkles size={18} />
                </div>
              )}
            </div>
            <h2 className='font-serif text-lg font-semibold text-white'>
              Nadette
            </h2>
          </div>
          <div className='flex items-center space-x-2'>
            {onMinimize && (
              <motion.button
                onClick={onMinimize}
                className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-white/90 hover:bg-white/10'
                aria-label='Minimize chat'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 15,
                }}
              >
                <MinusIcon size={18} />
              </motion.button>
            )}
            {onClose && (
              <motion.button
                onClick={onClose}
                className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-white/90 hover:bg-white/10'
                aria-label='Close chat'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 15,
                }}
              >
                <XIcon size={18} />
              </motion.button>
            )}
          </div>
        </div>
        <div className='flex-1 overflow-auto'>
          <Thread />
        </div>
      </div>
    </AssistantRuntimeProvider>
  );
};
