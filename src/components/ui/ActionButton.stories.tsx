import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ActionButton from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  title: 'UI/ActionButton',
  component: ActionButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    buttonName: { control: 'text' },
    buttonLocation: { control: 'text' },
    showStars: { control: 'boolean' },
    showStardust: { control: 'boolean' },
    customBackground: { control: 'text' },
    customBoxShadow: { control: 'text' },
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Enter DApp',
    showStars: true,
    showStardust: true,
  },
};

export const WithoutStars: Story = {
  args: {
    text: 'Get Started',
    showStars: false,
    showStardust: true,
  },
};

export const WithoutStardust: Story = {
  args: {
    text: 'Launch App',
    showStars: true,
    showStardust: false,
  },
};

export const Minimal: Story = {
  args: {
    text: 'Simple Button',
    showStars: false,
    showStardust: false,
  },
};

export const CustomColors: Story = {
  args: {
    text: 'Custom Style',
    showStars: true,
    showStardust: true,
    customBackground: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
    customBoxShadow: '0px 0px 24px #ff6b6b',
  },
};

export const WithCustomClass: Story = {
  args: {
    text: 'Custom Styled',
    className: 'transform hover:scale-105',
    showStars: true,
    showStardust: true,
  },
};
