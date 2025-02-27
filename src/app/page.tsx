import Image from "next/image";
import Link from "next/link";
import { FiCheck } from "react-icons/fi";

// Components
import TestimonialSlider from "@/components/TestimonialSlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-beach.jpg"
            alt="Newport Beach coastline"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Haven&#39;s Skincare
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto">
            Where coastal beauty meets skin care excellence
          </p>
          <Link href="/booking" className="btn-primary text-lg px-8 py-3">
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
                <Image
                  src="/images/esthetician.jpg"
                  alt="Professional esthetician"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Experience the Haven Difference
              </h2>
              <p className="text-gray-600 mb-6">
                At Haven&#39;s Skincare, we bring the tranquility of the California coast into every treatment. 
                Our Newport Beach studio offers personalized skin care services in a calming, luxurious environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span>Custom treatments tailored to your skin type</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span>Premium, marine-based skincare products</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span>Relaxing environment inspired by coastal serenity</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span>Over 10 years of skincare expertise</span>
                </li>
              </ul>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-soft-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium treatments designed to rejuvenate your skin and enhance your natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/service-facial.jpg"
                  alt="Hydrating Facial"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Hydrating Facial</h3>
                <p className="text-gray-600 mb-4">
                  Restore moisture and radiance with our signature hydrating facial, using premium marine-derived ingredients.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-seafoam font-semibold">$120 | 60 min</span>
                  <Link href="/services#hydrating-facial" className="text-seafoam hover:text-opacity-80 font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/service-peel.jpg"
                  alt="Chemical Peel"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Chemical Peel</h3>
                <p className="text-gray-600 mb-4">
                  Reveal fresher, younger-looking skin with our customized chemical peel treatments for all skin types.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-seafoam font-semibold">$150 | 45 min</span>
                  <Link href="/services#chemical-peel" className="text-seafoam hover:text-opacity-80 font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="/images/service-microdermabrasion.jpg"
                  alt="Microdermabrasion"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Microdermabrasion</h3>
                <p className="text-gray-600 mb-4">
                  Gently exfoliate and rejuvenate your skin with our advanced microdermabrasion treatment.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-seafoam font-semibold">$135 | 50 min</span>
                  <Link href="/services#microdermabrasion" className="text-seafoam hover:text-opacity-80 font-medium">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white coastal-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients about their experiences at Haven&#39;s Skincare.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam bg-opacity-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience the Coastal Difference?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Book your appointment today and begin your journey to radiant, healthy skin with Haven&#39;s Skincare.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/booking" className="btn-primary">
              Book an Appointment
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
