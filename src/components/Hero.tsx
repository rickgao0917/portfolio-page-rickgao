
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[100svh] flex items-end pb-12 sm:pb-20 pt-24 px-5 sm:px-8 lg:px-16 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-2 mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight">
                <span className="block">Rick Gao</span>
              </h1>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-4 lg:text-right mt-4 lg:mt-0">
            <div className="space-y-4 text-sm text-gray-500">
              <div>
                <p className="font-mono mb-1">Currently</p>
                <p>CEO</p>
                <p>@ <a href="https://alkera.ai" className="underline underline-offset-2 hover:text-gray-700">Alkera AI</a></p>
              </div>
              
              <div>
                <p className="font-mono mb-1">Location</p>
                <p>San Francisco, CA</p>
              </div>
              
              <div>
                <p className="font-mono mb-1">Phone</p>
                <p>201-304-7860</p>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-start lg:justify-end space-x-4 -ml-2 lg:ml-0">
                  <a href="https://github.com/rickgao0917" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/rgao09" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="https://x.com/stochasticClown" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="mailto:rickgao.contact@gmail.com" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
