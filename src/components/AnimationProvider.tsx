'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimationProviderProps {
  children: React.ReactNode;
}

/**
 * AnimationProvider initializes the AOS (Animate On Scroll) library
 * and provides animation capabilities throughout the application.
 */
export default function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      // Global settings
      duration: 800, // Animation duration in ms
      easing: 'ease-out-cubic', // Default easing for animations
      once: false, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
      offset: 120, // Offset (in px) from the original trigger point
      delay: 0, // Default delay before animation starts
      anchorPlacement: 'top-bottom', // Define which position of the element regarding the viewport triggers the animation
    });
  }, []);

  return <>{children}</>;
} 