import React from 'react';
import { Menu, BookOpen, Code2, Layout } from 'lucide-react';
import { TabType } from '../types/navigation';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <Menu className="h-6 w-6 text-gray-600" /> */}
            <span className="text-xl font-semibold">System Design App</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onTabChange('lectures')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'lectures'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span>Basics</span>
            </button>
            <button
              onClick={() => onTabChange('patterns')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'patterns'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Code2 className="h-5 w-5" />
              <span>Patterns</span>
            </button>
            <button
              onClick={() => onTabChange('system-design')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md ${
                activeTab === 'system-design'
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Layout className="h-5 w-5" />
              <span>System Design</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}