import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import StatsCard from './StatsCard';

// Mock BlurredLoadingText and Tooltip since we just want to test the StatsCard component
vi.mock('./BlurredLoadingText', () => ({
  BlurredLoadingText: ({
    text,
    className,
  }: {
    text: string;
    className: string;
  }) => (
    <div data-testid='mocked-blurred-text' className={className}>
      {text}
    </div>
  ),
}));

vi.mock('./Tooltip', () => ({
  Tooltip: ({
    content,
    children,
  }: {
    content: React.ReactNode;
    children: React.ReactNode;
  }) => (
    <div data-testid='mocked-tooltip'>
      <div data-testid='tooltip-content'>{content}</div>
      <div data-testid='tooltip-trigger'>{children}</div>
    </div>
  ),
}));

describe('StatsCard Component', () => {
  it('renders desktop version correctly', () => {
    render(
      <StatsCard
        title='Total Value Locked'
        value='100M'
        tooltipContent='Total value of deposited assets'
      />,
    );

    // Check that title is rendered
    expect(screen.getByText('Total Value Locked')).toBeInTheDocument();

    // Check that value is passed to BlurredLoadingText
    const valueElement = screen.getByTestId('mocked-blurred-text');
    expect(valueElement).toHaveTextContent('100M');

    // Check tooltip content
    const tooltipContent = screen.getByTestId('tooltip-content');
    expect(tooltipContent).toHaveTextContent('Total value of deposited assets');
  });

  it('renders mobile version correctly', () => {
    render(
      <StatsCard
        title='TOTAL VALUE LOCKED'
        value='100M'
        tooltipContent='Total value of deposited assets'
        isMobile={true}
      />,
    );

    // Mobile version splits the title into separate spans
    expect(screen.getByText('{ TOTAL')).toBeInTheDocument();
    expect(screen.getByText('VALUE LOCKED }')).toBeInTheDocument();

    // Check that value is passed to BlurredLoadingText
    const valueElement = screen.getByTestId('mocked-blurred-text');
    expect(valueElement).toHaveTextContent('100M');
  });

  it('applies custom className when provided', () => {
    render(
      <StatsCard
        title='Total Value Locked'
        value='100M'
        tooltipContent='Total value of deposited assets'
        className='custom-class'
      />,
    );

    // The root div should have the custom class
    const rootElement = screen.getByTestId('mocked-tooltip').parentElement;
    expect(rootElement).toHaveClass('custom-class');
  });
});
