import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import PartnerCard from './PartnerCard';

const meta: Meta<typeof PartnerCard> = {
  title: 'UI/PartnerCard',
  component: PartnerCard,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a2e' },
        { name: 'black', value: '#000000' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample icons for demonstration
const BankIcon = () => (
  <svg className='h-12 w-12 text-white' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M12 2L2 7h20L12 2zm-7 9v6h2v-6H5zm4 0v6h2v-6H9zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2zM2 20h20v2H2v-2z' />
  </svg>
);

const TechIcon = () => (
  <svg className='h-12 w-12 text-white' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
  </svg>
);

const FinanceIcon = () => (
  <svg className='h-12 w-12 text-white' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z' />
  </svg>
);

const CryptoIcon = () => (
  <svg className='h-12 w-12 text-white' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 6.83L16 11.41V16c0 .55-.45 1-1 1s-1-.45-1-1v-3.59l-2.59 2.59c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41L12.59 11H9c-.55 0-1-.45-1-1s.45-1 1-1h3.59L10 6.41c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0z' />
  </svg>
);

export const Default: Story = {
  args: {
    name: 'TechCorp',
    icon: <TechIcon />,
  },
};

export const BankPartner: Story = {
  args: {
    name: 'Global Bank',
    icon: <BankIcon />,
  },
};

export const FinancePartner: Story = {
  args: {
    name: 'FinanceHub',
    icon: <FinanceIcon />,
  },
};

export const CryptoPartner: Story = {
  args: {
    name: 'CryptoTech',
    icon: <CryptoIcon />,
  },
};

export const LongName: Story = {
  args: {
    name: 'Very Long Partner Name Corp',
    icon: <TechIcon />,
  },
};

export const ShortName: Story = {
  args: {
    name: 'ABC',
    icon: <BankIcon />,
  },
};

export const MultipleCards: Story = {
  render: () => (
    <div className='flex flex-wrap items-center justify-center gap-8'>
      <PartnerCard name='TechCorp' icon={<TechIcon />} />
      <PartnerCard name='Global Bank' icon={<BankIcon />} />
      <PartnerCard name='FinanceHub' icon={<FinanceIcon />} />
      <PartnerCard name='CryptoTech' icon={<CryptoIcon />} />
    </div>
  ),
  parameters: {
    layout: 'centered',
  },
};
