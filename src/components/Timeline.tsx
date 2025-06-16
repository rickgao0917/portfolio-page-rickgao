
import React, { useState } from 'react';
import TimelineSection from './TimelineSection';
import { experienceData, projectData } from '../data/timelineData';

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Filter projects to only include those with valid links
  const validProjectData = projectData.filter(project => {
    const hasValidDemo = project.links?.demo && project.links.demo !== '#';
    const hasValidGithub = project.links?.github && project.links.github !== '#';
    return hasValidDemo || hasValidGithub;
  });

  return (
    <section className="py-24 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Experience Section */}
        <TimelineSection
          sectionNumber="02"
          title="Experience"
          description="My professional journey in financial technology, research, and technical development."
          items={experienceData}
          expandedItems={expandedItems}
          onToggleExpand={toggleExpand}
        />

        {/* Projects Section */}
        {validProjectData.length > 0 && (
          <TimelineSection
            sectionNumber="03"
            title="Projects"
            description="Selected projects spanning trading systems, AI research, and bioinformatics."
            items={validProjectData}
            expandedItems={expandedItems}
            onToggleExpand={toggleExpand}
          />
        )}
      </div>
    </section>
  );
};

export default Timeline;
