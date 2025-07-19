import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CustomScrollIndicator } from './CustomScrollIndicator';

const meta: Meta<typeof CustomScrollIndicator> = {
  title: 'UI/CustomScrollIndicator',
  component: CustomScrollIndicator,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    barWidth: { control: { type: 'range', min: 2, max: 20, step: 1 } },
    className: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '200vh', padding: '2rem' }}>
        <div className='mb-8'>
          <h2 className='mb-4 text-2xl font-bold'>
            Custom Scroll Indicator Demo
          </h2>
          <p className='mb-4 text-gray-600'>
            Scroll down to see the custom scroll indicator in action. This
            component provides a visual representation of scroll progress.
          </p>
        </div>

        <div className='space-y-8'>
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className='rounded-lg bg-gray-100 p-6'>
              <h3 className='mb-2 text-lg font-semibold'>Section {i + 1}</h3>
              <p className='text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          ))}
        </div>

        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    barWidth: 6,
  },
};

export const ThinBar: Story = {
  args: {
    barWidth: 3,
  },
};

export const ThickBar: Story = {
  args: {
    barWidth: 12,
  },
};

export const CustomStyling: Story = {
  args: {
    barWidth: 8,
    className: 'bg-purple-200',
  },
};

export const MinimalWidth: Story = {
  args: {
    barWidth: 2,
  },
};

export const ExtraWide: Story = {
  args: {
    barWidth: 20,
  },
};
