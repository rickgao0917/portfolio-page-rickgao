
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

// Feature flags - should match Timeline component
const FEATURE_FLAGS = {
  BLOG_ENABLED: false,
  RIDDLES_ENABLED: false
};

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
              
              {/* Low-profile navigation links - conditionally show based on feature flags */}
              <div className="flex flex-wrap gap-1 text-sm text-gray-500">
                <button
                  onClick={scrollToExperience}
                  className="px-3 py-1 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                >
                  Experience
                </button>
                <span className="px-2 py-1">•</span>
                <button
                  onClick={scrollToProjects}
                  className="px-3 py-1 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                >
                  Projects
                </button>
                {FEATURE_FLAGS.BLOG_ENABLED && (
                  <>
                    <span className="px-2 py-1">•</span>
                    <button
                      onClick={scrollToBlog}
                      className="px-3 py-1 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                    >
                      Blog
                    </button>
                  </>
                )}
                {FEATURE_FLAGS.RIDDLES_ENABLED && (
                  <>
                    <span className="px-2 py-1">•</span>
                    <button
                      onClick={scrollToRiddles}
                      className="px-3 py-1 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors duration-200"
                    >
                      Math Riddles
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-4 lg:text-right">
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
                <div className="flex items-center justify-end space-x-4">
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
