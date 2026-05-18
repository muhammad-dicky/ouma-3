import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const LandscapeBanner: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -50,
        scale: 1.1,
      });
    }, imageRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      data-theme="light"
      className="bg-ouma-light py-24 md:py-48 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="relative group">
          {/* Offset brand background */}
          <div className="absolute inset-0 bg-ouma-dark translate-x-2 translate-y-2 md:translate-x-8 md:translate-y-8 -z-10" />

          <div className="aspect-[16/9] overflow-hidden border-2 md:border-8 border-ouma-dark">
            <img
              ref={imageRef}
              src="https://images.unsplash.com/photo-1778757752168-aee9ae57b336?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="architectural minimalism"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute bottom-2 right-2 md:bottom-12 md:right-12 text-ouma-light text-[10px] md:text-sm font-medium opacity-80 mix-blend-difference">
            01 / clarity above all.
          </div>
        </div>
      </div>
    </section>
  );
};
