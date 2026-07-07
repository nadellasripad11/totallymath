"use client";

import { useState } from "react";
import type { Game } from "@/lib/games";

interface Props {
  game: Game;
  variant?: "card" | "hero" | "tile";
}

export default function GameThumb({ game, variant = "card" }: Props) {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div
      className="game-thumb"
      style={{
        background: "#0d0d1a",
        aspectRatio: variant === "hero" ? "16/6" : "16/9",
      }}
    >
      {imgOk && (
        <img
          className="game-thumb-img"
          src={`/thumbs/${game.slug}.png`}
          alt={game.title}
          loading="lazy"
          onError={() => setImgOk(false)}
        />
      )}

      {!imgOk && (
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            fontWeight: 600,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "0 12px",
            textAlign: "center",
          }}
        >
          {game.title}
        </span>
      )}
    </div>
  );
}
