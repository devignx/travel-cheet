import { Volume2 } from "lucide-react";
import React from "react";
import { useAppContext } from "../context/AppContext";
import useSpeech from "../hooks/useSpeech";
import { Phrase } from "../types/types";

interface PhraseCardProps {
    phrase: Phrase;
    langCode: string;
}

const PhraseCard: React.FC<PhraseCardProps> = ({ phrase, langCode }) => {
    const { isFavorite, toggleFavorite } = useAppContext();
    const { speak, isSpeaking } = useSpeech({ lang: langCode });

    return (
        <div className="flex flex-col h-full bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
            <div className="p-5 flex-grow">
                {" "}
                <p className="text-gray-600 font-semibold mb-3">
                    {phrase.translation}
                </p>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold leading-tight flex-grow">
                        {phrase.pronunciation}
                    </h3>
                </div>
                <p className="text-sm text-gray-500 italic">{phrase.phrase}</p>
            </div>

            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
                <button
                    className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg transition-colors ${
                        isSpeaking
                            ? "bg-blue-100 text-blue-600"
                            : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500"
                    }`}
                    onClick={() => speak(phrase.phrase)}
                    disabled={isSpeaking}
                    aria-label="Listen to pronunciation"
                >
                    <Volume2 size={18} />
                    <span className="text-sm font-medium">Listen</span>
                </button>
            </div>
        </div>
    );
};

export default PhraseCard;
