import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    category: 'branding / digital',
    title: 'inkon.co',
    slug: 'inkon',
    img: '/inkon/inkon%20(1).jpg',
  },
  {
    id: '02',
    category: 'website / development',
    title: 'harcourts purba bali',
    slug: 'harcourts-purba-bali',
    img: '/hpb/hpc%20(1).JPG',
  },
  {
    id: '03',
    category: 'branding / digital',
    title: 'salty sun bali',
    slug: 'salty-sun-bali',
    img: '/salty/salty%20(1).jpg',
  },
  {
    id: '04',
    category: 'website / development',
    title: 'villa tiga - harcourts purba',
    slug: 'villa-tiga',
    img: '/tiga/villa-tiga%20(1).jpg',
  },
  {
    id: '05',
    category: 'branding / digital',
    title: 'tropicana bali',
    slug: 'tropicana-bali',
    img: '/tropicana/tropicana%20(1).jpg',
  },
  {
    id: '06',
    category: 'website / development',
    title: '335 sqm bingin land',
    slug: 'bingin-land',
    img: '/land/land%20(1).webp',
  },
];

export const ProjectShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const horizontalSection = horizontalRef.current;
      if (!horizontalSection) return;

      const totalWidth = horizontalSection.scrollWidth;
      const windowWidth = window.innerWidth;
      
      const horizontalTween = gsap.to(horizontalSection, {
        x: () => -(totalWidth - windowWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${(totalWidth - (windowWidth < 768 ? 0 : windowWidth)) * (windowWidth < 768 ? 0.6 : 1)}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // Subtle parallax for images
      gsap.utils.toArray('.project-img').forEach((img: any) => {
        gsap.to(img, {
          x: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: img,
            containerAnimation: horizontalTween,
            start: 'left right',
            end: 'right left',
            scrub: true,
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={containerRef} data-theme="light" className="bg-ouma-light overflow-hidden h-[80vh] md:h-screen flex flex-col">
      <div className="px-6 md:px-16 pt-16 md:pt-24 pb-4 md:pb-8 flex justify-between items-end flex-none">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] md:text-xs font-medium opacity-40">selected work</span>
          <h2 className="text-2xl md:text-5xl font-bold text-ouma-dark tracking-tight leading-none">
            featured projects
          </h2>
        </div>
        <div className="hidden md:block text-[10px] font-medium opacity-40 uppercase tracking-widest">
          scroll to explore / [01-06]
        </div>
      </div>

      <div ref={horizontalRef} className="flex gap-6 md:gap-16 px-6 md:px-16 flex-1 items-center w-fit">
        {projects.map((project, idx) => (
          <Link 
            key={project.id} 
            to={`/project/${project.id}`}
            className="flex-shrink-0 w-[75vw] md:w-[60vw] lg:w-[50vw] relative group block cursor-none"
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="flex justify-between items-start">
                <span className="text-[9px] md:text-[10px] tracking-widest font-bold opacity-40">{project.id}</span>
                <span className="text-[9px] md:text-[10px] tracking-widest font-bold opacity-40">{project.category}</span>
              </div>

              <div className="relative aspect-[4/3] md:aspect-[21/9] lg:aspect-[16/8] overflow-hidden border-[3px] md:border-[6px] border-ouma-dark bg-ouma-dark/5">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img w-full h-full object-cover grayscale contrast-125 brightness-90 transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ouma-dark opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>

              <div className="flex justify-between items-end">
                <h3 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ouma-dark group-hover:italic transition-all duration-500">
                  {project.title}
                </h3>
                <span className="text-lg md:text-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">→</span>
              </div>
            </div>
          </Link>
        ))}
        
        {/* Placeholder for scroll breathing room */}
        <div className="hidden md:block w-[20vw] flex-shrink-0" />
      </div>
    </section>
  );
};
