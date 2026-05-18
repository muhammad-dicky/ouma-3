import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const servicesList = [
  {
    title: "branding",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "social media",
    img: "https://images.unsplash.com/photo-1778880984300-d709bb02f6ea?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "advertising",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "search engine optimization",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "web analytics",
    img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "customer relationship management",
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800",
  },
];

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // List item entry animation
      gsap.from(".service-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        onComplete: () => {
          gsap.set(".service-item", { clearProps: "all" });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      // Transition animation for image change
      gsap.fromTo(
        imageRef.current,
        {
          clipPath: "inset(100% 0 0 0)",
          scale: 1.1,
          filter: "grayscale(100%) contrast(150%) brightness(50%)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          filter: "grayscale(100%) contrast(125%) brightness(90%)",
          duration: 0.8,
          ease: "power3.out",
        },
      );
    }
  }, [activeIndex]);

  return (
    <section
      id="services"
      ref={containerRef}
      data-theme="light"
      className="bg-ouma-light py-24 md:py-48 px-6 md:px-16 border-t border-ouma-dark/10 relative"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        {/* LEFT COLUMN: Sticky Header and Image */}
        <div className="col-span-1 md:col-span-5 h-fit md:sticky md:top-24 flex flex-col justify-between">
          <div className="mb-12 md:mb-24">
            <p className="text-xs md:text-sm font-medium opacity-60 uppercase tracking-widest">
              our capabilities
            </p>
          </div>

          <div className="relative w-full aspect-[3/4] border-[6px] border-ouma-dark overflow-hidden bg-ouma-dark/5">
            <img
              key={activeIndex}
              ref={imageRef}
              src={servicesList[activeIndex].img}
              alt={servicesList[activeIndex].title}
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Service List */}
        <div className="col-span-1 md:col-span-7">
          <div className="flex flex-col">
            {servicesList.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="service-item w-full text-left py-8 md:py-12 border-b border-ouma-dark/10 flex justify-between items-center group transition-colors duration-300 overflow-hidden"
              >
                <div
                  className={`transform transition-transform duration-500 ease-out ${activeIndex === idx ? "translate-x-4 md:translate-x-8" : "group-hover:translate-x-2 md:group-hover:translate-x-4"}`}
                >
                  <span
                    className={`text-3xl md:text-6xl font-bold tracking-tighter lowercase transition-colors duration-300 ${activeIndex === idx ? "text-ouma-dark" : "text-ouma-dark/20 group-hover:text-ouma-dark/50"}`}
                  >
                    {service.title}
                  </span>
                </div>
                <span
                  className={`text-2xl md:text-4xl text-ouma-dark transition-all duration-500 ease-out ${activeIndex === idx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`}
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
