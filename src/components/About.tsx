import React from 'react';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'C/C++', 'SQL', 'R', 'KDB+', 'Q', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['PyTorch', 'NumPy', 'Pandas', 'SciPy', 'React', 'FastAPI', 'Flask', 'SQLAlchemy', 'Node.js', 'Express', 'Statsmodels', 'PyVCF']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Docker', 'AWS', 'Git', 'PostgreSQL', 'MongoDB', 'WebSocket', 'OpenAI API', 'GitHub']
    }
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
                  I'm a Computer Science student at Yale University with a passion for 
                  systems programming, data structures, and deep learning applications.
                </p>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">Yale University</p>
                    <p className="text-gray-600">B.S. in Computer Science, Major GPA: 3.7</p>
                    <p className="text-sm text-gray-500">Aug. 2022 - Present</p>
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
              
              {/* Skills grid by categories */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-sm font-mono text-gray-500 mb-6 tracking-wider uppercase">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-4">
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                        {category.title}
                      </h4>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div 
                            key={skillIndex}
                            className="p-3 bg-white rounded-lg border border-gray-100 hover:border-gray-200 transition-colors duration-200"
                          >
                            <span className="text-sm font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
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
