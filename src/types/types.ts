export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  direction: 'ltr' | 'rtl';
  usesRomanization?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Phrase {
  id: string;
  phrase: string;
  translation: string;
  pronunciation: string;
  audioUrl?: string;
}

export interface LanguageData {
  languages: Language[];
  categories: Category[];
  phrases: {
    [langCode: string]: {
      [categoryId: string]: Phrase[];
    };
  };
}

export interface AppContextType {
  selectedLanguage: Language | null;
  setSelectedLanguage: (language: Language) => void;
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  favorites: Set<string>;
  toggleFavorite: (phraseId: string) => void;
  isFavorite: (phraseId: string) => boolean;
  goBack: () => void;
  resetSelections: () => void;
}