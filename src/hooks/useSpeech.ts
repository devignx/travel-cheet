import { useState, useCallback } from 'react';

interface UseSpeechProps {
  lang?: string;
}

interface UseSpeechReturn {
  speak: (text: string) => void;
  isSpeaking: boolean;
  isSupported: boolean;
}

export const useSpeech = ({ lang = 'en-US' }: UseSpeechProps = {}): UseSpeechReturn => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isSupported = 'speechSynthesis' in window;
  
  const speak = useCallback((text: string) => {
    if (!isSupported) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  }, [isSupported, lang]);
  
  return { speak, isSpeaking, isSupported };
};

export default useSpeech;