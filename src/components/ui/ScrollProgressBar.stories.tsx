import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState, useEffect } from 'react';

import { ScrollProgressBar } from './ScrollProgressBar';

const meta: Meta<typeof ScrollProgressBar> = {
  title: 'UI/ScrollProgressBar',
  component: ScrollProgressBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.01 } },
    height: { control: { type: 'range', min: 1, max: 20, step: 1 } },
    gradient: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 0.5,
  },
};

export const ThickBar: Story = {
  args: {
    progress: 0.75,
    height: 8,
  },
};

export const ThinBar: Story = {
  args: {
    progress: 0.25,
    height: 2,
  },
};

export const NoGradient: Story = {
  args: {
    progress: 0.6,
    gradient: false,
  },
};

export const WithCustomClass: Story = {
  args: {
    progress: 0.8,
    className: 'border-2 border-purple-300',
  },
};

const InteractiveDemoComponent = (args: {
  progress: number;
  height?: number;
  gradient?: boolean;
  className?: string;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 0.01;
        return next > 1 ? 0 : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-8'>
      <div className='mb-8'>
        <h2 className='mb-4 text-2xl font-bold'>
          Interactive Scroll Progress Bar
        </h2>
        <p className='mb-4 text-gray-600'>
          This demo shows an animated progress bar that continuously fills and
          resets. Progress: {Math.round(progress * 100)}%
        </p>
      </div>

      <div className='space-y-6'>
        <div>
          <h3 className='mb-2 text-lg font-semibold'>Animated Progress</h3>
          <ScrollProgressBar {...args} progress={progress} />
        </div>

        <div>
          <h3 className='mb-2 text-lg font-semibold'>Static Examples</h3>
          <div className='space-y-4'>
            <div>
              <p className='mb-1 text-sm text-gray-600'>25% Progress</p>
              <ScrollProgressBar progress={0.25} height={6} />
            </div>
            <div>
              <p className='mb-1 text-sm text-gray-600'>50% Progress</p>
              <ScrollProgressBar progress={0.5} height={6} />
            </div>
            <div>
              <p className='mb-1 text-sm text-gray-600'>75% Progress</p>
              <ScrollProgressBar progress={0.75} height={6} />
            </div>
            <div>
              <p className='mb-1 text-sm text-gray-600'>100% Progress</p>
              <ScrollProgressBar progress={1} height={6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InteractiveDemo: Story = {
  render: InteractiveDemoComponent,
};

export const VariousHeights: Story = {
  render: () => (
    <div className='space-y-6 p-8'>
      <h2 className='text-2xl font-bold'>Different Heights</h2>

      <div className='space-y-4'>
        <div>
          <p className='mb-2 text-sm text-gray-600'>Height: 2px</p>
          <ScrollProgressBar progress={0.7} height={2} />
        </div>

        <div>
          <p className='mb-2 text-sm text-gray-600'>Height: 4px (default)</p>
          <ScrollProgressBar progress={0.7} height={4} />
        </div>

        <div>
          <p className='mb-2 text-sm text-gray-600'>Height: 8px</p>
          <ScrollProgressBar progress={0.7} height={8} />
        </div>

        <div>
          <p className='mb-2 text-sm text-gray-600'>Height: 12px</p>
          <ScrollProgressBar progress={0.7} height={12} />
        </div>

        <div>
          <p className='mb-2 text-sm text-gray-600'>Height: 20px</p>
          <ScrollProgressBar progress={0.7} height={20} />
        </div>
      </div>
    </div>
  ),
};
