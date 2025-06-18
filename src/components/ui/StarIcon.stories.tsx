import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StarIcon } from './StarIcon';

const meta: Meta<typeof StarIcon> = {
  title: 'UI/StarIcon',
  component: StarIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'range', min: 10, max: 100, step: 2 },
      description: 'Width of the star icon',
    },
    height: {
      control: { type: 'range', min: 10, max: 100, step: 2 },
      description: 'Height of the star icon',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
  decorators: [
    (Story) => (
      <div className='flex items-center justify-center bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950 p-10'>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props are already defined in the component
  },
};

export const Small: Story = {
  args: {
    width: 16,
    height: 16,
  },
};

export const Large: Story = {
  args: {
    width: 64,
    height: 64,
  },
};

export const CustomClass: Story = {
  args: {
    width: 40,
    height: 40,
    className: 'opacity-50 rotate-45',
  },
};
