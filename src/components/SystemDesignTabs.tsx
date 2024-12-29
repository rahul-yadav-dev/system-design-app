import React, { useState } from 'react';
import { systemDesignTopics } from '../data/systemDesign';
import { SystemDesignContent } from './SystemDesignContent';

export function SystemDesignTabs() {
  const [activeLevel, setActiveLevel] = useState<'high' | 'low'>('high');
  const filteredTopics = systemDesignTopics.filter(topic => topic.level === activeLevel);
  const [activeTopic, setActiveTopic] = useState(filteredTopics[0]);

  return (
    <div className="w-full">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => {
            setActiveLevel('high');
            setActiveTopic(systemDesignTopics.find(t => t.level === 'high')!);
          }}
          className={`px-4 py-2 rounded-md ${
            activeLevel === 'high'
              ? 'bg-purple-100 text-purple-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          High-Level Design
        </button>
        <button
          onClick={() => {
            setActiveLevel('low');
            setActiveTopic(systemDesignTopics.find(t => t.level === 'low')!);
          }}
          className={`px-4 py-2 rounded-md ${
            activeLevel === 'low'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Low-Level Design
        </button>
      </div>

      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="System Design Topics">
          {filteredTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveTopic(topic)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTopic.id === topic.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {topic.title}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="mt-6">
        <SystemDesignContent topic={activeTopic} />
      </div>
    </div>
  );
}