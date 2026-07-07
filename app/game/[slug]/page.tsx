"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { getGame, GAMES } from "@/lib/games";
import Link from "next/link";
import GameCard from "@/components/GameCard";

export default function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const game = getGame(slug);
  if (!game) notFound();

  const [showFallback, setShowFallback] = useState(false);
  const [started, setStarted] = useState(false);

  const related = GAMES.filter(
    (g) => g.slug !== game.slug && g.categories.some((c) => game.categories.includes(c)),
  ).slice(0, 6);

  return (
    <div style={{ minHeight: "calc(100vh - var(--navbar-h))" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 16px",
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: 13 }}>
          ← Games
        </Link>
        <span style={{ color: "var(--border)" }}>|</span>
        <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{game.title}</span>
        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ marginLeft: "auto", fontSize: 12, padding: "5px 12px" }}
        >
          Open in Tab ↗
        </a>
      </div>

      <div style={{ padding: "20px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/9",
            background: "#000",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid var(--border)",
          }}
        >
          {!started ? (
            <button
              onClick={() => setStarted(true)}
              style={{
                position: "absolute",
                inset: 0,
                background: "none",
                border: "none",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                color: "#fff",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${game.grad[0]} 0%, ${game.grad[1]} 100%)`,
                  filter: "brightness(0.55)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  fontSize: 160,
                  opacity: 0.25,
                  lineHeight: 1,
                }}
              >
                {game.icon}
              </span>
              <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                    boxShadow: "0 8px 32px var(--accent-glow)",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>Click to Play</div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{game.title}</div>
              </div>
            </button>
          ) : showFallback ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 16,
                padding: 20,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 48 }}>🎮</div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)" }}>{game.title}</h2>
              <p style={{ fontSize: 13, color: "var(--text-muted)", maxWidth: 360 }}>
                This game can&apos;t be embedded here. Open it in a new tab to play instantly.
              </p>
              <a href={game.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Play Now ↗
              </a>
            </div>
          ) : (
            <iframe
              src={game.url}
              title={game.title}
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="fullscreen; autoplay; gamepad"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-presentation"
              onError={() => setShowFallback(true)}
            />
          )}
        </div>

        <div style={{ marginTop: 20, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: `linear-gradient(135deg, ${game.grad[0]} 0%, ${game.grad[1]} 100%)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 60,
              flexShrink: 0,
            }}
          >
            {game.icon}
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", color: "var(--text)" }}>
              {game.title}
            </h1>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "8px 0" }}>
              {game.categories.map((c) => (
                <span
                  key={c}
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "var(--accent-light)",
                    background: "rgba(124,58,237,0.15)",
                    padding: "3px 10px",
                    borderRadius: 999,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
            <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{game.description}</p>
            {game.credit && (
              <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 12, opacity: 0.8 }}>
                Open-source game by{" "}
                <a href={game.credit.source} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-light)" }}>
                  {game.credit.author}
                </a>{" "}
                · {game.credit.license} license
              </p>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <section style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>
              You might also like
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 16,
              }}
            >
              {related.map((g) => (
                <GameCard key={g.slug} game={g} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
