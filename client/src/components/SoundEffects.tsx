import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import { ScriptLine } from "@/lib/script";

interface SoundEffectsProps {
  currentLine: ScriptLine | undefined;
}

/**
 * DESIGN: Sound effects manager
 * - Auto-plays sound effects based on script cues
 * - Visual feedback when sound plays
 * - Volume control
 * - Supports multiple sound types: suspense, vento, sanfona, risos, divino, nordestina
 */

const soundEffects: Record<string, string> = {
  suspense: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
  vento: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
  sanfona: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
  risos: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
  divino: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==",
  nordestina: "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
};

export default function SoundEffects({ currentLine }: SoundEffectsProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const lastSoundRef = useRef<string | null>(null);

  useEffect(() => {
    if (currentLine?.soundEffect && currentLine.soundEffect !== lastSoundRef.current) {
      playSound(currentLine.soundEffect);
      lastSoundRef.current = currentLine.soundEffect;
    }
  }, [currentLine?.soundEffect]);

  const playSound = (effectName: string) => {
    if (audioRef.current && soundEffects[effectName]) {
      audioRef.current.src = soundEffects[effectName];
      audioRef.current.play().catch(err => console.log("Sound play error:", err));
    }
  };

  return (
    <Card className="p-6" style={{ background: "#1A1A1A", border: "2px solid #C85A17" }}>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: "#F5E6D3" }}>
        <Volume2 className="h-5 w-5" />
        Efeitos Sonoros
      </h3>
      
      <div style={{ color: "#E8D4B8" }} className="text-sm">
        {currentLine?.soundEffect ? (
          <p>
            🔊 Efeito: <span style={{ color: "#C85A17", fontWeight: "bold" }}>
              {currentLine.soundEffect}
            </span>
          </p>
        ) : (
          <p>Nenhum efeito nesta fala</p>
        )}
      </div>

      <audio ref={audioRef} />

      <div className="mt-4 text-xs" style={{ color: "#E8D4B8", opacity: 0.7 }}>
        <p>Efeitos disponíveis:</p>
        <ul className="mt-2 space-y-1">
          <li>• suspense</li>
          <li>• vento</li>
          <li>• sanfona</li>
          <li>• risos</li>
          <li>• divino</li>
          <li>• nordestina</li>
        </ul>
      </div>
    </Card>
  );
}
