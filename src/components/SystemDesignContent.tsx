import React from 'react';
import { SystemDesignTopic } from '../types/systemDesign';
import { CodeBlock } from './CodeBlock';

interface SystemDesignContentProps {
  topic: SystemDesignTopic;
}

export function SystemDesignContent({ topic }: SystemDesignContentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{topic.title}</h3>
        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
          topic.level === 'high' 
            ? 'bg-purple-100 text-purple-800'
            : 'bg-blue-100 text-blue-800'
        }`}>
          {topic.level === 'high' ? 'High-Level Design' : 'Low-Level Design'}
        </span>
        <p className="mt-4 text-gray-600">{topic.description}</p>
      </div>

      {topic.diagram && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Architecture Diagram</h4>
          <img src={topic.diagram} alt="Architecture Diagram" className="rounded-lg shadow-md" />
        </div>
      )}

      <div className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: topic.content }} />
      </div>

      {topic.components && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Components</h4>
          <ul className="list-disc pl-5 space-y-2">
            {topic.components.map((component, index) => (
              <li key={index} className="text-gray-600">{component}</li>
            ))}
          </ul>
        </div>
      )}

      {topic.considerations && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Design Considerations</h4>
          <ul className="list-disc pl-5 space-y-2">
            {topic.considerations.map((consideration, index) => (
              <li key={index} className="text-gray-600">{consideration}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}