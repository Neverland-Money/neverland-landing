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
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import { SectionTracker } from '@/utils/sectionTracker';

export default function Home() {
  return (
    <main>
      <Header />
      <SectionTracker sectionId='hero' sectionName='Hero Section'>
        <HeroSection />
      </SectionTracker>
      <SectionTracker sectionId='info' sectionName='Info Grid Section'>
        <InfoGridSection />
      </SectionTracker>
      <SectionTracker sectionId='features' sectionName='Features Section'>
        <FeaturesSection />
      </SectionTracker>
      <SectionTracker
        sectionId='how-it-works'
        sectionName='How It Works Section'
      >
        <HowItWorksSection />
      </SectionTracker>
      <SectionTracker
        sectionId='lunar-circle'
        sectionName='Lunar Circle Section'
      >
        <LunarCircleSection />
      </SectionTracker>
      <SectionTracker sectionId='security' sectionName='Security Section'>
        <SecuritySection />
      </SectionTracker>
      <SectionTracker sectionId='faq' sectionName='FAQ Section'>
        <FAQSection />
      </SectionTracker>
      <SectionTracker sectionId='partners' sectionName='Partners Section'>
        <PartnersSection />
      </SectionTracker>
      <SectionTracker sectionId='contacts' sectionName='Contact Section'>
        <ContactSection />
      </SectionTracker>
      <ChatButton />
      <ScrollToTopButton />
    </main>
  );
}
