'use client';

import { useEffect } from 'react';

/**
 * Fixes the 100vh issue on mobile browsers by setting
 * a CSS variable --vh based on the actual viewport height
 */
const ViewportHeightFix = () => {
  useEffect(() => {
    // Set the value of --vh to be 1% of the viewport height
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set the value when the component mounts
    setVh();

    // Update the value when the window is resized
    window.addEventListener('resize', setVh);
    window.addEventListener('orientationchange', setVh);

    // Clean up event listeners
    return () => {
      window.removeEventListener('resize', setVh);
      window.removeEventListener('orientationchange', setVh);
    };
  }, []);

  return null;
};

export default ViewportHeightFix;