import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getExerciseById } from '@/data/exercises';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const Exercise = () => {
  const { id } = useParams<{ id: string }>();
  const exercise = id ? getExerciseById(id) : undefined;

  if (!exercise) {
    return <Navigate to="/exercises" replace />;
  }

  // Use the problem content directly (which now contains everything)
  const fullContent = exercise.problem;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-8">
          <Link
            to="/exercises"
            className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Exercises</span>
          </Link>

          <h1 className="text-3xl lg:text-4xl font-light mb-4">{exercise.title}</h1>

          <div className="text-sm text-gray-500">
            <span>{exercise.subject}</span>
          </div>
        </div>

        <MarkdownRenderer content={fullContent} />
      </div>
    </div>
  );
};

export default Exercise;