import React from "react";
import { useAppContext } from "../context/AppContext";
import languageData from "../data/languages.json";
import { Language } from "../types/types";
import LanguageCard from "./LanguageCard";

const LanguageSelector: React.FC = () => {
    const { setSelectedLanguage } = useAppContext();
    const languages = languageData.languages as Language[];

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language);
    };

    return (
        <div className="container max-w-4xl mx-auto mt-12 px-4 pb-24 py-6">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Choose your language
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
                {languages.map((language) => (
                    <LanguageCard
                        key={language.code}
                        language={language}
                        onClick={handleLanguageSelect}
                    />
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
