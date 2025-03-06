'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiLayers, FiInfo, FiCalendar } from 'react-icons/fi';

const PremiumNavigation = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  
  const menuItems = [
    { id: 'services', label: 'Services', icon: <FiLayers size={18} strokeWidth={1.5} />, href: '/services' },
    { id: 'about', label: 'About', icon: <FiInfo size={18} strokeWidth={1.5} />, href: '/about' },
    { id: 'appointment', label: 'Book an Appointment', icon: <FiCalendar size={18} strokeWidth={1.5} />, href: 'https://heatherhavens.setmore.com', external: true }
  ];

  return (
    <div className="flex items-center">
      <nav className="flex flex-col space-y-3 w-full">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative group w-full"
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
            onClick={() => setActiveItem(item.id)}
            onTouchStart={() => setActiveItem(item.id)}
          >
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-md cursor-pointer
                  transition-all duration-500 ease-out w-full 
                  hover:bg-white/10 active:bg-white/20
                `}
              >
                <div className={`
                  flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9
                  transition-all duration-500
                  ${activeItem === item.id 
                    ? item.id === 'appointment' 
                      ? 'text-seafoam' 
                      : item.id === 'services' 
                        ? 'text-haven-blue' 
                        : 'text-gray-800' 
                    : 'text-gray-600'}
                `}>
                  {item.icon}
                </div>
                <div className="ml-2 sm:ml-3 transition-all duration-500 overflow-hidden flex-grow">
                  <span className={`
                    text-xs sm:text-sm font-medium tracking-wide transition-all duration-500
                    ${activeItem === item.id ? 'text-gray-800' : 'text-gray-600'}
                  `}>
                    {item.label}
                  </span>
                  {/* Animated underline */}
                  <div className={`
                    h-0.5 transition-all duration-500 ease-out mt-0.5 sm:mt-1
                    ${activeItem === item.id 
                      ? item.id === 'appointment' 
                        ? 'bg-gradient-to-r from-seafoam to-seafoam/30 w-full opacity-100' 
                        : item.id === 'services' 
                          ? 'bg-gradient-to-r from-haven-blue to-haven-blue/30 w-full opacity-100' 
                          : 'bg-gradient-to-r from-gray-300 to-gray-500 w-full opacity-100'
                      : 'w-0 opacity-0'}
                  `} />
                </div>
              </a>
            ) : (
              <Link
                href={item.href}
                className={`
                  flex items-center py-2 sm:py-3 px-3 sm:px-4 rounded-md cursor-pointer
                  transition-all duration-500 ease-out w-full
                  hover:bg-white/10 active:bg-white/20
                `}
              >
                <div className={`
                  flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9
                  transition-all duration-500
                  ${activeItem === item.id 
                    ? item.id === 'appointment' 
                      ? 'text-seafoam' 
                      : item.id === 'services' 
                        ? 'text-haven-blue' 
                        : 'text-gray-800' 
                    : 'text-gray-600'}
                `}>
                  {item.icon}
                </div>
                <div className="ml-2 sm:ml-3 transition-all duration-500 overflow-hidden flex-grow">
                  <span className={`
                    text-xs sm:text-sm font-medium tracking-wide transition-all duration-500
                    ${activeItem === item.id ? 'text-gray-800' : 'text-gray-600'}
                  `}>
                    {item.label}
                  </span>
                  {/* Animated underline */}
                  <div className={`
                    h-0.5 transition-all duration-500 ease-out mt-0.5 sm:mt-1
                    ${activeItem === item.id 
                      ? item.id === 'appointment' 
                        ? 'bg-gradient-to-r from-seafoam to-seafoam/30 w-full opacity-100' 
                        : item.id === 'services' 
                          ? 'bg-gradient-to-r from-haven-blue to-haven-blue/30 w-full opacity-100' 
                          : 'bg-gradient-to-r from-gray-300 to-gray-500 w-full opacity-100'
                      : 'w-0 opacity-0'}
                  `} />
                </div>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default PremiumNavigation; 