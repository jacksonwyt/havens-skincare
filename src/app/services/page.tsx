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
      },
      {
        id: 'teen-clarifying-facial',
        name: 'Teen Clarifying Facial',
        description: 'Designed specifically for teen skin, this 30-minute acne-focused facial helps clear breakouts, reduce inflammation, and prevent future congestion. The treatment begins with a deep cleanse and gentle exfoliation, followed by high-frequency therapy to target acne-causing bacteria and promote healing. A detoxifying clay mask is then applied to absorb excess oil and calm the skin, leaving it balanced and refreshed.',
        price: '$75',
        duration: '30 min',
        image: '/images/service-facial.jpg',
      },
      {
        id: 'renew-glow-facial',
        name: 'Renew & Glow Facial',
        description: 'Experience the ultimate skin rejuvenation with our Microdermabrasion & LED Light Therapy Facial. This advanced treatment begins with a deep cleanse and gentle exfoliation, followed by microdermabrasion to resurface and refine your skin\'s texture, reducing the appearance of fine lines, sun damage, and congestion. A customized LED light therapy mask is then applied to target specific skin concerns such as acne, inflammation, or collagen production, leaving your skin radiant and refreshed. This facial is perfect for those looking to achieve a smoother, brighter, and more youthful complexion in just one hour.',
        price: '$225',
        duration: '60 min',
        image: '/images/service-microdermabrasion.jpg',
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
    id: 'enhancements',
    name: 'Enhancements & Add-Ons',
    description: 'Customize your treatment with these targeted additions to address specific concerns and elevate your skincare experience.',
    items: [
      {
        id: 'manual-microdermabrasion',
        name: 'Manual Microdermabrasion with Epicuren\'s Micro-Derm Ultra-Refining Scrub',
        description: 'A gentle yet effective exfoliation treatment to smooth, brighten, and refine skin texture.',
        price: '$30',
        duration: '15 min',
        image: '/images/service-microdermabrasion.jpg',
      },
      {
        id: 'paraffin-hand',
        name: 'Paraffin Hand Treatment',
        description: 'Indulge in deep hydration with a warm paraffin wax treatment, leaving hands soft and nourished.',
        price: '$20',
        duration: '15 min',
        image: '/images/service-anti-aging.jpg',
      },
      {
        id: 'collagen-eye',
        name: 'Collagen Eye Treatment',
        description: 'A hydrating and firming eye mask to reduce puffiness, fine lines, and dark circles.',
        price: '$25',
        duration: '15 min',
        image: '/images/service-facial.jpg',
      },
      {
        id: 'lip-exfoliation',
        name: 'Lip Exfoliation & Hydration',
        description: 'A gentle lip scrub followed by a hydrating balm for soft, smooth lips.',
        price: '$15',
        duration: '10 min',
        image: '/images/service-lip.jpg',
      },
      {
        id: 'high-frequency-scalp',
        name: 'High-Frequency Scalp Treatment',
        description: 'Stimulates circulation and promotes scalp health, perfect for hair growth and relaxation.',
        price: '$25',
        duration: '15 min',
        image: '/images/service-facial.jpg',
      },
      {
        id: 'jade-roller',
        name: 'Jade Roller or Gua Sha Massage',
        description: 'Boosts circulation and lymphatic drainage for a natural lift and glow.',
        price: '$20',
        duration: '15 min',
        image: '/images/service-facial.jpg',
      },
      {
        id: 'cold-globes',
        name: 'Cold Globes Facial Massage',
        description: 'A cooling massage to reduce inflammation, tighten pores, and enhance circulation for a refreshed, de-puffed complexion.',
        price: '$25',
        duration: '15 min',
        image: '/images/service-facial.jpg',
      },
      {
        id: 'silver-ion-mask',
        name: 'Silver Ion Mask',
        description: 'An advanced mask infused with silver ions to help soothe, purify, and boost skin\'s natural healing process, ideal for acne-prone or sensitive skin.',
        price: '$30',
        duration: '15 min',
        image: '/images/service-facial.jpg',
      },
      {
        id: 'glycolic-peel',
        name: 'Glycolic or Lactic Peel',
        description: 'A customized professional peel to gently exfoliate, brighten, and refine skin texture, revealing a fresh, youthful glow.',
        price: '$35',
        duration: '15 min',
        image: '/images/service-peel.jpg',
      },
      {
        id: 'led-add-on',
        name: 'LED Light Therapy (Extra 10 min)',
        description: 'Customize your facial with red, blue, or green LED light therapy to target concerns like aging, acne, or pigmentation.',
        price: '$30',
        duration: '10 min',
        image: '/images/service-led.jpg',
      }
    ]
  },
  {
    id: 'waxing',
    name: 'Luxury Waxing Services',
    description: 'Our expert waxing services provide long-lasting smoothness with minimal discomfort. Using only the finest wax for sensitive skin, we ensure a gentle yet effective experience for all skin types.',
    items: [
      {
        id: 'brow-wax',
        name: 'Brow Wax & Shaping',
        description: 'Professional eyebrow shaping to enhance your natural features and frame your face beautifully.',
        price: '$35',
        duration: '15 min',
        image: '/images/service-brow.jpg',
      },
      {
        id: 'lip-wax',
        name: 'Lip or Chin Wax',
        description: 'Quick and effective hair removal for the upper lip or chin area.',
        price: '$20',
        duration: '10 min',
        image: '/images/service-lip.jpg',
      },
      {
        id: 'full-face-wax',
        name: 'Full Face Wax (brows, lip, chin, cheeks)',
        description: 'Complete facial waxing including eyebrows, upper lip, chin, and sides of face.',
        price: '$70',
        duration: '30 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'brazilian-wax',
        name: 'Brazilian Wax',
        description: 'Complete hair removal for the bikini area with minimal discomfort using premium wax formulations.',
        price: '$85',
        duration: '30 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'bikini-wax',
        name: 'Bikini Wax',
        description: 'Precise hair removal for the bikini line using gentle, high-quality wax for sensitive skin.',
        price: '$55',
        duration: '20 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'full-leg-wax',
        name: 'Full Leg Wax',
        description: 'Complete hair removal from ankle to hip for smooth, long-lasting results.',
        price: '$95',
        duration: '45 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'half-leg-wax',
        name: 'Half Leg Wax',
        description: 'Smooth, hair-free skin from knee to ankle or knee to hip.',
        price: '$60',
        duration: '30 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'full-arm-wax',
        name: 'Full Arm Wax',
        description: 'Complete hair removal from wrist to shoulder for silky smooth arms.',
        price: '$65',
        duration: '30 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'half-arm-wax',
        name: 'Half Arm Wax',
        description: 'Hair removal from wrist to elbow or elbow to shoulder.',
        price: '$45',
        duration: '20 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'underarm-wax',
        name: 'Underarm Wax',
        description: 'Effective underarm hair removal with special care for this sensitive area.',
        price: '$30',
        duration: '15 min',
        image: '/images/service-face-wax.jpg',
      },
      {
        id: 'full-back-wax',
        name: 'Full Back Wax (men)',
        description: 'Complete back hair removal for men, from neck to waist.',
        price: '$100',
        duration: '45 min',
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
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium treatments designed to rejuvenate your skin and enhance your natural beauty, all inspired by the healing elements of the California coast.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {services.map((category, categoryIndex) => (
        <section 
          key={category.id} 
          id={category.id}
          className="py-16 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.name}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-seafoam-text-dark text-sm">
                        <FiDollarSign className="mr-1" />
                        <span>{service.price}</span>
                      </div>
                      <div className="flex items-center text-seafoam-text-dark text-sm">
                        <FiClock className="mr-1" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <Link href="/booking" className="btn-primary text-sm w-full text-center" data-aos="zoom-in" data-aos-delay="100">
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
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services and what to expect during your visit.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-6">
              {/* FAQ items with staggered animations */}
              <details className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="100">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>How should I prepare for my facial treatment?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>For the best results, arrive with a clean face (no makeup). Avoid sun exposure and exfoliating products 48 hours before your treatment. Men should shave at least 2 hours before their facial. Stay hydrated and let us know about any skin sensitivities or medications you're taking.</p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>How often should I get a facial?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>For optimal results, we recommend a facial every 4-6 weeks, which aligns with your skin's natural cell turnover cycle. However, this can vary based on your skin type, concerns, and goals. Your esthetician will recommend a personalized treatment schedule during your consultation.</p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="300">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>What should I expect after a chemical peel?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>Post-peel reactions vary depending on the type and strength of your peel. You may experience redness, sensitivity, and peeling for 3-7 days. It's crucial to avoid sun exposure, use gentle products, and apply SPF daily. Your esthetician will provide detailed aftercare instructions specifically for your treatment.</p>
                </div>
              </details>
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
                Ready to Book Your Treatment?
              </h2>
              <p className="text-white text-lg max-w-xl hero-text-shadow">
                Schedule your appointment today and experience the Haven's difference.
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