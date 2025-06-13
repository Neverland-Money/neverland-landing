import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import InfoGridSection from "@/components/sections/InfoGridSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfoGridSection />
      {/* Other sections like Features, Testimonials, etc. can be added here */}
    </main>
  );
}
