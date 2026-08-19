import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'work', path: '/#work' },
    { label: 'services', path: '/#services' },
    { label: 'about', path: '/#about' },
    { label: 'contact', path: '/#contact' },
  ];

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, path: string) => {
    setIsOpen(false);
    if (path.startsWith('/#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-16 py-6 md:py-8 pointer-events-none">
        <div className="pointer-events-auto">
          <Link 
            to="/" 
            className={`font-sans text-xl md:text-2xl font-bold tracking-tight transition-colors duration-500 ${isOpen ? 'text-ouma-light' : 'text-ouma-dark'}`}
            onClick={() => {
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ouma
          </Link>
        </div>
        
        <div className="flex items-center gap-6 md:gap-12 pointer-events-auto">
          <a 
            href="#contact" 
            className={`text-xs font-medium relative group hidden md:block transition-colors duration-500 ${isOpen ? 'text-ouma-light' : 'text-ouma-dark'}`}
            onClick={(e) => handleNav(e, '/#contact')}
          >
            <span>contact</span>
            <span className={`absolute -bottom-1 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${isOpen ? 'bg-ouma-light' : 'bg-ouma-dark'}`}></span>
          </a>
          <button 
            onClick={toggleMenu}
            className="flex flex-col gap-1.5 cursor-pointer group z-50 p-2 -mr-2"
          >
            <div className={`w-6 h-[1.5px] transition-all duration-500 ${isOpen ? 'bg-ouma-light rotate-45 translate-y-[4px]' : 'bg-ouma-dark'}`}></div>
            <div className={`w-6 h-[1.5px] transition-all duration-500 ${isOpen ? 'bg-ouma-light -rotate-45 -translate-y-[4px]' : 'bg-ouma-dark'}`}></div>
          </button>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 bg-ouma-dark z-40 flex flex-col justify-center px-6 md:px-16 underline-offset-8"
            data-theme="dark"
          >
            <div className="flex flex-col gap-4 md:gap-8">
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => handleNav(e, item.path)}
                    className="text-5xl md:text-8xl font-bold text-ouma-light lowercase hover:italic tracking-tighter"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-6 md:left-16 flex gap-8 text-ouma-light text-xs uppercase tracking-widest font-mono"
            >
              <a
                href="https://www.instagram.com/oumacreatives?igsh=czV4d2plbHJrbm1h&igsi=czV4d2plbHJrbm1h"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-100 transition-opacity"
              >
                instagram
              </a>
              <span>twitter</span>
              <span>linkedin</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
