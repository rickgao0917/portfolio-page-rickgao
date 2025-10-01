import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Calendar } from 'lucide-react';
import { allExercises } from '@/data/exercises';
import AnimatedDotsBackground from '@/components/AnimatedDotsBackground';

const Exercises = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedDotsBackground />
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
          <div className="space-y-4">
            {allExercises.map(exercise => (
              <article
                key={exercise.id}
                className="group hover:bg-gray-50 rounded-lg transition-colors duration-200 p-4 border border-gray-200"
              >
                {exercise.date && (
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(exercise.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</span>
                  </div>
                )}

                <h3 className="text-xl font-light mb-2 group-hover:text-gray-600 transition-colors duration-200">
                  <Link to={`/exercises/${exercise.id}`} className="flex items-center space-x-2">
                    <Brain className="w-5 h-5" />
                    <span>{exercise.title}</span>
                  </Link>
                </h3>

                {exercise.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exercise.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercises;