"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto w-full max-w-7xl h-20 flex justify-between items-center px-4 xl:px-0">
        {/* Logo Section - Left */}
        <div className="flex items-center z-999 gap-2">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/images/header/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              className="text-white w-[40px] h-[auto]"
              priority
            />
            <span className="text-white font-cinzel-decorative text-xl font-normal tracking-wider">
              Neverland
            </span>
          </div>
        </div>

        {/* Center Nav Menu - Desktop */}
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

        {/* Social Icons - Right (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* X/Twitter Icon */}
          <Link
            href="https://x.com/neverland_money"
            target="_blank noreferrer noopener"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <Image
              loading="eager"
              src="/assets/images/header/x.svg"
              alt="X"
              width={0}
              height={0}
              className="text-white w-[20px] h-[auto]"
            />
          </Link>

          {/* Discord Icon */}
          <Link
            href="https://discord.com/invite/neverland-money"
            target="_blank noreferrer noopener"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <Image
             loading="eager"
              src="/assets/images/header/discord.svg"
              alt="Discord"
              width={0}
              height={0}
              className="text-white w-[20px] h-[auto]"
            />
          </Link>

          {/* Telegram Icon */}
          <Link
            href="https://t.me/neverland_money"
            target="_blank noreferrer noopener"
            className="flex p-2 items-center rounded-full border border-white/20 hover:border-purple-400 transition-colors"
          >
            <Image
              loading="eager"
              src="/assets/images/header/telegram.svg"
              alt="Telegram"
              width={0}
              height={0}
              className="text-white w-[20px] h-[auto]"
            />
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center"
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
        <div className="fixed inset-0 z-50 bg-[rgba(5,2,18,0.40)] backdrop-filter backdrop-blur-[17px] md:hidden overflow-y-auto">
          <div className="flex flex-col items-start justify-start h-full w-full px-4">            
            {/* Top row with Logo and Close button */}
            <div className="flex w-full items-center justify-between h-[80px] mb-16">
              
              {/* Close button */}
              <button 
                className="absolute right-5 top-8"
                onClick={toggleMobileMenu}
              >
                <Image 
                  loading="eager"
                  src="/assets/images/header/close.svg"
                  alt="Close Menu"
                  width={0}
                  height={0}
                  className="w-[16px] h-[auto]"
                />
              </button>
            </div>
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-5 mt-12">
              <Link
                href="#about"
                className="text-white font-cinzel text-[56px] font-normal leading-[100%] hover:text-purple-400 self-stretch text-left uppercase"
                onClick={toggleMobileMenu}
              >
                ABOUT
              </Link>
              <Link
                href="#services"
                className="text-white font-cinzel text-[56px] font-normal leading-[100%] hover:text-purple-400 self-stretch text-left uppercase"
                onClick={toggleMobileMenu}
              >
                SERVICES
              </Link>
              <Link
                href="#projects"
                className="text-white font-cinzel text-[56px] font-normal leading-[100%] hover:text-purple-400 self-stretch text-left uppercase"
                onClick={toggleMobileMenu}
              >
                PROJECTS
              </Link>
              <Link
                href="#contacts"
                className="text-white font-cinzel text-[56px] font-normal leading-[100%] hover:text-purple-400 self-stretch text-left uppercase"
                onClick={toggleMobileMenu}
              >
                CONTACTS
              </Link>
            </div>
            
            {/* Mobile Social Links - positioned at the bottom and centered */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-7">
              <Link
                href="https://x.com/neverland_money"
                target="_blank noreferrer noopener"
                className="flex justify-center items-center w-[80px] h-[80px] rounded-full border-[1.818px] border-[#942FFF] aspect-square flex-shrink-0"
              >
                <Image
                  loading="eager"
                  src="/assets/images/header/x.svg"
                  alt="X"
                  width={0}
                  height={0}
                  className="text-white w-[24px] h-[auto]"
                />
              </Link>
              <Link
                href="https://discord.com/invite/neverland-money"
                target="_blank noreferrer noopener"
                className="flex justify-center items-center w-[80px] h-[80px] rounded-full border-[1.818px] border-[#942FFF] aspect-square flex-shrink-0"
              >
                <Image
                  loading="eager"
                  src="/assets/images/header/discord.svg"
                  alt="Discord"
                  width={0}
                  height={0}
                  className="text-white w-[24px] h-[auto]"
                />
              </Link>
              <Link
                href="https://t.me/neverland_money"
                target="_blank noreferrer noopener"
                className="flex justify-center items-center w-[80px] h-[80px] rounded-full border-[1.818px] border-[#942FFF] aspect-square flex-shrink-0"
              >
                <Image
                  loading="eager"
                  src="/assets/images/header/telegram.svg"
                  alt="Telegram"
                  width={0}
                  height={0}
                  className="text-white w-[24px] h-[auto]"
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
