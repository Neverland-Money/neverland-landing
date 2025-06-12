import type { Metadata } from "next";
import { Merriweather, Cinzel, Cinzel_Decorative, Inter, Geist, Geist_Mono } from "next/font/google";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const cinzel = Cinzel({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cinzel_decorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neverland - Magic and the Luna Voyage",
  description: "Discover the magic of Luna Voyage",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${cinzel.variable} ${cinzel_decorative.variable} ${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header />
        <HeroSection />
      </body>
    </html>
  );
}
