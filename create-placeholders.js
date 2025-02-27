const fs = require('fs');
const path = require('path');

// List of required images from README
const images = [
  'hero-beach.jpg',
  'esthetician.jpg',
  'owner.jpg',
  'treatment-room.jpg',
  'service-facial.jpg',
  'service-cleansing.jpg',
  'service-anti-aging.jpg',
  'service-coastal.jpg',
  'service-peel.jpg',
  'service-microdermabrasion.jpg',
  'service-led.jpg',
  'service-brow.jpg',
  'service-lip.jpg',
  'service-face-wax.jpg',
  'package-retreat.jpg',
  'package-bridal.jpg',
  'package-membership.jpg',
  'testimonial/testimonial-1.jpg',
  'testimonial/testimonial-2.jpg',
  'testimonial/testimonial-3.jpg',
  'testimonial/testimonial-4.jpg',
  'testimonial/testimonial-booking.jpg',
];

// Ensure the directory exists
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Generate a simple SVG placeholder with text
const generatePlaceholder = (imageName, width = 800, height = 600) => {
  const displayName = path.basename(imageName, path.extname(imageName));
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#49a596" opacity="0.3"/>
    <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1"/>
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="none" stroke="#000" stroke-width="0.5"/>
      </pattern>
    </defs>
    <text x="50%" y="50%" font-family="Arial" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="#333">
      ${displayName.replace(/[-_]/g, ' ')}
    </text>
  </svg>`;
};

// Create placeholder images
for (const image of images) {
  const imagePath = path.join('public/images', image);
  ensureDirectoryExists(path.dirname(imagePath));
  
  // Change extension to .svg for our placeholders
  const svgPath = imagePath.replace(/\.[^/.]+$/, '.svg');
  
  fs.writeFileSync(svgPath, generatePlaceholder(image));
  console.log(`Created placeholder: ${svgPath}`);
}

console.log('All placeholder images created successfully!'); 