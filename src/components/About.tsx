
import React from 'react';

const About = () => {
  return (
    <section className="py-12 sm:py-16 px-5 sm:px-8 lg:px-16">
      {/* Section separator line */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="w-1/3 h-px bg-gray-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-2xl lg:text-3xl font-light mb-6">
                About
              </h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-8">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-gray-200 relative z-20">
                  <h3 className="text-lg font-semibold mb-4">Education</h3>
                  <div className="space-y-2">
                    <p className="font-medium">Yale University</p>
                    <p className="text-sm text-gray-500">On leave</p>
                    <p className="text-gray-600">B.S. in Computer Science</p>
                    <p className="text-sm text-gray-500">Aug. 2022 - </p>
                  </div>
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
