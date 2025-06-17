'use client';

import { useState } from 'react';

import { StarIcon } from '@/components/ui/StarIcon';

import AccordionItem, { type FAQItem } from '../ui/AccordionItem';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'What is Neverland Money?',
    answer:
      "**Neverland** is a *next-generation* DeFi lending protocol combining **Aave V3's** battle-tested security with sustainable vote escrow tokenomics. Featuring ~self-repaying loans~, deflationary token mechanics and advanced automated yield strategies to maximize capital efficiency.\n\nUsers can supply or borrow assets while earning rewards through governance participation or liquidity provision.",
  },
  {
    id: 2,
    question: 'Why is Neverland building on Monad?',
    answer:
      '**Monad** offers **ultra-low latency, high throughput, and EVM compatibility**, making it ideal for scaling advanced DeFi strategies like automated yield loops and self-repaying loans. Its parallel execution and low gas fees unlock greater efficiency, accessibility, and composability. By building on Monad, Neverland can deliver a faster, cheaper, and more powerful lending experience.',
  },
  {
    id: 3,
    question: 'What is veDUST?',
    answer:
      '**veDUST** is the *vote-escrowed* version of Neverland\'s native token, "DUST". Users can lock their DUST to receive veDUST, which grants them:\n\n• **Voting power**\n• **Governance rewards**\n• **Access to self-repaying loan features**\n\nThe longer the lock, the more veDUST that is received - encouraging long-term alignment and active participation in the protocol\'s future.',
  },
  {
    id: 4,
    question: 'What are self-repaying loans on Neverland?',
    answer:
      'Neverland lets users earn **DUST rewards** for depositing assets and taking loan positions. By locking "DUST" as **veDUST**, users can choose the option to have their *governance rewards* automatically directed to pay down their debt over time - creating a ~self-repaying loan~.\n\nThis system helps reduce debt passively, without requiring users to manually repay their loans.',
  },
  {
    id: 5,
    question: 'How do the automated yield strategies work?',
    answer:
      'Neverland\'s **automated strategies** optimize yield by looping assets from low-utilization *pools* into higher-yielding ones. By borrowing an asset at **low interest rates** and redepositing them into pools offering higher "APR" or emissions, users amplify their returns.\n\nThe system self-balances liquidity across markets - maximizing yield with minimal manual effort.',
  },
];

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState<number>(1); // First item open by default

  const toggleItem = (id: number) => {
    setActiveItem(id); // Only switch to the clicked item, no closing
  };

  return (
    <section
      id='faq'
      className='relative h-[1100px] min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#1a0b2e] via-[#2d1b69] to-[#1a0b2e] md:h-[1220px]'
    >
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
              Frequently Asked{' '}
              <span className='relative inline-block'>
                Questions
                <div className='absolute top-[35%] left-[7%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform md:top-[45%] md:left-[7.5%] md:h-6 md:w-6'>
                  <StarIcon />
                </div>
              </span>
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
