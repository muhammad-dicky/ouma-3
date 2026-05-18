import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef1 = useRef<HTMLSpanElement>(null);
  const headingRef2 = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from([headingRef1.current, headingRef2.current], {
        y: 150,
        rotateZ: 5,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.1,
      })
      .from(subRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.8');

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} data-theme="light" className="relative min-h-screen flex flex-col justify-center bg-ouma-light px-6 md:px-16 pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        <h1 className="heading-giant text-ouma-dark mb-16 md:mb-24 max-w-full md:max-w-5xl">
          <span className="block overflow-hidden pb-1 md:pb-2">
            <span ref={headingRef1} className="block">make it clear.</span>
          </span>
          <span className="block overflow-hidden pb-1 md:pb-2">
            <span ref={headingRef2} className="block">make it win.</span>
          </span>
        </h1>
        
        <div ref={subRef} className="mt-8 md:mt-auto flex justify-end w-full">
          <p className="max-w-xs text-base md:text-xl leading-relaxed text-ouma-dark font-medium md:translate-y-12">
            ouma is a digital marketing agency built to turn attention into real decisions.
          </p>
        </div>
      </div>
      
      {/* Structural background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden text-ouma-dark">
        <div className="heading-giant whitespace-nowrap -rotate-12 translate-x-1/4 scale-[1.2] md:scale-150">
          decision decision decision
        </div>
      </div>
    </section>
  );
};
