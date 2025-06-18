
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, BookOpen, Brain } from 'lucide-react';

const Hero = () => {
  const scrollToExperience = () => {
    const experienceSection = document.querySelector('section:nth-of-type(3)'); // Timeline is the 3rd section (Hero, About, Timeline)
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    // Projects are within the Timeline component, so we need to scroll to a specific element
    const projectsSection = document.querySelector('[data-section="projects"]');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to timeline and let user find projects
      const timelineSection = document.querySelector('section:nth-of-type(3)');
      if (timelineSection) {
        timelineSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToBlog = () => {
    const blogSection = document.querySelector('[data-section="blog"]');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRiddles = () => {
    const riddlesSection = document.querySelector('[data-section="riddles"]');
    if (riddlesSection) {
      riddlesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-end pb-20 px-8 lg:px-16 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-2 mb-8">
              <span className="font-mono text-sm text-gray-400">00</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-none tracking-tight">
                <span className="block">Rick Gao</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                Computer Science student at Yale University interested in software engineering and quantitative finance.
              </p>
              
              {/* Redesigned navigation links in a 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 max-w-md">
                <button 
                  onClick={scrollToExperience}
                  className="group flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  <span className="text-sm font-medium">Experience</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button 
                  onClick={scrollToProjects}
                  className="group flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  <span className="text-sm font-medium">Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button 
                  onClick={scrollToBlog}
                  className="group flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-sm font-medium">Blog</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button 
                  onClick={scrollToRiddles}
                  className="group flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span className="text-sm font-medium">Riddles</span>
                  </div>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <div className="space-y-4 text-sm text-gray-500">
              <div>
                <p className="font-mono mb-1">Currently</p>
                <p>Intern</p>
                <p>@ Verition Fund Management</p>
              </div>
              
              <div>
                <p className="font-mono mb-1">Location</p>
                <p>New York, NY</p>
              </div>
              
              <div>
                <p className="font-mono mb-1">Phone</p>
                <p>347-774-1504</p>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-end space-x-4">
                  <a href="https://github.com/rickgao0917" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com/in/rgao09" className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200">
                    <Linkedin className="w-4 h-4" />
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
