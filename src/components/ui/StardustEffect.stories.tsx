import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';

import { StardustEffect } from './StardustEffect';

const meta: Meta<typeof StardustEffect> = {
  title: 'UI/StardustEffect',
  component: StardustEffect,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'black', value: '#000000' },
        { name: 'purple', value: '#16213e' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className='relative'>
      <div className='p-8 text-center'>
        <h3 className='mb-4 text-2xl font-bold text-white'>
          Stardust Effect Demo
        </h3>
        <p className='mb-6 text-gray-300'>
          The stardust effect automatically triggers particles when rendered.
          Watch for the magical particle explosion!
        </p>
        <div className='relative inline-block'>
          <button className='rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white'>
            Magic Button
          </button>
          <StardustEffect />
        </div>
      </div>
    </div>
  ),
};

const WithButtonComponent = () => {
  const [triggerCount, setTriggerCount] = useState(0);

  return (
    <div className='relative'>
      <div className='p-8 text-center'>
        <h3 className='mb-4 text-2xl font-bold text-white'>
          Interactive Stardust
        </h3>
        <p className='mb-6 text-gray-300'>
          Click the button to trigger a new stardust effect! Triggered:{' '}
          {triggerCount} times
        </p>
        <div className='relative inline-block'>
          <button
            className='rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:from-purple-700 hover:to-blue-700'
            onClick={() => setTriggerCount((prev) => prev + 1)}
          >
            ✨ Trigger Stardust ✨
          </button>
          {/* Re-render StardustEffect with key to trigger new animation */}
          <StardustEffect key={triggerCount} />
        </div>
      </div>
    </div>
  );
};

export const WithButton: Story = {
  render: WithButtonComponent,
};

export const MultipleEffects: Story = {
  render: () => (
    <div className='relative'>
      <div className='p-8 text-center'>
        <h3 className='mb-6 text-2xl font-bold text-white'>
          Multiple Stardust Effects
        </h3>
        <div className='flex flex-wrap justify-center gap-8'>
          <div className='relative'>
            <div className='rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-white'>
              Effect 1
            </div>
            <StardustEffect />
          </div>

          <div className='relative'>
            <div className='rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 px-4 py-2 text-white'>
              Effect 2
            </div>
            <StardustEffect />
          </div>

          <div className='relative'>
            <div className='rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 text-white'>
              Effect 3
            </div>
            <StardustEffect />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const WithCard: Story = {
  render: () => (
    <div className='relative'>
      <div className='p-8 text-center'>
        <h3 className='mb-6 text-2xl font-bold text-white'>
          Stardust on Cards
        </h3>
        <div className='relative inline-block'>
          <div className='max-w-sm rounded-xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-sm'>
            <h4 className='mb-3 text-xl font-semibold'>Magic Card</h4>
            <p className='mb-4 text-gray-300'>
              This card has a beautiful stardust effect that creates magical
              particles around it.
            </p>
            <div className='flex items-center justify-center'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500'>
                <span className='text-xl'>✨</span>
              </div>
            </div>
          </div>
          <StardustEffect />
        </div>
      </div>
    </div>
  ),
};

export const LargeScale: Story = {
  render: () => (
    <div className='relative'>
      <div className='p-12 text-center'>
        <h3 className='mb-6 text-3xl font-bold text-white'>
          Large Scale Effect
        </h3>
        <p className='mx-auto mb-8 max-w-md text-gray-300'>
          Experience the stardust effect on a larger scale with this demo
          showcase.
        </p>
        <div className='relative inline-block'>
          <div className='rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 px-12 py-8 text-white shadow-2xl'>
            <h4 className='mb-4 text-2xl font-bold'>✨ MAGICAL ✨</h4>
            <p className='text-lg opacity-90'>Premium Experience</p>
          </div>
          <StardustEffect />
        </div>
      </div>
    </div>
  ),
};
