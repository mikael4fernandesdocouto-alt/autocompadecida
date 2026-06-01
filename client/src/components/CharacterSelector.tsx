import { Character } from "@/lib/script";

interface CharacterSelectorProps {
  characters: Character[];
  selectedId: string;
  onSelect: (id: string) => void;
}

/**
 * DESIGN: Character selection grid
 * - Color-coded buttons for each character
 * - Shows character description on hover
 * - Responsive grid layout
 * - Clear visual feedback for selected character
 */

export default function CharacterSelector({
  characters,
  selectedId,
  onSelect,
}: CharacterSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {characters.map(character => (
        <button
          key={character.id}
          onClick={() => onSelect(character.id)}
          className="p-3 rounded-lg transition-all duration-200 hover:scale-105 relative group"
          style={{
            background:
              selectedId === character.id ? character.color : "#2C5F8D",
            color: selectedId === character.id ? "#1A1A1A" : "#F5E6D3",
            border:
              selectedId === character.id
                ? "3px solid #F5E6D3"
                : "2px solid transparent",
            fontWeight: selectedId === character.id ? "bold" : "normal",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {character.displayName}

          {/* Tooltip */}
          <div
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded whitespace-nowrap z-10"
            style={{ background: "#1A1A1A", border: "1px solid #C85A17" }}
          >
            {character.description}
          </div>
        </button>
      ))}
    </div>
  );
}
