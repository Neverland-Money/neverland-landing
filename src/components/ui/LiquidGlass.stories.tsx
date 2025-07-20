import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import LiquidGlass from './LiquidGlass';

const meta: Meta<typeof LiquidGlass> = {
  title: 'UI/LiquidGlass',
  component: LiquidGlass,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'purple', value: '#16213e' },
        {
          name: 'gradient',
          value: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    padding: {
      control: 'select',
      options: ['p-2', 'p-4', 'p-6', 'p-8', 'p-10', 'p-12'],
    },
    borderRadius: {
      control: 'select',
      options: [
        'rounded-none',
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-3xl',
        'rounded-full',
      ],
    },
    blur: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
    overlayColor: { control: 'color' },
    overlayOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    borderColor: { control: 'color' },
    borderOpacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <LiquidGlass {...args}>
      <div>
        <h3 className='mb-4 text-xl font-semibold text-white'>
          Glass Morphism Card
        </h3>
        <p className='mb-4 text-gray-200'>
          This is a beautiful liquid glass effect component that creates a
          frosted glass appearance with backdrop blur and subtle borders.
        </p>
        <button className='rounded-lg bg-white/20 px-4 py-2 text-white transition-colors hover:bg-white/30'>
          Learn More
        </button>
      </div>
    </LiquidGlass>
  ),
};

export const CustomColors: Story = {
  render: (args) => (
    <LiquidGlass {...args}>
      <div>
        <h3 className='mb-4 text-xl font-semibold text-white'>
          Custom Purple Glass
        </h3>
        <p className='mb-4 text-gray-200'>
          This variant uses custom purple overlay colors for a different
          aesthetic.
        </p>
        <div className='flex space-x-2'>
          <span className='rounded-full bg-purple-500/30 px-3 py-1 text-sm text-white'>
            Purple
          </span>
          <span className='rounded-full bg-blue-500/30 px-3 py-1 text-sm text-white'>
            Blue
          </span>
        </div>
      </div>
    </LiquidGlass>
  ),
  args: {
    overlayColor: '#8b5cf6',
    overlayOpacity: 0.3,
  },
};

export const HighBlur: Story = {
  render: (args) => (
    <LiquidGlass {...args}>
      <div>
        <h3 className='mb-4 text-xl font-semibold text-white'>
          High Blur Effect
        </h3>
        <p className='text-gray-200'>
          Maximum blur for a more pronounced frosted glass effect.
        </p>
      </div>
    </LiquidGlass>
  ),
  args: {
    blur: '3xl',
  },
};

export const MinimalBlur: Story = {
  render: (args) => (
    <LiquidGlass {...args}>
      <div>
        <h3 className='mb-4 text-xl font-semibold text-white'>Minimal Blur</h3>
        <p className='text-gray-200'>
          Subtle blur for a cleaner, less frosted appearance.
        </p>
      </div>
    </LiquidGlass>
  ),
  args: {
    blur: 'sm',
  },
};

export const RoundedFull: Story = {
  render: (args) => (
    <LiquidGlass {...args}>
      <div className='text-center'>
        <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20'>
          <span className='text-2xl'>🌟</span>
        </div>
        <h3 className='mb-2 text-lg font-semibold text-white'>
          Circular Glass
        </h3>
        <p className='text-sm text-gray-200'>
          Fully rounded glass morphism effect.
        </p>
      </div>
    </LiquidGlass>
  ),
  args: {
    borderRadius: 'rounded-full',
    padding: 'p-8',
  },
};

export const LargePadding: Story = {
  render: (args) => (
    <LiquidGlass {...args}>
      <div>
        <h3 className='mb-6 text-2xl font-bold text-white'>Spacious Layout</h3>
        <p className='mb-6 text-lg text-gray-200'>
          This example demonstrates the glass effect with generous padding for a
          more spacious feel.
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <div className='rounded-lg bg-white/10 p-4'>
            <h4 className='font-semibold text-white'>Feature 1</h4>
            <p className='text-sm text-gray-300'>Description here</p>
          </div>
          <div className='rounded-lg bg-white/10 p-4'>
            <h4 className='font-semibold text-white'>Feature 2</h4>
            <p className='text-sm text-gray-300'>Description here</p>
          </div>
        </div>
      </div>
    </LiquidGlass>
  ),
  args: {
    padding: 'p-12',
  },
};

export const CustomDimensions: Story = {
  render: (args) => (
    <LiquidGlass {...args}>
      <div>
        <h3 className='mb-4 text-xl font-semibold text-white'>Custom Size</h3>
        <p className='text-gray-200'>
          This glass container has custom width and height dimensions.
        </p>
      </div>
    </LiquidGlass>
  ),
  args: {
    width: '400px',
    height: '200px',
  },
};
