import { ArrowLeft, GithubIcon } from "lucide-react";
import React from "react";
import { useAppContext } from "../context/AppContext";

const Header: React.FC = () => {
    const { selectedLanguage, selectedCategory, goBack, resetSelections } =
        useAppContext();

    // Determine title based on selection state
    let title = "Travel Cheet";
    if (selectedLanguage && selectedCategory) {
        title = selectedCategory.name;
    } else if (selectedLanguage) {
        title = ` ${selectedLanguage.flag} ${selectedLanguage.name} Phrases`;
    }

    return (
        <header className="sticky w-yfull top-0 z-10 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex items-center">
                {selectedLanguage || selectedCategory ? (
                    <button
                        onClick={goBack}
                        className="mr-3 p-2 rounded-full hover:bg-gray-100"
                        aria-label="Go back"
                    >
                        <ArrowLeft size={20} />
                    </button>
                ) : null}

                <h1 className="text-xl p-2 font-bold text-center w-full">
                    {title}
                    {!selectedLanguage && !selectedCategory && (
                        <>
                            <br />
                            <span className="text-gray-400 font-medium text-xs">
                                Your INTL travel Cheat Sheet
                            </span>
                        </>
                    )}
                </h1>

                <a
                    href="https://github.com/devignx/travel-cheet"
                    target="_blank"
                >
                    <GithubIcon size={20} />
                </a>
            </div>
        </header>
    );
};

export default Header;
