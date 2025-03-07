'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const PremiumNavigation = () => {
  return (
    <div className="flex flex-col items-center space-y-6 py-4">
      {/* Short description */}
      <div className="w-full text-center">
        <p className="text-white text-base leading-relaxed mb-6">
          Experience premium skincare treatment at Newport Beach&apos;s premier spa destination.
        </p>
        <div className="flex flex-col items-end space-y-3">
          <p className="text-white/90 text-sm italic">
            Click our logo to book your
            <br />
            transformative experience
          </p>
          <div className="animate-pulse-slow transform translate-x-4">
            <FiArrowRight 
              className="text-white/90 text-2xl transform rotate-[-45deg]" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumNavigation;