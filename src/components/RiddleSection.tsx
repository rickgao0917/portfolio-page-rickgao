
import React, { useState } from 'react';
import { Brain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getTodaysRiddle } from '../data/riddleData';

const RiddleSection = () => {
  const todaysRiddle = getTodaysRiddle();
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="space-y-6">
      <div 
        onClick={handleClick}
        className="group bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 cursor-pointer hover:bg-gray-50"
      >
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
          <Brain className="w-4 h-4" />
          <span>Today's Challenge</span>
          <span>•</span>
          <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium">
            {todaysRiddle.difficulty}
          </span>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-900 leading-relaxed font-semibold mb-4">
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
      </div>
      
      <Link 
        to="/riddles"
        className="group inline-flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
      >
        <span>More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>
  );
};

export default RiddleSection;
