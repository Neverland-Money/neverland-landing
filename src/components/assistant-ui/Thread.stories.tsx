import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Thread } from './Thread';

const meta: Meta<typeof Thread> = {
  title: 'Assistant UI/Thread',
  component: Thread,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock the assistant-ui context for Storybook
const MockAssistantProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen bg-gray-50'>
      <div className='border-b border-yellow-200 bg-yellow-100 p-4 text-center'>
        <p className='text-sm text-yellow-800'>
          <strong>Note:</strong> This component requires the @assistant-ui/react
          context to function properly. In a real application, it would be
          wrapped with AssistantRuntimeProvider.
        </p>
      </div>
      <div className='h-full'>{children}</div>
    </div>
  );
};

export const Default: Story = {
  decorators: [
    (Story) => (
      <MockAssistantProvider>
        <Story />
      </MockAssistantProvider>
    ),
  ],
};

export const WithDarkBackground: Story = {
  decorators: [
    (Story) => (
      <div className='h-screen bg-gray-900'>
        <div className='border-b border-blue-700 bg-blue-900 p-4 text-center'>
          <p className='text-sm text-blue-200'>
            <strong>Note:</strong> Thread component with dark background theme.
            In production, this would display conversation messages and allow
            user interaction.
          </p>
        </div>
        <MockAssistantProvider>
          <Story />
        </MockAssistantProvider>
      </div>
    ),
  ],
};

export const Compact: Story = {
  decorators: [
    (Story) => (
      <div className='h-96 overflow-hidden rounded-lg border border-gray-300'>
        <div className='border-b border-gray-200 bg-gray-100 p-2 text-center'>
          <p className='text-xs text-gray-600'>Compact Thread View</p>
        </div>
        <MockAssistantProvider>
          <Story />
        </MockAssistantProvider>
      </div>
    ),
  ],
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  decorators: [
    (Story) => (
      <MockAssistantProvider>
        <Story />
      </MockAssistantProvider>
    ),
  ],
};

export const ComponentStructure: Story = {
  render: () => (
    <div className='h-screen bg-gray-50 p-6'>
      <div className='mx-auto max-w-4xl'>
        <h2 className='mb-6 text-2xl font-bold'>Thread Component Structure</h2>

        <div className='space-y-6'>
          <div className='rounded-lg bg-white p-4 shadow'>
            <h3 className='mb-3 text-lg font-semibold'>Features</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                • <strong>ThreadPrimitive.Root:</strong> Main container with
                custom scrolling
              </li>
              <li>
                • <strong>ThreadPrimitive.Viewport:</strong> Scrollable message
                area
              </li>
              <li>
                • <strong>ThreadWelcome:</strong> Initial welcome message
              </li>
              <li>
                • <strong>ThreadPrimitive.Messages:</strong> Message list with
                custom components
              </li>
              <li>
                • <strong>Composer:</strong> Message input area
              </li>
              <li>
                • <strong>ThreadScrollToBottom:</strong> Auto-scroll
                functionality
              </li>
            </ul>
          </div>

          <div className='rounded-lg bg-white p-4 shadow'>
            <h3 className='mb-3 text-lg font-semibold'>Message Types</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                • <strong>UserMessage:</strong> Messages from the user
              </li>
              <li>
                • <strong>AssistantMessage:</strong> AI assistant responses with
                markdown support
              </li>
              <li>
                • <strong>EditComposer:</strong> Inline message editing
              </li>
            </ul>
          </div>

          <div className='rounded-lg bg-white p-4 shadow'>
            <h3 className='mb-3 text-lg font-semibold'>Interactive Elements</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                • <strong>Action Bars:</strong> Copy, edit, regenerate message
                actions
              </li>
              <li>
                • <strong>Branch Picker:</strong> Navigate between conversation
                branches
              </li>
              <li>
                • <strong>Tooltip Buttons:</strong> Accessible action buttons
                with tooltips
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-8 rounded-lg bg-blue-50 p-4'>
          <h4 className='mb-2 font-semibold text-blue-900'>
            Integration Requirements
          </h4>
          <p className='text-sm text-blue-800'>
            This component is designed to work with @assistant-ui/react and
            requires:
          </p>
          <ul className='mt-2 space-y-1 text-sm text-blue-800'>
            <li>• AssistantRuntimeProvider wrapper</li>
            <li>• Proper message state management</li>
            <li>• Custom scrollbar styling</li>
            <li>• Markdown rendering support</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
