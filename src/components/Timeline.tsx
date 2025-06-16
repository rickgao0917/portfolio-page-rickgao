
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
      title: 'Incoming Front-Office (Institutional Services) Intern',
      company: 'Verizon Fund Management LLC',
      location: 'New York, NY',
      period: 'May 2025',
      description: 'Upcoming internship in institutional services focusing on front-office operations.',
      achievements: [],
      responsibilities: [],
      tech: []
    },
    {
      type: 'experience',
      title: 'Treasury/SWE Intern',
      company: 'Verizon Fund Management LLC',
      location: 'New York, NY',
      period: 'May 2024 - May 2025',
      description: 'Developed trading systems and optimization tools for treasury operations, achieving significant performance improvements.',
      achievements: [
        'Developed end-to-end pipeline for daily cash management optimizations using Python, AWS, SQLAlchemy and React',
        'Saved the firm thousands daily in sub-optimal interest rate payment amounts',
        'Developed full-stack stock allocation optimizer using FastAPI for backend services and modern front-end',
        'Achieved projected savings of $500k per day and reducing manual effort by 3 man-hours daily',
        'Designed and implemented complete trade execution system for treasury operations using Python, NumPy, SciPy, React, Flask, and PostgreSQL',
        'Reduced non-book overhead by 80% and reducing operational efficiency by 75 basis points',
        'Automated daily risk reportings that resulted in 80% speedup through Python and vectorized calculations using NumPy'
      ],
      responsibilities: [
        'Full-stack development for treasury management systems',
        'Algorithm design for trade execution and optimization',
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
        'Implemented Transformer-based deep-learning model in Python and PyTorch that outperforms state-of-the-art results in DNA mutation detection by 10%',
        'Wrote custom parser for GitHub repositories in Python, deployed through Docker and AWS',
        'Parsed and analyzed 100GB of genomic information and metadata in SciPy, NumPy and PyVCF utilizing random-forest classification'
      ],
      responsibilities: [
        'Research in computational biology and machine learning',
        'Development of bioinformatics tools and parsers',
        'Genomic data analysis and processing',
        'Academic paper writing and research collaboration'
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
        'Designed and implemented deep-learning model for pricing guidance in Python resulting in new pricing model',
        'Generated $50,000 revenue across 5 years',
        'Led team of 3 volunteers and developed new database system utilizing MongoDB and Python with 99.95% uptime',
        'Resulted in consolidation of 4 disjoint databases, saving over $200/month in service fees'
      ],
      responsibilities: [
        'Technical project leadership and management',
        'Database architecture and system design',
        'Team coordination and volunteer management',
        'Cost optimization and system consolidation'
      ],
      tech: ['Python', 'MongoDB', 'Deep Learning']
    },
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
        '+22% returns since inception',
        'Maximum drawdown limited to 8%',
        'Successful live trading implementation',
        'Advanced quantitative analysis capabilities'
      ],
      tech: ['Python', 'C++', 'Statsmodels'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      type: 'project',
      title: 'Bond: End-to-End Agentic Intelligence/Equity Research Platform',
      category: 'Python, PyTorch',
      period: 'May 2025 - Present',
      description: 'Graph network implementation to determine relevancy of sources for agent research in geopolitical environment and labor cost analysis.',
      features: [
        'RAG + Vector database to ensure data consistency and accurate source citation',
        'Custom ensemble model of Llama, Claude DeepSeek + GRPO, NLP and sentiment analysis models',
        'Tuned on multimodal data, video, news filings and pricing data',
        'Advanced geopolitical and labor cost analysis capabilities'
      ],
      impact: [
        'Enhanced research accuracy through multi-source validation',
        'Improved decision-making through sentiment analysis',
        'Comprehensive data integration across multiple modalities',
        'Advanced AI-driven research capabilities'
      ],
      tech: ['Python', 'PyTorch', 'RAG', 'Vector Database', 'NLP'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      type: 'project',
      title: 'IMC Prosperity 3 Top 1% (10,000+ entries)',
      category: 'Trading, Research',
      period: 'April 2025',
      description: 'Developed custom package integrating data cleaning, processing, and exploration in C++, Python.',
      features: [
        'Custom trading package with data processing capabilities',
        'Implemented custom backtester with adversarial trading simulations',
        'Bayesian inferencing and Monte Carlo simulations for manual trading rounds',
        'Top 1% performance among 10,000+ participants'
      ],
      impact: [
        'Top 1% ranking in international competition',
        'Advanced algorithmic trading strategies',
        'Robust backtesting and simulation framework',
        'Superior risk management implementation'
      ],
      tech: ['C++', 'Python', 'Bayesian Analysis', 'Monte Carlo'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      type: 'project',
      title: 'Sidekick — Agentic Job Applier',
      category: 'ML, NLP, Python',
      period: 'March 2025 - Present',
      description: 'Automatically tracks, applies and schedules interviews for jobs, universal compatibility across ATS.',
      features: [
        'Universal ATS compatibility for job applications',
        'Custom ensemble model + structured I/O ensured quality of output',
        'Automated interview scheduling and tracking',
        'Intelligent job matching and application optimization'
      ],
      impact: [
        'Streamlined job application process',
        'Universal compatibility across platforms',
        'Automated workflow management',
        'Enhanced application success rates'
      ],
      tech: ['Python', 'ML', 'NLP'],
      links: {
        demo: '#',
        github: '#'
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
        'Innovative approach to multi-modal AI reasoning',
        'Advanced recursive problem-solving capabilities',
        'Successful hackathon implementation',
        'Novel integration of multiple AI techniques'
      ],
      tech: ['Python', 'Javascript', 'GRPO', 'Multi-modal AI'],
      links: {
        demo: '#',
        github: '#'
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
        'Provided evidence that smaller, domain-specific models outperform general foundation models',
        'Contributed to academic research in computational biology',
        'Enhanced understanding of specialized AI applications',
        'Established new benchmarks for bioinformatics code generation'
      ],
      tech: ['Python', 'PyTorch', 'ML', 'Bioinformatics'],
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
            Experience & Projects
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            A chronological journey through my professional experience in financial technology, 
            research, and innovative projects spanning trading systems, AI, and bioinformatics.
          </p>
        </div>

        <div className="space-y-8">
          {timelineData.map((item, index) => {
            const isExpanded = expandedItems.includes(index);
            return (
              <div key={index} className="group">
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
                        )}

                        {/* Achievements/Features */}
                        {(item.type === 'experience' ? item.achievements : item.features)?.length > 0 && (
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
                        )}

                        {/* Responsibilities/Impact */}
                        {(item.type === 'experience' ? item.responsibilities : item.impact)?.length > 0 && (
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
                        )}

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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
