import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mock the necessary providers for Storybook
const MockProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative'>
      <div className='border-b border-yellow-200 bg-yellow-50 p-2 text-center'>
        <p className='text-xs text-yellow-700'>
          <strong>Note:</strong> Header requires SmoothScroll context and
          Next.js router in production
        </p>
      </div>
      {children}
    </div>
  );
};

export const Default: Story = {
  decorators: [
    (Story) => (
      <MockProviders>
        <Story />
      </MockProviders>
    ),
  ],
};

export const Scrolled: Story = {
  decorators: [
    (Story) => (
      <div>
        <MockProviders>
          <div style={{ transform: 'translateY(100vh)' }}>
            <Story />
          </div>
        </MockProviders>
      </div>
    ),
  ],
};

export const WithBackground: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '200vh',
          background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        }}
      >
        <MockProviders>
          <Story />
        </MockProviders>

        {/* Add some content to show header behavior */}
        <div className='p-8 text-white'>
          <h2 className='mb-4 text-2xl font-bold'>Page Content</h2>
          <p className='mb-4'>
            This demonstrates how the header appears over content. In a real
            application, the header would have smooth scroll behavior and
            responsive design.
          </p>

          <div className='space-y-8'>
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className='rounded-lg bg-white/10 p-6'>
                <h3 className='mb-2 text-lg font-semibold'>Section {i + 1}</h3>
                <p className='text-gray-300'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
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
      <MockProviders>
        <Story />
      </MockProviders>
    ),
  ],
};

export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  decorators: [
    (Story) => (
      <MockProviders>
        <Story />
      </MockProviders>
    ),
  ],
};

export const ComponentBreakdown: Story = {
  render: () => (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='mx-auto max-w-4xl space-y-6'>
        <div>
          <h2 className='mb-4 text-2xl font-bold'>
            Header Component Breakdown
          </h2>
          <p className='mb-6 text-gray-600'>
            The Header component provides navigation and branding for the
            application.
          </p>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          <div className='space-y-4'>
            <div className='rounded-lg border bg-white p-4'>
              <h3 className='mb-3 font-semibold'>Key Features</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  • <strong>Responsive Design:</strong> Mobile hamburger menu
                </li>
                <li>
                  • <strong>Smooth Scrolling:</strong> Animated navigation to
                  sections
                </li>
                <li>
                  • <strong>Scroll Detection:</strong> Changes appearance when
                  scrolled
                </li>
                <li>
                  • <strong>Logo Integration:</strong> Brand identity display
                </li>
                <li>
                  • <strong>Analytics Tracking:</strong> User interaction
                  tracking
                </li>
              </ul>
            </div>

            <div className='rounded-lg border bg-white p-4'>
              <h3 className='mb-3 font-semibold'>Navigation Links</h3>
              <ul className='space-y-2 text-sm'>
                <li>• Home / Hero section</li>
                <li>• Features overview</li>
                <li>• How It Works process</li>
                <li>• Partners showcase</li>
                <li>• FAQ section</li>
                <li>• Contact information</li>
              </ul>
            </div>
          </div>

          <div className='space-y-4'>
            <div className='rounded-lg border bg-white p-4'>
              <h3 className='mb-3 font-semibold'>Technical Implementation</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  • <strong>Next.js Integration:</strong> Uses Next.js router
                  and Image
                </li>
                <li>
                  • <strong>Scroll Context:</strong> Integrates with
                  SmoothScroll component
                </li>
                <li>
                  • <strong>State Management:</strong> Mobile menu and scroll
                  state
                </li>
                <li>
                  • <strong>Event Handlers:</strong> Analytics and navigation
                </li>
              </ul>
            </div>

            <div className='rounded-lg border border-blue-200 bg-blue-50 p-4'>
              <h4 className='mb-2 font-semibold text-blue-900'>Dependencies</h4>
              <ul className='space-y-1 text-sm text-blue-800'>
                <li>• Next.js (Image, Link, usePathname)</li>
                <li>• SmoothScroll context (Lenis)</li>
                <li>• Analytics utilities</li>
                <li>• React hooks (useState, useEffect)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='rounded-lg bg-gray-50 p-4'>
          <h4 className='mb-2 font-semibold'>Responsive Behavior</h4>
          <p className='mb-3 text-sm text-gray-700'>
            The header adapts to different screen sizes:
          </p>
          <ul className='space-y-1 text-sm text-gray-700'>
            <li>
              • <strong>Desktop:</strong> Full navigation menu with logo
            </li>
            <li>
              • <strong>Tablet:</strong> Condensed menu with hamburger toggle
            </li>
            <li>
              • <strong>Mobile:</strong> Collapsible menu with mobile-optimized
              layout
            </li>
          </ul>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};
