import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Tooltip } from './Tooltip';
import { Button } from './Button';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text for the tooltip',
    },
    description: {
      control: 'text',
      description: 'Description text for the tooltip',
    },
    position: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'left',
        'right',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
      ],
      description:
        'Preferred tooltip position (will adjust based on available space)',
    },
    trigger: {
      control: 'multi-select',
      options: ['hover', 'click', 'focus'],
      description: 'Events that trigger the tooltip',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the tooltip',
    },
    delay: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
      description: 'Delay before showing tooltip in milliseconds',
    },
    hideDelay: {
      control: { type: 'range', min: 0, max: 1000, step: 50 },
      description: 'Delay before hiding tooltip in milliseconds',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show directional arrow',
    },
    offset: {
      control: { type: 'range', min: 0, max: 24, step: 2 },
      description: 'Distance between tooltip and trigger element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Tooltip Title',
    description: 'This is a description of the tooltip functionality',
    children: <Button>Hover Me</Button>,
  },
};

export const SimpleText: Story = {
  args: {
    description: 'Simple tooltip with only description text',
    children: (
      <span className='cursor-help border-b border-dashed border-white text-white'>
        Hover for info
      </span>
    ),
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Important Information',
    children: (
      <Button variant='outline' size='sm'>
        Help
      </Button>
    ),
  },
};

export const ClickToShow: Story = {
  args: {
    title: 'Click Tooltip',
    description: 'This tooltip appears when you click the trigger',
    trigger: ['click'],
    children: <Button variant='secondary'>Click Me</Button>,
  },
};

export const CustomSizes: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-4'>
      <Tooltip title='Small' size='sm'>
        <Button size='sm'>Small</Button>
      </Tooltip>
      <Tooltip title='Medium' size='md'>
        <Button>Medium</Button>
      </Tooltip>
      <Tooltip title='Large' size='lg'>
        <Button size='lg'>Large</Button>
      </Tooltip>
      <Tooltip title='Extra Large' size='xl'>
        <Button size='lg'>XL</Button>
      </Tooltip>
    </div>
  ),
};

export const DelayedTooltip: Story = {
  args: {
    title: 'Delayed Tooltip',
    description: 'This tooltip appears after a delay',
    delay: 500,
    hideDelay: 200,
    children: <Button variant='ghost'>Wait for it...</Button>,
  },
};

export const CustomContent: Story = {
  args: {
    content: (
      <div className='text-center'>
        <h3 className='mb-2 text-xl font-bold'>Custom Content</h3>
        <p className='mb-2'>This tooltip contains custom JSX content</p>
        <div className='mt-2 rounded-md bg-purple-900/50 p-2 backdrop-blur-sm'>
          <code>{'<Tooltip content={<JSX>} />'}</code>
        </div>
      </div>
    ),
    size: 'lg',
    children: <Button variant='outline'>Advanced Tooltip</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className='grid grid-cols-2 gap-8 p-16'>
      <Tooltip title='Top Position' position='top'>
        <Button>Top</Button>
      </Tooltip>
      <Tooltip title='Right Position' position='right'>
        <Button>Right</Button>
      </Tooltip>
      <Tooltip title='Bottom Position' position='bottom'>
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip title='Left Position' position='left'>
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
};
