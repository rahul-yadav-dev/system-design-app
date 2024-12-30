import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LectureCard } from './components/LectureCard';
import { LectureContent } from './components/LectureContent';
import { EmptyState } from './components/EmptyState';
import { PatternTabs } from './components/PatternTabs';
import { SystemDesignTabs } from './components/SystemDesignTabs';
import { lectures } from './data/lectures';
import { TabType } from './types/navigation';

function App() {
  const [selectedLecture, setSelectedLecture] = useState(lectures[0] || null);
  const [activeTab, setActiveTab] = useState<TabType>('lectures');

  if (lectures.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation onTabChange={setActiveTab} activeTab={activeTab} />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <EmptyState />
        </main>
      </div>
    );
  }

  const handlePreviousLecture = () => {
    if (selectedLecture?.prevLectureId) {
      const prevLecture = lectures.find(l => l.id === selectedLecture.prevLectureId);
      if (prevLecture) setSelectedLecture(prevLecture);
    }
  };

  const handleNextLecture = () => {
    if (selectedLecture?.nextLectureId) {
      const nextLecture = lectures.find(l => l.id === selectedLecture.nextLectureId);
      if (nextLecture) setSelectedLecture(nextLecture);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'lectures':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              {/* <h2 className="text-2xl font-bold mb-6">System Design Lectures</h2> */}
              {lectures.map((lecture) => (
                <LectureCard
                  key={lecture.id}
                  lecture={lecture}
                  isActive={selectedLecture?.id === lecture.id}
                  onClick={() => setSelectedLecture(lecture)}
                />
              ))}
            </div>

            <div className="lg:col-span-2">
              {selectedLecture ? (
                <LectureContent
                  lecture={selectedLecture}
                  onPrevious={handlePreviousLecture}
                  onNext={handleNextLecture}
                  hasPrevious={Boolean(selectedLecture.prevLectureId)}
                  hasNext={Boolean(selectedLecture.nextLectureId)}
                />
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        );
      case 'patterns':
        return <PatternTabs />;
      case 'system-design':
        return <SystemDesignTabs />;
      default:
        return <EmptyState />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation onTabChange={setActiveTab} activeTab={activeTab} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;