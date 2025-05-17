import React from 'react';
import CategoryCard from './CategoryCard';
import { Category } from '../types/types';
import { useAppContext } from '../context/AppContext';
import languageData from '../data/languages.json';

const CategorySelector: React.FC = () => {
  const { selectedLanguage, setSelectedCategory } = useAppContext();
  const categories = languageData.categories as Category[];
  
  // Filter categories to only show ones that have phrases for the selected language
  const availableCategories = categories.filter(category => {
    const langPhrases = languageData.phrases[selectedLanguage?.code || ''];
    return langPhrases && langPhrases[category.id] && langPhrases[category.id].length > 0;
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-2 text-center">
        {selectedLanguage?.name} Phrases
      </h2>
      <p className="text-center text-gray-600 mb-6">Select a category</p>
      
      <div className="space-y-3">
        {availableCategories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={setSelectedCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;