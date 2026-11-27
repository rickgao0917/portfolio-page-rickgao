import React from 'react';
import { TimelineItem as TimelineItemType } from '../types/timeline';

interface TimelineItemProps {
  item: TimelineItemType;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 sm:p-6">
      <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words mb-2">
            {item.title}
          </h3>
          {item.type === 'experience' && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
              <span className="text-gray-700 font-medium">{item.company}</span>
              <span className="text-sm text-gray-500">{item.location}</span>
            </div>
          )}
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
        <span className="text-sm text-gray-500 flex-shrink-0 sm:ml-6">{item.period}</span>
      </div>
    </div>
  );
};

export default TimelineItem;
