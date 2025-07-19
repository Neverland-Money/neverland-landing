import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import SecuritySection from './SecuritySection';

const meta: Meta<typeof SecuritySection> = {
  title: 'Sections/SecuritySection',
  component: SecuritySection,
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
      <div style={{ height: '200vh' }}>
        <div
          style={{
            height: '50vh',
            padding: '2rem',
            backgroundColor: '#1a1a2e',
          }}
        >
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Security Section Demo
          </h2>
          <p className='text-gray-300'>
            This section showcases security features with interactive glare
            effects that respond to scroll position. Scroll down to see the
            effects in action.
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
          <p className='text-gray-300'>
            The security cards feature dynamic lighting effects and responsive
            layouts that highlight the platform&apos;s security measures.
          </p>
        </div>
      </div>
    ),
  ],
};

export const GlareEffectDemo: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#1a1a2e' }}>
        <div className='mb-8 text-center'>
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Glare Effect Showcase
          </h2>
          <p className='text-gray-300'>
            Focus on the dynamic glare effects that move across the security
            cards based on scroll position and user interaction.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};
