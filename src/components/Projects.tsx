
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Full Stack Development',
      year: '2024',
      description: 'Modern e-commerce solution built with React, Node.js, and Stripe integration. Features real-time inventory management and advanced analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'Design System',
      category: 'UI/UX & Development',
      year: '2023',
      description: 'Comprehensive design system for a fintech startup, including component library, documentation, and implementation guidelines.',
      tech: ['React', 'Storybook', 'Figma', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
    },
    {
      title: 'Data Visualization Dashboard',
      category: 'Frontend Development',
      year: '2023',
      description: 'Interactive dashboard for IoT data visualization with real-time updates and custom chart components.',
      tech: ['Vue.js', 'D3.js', 'WebSocket', 'Python'],
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-24 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          {/* Section header */}
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-sm text-gray-400">02</span>
              <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
                Selected Work
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                A collection of projects showcasing my approach to solving 
                complex problems through thoughtful design and clean code.
              </p>
            </div>
          </div>
          
          {/* Projects */}
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-20">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="grid grid-cols-12 gap-8 items-start">
                    {/* Project image */}
                    <div className="col-span-12 md:col-span-6 order-2 md:order-1">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    
                    {/* Project info */}
                    <div className="col-span-12 md:col-span-6 order-1 md:order-2 space-y-4">
                      <div className="space-y-2">
                        <p className="text-sm font-mono text-gray-500 tracking-wider">
                          {project.category} — {project.year}
                        </p>
                        <h3 className="text-2xl font-light">{project.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center space-x-4 pt-2">
                        <a 
                          href="#" 
                          className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors duration-200"
                        >
                          <span>View Project</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a 
                          href="#" 
                          className="flex items-center space-x-2 text-sm hover:text-gray-600 transition-colors duration-200"
                        >
                          <span>Code</span>
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
