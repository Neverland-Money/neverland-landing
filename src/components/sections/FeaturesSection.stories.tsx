import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FeaturesSection from './FeaturesSection';

const meta: Meta<typeof FeaturesSection> = {
  title: 'Sections/FeaturesSection',
  component: FeaturesSection,
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
          background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%)',
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
      <div style={{ height: '200vh' }}>
        <div
          style={{
            height: '50vh',
            padding: '2rem',
            backgroundColor: '#1a1a2e',
          }}
        >
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Scroll down to see the Features Section
          </h2>
          <p className='text-gray-300'>
            The features section includes interactive glare effects that respond
            to scroll position.
          </p>
        </div>
        <Story />
        <div
          style={{
            height: '50vh',
            padding: '2rem',
            backgroundColor: '#1a1a2e',
          }}
        >
          <p className='text-gray-300'>Content after features section</p>
        </div>
      </div>
    ),
  ],
};
