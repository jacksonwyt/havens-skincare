import Image from 'next/image';
import Link from 'next/link';
import { FiClock, FiDollarSign, FiPlus, FiMinus } from 'react-icons/fi';

export const metadata = {
  title: "Services | Haven's Skincare - Newport Beach Esthetician",
  description: "Explore our range of premium skincare services, including facials, peels, and custom treatments at Haven's Skincare in Newport Beach, California.",
}

// Define service categories and details
const services = [
  {
    id: 'facials',
    name: 'Facial Treatments',
    description: 'Our signature facial treatments are designed to address your specific skin concerns while providing deep relaxation.',
    items: [
      {
        id: 'hydrating-facial',
        name: 'Hydrating Facial',
        description: 'Restore moisture and radiance with our signature hydrating facial, perfect for dry or dehydrated skin. This treatment includes gentle cleansing, exfoliation, a hydrating mask, and a relaxing facial massage.',
        price: '$120',
        duration: '60 min',
        image: '/images/service-facial.jpg',
      },
      {
        id: 'deep-cleansing-facial',
        name: 'Deep Cleansing Facial',
        description: 'A thorough treatment designed to purify congested skin and target breakouts. Includes deep cleansing, extractions, a purifying mask, and balancing hydration.',
        price: '$135',
        duration: '75 min',
        image: '/images/service-cleansing.jpg',
      },
      {
        id: 'anti-aging-facial',
        name: 'Anti-Aging Facial',
        description: 'Combat signs of aging with this rejuvenating treatment that firms, tightens, and brightens the skin. Features premium peptide-rich products and specialized massage techniques.',
        price: '$150',
        duration: '75 min',
        image: '/images/service-anti-aging.jpg',
      },
      {
        id: 'coastal-glow-facial',
        name: 'Coastal Glow Facial',
        description: 'Our signature facial inspired by the California coast. This treatment uses marine-derived ingredients to restore your skin\'s natural radiance and vitality.',
        price: '$165',
        duration: '90 min',
        image: '/images/service-coastal.jpg',
      }
    ]
  },
  {
    id: 'treatments',
    name: 'Advanced Treatments',
    description: 'Target specific skin concerns with our results-driven advanced treatments.',
    items: [
      {
        id: 'chemical-peel',
        name: 'Chemical Peel',
        description: 'Reveal fresher, younger-looking skin with our customized chemical peel treatments for all skin types. Reduces fine lines, sun damage, and improves skin texture.',
        price: '$150',
        duration: '45 min',
        image: '/images/service-peel.jpg',
      },
      {
        id: 'microdermabrasion',
        name: 'Microdermabrasion',
        description: 'Gently exfoliate and rejuvenate your skin with our advanced microdermabrasion treatment, reducing fine lines and improving texture.',
        price: '$135',
        duration: '50 min',
        image: '/images/service-microdermabrasion.jpg',
      },
      {
        id: 'led-therapy',
        name: 'LED Light Therapy',
        description: 'Stimulate collagen production and target specific skin concerns with our advanced LED light therapy. Can be added to any facial treatment or booked as a standalone service.',
        price: '$75',
        duration: '30 min',
        image: '/images/service-led.jpg',
      }
    ]
  },
  {
    id: 'waxing',
    name: 'Waxing Services',
    description: 'Achieve smooth, hair-free skin with our gentle yet effective waxing services.',
    items: [
      {
        id: 'brow-wax',
        name: 'Eyebrow Shaping',
        description: 'Professional eyebrow shaping to enhance your natural features and frame your face beautifully.',
        price: '$35',
        duration: '15 min',
        image: '/images/service-brow.jpg',
      },
      {
        id: 'lip-wax',
        name: 'Lip Wax',
        description: 'Quick and effective hair removal for the upper lip area.',
        price: '$20',
        duration: '10 min',
        image: '/images/service-lip.jpg',
      },
      {
        id: 'full-face-wax',
        name: 'Full Face Wax',
        description: 'Complete facial waxing including eyebrows, upper lip, chin, and sides of face.',
        price: '$75',
        duration: '30 min',
        image: '/images/service-face-wax.jpg',
      }
    ]
  },
  {
    id: 'packages',
    name: 'Treatment Packages',
    description: 'Save with our specially designed packages that combine our most popular services.',
    items: [
      {
        id: 'coastal-retreat',
        name: 'Coastal Retreat Package',
        description: 'The ultimate skin rejuvenation experience: Coastal Glow Facial, LED Light Therapy, and a hydrating hand treatment.',
        price: '$225',
        duration: '120 min',
        image: '/images/package-retreat.jpg',
      },
      {
        id: 'bridal-glow',
        name: 'Bridal Glow Package',
        description: 'Prepare for your special day with a series of 3 customized facials, designed to be scheduled in the months leading up to your wedding.',
        price: '$325',
        duration: '3 sessions',
        image: '/images/package-bridal.jpg',
      },
      {
        id: 'monthly-membership',
        name: 'Monthly Membership',
        description: 'Join our membership program and receive one signature facial per month, plus 15% off all products and additional services.',
        price: '$95/month',
        duration: 'Ongoing',
        image: '/images/package-membership.jpg',
      }
    ]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-blue bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium treatments designed to rejuvenate your skin and enhance your natural beauty, all inspired by the healing elements of the California coast.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {services.map((category) => (
        <section 
          key={category.id} 
          id={category.id}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.name}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="space-y-12">
              {category.items.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col md:flex-row gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="md:w-1/2">
                    <div className="relative h-72 md:h-80 w-full rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-6 mb-6">
                      <div className="flex items-center text-seafoam">
                        <FiDollarSign className="mr-2" />
                        <span>{service.price}</span>
                      </div>
                      <div className="flex items-center text-seafoam">
                        <FiClock className="mr-2" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <Link href="/booking" className="btn-primary self-start">
                      Book this Service
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-16 bg-sand bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and what to expect during your visit.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>How should I prepare for my facial treatment?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>For the best results, we recommend the following:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Avoid sun exposure and tanning for 24-48 hours before your appointment</li>
                    <li>Skip retinol products for 3-5 days prior to your facial</li>
                    <li>Arrive with a clean face if possible (no makeup)</li>
                    <li>Men should shave at least 2 hours before their facial</li>
                    <li>Stay hydrated before your appointment</li>
                  </ul>
                </div>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>How often should I get a facial?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>For optimal results, we typically recommend a facial every 4-6 weeks, as this aligns with your skin's natural cell turnover cycle. However, this can vary based on:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Your specific skin concerns</li>
                    <li>The type of facial treatments you're receiving</li>
                    <li>Your age and skin condition</li>
                    <li>Seasonal changes that affect your skin</li>
                  </ul>
                  <p className="mt-2">During your initial consultation, we'll recommend a personalized treatment schedule to help you achieve your skincare goals.</p>
                </div>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>What if I need to cancel or reschedule my appointment?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>We understand that plans change. Our cancellation policy is as follows:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Please provide at least 24 hours' notice for cancellations or reschedules</li>
                    <li>Late cancellations (less than 24 hours) may incur a 50% service fee</li>
                    <li>No-shows will be charged the full service amount</li>
                  </ul>
                  <p className="mt-2">If you're running late, please call us as soon as possible so we can adjust our schedule accordingly.</p>
                </div>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>Do you offer gift certificates?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>Yes! Gift certificates are available for all of our services and make the perfect present for any occasion. They can be purchased:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>In-studio during our business hours</li>
                    <li>By phone at (949) 555-1234</li>
                    <li>Online through our booking page</li>
                  </ul>
                  <p className="mt-2">Gift certificates are valid for one year from the purchase date.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-seafoam bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience the Haven Difference?</h2>
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