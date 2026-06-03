import { useEffect, useRef, useState, useCallback } from "react";
import type { SpeechRecognitionLike } from "@/lib/types";

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  }
}

export function useSpeechRecognition() {
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const manualStopRef = useRef(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");

  const start = useCallback((onResult: (text: string) => void) => {
    const Recognition = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!Recognition) {
      setError("Este navegador não suporta reconhecimento de voz. Use Chrome ou Edge.");
      return;
    }

    setError("");
    manualStopRef.current = false;
    const recognition = new Recognition();
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event: any) => {
      let finalText = "";
      let interimText = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const value = event.results[i][0]?.transcript ?? "";
        if (event.results[i].isFinal) finalText += ` ${value}`;
        else interimText += ` ${value}`;
      }
      const visibleText = `${finalText} ${interimText}`.trim();
      if (visibleText) onResult(visibleText);
    };

    recognition.onerror = (event: any) => {
      setError(`Erro: ${event.error ?? "desconhecido"}.`);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      if (!manualStopRef.current) {
        try { recognition.start(); setIsListening(true); } catch { }
      }
    };

    recognitionRef.current = recognition;
    try {
      recognition.start();
      setIsListening(true);
    } catch {
      setError("Não consegui ligar o microfone. Verifique a permissão.");
    }
  }, []);

  const stop = useCallback(() => {
    manualStopRef.current = true;
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  useEffect(() => {
    return () => { recognitionRef.current?.abort(); };
  }, []);

  return { isListening, error, start, stop, setError };
}
