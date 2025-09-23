
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Calendar, Eye, EyeOff } from 'lucide-react';
import { mathRiddles } from '../data/riddleData';

const Riddles = () => {
  const [expandedRiddles, setExpandedRiddles] = useState<string[]>([]);

  const toggleExpanded = (riddleId: string) => {
    setExpandedRiddles(prev => 
      prev.includes(riddleId)
        ? prev.filter(id => id !== riddleId)
        : [...prev, riddleId]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12">
          <Link 
            to="/"
            className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Portfolio</span>
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-light mb-4">Math Riddles</h1>
          <p className="text-lg text-gray-600">
            Brain teasers and mathematical puzzles for the quantitatively curious.
          </p>
        </div>

        <div className="space-y-8">
          {mathRiddles.map((riddle) => (
            <div key={riddle.id} className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(riddle.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
                  {riddle.difficulty}
                </span>
              </div>
              
              <div className="flex items-start space-x-3 mb-4">
                <Brain className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                <p className="text-gray-900 leading-relaxed font-medium">
                  {riddle.question}
                </p>
              </div>
              
              {expandedRiddles.includes(riddle.id) && (
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 mb-4">
                  <div>
                    <span className="font-medium text-gray-700">Answer: </span>
                    <span className="text-gray-900">{riddle.answer}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Explanation: </span>
                    <span className="text-gray-600 text-sm">{riddle.explanation}</span>
                  </div>
                </div>
              )}
              
              <button
                onClick={() => toggleExpanded(riddle.id)}
                className="group flex items-center space-x-2 text-sm font-medium tracking-wide hover:text-gray-600 transition-colors duration-200"
              >
                {expandedRiddles.includes(riddle.id) ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{expandedRiddles.includes(riddle.id) ? 'Hide Answer' : 'See Answer'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Riddles;
