
import React, { useState } from 'react';
import { ArrowRight, Brain, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTodaysRiddle } from '../data/riddleData';

const RiddleSection = () => {
  const todaysRiddle = getTodaysRiddle();
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors duration-200">
      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
        <Brain className="w-4 h-4" />
        <span>Today's Challenge</span>
        <span>•</span>
        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
          {todaysRiddle.difficulty}
        </span>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-900 leading-relaxed font-medium mb-4">
          {todaysRiddle.question}
        </p>
        
        {showAnswer && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div>
              <span className="font-medium text-gray-700">Answer: </span>
              <span className="text-gray-900">{todaysRiddle.answer}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Explanation: </span>
              <span className="text-gray-600 text-sm">{todaysRiddle.explanation}</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="group flex items-center space-x-2 text-sm font-medium tracking-wide hover:text-gray-600 transition-colors duration-200"
        >
          {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{showAnswer ? 'Hide Answer' : 'See Answer'}</span>
        </button>
        
        <Link 
          to="/riddles"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200"
        >
          Previous Riddles
        </Link>
      </div>
    </div>
  );
};

export default RiddleSection;
