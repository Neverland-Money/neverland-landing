'use client';

import 'overlayscrollbars/overlayscrollbars.css';
import { Options } from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useEffect } from 'react';

// Define the props for our CustomScrollbar component
interface CustomScrollbarProps {
  children: React.ReactNode;
}

// Define the scrollbar options with purple theme that matches the site
const scrollbarOptions: Options = {
  scrollbars: {
    theme: 'os-theme-custom-purple',
    visibility: 'auto',
    autoHide: 'move',
    autoHideDelay: 1000,
    autoHideSuspend: false,
    dragScroll: true,
    clickScroll: true,
    pointers: ['mouse', 'touch', 'pen'],
  },
  paddingAbsolute: false,
  showNativeOverlaidScrollbars: false,
  update: {
    elementEvents: [
      ['html', 'scroll'],
      ['html', 'wheel'],
    ],
    debounce: [0, 33],
    attributes: null,
    ignoreMutation: null,
  },
  overflow: {
    x: 'scroll',
    y: 'scroll',
  },
};

export function CustomScrollbar({ children }: CustomScrollbarProps) {
  // Add custom scrollbar theme to document head
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      /* Custom Purple Theme for OverlayScrollbars */
      .os-theme-custom-purple .os-scrollbar-handle {
        background: linear-gradient(180deg, #d132e0 0%, #530ee3 100%);
        border-radius: 10px;
        opacity: 0.6;
      }
      
      .os-theme-custom-purple .os-scrollbar-handle:hover {
        opacity: 0.8;
        background: linear-gradient(180deg, #e142f0 0%, #6318f3 100%);
      }
      
      .os-theme-custom-purple .os-scrollbar-track {
        background: rgba(22, 0, 43, 0.2);
      }
      
      .os-theme-custom-purple .os-scrollbar {
        padding: 4px;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <OverlayScrollbarsComponent
      element='div'
      options={scrollbarOptions}
      defer
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        overflow: 'auto',
      }}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
