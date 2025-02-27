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
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 hero-text-shadow">
            Welcome to Haven&#39;s Skincare
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto hero-text-shadow">
            Where coastal beauty meets skin care excellence
          </p>
          <Link href="/booking" className="btn-primary text-lg px-8 py-3" data-aos="zoom-in" data-aos-delay="300">
            Book an Appointment
          </Link>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12" data-aos="fade-right" data-aos-duration="800">
              <div className="relative rounded-lg overflow-hidden shadow-xl h-96">
                <Image
                  src="/images/esthetician.jpg"
                  alt="Professional esthetician"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Experience the Haven Difference
              </h2>
              <p className="text-gray-600 mb-6">
                At Haven&#39;s Skincare, we bring the tranquility of the California coast into every treatment. 
                Our Newport Beach studio offers personalized skin care services in a calming, luxurious environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="100">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Custom treatments tailored to your skin type</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="200">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Premium, marine-based skincare products</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="300">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Relaxing environment inspired by coastal serenity</span>
                </li>
                <li className="flex items-start" data-aos="fade-up" data-aos-duration="400" data-aos-delay="400">
                  <FiCheck className="text-seafoam mt-1 mr-2 flex-shrink-0" />
                  <span className="text-on-light">Over 10 years of skincare expertise</span>
                </li>
              </ul>
              <Link href="/about" className="btn-secondary" data-aos="fade-up" data-aos-delay="500">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-soft-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium treatments designed to rejuvenate your skin and enhance your natural beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1" 
                data-aos="fade-up" 
                data-aos-duration="600"
                data-aos-delay="100">
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1" 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="200">
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1" 
                data-aos="fade-up" 
                data-aos-duration="600" 
                data-aos-delay="300">
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

          <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
            <Link href="/services" className="btn-primary px-8 py-3">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover why clients consistently choose Haven&#39;s for their skincare needs.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-white mb-4 hero-text-shadow">
                Ready for Your Skincare Journey?
              </h2>
              <p className="text-white text-lg max-w-xl hero-text-shadow">
                Schedule your consultation today and discover the perfect treatment for your unique skin needs.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <Link href="/booking" className="bg-gray-800 text-seafoam-text-dark px-8 py-3 rounded-md hover:bg-gray-500 transition duration-300 inline-block font-medium">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
