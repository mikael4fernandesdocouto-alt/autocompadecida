import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { PanelLeft, Trash2 } from "lucide-react";
import type { ScriptLine } from "@/lib/types";
import { defaultLines, makeId, now } from "@/lib/types";
import { loadState, saveState } from "@/lib/db";
import { similarityPercent } from "@/lib/similarity";
import { playSyntheticLaugh, playFallbackBeep, playAudioBlob } from "@/lib/audio";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { usePresets, type AppStatePreset } from "@/hooks/usePresets";
import LineList from "@/components/LineList";
import LineEditor from "@/components/LineEditor";
import StatusPanel from "@/components/StatusPanel";
import ToggleSidebar from "@/components/ToggleSidebar";

export default function App() {
  const [lines, setLines] = useState<ScriptLine[]>(defaultLines);
  const [selectedLineId, setSelectedLineId] = useState("");
  const [threshold, setThreshold] = useState(60);
  const [transcript, setTranscript] = useState("");
  const [status, setStatus] = useState("Carregando...");
  const [isLoaded, setIsLoaded] = useState(false);
  const [lastMatch, setLastMatch] = useState<{ line: ScriptLine; score: number } | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const cooldownRef = useRef<Record<string, number>>({});
  const transcriptRef = useRef(transcript);
  useEffect(() => { transcriptRef.current = transcript; }, [transcript]);

  const selectedLine = useMemo(
    () => lines.find(l => l.id === selectedLineId) ?? lines[0],
    [lines, selectedLineId]
  );

  const { presets, presetName, setPresetName, savePreset, deletePreset, loadPreset, exportPresets, importPresets } =
    usePresets(onLoadPreset);

  function onLoadPreset(preset: AppStatePreset) {
    const restored: ScriptLine[] = preset.lines.map(l => ({
      ...l,
      audioBlob: undefined,
      audioName: l.audioName,
      createdAt: now(),
      updatedAt: now(),
    }));
    setLines(restored);
    setThreshold(preset.threshold);
    setSelectedLineId(restored[0]?.id ?? "");
    setStatus(`Preset "${preset.name}" carregado.`);
  }

  const checkTranscript = useCallback((spoken: string) => {
    const candidates = lines
      .filter(l => l.text.trim())
      .map(l => ({ line: l, score: similarityPercent(spoken, l.text) }))
      .sort((a, b) => b.score - a.score);

    const best = candidates[0];
    if (!best || best.score < threshold) return;

    const lastPlayed = cooldownRef.current[best.line.id] ?? 0;
    if (Date.now() - lastPlayed < 3500) return;

    cooldownRef.current[best.line.id] = Date.now();
    setLastMatch(best);
    setSelectedLineId(best.line.id);
    setStatus(`Detectei "${best.line.text}" (${best.score}%). Tocando: ${best.line.effectName}.`);
    playEffect(best.line);
  }, [lines, threshold]);

  const playEffect = useCallback((line: ScriptLine) => {
    if (line.audioBlob) {
      playAudioBlob(line.audioBlob, () => setStatus("Erro ao tocar áudio."))
        .catch(() => setStatus("Navegador bloqueou áudio."));
      return;
    }
    if (line.effectName.toLowerCase().includes("risada") || line.text.toLowerCase().includes("mudem de ideia")) {
      playSyntheticLaugh();
    } else {
      playFallbackBeep();
    }
  }, []);

  const handleResult = useCallback((text: string) => {
    setTranscript(text);
    checkTranscript(text);
  }, [checkTranscript]);

  const { isListening, error: speechError, start: startSpeech, stop: stopSpeech, setError } = useSpeechRecognition({
    onResult: handleResult,
  });

  useEffect(() => {
    let cancelled = false;
    loadState()
      .then(stored => {
        if (cancelled) return;
        if (stored?.lines?.length) {
          setLines(stored.lines);
          setThreshold(stored.threshold ?? 60);
          setSelectedLineId(stored.lines[0].id);
          setStatus("Roteiro carregado.");
        } else {
          const initial = defaultLines();
          setLines(initial);
          setSelectedLineId(initial[0].id);
          setStatus("Roteiro inicial criado.");
        }
      })
      .catch(() => {
        const initial = defaultLines();
        setLines(initial);
        setSelectedLineId(initial[0].id);
        setStatus("Falha ao carregar storage.");
      })
      .finally(() => { if (!cancelled) setIsLoaded(true); });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    const timer = setTimeout(() => {
      saveState({ version: 1, threshold, lines })
        .then(() => setStatus("Salvo automaticamente."))
        .catch(() => setStatus("Falha ao salvar."));
    }, 350);
    return () => clearTimeout(timer);
  }, [isLoaded, lines, threshold]);

  const updateSelectedLine = useCallback((patch: Partial<ScriptLine>) => {
    if (!selectedLine) return;
    setLines(prev => prev.map(l => (l.id === selectedLine.id ? { ...l, ...patch, updatedAt: now() } : l)));
  }, [selectedLine]);

  const addLine = useCallback(() => {
    const line: ScriptLine = {
      id: makeId(), text: "", effectName: "Novo efeito", createdAt: now(), updatedAt: now(),
    };
    setLines(prev => [line, ...prev]);
    setSelectedLineId(line.id);
  }, []);

  const deleteSelectedLine = useCallback(() => {
    if (!selectedLine || lines.length === 1) return;
    const next = lines.filter(l => l.id !== selectedLine.id);
    setLines(next);
    setSelectedLineId(next[0]?.id ?? "");
    delete cooldownRef.current[selectedLine.id];
  }, [selectedLine, lines]);

  const handleFileUpload = useCallback((file?: File) => {
    if (!file || !selectedLine) return;
    updateSelectedLine({
      audioBlob: file,
      audioName: file.name,
      effectName: selectedLine.effectName || file.name.replace(/\.[^/.]+$/, ""),
    });
    setStatus(`Arquivo "${file.name}" anexado.`);
  }, [selectedLine, updateSelectedLine]);

  const handleToggleMic = useCallback(() => {
    if (isListening) {
      stopSpeech();
      setStatus("Microfone desligado.");
    } else {
      startSpeech();
      setStatus("Microfone ligado.");
    }
  }, [isListening, startSpeech, stopSpeech]);

  const clearAll = useCallback(() => {
    const initial = defaultLines();
    setLines(initial);
    setSelectedLineId(initial[0].id);
    setTranscript("");
    setLastMatch(null);
    setStatus("Roteiro reiniciado.");
  }, []);

  const bestPreview = transcript && selectedLine ? similarityPercent(transcript, selectedLine.text) : 0;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl border-x border-[#00f0ff]/10 lg:grid lg:grid-cols-[400px_1fr]">
        {/* Lines List - Left Panel */}
        <LineList
          lines={lines}
          selectedLineId={selectedLineId}
          onSelect={setSelectedLineId}
          onAdd={addLine}
          onDelete={deleteSelectedLine}
          canDelete={lines.length > 1}
        />

        {/* Editor + Status - Right Panel */}
        <div className="flex flex-col min-h-screen bg-[#0b0b0b]">
          <header className="flex items-center justify-between border-b border-[#00f0ff]/10 px-5 py-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#00f0ff]/50 font-mono">
                Editar fala
              </p>
              <p className="mt-0.5 text-xs text-white/30">
                Alterações salvas automaticamente
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleToggleMic}
                className={`h-8 px-4 text-[11px] font-bold rounded-full ${
                  isListening
                    ? "bg-[#ff00aa] text-black animate-pulse"
                    : "bg-gradient-to-r from-[#00f0ff] to-[#7c3aed] text-black hover:opacity-90"
                }`}
              >
                {isListening ? "Parar" : "Ligar mic"}
              </Button>
              <Button
                variant="ghost" size="icon"
                onClick={() => setSidebarOpen(true)}
                className="h-8 w-8 text-[#ff00aa]/60 hover:text-[#ff00aa] hover:bg-[#ff00aa]/10 border border-[#ff00aa]/20"
              >
                <PanelLeft className="h-4 w-4" />
              </Button>
            </div>
          </header>

          <LineEditor
            line={selectedLine}
            onUpdate={updateSelectedLine}
            onPlayEffect={() => selectedLine && playEffect(selectedLine)}
            onFileUpload={handleFileUpload}
          />

          <div className="border-t border-[#00f0ff]/10" />

          <StatusPanel
            status={status}
            error={speechError ?? ""}
            transcript={transcript}
            bestPreview={bestPreview}
            lastMatch={lastMatch}
          />
        </div>
      </div>

      <ToggleSidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(false)}
        threshold={threshold}
        onThresholdChange={setThreshold}
        isListening={isListening}
        onToggleMic={handleToggleMic}
        lines={lines}
        onLoadPreset={onLoadPreset}
      />
    </main>
  );
}
