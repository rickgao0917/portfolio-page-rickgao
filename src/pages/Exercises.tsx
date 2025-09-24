import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Lightbulb } from 'lucide-react';
import { allExercises } from '@/data/exercises';
import AnimatedDotsBackground from '@/components/AnimatedDotsBackground';

const Exercises = () => {
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
        <div className="mb-12">
          <Link
            to="/"
            className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Portfolio</span>
          </Link>

          <h1 className="text-4xl lg:text-5xl font-light mb-4">Study Exercises</h1>
          <p className="text-lg text-gray-600">
            My practice problems
          </p>
        </div>

        {allExercises.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <Brain className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No exercises yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {allExercises.map(exercise => (
              <Link
                key={exercise.id}
                to={`/exercises/${exercise.id}`}
                className="group border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start space-x-3">
                  <Brain className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-200">
                      {exercise.title}
                    </h3>
                    {exercise.hints && (
                      <div className="flex items-center space-x-1 mt-2 text-sm text-gray-500">
                        <Lightbulb className="w-4 h-4" />
                        <span>{exercise.hints.length} hints available</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;