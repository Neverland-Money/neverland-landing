import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ComponentType } from 'react';

import StarrySky, { type StarrySkyProps } from './StarrySky';

const meta: Meta<StarrySkyProps> = {
  title: 'UI/StarrySky',
  component: StarrySky,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    starCount: {
      control: { type: 'range', min: 10, max: 1000, step: 10 },
      description: 'Number of stars to render',
    },
    shootingStarCount: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Number of shooting stars to render',
    },
    fullPage: {
      control: { type: 'boolean' },
      description: 'Whether to extend stars to full scrollable page height',
    },
    zIndex: {
      control: { type: 'range', min: -10, max: 50, step: 1 },
      description: 'Z-index for layering',
    },
    glowPercentage: {
      control: { type: 'range', min: 0, max: 0.5, step: 0.01 },
      description: 'Percentage of stars that should have glow effect',
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <div className='relative h-screen w-full bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950'>
        <Story />
        <div className='relative z-10 flex h-full items-center justify-center text-white'>
          <div className='text-center'>
            <h1 className='mb-4 text-4xl font-bold'>Starry Sky Effect</h1>
            <p className='text-lg opacity-75'>
              Interactive starfield background with shooting stars
            </p>
          </div>
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const MinimalStars: Story = {
  args: {
    starCount: 50,
    shootingStarCount: 2,
    glowPercentage: 0.1,
  },
};

export const ManyStars: Story = {
  args: {
    starCount: 800,
    shootingStarCount: 8,
    glowPercentage: 0.05,
  },
};

export const NoShootingStars: Story = {
  args: {
    starCount: 300,
    shootingStarCount: 0,
    glowPercentage: 0.03,
  },
};

export const HighGlow: Story = {
  args: {
    starCount: 200,
    shootingStarCount: 3,
    glowPercentage: 0.2,
  },
};

export const FullPageStars: Story = {
  args: {
    starCount: 400,
    shootingStarCount: 5,
    fullPage: true,
    glowPercentage: 0.02,
  },
  decorators: [
    (Story: ComponentType) => (
      <div className='relative min-h-[200vh] w-full bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950'>
        <Story />
        <div className='relative z-10 space-y-96 p-8 text-white'>
          <div className='pt-32 text-center'>
            <h1 className='mb-4 text-4xl font-bold'>Full Page Stars</h1>
            <p className='text-lg opacity-75'>
              Stars extend beyond viewport height
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-4 text-3xl font-bold'>Scroll to See More</h2>
            <p className='text-lg opacity-75'>
              The starfield continues as you scroll
            </p>
          </div>
          <div className='pb-32 text-center'>
            <h2 className='mb-4 text-3xl font-bold'>End of Demo</h2>
            <p className='text-lg opacity-75'>
              Stars cover the entire scrollable area
            </p>
          </div>
        </div>
      </div>
    ),
  ],
};

export const LayeredExample: Story = {
  args: {
    starCount: 300,
    shootingStarCount: 4,
    zIndex: 1,
    glowPercentage: 0.02,
  },
  decorators: [
    (Story: ComponentType) => (
      <div className='relative h-screen w-full bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950'>
        <Story />
        <div className='pointer-events-none absolute inset-0 z-5 flex items-center justify-center'>
          <div className='rounded-lg border border-white/10 bg-black/20 p-8 text-center text-white backdrop-blur-sm'>
            <h1 className='mb-4 text-3xl font-bold'>Layered Content</h1>
            <p className='text-lg opacity-75'>
              This content appears above the stars
            </p>
          </div>
        </div>
      </div>
    ),
  ],
};
