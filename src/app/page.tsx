import { ChatButton } from '@/components/assistant-ui/ChatButton';
import Header from '@/components/layout/Header';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import InfoGridSection from '@/components/sections/InfoGridSection';
import LunarCircleSection from '@/components/sections/LunarCircleSection';
import PartnersSection from '@/components/sections/PartnersSection';
import SecuritySection from '@/components/sections/SecuritySection';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <InfoGridSection />
      <FeaturesSection />
      <HowItWorksSection />
      <LunarCircleSection />
      <SecuritySection />
      <FAQSection />
      <PartnersSection />
      <ContactSection />
      <ChatButton />
    </main>
  );
}
