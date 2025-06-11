import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with gradient and effects */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(148, 47, 255, 0.3) 0%, transparent 70%),
            radial-gradient(circle at 80% 20%, rgba(255, 47, 148, 0.2) 0%, transparent 70%),
            radial-gradient(circle at 40% 80%, rgba(47, 148, 255, 0.2) 0%, transparent 70%)
          `,
        }}
      />

      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[600px] opacity-80">
        <div
          className="w-full h-full bg-gradient-to-t from-black/60 to-transparent"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      </div>

      {/* Rainbow effect */}
      <div className="absolute top-20 right-20 w-80 h-80 opacity-60">
        <div
          className="w-full h-full"
          style={{
            background:
              "conic-gradient(from 0deg, #ff0000, #ff8000, #ffff00, #00ff00, #0080ff, #8000ff, #ff0080, #ff0000)",
            clipPath: "circle(40% at 50% 50%)",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="w-full max-w-2xl">
          {/* Main heading */}
          <h1 className="text-white font-merriweather text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            <span className="block">MAGIC AND</span>
            <span className="block">PIXIE DUST</span>
            <span className="block text-purple-300">ON MONAD</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 font-merriweather text-xl md:text-2xl leading-relaxed mb-12 max-w-xl">
            Neverland is a lending protocol built on Aave's secure system,
            governed by the community, and powered by Monad's fast blockchain.
          </p>

          {/* Enter Dapp Button */}
          <div className="mb-16">
            <Button
              variant="primary"
              size="lg"
              className="px-12 py-4 text-xl font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <span className="mr-2">✨</span>
              Enter Dapp
              <span className="ml-2">✨</span>
            </Button>
          </div>
        </div>

        {/* Stats cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl">
          {/* Active Users Card */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1">
            <div className="text-white/70 font-merriweather text-sm uppercase tracking-wider mb-2">
              ACTIVE USERS
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white font-merriweather text-4xl font-bold">
                $210 M
              </span>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Total Value Locked Card */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex-1">
            <div className="text-white/70 font-merriweather text-sm uppercase tracking-wider mb-2">
              TOTAL VALUE LOCKED
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white font-merriweather text-4xl font-bold">
                $210 M
              </span>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
