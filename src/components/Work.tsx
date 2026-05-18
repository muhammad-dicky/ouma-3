import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  {
    id: 1,
    title: 'ZEP Platform',
    category: 'BRANDING / WEB',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    span: 'row-span-2 col-span-2'
  },
  {
    id: 2,
    title: 'Brussels Rebuilt',
    category: 'CAMPAIGN',
    image: 'https://images.unsplash.com/photo-1582213713364-16a17b07c917?auto=format&fit=crop&q=80&w=1000',
    span: 'col-span-1'
  },
  {
    id: 3,
    title: 'Wash Away Injustice',
    category: 'MULTIMEDIA',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1000',
    span: 'col-span-1'
  }
];

export const Work: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(circleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1.5,
        },
        rotate: 360,
        ease: 'none'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-ouma-light text-ouma-dark py-32 px-8 md:px-16 flex flex-col gap-12 border-t border-ouma-dark/10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <label className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
          Selected Work
        </label>
        <p className="max-w-md font-sans text-lg md:text-xl font-medium">
          We blend strategy, technology, and creativity to craft powerful brands and compelling campaigns that leave a lasting impact.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 relative">
        {/* Project Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
           {projects.map((project) => (
             <div key={project.id} className={`group relative overflow-hidden rounded-lg ${project.span || ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ouma-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 text-ouma-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-sans font-bold italic text-2xl">{project.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest mt-1 opacity-80">{project.category}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Floating Circle Logo */}
        <div className="hidden lg:flex w-1/3 justify-center items-center">
            <div 
              ref={circleRef}
              className="w-full aspect-square bg-ouma-dark rounded-full flex items-center justify-center relative shadow-2xl overflow-hidden"
            >
               {/* Decorative floating particles inside circle */}
               <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-ouma-light rounded-full"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
               </div>
               
               <span className="font-sans italic text-[15vw] text-ouma-light font-bold select-none">O</span>
            </div>
        </div>
      </div>
    </section>
  );
};
