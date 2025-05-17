import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import languageData from "../data/languages.json";
import { Category, Phrase } from "../types/types";
import PhraseCard from "./PhraseCard";

const PhraseList: React.FC = () => {
    const { selectedLanguage } = useAppContext();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );
    const categories = languageData.categories as Category[];

    const handlePrint = () => {
        window.print();
    };

    if (!selectedLanguage) {
        return null;
    }

    // Get all phrases for the selected language
    const allPhrases: Phrase[] = Object.entries(
        languageData.phrases[selectedLanguage.code] || {}
    ).flatMap(([categoryId, phrases]) =>
        phrases.map((phrase) => ({ ...phrase, categoryId }))
    );

    // Filter phrases by category if one is selected
    const displayedPhrases = selectedCategory
        ? allPhrases.filter(
              (phrase) => (phrase as any).categoryId === selectedCategory
          )
        : allPhrases;

    return (
        <div className="container mx-auto px-4 pb-24 py-6">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
                <button
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        !selectedCategory
                            ? "bg-blue-500 text-white"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(null)}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === category.id
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedCategory(category.id)}
                        style={{
                            color: "black",
                            backgroundColor:
                                selectedCategory === category.id
                                    ? category.color
                                    : undefined,
                        }}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Phrases Grid */}
            <div className="grid max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedPhrases.map((phrase) => (
                    <PhraseCard
                        key={phrase.id}
                        phrase={phrase}
                        langCode={selectedLanguage.code}
                    />
                ))}
            </div>
            <div className="flex justify-end">
                <button
                    className="size-12  scale-150 flex justify-center items-center fixed bottom-24 right-12 rounded-full bg-blue-500 text-white hover:bg-blue-600"
                    onClick={handlePrint}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                        <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                        <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                        <path d="M17 18h2" />
                        <path d="M20 15h-3v6" />
                        <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                    </svg>
                </button>
            </div>

            {displayedPhrases.length === 0 && (
                <div className="text-center py-10">
                    <p className="text-gray-500">
                        No phrases available for this category yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PhraseList;
