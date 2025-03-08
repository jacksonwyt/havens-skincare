"use client";

import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

type ImageWithFallbackProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

/**
 * Custom Image component that tries to load the image with the original extension,
 * then falls back to .svg version, and finally to a universal placeholder if both fail
 */
const ImageWithFallback = ({ 
  src, 
  fallbackSrc = '/images/placeholder.svg',
  alt,
  ...props 
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Reset states when src changes
  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
    setLoading(false);
    
    // Try to determine if we should use a different extension
    if (imgSrc === src) {
      // First try the fallback source if it's different from the original
      if (fallbackSrc && fallbackSrc !== src) {
        setImgSrc(fallbackSrc);
      } 
      // Otherwise try to convert to SVG
      else if (/\.(jpg|jpeg|png|PNG|JPG|JPEG)$/i.test(src)) {
        const svgVersion = src.replace(/\.(jpg|jpeg|png|PNG|JPG|JPEG)$/i, '.svg');
        setImgSrc(svgVersion);
      } 
      // If all else fails, use the placeholder
      else {
        setImgSrc('/images/placeholder.svg');
      }
    } else if (imgSrc !== '/images/placeholder.svg') {
      // If we've already tried a fallback but not the placeholder, use the placeholder
      setImgSrc('/images/placeholder.svg');
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt || "Image"}
      onError={handleError}
      onLoad={() => setLoading(false)}
      sizes={props.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      style={{
        ...props.style,
        opacity: loading ? 0.5 : 1,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
};

export default ImageWithFallback; 