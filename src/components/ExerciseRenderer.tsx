import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface ExerciseRendererProps {
  content: string;
  className?: string;
}

const ExerciseRenderer: React.FC<ExerciseRendererProps> = ({ content, className = '' }) => {
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number>>(new Set());

  const toggleSolution = (index: number) => {
    setExpandedSolutions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Split content into sections, capturing solutions properly
  // Look for "**Solution:**" followed by content until the next "###" (problem header) or "**Part"
  const solutionPattern = /(\*\*Solution:\*\*\n\n)((?:(?!###|^\*\*Part \()[\s\S])*)/gm;

  let solutionIndex = 0;
  const solutionMap = new Map<number, { start: number; end: number; content: string }>();

  // Find all solutions and their positions
  let match;
  while ((match = solutionPattern.exec(content)) !== null) {
    solutionMap.set(solutionIndex, {
      start: match.index,
      end: match.index + match[0].length,
      content: match[2]
    });
    solutionIndex++;
  }

  // Replace solutions with placeholders
  let processedContent = content;
  let offset = 0;
  solutionIndex = 0;

  solutionMap.forEach((solution, idx) => {
    const placeholder = `__SOLUTION_${idx}__`;
    const originalLength = solution.end - solution.start;
    const adjustedStart = solution.start + offset;

    processedContent =
      processedContent.slice(0, adjustedStart) +
      placeholder +
      processedContent.slice(adjustedStart + originalLength);

    offset += placeholder.length - originalLength;
  });

  // Custom component to render solution placeholders
  const components = {
    h1: ({ children }: any) => <h1 className="text-3xl font-light mb-6 mt-10">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-light mb-4 mt-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-light mb-3 mt-6">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-medium mb-3 mt-5">{children}</h4>,
    p: ({ children }: any) => {
      // Check if this paragraph contains a solution placeholder
      const text = String(children);
      const placeholderMatch = text.match(/__SOLUTION_(\d+)__/);

      if (placeholderMatch) {
        const idx = parseInt(placeholderMatch[1]);
        const solution = solutionMap.get(idx);
        const isExpanded = expandedSolutions.has(idx);

        if (!solution) return <p className="text-gray-700 leading-relaxed mb-5">{children}</p>;

        return (
          <div className="my-4">
            <button
              onClick={() => toggleSolution(idx)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200 font-medium"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
              {isExpanded ? 'Hide Solution' : 'Show Solution'}
            </button>

            {isExpanded && (
              <div className="mt-3 pl-4 border-l-4 border-blue-200 bg-blue-50/30 p-4 rounded-r-lg">
                <ReactMarkdown
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-light mb-6 mt-10">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-light mb-4 mt-8">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-light mb-3 mt-6">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-lg font-medium mb-3 mt-5">{children}</h4>,
                    p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-5">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
                    li: ({ children }) => <li className="text-gray-700">{children}</li>,
                    code: ({ inline, children }) =>
                      inline ? (
                        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>
                      ) : (
                        <code className="block bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">{children}</code>
                      ),
                    pre: ({ children }) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                  }}
                >
                  {solution.content}
                </ReactMarkdown>
              </div>
            )}
          </div>
        );
      }

      return <p className="text-gray-700 leading-relaxed mb-5">{children}</p>;
    },
    ul: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
    ol: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
    li: ({ children }: any) => <li className="text-gray-700">{children}</li>,
    code: ({ inline, children }: any) =>
      inline ? (
        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm">{children}</code>
      ) : (
        <code className="block bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">{children}</code>
      ),
    pre: ({ children }: any) => <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
        {children}
      </blockquote>
    ),
  };

  return (
    <div className={`prose prose-gray max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={components}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};

export default ExerciseRenderer;
