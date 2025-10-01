import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { getStudyNoteById } from '@/data/studyNotes';
import MarkdownRenderer from '@/components/MarkdownRenderer';

const StudyNote = () => {
  const { id } = useParams<{ id: string }>();
  const note = id ? getStudyNoteById(id) : undefined;

  if (!note) {
    return <Navigate to="/study-notes" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-8">
          <Link
            to="/study-notes"
            className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-6"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Study Notes</span>
          </Link>

          <h1 className="text-3xl lg:text-4xl font-light mb-4">{note.title}</h1>

          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(note.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <span>•</span>
            <span>{note.subject}</span>
          </div>

          {note.tags && (
            <div className="flex items-center space-x-2 mt-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {note.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <MarkdownRenderer content={note.content} />
      </div>
    </div>
  );
};

export default StudyNote;