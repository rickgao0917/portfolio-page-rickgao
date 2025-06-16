
import React from 'react';

const About = () => {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Node.js',
    'Python',
    'UI/UX Design',
    'Three.js',
    'AWS & Docker',
    'GraphQL'
  ];

  return (
    <section className="py-24 px-8 lg:px-16 bg-gray-50">
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
                  I'm a creative developer with 6+ years of experience building 
                  digital products that live at the intersection of design and technology.
                </p>
                
                <p>
                  My journey began in graphic design, which taught me the importance 
                  of visual hierarchy, typography, and user experience. This foundation 
                  influences every line of code I write today.
                </p>
                
                <p>
                  I specialize in creating performant web applications with React and 
                  modern JavaScript, while maintaining a keen eye for design details 
                  and user interaction patterns.
                </p>
              </div>
              
              {/* Skills grid */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-sm font-mono text-gray-500 mb-6 tracking-wider uppercase">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div 
                      key={index}
                      className="p-3 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
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
