"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

type ImageWithFallbackProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

/**
 * Custom Image component that tries to load the image with the original extension,
 * then falls back to .svg version, and finally to a universal placeholder if both fail
 */
const ImageWithFallback = ({ src, fallbackSrc, ...props }: ImageWithFallbackProps) => {
  const [fallbackLevel, setFallbackLevel] = useState(0);
  
  // Determine which source to use based on fallback level
  let imgSrc = src;
  
  if (fallbackLevel === 1) {
    // First fallback: try SVG version of the same file
    imgSrc = src.replace(/\.(jpg|jpeg|png|PNG)$/i, '.svg');
  } else if (fallbackLevel === 2) {
    // Second fallback: use provided fallback or default placeholder
    imgSrc = fallbackSrc || '/images/placeholder.svg';
  }

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        if (fallbackLevel < 2) {
          setFallbackLevel(fallbackLevel + 1);
        }
      }}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
    />
  );
};

export default ImageWithFallback; 