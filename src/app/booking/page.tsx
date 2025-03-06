'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BookingRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the Setmore booking page
    window.location.href = 'https://heatherhavens.setmore.com';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to booking system...</h1>
        <p className="mb-6">You are being redirected to our booking system. If you are not redirected automatically, please click the button below.</p>
        <a 
          href="https://heatherhavens.setmore.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary py-2 px-6"
        >
          Go to Booking Page
        </a>
      </div>
    </div>
  );
} 