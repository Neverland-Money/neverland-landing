import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto w-full max-w-7xl h-20 flex justify-between items-center px-6 md:px-12 lg:px-24">
        {/* Logo Section - Left */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-white text-2xl">✨</span>
            <span className="text-white font-merriweather text-xl font-bold tracking-wider">
              NEVERLAND
            </span>
          </div>
        </div>

        {/* Center Nav Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-white font-merriweather text-base font-normal hover:text-purple-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-white font-merriweather text-base font-normal hover:text-purple-300 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="text-white font-merriweather text-base font-normal hover:text-purple-300 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contacts"
            className="text-white font-merriweather text-base font-normal hover:text-purple-300 transition-colors"
          >
            Contacts
          </Link>
        </div>

        {/* Social Icons - Right */}
        <div className="flex items-center gap-3">
          {/* X/Twitter Icon */}
          <Link
            href="#"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="#FFFFFF"
              />
            </svg>
          </Link>

          {/* Discord Icon */}
          <Link
            href="#"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03"
                fill="#FFFFFF"
              />
            </svg>
          </Link>

          {/* Telegram Icon */}
          <Link
            href="#"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 2L11.25 13.25M22.5 2L15.5 22L11.25 13.25M22.5 2L2 9L11.25 13.25"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
