import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto w-full max-w-7xl h-20 flex justify-between items-center">
        {/* Logo Section - Left */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/images/logo.svg"
              alt="Logo"
              width={24}
              height={24}
              className="text-white"
            />
            <span className="text-white font-cinzel-decorative text-xl font-normal tracking-wider">
              Neverland
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
            <Image
              src="/assets/images/x.svg"
              alt="X"
              width={20}
              height={20}
            />
          </Link>

          {/* Discord Icon */}
          <Link
            href="#"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <Image
              src="/assets/images/discord.svg"
              alt="Discord"
              width={20}
              height={20}
            />
          </Link>

          {/* Telegram Icon */}
          <Link
            href="#"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <Image
              src="/assets/images/telegram.svg"
              alt="Telegram"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
