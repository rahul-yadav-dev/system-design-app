import React from 'react';
import { BookOpen } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <BookOpen className="h-12 w-12 text-gray-400 mb-4" />
      <h3 className="text-lg font-medium text-gray-900">No lectures available</h3>
      <p className="mt-1 text-sm text-gray-500">
        Please check back later for new content.
      </p>
    </div>
  );
};