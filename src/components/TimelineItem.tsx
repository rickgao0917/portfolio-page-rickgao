
import React from 'react';
import { Calendar, MapPin, ExternalLink, ChevronDown, Users, Award, Target } from 'lucide-react';
import { TimelineItem as TimelineItemType } from '../types/timeline';

interface TimelineItemProps {
  item: TimelineItemType;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isExpanded, onToggleExpand }) => {
  // Check if project has valid links
  const hasValidLinks = item.type === 'project' && item.links && (
    (item.links.demo && item.links.demo !== '#')
  );

  const hasDetails = item.type === 'experience'
    ? item.achievements.length > 0 || item.responsibilities.length > 0
    : (item.features?.length ?? 0) > 0 || (item.impact?.length ?? 0) > 0 || hasValidLinks;

  return (
    <div className="group">
      <div className={`bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
        isExpanded ? 'shadow-lg' : ''
      }`}>
        {/* Header - Always visible */}
        <div 
          className={`p-4 sm:p-6 transition-colors duration-200 ${hasDetails ? 'cursor-pointer hover:bg-gray-50' : ''}`}
          onClick={hasDetails ? onToggleExpand : undefined}
        >
          <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 mb-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 break-words">{item.title}</h3>
              </div>
              {item.type === 'experience' ? (
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2">
                  <span className="text-gray-700 font-medium">{item.company}</span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              ) : (
                <span className="text-gray-600 text-sm mb-2 block">{item.category}</span>
              )}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Tech stack - Show in collapsed view */}
              {item.tech.length > 0 && (
                <p className="text-xs text-gray-500 font-mono">{item.tech.join(' / ')}</p>
              )}
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-3 flex-shrink-0 sm:ml-6">
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{item.period}</span>
              </div>
              {hasDetails && <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`} />}
            </div>
          </div>
        </div>

        {/* Expandable content */}
        <div className={`transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-4 sm:px-6 pb-6 border-t border-gray-50">
            <div className="pt-4 space-y-6">
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

              {/* Project links - only render if there are valid links */}
              {hasValidLinks && (
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    {item.links?.demo && item.links.demo !== '#' && (
                      <a 
                        href={item.links.demo} 
                        className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:bg-gray-50 px-3 py-2 rounded-md"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Project</span>
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

export default TimelineItem;
