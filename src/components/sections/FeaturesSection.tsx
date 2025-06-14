import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F5ab9ff51260046dab6eba7f854d00a28%2Fd30b7dc3c8ae4cd492c246014f0760df?format=webp&width=1920"
          alt="Mystical landscape with mountains and ship in purple twilight"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 flex w-full max-w-sm flex-col items-center gap-3 text-center lg:mb-25">
          <h2 className="font-cinzel text-4xl font-normal uppercase leading-[110%] text-white sm:text-5xl lg:text-6xl">
            Key Features
          </h2>
          <p className="font-merriweather text-base leading-[140%] text-white sm:text-lg">
            Discover the magical features that make Neverland Money the perfect
            DeFi experience.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="flex w-full max-w-6xl flex-col items-center gap-5 lg:flex-row lg:justify-center">
          {/* Capital Efficiency Card */}
          <div className="group relative flex h-auto w-full max-w-[370px] flex-col items-center gap-2 rounded-2xl border border-white/20 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 sm:p-12 lg:h-[400px] lg:justify-center lg:p-11">
            {/* Card Background Frame - Optional decorative element */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2 text-center">
              <h3 className="font-cinzel text-xl font-normal uppercase leading-[110%] text-white sm:text-2xl lg:text-[26px]">
                Capital Efficiency
              </h3>
              <p className="max-w-[280px] font-merriweather text-sm leading-[140%] text-white/80 sm:text-base">
                Advanced automated looping strategies ensure users leverage
                low-utilization pools to maximize earnings.
              </p>
            </div>
          </div>

          {/* Self-Repaying Loans Card */}
          <div className="group relative flex h-auto w-full max-w-[370px] flex-col items-center gap-2 rounded-2xl border border-white/20 p-8 backdrop-blur-md transition-all duration-300 hover:border-white/30 sm:p-12 lg:h-[400px] lg:justify-center lg:p-11">
            {/* Card Background Frame - Optional decorative element */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-2 text-center">
              <h3 className="font-cinzel text-xl font-normal uppercase leading-[110%] text-white sm:text-2xl lg:text-[26px]">
                Self-Repaying Loans
              </h3>
              <p className="max-w-[299px] font-merriweather text-sm leading-[140%] text-white/80 sm:text-base">
                Set-and-forget feature to automatically leverage platform
                incentives into loan repayments, providing a care-free magic
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
