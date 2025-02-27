import Image from 'next/image';
import Link from 'next/link';
import { FiAward, FiHeart, FiSun } from 'react-icons/fi';

export const metadata = {
  title: "About Us | Haven's Skincare - Newport Beach Esthetician",
  description: "Learn about Haven's Skincare, our professional esthetician services, and our passion for coastal-inspired beauty in Newport Beach, California.",
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Haven&#39;s Skincare</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing coastal tranquility and skin rejuvenation to Newport Beach since 2014.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/owner.jpg"
                  alt="Heather Havens, Founder and Lead Esthetician"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Me
              </h2>
              <h3 className="text-xl text-seafoam mb-6">Founder & Lead Esthetician</h3>
              <p className="text-gray-600 mb-6">
                With over 30 years of expertise in the skincare industry, my journey began at the esteemed Dermal Institute, where I developed a deep understanding of advanced skincare techniques. I then refined my craft at the world-renowned Four Seasons, catering to an elite clientele seeking results-driven treatments in a luxurious setting.
              </p>
              <p className="text-gray-600 mb-6">
                At 25, I launched my own facial studio, offering personalized skincare solutions tailored to the needs of discerning clients. My passion for corrective skincare led me to work alongside a top cosmetic dermatologist, where I specialized in treating acne-prone skin and mastering microdermabrasion techniques to restore balance and radiance.
              </p>
              <p className="text-gray-600 mb-6">
                After taking time to focus on my family and adopting a beautiful son along the way, life took an unexpected turn when I tragically lost my oldest son. In the wake of profound loss, I was guided back to my true passion—helping others achieve healthy, luminous skin. Skincare is more than a profession for me; it is a calling, a way to bring healing and confidence to those I touch.
              </p>
              <p className="text-gray-600 mb-6">
                Now, I bring my decades of expertise, unwavering dedication, and personalized care to an exclusive clientele who seek not just treatments, but transformative skincare experiences. My goal is to create an oasis of renewal, where science meets luxury, and every client leaves feeling restored, radiant, and deeply cared for.
              </p>
              <div className="flex space-x-4">
                <span className="inline-flex items-center text-seafoam">
                  <FiAward className="mr-2" /> Licensed Esthetician
                </span>
                <span className="inline-flex items-center text-seafoam">
                  <FiSun className="mr-2" /> Advanced Training
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-sand bg-opacity-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-seafoam mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 italic mb-8">
              "To enhance your natural beauty with personalized, coastal-inspired treatments that rejuvenate both skin and spirit."
            </p>
            <p className="text-gray-600 mb-8">
              At Haven&#39;s Skincare, we&#39;re dedicated to providing exceptional skincare services in a peaceful, luxurious environment. We combine the latest skincare innovations with the natural healing elements of the California coast to deliver treatments that leave you feeling refreshed, renewed, and radiant.
            </p>
            <div className="inline-flex items-center text-seafoam">
              <FiHeart className="mr-2" /> Personalized Care For Every Client
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Haven Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our philosophy combines scientific expertise with the natural healing elements of the California coast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Approach 1 */}
            <div className="bg-soft-blue bg-opacity-10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-seafoam rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personalized Assessment</h3>
              <p className="text-gray-600">
                Every treatment begins with a thorough skin analysis to create a customized plan tailored to your unique needs and goals.
              </p>
            </div>
            
            {/* Approach 2 */}
            <div className="bg-soft-blue bg-opacity-10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-seafoam rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ocean-Inspired Products</h3>
              <p className="text-gray-600">
                We use premium marine-derived ingredients that harness the healing and rejuvenating properties of the ocean.
              </p>
            </div>
            
            {/* Approach 3 */}
            <div className="bg-soft-blue bg-opacity-10 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-seafoam rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Holistic Wellness</h3>
              <p className="text-gray-600">
                Our treatments nurture both skin and spirit, creating a peaceful experience that leaves you feeling completely renewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience the Haven Difference</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            We invite you to visit our Newport Beach studio and discover the perfect treatment for your skincare needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <Link href="/booking" className="btn-secondary">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}