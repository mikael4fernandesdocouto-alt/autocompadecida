import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PanelLeftClose, PanelLeft, Mic, MicOff, Music, Volume2 } from "lucide-react";
import PresetsPanel from "@/components/PresetsPanel";
import type { ScriptLine } from "@/lib/types";
import type { AppStatePreset } from "@/hooks/usePresets";
import { usePresets } from "@/hooks/usePresets";

interface ToggleSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  threshold: number;
  onThresholdChange: (value: number) => void;
  isListening: boolean;
  onToggleMic: () => void;
  lines: ScriptLine[];
  onLoadPreset: (preset: AppStatePreset) => void;
}

export default function ToggleSidebar({
  isOpen, onToggle, threshold, onThresholdChange, isListening, onToggleMic, lines, onLoadPreset,
}: ToggleSidebarProps) {
  const {
    presets, presetName, setPresetName, savePreset, deletePreset, loadPreset, exportPresets, importPresets,
  } = usePresets(onLoadPreset);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-72 bg-[#050508] border-l border-[#ff00aa]/20 shadow-[-4px_0_30px_rgba(255,0,170,0.1)] flex flex-col">
      <div className="flex items-center justify-between p-3 border-b border-[#ff00aa]/10">
        <span className="text-xs font-bold tracking-widest text-[#ff00aa] uppercase">Extras</span>
        <Button variant="ghost" size="icon" onClick={onToggle} className="h-7 w-7 text-[#ff00aa]/60 hover:text-[#ff00aa]">
          <PanelLeftClose className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-3">
        <div className="space-y-6">
          <PresetsPanel
            presets={presets}
            presetName={presetName}
            onPresetNameChange={setPresetName}
            onSave={() => savePreset(lines, threshold)}
            onLoad={loadPreset}
            onDelete={deletePreset}
            onExport={exportPresets}
            onImport={importPresets}
            linesCount={lines.length}
          />

          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-widest text-[#ff00aa] uppercase">
              <Volume2 className="h-3 w-3 inline mr-1" /> Áudio & Voz
            </h3>

            <div className="p-3 rounded-lg bg-[#ff00aa]/5 border border-[#ff00aa]/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-white/60">Microfone</span>
                <button
                  onClick={onToggleMic}
                  className={`px-3 py-1 rounded text-[10px] font-bold transition-all ${
                    isListening
                      ? "bg-[#ff00aa] text-black animate-pulse"
                      : "bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30"
                  }`}
                >
                  {isListening ? "Ligado" : "Desligado"}
                </button>
              </div>

              <label className="text-[10px] uppercase tracking-wider text-white/40">
                Similaridade: {threshold}%
              </label>
              <input
                type="range" min="40" max="95" value={threshold}
                onChange={e => onThresholdChange(Number(e.target.value))}
                className="w-full h-1.5 mt-1.5 rounded-full appearance-none cursor-pointer"
                style={{ background: "linear-gradient(to right, #00f0ff, #ff00aa)", outline: "none" }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-widest text-[#ff00aa] uppercase">
              <Music className="h-3 w-3 inline mr-1" /> Efeitos
            </h3>
            <div className="p-3 rounded-lg bg-[#ff00aa]/5 border border-[#ff00aa]/10">
              <p className="text-[10px] text-white/40 leading-relaxed">
                Se uma fala não tiver áudio, o site usa risada sintética ou beep como fallback. {lines.filter(l => l.audioBlob).length}/{lines.length} falas com áudio.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold tracking-widest text-[#ff00aa] uppercase">Info</h3>
            <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
              <p className="text-[10px] text-yellow-400/70 leading-relaxed">
                Os dados ficam salvos no navegador via IndexedDB. O site não tem servidor próprio.
              </p>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
