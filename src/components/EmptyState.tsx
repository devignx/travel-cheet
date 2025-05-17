import React from 'react';
import { Globe } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="p-6 rounded-full bg-blue-50 mb-4">
        <Globe className="text-blue-500" size={48} />
      </div>
      <h2 className="text-2xl font-bold mb-2">Welcome to TravelTalk Sheets</h2>
      <p className="text-gray-600 max-w-md">
        Select a language to start learning essential travel phrases. No sign-up required!
      </p>
    </div>
  );
};

export default EmptyState;