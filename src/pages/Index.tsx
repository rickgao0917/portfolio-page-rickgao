
import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Timeline from '@/components/Timeline';
import AnimatedDotsBackground from '@/components/AnimatedDotsBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global animated dots background - covers entire page */}
      <div className="fixed inset-0 z-0">
        <AnimatedDotsBackground 
          dotCount={120}
          connectionDistance={150}
          speed={0.4}
          maxOpacity={0.6}
        />
      </div>
      
      {/* Content sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Timeline />
      </div>
    </div>
  );
};

export default Index;
