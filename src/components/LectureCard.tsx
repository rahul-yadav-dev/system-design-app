import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Lecture } from '../types';

interface LectureCardProps {
  lecture: Lecture;
  isActive: boolean;
  onClick: () => void;
}

export const LectureCard: React.FC<LectureCardProps> = ({ lecture, isActive, onClick }) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer ${
        isActive ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-lg font-semibold">{lecture.title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          lecture.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
          lecture.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {lecture.difficulty}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{lecture.description}</p>
      <div className="flex justify-end">
        <ArrowRight className="h-5 w-5 text-blue-600" />
      </div>
    </div>
  );
}