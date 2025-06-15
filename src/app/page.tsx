import Header from '@/components/layout/Header';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import InfoGridSection from '@/components/sections/InfoGridSection';
import LunarCircleSection from '@/components/sections/LunarCircleSection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfoGridSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LunarCircleSection />
    </main>
  );
}
