import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import HowItWorksSection from './HowItWorksSection';

const meta: Meta<typeof HowItWorksSection> = {
  title: 'Sections/HowItWorksSection',
  component: HowItWorksSection,
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
          background: 'linear-gradient(180deg, #2d1b69 0%, #1a1a2e 100%)',
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
      <div className='mx-auto max-w-7xl px-4'>
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

export const ScrollableDemo: Story = {
  decorators: [
    (Story) => (
      <div style={{ height: '300vh' }}>
        <div
          style={{
            height: '50vh',
            padding: '2rem',
            backgroundColor: '#1a1a2e',
          }}
        >
          <h2 className='mb-4 text-2xl font-bold text-white'>
            How It Works Section Demo
          </h2>
          <p className='text-gray-300'>
            Scroll down to see the interactive timeline and step-by-step
            process. The section includes active step highlighting and
            animations.
          </p>
        </div>
        <Story />
        <div
          style={{
            height: '100vh',
            padding: '2rem',
            backgroundColor: '#1a1a2e',
          }}
        >
          <p className='text-gray-300'>
            Continue scrolling to see how the active step changes based on
            scroll position.
          </p>
        </div>
      </div>
    ),
  ],
};
