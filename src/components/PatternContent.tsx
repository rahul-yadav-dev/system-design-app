import React from 'react';
import { CodeBlock } from './CodeBlock';
import { Pattern } from '../types/patterns';

interface PatternContentProps {
  pattern: Pattern;
}

export function PatternContent({ pattern }: PatternContentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">{pattern.name}</h3>
        <p className="mt-2 text-gray-600">{pattern.description}</p>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Use Cases</h4>
        <ul className="list-disc pl-5 space-y-2">
          {pattern.useCases.map((useCase, index) => (
            <li key={index} className="text-gray-600">{useCase}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h4>
        <CodeBlock code={pattern.implementation} />
      </div>

      {pattern.considerations && (
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Key Considerations</h4>
          <ul className="list-disc pl-5 space-y-2">
            {pattern.considerations.map((consideration, index) => (
              <li key={index} className="text-gray-600">{consideration}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}