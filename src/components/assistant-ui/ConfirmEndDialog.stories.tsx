import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';

import { ConfirmEndDialog } from './ConfirmEndDialog';

const meta: Meta<typeof ConfirmEndDialog> = {
  title: 'Assistant UI/ConfirmEndDialog',
  component: ConfirmEndDialog,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'black', value: '#000000' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    onConfirm: { action: 'confirmed' },
    onCancel: { action: 'cancelled' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    onConfirm: () => console.log('Confirmed'),
    onCancel: () => console.log('Cancelled'),
  },
};

export const Closed: Story = {
  args: {
    open: false,
    onConfirm: () => console.log('Confirmed'),
    onCancel: () => console.log('Cancelled'),
  },
};

const InteractiveComponent = (
  args: React.ComponentProps<typeof ConfirmEndDialog>,
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='text-center'>
      <button
        onClick={() => setIsOpen(true)}
        className='rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:from-purple-700 hover:to-blue-700'
      >
        End Conversation
      </button>

      <ConfirmEndDialog
        {...args}
        open={isOpen}
        onConfirm={() => {
          console.log('Conversation ended');
          setIsOpen(false);
        }}
        onCancel={() => {
          console.log('Cancelled');
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export const Interactive: Story = {
  render: InteractiveComponent,
};

const WithCustomBackgroundComponent = (
  args: React.ComponentProps<typeof ConfirmEndDialog>,
) => (
  <div
    className='fixed inset-0 bg-gradient-to-br from-purple-900 to-blue-900'
    style={{
      backgroundImage:
        'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
    }}
  >
    <div className='flex min-h-screen items-center justify-center'>
      <ConfirmEndDialog {...args} open={true} />
    </div>
  </div>
);

export const WithCustomBackground: Story = {
  render: WithCustomBackgroundComponent,
  args: {
    onConfirm: () => console.log('Confirmed'),
    onCancel: () => console.log('Cancelled'),
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const AnimationShowcaseComponent = (
  args: React.ComponentProps<typeof ConfirmEndDialog>,
) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='space-y-4 text-center'>
      <p className='mb-4 text-white'>
        Click the button to see the dialog entrance animation
      </p>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-red-700'
      >
        {isOpen ? 'Close Dialog' : 'Show Dialog'}
      </button>

      <ConfirmEndDialog
        {...args}
        open={isOpen}
        onConfirm={() => {
          console.log('Confirmed - closing dialog');
          setIsOpen(false);
        }}
        onCancel={() => {
          console.log('Cancelled - closing dialog');
          setIsOpen(false);
        }}
      />
    </div>
  );
};

export const AnimationShowcase: Story = {
  render: AnimationShowcaseComponent,
};
