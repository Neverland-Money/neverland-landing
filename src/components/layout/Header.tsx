'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="absolute top-0 right-0 left-0 z-50 bg-transparent">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 xl:px-0">
        {/* Logo Section - Left */}
        <div className="z-999 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/images/header/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              className="h-[auto] w-[40px] text-white"
              priority
            />
            <span className="font-cinzel-decorative text-xl font-normal tracking-wider text-white">
              Neverland
            </span>
          </div>
        </div>

        {/* Center Nav Menu - Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className="font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300"
          >
            About
          </Link>
          <Link
            href="#services"
            className="font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300"
          >
            Services
          </Link>
          <Link
            href="#projects"
            className="font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300"
          >
            Projects
          </Link>
          <Link
            href="#contacts"
            className="font-merriweather text-base font-normal text-white transition-colors hover:text-purple-300"
          >
            Contacts
          </Link>
        </div>

        {/* Social Icons - Right (Desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          {/* X/Twitter Icon */}
          <Link
            href="https://x.com/neverland_money"
            target="_blank noreferrer noopener"
            className="flex items-center rounded-full border border-white/20 p-2 transition-colors hover:border-purple-400"
          >
            <Image
              loading="eager"
              src="/assets/images/header/x.svg"
              alt="X"
              width={0}
              height={0}
              className="h-[auto] w-[20px] text-white"
            />
          </Link>

          {/* Discord Icon */}
          <Link
            href="https://discord.com/invite/neverland-money"
            target="_blank noreferrer noopener"
            className="flex items-center rounded-full border border-white/20 p-2 transition-colors hover:border-purple-400"
          >
            <Image
              loading="eager"
              src="/assets/images/header/discord.svg"
              alt="Discord"
              width={0}
              height={0}
              className="h-[auto] w-[20px] text-white"
            />
          </Link>

          {/* Telegram Icon */}
          <Link
            href="https://t.me/neverland_money"
            target="_blank noreferrer noopener"
            className="flex items-center rounded-full border border-white/20 p-2 transition-colors hover:border-purple-400"
          >
            <Image
              loading="eager"
              src="/assets/images/header/telegram.svg"
              alt="Telegram"
              width={0}
              height={0}
              className="h-[auto] w-[20px] text-white"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center md:hidden"
          onClick={toggleMobileMenu}
        >
          <Image
            loading="eager"
            src="/assets/images/header/mobile-menu.svg"
            alt="Open Menu"
            width={24}
            height={24}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[rgba(5,2,18,0.40)] backdrop-blur-[17px] backdrop-filter md:hidden">
          <div className="flex h-full w-full flex-col items-start justify-start px-4">
            {/* Top row with Logo and Close button */}
            <div className="mb-16 flex h-[80px] w-full items-center justify-between">
              {/* Close button */}
              <button
                className="absolute top-8 right-5"
                onClick={toggleMobileMenu}
              >
                <Image
                  loading="eager"
                  src="/assets/images/header/close.svg"
                  alt="Close Menu"
                  width={0}
                  height={0}
                  className="h-[auto] w-[16px]"
                />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            <div className="mt-12 flex flex-col gap-5">
              <Link
                href="#about"
                className="font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400"
                onClick={toggleMobileMenu}
              >
                ABOUT
              </Link>
              <Link
                href="#services"
                className="font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400"
                onClick={toggleMobileMenu}
              >
                SERVICES
              </Link>
              <Link
                href="#projects"
                className="font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400"
                onClick={toggleMobileMenu}
              >
                PROJECTS
              </Link>
              <Link
                href="#contacts"
                className="font-cinzel self-stretch text-left text-[56px] leading-[100%] font-normal text-white uppercase hover:text-purple-400"
                onClick={toggleMobileMenu}
              >
                CONTACTS
              </Link>
            </div>

            {/* Mobile Social Links - positioned at the bottom and centered */}
            <div className="absolute right-0 bottom-12 left-0 flex justify-center gap-7">
              <Link
                href="https://x.com/neverland_money"
                target="_blank noreferrer noopener"
                className="flex aspect-square h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-full border-[1.818px] border-[#942FFF]"
              >
                <Image
                  loading="eager"
                  src="/assets/images/header/x.svg"
                  alt="X"
                  width={0}
                  height={0}
                  className="h-[auto] w-[24px] text-white"
                />
              </Link>
              <Link
                href="https://discord.com/invite/neverland-money"
                target="_blank noreferrer noopener"
                className="flex aspect-square h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-full border-[1.818px] border-[#942FFF]"
              >
                <Image
                  loading="eager"
                  src="/assets/images/header/discord.svg"
                  alt="Discord"
                  width={0}
                  height={0}
                  className="h-[auto] w-[24px] text-white"
                />
              </Link>
              <Link
                href="https://t.me/neverland_money"
                target="_blank noreferrer noopener"
                className="flex aspect-square h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-full border-[1.818px] border-[#942FFF]"
              >
                <Image
                  loading="eager"
                  src="/assets/images/header/telegram.svg"
                  alt="Telegram"
                  width={0}
                  height={0}
                  className="h-[auto] w-[24px] text-white"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
