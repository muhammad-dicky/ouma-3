import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectImage } from "../components/ProjectImage";

gsap.registerPlugin(ScrollTrigger);

const projectData: Record<string, any> = {
  "01": {
    title: "inkon.co",
    client: "inkon.co",
    role: "branding / digital",
    timeline: "q3 2025",
    outcome: "redefining feed perception",
    url: "https://inkon.co",
    description:
      "the challenge was to strip away the digital noise. in an era of algorithmic saturation, authenticity was the only competitive advantage left. i worked closely with inkon to distill their core identity into a social strategy that doesn't beg for engagement, but commands it.",
    description2:
      "every post, every frame, and every caption was scrutinized to ensure it served a singular purpose: turning passive scrollers into a dedicated community. the result is a social presence that feels as bold and permanent as the ink they represent.",
    quote: "we needed to redefine how they were perceived in a crowded feed.",
    next: { id: "02", title: "harcourts purba bali" },
    images: [
      "/inkon/inkon%20(1).jpg",
      "/inkon/inkon%20(2).jpg",
      "/inkon/inkon%20(3).jpg",
      "/inkon/inkon%20(4).jpg",
      "/inkon/inkon%20(5).jpg",
      "/inkon/inkon%20(6).jpg",
      "/inkon/inkon%20(7).jpg",
      "/inkon/inkon%20(8).jpg",
    ],
  },
  "02": {
    title: "harcourts purba bali",
    client: "harcourts purba bali",
    role: "website / development",
    timeline: "2026",
    outcome: "high-performance asset",
    url: "https://harcourtspurbabali.vercel.app/",
    description:
      "the challenge was to eliminate digital friction. in a market saturated with slow, templated property sites, seamless performance is the ultimate competitive advantage. i engineered a custom architecture for harcourts purba bali, distilling complex data into a streamlined interface that commands trust.",
    description2:
      "every component, every micro-interaction, and every line of code was scrutinized to serve a singular purpose: turning casual browsing into definitive inquiries. the result is a high-performance digital asset built for speed and measurable conversion.",
    quote: "we needed to redefine how premium real estate is navigated online.",
    next: { id: "03", title: "salty sun bali" },
    images: [
      "/hpb/hpc%20(1).JPG",
      "/hpb/hpc%20(1).png",
      "/hpb/hpc%20(2).png",
      "/hpb/hpc%20(3).png",
      "/hpb/hpc%20(4).png",
      "/hpb/hpc%20(2).jpg",
      "/hpb/hpc%20(3).jpg",
      "/hpb/hpc%20(4).jpg",
    ],
  },
  "03": {
    title: "salty sun bali",
    client: "salty sun bali",
    role: "branding / digital",
    timeline: "2026",
    outcome: "intentional community growth",
    url: "https://instagram.com/saltysun.bali",
    description:
      "most tropical brands get lost in a sea of identical sunsets. we decided to take a different route. for salty sun bali, the goal wasn’t to out-shout the algorithm with loud graphics, but to cultivate a space that feels like a genuine breath of fresh air.",
    description2:
      "rather than chasing fleeting viral moments, the focus shifted to intentional curation. by pairing raw, sun-baked visuals with conversational copy, we transformed their instagram from a simple product catalog into a daily digital retreat for their community.",
    quote: "translating island rhythm into a digital presence.",
    next: { id: "04", title: "villa tiga - harcourts purba" },
    images: [
      "/salty/salty%20(1).jpg",
      "/salty/salty%20(2).jpg",
      "/salty/salty%20(3).jpg",
      "/salty/salty%20(4).jpg",
      "/salty/salty%20(5).jpg",
      "/salty/salty%20(6).jpg",
      "/salty/salty%20(7).jpg",
      "/salty/salty%20(8).jpg",
    ],
  },
  "04": {
    title: "villa tiga - harcourts purba",
    client: "villa tiga - harcourts purba",
    role: "website development",
    timeline: "2026",
    outcome: "high-conversion investor platform",
    url: "https://villa-tiga-harcourts-purba-bali.vercel.app/",
    description:
      "standard property listings often hide behind vague adjectives. for villa tiga, the directive was absolute precision. the goal was to build a standalone web experience that presents concrete architectural facts, spatial dimensions, and premium materials without the usual marketing fluff.",
    description2:
      "deployed on a modern edge network, the site prioritizes zero-latency loading and fluid micro-animations. the architecture allows the property's structural integrity to speak for itself, creating a frictionless, high-conversion environment for serious investors.",
    quote: "engineering a digital twin for high-end real estate.",
    next: { id: "05", title: "tropicana bali" },
    images: [
      "/tiga/villa-tiga%20(1).jpg",
      "/tiga/villa-tiga%20(2).jpg",
      "/tiga/villa-tiga%20(3).jpg",
      "/tiga/villa-tiga%20(4).jpg",
      "/tiga/villa-tiga%20(5).jpg",
      "/tiga/villa-tiga%20(1).webp",
      "/tiga/villa-tiga%20(2).webp",
      "/tiga/villa-tiga%20(3).webp",
    ],
  },
  "05": {
    title: "tropicana bali",
    client: "tropicana bali",
    role: "branding / digital",
    timeline: "2026",
    outcome: "cultural digital scene",
    url: "https://instagram.com/tropicana.bali",
    description:
      "you cannot sell a lively experience with flat, low-effort content. tropicana bali needed a social ecosystem that mirrored its internal pulse. we pivoted away from standard promotional flyers, choosing instead to build a culturally relevant digital scene.",
    description2:
      "through strategic content pacing and immersive visual storytelling, the instagram grid became a living extension of the venue itself. every reel and story acts as a deliberate touchpoint, designed to convert online fomo (fear of missing out) into real-world reality.",
    quote: "curating the rhythm of a high-tempo destination.",
    next: { id: "06", title: "335 sqm bingin land" },
    images: [
      "/tropicana/tropicana%20(1).jpg",
      "/tropicana/tropicana%20(2).jpg",
      "/tropicana/tropicana%20(3).jpg",
      "/tropicana/tropicana%20(4).jpg",
      "/tropicana/tropicana%20(5).jpg",
      "/tropicana/tropicana%20(6).jpg",
      "/tropicana/tropicana%20(7).jpg",
      "/tropicana/tropicana%20(8).jpg",
    ],
  },
  "06": {
    title: "335 sqm bingin land",
    client: "335 sqm bingin land",
    role: "website / development",
    timeline: "2026",
    outcome: "minimalist acquisition framework",
    url: "https://bingin-335-sqm.vercel.app/",
    description:
      "the value of prime bingin real estate speaks for itself; the website's job is simply to get out of the way. i developed a streamlined digital environment designed specifically to eliminate cognitive load. no forced narratives, just an optimized, lightning-fast presentation of area specifications.",
    description2:
      "leveraging a robust javascript framework hosted on vercel, the platform ensures rapid asset delivery and a seamless cross-device experience. it operates as a high-speed conduit between physical land facts and the investor's decisive action.",
    quote: "deploying a minimalist framework for premium land acquisition.",
    next: { id: "01", title: "inkon.co" },
    images: [
      "/land/land%20(1).webp",
      "/land/land%20(2).jpg",
      "/land/land%20(3).jpg",
      "/land/land%20(4).jpg",
      "/land/land%20(5).jpg",
      "/land/land%20(6).jpg",
      "/land/land%20(7).jpg",
      "/land/land%20(8).jpg",
    ],
  },
};

const placeholderImg =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const project = projectData[id || "01"] || projectData["01"];

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: 200,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, [id]);

  return (
    <div
      className="bg-[#EDE8E2] min-h-screen text-[#0D2888] lowercase selection:bg-[#0D2888] selection:text-[#EDE8E2]"
      data-theme="light"
    >
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-screen flex flex-col justify-end items-center px-6 md:px-12 lg:px-24 pb-24 overflow-hidden"
      >
        <h1
          ref={titleRef}
          className="absolute top-[20%] left-0 w-full text-center font-sans font-bold text-[10vw] md:text-[12vw] leading-[0.8] tracking-tighter z-10"
        >
          {project.title}
        </h1>

        <div className="relative w-full h-[60vh] md:h-[70vh] mt-auto z-0">
          <ProjectImage
            src={project.images?.[0] || placeholderImg}
            alt={project.title}
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Project Metadata */}
      <section className="px-6 md:px-12 lg:px-24 py-12 border-y border-[#0D2888]/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
              client
            </span>
            <span className="text-sm md:text-base font-sans">
              {project.client}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
              role
            </span>
            <span className="text-sm md:text-base font-sans">
              {project.role}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
              timeline
            </span>
            <span className="text-sm md:text-base font-sans">
              {project.timeline}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">
              outcome
            </span>
            <span className="text-sm md:text-base font-sans">
              {project.outcome}
            </span>
          </div>
        </div>
      </section>

      {/* Editorial Description */}
      <section className="px-6 md:px-12 lg:px-24 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              {project.quote}
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg md:text-xl leading-relaxed text-[#0D2888]/80 font-light">
              {project.description}
              <br />
              <br />
              {project.description2}
            </p>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 group flex items-center gap-4 w-fit"
              >
                <div className="w-12 h-12 rounded-full border border-[#0D2888] flex items-center justify-center transition-all duration-500 group-hover:bg-[#0D2888] group-hover:scale-110">
                  <span className="text-xl transition-all duration-500 group-hover:text-[#EDE8E2] group-hover:rotate-45">
                    ↗
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold tracking-tight">
                    view live site
                  </span>
                  <div className="h-[1px] w-full bg-[#0D2888] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Asymmetrical Gallery */}
      <section className="px-6 md:px-12 lg:px-24 py-32 flex flex-col gap-24 md:gap-48">
        {/* Image 1: Full-width */}
        <div className="w-full aspect-[21/9]">
          <ProjectImage
            src={project.images?.[1] || placeholderImg}
            alt="project detail 1"
            className="w-full h-full"
          />
        </div>

        {/* Images 2 & 3: Staggered row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
          <div className="w-full aspect-square">
            <ProjectImage
              src={project.images?.[2] || placeholderImg}
              alt="project detail 2"
              className="w-full h-full"
            />
          </div>
          <div className="w-full aspect-[3/4] md:translate-y-32">
            <ProjectImage
              src={project.images?.[3] || placeholderImg}
              alt="project detail 3"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Images 4 & 5: Side by side row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-end">
          <div className="w-full aspect-[4/5] md:-translate-y-32">
            <ProjectImage
              src={project.images?.[6] || placeholderImg}
              alt="project detail 6"
              className="w-full h-full"
            />
          </div>
          <div className="w-full aspect-video">
            <ProjectImage
              src={project.images?.[4] || placeholderImg}
              alt="project detail 4"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Image 5: Centered landscape & final shot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="w-full aspect-[16/7]">
            <ProjectImage
              src={project.images?.[5] || placeholderImg}
              alt="project detail 5"
              className="w-full h-full"
            />
          </div>
          <div className="w-full aspect-[16/7]">
            <ProjectImage
              src={project.images?.[7] || placeholderImg}
              alt="project detail 7"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Next Project Footer */}
      <section
        data-theme="dark"
        className="bg-[#0D2888] text-[#EDE8E2] px-6 md:px-12 lg:px-24 py-48 overflow-hidden relative group"
      >
        <Link to={`/project/${project.next.id}`} className="block w-full">
          <div className="flex flex-col gap-4 relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
            <span className="text-xs uppercase tracking-widest font-mono opacity-60">
              next project
            </span>
            <div className="flex justify-between items-end">
              <h2 className="text-5xl md:text-8xl lg:text-[10vw] font-bold leading-[0.8] tracking-tighter">
                {project.next.title} →
              </h2>
            </div>
          </div>
          {/* Visual hover effect: massive underline sweep */}
          <div className="absolute bottom-0 left-0 w-0 h-2 bg-[#EDE8E2] transition-all duration-700 ease-in-out group-hover:w-full"></div>
        </Link>
      </section>
    </div>
  );
};
