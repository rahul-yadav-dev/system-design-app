import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript' }) => {
  return (
    <div className="bg-gray-900 rounded-lg p-4 my-4">
      <pre className="text-gray-100 font-mono text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};