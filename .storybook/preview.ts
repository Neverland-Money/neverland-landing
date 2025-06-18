import type { Preview } from '@storybook/nextjs-vite';
import '../src/app/globals.css';

// Add font preloading for Storybook
const fontPreload = document.createElement('div');
fontPreload.style.fontFamily = 'Cinzel, Merriweather, serif';
fontPreload.style.position = 'absolute';
fontPreload.style.visibility = 'hidden';
fontPreload.textContent = 'Font preload';
document.body.appendChild(fontPreload);

// Create a more robust animation fix for Storybook
const injectAnimationFix = () => {
  // Add global styles to override animations
  const styleEl = document.createElement('style');
  styleEl.setAttribute('id', 'storybook-animation-fix');
  styleEl.textContent = `
    /* Override for BlurredLoadingText in Storybook environment */
    .sb-show-main [style*="filter: blur"],
    .sb-show-main .blur-animation,
    .sb-show-main span[class*="BlurredLoadingText"] {
      filter: blur(0px) !important;
      opacity: 1 !important;
      animation: none !important;
      transition: none !important;
    }
    
    /* Stop all infinite animations in Storybook */
    @keyframes fadeIn { to { opacity: 1; } }
    .sb-show-main *[style*="animation"] {
      animation-iteration-count: 1 !important;
      animation-duration: 0.1s !important;
      animation-name: fadeIn !important;
    }
  `;
  document.head.appendChild(styleEl);
};

// Add a script that will run both during initial load and when navigating between stories
if (typeof window !== 'undefined') {
  // Run immediately
  injectAnimationFix();
  
  // Create an observer to detect when the Storybook UI changes
  const observer = new MutationObserver(() => {
    // Dispatch stardust event periodically
    document.dispatchEvent(new CustomEvent('triggerStardust'));
    
    // Find and force stop any animations
    document.querySelectorAll('[style*="animation"], [style*="filter: blur"]').forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.animation = 'none';
        element.style.filter = 'blur(0px)';
        element.style.opacity = '1';
      }
    });
  });
  
  // Start observing once the document is loaded
  window.addEventListener('load', () => {
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Also inject the fix every time story changes
    // Use type assertion to avoid TypeScript errors with Storybook's global variables
    const win = window as any;
    if (win.__STORYBOOK_ADDONS_CHANNEL__) {
      win.__STORYBOOK_ADDONS_CHANNEL__.on('storyRendered', () => {
        setTimeout(injectAnimationFix, 100);
      });
    }
  });
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        // Standard device sizes
        iphone5: {
          name: 'iPhone 5',
          styles: { width: '320px', height: '568px' }
        },
        iphone6: {
          name: 'iPhone 6/7/8',
          styles: { width: '375px', height: '667px' }
        },
        iphonex: {
          name: 'iPhone X',
          styles: { width: '375px', height: '812px' }
        },
        iphone12: {
          name: 'iPhone 12 Pro',
          styles: { width: '390px', height: '844px' }
        },
        ipad: {
          name: 'iPad',
          styles: { width: '768px', height: '1024px' }
        },
        ipadPro: {
          name: 'iPad Pro',
          styles: { width: '1024px', height: '1366px' }
        },
        // Custom sizes
        mobile: {
          name: 'Mobile (375px)',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet (768px)',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop (1440px)',
          styles: {
            width: '1440px',
            height: '900px',
          },
        },
      },
      defaultViewport: 'desktop',
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f0719',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;
