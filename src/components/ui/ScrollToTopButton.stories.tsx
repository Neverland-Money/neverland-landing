import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useEffect } from 'react';

import ScrollToTopButton from './ScrollToTopButton';

const meta = {
  title: 'UI/ScrollToTopButton',
  component: ScrollToTopButton,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper decorator to create a scrollable page
const ScrollableDecorator = (Story: React.ComponentType) => {
  // Simulate scroll event to make button appear
  useEffect(() => {
    // Dispatch scroll event after a delay to simulate user scrolling
    const timer = setTimeout(() => {
      window.scrollTo(0, window.innerHeight * 0.5);
      // Manually trigger the scroll event since we're not actually scrolling in the Story
      window.dispatchEvent(new Event('scroll'));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950'>
      {/* First section to create scrollable height */}
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='mb-4 text-4xl font-bold'>Scroll Down</h1>
          <p className='text-lg'>Scroll down to see the button appear</p>
        </div>
      </div>

      {/* Second section to give page height */}
      <div className='flex h-screen items-center justify-center'>
        <div className='text-center text-white'>
          <h2 className='mb-4 text-3xl font-bold'>Bottom Section</h2>
          <p className='mb-8 text-lg'>The button should be visible now</p>
          <button
            className='rounded bg-white/10 px-4 py-2 text-white hover:bg-white/20'
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Manual scroll to top
          </button>
        </div>
      </div>

      {/* Render the actual component */}
      <Story />
    </div>
  );
};

export const Default: Story = {
  decorators: [ScrollableDecorator],
};

// This story shows the button with a custom container and scroll simulation
export const WithScrollSimulation = () => {
  // Toggle visibility in story
  useEffect(() => {
    const interval = setInterval(() => {
      // Alternating scroll positions to demonstrate the button's visibility
      const positions = [
        0,
        window.innerHeight * 0.8,
        window.innerHeight * 0.2,
        window.innerHeight,
      ];

      let i = 0;
      const scrollInterval = setInterval(() => {
        window.scrollTo(0, positions[i % positions.length]);
        window.dispatchEvent(new Event('scroll'));
        i++;

        if (i >= positions.length) {
          clearInterval(scrollInterval);
        }
      }, 1500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-gradient-to-b from-purple-950 via-purple-900 to-indigo-950'>
      <div className='flex h-screen items-center justify-center p-4'>
        <div className='rounded-lg border border-white/10 bg-black/30 p-8 text-center text-white backdrop-blur-sm'>
          <h2 className='mb-4 text-2xl font-bold'>Interactive Demo</h2>
          <p className='mb-6'>
            The button will automatically appear and disappear as the page
            scrolls. This simulates the actual behavior of the component.
          </p>
          <div className='flex justify-center space-x-4'>
            <button
              className='rounded bg-white/10 px-4 py-2 text-white hover:bg-white/20'
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth',
                });
              }}
            >
              Scroll Down
            </button>
            <button
              className='rounded bg-white/10 px-4 py-2 text-white hover:bg-white/20'
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Scroll Up
            </button>
          </div>
        </div>
      </div>

      <div className='flex h-screen items-center justify-center'>
        <div className='text-center text-white'>
          <h2 className='mb-4 text-3xl font-bold'>Bottom Section</h2>
          <p>The ScrollToTopButton should be visible now</p>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  );
};
