import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, FolderOpen, Download, Upload, Trash2 } from "lucide-react";
import type { AppStatePreset } from "@/hooks/usePresets";

interface PresetsPanelProps {
  presets: AppStatePreset[];
  presetName: string;
  onPresetNameChange: (name: string) => void;
  onSave: () => void;
  onLoad: (id: string) => void;
  onDelete: (id: string) => void;
  onExport: () => void;
  onImport: (file: File) => void;
  linesCount: number;
}

export default function PresetsPanel({
  presets, presetName, onPresetNameChange, onSave, onLoad, onDelete, onExport, onImport, linesCount,
}: PresetsPanelProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImport = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) onImport(file);
      e.target.value = "";
    },
    [onImport]
  );

  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold tracking-widest text-[#00f0ff] uppercase">
        Presets
      </h3>

      <div className="flex gap-2">
        <Input
          value={presetName}
          onChange={e => onPresetNameChange(e.target.value)}
          placeholder="Nome do preset..."
          className="flex-1 h-8 text-xs bg-[#0a0a0f] border-[#00f0ff]/30 text-white placeholder:text-white/30"
          onKeyDown={e => e.key === "Enter" && onSave()}
        />
        <Button
          size="icon"
          onClick={onSave}
          className="h-8 w-8 bg-[#00f0ff]/20 hover:bg-[#00f0ff]/40 border border-[#00f0ff]/50 text-[#00f0ff]"
        >
          <Save className="h-3.5 w-3.5" />
        </Button>
      </div>

      <div className="flex gap-2">
        <input type="file" accept=".json" ref={fileInputRef} className="hidden" onChange={handleImport} />
        <Button
          variant="ghost" size="sm" onClick={onExport}
          className="flex-1 h-7 text-[10px] text-[#00f0ff]/70 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 border border-[#00f0ff]/20"
        >
          <Download className="h-3 w-3 mr-1" /> Export
        </Button>
        <Button
          variant="ghost" size="sm" onClick={() => fileInputRef.current?.click()}
          className="flex-1 h-7 text-[10px] text-[#00f0ff]/70 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 border border-[#00f0ff]/20"
        >
          <Upload className="h-3 w-3 mr-1" /> Import
        </Button>
      </div>

      {presets.length === 0 && (
        <p className="text-[10px] text-white/30 text-center py-2">Nenhum preset salvo</p>
      )}

      <div className="space-y-1.5 max-h-48 overflow-y-auto">
        {presets.map(preset => (
          <div
            key={preset.id}
            className="flex items-center gap-1.5 p-1.5 rounded bg-[#00f0ff]/5 border border-[#00f0ff]/10 hover:border-[#00f0ff]/30 transition-colors group"
          >
            <button onClick={() => onLoad(preset.id)} className="flex-1 text-left">
              <div className="text-xs text-white/80 group-hover:text-[#00f0ff] transition-colors truncate">
                <FolderOpen className="h-3 w-3 inline mr-1 text-[#00f0ff]/60" />
                {preset.name}
              </div>
              <div className="text-[9px] text-white/30">
                {new Date(preset.createdAt).toLocaleDateString("pt-BR")} · {preset.lines.length} falas · {preset.threshold}%
              </div>
            </button>
            <button
              onClick={() => onDelete(preset.id)}
              className="p-1 rounded hover:bg-red-500/20 text-red-400/50 hover:text-red-400 transition-colors"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
