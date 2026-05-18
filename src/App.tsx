/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'motion/react';
import { SmoothScroll } from './components/SmoothScroll';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const scrollWithRetry = (attempts = 0) => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        
        if (element) {
          // Add a slight delay to ensure everything is settled
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
          return true;
        }

        if (attempts < 10) {
          setTimeout(() => scrollWithRetry(attempts + 1), 500);
        }
        return false;
      };

      scrollWithRetry();
    }
    
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
    
    return () => clearTimeout(refreshTimer);
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <main className="relative min-h-screen bg-ouma-light selection:bg-ouma-dark selection:text-ouma-light cursor-none" data-theme="light">
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            onAnimationComplete={() => {
              ScrollTrigger.refresh();
            }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </main>
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
