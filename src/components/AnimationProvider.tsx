'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AnimationProviderProps {
  children: React.ReactNode;
}

/**
 * AnimationProvider initializes the AOS (Animate On Scroll) library
 * and provides animation capabilities throughout the application.
 * It optimizes animations for mobile devices by using appropriate settings.
 */
export default function AnimationProvider({ children }: AnimationProviderProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on a mobile device based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Initialize AOS with settings optimized for the current device
    AOS.init({
      // Global settings
      duration: isMobile ? 400 : 800, // Shorter duration on mobile
      easing: 'ease-out-cubic',
      once: true, // Only animate once to improve performance
      mirror: false,
      offset: isMobile ? 50 : 120, // Smaller offset on mobile
      delay: 0,
      throttleDelay: isMobile ? 99 : 99, // Throttle delay for performance
      anchorPlacement: 'top-bottom',
      disable: 'phone', // Disable on very small devices to prioritize performance
    });

    // Refresh AOS when window is resized
    window.addEventListener('resize', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('resize', () => {
        AOS.refresh();
      });
    };
  }, [isMobile]);

  return <>{children}</>;
} 