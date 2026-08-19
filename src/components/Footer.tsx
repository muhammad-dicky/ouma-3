import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      data-theme="dark"
      className="bg-ouma-dark py-24 md:py-48 px-6 md:px-16 text-ouma-light"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-24 md:gap-32">
        <h2 className="heading-giant text-ouma-light tracking-[-0.03em] max-w-4xl">
          from here, we move.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12 md:gap-0 border-t border-ouma-light/10 pt-12 md:pt-16">
          <div className="md:col-span-4 flex flex-col gap-3 md:gap-4">
            <span className="text-xs opacity-40">say hello</span>
            <a
              href="mailto:info@oumacreatives.com"
              className="text-lg md:text-xl hover:opacity-60 transition-opacity"
            >
              info@oumacreatives.com
            </a>
          </div>

          <div className="md:col-start-6 md:col-span-3 flex flex-col gap-3 md:gap-4 mt-8 md:mt-0">
            <span className="text-xs opacity-40">socials</span>
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="text-sm hover:opacity-60 transition-opacity lowercase"
              >
                linkedin
              </a>
              <a
                href="#"
                className="text-sm hover:opacity-60 transition-opacity lowercase"
              >
                instagram
              </a>
            </div>
          </div>

          <div className="md:col-start-10 md:col-span-3 flex flex-col gap-3 md:gap-4 mt-8 md:mt-0">
            <span className="text-xs opacity-40">location</span>
            <p className="text-sm leading-relaxed lowercase">
              Denpasar,
              <br />
              Bali
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 opacity-40 text-[9px] md:text-[10px] tracking-widest pt-8 border-t border-ouma-light/5">
          <span>ouma agency © 2026</span>
          <span className="lowercase">privacy policy / credits</span>
        </div>
      </div>
    </footer>
  );
};
