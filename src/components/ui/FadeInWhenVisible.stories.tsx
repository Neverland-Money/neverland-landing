import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import FadeInWhenVisible from './FadeInWhenVisible';

const meta: Meta<typeof FadeInWhenVisible> = {
  title: 'UI/FadeInWhenVisible',
  component: FadeInWhenVisible,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    delay: { control: { type: 'range', min: 0, max: 2, step: 0.1 } },
    duration: { control: { type: 'range', min: 0.1, max: 3, step: 0.1 } },
    y: { control: { type: 'range', min: 0, max: 100, step: 5 } },
    once: { control: 'boolean' },
    amount: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    className: { control: 'text' },
    children: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '150vh', padding: '2rem' }}>
        <div className='mb-8'>
          <h2 className='mb-4 text-2xl font-bold'>FadeInWhenVisible Demo</h2>
          <p className='mb-4 text-gray-600'>
            Scroll down to see the fade-in animations trigger when elements come
            into view.
          </p>
        </div>

        <div style={{ height: '50vh' }}></div>

        <Story />

        <div style={{ height: '50vh' }}></div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FadeInWhenVisible {...args}>
      <div className='mx-auto max-w-md rounded-lg bg-purple-100 p-6'>
        <h3 className='mb-2 text-xl font-semibold'>Default Animation</h3>
        <p className='text-gray-700'>
          This element fades in with a subtle upward movement when it enters the
          viewport.
        </p>
      </div>
    </FadeInWhenVisible>
  ),
};

export const WithDelay: Story = {
  render: (args) => (
    <FadeInWhenVisible {...args}>
      <div className='mx-auto max-w-md rounded-lg bg-blue-100 p-6'>
        <h3 className='mb-2 text-xl font-semibold'>Delayed Animation</h3>
        <p className='text-gray-700'>
          This element has a delay before the animation starts.
        </p>
      </div>
    </FadeInWhenVisible>
  ),
  args: {
    delay: 0.5,
  },
};

export const SlowAnimation: Story = {
  render: (args) => (
    <FadeInWhenVisible {...args}>
      <div className='mx-auto max-w-md rounded-lg bg-green-100 p-6'>
        <h3 className='mb-2 text-xl font-semibold'>Slow Animation</h3>
        <p className='text-gray-700'>
          This element animates more slowly for a dramatic effect.
        </p>
      </div>
    </FadeInWhenVisible>
  ),
  args: {
    duration: 2.0,
  },
};

export const LargeMovement: Story = {
  render: (args) => (
    <FadeInWhenVisible {...args}>
      <div className='mx-auto max-w-md rounded-lg bg-red-100 p-6'>
        <h3 className='mb-2 text-xl font-semibold'>Large Y Movement</h3>
        <p className='text-gray-700'>
          This element starts further down and moves up more dramatically.
        </p>
      </div>
    </FadeInWhenVisible>
  ),
  args: {
    y: 80,
  },
};

export const RepeatingAnimation: Story = {
  render: (args) => (
    <FadeInWhenVisible {...args}>
      <div className='mx-auto max-w-md rounded-lg bg-yellow-100 p-6'>
        <h3 className='mb-2 text-xl font-semibold'>Repeating Animation</h3>
        <p className='text-gray-700'>
          This element will animate every time it enters the viewport (scroll up
          and down).
        </p>
      </div>
    </FadeInWhenVisible>
  ),
  args: {
    once: false,
  },
};

export const MultipleElements: Story = {
  render: (args) => (
    <div className='space-y-8'>
      <FadeInWhenVisible {...args}>
        <div className='rounded-lg bg-purple-50 p-4'>
          <h4 className='font-semibold'>Element 1</h4>
          <p className='text-sm text-gray-600'>First element to animate</p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible {...args} delay={0.2}>
        <div className='rounded-lg bg-blue-50 p-4'>
          <h4 className='font-semibold'>Element 2</h4>
          <p className='text-sm text-gray-600'>
            Second element with slight delay
          </p>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible {...args} delay={0.4}>
        <div className='rounded-lg bg-green-50 p-4'>
          <h4 className='font-semibold'>Element 3</h4>
          <p className='text-sm text-gray-600'>Third element with more delay</p>
        </div>
      </FadeInWhenVisible>
    </div>
  ),
};
