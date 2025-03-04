import Image from 'next/image';
import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: "Book an Appointment | Haven's Skincare - Newport Beach Esthetician",
  description: "Schedule your skin treatment at Haven's Skincare in Newport Beach, California. Appointments available for facials, peels, and other premium services.",
}

export default function Booking() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl font-bold text-gray-100 mb-6">Book an Appointment</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Schedule your treatment and take the first step towards rejuvenated, radiant skin.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-3" data-aos="fade-right" data-aos-duration="800">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Schedule Your Visit</h2>
              <BookingForm />
            </div>
            
            {/* Info Sidebar */}
            <div className="lg:col-span-2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <div className="bg-sand bg-opacity-20 rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Appointment Information</h3>
                
                <div className="space-y-6 mb-8">
                  <div data-aos="fade-up" data-aos-delay="300">
                    <h4 className="font-semibold text-gray-800 mb-2">Preparing for Your Visit</h4>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Arrive 10 minutes before your appointment</li>
                      <li>• Come with clean skin (no makeup if possible)</li>
                      <li>• Avoid sun exposure 24-48 hours before treatment</li>
                      <li>• Avoid using retinol products 3-5 days prior</li>
                    </ul>
                  </div>
                  
                  <div data-aos="fade-up" data-aos-delay="400">
                    <h4 className="font-semibold text-gray-800 mb-2">Cancellation Policy</h4>
                    <p className="text-gray-600">
                      We require 24 hours&apos; notice for cancellations or reschedules. Late cancellations may incur a fee of 50% of the service price.
                    </p>
                  </div>
                  
                  <div data-aos="fade-up" data-aos-delay="500">
                    <h4 className="font-semibold text-gray-800 mb-2">Questions?</h4>
                    <p className="text-gray-600 mb-2">
                      Call us at <a href="tel:9495551234" className="text-seafoam-text-dark hover:underline">(949) 555-1234</a>
                    </p>
                    <p className="text-gray-600">
                      Or email <a href="mailto:appointments@havensskincare.com" className="text-seafoam-text-dark hover:underline">appointments@havensskincare.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center">
                      <div className="mr-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src="/images/owner-avatar1.png"
                            alt="Owner Avatar"
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          &quot;We look forward to helping you achieve your skincare goals and providing a relaxing, rejuvenating experience.&quot;
                        </p>
                        <p className="text-seafoam-text-dark text-sm mt-1">- Heather Havens, Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Benefits Section */}
      <section className="py-16 bg-seafoam bg-opacity-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-100 mb-12 text-center">Why Book With Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-seafoam rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Experience</h3>
              <p className="text-gray-600">
                Every treatment is customized to your unique skin needs and concerns, ensuring optimal results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-seafoam rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Convenient Scheduling</h3>
              <p className="text-gray-600">
                Our online booking system allows you to choose the perfect time that fits your busy schedule.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-seafoam rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Relaxing Environment</h3>
              <p className="text-gray-600">
                Our coastal-inspired studio provides a peaceful sanctuary where you can escape and rejuvenate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
    </div>
  );
} 