import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PartnersSection from './PartnersSection';

const meta: Meta<typeof PartnersSection> = {
  title: 'Sections/PartnersSection',
  component: PartnersSection,
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

export const AnimationDemo: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#1a1a2e' }}>
        <div className='mb-8 text-center'>
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Partners Section Demo
          </h2>
          <p className='text-gray-300'>
            This section features animated partner cards with orbital motion
            effects. Each partner card includes interactive animations and hover
            effects.
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
};

export const StaticView: Story = {
  decorators: [
    (Story) => (
      <div style={{ padding: '2rem', backgroundColor: '#1a1a2e' }}>
        <div className='mb-8 text-center'>
          <h2 className='mb-4 text-2xl font-bold text-white'>
            Static Partners View
          </h2>
          <p className='text-gray-300'>
            View the partners section without animations to focus on layout and
            design.
          </p>
        </div>
        <div style={{ animation: 'none' }}>
          <Story />
        </div>
      </div>
    ),
  ],
};
