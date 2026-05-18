import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  // Default to dark cursor (assuming first section is ouma-light)
  const [cursorColor, setCursorColor] = useState('#0D2888');

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Inner dot: snappy tracking
    const dotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });

    // Outer ring: fluid trailing lag
    const ringX = gsap.quickTo(ring, "x", { duration: 0.6, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.6, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Center both elements on mouse
      dotX(e.clientX - dot.offsetWidth / 2);
      dotY(e.clientY - dot.offsetHeight / 2);
      
      ringX(e.clientX - ring.offsetWidth / 2);
      ringY(e.clientY - ring.offsetHeight / 2);

      // Detect section theme
      const target = e.target as HTMLElement;
      const themeContainer = target.closest('[data-theme]');
      
      if (themeContainer) {
        const theme = themeContainer.getAttribute('data-theme');
        // If background is dark, cursor is light. If background is light, cursor is dark.
        // Brand Dark: #0D2888 | Brand Light: #EDE8E2
        setCursorColor(theme === 'dark' ? '#EDE8E2' : '#0D2888');
      } else {
        // Default fallback
        setCursorColor('#0D2888');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Inner Dot */}
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full transition-colors duration-300 pointer-events-none"
        style={{ backgroundColor: cursorColor }}
      />
      {/* Outer Ring */}
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-solid transition-colors duration-300 pointer-events-none"
        style={{ borderColor: cursorColor, backgroundColor: 'transparent' }}
      />
    </div>
  );
};
