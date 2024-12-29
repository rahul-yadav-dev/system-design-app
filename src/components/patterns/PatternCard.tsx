import React from 'react';
import { Pattern } from '../../types/patterns';

interface PatternCardProps {
  pattern: Pattern;
  isActive: boolean;
  onClick: () => void;
}

export function PatternCard({ pattern, isActive, onClick }: PatternCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg transition-all ${
        isActive 
          ? 'bg-blue-50 border-blue-500 border-2'
          : 'bg-white border-gray-200 border hover:border-blue-300'
      }`}
    >
      <h3 className="text-lg font-semibold text-gray-900">{pattern.name}</h3>
      <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
        pattern.category === 'creational' ? 'bg-green-100 text-green-800' :
        pattern.category === 'structural' ? 'bg-purple-100 text-purple-800' :
        'bg-orange-100 text-orange-800'
      }`}>
        {pattern.category}
      </span>
      <p className="mt-2 text-sm text-gray-600">{pattern.description}</p>
    </button>
  );
}