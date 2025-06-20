
import React from 'react';
import TimelineItem from './TimelineItem';
import { TimelineItem as TimelineItemType } from '../types/timeline';

interface TimelineSectionProps {
  sectionNumber: string;
  title: string;
  description: string;
  items: TimelineItemType[];
  expandedItems: number[];
  onToggleExpand: (index: number) => void;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({
  sectionNumber,
  title,
  description,
  items,
  expandedItems,
  onToggleExpand
}) => {
  return (
    <>
      <div className="mb-16">
        <span className="font-mono text-sm text-gray-400">{sectionNumber}</span>
        <h2 className="text-2xl lg:text-3xl font-light mt-2 mb-6">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>

      <div className="space-y-8 mb-24">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            isExpanded={expandedItems.includes(index)}
            onToggleExpand={() => onToggleExpand(index)}
          />
        ))}
      </div>
    </>
  );
};

export default TimelineSection;
