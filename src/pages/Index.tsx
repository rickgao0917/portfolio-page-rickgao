
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
        dotCount={120}
        connectionDistance={150}
        speed={0.4}
        maxOpacity={0.6}
      />
      
      {/* Content sections - dots visible except under text/boxes */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
