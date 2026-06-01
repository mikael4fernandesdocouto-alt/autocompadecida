import { Card } from "@/components/ui/card";
import { ScriptLine, Character } from "@/lib/script";

interface TeleprompterViewProps {
  currentLine: ScriptLine | undefined;
  fontSize: number;
  highlightedWords: string[];
  selectedCharacter: Character | undefined;
  transcript?: string;
}

/**
 * DESIGN: Premium Teleprompter - MODO SPOTIFY
 * - Destaque MASSIVO da fala atual com relevo e sombra
 * - Alto contraste profissional
 * - Efeitos visuais sofisticados
 * - Fácil localização visual para ator em palco
 */

export default function TeleprompterView({
  currentLine,
  fontSize,
  highlightedWords,
  selectedCharacter,
  transcript
}: TeleprompterViewProps) {
  const highlightText = (text: string) => {
    if (highlightedWords.length === 0) {
      return text;
    }

    const words = text.split(/\s+/);
    return words.map((word, idx) => {
      const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, "");
      const isHighlighted = highlightedWords.some(hw => 
        cleanWord.includes(hw) || hw.includes(cleanWord)
      );

      if (isHighlighted && cleanWord.length > 0) {
        return (
          <span key={idx} className="animate-pulse" style={{
            background: "linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)",
            color: "#FFFFFF",
            padding: "8px 12px",
            borderRadius: "6px",
            fontWeight: "900",
            display: "inline-block",
            marginRight: "16px",
            marginBottom: "8px",
            textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            boxShadow: "0 4px 12px rgba(255, 107, 53, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
            transform: "scale(1.05)",
            letterSpacing: "0.5px"
          }}>
            {word}
          </span>
        );
      }
      return <span key={idx} style={{ marginRight: "16px", marginBottom: "8px", display: "inline-block" }}>{word}</span>;
    });
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0A0E27 0%, #1A1F3A 100%)",
        minHeight: "100vh",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card
        className="rounded-2xl shadow-2xl flex flex-col justify-center"
        style={{
          background: "linear-gradient(135deg, #0F1629 0%, #1A2847 100%)",
          border: "3px solid #FF8C42",
          color: "#FFFFFF",
          maxHeight: "800px",
          overflow: "auto",
          padding: "60px",
          boxShadow: "0 20px 60px rgba(255, 140, 66, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          position: "relative"
        }}
      >
        {/* Background glow effect */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255, 140, 66, 0.1) 0%, transparent 70%)",
            pointerEvents: "none"
          }}
        />

        <div style={{ position: "relative", zIndex: 1 }}>
          {currentLine ? (
            <div
              className="transition-all duration-300"
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: "2",
                fontFamily: "Inter, sans-serif"
              }}
            >
              {/* Character Name - DESTAQUE MASSIVO */}
              <div
                style={{
                  color: selectedCharacter?.color || "#FF8C42",
                  fontFamily: "Playfair Display, serif",
                  fontSize: `${fontSize * 0.9}px`,
                  fontWeight: "900",
                  marginBottom: "40px",
                  textTransform: "uppercase",
                  letterSpacing: "4px",
                  textShadow: "0 4px 12px rgba(255, 140, 66, 0.5)",
                  background: "linear-gradient(135deg, #FF8C42 0%, #FF6B35 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 2px 4px rgba(255, 140, 66, 0.3))"
                }}
              >
                {currentLine.character}
              </div>

              {/* Line Text with Highlighting - MODO SPOTIFY COM RELEVO */}
              <div
                style={{
                  fontSize: `${fontSize}px`,
                  lineHeight: "2.2",
                  color: "#FFFFFF",
                  minHeight: `${fontSize * 3}px`,
                  padding: "40px",
                  background: "linear-gradient(135deg, rgba(255, 140, 66, 0.05) 0%, rgba(255, 107, 53, 0.05) 100%)",
                  borderRadius: "12px",
                  border: "2px solid rgba(255, 140, 66, 0.2)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(255, 140, 66, 0.15)",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignContent: "flex-start"
                }}
              >
                {currentLine.text.includes("\n") ? (
                  <div>
                    {currentLine.text.split("\n").map((line, idx) => (
                      <div key={idx} style={{ marginBottom: "20px" }}>
                        {highlightText(line)}
                      </div>
                    ))}
                  </div>
                ) : (
                  highlightText(currentLine.text)
                )}
              </div>

              {/* Notes (stage directions) */}
              {currentLine.notes && (
                <div
                  style={{
                    fontSize: `${fontSize * 0.6}px`,
                    color: "#FFB380",
                    fontStyle: "italic",
                    marginTop: "40px",
                    padding: "20px",
                    background: "rgba(255, 140, 66, 0.1)",
                    borderLeft: "4px solid #FF8C42",
                    borderRadius: "4px",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                  }}
                >
                  {currentLine.notes}
                </div>
              )}

              {/* Transcript display */}
              {transcript && (
                <div
                  style={{
                    fontSize: `${fontSize * 0.55}px`,
                    color: "#FFFFFF",
                    marginTop: "40px",
                    padding: "20px",
                    background: "linear-gradient(135deg, rgba(44, 95, 141, 0.3) 0%, rgba(255, 140, 66, 0.1) 100%)",
                    borderRadius: "8px",
                    border: "2px solid #FF8C42",
                    boxShadow: "0 4px 12px rgba(255, 140, 66, 0.2)",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                  }}
                >
                  <strong style={{ color: "#FF8C42" }}>🎤 Reconhecido:</strong> {transcript}
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                fontSize: `${fontSize}px`,
                color: "#FFB380",
                textAlign: "center",
                opacity: 0.7,
                textShadow: "0 2px 4px rgba(0,0,0,0.5)"
              }}
            >
              Selecione um personagem para começar
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
