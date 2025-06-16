
import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, Github, ChevronDown, Users, Award, Target } from 'lucide-react';

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const timelineData = [
    {
      type: 'experience',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.',
      achievements: [
        'Led a team of 5 developers to deliver 3 major product releases',
        'Reduced application load time by 40% through performance optimization',
        'Implemented CI/CD pipeline that improved deployment efficiency by 60%',
        'Mentored 8 junior developers, with 100% promotion rate within 18 months'
      ],
      responsibilities: [
        'Architecture design and technical decision making',
        'Code reviews and maintaining coding standards',
        'Cross-functional collaboration with design and product teams',
        'Performance monitoring and optimization'
      ],
      tech: ['React', 'TypeScript', 'Next.js', 'AWS', 'Docker', 'GraphQL']
    },
    {
      type: 'project',
      title: 'E-commerce Platform',
      category: 'Full Stack Development',
      period: '2024',
      description: 'Modern e-commerce solution built with React, Node.js, and Stripe integration. Features real-time inventory management and advanced analytics.',
      features: [
        'Real-time inventory tracking with WebSocket connections',
        'Advanced analytics dashboard with custom visualizations',
        'Multi-payment gateway integration (Stripe, PayPal, Apple Pay)',
        'Automated email marketing campaigns with 25% conversion rate',
        'Mobile-first responsive design with 98% mobile performance score'
      ],
      impact: [
        '150% increase in user engagement',
        '200% improvement in conversion rate',
        'Reduced cart abandonment by 35%',
        'Generated $2M+ in revenue within first 6 months'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
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
      achievements: [
        'Developed 15+ responsive web applications from scratch',
        'Improved user experience metrics by 45% through A/B testing',
        'Collaborated with design team to create company\'s first design system',
        'Reduced development time by 30% through component reusability'
      ],
      responsibilities: [
        'Frontend development using Vue.js and React',
        'API integration and state management',
        'User experience optimization and testing',
        'Collaboration with remote international team'
      ],
      tech: ['Vue.js', 'JavaScript', 'SCSS', 'Firebase', 'Jest', 'Cypress']
    },
    {
      type: 'project',
      title: 'Design System',
      category: 'UI/UX & Development',
      period: '2023',
      description: 'Comprehensive design system for a fintech startup, including component library, documentation, and implementation guidelines.',
      features: [
        '50+ reusable React components with TypeScript support',
        'Comprehensive Storybook documentation with interactive examples',
        'Automated visual regression testing with Chromatic',
        'Figma integration with design tokens synchronization',
        'NPM package with 500+ weekly downloads'
      ],
      impact: [
        '60% reduction in development time for new features',
        '90% consistency across all product touchpoints',
        'Adopted by 12 development teams across the organization',
        'Reduced design-to-development handoff time by 40%'
      ],
      tech: ['React', 'Storybook', 'Figma', 'TypeScript', 'Sass', 'Rollup'],
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
      achievements: [
        'Delivered 25+ client websites on time and within budget',
        'Increased agency\'s development speed by 20% through workflow optimization',
        'Learned 5+ new technologies and frameworks in first year',
        'Received "Outstanding Newcomer" award for exceptional performance'
      ],
      responsibilities: [
        'Client website development and maintenance',
        'WordPress theme customization and plugin development',
        'Performance optimization and SEO implementation',
        'Client communication and project management support'
      ],
      tech: ['HTML/CSS', 'JavaScript', 'WordPress', 'PHP', 'MySQL', 'jQuery']
    },
    {
      type: 'project',
      title: 'Data Visualization Dashboard',
      category: 'Frontend Development',
      period: '2023',
      description: 'Interactive dashboard for IoT data visualization with real-time updates and custom chart components.',
      features: [
        'Real-time data streaming with WebSocket connections',
        'Custom D3.js visualizations for complex data sets',
        'Interactive filtering and drill-down capabilities',
        'Responsive design optimized for tablets and mobile devices',
        'Export functionality for reports in multiple formats (PDF, Excel, CSV)'
      ],
      impact: [
        'Reduced data analysis time by 70% for end users',
        'Enabled real-time decision making for 500+ daily active users',
        'Increased operational efficiency by 35%',
        'Won "Best Innovation Award" at company hackathon'
      ],
      tech: ['Vue.js', 'D3.js', 'WebSocket', 'Python', 'FastAPI', 'PostgreSQL'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section className="py-24 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
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
          
          <div className="space-y-8">
            {timelineData.map((item, index) => {
              const isExpanded = expandedItems.includes(index);
              return (
                <div key={index} className="relative flex items-start group">
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex-shrink-0 w-4 h-4 mt-3 rounded-full border-2 border-white shadow-sm transition-all duration-300 ${
                    item.type === 'experience' ? 'bg-blue-500 group-hover:bg-blue-600' : 'bg-green-500 group-hover:bg-green-600'
                  }`}>
                    <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      item.type === 'experience' ? 'bg-blue-500' : 'bg-green-500'
                    } animate-ping`}></div>
                  </div>
                  
                  {/* Flag-style content */}
                  <div className="ml-8 flex-1 pb-4">
                    <div className={`bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'shadow-lg' : ''
                    }`}>
                      {/* Header - Always visible */}
                      <div 
                        className="p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => toggleExpand(index)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                              <div className={`w-2 h-2 rounded-full ${
                                item.type === 'experience' ? 'bg-blue-400' : 'bg-green-400'
                              }`}></div>
                            </div>
                            {item.type === 'experience' ? (
                              <div className="flex items-center space-x-4 mb-2">
                                <span className="text-gray-700 font-medium">{item.company}</span>
                                <div className="flex items-center space-x-1 text-sm text-gray-500">
                                  <MapPin className="w-3 h-3" />
                                  <span>{item.location}</span>
                                </div>
                              </div>
                            ) : (
                              <span className="text-gray-600 text-sm mb-2 block">{item.category}</span>
                            )}
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex items-center space-x-3 flex-shrink-0 ml-6">
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span>{item.period}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`} />
                          </div>
                        </div>
                      </div>

                      {/* Expandable content */}
                      <div className={`transition-all duration-300 ease-in-out ${
                        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}>
                        <div className="px-6 pb-6 border-t border-gray-50">
                          <div className="pt-4 space-y-6">
                            {/* Tech stack */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                <Target className="w-4 h-4 mr-2 text-gray-600" />
                                Technologies Used
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {item.tech.map((tech, techIndex) => (
                                  <span 
                                    key={techIndex}
                                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border hover:bg-gray-200 transition-colors duration-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Achievements/Features */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                <Award className="w-4 h-4 mr-2 text-gray-600" />
                                {item.type === 'experience' ? 'Key Achievements' : 'Key Features'}
                              </h4>
                              <ul className="space-y-2">
                                {(item.type === 'experience' ? item.achievements : item.features)?.map((achievement, achIndex) => (
                                  <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Responsibilities/Impact */}
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                <Users className="w-4 h-4 mr-2 text-gray-600" />
                                {item.type === 'experience' ? 'Key Responsibilities' : 'Impact & Results'}
                              </h4>
                              <ul className="space-y-2">
                                {(item.type === 'experience' ? item.responsibilities : item.impact)?.map((resp, respIndex) => (
                                  <li key={respIndex} className="text-sm text-gray-600 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {resp}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Project links */}
                            {item.type === 'project' && item.links && (
                              <div className="pt-2 border-t border-gray-100">
                                <div className="flex items-center space-x-4">
                                  <a 
                                    href={item.links.demo} 
                                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-50 px-3 py-2 rounded-md"
                                  >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>View Project</span>
                                  </a>
                                  <a 
                                    href={item.links.github} 
                                    className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-50 px-3 py-2 rounded-md"
                                  >
                                    <Github className="w-4 h-4" />
                                    <span>View Code</span>
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
