import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';

import AccordionItem, { FAQItem } from './AccordionItem';

const meta: Meta<typeof AccordionItem> = {
  title: 'UI/AccordionItem',
  component: AccordionItem,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      description: 'FAQ item with id, question, and answer',
      control: 'object',
    },
    isOpen: {
      control: 'boolean',
      description: 'Whether the accordion item is open',
    },
    onToggle: {
      action: 'toggled',
      description: 'Function called when the accordion is toggled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Example FAQ items
const exampleFAQs: FAQItem[] = [
  {
    id: 1,
    question: 'What is Neverland?',
    answer:
      "Neverland is a platform that revolutionizes the way you interact with blockchain technology. Our mission is to make crypto accessible, secure, and intuitive for everyone.\n\nWith **advanced security features** and a *user-friendly interface*, we're redefining the blockchain experience.",
  },
  {
    id: 2,
    question: 'How do I get started?',
    answer:
      'Getting started with Neverland is simple:\n\n1. Create an account\n2. Complete KYC verification\n3. Connect your wallet or create a new one\n4. Start exploring the `Neverland` ecosystem\n\nOur support team is available 24/7 to help you with any questions.',
  },
  {
    id: 3,
    question: 'What are the security features?',
    answer:
      'Security is our top priority. Neverland implements:\n\n• Multi-factor authentication\n• Cold storage for assets\n• Regular security audits\n• ~Zero-knowledge proofs~\n• End-to-end encryption',
  },
];

// Default story with controls
export const Default: Story = {
  args: {
    item: exampleFAQs[0],
    isOpen: false,
  },
};

// Show opened state
export const Opened: Story = {
  args: {
    item: exampleFAQs[0],
    isOpen: true,
  },
};

// Story with rich markdown content
export const RichContent: Story = {
  args: {
    item: {
      id: 4,
      question: 'How does markdown formatting work?',
      answer:
        'Neverland supports various markdown formatting options:\n\n**Bold text** for emphasis\n*Italic text* for subtle emphasis\n~Underlined text~ for highlighting\n`Code blocks` for technical details\n\nYou can combine **bold *and italic*** formatting too!',
    },
    isOpen: true,
  },
};

// Interactive accordion group
export const AccordionGroup = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className='w-[600px] space-y-4 p-8'>
      {exampleFAQs.map((faq) => (
        <AccordionItem
          key={faq.id}
          item={faq}
          isOpen={openId === faq.id}
          onToggle={() => toggleAccordion(faq.id)}
        />
      ))}
    </div>
  );
};

// Long content accordion
export const LongContent: Story = {
  args: {
    item: {
      id: 5,
      question: 'What is the future roadmap for Neverland?',
      answer:
        "Our roadmap includes several exciting phases:\n\n**Phase 1: Foundation (Q3 2023)**\n• Core platform launch\n• Basic feature set\n• Community building\n\n**Phase 2: Expansion (Q4 2023)**\n• Advanced trading features\n• Mobile app release\n• Partnership announcements\n\n**Phase 3: Innovation (Q1-Q2 2024)**\n• AI-powered analytics\n• Cross-chain compatibility\n• DAO governance implementation\n\n**Phase 4: Ecosystem (Q3-Q4 2024)**\n• Developer APIs\n• Third-party integrations\n• Global expansion\n\nWe're constantly evolving our roadmap based on community feedback and market trends. Stay tuned for more updates!",
    },
    isOpen: true,
  },
};
