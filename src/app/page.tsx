import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import InfoGridSection from '@/components/sections/InfoGridSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfoGridSection />
      <FeaturesSection />
      <HowItWorksSection />
      {/* Other sections like Features, Testimonials, etc. can be added here */}
    </main>
  );
}
