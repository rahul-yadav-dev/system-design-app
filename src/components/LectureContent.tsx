import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Lecture } from '../types';

interface LectureContentProps {
  lecture: Lecture;
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export const LectureContent: React.FC<LectureContentProps> = ({ 
  lecture, 
  onPrevious, 
  onNext,
  hasPrevious,
  hasNext
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold mb-2">{lecture.title}</h1>
      <span className={`px-3 py-1 rounded-full text-sm ${
        lecture.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
        lecture.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
        'bg-red-100 text-red-800'
      }`}>
        {lecture.difficulty}
      </span>
      
      <div className="mt-6 prose prose-blue">
        <p className="text-gray-600">{lecture.content}</p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Code Example</h3>
        <CodeBlock code={lecture.codeExample} />
      </div>

      <div className="mt-8 flex justify-between">
        {hasPrevious && (
          <button
            onClick={onPrevious}
            className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-md"
          >
            Previous Lecture
          </button>
        )}
        {hasNext && (
          <button
            onClick={onNext}
            className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
          >
            Next Lecture
          </button>
        )}
      </div>
    </div>
  );
}