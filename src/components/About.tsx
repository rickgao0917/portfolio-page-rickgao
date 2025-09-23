
import React, { useState } from 'react';
import { ChevronDown, Target, Code, Wrench, BookOpen } from 'lucide-react';

const About = () => {
  const [isLanguagesExpanded, setIsLanguagesExpanded] = useState(false);
  const [isFrameworksExpanded, setIsFrameworksExpanded] = useState(false);
  const [isToolsExpanded, setIsToolsExpanded] = useState(false);

  const languages = ['Python', 'C/C++', 'SQL', 'R', 'KDB+', 'Q', 'JavaScript', 'TypeScript', 'Bash/Shell'];
  
  const frameworks = ['PyTorch', 'NumPy', 'Pandas', 'SciPy', 'React', 'FastAPI', 'Flask', 'SQLAlchemy', 'Node.js', 'Express', 'Socket.io', 'Statsmodels', 'PyVCF'];
  
  const tools = ['Docker', 'AWS', 'Git', 'PostgreSQL', 'MongoDB', 'WebSocket', 'Chrome Extension', 'OAuth 2.0', 'JWT', 'Kubernetes', 'GraphQL', 'Claude', 'Windsurf'];

  const SkillSection = ({ 
    title, 
    skills, 
    isExpanded, 
    onToggle, 
    icon: Icon,
    description 
  }: {
    title: string;
    skills: string[];
    isExpanded: boolean;
    onToggle: () => void;
    icon: React.ElementType;
    description: string;
  }) => (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative z-20">
      {/* Header - Always visible */}
      <div 
        className="p-6 cursor-pointer hover:bg-gray-50/80 transition-colors duration-200"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`} />
        </div>
        <p className="text-gray-600 text-sm mt-2">
          {description}
        </p>
      </div>

      {/* Expandable content */}
      <div className={`transition-all duration-300 ease-in-out ${
        isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className="px-6 pb-6 border-t border-gray-50">
          <div className="pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="p-3 bg-gray-50/80 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-white/90 transition-colors duration-200"
              >
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-8 lg:px-16">
      {/* Section separator line */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="w-1/3 h-px bg-gray-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-sm text-gray-400">01</span>
              <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
                About
              </h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-8">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg md:text-xl font-light">
                  I'm a Computer Science student at Yale University with a passion for 
                  systems programming, data structures, and deep learning applications.
                </p>
                
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-gray-200 relative z-20">
                  <h3 className="text-lg font-semibold mb-4">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">Yale University</p>
                    <p className="text-gray-600">B.S. in Computer Science, Major GPA: 3.7</p>
                    <p className="text-sm text-gray-500">Aug. 2022 - </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Relevant Courses: Systems Programming, Data Structures, Deep Learning Theory and Applications, Bayesian Statistics
                    </p>
                  </div>
                </div>
                
                <p>
                  My experience spans from Fintech internships to research
                  in computational biology and deep learning. I enjoy solving challenging problems spanning all of tech.
                </p>
              </div>
              
              {/* Technical Skills sections */}
              <div className="pt-8 border-t border-gray-200">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Skills</h3>
                  <p className="text-gray-600">My technical expertise across different areas</p>
                </div>
                
                <div className="space-y-6">
                  <SkillSection
                    title="Programming Languages"
                    skills={languages}
                    isExpanded={isLanguagesExpanded}
                    onToggle={() => setIsLanguagesExpanded(!isLanguagesExpanded)}
                    icon={Code}
                    description="Core programming languages I use for development"
                  />
                  
                  <SkillSection
                    title="Frameworks & Libraries"
                    skills={frameworks}
                    isExpanded={isFrameworksExpanded}
                    onToggle={() => setIsFrameworksExpanded(!isFrameworksExpanded)}
                    icon={BookOpen}
                    description="Frameworks and libraries I work with regularly"
                  />
                  
                  <SkillSection
                    title="Tools & Platforms"
                    skills={tools}
                    isExpanded={isToolsExpanded}
                    onToggle={() => setIsToolsExpanded(!isToolsExpanded)}
                    icon={Wrench}
                    description="Development tools, platforms, and technologies I use"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
