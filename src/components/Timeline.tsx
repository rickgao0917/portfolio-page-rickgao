
import React from 'react';
import { Calendar, MapPin, ExternalLink, Github } from 'lucide-react';

const Timeline = () => {
  const timelineData = [
    {
      type: 'experience',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.',
      tech: ['React', 'TypeScript', 'Next.js', 'AWS']
    },
    {
      type: 'project',
      title: 'E-commerce Platform',
      category: 'Full Stack Development',
      period: '2024',
      description: 'Modern e-commerce solution built with React, Node.js, and Stripe integration. Features real-time inventory management and advanced analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      type: 'experience',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Built responsive web applications and collaborated with design teams to create seamless user experiences.',
      tech: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase']
    },
    {
      type: 'project',
      title: 'Design System',
      category: 'UI/UX & Development',
      period: '2023',
      description: 'Comprehensive design system for a fintech startup, including component library, documentation, and implementation guidelines.',
      tech: ['React', 'Storybook', 'Figma', 'TypeScript'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      type: 'experience',
      title: 'Junior Developer',
      company: 'Digital Agency Co.',
      location: 'New York, NY',
      period: '2018 - 2020',
      description: 'Developed client websites and learned modern web development practices in a fast-paced agency environment.',
      tech: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP']
    },
    {
      type: 'project',
      title: 'Data Visualization Dashboard',
      category: 'Frontend Development',
      period: '2023',
      description: 'Interactive dashboard for IoT data visualization with real-time updates and custom chart components.',
      tech: ['Vue.js', 'D3.js', 'WebSocket', 'Python'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section className="py-24 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <span className="font-mono text-sm text-gray-400">03</span>
          <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
            Experience & Work
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            A chronological journey through my professional experience and key projects that showcase my growth as a developer.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline dot */}
                <div className={`relative z-10 flex-shrink-0 w-4 h-4 mt-2 rounded-full border-2 border-white shadow-sm ${
                  item.type === 'experience' ? 'bg-blue-500' : 'bg-green-500'
                }`}>
                  <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    item.type === 'experience' ? 'bg-blue-500' : 'bg-green-500'
                  } animate-ping`}></div>
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1 pb-8">
                  <div className="bg-white rounded-lg border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                        {item.type === 'experience' ? (
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-gray-600 font-medium">{item.company}</span>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <MapPin className="w-3 h-3" />
                              <span>{item.location}</span>
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-600 text-sm">{item.category}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-500 flex-shrink-0 ml-4">
                        <Calendar className="w-3 h-3" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-gray-50 text-gray-700 rounded border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {item.type === 'project' && item.links && (
                      <div className="flex items-center space-x-4">
                        <a 
                          href={item.links.demo} 
                          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>View Project</span>
                        </a>
                        <a 
                          href={item.links.github} 
                          className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          <Github className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
