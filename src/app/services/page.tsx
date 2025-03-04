import Link from 'next/link';
import Image from 'next/image';
import { FiClock, FiDollarSign, FiPlus } from 'react-icons/fi';

export const metadata = {
  title: "Services | Haven's Skincare - Newport Beach Esthetician",
  description: "Explore our range of premium skincare services, including facials, peels, and custom treatments at Haven's Skincare in Newport Beach, California.",
}

// Define service categories and details
const services = [
  {
    id: 'facials',
    name: 'Facial Treatments',
    description: 'Our signature facial treatments are designed to address your specific skin concerns while providing deep relaxation. Featuring Epicuren Discovery—a results-driven, clean beauty brand known for cutting-edge anti-aging stem cell technology, powerful enzyme therapy, and high-performance botanicals.',
    items: [
      {
        id: 'epicuren-signature-facial',
        name: 'Epicuren Signature Facial',
        description: 'Indulge in Epicuren&apos;s most celebrated facial, designed to lift, tone, and revitalize your skin. This enzymatic treatment uses Epicuren&apos;s Metadermabolic Enzyme to stimulate cell turnover, improve elasticity, and leave your skin visibly firmer and refreshed. Perfect for all skin types looking for a vibrant, youthful glow.',
        price: '$150',
        duration: '60 min',
        image: '/images/products2.png',
      },
      {
        id: 'injectstem-facial',
        name: 'InjectStem™ Facial',
        description: 'This age-defying facial is infused with plant stem cell technology and peptides to visibly smooth fine lines, firm the skin, and restore hydration. Featuring Epicuren&apos;s powerful InjecStem™ Bio-Firming Serum, this treatment is ideal for those seeking a non-invasive alternative to injectables, delivering a lifted and sculpted appearance.',
        price: '$175',
        duration: '75 min',
        image: '/images/inject-stem.png',
      },
      {
        id: 'pumpkin-apple-spice-peel',
        name: 'Pumpkin Apple Spice Peel Facial',
        description: 'Replenish and renew your skin with this seasonal-inspired peel. A gentle yet effective blend of pumpkin enzymes, apple cider extract, and AHAs deeply exfoliate, refine texture, and infuse the skin with antioxidants for a radiant, healthy glow. Ideal for dull, congested, or sun-damaged skin.',
        price: '$160',
        duration: '60 min',
        image: '/images/facial4.jpg',
      },
      {
        id: 'glycolic-resurfacing-facial',
        name: 'Glycolic Resurfacing Facial',
        description: 'A powerful resurfacing treatment using Epicuren&apos;s Glycolic Polymer Solution to dissolve dead skin cells, even out skin tone, and minimize pores. This facial promotes collagen production, leaving your skin smoother, brighter, and more youthful. Recommended for uneven skin tone, hyperpigmentation, and fine lines.',
        price: '$165',
        duration: '60 min',
        image: '/images/signaturefacial.png',
      },
      {
        id: 'compromised-skin-recovery',
        name: 'Compromised Skin Recovery Facial',
        description: 'Designed for sensitive, reactive, or post-procedure skin, this ultra-gentle treatment calms inflammation, strengthens the skin barrier, and deeply hydrates. Using Epicuren&apos;s soothing Hydrating Soothe Dermal Repair Mist and Hydrating Mineral Mask, this facial helps restore and protect delicate skin while promoting long-term resilience.',
        price: '$175',
        duration: '75 min',
        image: '/images/recovery-facial.png',
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
        name: 'Manual Microdermabrasion with Epicuren&apos;s Micro-Derm Ultra-Refining Scrub',
        description: 'A gentle yet effective exfoliation treatment to smooth, brighten, and refine skin texture.',
        price: '$30',
        duration: '15 min',
        image: '/images/service-microdermabrasion.jpg',
      },
      {
        id: 'paraffin-hand',
        name: 'Paraffin Hand Treatment',
        description: 'Indulge in deep hydration with a warm paraffin wax treatment, leaving hands soft and nourished.',
        price: '$25',
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
        price: '$25',
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
        description: 'An advanced mask infused with silver ions to help soothe, purify, and boost skin&apos;s natural healing process, ideal for acne-prone or sensitive skin.',
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
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Services.jpeg"
            alt="Services background"
            fill
            style={{ 
              objectFit: 'cover',
              objectPosition: 'center' 
            }}
            priority
          />
        </div>
        {/* Semi-transparent white overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-75 z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-4xl font-bold text-gray-600 mb-6">Our Services</h1>
            
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
            <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.name}</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                {category.description}
              </p>
            </div>
            
            {/* Facial Treatments - Featured display with images */}
            {category.id === 'facials' && (
              <div className="space-y-8 mb-8">
                {category.items.map((service, index) => (
                  <div 
                    key={service.id}
                    id={service.id}
                    className="flex flex-col md:flex-row bg-white rounded-lg shadow-sm overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={index * 100}
                  >
                    <div className="md:w-1/4 relative h-64 md:h-auto">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">{service.name}</h3>
                        <div className="flex items-center mt-2 md:mt-0 space-x-4">
                          <div className="flex items-center text-seafoam-text-dark">
                            <FiDollarSign className="mr-1" />
                            <span>{service.price}</span>
                          </div>
                          <div className="flex items-center text-seafoam-text-dark">
                            <FiClock className="mr-1" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <Link href="/booking" className="btn-primary text-sm">
                        Book this Service
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {/* Enhancements & Add-Ons - List format */}
            {category.id === 'enhancements' && (
              <div className="bg-white rounded-lg shadow-sm overflow-hidden p-6" data-aos="fade-up">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {category.items.map((service) => (
                    <div key={service.id} id={service.id} className="border-b pb-4 last:border-b-0 md:last:border-b md:even:border-b-0 hover:bg-soft-blue hover:bg-opacity-5 transition-colors p-2 rounded">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                        <div className="flex items-center justify-end space-x-3 text-seafoam-text-dark whitespace-nowrap ml-2">
                          <span>{service.price}</span>
                          <span className="text-sm text-gray-500">({service.duration})</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link href="/booking" className="btn-primary text-sm">
                    Book Enhancement Add-Ons
                  </Link>
                </div>
              </div>
            )}
            
            {/* Waxing Services - Table format */}
            {category.id === 'waxing' && (
              <div data-aos="fade-up">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {category.items.map((service) => (
                        <div key={service.id} id={service.id} className="flex flex-col">
                          <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                          <div className="flex items-center text-seafoam-text-dark mt-1">
                            <span className="font-medium">{service.price}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-sm text-gray-500">{service.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-soft-blue bg-opacity-10 rounded-lg p-6" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">About Our Waxing Services</h3>
                  <p className="text-gray-600 mb-4">
                    We prioritize comfort and precision, leaving your skin smooth, soft, and irritation-free. 
                    Our estheticians use only the finest waxes specifically formulated for sensitive skin, 
                    ensuring a gentle yet effective experience for all clients.
                  </p>
                  <div className="mt-4 text-center">
                    <Link href="/booking" className="btn-primary text-sm">
                      Book Waxing Services
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-16 bg-sand bg-opacity-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
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
                  <p>For the best results, arrive with a clean face (no makeup). Avoid sun exposure and exfoliating products 48 hours before your treatment. Men should shave at least 2 hours before their facial. Stay hydrated and let us know about any skin sensitivities or medications you&apos;re taking.</p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="200">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>How often should I get a facial?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>For optimal results, we recommend a facial every 4-6 weeks, which aligns with your skin&apos;s natural cell turnover cycle. However, this can vary based on your skin type, concerns, and goals. Your esthetician will recommend a personalized treatment schedule during your consultation.</p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm" data-aos="fade-up" data-aos-delay="300">
                <summary className="text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center">
                  <span>What should I expect after a chemical peel?</span>
                  <FiPlus className="text-seafoam" />
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>Post-peel reactions vary depending on the type and strength of your peel. You may experience redness, sensitivity, and peeling for 3-7 days. It&apos;s crucial to avoid sun exposure, use gentle products, and apply SPF daily. Your esthetician will provide detailed aftercare instructions specifically for your treatment.</p>
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
                Schedule your appointment today and experience the Havens difference.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <Link href="/booking" className="bg-gray-700 text-seafoam-text-dark px-8 py-3 rounded-md hover:bg-gray-100 transition duration-300 inline-block font-medium">
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}