import React, { useState } from 'react';
import { patterns } from '../data/patterns';
import { PatternCard } from './patterns/PatternCard';
import { PatternContent } from './patterns/PatternContent';

export function PatternTabs() {
  const [activePattern, setActivePattern] = useState(patterns[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Design Patterns</h2>
        {patterns.map((pattern) => (
          <PatternCard
            key={pattern.id}
            pattern={pattern}
            isActive={activePattern.id === pattern.id}
            onClick={() => setActivePattern(pattern)}
          />
        ))}
      </div>
      <div className="lg:col-span-2">
        <PatternContent pattern={activePattern} />
      </div>
    </div>
  );
}