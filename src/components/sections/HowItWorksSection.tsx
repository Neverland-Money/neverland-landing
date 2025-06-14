'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: 1,
      title: 'Supply Assets',
      description:
        "Deposit your crypto to earn passive income. Add your assets to Neverland's liquidity pools and earn interest while supporting the platform's stability.",
      side: 'right',
    },
    {
      number: 2,
      title: 'Borrow Funds',
      description:
        'Get instant loans using your assets as collateral. Access funds without selling your crypto. Enjoy flexible terms and low rates.',
      side: 'left',
    },
    {
      number: 3,
      title: 'Earn Rewards',
      description:
        'Get Neverland tokens for your activity. Supply, borrow, or engage with the platform and earn valuable tokens in return.',
      side: 'right',
    },
    {
      number: 4,
      title: 'Governance',
      description:
        'Help shape the future of Neverland. Vote on proposals and take part in key decisions through decentralized governance.',
      side: 'left',
    },
  ];

  const StarIcon = () => (
    <Image
      src="/assets/images/how-it-works/star.svg"
      alt="Star"
      width={26}
      height={26}
      className="h-6 w-6"
    />
  );
  const SupplyAssetsIcon = () => (
    <Image
      src="/assets/images/how-it-works/supply.svg"
      alt="Supply"
      width={28}
      height={28}
      className="h-7 w-7"
    />
  );
  const BorrowIcon = () => (
    <Image
      src="/assets/images/how-it-works/borrow.svg"
      alt="Borrow"
      width={28}
      height={28}
      className="h-7 w-7"
    />
  );
  const GlobeIcon = () => (
    <Image
      src="/assets/images/how-it-works/globe.svg"
      alt="Globe"
      width={28}
      height={28}
      className="h-7 w-7"
    />
  );

  const getCurrentTravelingIcon = () => {
    switch (activeStep) {
      case 1:
        return <SupplyAssetsIcon />;
      case 2:
        return <BorrowIcon />;
      case 3:
        return <GlobeIcon />;
      default:
        return <StarIcon />;
    }
  };

  const getStepPosition = (index: number): number => {
    const stepEl = stepRefs.current[index];
    const tlEl = timelineRef.current;
    if (!stepEl || !tlEl) return 0;

    // getBoundingClientRect() is always relative to the viewport,
    // so subtract the timeline’s top to get a container‐relative value.
    const stepRect = stepEl.getBoundingClientRect();
    const tlRect = tlEl.getBoundingClientRect();

    // Compute vertical center of the step, relative to the top of timelineRef
    const midOfStep = stepRect.top + stepRect.height / 2 - tlRect.top;

    // Subtract half the icon height to truly center it
    return midOfStep - 120;
  };

  // Snap activeStep to any step whose center crosses the viewport middle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (idx !== -1) {
              setActiveStep(idx + 1);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      },
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => {
      stepRefs.current.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const TimelineStep = ({
    step,
    index,
  }: {
    step: (typeof steps)[0];
    index: number;
  }) => {
    const { number, title, description, side } = step;
    return (
      <div className="relative flex min-h-[200px] items-center justify-center lg:min-h-[240px]">
        <div className="relative mx-auto w-full max-w-4xl">
          <div
            className={`flex min-h-[200px] items-start gap-8 lg:gap-16 ${
              side === 'left' ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            <div
              className={`max-w-sm flex-1 lg:max-w-md ${
                side === 'left' ? 'text-right' : 'text-left'
              }`}
            >
              <h3 className="font-cinzel mb-2 text-xl leading-tight font-normal text-white uppercase lg:text-2xl">
                {title}
              </h3>
              <p className="font-merriweather text-sm leading-relaxed font-normal text-white/60 lg:text-base">
                {description}
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-[#050212]">
                <span className="font-cinzel text-base font-normal text-white">
                  {number}
                </span>
              </div>
            </div>
            <div className="max-w-sm flex-1 lg:max-w-md" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden px-4 py-[180px] lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="relative mx-auto mb-16 max-w-[500px] text-center lg:mb-40">
          <div className="relative inline-block">
            <h2 className="font-cinzel mb-3 text-4xl leading-tight font-normal text-white uppercase lg:text-6xl">
              How it w
              <span className="relative inline-block">
                o
                <div className="absolute top-[47%] left-[51%] -translate-x-1/2 -translate-y-1/2 transform">
                  <StarIcon />
                </div>
              </span>
              rks?
            </h2>
          </div>
          <p className="font-inter mx-auto max-w-[385px] text-lg leading-relaxed font-normal text-white">
            Navigate the magical world of DeFi with our simple step-by-step
            process.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Timeline line with fade effect */}
          <div
            className="absolute -top-16 left-1/2 w-[6px] -translate-x-1/2 transform"
            style={{ height: 'calc(100% + 64px)' }}
          >
            <div className="h-full w-full bg-white opacity-70" />
            {/* Fade overlay at the top */}
            <div className="absolute top-0 left-0 h-32 w-full bg-gradient-to-b from-[#050212] to-transparent" />
            {/* Fade overlay at the bottom */}
            <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050212] to-transparent" />
          </div>

          {/* Traveling icon */}
          <div
            className="absolute left-1/2 z-20"
            style={{
              top: `${getStepPosition(activeStep - 1)}px`,
              transform: 'translateX(-50%)',
              transition: 'top 0.3s ease',
            }}
          >
            <div className="relative h-20 w-20 rounded-full border border-[#530ee3] bg-[#050212] shadow-[0_0_36px_#7200d6]">
              <div className="absolute top-[18px] left-[18px] flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#d132e0] to-[#530ee3] shadow-[0_0_60px_rgba(114,0,214,0.60)]">
                {getCurrentTravelingIcon()}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="relative z-10 flex w-full flex-col items-center">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className="step-container"
              >
                <TimelineStep step={step} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
