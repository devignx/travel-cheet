import React from "react";
import LanguageSelector from "../components/LanguageSelector";
import PhraseList from "../components/PhraseList";
import { useAppContext } from "../context/AppContext";

const Home: React.FC = () => {
    const { selectedLanguage } = useAppContext();

    return (
        <div className="min-h-[calc(100vh)]">
            {selectedLanguage ? <PhraseList /> : <LanguageSelector />}
        </div>
    );
};

export default Home;
