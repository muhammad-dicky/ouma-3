import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Preloader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const solidTextRef = useRef<HTMLSpanElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll immediately
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scroll and hide preloader from DOM
        document.body.style.overflow = '';
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
        // Force scroll to top on first load completion
        window.scrollTo(0, 0);
      }
    });

    // Fluid Fill animation using clip-path
    tl.fromTo(solidTextRef.current, 
      { clipPath: 'inset(100% 0 0 0)' },
      { clipPath: 'inset(0% 0 0 0)', duration: 2.2, ease: 'power3.inOut' }
    )
    // Scale Down text slightly before exiting for physical impact
    .to(textWrapperRef.current, { 
      scale: 0.9, 
      opacity: 0.8,
      duration: 0.8, 
      ease: 'power2.inOut' 
    }, "+=0.3")
    // Slide entire preloader up and away
    .to(containerRef.current, { 
      yPercent: -100, 
      duration: 1.2, 
      ease: 'expo.inOut' 
    }, "-=0.2");

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#0D2888] flex items-center justify-center overflow-hidden"
    >
      <div 
        ref={textWrapperRef}
        className="relative text-[18vw] md:text-[15vw] font-bold tracking-tighter lowercase select-none"
      >
        {/* Outline Layer (Background) */}
        <span 
          className="text-transparent" 
          style={{ WebkitTextStroke: '1px #EDE8E2' }}
        >
          ouma
        </span>
        
        {/* Solid Fill Layer (Animated Foreground) */}
        <span 
          ref={solidTextRef} 
          className="absolute left-0 top-0 text-[#EDE8E2]"
          style={{ clipPath: 'inset(100% 0 0 0)' }}
        >
          ouma
        </span>
      </div>
    </div>
  );
};
