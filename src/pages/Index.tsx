
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';
import AnimatedDotsBackground from '@/components/AnimatedDotsBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global animated dots background */}
      <AnimatedDotsBackground 
        dotCount={100}
        connectionDistance={150}
        speed={0.4}
        maxOpacity={0.6}
      />
      
      {/* Content sections with background covering the dots */}
      <div className="relative z-10">
        <Hero />
        <div className="bg-white">
          <About />
          <Timeline />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Index;
