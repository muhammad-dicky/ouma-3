import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current || !containerRef.current) return;

      gsap.fromTo(
        imageRef.current,
        {
          y: '20%',
          scale: 1.1,
        },
        {
          y: '0%',
          scale: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative overflow-hidden border-[6px] border-[#0D2888] ${className}`}
    >
      {src && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};
