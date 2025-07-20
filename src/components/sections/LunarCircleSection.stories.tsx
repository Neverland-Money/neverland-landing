import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import LunarCircleSection from './LunarCircleSection';

const meta: Meta<typeof LunarCircleSection> = {
  title: 'Sections/LunarCircleSection',
  component: LunarCircleSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomBackground: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          background: 'linear-gradient(180deg, #050212 0%, #1a1a2e 100%)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const InContainer: Story = {
  decorators: [
    (Story) => (
      <div className='mx-auto max-w-7xl'>
        <Story />
      </div>
    ),
  ],
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const FullHeightDemo: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '200vh' }}>
        <div
          style={{
            height: '50vh',
            padding: '2rem',
            backgroundColor: '#050212',
          }}
        >
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Lunar Circle Section Demo
          </h2>
          <p className='text-gray-300'>
            This section features a stunning lunar background with animated
            statistics display. The layout adapts between mobile and desktop
            with different positioning of stats around the moon.
          </p>
        </div>
        <Story />
        <div
          style={{
            height: '50vh',
            padding: '2rem',
            backgroundColor: '#050212',
          }}
        >
          <p className='text-gray-300'>
            The section includes blurred loading text animations and responsive
            layouts that showcase platform statistics in an visually appealing
            way.
          </p>
        </div>
      </div>
    ),
  ],
};

export const AnimationFocus: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#050212' }}>
        <div className='mb-8 text-center'>
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Animation Showcase
          </h2>
          <p className='text-gray-300'>
            Focus on the entrance animations and blurred loading text effects.
            Refresh the page to see the animations trigger again.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
