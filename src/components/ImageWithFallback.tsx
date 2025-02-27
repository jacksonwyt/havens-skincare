import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

type ImageWithFallbackProps = Omit<ImageProps, 'src'> & {
  src: string;
};

/**
 * Custom Image component that tries to load the image with the original extension
 * and falls back to .svg if the original image doesn't exist
 */
const ImageWithFallback = ({ src, ...props }: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);
  
  // If there's an error loading the original image, try the SVG version
  const imgSrc = error ? src.replace(/\.(jpg|jpeg|png)$/, '.svg') : src;

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => setError(true)}
    />
  );
};

export default ImageWithFallback; 