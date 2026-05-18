import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from './ui/Button';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} data-theme="light" className="bg-ouma-light py-24 md:py-48 px-6 md:px-16 overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
        <div className="lg:col-span-5">
           <h2 ref={textRef} className="heading-big text-ouma-dark mb-8 lg:mb-0">
             perspective
           </h2>
        </div>
        
        <div className="lg:col-start-7 lg:col-span-6 flex flex-col justify-center">
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl text-ouma-dark leading-relaxed font-light mb-6 md:mb-8">
            most marketing creates visibility, not decisions. we focus on the delta between being seen and being chosen.
          </p>
          <div className="w-full h-[1px] bg-ouma-dark opacity-10 mb-6 md:mb-8" />
          <p className="font-sans text-base lg:text-lg text-ouma-dark/60 leading-relaxed max-w-lg">
            ouma is a digital agency for the post-algorithmic era. we build clarity into every interaction, ensuring your brand isn't just part of the noise, but the reason it stops.
          </p>
        </div>
      </div>
    </section>
  );
};
