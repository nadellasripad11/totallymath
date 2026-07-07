"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Game } from "@/lib/games";

export default function FeaturedSlider({ games }: { games: Game[] }) {
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % games.length), 4000);
    return () => clearInterval(t);
  }, [games.length]);

  const game = games[idx];
  const hasLogo = !failed[game.slug];

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid var(--border)",
        background: "var(--bg-card)",
        aspectRatio: "16/6",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      {/* background gradient based on active slot */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${game.grad[0]} 0%, ${game.grad[1]} 100%)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, rgba(8,8,15,0.15) 0%, rgba(8,8,15,0.8) 100%)`,
        }}
      />
      {hasLogo ? (
        <img
          src={`/thumbs/${game.slug}.png`}
          alt={game.title}
          onError={() => setFailed((f) => ({ ...f, [game.slug]: true }))}
          style={{
            position: "absolute",
            right: 32,
            top: "50%",
            transform: "translateY(-50%)",
            height: "72%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 20,
            boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
            pointerEvents: "none",
          }}
        />
      ) : (
        <span
          style={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 120,
            lineHeight: 1,
            opacity: 0.9,
            filter: "drop-shadow(0 6px 16px rgba(0,0,0,0.4))",
            pointerEvents: "none",
          }}
        >
          {game.icon}
        </span>
      )}
      {/* animated glow orbs */}
      <div style={{
        position: "absolute",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
        top: -80,
        right: 60,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)",
        bottom: -40,
        left: 120,
        pointerEvents: "none",
      }} />

      {/* content */}
      <div style={{ position: "relative", zIndex: 2, padding: "24px 32px", width: "100%" }}>
        <div style={{ marginBottom: 6, display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{
            fontSize: 10,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--accent-light)",
            background: "rgba(124,58,237,0.2)",
            padding: "2px 10px",
            borderRadius: 999,
            border: "1px solid var(--border)",
          }}>Featured</span>
          <span style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {game.categories.filter((c) => c !== "new" && c !== "popular").slice(0, 2).join(" · ")}
          </span>
        </div>
        <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 800, color: "#fff", marginBottom: 8, letterSpacing: "-0.02em" }}>
          {game.title}
        </h2>
        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16, maxWidth: 400 }}>
          {game.description}
        </p>
        <Link href={`/game/${game.slug}`} className="btn btn-primary" style={{ fontSize: 13, padding: "8px 20px" }}>
          Play Now →
        </Link>
      </div>

      {/* dot indicators */}
      <div style={{
        position: "absolute",
        bottom: 16,
        right: 20,
        display: "flex",
        gap: 6,
        zIndex: 3,
      }}>
        {games.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === idx ? "var(--accent-light)" : "rgba(255,255,255,0.2)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
