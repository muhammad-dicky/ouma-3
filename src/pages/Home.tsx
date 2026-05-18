import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProjectShowcase } from '../components/ProjectShowcase';
import { Services } from '../components/Services';
import { LandscapeBanner } from '../components/LandscapeBanner';
import { Clients } from '../components/Clients';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectShowcase />
      <Services />
      <LandscapeBanner />
      <Clients />
    </>
  );
};
