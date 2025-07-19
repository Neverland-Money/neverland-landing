import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import InfoGridSection from './InfoGridSection';

const meta: Meta<typeof InfoGridSection> = {
  title: 'Sections/InfoGridSection',
  component: InfoGridSection,
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
          background: 'linear-gradient(180deg, #1a1a2e 0%, #2d1b69 100%)',
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

export const InteractiveDemo: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#1a1a2e' }}>
        <div className='mb-8 text-center'>
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Info Grid Section Demo
          </h2>
          <p className='text-gray-300'>
            This section features interactive tilt cards with parallax effects
            and glare animations. Hover over the cards to see the 3D tilt effect
            in action.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
