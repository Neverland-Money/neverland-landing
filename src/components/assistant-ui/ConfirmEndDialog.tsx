import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { Button } from '@/components/ui/Button';

interface ConfirmEndDialogProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmEndDialog: React.FC<ConfirmEndDialogProps> = ({
  open,
  onConfirm,
  onCancel,
}) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className='fixed inset-0 z-[1100] flex items-center justify-center bg-black/40 backdrop-blur-sm'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-modal='true'
        role='dialog'
      >
        <motion.div
          className='z-[1110] max-w-[90vw] min-w-[320px] rounded-xl border-1 border-white/30 bg-gradient-to-br from-[#3e0070] to-[#4f0057] p-8 shadow-2xl'
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <h3 className='font-cinzel mb-2 text-center text-lg text-white'>
            End Conversation?
          </h3>
          <p className='mb-6 text-center text-white/80'>
            Are you sure you want to end the conversation with{' '}
            <span className='font-black text-[#b697f0]'>Nadette</span>?
          </p>
          <div className='flex justify-center gap-4'>
            <Button
              variant='destructive'
              onClick={onConfirm}
              className='min-w-[96px] bg-black/30 hover:bg-black/50'
            >
              End
            </Button>
            <Button
              variant='secondary'
              onClick={onCancel}
              className='min-w-[96px] bg-black/30 hover:bg-black/50'
            >
              Cancel
            </Button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
