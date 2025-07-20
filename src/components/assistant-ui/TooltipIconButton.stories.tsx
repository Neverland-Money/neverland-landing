import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  CopyIcon,
  EditIcon,
  TrashIcon,
  HeartIcon,
  StarIcon,
  SettingsIcon,
  InfoIcon,
  HelpCircleIcon,
  RefreshCwIcon,
  DownloadIcon,
  ShareIcon,
  BookmarkIcon,
} from 'lucide-react';

import { TooltipIconButton } from './TooltipIconButton';

const meta: Meta<typeof TooltipIconButton> = {
  title: 'Assistant UI/TooltipIconButton',
  component: TooltipIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tooltip: { control: 'text' },
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltip: 'Copy to clipboard',
    children: <CopyIcon className='h-4 w-4' />,
  },
};

export const Edit: Story = {
  args: {
    tooltip: 'Edit message',
    children: <EditIcon className='h-4 w-4' />,
  },
};

export const Delete: Story = {
  args: {
    tooltip: 'Delete item',
    children: <TrashIcon className='h-4 w-4' />,
    variant: 'destructive',
  },
};

export const TopTooltip: Story = {
  args: {
    tooltip: 'Tooltip on top',
    side: 'top',
    children: <InfoIcon className='h-4 w-4' />,
  },
};

export const LeftTooltip: Story = {
  args: {
    tooltip: 'Tooltip on left',
    side: 'left',
    children: <HelpCircleIcon className='h-4 w-4' />,
  },
};

export const RightTooltip: Story = {
  args: {
    tooltip: 'Tooltip on right',
    side: 'right',
    children: <SettingsIcon className='h-4 w-4' />,
  },
};

export const Disabled: Story = {
  args: {
    tooltip: 'This action is disabled',
    disabled: true,
    children: <RefreshCwIcon className='h-4 w-4' />,
  },
};

export const LongTooltipText: Story = {
  args: {
    tooltip:
      'This is a very long tooltip text that explains what this button does in great detail',
    children: <InfoIcon className='h-4 w-4' />,
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className='flex gap-2'>
      <TooltipIconButton tooltip='Copy'>
        <CopyIcon className='h-4 w-4' />
      </TooltipIconButton>
      <TooltipIconButton tooltip='Edit'>
        <EditIcon className='h-4 w-4' />
      </TooltipIconButton>
      <TooltipIconButton tooltip='Delete' variant='destructive'>
        <TrashIcon className='h-4 w-4' />
      </TooltipIconButton>
      <TooltipIconButton tooltip='Share'>
        <ShareIcon className='h-4 w-4' />
      </TooltipIconButton>
      <TooltipIconButton tooltip='Bookmark'>
        <BookmarkIcon className='h-4 w-4' />
      </TooltipIconButton>
    </div>
  ),
};

export const VariantShowcase: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='flex items-center gap-2'>
        <span className='w-20 text-sm'>Default:</span>
        <TooltipIconButton tooltip='Default variant'>
          <StarIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>

      <div className='flex items-center gap-2'>
        <span className='w-20 text-sm'>Secondary:</span>
        <TooltipIconButton tooltip='Secondary variant' variant='secondary'>
          <HeartIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>

      <div className='flex items-center gap-2'>
        <span className='w-20 text-sm'>Outline:</span>
        <TooltipIconButton tooltip='Outline variant' variant='outline'>
          <DownloadIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>

      <div className='flex items-center gap-2'>
        <span className='w-20 text-sm'>Ghost:</span>
        <TooltipIconButton tooltip='Ghost variant' variant='ghost'>
          <SettingsIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>

      <div className='flex items-center gap-2'>
        <span className='w-20 text-sm'>Destructive:</span>
        <TooltipIconButton tooltip='Destructive variant' variant='destructive'>
          <TrashIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>
    </div>
  ),
};

export const TooltipPositions: Story = {
  render: () => (
    <div className='grid grid-cols-3 gap-8 p-8'>
      <div></div>
      <div className='flex justify-center'>
        <TooltipIconButton tooltip='Top tooltip' side='top'>
          <InfoIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>
      <div></div>

      <div className='flex justify-center'>
        <TooltipIconButton tooltip='Left tooltip' side='left'>
          <InfoIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>
      <div className='flex justify-center'>
        <TooltipIconButton tooltip='Center (default bottom)'>
          <InfoIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>
      <div className='flex justify-center'>
        <TooltipIconButton tooltip='Right tooltip' side='right'>
          <InfoIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>

      <div></div>
      <div className='flex justify-center'>
        <TooltipIconButton tooltip='Bottom tooltip' side='bottom'>
          <InfoIcon className='h-4 w-4' />
        </TooltipIconButton>
      </div>
      <div></div>
    </div>
  ),
};
