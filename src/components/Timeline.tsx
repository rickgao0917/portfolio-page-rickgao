
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

  const experienceData = [
    {
      type: 'experience',
      title: 'Institutional Service Intern',
      company: 'Verition Fund Management LLC',
      location: 'New York, NY',
      period: 'May 2025',
      description: '',
      achievements: [],
      responsibilities: [],
      tech: []
    },
    {
      type: 'experience',
      title: 'Treasury/SWE Intern',
      company: 'Verition Fund Management LLC',
      location: 'New York, NY',
      period: 'May 2024 - May 2025',
      description: 'Developed tools for treasury operations, achieving financial and performance improvements.',
      achievements: [
          'Optimized financial systems and saved 10+ man-hours daily and thousands of dollars daily',
          'Risk management system providing novel capabilities for risk forecasting'
      ],
      responsibilities: [
        'Full-stack development for treasury management systems',
        'Algorithm design for trade optimization',
        'Database design and implementation with PostgreSQL',
        'Performance optimization and risk analysis automation'
      ],
      tech: ['Python', 'AWS', 'SQLAlchemy', 'React', 'FastAPI', 'NumPy', 'SciPy', 'Flask', 'PostgreSQL']
    },
    {
      type: 'experience',
      title: 'Undergraduate Researcher',
      company: 'Gerstein Laboratory — Yale University',
      location: 'New Haven, CT',
      period: 'Jan. 2023 - May 2024',
      description: 'Conducted research in computational biology and deep learning, focusing on code generation and bioinformatics.',
      achievements: [
        'Co-authored research paper (ISMB 2024) in closed-domain code generation and benchmarking alongside Google Brain researcher',
        'Wrote custom parser for GitHub repositories in Python, deployed through Docker and AWS',
        'Parsed and analyzed 100GB of genomic information and metadata in SciPy, NumPy and PyVCF'
      ],
      responsibilities: [
      ],
      tech: ['Python', 'PyTorch', 'Docker', 'AWS', 'SciPy', 'NumPy', 'PyVCF']
    },
    {
      type: 'experience',
      title: 'Technical Project Management Intern',
      company: 'Tiger College Advising Team',
      location: 'Remote',
      period: 'May 2023 - Aug. 2023',
      description: 'Led technical projects and database development for educational consulting services.',
      achievements: [
      ],
      responsibilities: [
        'Technical project leadership and management',
        'Database architecture and system design',
        'Team coordination and volunteer management',
        'Cost optimization and system consolidation'
      ],
      tech: ['Python', 'MongoDB', 'Deep Learning']
    }
  ];

  const projectData = [
    {
      type: 'project',
      title: 'Prediction Market Arbitrage/Market-Making',
      category: 'Python, C++, Statsmodels, Research',
      period: 'May 2025 - Present',
      description: 'Developed fully featured event-driven backtester in C++ and BDA, including market impact analysis and PCA.',
      features: [
        'Live trading since May 2025, +22% since inception and largest drawdown of 8%',
        'Event-driven backtesting system built in C++',
        'Market impact analysis and principal component analysis',
        'Real-time trading implementation'
      ],
      impact: [
      ],
      tech: ['Python', 'C++', 'Statsmodels'],
      links: {
        demo: '#',
        github: 'https://github.com/rickgao0917/kalshi_public'
      }
    },
    {
      type: 'project',
      title: 'Blacksmith: Mercor Hackathon',
      category: 'Python, Javascript',
      period: 'March 2025',
      description: 'Designed a multi-modal reasoning model with GRPO and tree-of-thought with recursive tool creation and use.',
      features: [
        'Multi-modal reasoning capabilities',
        'GRPO (Generalized Reward Policy Optimization) implementation',
        'Tree-of-thought reasoning with recursive tool creation',
        'Advanced problem-solving through recursive methodologies'
      ],
      impact: [
      ],
      tech: ['Python', 'Javascript', 'GRPO', 'Multi-modal AI'],
      links: {
        demo: '#',
        github: 'https://github.com/lilbillybiscuit/blacksmith'
      }
    },
    {
      type: 'project',
      title: 'BioCoder',
      category: 'Python, PyTorch, ML',
      period: 'May 2023 - May 2024',
      description: 'Co-authored bioinformatics code generation benchmark consisting of approximately 500 novel bioinformatics-adjacent functions.',
      features: [
        'Comprehensive bioinformatics code generation benchmark',
        'Novel dataset of 500+ bioinformatics functions',
        'Evidence-based comparison of domain-specific vs general models',
        'Advanced evaluation metrics for code generation quality'
      ],
      impact: [
      ],
      tech: ['Python', 'PyTorch', 'ML', 'Bioinformatics'],
      links: {
        demo: '#',
        github: 'https://academic.oup.com/bioinformatics/article/40/Supplement_1/i266/7700865'
      }
    }
  ];

  // Filter projects to only include those with valid links
  const validProjectData = projectData.filter(project => {
    const hasValidDemo = project.links?.demo && project.links.demo !== '#';
    const hasValidGithub = project.links?.github && project.links.github !== '#';
    return hasValidDemo || hasValidGithub;
  });

  const renderTimelineItem = (item: any, index: number, sectionType: string) => {
    const isExpanded = expandedItems.includes(index);
    const itemKey = `${sectionType}-${index}`;
    
    return (
      <div key={itemKey} className="group">
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
                {item.tech.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                      <Target className="w-4 h-4 mr-2 text-gray-600" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech: string, techIndex: number) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full border hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements/Features */}
                {(item.type === 'experience' ? item.achievements : item.features)?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-gray-600" />
                      {item.type === 'experience' ? 'Key Achievements' : 'Key Features'}
                    </h4>
                    <ul className="space-y-2">
                      {(item.type === 'experience' ? item.achievements : item.features)?.map((achievement: string, achIndex: number) => (
                        <li key={achIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Responsibilities/Impact */}
                {(item.type === 'experience' ? item.responsibilities : item.impact)?.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-600" />
                      {item.type === 'experience' ? 'Key Responsibilities' : 'Impact & Results'}
                    </h4>
                    <ul className="space-y-2">
                      {(item.type === 'experience' ? item.responsibilities : item.impact)?.map((resp: string, respIndex: number) => (
                        <li key={respIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project links */}
                {item.type === 'project' && item.links && (
                  <div className="pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-4">
                      {item.links.demo && item.links.demo !== '#' && (
                        <a 
                          href={item.links.demo} 
                          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-50 px-3 py-2 rounded-md"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Project</span>
                        </a>
                      )}
                      {item.links.github && item.links.github !== '#' && (
                        <a 
                          href={item.links.github} 
                          className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-50 px-3 py-2 rounded-md"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Experience Section */}
        <div className="mb-16">
          <span className="font-mono text-sm text-gray-400">02</span>
          <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
            Experience
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            My professional journey in financial technology, research, and technical development.
          </p>
        </div>

        <div className="space-y-8 mb-24">
          {experienceData.map((item, index) => renderTimelineItem(item, index, 'experience'))}
        </div>

        {/* Projects Section */}
        {validProjectData.length > 0 && (
          <>
            <div className="mb-16">
              <span className="font-mono text-sm text-gray-400">03</span>
              <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
                Projects
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl">
                Selected projects spanning trading systems, AI research, and bioinformatics.
              </p>
            </div>

            <div className="space-y-8">
              {validProjectData.map((item, index) => renderTimelineItem(item, index, 'project'))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Timeline;
