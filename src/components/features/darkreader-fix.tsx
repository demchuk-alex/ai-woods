"use client";

import { useEffect } from "react";

export default function DarkReaderFix() {
  useEffect(() => {
    // Try to disable Dark Reader on our page
    try {
      if (typeof window !== 'undefined' && window.document) {
        // Add a meta tag to suggest Dark Reader to ignore our site
        const meta = document.createElement('meta');
        meta.name = 'darkreader-lock';
        document.head.appendChild(meta);
        
        // Attempt to clean up any Dark Reader attributes
        const cleanup = () => {
          const elements = document.querySelectorAll('[data-darkreader-inline-color]');
          elements.forEach(el => {
            el.removeAttribute('data-darkreader-inline-color');
            if (el instanceof HTMLElement && el.style && 
                el.style.cssText.includes('--darkreader-inline-color')) {
              el.style.cssText = el.style.cssText.replace(/--darkreader-inline-color:[^;]+;?/g, '');
            }
          });
        };
        
        // Run cleanup now and after a short delay (to catch late changes)
        cleanup();
        setTimeout(cleanup, 100);
      }
    } catch (e) {
      console.error('Failed to handle dark reader:', e);
    }
  }, []);

  return null;
} 