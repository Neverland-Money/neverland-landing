import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { CustomScrollbar } from './CustomScrollbar';

const meta: Meta<typeof CustomScrollbar> = {
  title: 'UI/CustomScrollbar',
  component: CustomScrollbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ height: '400px', width: '100%', border: '1px solid #ccc' }}>
      <CustomScrollbar {...args}>
        <div style={{ padding: '20px' }}>
          <h2 className='mb-4 text-2xl font-bold'>Custom Scrollbar Demo</h2>
          <p className='mb-4'>
            This component provides a custom-styled scrollbar with a purple
            theme that matches the site&apos;s design. Scroll to see it in
            action.
          </p>

          <div className='space-y-4'>
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className='rounded-lg bg-gray-100 p-4'>
                <h3 className='mb-2 text-lg font-semibold'>
                  Content Block {i + 1}
                </h3>
                <p className='text-gray-700'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            ))}
          </div>
        </div>
      </CustomScrollbar>
    </div>
  ),
};

export const LargeContent: Story = {
  render: (args) => (
    <div style={{ height: '300px', width: '100%', border: '1px solid #ccc' }}>
      <CustomScrollbar {...args}>
        <div style={{ padding: '20px', width: '150%' }}>
          <h2 className='mb-4 text-2xl font-bold'>Large Content Demo</h2>
          <p className='mb-4'>
            This demo shows both vertical and horizontal scrolling. The content
            is wider than the container to demonstrate horizontal scrolling.
          </p>

          <div className='space-y-4' style={{ width: '120%' }}>
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className='rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 p-4'
              >
                <h3 className='mb-2 text-lg font-semibold'>
                  Wide Content Section {i + 1}
                </h3>
                <p className='text-gray-700'>
                  This is a very long line of text that extends beyond the
                  normal container width to demonstrate horizontal scrolling
                  capabilities of the custom scrollbar component. You should be
                  able to scroll both vertically and horizontally to see all
                  content.
                </p>
              </div>
            ))}
          </div>
        </div>
      </CustomScrollbar>
    </div>
  ),
};

export const SmallContainer: Story = {
  render: (args) => (
    <div
      style={{
        height: '200px',
        width: '300px',
        border: '1px solid #ccc',
        margin: '0 auto',
      }}
    >
      <CustomScrollbar {...args}>
        <div style={{ padding: '15px' }}>
          <h3 className='mb-3 text-lg font-bold'>Small Container</h3>

          <div className='space-y-3'>
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className='rounded border bg-purple-50 p-3'>
                <p className='text-sm'>Item {i + 1}</p>
                <p className='mt-1 text-xs text-gray-600'>
                  Small scrollable content item with description.
                </p>
              </div>
            ))}
          </div>
        </div>
      </CustomScrollbar>
    </div>
  ),
};
