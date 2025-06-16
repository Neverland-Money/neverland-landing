'use client';

import { useState } from 'react';

import AccordionItem, { type FAQItem } from '../ui/AccordionItem';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is Neverland Money?',
    answer:
      "Neverland is a next-generation DeFi lending protocol combining Aave V3's battle-tested security with sustainable vote escrow tokenomics. Featuring self-repaying loans, deflationary token mechanics and advanced automated yield strategies to maximize capital efficiency. Users can supply or borrow assets while earning rewards through governance participation or liquidity provision.",
  },
  {
    id: 2,
    question: 'How do I interact with Neverland?',
    answer:
      "Neverland is a decentralized, non-custodial liquidity protocol. Users can interact with Neverland through a user-friendly interface or directly with its smart contracts on the Monad blockchain.\n\nTo interact with the Neverland Protocol, simply connect your crypto wallet and supply your preferred asset and amount. Once supplied, you'll earn passive income based on market borrowing demand. Additionally, your supplied assets can be used as collateral, enabling you to borrow other assets.",
  },
  {
    id: 3,
    question: 'Do I need a wallet to interact with Neverland?',
    answer:
      'We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies!',
  },
  {
    id: 4,
    question: 'What is the cost of interacting with Neverland?',
    answer:
      'We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies!',
  },
  {
    id: 5,
    question: 'What are the risks involved in using Neverland?',
    answer:
      'We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies! We need short replies!',
  },
];

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState<number>(1); // First item open by default

  const toggleItem = (id: number) => {
    setActiveItem(id); // Only switch to the clicked item, no closing
  };

  return (
    <section className='relative h-[620px] min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#1a0b2e] via-[#2d1b69] to-[#1a0b2e] md:h-[1220px]'>
      {/* Background Image */}
      <div
        className='absolute inset-0 h-full w-full'
        style={{
          backgroundImage: 'url(/assets/images/faq/background.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Content Container */}
      <div className='relative z-10 flex min-h-full items-center justify-center px-4 py-12'>
        <div className='flex w-full max-w-[760px] flex-col items-center gap-12 md:gap-[50px]'>
          {/* Title */}
          <div className='flex w-full justify-center'>
            <h2 className='font-cinzel max-w-[641px] text-center text-4xl leading-[110%] font-normal text-white uppercase md:text-[60px]'>
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Items */}
          <div className='flex w-full flex-col gap-2'>
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={activeItem === item.id}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom shadow overlay */}
      <div className='pointer-events-none absolute right-0 bottom-0 left-0 h-80 bg-gradient-to-t from-[#040211] to-transparent md:h-60' />
      {/* Top shadow overlay */}
      <div className='pointer-events-none absolute top-0 right-0 left-0 h-80 bg-gradient-to-b from-[#040211] to-transparent md:h-60' />
    </section>
  );
}
