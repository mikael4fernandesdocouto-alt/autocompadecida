import { useState, useCallback } from "react";
import type { ScriptLine } from "@/lib/types";

export interface AppStatePreset {
  id: string;
  name: string;
  createdAt: string;
  lines: Pick<ScriptLine, "id" | "text" | "effectName" | "audioName">[];
  threshold: number;
}

const STORAGE_KEY = "autocomp-presets";

function loadPresets(): AppStatePreset[] {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; }
}

export function usePresets(
  onLoad: (preset: AppStatePreset) => void
) {
  const [presets, setPresets] = useState<AppStatePreset[]>(loadPresets);
  const [presetName, setPresetName] = useState("");

  const refresh = useCallback(() => setPresets(loadPresets()), []);

  const savePreset = useCallback(
    (lines: ScriptLine[], threshold: number) => {
      if (!presetName.trim()) return;
      const newPreset: AppStatePreset = {
        id: `preset-${Date.now()}`,
        name: presetName.trim(),
        createdAt: new Date().toISOString(),
        lines: lines.map(({ audioBlob, ...rest }) => ({ ...rest })),
        threshold,
      };
      const updated = [...presets, newPreset];
      setPresets(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setPresetName("");
    },
    [presetName, presets]
  );

  const deletePreset = useCallback(
    (id: string) => {
      const updated = presets.filter(p => p.id !== id);
      setPresets(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    },
    [presets]
  );

  const loadPreset = useCallback(
    (id: string) => {
      const preset = presets.find(p => p.id === id);
      if (preset) onLoad(preset);
    },
    [presets, onLoad]
  );

  const exportPresets = useCallback(() => {
    const blob = new Blob([JSON.stringify(presets, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `roteiro-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [presets]);

  const importPresets = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target?.result as string);
        const arr = Array.isArray(data) ? data : [data];
        const merged = [...arr, ...loadPresets()];
        setPresets(merged);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch { /* ignore */ }
    };
    reader.readAsText(file);
  }, []);

  return { presets, presetName, setPresetName, savePreset, deletePreset, loadPreset, exportPresets, importPresets, refresh };
}
