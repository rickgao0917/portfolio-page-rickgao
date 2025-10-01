import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  return (
    <div className={`prose prose-gray max-w-none ${className}`}>
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
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-600">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;