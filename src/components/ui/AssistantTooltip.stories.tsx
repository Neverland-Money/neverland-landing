import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tooltip, TooltipContent, TooltipTrigger } from './AssistantTooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/AssistantTooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    defaultOpen: { control: 'boolean' },
    onOpenChange: { action: 'open changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger className='bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium'>
        Hover me
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger className='bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-full p-2'>
        <svg
          className='h-4 w-4'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </TooltipTrigger>
      <TooltipContent>
        <p>Information tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger className='bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium'>
        Long tooltip
      </TooltipTrigger>
      <TooltipContent>
        <p className='max-w-xs'>
          This is a longer tooltip with more detailed information that explains
          what this element does in greater detail.
        </p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const CustomSideOffset: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <TooltipTrigger className='bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium'>
        Custom offset
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p>Tooltip with custom side offset</p>
      </TooltipContent>
    </Tooltip>
  ),
};
