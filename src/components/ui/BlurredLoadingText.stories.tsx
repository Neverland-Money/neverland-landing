import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { BlurredLoadingText } from './BlurredLoadingText';

const meta: Meta<typeof BlurredLoadingText> = {
  title: 'UI/BlurredLoadingText',
  component: BlurredLoadingText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    className: { control: 'text' },
    duration: { control: { type: 'range', min: 0.5, max: 5, step: 0.1 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Loading...',
  },
};

export const CustomText: Story = {
  args: {
    text: 'Processing your request...',
  },
};

export const FastAnimation: Story = {
  args: {
    text: 'Fast loading',
    duration: 0.8,
  },
};

export const SlowAnimation: Story = {
  args: {
    text: 'Slow loading',
    duration: 3.0,
  },
};

export const LargeText: Story = {
  args: {
    text: 'Large Loading Text',
    className: 'text-4xl font-bold text-purple-600',
  },
};

export const SmallText: Story = {
  args: {
    text: 'Small loading...',
    className: 'text-sm text-gray-500',
  },
};

export const ColoredText: Story = {
  args: {
    text: 'Colored Loading',
    className: 'text-2xl text-blue-500 font-semibold',
    duration: 2.5,
  },
};
