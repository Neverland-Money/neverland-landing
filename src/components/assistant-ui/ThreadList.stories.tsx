import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ThreadList } from './ThreadList';

const meta: Meta<typeof ThreadList> = {
  title: 'Assistant UI/ThreadList',
  component: ThreadList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock the assistant-ui context for Storybook
const MockThreadListProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='w-80 rounded-lg border border-gray-200 bg-white p-4'>
      <div className='mb-4 rounded border border-yellow-200 bg-yellow-50 p-3'>
        <p className='text-xs text-yellow-700'>
          <strong>Note:</strong> This component requires @assistant-ui/react
          ThreadListProvider to display actual thread data.
        </p>
      </div>
      {children}
    </div>
  );
};

export const Default: Story = {
  decorators: [
    (Story) => (
      <MockThreadListProvider>
        <Story />
      </MockThreadListProvider>
    ),
  ],
};

export const InSidebar: Story = {
  decorators: [
    (Story) => (
      <div className='flex h-screen bg-gray-100'>
        <div className='w-80 overflow-y-auto border-r border-gray-200 bg-white p-4'>
          <div className='mb-4'>
            <h2 className='text-lg font-semibold text-gray-800'>
              Conversations
            </h2>
            <p className='text-sm text-gray-600'>Recent chat threads</p>
          </div>
          <Story />
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <p className='text-gray-500'>Main chat area would be here</p>
        </div>
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const DarkTheme: Story = {
  decorators: [
    (Story) => (
      <div className='w-80 rounded-lg border border-gray-700 bg-gray-900 p-4'>
        <div className='mb-4 rounded border border-blue-700 bg-blue-900/50 p-3'>
          <p className='text-xs text-blue-200'>
            <strong>Note:</strong> Thread list with dark theme styling.
          </p>
        </div>
        <div className='[&_button]:text-white [&_button]:hover:bg-gray-800 [&_svg]:text-gray-300'>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Compact: Story = {
  decorators: [
    (Story) => (
      <div className='w-64 rounded-lg border border-gray-200 bg-white p-2'>
        <div className='mb-2 rounded bg-gray-50 p-2 text-center'>
          <p className='text-xs text-gray-600'>Compact View</p>
        </div>
        <div className='[&_button]:px-2 [&_button]:py-1 [&_button]:text-sm'>
          <Story />
        </div>
      </div>
    ),
  ],
};

export const ComponentBreakdown: Story = {
  render: () => (
    <div className='mx-auto max-w-4xl space-y-6 p-6'>
      <div>
        <h2 className='mb-4 text-2xl font-bold'>
          ThreadList Component Breakdown
        </h2>
        <p className='mb-6 text-gray-600'>
          This component manages a list of conversation threads with creation
          and archiving capabilities.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div className='space-y-4'>
          <div className='rounded-lg border bg-white p-4'>
            <h3 className='mb-3 font-semibold'>Component Structure</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                • <strong>ThreadListPrimitive.Root:</strong> Container with gap
                styling
              </li>
              <li>
                • <strong>ThreadListNew:</strong> Button to create new threads
              </li>
              <li>
                • <strong>ThreadListItems:</strong> Renders list of existing
                threads
              </li>
              <li>
                • <strong>ThreadListItem:</strong> Individual thread with title
                and actions
              </li>
            </ul>
          </div>

          <div className='rounded-lg border bg-white p-4'>
            <h3 className='mb-3 font-semibold'>Features</h3>
            <ul className='space-y-2 text-sm'>
              <li>• Create new conversation threads</li>
              <li>• Display thread titles</li>
              <li>• Archive existing threads</li>
              <li>• Active state highlighting</li>
              <li>• Keyboard navigation support</li>
            </ul>
          </div>
        </div>

        <div className='space-y-4'>
          <div className='rounded-lg border bg-white p-4'>
            <h3 className='mb-3 font-semibold'>Interactive Elements</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                • <strong>New Thread Button:</strong> Plus icon with hover
                states
              </li>
              <li>
                • <strong>Thread Trigger:</strong> Clickable thread title area
              </li>
              <li>
                • <strong>Archive Button:</strong> Tooltip-enabled archive
                action
              </li>
            </ul>
          </div>

          <div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
            <h4 className='mb-2 font-semibold text-blue-900'>Dependencies</h4>
            <ul className='space-y-1 text-sm text-blue-800'>
              <li>• @assistant-ui/react ThreadListProvider</li>
              <li>• Button component from UI library</li>
              <li>• TooltipIconButton for actions</li>
              <li>• Lucide icons (Plus, Archive)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='rounded-lg bg-gray-50 p-4'>
        <h4 className='mb-2 font-semibold'>Usage in Application</h4>
        <p className='text-sm text-gray-700'>
          Typically used in a sidebar or panel to display conversation history.
          Works in conjunction with the Thread component to provide a complete
          chat interface.
        </p>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <div className='h-screen bg-gray-50 p-2'>
        <div className='h-full rounded-lg bg-white p-3'>
          <div className='mb-3 text-center'>
            <h3 className='font-semibold'>Chats</h3>
          </div>
          <Story />
        </div>
      </div>
    ),
  ],
};
