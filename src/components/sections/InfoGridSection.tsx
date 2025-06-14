import React from "react";
import Image from "next/image";

const StarIcon = () => (
  <Image
    src="/assets/images/info/star.svg"
    alt="Star"
    width={26}
    height={26}
    className="w-6 h-6"
  />
);

interface FeatureCardProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  backgroundImage,
}) => (
  <div
    className="relative w-full sm:w-60 h-60 p-5 flex flex-col justify-between rounded-2xl border border-white/20 overflow-hidden bg-black -scale-x-100 bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div 
      className="relative z-10 flex flex-col items-center justify-start gap-2 h-full -scale-x-100"
    >
      <h3 className="font-cinzel text-lg font-normal leading-[110%] uppercase text-white text-center">
        {title}
      </h3>
      <p className="font-merriweather text-base font-normal leading-[140%] text-white/60 text-center">
        {description}
      </p>
    </div>
  </div>
);

const InfoGridSection: React.FC = () => {
  const features = [
    {
      title: "Community",
      description: "Powered by vote-escrow community governance",
      backgroundImage: "/assets/images/info/community-image.webp",
    },
    {
      title: "Instant Liquidity",
      description: "Instant access to capital on Monad",
      backgroundImage: "/assets/images/info/instant-liquidity-image.webp",
    },
    {
      title: "You Hold the Keys",
      description: "Full control of your assets at all times",
      backgroundImage: "/assets/images/info/you-hold-keys-image.webp",
    },
    {
      title: "Optimized Speed",
      description: "Fast, efficient, and seamless performance",
      backgroundImage: "/assets/images/info/optimization-image.webp",
    },
    {
      title: "Security",
      description: "Audited smart contracts: Your assets stay safe",
      backgroundImage: "/assets/images/info/security-image.webp",
    },
  ];

  return (
    <section className="w-full bg-transparent py-20 md:py-44 px-5">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-[100px]">
        {/* Header Section */}
        <div className="w-full max-w-[678px] flex flex-col items-center gap-3 relative">
          <div className="relative w-full">
            <h2 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-normal leading-[110%] uppercase text-white text-center">
              What is Neverland?
            </h2>
            {/* Decorative Stars */}
            <div className="hidden lg:block absolute top-5 left-[-40px]">
              <StarIcon />
            </div>
            <div className="hidden lg:block absolute top-5 right-[-40px]">
              <StarIcon />
            </div>
          </div>
          <p className="w-full font-merriweather text-lg font-normal leading-[140%] text-white text-center max-w-[550px] mt-4">
          Neverland is a decentralized, non-custodial lending platform governed by the community through vote-escrow tokenomics, unlocking capital on the high-performance Monad blockchain.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-5 max-w-full sm:max-w-none mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              backgroundImage={feature.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoGridSection;
