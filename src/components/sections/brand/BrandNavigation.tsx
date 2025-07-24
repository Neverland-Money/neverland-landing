'use client';

import { useEffect, useState } from 'react';

import { useScrollContext } from '@/components/SmoothScroll';

interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'logo-assets', label: 'Logo Assets' },
  { id: 'color-palette', label: 'Color Palette' },
  { id: 'typography', label: 'Typography' },
  { id: 'donts', label: "Brand Don'ts" },
  { id: 'downloads', label: 'Asset Downloads' },
];

export function BrandNavigation() {
  const [activeSection, setActiveSection] = useState('logo-assets');
  const { lenis } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) =>
        document.getElementById(item.id),
      );
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element && lenis) {
      lenis.scrollTo(element, {
        duration: 1.2,
        offset: -80, // Account for header height
      });
    } else if (element) {
      // Fallback for when lenis is not available
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className='w-full'>
      {/* Mobile: Horizontal scrollable layout */}
      <div className='lg:hidden'>
        <div className='scrollbar-hide flex gap-2 overflow-x-auto pb-2'>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: Vertical layout */}
      <ul className='hidden space-y-4 lg:block'>
        {navigationItems.map((item, index) => (
          <li key={item.id}>
            <div
              onClick={() => scrollToSection(item.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollToSection(item.id);
                }
              }}
              tabIndex={0}
              role='button'
              aria-label={`Navigate to ${item.label} section`}
              className={`block w-full cursor-pointer px-4 py-3 text-left text-base font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-white'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {item.label}
            </div>
            {index < navigationItems.length - 1 && (
              <div className='mt-4 h-px w-full bg-gradient-to-r from-purple-400 to-pink-400' />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
