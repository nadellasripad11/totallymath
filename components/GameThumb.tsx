import type { Game } from "@/lib/games";

interface Props {
  game: Game;
  /** rendered size context — controls icon + title scale */
  variant?: "card" | "hero" | "tile";
}

export default function GameThumb({ game, variant = "card" }: Props) {
  const [c1, c2] = game.grad;
  const iconSize = variant === "hero" ? 96 : variant === "tile" ? 56 : 68;
  const showTitle = variant !== "tile";

  return (
    <div
      className="game-thumb"
      style={{
        background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
        aspectRatio: variant === "hero" ? "16/6" : "16/9",
      }}
    >
      {/* subtle dot texture */}
      <div className="game-thumb-dots" />
      {/* glossy sheen */}
      <div className="game-thumb-sheen" />
      <span className="game-thumb-icon" style={{ fontSize: iconSize }}>
        {game.icon}
      </span>
      {showTitle && <span className="game-thumb-title">{game.title}</span>}
    </div>
  );
}
