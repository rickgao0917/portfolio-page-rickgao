
import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import BlogSection from './BlogSection';
import RiddleSection from './RiddleSection';
import { experienceData, projectData, blogSection, riddleSection } from '../data/timelineData';

// Feature flags
const FEATURE_FLAGS = {
  BLOG_ENABLED: false,
  RIDDLES_ENABLED: false
};

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 px-8 lg:px-16">
      {/* Experience Section */}
      {/* Section separator line */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="w-1/3 h-px bg-gray-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-16">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-sm text-gray-400">02</span>
              <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
                Experience
              </h2>
              <p className="text-gray-600 leading-relaxed">
                My professional journey in financial technology, research, and technical development.
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  isExpanded={expandedItems.includes(index)}
                  onToggleExpand={() => toggleExpand(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      {/* Section separator line */}
      <div className="max-w-7xl mx-auto mb-16 mt-16">
        <div className="w-1/3 h-px bg-gray-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto" data-section="projects">
        <div className="grid grid-cols-12 gap-16">
          {/* Section number and title */}
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <span className="font-mono text-sm text-gray-400">03</span>
              <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
                Projects
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selected projects spanning trading systems, AI research, and bioinformatics.
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div className="col-span-12 lg:col-span-9">
            <div className="space-y-8">
              {projectData.map((item, index) => (
                <TimelineItem
                  key={index + experienceData.length}
                  item={item}
                  isExpanded={expandedItems.includes(index + experienceData.length)}
                  onToggleExpand={() => toggleExpand(index + experienceData.length)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section - Only show if feature flag is enabled */}
      {FEATURE_FLAGS.BLOG_ENABLED && (
        <>
          {/* Section separator line */}
          <div className="max-w-7xl mx-auto mb-16 mt-16">
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="max-w-7xl mx-auto" data-section="blog">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-12 lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <span className="font-mono text-sm text-gray-400">04</span>
                  <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
                    {blogSection.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {blogSection.description}
                  </p>
                </div>
              </div>
              
              <div className="col-span-12 lg:col-span-9">
                <BlogSection />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Math Riddle Section - Only show if feature flag is enabled */}
      {FEATURE_FLAGS.RIDDLES_ENABLED && (
        <>
          {/* Section separator line */}
          <div className="max-w-7xl mx-auto mb-16 mt-16">
            <div className="w-1/3 h-px bg-gray-300"></div>
          </div>
          
          <div className="max-w-7xl mx-auto" data-section="riddles">
            <div className="grid grid-cols-12 gap-16">
              <div className="col-span-12 lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <span className="font-mono text-sm text-gray-400">05</span>
                  <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
                    {riddleSection.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {riddleSection.description}
                  </p>
                </div>
              </div>
              
              <div className="col-span-12 lg:col-span-9">
                <RiddleSection />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Timeline;
