import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const processSteps = [
  { id: '01', title: 'start with what matters', text: 'we strip away the noise to find the singular truth behind your brand\'s value.' },
  { id: '02', title: 'think clearly, then act', text: 'strategy isn\'t a document, it\'s a deliberate choice to move in one direction.' },
  { id: '03', title: 'stay close to the work', text: 'partners are involved in the craft, not just the meetings. details are everything.' },
  { id: '04', title: 'refine as we go', text: 'the market changes instantly. we stay fluid to ensure the result is always ahead.' },
];

export const Clients: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-col', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} data-theme="light" className="bg-ouma-light py-24 md:py-48 px-6 md:px-16 border-t border-ouma-dark/10">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-col pt-6 md:pt-8 border-t border-ouma-dark">
              <span className="text-[10px] md:text-xs font-medium block mb-4 md:mb-8 opacity-40">{step.id}</span>
              <h3 className="text-xl md:text-2xl font-bold text-ouma-dark mb-4 md:mb-6 leading-tight h-auto">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-ouma-dark/60 leading-relaxed max-w-full md:max-w-[240px]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
