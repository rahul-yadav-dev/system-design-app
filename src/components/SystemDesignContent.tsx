import React, { useState } from "react";
import { BookOpen, Code, Settings, Lightbulb, Share2 } from "lucide-react";

// Custom Alert Component
const Alert = ({ children, onClose }: { children: React.ReactNode; onClose?: () => void }) => (
  <div className="fixed bottom-4 right-4 flex items-center bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded relative" role="alert">
    <span className="block sm:inline">{children}</span>
    {onClose && (
      <button onClick={onClose} className="absolute top-0 bottom-0 right-0 px-4 py-3">
        <span className="sr-only">Close</span>
        <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
        </svg>
      </button>
    )}
  </div>
);

interface SystemDesignTopic {
  title: string;
  level: "high" | "medium" | "low";
  description: string;
  diagram?: string;
  content?: string;
  components?: string[];
  considerations?: string[];
  estimatedTime?: string;
  learningObjectives?: string[];
}

interface SystemDesignContentProps {
  topic: SystemDesignTopic;
}

export function SystemDesignContent({ topic }: SystemDesignContentProps) {
  const [isExpanded, setIsExpanded] = useState({
    title: false,
    diagram: false,
    content: false,
    components: false,
    considerations: false,
  });

  const [showCopiedAlert, setShowCopiedAlert] = useState(false);

  const toggleExpand = (section: string) => {
    setIsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShowCopiedAlert(true);
      setTimeout(() => setShowCopiedAlert(false), 2000);
    }
  };

  const getDifficultyBadge = (level: string) => {
    const badges = {
      high: "bg-red-100 text-red-800 border border-red-200",
      medium: "bg-yellow-100 text-yellow-800 border border-yellow-200",
      low: "bg-green-100 text-green-800 border border-green-200"
    };
    return badges[level as keyof typeof badges] || badges.medium;
  };

  return (
    <div className="space-y-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-8 rounded-xl shadow-xl">
      {/* Title Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-indigo-500" />
              {topic.title}
            </h3>
            <div className="flex gap-2 mt-3">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${getDifficultyBadge(topic.level)}`}>
                {topic.level === "high" ? "Advanced" : "Fundamental"}
              </span>
              <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">
                {topic.estimatedTime || "30-45 min"}
              </span>
            </div>
          </div>
          <button
            onClick={handleShare}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            title="Share this topic"
          >
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed">{topic.description}</p>
        <div className="mt-4 bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-semibold text-indigo-900 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Key Learning Objectives
          </h4>
          <ul className="mt-2 space-y-2">
            {topic.learningObjectives?.map((objective, index) => (
              <li key={index} className="text-indigo-700 flex items-start gap-2">
                <span className="font-bold mt-1">•</span>
                {objective}
              </li>
            )) || (
              <li className="text-indigo-700">Understand core system design principles and their practical applications</li>
            )}
          </ul>
        </div>
      </div>

      {/* Architecture Diagram */}
      {topic.diagram && (
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-500" />
            System Architecture
          </h4>
          <div className="relative group">
            <img
              src={topic.diagram}
              alt="Architecture Diagram"
              className="rounded-lg shadow-lg border border-gray-200 max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Settings className="w-6 h-6 text-pink-500" />
          In-Depth Analysis
        </h4>
        <div className="prose prose-indigo max-w-none">
          <div
            dangerouslySetInnerHTML={{
              __html: topic.content || "<p>Content is currently being updated. Check back soon!</p>",
            }}
          />
        </div>
      </div>

      {/* Components Section */}
      {topic.components && topic.components.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500">
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Code className="w-6 h-6 text-teal-500" />
            System Components
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topic.components.map((component, index) => (
              <div key={index} className="bg-teal-50 p-4 rounded-lg">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center text-teal-700 font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-teal-900">{component}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Considerations Section */}
      {topic.considerations && topic.considerations.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-blue-500" />
            Key Considerations
          </h4>
          <div className="space-y-4">
            {topic.considerations.map((consideration, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-blue-900">{consideration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h5 className="font-semibold text-gray-900 mb-2">Ready to Practice?</h5>
        <p className="text-gray-600">
          Try explaining this system design to a friend or record yourself presenting it.
          Practice makes perfect!
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
            Next Topic
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            Practice Questions
          </button>
        </div>
      </div>

      {/* Alert */}
      {showCopiedAlert && (
        <Alert onClose={() => setShowCopiedAlert(false)}>
          Link copied to clipboard!
        </Alert>
      )}
    </div>
  );
}

export default SystemDesignContent;