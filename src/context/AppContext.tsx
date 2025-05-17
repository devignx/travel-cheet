import React, { createContext, useState, useContext, useEffect } from 'react';
import { Language, Category, AppContextType } from '../types/types';
import languageData from '../data/languages.json';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('travelTalkFavorites');
    if (savedFavorites) {
      setFavorites(new Set(JSON.parse(savedFavorites)));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('travelTalkFavorites', JSON.stringify([...favorites]));
  }, [favorites]);

  const toggleFavorite = (phraseId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(phraseId)) {
        newFavorites.delete(phraseId);
      } else {
        newFavorites.add(phraseId);
      }
      return newFavorites;
    });
  };

  const isFavorite = (phraseId: string) => {
    return favorites.has(phraseId);
  };

  const goBack = () => {
    if (selectedCategory) {
      setSelectedCategory(null);
    } else if (selectedLanguage) {
      setSelectedLanguage(null);
    }
  };

  const resetSelections = () => {
    setSelectedLanguage(null);
    setSelectedCategory(null);
  };

  return (
    <AppContext.Provider
      value={{
        selectedLanguage,
        setSelectedLanguage,
        selectedCategory,
        setSelectedCategory,
        favorites,
        toggleFavorite,
        isFavorite,
        goBack,
        resetSelections
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};