
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-end pb-20 px-8 lg:px-16 relative">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 items-end">
          {/* Main title area */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-2 mb-8">
              <p className="text-sm font-mono tracking-wider text-gray-500 uppercase">
                Portfolio 2024
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight">
                <span className="block">Rick Xiao</span>
                <span className="block font-normal">Heng Gao</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Computer Science student at Yale University specializing in systems programming, 
                data structures, and deep learning applications.
              </p>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="#projects" 
                  className="group flex items-center space-x-2 text-sm font-medium tracking-wide hover:text-gray-600 transition-colors duration-200"
                >
                  <span>View Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
                
                <div className="flex items-center space-x-4">
                  <a href="#" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="mailto:rickgaojobs2026@gmail.com" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Side info */}
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <div className="space-y-4 text-sm text-gray-500">
              <div>
                <p className="font-mono mb-1">Currently</p>
                <p>Undergraduate Researcher</p>
                <p>@ Yale University</p>
              </div>
              
              <div>
                <p className="font-mono mb-1">Location</p>
                <p>New Haven, CT</p>
              </div>
              
              <div>
                <p className="font-mono mb-1">Phone</p>
                <p>347-774-1504</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
