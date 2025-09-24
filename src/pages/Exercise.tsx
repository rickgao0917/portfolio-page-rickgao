import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Eye, EyeOff, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { getExerciseById } from '@/data/exercises';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import AnimatedDotsBackground from '@/components/AnimatedDotsBackground';

const Exercise = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = id ? getExerciseById(id) : undefined;
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [visibleHints, setVisibleHints] = useState<number>(0);

  if (!exercise) {
    return <Navigate to="/exercises" replace />;
  }

  const toggleNextHint = () => {
    if (exercise.hints && visibleHints < exercise.hints.length) {
      setVisibleHints(visibleHints + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle animated background */}
      <div className="fixed inset-0 z-0 opacity-30">
        <AnimatedDotsBackground
          dotCount={60}
          connectionDistance={120}
          speed={0.3}
          maxOpacity={0.3}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="mb-8">
          <Link
            to="/exercises"
            className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Exercises</span>
          </Link>

          <h1 className="text-3xl lg:text-4xl font-light mb-4">{exercise.title}</h1>
          <p className="text-gray-600">{exercise.subject}</p>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-light mb-4 text-gray-900">Problem</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <MarkdownRenderer content={exercise.problem} />
            </div>
          </div>

          {exercise.hints && exercise.hints.length > 0 && (
            <div>
              <button
                onClick={() => setShowHints(!showHints)}
                className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-4"
              >
                <Lightbulb className="w-4 h-4" />
                <span>Hints</span>
                {showHints ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showHints && (
                <div className="space-y-3">
                  {exercise.hints.slice(0, visibleHints).map((hint, index) => (
                    <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-sm text-blue-900">
                        <strong>Hint {index + 1}:</strong> {hint}
                      </p>
                    </div>
                  ))}

                  {visibleHints < exercise.hints.length && (
                    <button
                      onClick={toggleNextHint}
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors duration-200"
                    >
                      Show next hint ({visibleHints + 1}/{exercise.hints.length})
                    </button>
                  )}
                </div>
              )}
            </div>
          )}

          <div>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="group flex items-center space-x-2 font-medium text-gray-900 hover:text-gray-600 transition-colors duration-200 mb-4"
            >
              {showSolution ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              <span>{showSolution ? 'Hide Solution' : 'Show Solution'}</span>
            </button>

            {showSolution && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <MarkdownRenderer content={exercise.solution} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;