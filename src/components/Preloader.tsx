import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const Preloader: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillTextRef = useRef<HTMLSpanElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll immediately
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        // Unlock scroll and hide preloader from DOM
        document.body.style.overflow = "";
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
        // Force scroll to top on first load completion
        window.scrollTo(0, 0);
      },
    });

    // Fluid Fill animation via animated gradient stop (single glyph render, no seam)
    tl.fromTo(
      fillTextRef.current,
      { "--fill": "0%" },
      { "--fill": "100%", duration: 2.2, ease: "power3.inOut" },
    )
      // Scale Down text slightly before exiting for physical impact
      .to(
        textWrapperRef.current,
        {
          scale: 0.9,
          opacity: 0.8,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "+=0.3",
      )
      // Slide entire preloader up and away
      .to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
        },
        "-=0.2",
      );

    return () => {
      document.body.style.overflow = "";
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
        {/* Single glyph: permanent outline stroke + gradient fill wiping upward.
            Both are painted from the same text node, so the fill can never
            misalign with the outline (no duplicate-layer seam). */}
        <span
          ref={fillTextRef}
          style={
            {
              WebkitTextStroke: "1px #EDE8E2",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              backgroundImage:
                "linear-gradient(to top, #EDE8E2 0%, #EDE8E2 var(--fill, 0%), transparent var(--fill, 0%), transparent 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            } as React.CSSProperties
          }
        >
          ouma
        </span>
      </div>
    </div>
  );
};
