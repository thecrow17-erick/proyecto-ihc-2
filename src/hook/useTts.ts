import { useEffect, useState } from 'react';
import Tts from 'react-native-tts'


export const useTts = () => { 
  const [isSpeach,setIsSpeach] = useState(false)
  useEffect(() => {
    Tts.addEventListener('tts-start', () => setIsSpeach(true));
    Tts.addEventListener('tts-finish', () => setIsSpeach(false));
  }, [])

  Tts.setDefaultLanguage('es-ES');

  const speak = (message:string) => Tts.speak(message);
  
  return {
    isSpeach,
    speak
  }
}
