import { useEffect, useRef, useState, useCallback } from "react";

interface UseSpeechRecognitionOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (transcript: string, isFinal: boolean) => void;
  onError?: (error: string) => void;
  onStatusChange?: (status: "idle" | "listening" | "error") => void;
}

export function useSpeechRecognition(
  options: UseSpeechRecognitionOptions = {}
) {
  const {
    language = "pt-BR",
    continuous = true,
    interimResults = true,
    onResult,
    onError,
    onStatusChange,
  } = options;

  const recognitionRef = useRef<any>(null);
  const isListeningRef = useRef(false); // ← ref em vez de state no onend (sem bug de closure)
  const isStoppingRef = useRef(false);
  const hasNetworkErrorRef = useRef(false);

  // Callbacks em ref pra não recriar o recognition quando mudarem
  const onResultRef = useRef(onResult);
  const onErrorRef = useRef(onError);
  const onStatusChangeRef = useRef(onStatusChange);
  useEffect(() => {
    onResultRef.current = onResult;
  }, [onResult]);
  useEffect(() => {
    onErrorRef.current = onError;
  }, [onError]);
  useEffect(() => {
    onStatusChangeRef.current = onStatusChange;
  }, [onStatusChange]);

  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cria o recognition UMA VEZ só — sem dependências que mudam
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setIsSupported(false);
      setError(
        "Seu navegador não suporta reconhecimento de voz. Use Chrome, Edge ou Safari."
      );
      onStatusChangeRef.current?.("error");
      return;
    }

    setIsSupported(true);

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = continuous;
      recognition.interimResults = interimResults;
      recognition.lang = language;

      recognition.onstart = () => {
        console.log("✓ Reconhecimento iniciado");
        hasNetworkErrorRef.current = false;
        setError(null);
        onStatusChangeRef.current?.("listening");
      };

      recognition.onresult = (event: any) => {
        let interimTranscript = "";
        let finalTranscript = "";

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const text = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += text + " ";
          } else {
            interimTranscript += text;
          }
        }

        const current = (finalTranscript || interimTranscript).trim();
        if (current) {
          onResultRef.current?.(current, !!finalTranscript);
        }
      };

      recognition.onend = () => {
        console.log("✓ Reconhecimento finalizado");

        // Usa a ref (não o state) pra evitar closure stale
        if (
          isListeningRef.current &&
          !isStoppingRef.current &&
          !hasNetworkErrorRef.current
        ) {
          setTimeout(() => {
            if (isListeningRef.current && !isStoppingRef.current) {
              try {
                recognition.start();
              } catch {
                // já estava ativo, ignorar
              }
            }
          }, 500);
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error === "aborted" || event.error === "no-speech") return;
        if (isStoppingRef.current) return;

        console.error("Erro de reconhecimento:", event.error);

        if (event.error === "network") {
          hasNetworkErrorRef.current = true;
          console.warn("Erro de rede no reconhecimento de voz.");
          try {
            recognition.abort();
          } catch {
            /* ignorar */
          }

          isListeningRef.current = false;
          setIsListening(false);
          onStatusChangeRef.current?.("idle");
          setError(
            "Reconhecimento de voz indisponível. Verifique sua conexão."
          );
          onErrorRef.current?.("Reconhecimento de voz indisponível");
          return;
        }

        const messages: Record<string, string> = {
          "audio-capture": "Microfone não encontrado ou não permitido.",
          "not-allowed":
            "Permissão de microfone negada. Verifique as configurações do navegador.",
          "service-not-allowed": "Serviço de reconhecimento não disponível.",
        };

        const msg = messages[event.error] ?? `Erro: ${event.error}`;
        setError(msg);
        onErrorRef.current?.(msg);
        onStatusChangeRef.current?.("error");
        isListeningRef.current = false;
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    } catch (err) {
      console.error("Erro ao inicializar Speech Recognition:", err);
      setIsSupported(false);
      setError("Erro ao inicializar reconhecimento de voz");
      onStatusChangeRef.current?.("error");
    }

    return () => {
      // Cleanup ao desmontar componente
      isStoppingRef.current = true;
      try {
        recognitionRef.current?.abort();
      } catch {
        /* ignorar */
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // ← array vazio: cria UMA vez. language/continuous/interimResults são lidos na criação.

  const start = useCallback(async () => {
    if (!recognitionRef.current) {
      setError("Reconhecimento de voz não suportado");
      onStatusChangeRef.current?.("error");
      return;
    }

    try {
      isStoppingRef.current = false;
      hasNetworkErrorRef.current = false;

      isListeningRef.current = true;
      setIsListening(true);
      setError(null);
      onStatusChangeRef.current?.("listening");

      try {
        recognitionRef.current.start();
      } catch (err: any) {
        if (
          err.message?.includes("already started") ||
          err.name === "InvalidStateError"
        ) {
          console.log("Reconhecimento já está ativo");
        } else {
          throw err;
        }
      }
    } catch (err: any) {
      console.error("Erro ao iniciar reconhecimento:", err);

      const msg =
        err.name === "NotAllowedError"
          ? "Permissão de microfone negada. Clique no ícone de microfone na barra de endereço."
          : err.name === "NotFoundError"
            ? "Nenhum microfone encontrado no seu dispositivo."
            : "Erro ao acessar o microfone";

      setError(msg);
      isListeningRef.current = false;
      setIsListening(false);
      onStatusChangeRef.current?.("error");
    }
  }, []);

  const stop = useCallback(() => {
    isStoppingRef.current = true;
    isListeningRef.current = false;

    try {
      recognitionRef.current?.stop();
    } catch {
      /* ignorar */
    }

    setIsListening(false);
    onStatusChangeRef.current?.("idle");

    setTimeout(() => {
      isStoppingRef.current = false;
    }, 500);
  }, []);

  const abort = useCallback(() => {
    isStoppingRef.current = true;
    isListeningRef.current = false;

    try {
      recognitionRef.current?.abort();
    } catch {
      /* ignorar */
    }

    setIsListening(false);
    onStatusChangeRef.current?.("idle");

    setTimeout(() => {
      isStoppingRef.current = false;
    }, 500);
  }, []);

  return { isListening, isSupported, error, start, stop, abort };
}
