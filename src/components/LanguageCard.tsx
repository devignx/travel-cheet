import React from 'react';
import { Language } from '../types/types';

interface LanguageCardProps {
  language: Language;
  onClick: (language: Language) => void;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ language, onClick }) => {
  return (
    <button
      className="flex flex-col items-center p-4 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 bg-white"
      onClick={() => onClick(language)}
      aria-label={`Select ${language.name}`}
    >
      <span className="text-5xl mb-2" role="img" aria-label={`Flag of ${language.name}`}>
        {language.flag}
      </span>
      <h3 className="text-xl font-medium mb-1">{language.name}</h3>
      <p className="text-sm text-gray-600">{language.nativeName}</p>
    </button>
  );
};

export default LanguageCard;