import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import StatsCard from './StatsCard';

const meta: Meta<typeof StatsCard> = {
  title: 'UI/StatsCard',
  component: StatsCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'purple', value: '#16213e' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'text' },
    tooltipContent: { control: 'text' },
    className: { control: 'text' },
    isMobile: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Total Users',
    value: '1.2M',
    tooltipContent: 'Total number of registered users on the platform',
    isMobile: false,
  },
};

export const MobileVersion: Story = {
  args: {
    title: 'Total Users',
    value: '1.2M',
    tooltipContent: 'Total number of registered users on the platform',
    isMobile: true,
  },
};

export const TransactionCount: Story = {
  args: {
    title: 'Transactions',
    value: '50.3K',
    tooltipContent: 'Total number of transactions processed this month',
    isMobile: false,
  },
};

export const VolumeTraded: Story = {
  args: {
    title: 'Volume Traded',
    value: '$2.8B',
    tooltipContent: 'Total trading volume across all markets',
    isMobile: false,
  },
};

export const ActiveUsers: Story = {
  args: {
    title: 'Active Users',
    value: '234K',
    tooltipContent: 'Monthly active users on the platform',
    isMobile: false,
  },
};

export const LongTitle: Story = {
  args: {
    title: 'Daily Active Trading Volume',
    value: '$456M',
    tooltipContent:
      'The total volume of trades executed by active users in the past 24 hours',
    isMobile: false,
  },
};

export const MobileLongTitle: Story = {
  args: {
    title: 'Daily Active Trading Volume',
    value: '$456M',
    tooltipContent:
      'The total volume of trades executed by active users in the past 24 hours',
    isMobile: true,
  },
};

export const SmallValue: Story = {
  args: {
    title: 'New Signups',
    value: '42',
    tooltipContent: 'New user registrations today',
    isMobile: false,
  },
};

export const LargeValue: Story = {
  args: {
    title: 'Market Cap',
    value: '$12.4T',
    tooltipContent: 'Total market capitalization across all supported assets',
    isMobile: false,
  },
};

export const PercentageValue: Story = {
  args: {
    title: 'Success Rate',
    value: '99.9%',
    tooltipContent: 'Transaction success rate over the past 30 days',
    isMobile: false,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className='flex flex-wrap items-center justify-center gap-6'>
      <StatsCard
        title='Total Users'
        value='1.2M'
        tooltipContent='Total registered users'
      />
      <StatsCard
        title='Transactions'
        value='50.3K'
        tooltipContent='Monthly transactions'
      />
      <StatsCard
        title='Volume'
        value='$2.8B'
        tooltipContent='Total trading volume'
      />
      <StatsCard
        title='Success Rate'
        value='99.9%'
        tooltipContent='Transaction success rate'
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};

export const MobileLayout: Story = {
  render: () => (
    <div className='flex max-w-md flex-wrap items-start justify-center gap-4'>
      <StatsCard
        title='Total Users'
        value='1.2M'
        tooltipContent='Total registered users'
        isMobile={true}
      />
      <StatsCard
        title='Daily Volume'
        value='$45.6M'
        tooltipContent='24h trading volume'
        isMobile={true}
      />
      <StatsCard
        title='Active Traders'
        value='12.3K'
        tooltipContent='Currently active traders'
        isMobile={true}
      />
      <StatsCard
        title='Success Rate'
        value='99.8%'
        tooltipContent='Transaction success rate'
        isMobile={true}
      />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
