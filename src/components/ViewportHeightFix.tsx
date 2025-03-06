'use client';

import { useEffect } from 'react';

/**
 * Fixes the 100vh issue on mobile browsers by setting
 * a CSS variable --vh based on the actual viewport height
 * and handles orientation changes
 */
const ViewportHeightFix = () => {
  useEffect(() => {
    // Set the value of --vh to be 1% of the viewport height
    const setVh = () => {
      // Small delay to ensure the browser has finished any UI adjustments
      setTimeout(() => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }, 100);
    };

    // Set the value when the component mounts
    setVh();

    // Update the value when the window is resized or orientation changes
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);
    
    // Also update on scroll for iOS Safari which may hide/show the address bar
    window.addEventListener('scroll', setVh);

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
      window.removeEventListener('scroll', setVh);
    };
  }, []);

  return null;
};

export default ViewportHeightFix;