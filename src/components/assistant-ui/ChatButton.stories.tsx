import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ComponentType } from 'react';

import { ChatButton } from './ChatButton';

const meta: Meta<typeof ChatButton> = {
  title: 'Assistant UI/ChatButton',
  component: ChatButton,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isInMenu: {
      control: { type: 'boolean' },
      description: 'Whether the button is displayed in a menu context',
    },
    isStyled: {
      control: { type: 'boolean' },
      description: 'Whether to use styled div appearance instead of button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuStyle: Story = {
  args: {
    isInMenu: true,
    isStyled: false,
  },
  decorators: [
    (Story: ComponentType) => (
      <div className='bg-purple-950 p-8'>
        <div className='mx-auto max-w-xs'>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const FloatingStyle: Story = {
  args: {
    isInMenu: false,
    isStyled: false,
  },
  decorators: [
    (Story: ComponentType) => (
      <div className='relative h-96 w-full bg-gradient-to-br from-purple-900 to-indigo-900'>
        <div className='absolute right-6 bottom-6'>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const OverlayStyle: Story = {
  args: {
    isInMenu: false,
    isStyled: true,
  },
  decorators: [
    (Story: ComponentType) => (
      <div className='relative h-96 w-full bg-gradient-to-br from-purple-900 to-indigo-900'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='rounded-lg bg-black/50 p-8 backdrop-blur-sm'>
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};
