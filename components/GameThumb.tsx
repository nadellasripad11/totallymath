"use client";

import { useState } from "react";
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
  const [imgOk, setImgOk] = useState(true);

  return (
    <div
      className="game-thumb"
      style={{
        background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
        aspectRatio: variant === "hero" ? "16/6" : "16/9",
      }}
    >
      {/* real logo image — covers the gradient when present; falls back on 404 */}
      {imgOk && (
        <img
          className="game-thumb-img"
          src={`/thumbs/${game.slug}.png`}
          alt={game.title}
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      )}

      {/* fallback icon + gradient (visible only when there's no image) */}
      {!imgOk && (
        <>
          <div className="game-thumb-dots" />
          <div className="game-thumb-sheen" />
          <span className="game-thumb-icon" style={{ fontSize: iconSize }}>
            {game.icon}
          </span>
          {showTitle && <span className="game-thumb-title">{game.title}</span>}
        </>
      )}
    </div>
  );
}
