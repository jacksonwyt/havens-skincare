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
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Havens Skincare</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing tranquility and skin rejuvenation to Newport Beach.
            </p>
          </div>
        </div>
      </section>

      {/* Owner Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right" data-aos-duration="800">
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/owner.jpg"
                  alt="Heather Havens, Founder and Lead Esthetician"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="lg:w-1/2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                About Me
              </h2>
              <h3 className="text-xl text-seafoam-text-dark mb-6">Founder & Lead Esthetician</h3>
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
              <div className="flex space-x-4" data-aos="fade-up" data-aos-delay="400">
                <span className="inline-flex items-center text-seafoam-text-dark">
                  <FiAward className="mr-2" /> Licensed Esthetician
                </span>
                <span className="inline-flex items-center text-seafoam-text-dark">
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
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-seafoam mx-auto"></div>
          </div>
         
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl text-gray-700 italic mb-8">
              &quot;To enhance your natural beauty with personalized, coastal-inspired treatments that rejuvenate both skin and spirit.&quot;
            </p>
            <p className="text-gray-600 mb-8">
              At Havens Skincare, we&#39;re dedicated to providing exceptional skincare services in a peaceful, luxurious environment. We combine the latest skincare innovations with the natural healing elements of the California coast to deliver treatments that leave you feeling refreshed, renewed, and radiant.
            </p>
            <div className="inline-flex items-center text-seafoam-text-dark" data-aos="zoom-in" data-aos-delay="400">
              <FiHeart className="mr-2" /> Personalized Care For Every Client
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">The Havens Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our philosophy combines scientific expertise with the natural healing elements of the California coast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Approach 1 */}
            <div className="bg-sand bg-opacity-20 rounded-lg p-8 text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam text-white mb-6">
                <FiHeart className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Attention</h3>
              <p className="text-gray-600">
                Every treatment is customized to your unique skin concerns and goals, with dedicated attention from start to finish.
              </p>
            </div>
            
            {/* Approach 2 */}
            <div className="bg-sand bg-opacity-20 rounded-lg p-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam text-white mb-6">
                <FiAward className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Products</h3>
              <p className="text-gray-600">
                We use only the highest quality, professionally-formulated products with proven results.
              </p>
            </div>
            
            {/* Approach 3 */}
            <div className="bg-sand bg-opacity-20 rounded-lg p-8 text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-seafoam text-white mb-6">
                <FiSun className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Coastal Serenity</h3>
              <p className="text-gray-600">
                Our tranquil environment is designed to soothe the senses, inspired by the beauty of the California coast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-white mb-4 hero-text-shadow">
                Ready to Experience the Havens Difference?
              </h2>
              <p className="text-white text-lg max-w-xl hero-text-shadow">
                Book your consultation today and begin your journey to radiant, healthy skin.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <Link href="/booking" className="bg-white text-seafoam-text-dark px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 inline-block font-medium">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}