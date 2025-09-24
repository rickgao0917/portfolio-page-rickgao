import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import { allStudyNotes } from '@/data/studyNotes';
import AnimatedDotsBackground from '@/components/AnimatedDotsBackground';

const StudyNotes = () => {
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

          <h1 className="text-4xl lg:text-5xl font-light mb-4">Study Notes</h1>
          <p className="text-lg text-gray-600">
            My study notes
          </p>
        </div>

        {allStudyNotes.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No study notes yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {allStudyNotes.map(note => (
              <article
                key={note.id}
                className="group hover:bg-gray-50 rounded-lg transition-colors duration-200 p-4 border border-gray-200"
              >
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(note.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>

                <h3 className="text-xl font-light mb-2 group-hover:text-gray-600 transition-colors duration-200">
                  <Link to={`/study-notes/${note.id}`} className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{note.title}</span>
                  </Link>
                </h3>

                {note.tags && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {note.tags.map(tag => (
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

export default StudyNotes;