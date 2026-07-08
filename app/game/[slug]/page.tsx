"use client";

import { use, useState, useRef } from "react";
import { notFound } from "next/navigation";
import { getGame, getControls, GAMES } from "@/lib/games";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import ProxyFrame from "@/components/ProxyFrame";

export default function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const game = getGame(slug);
  if (!game) notFound();

  const [showFallback, setShowFallback] = useState(false);
  const [started, setStarted] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);

  function goFullscreen() {
    setStarted(true);
    const el = frameRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      // request on next tick so the iframe is mounted before we expand
      requestAnimationFrame(() => el.requestFullscreen?.());
    }
  }

  const controls = getControls(game.slug);
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
        <button
          onClick={goFullscreen}
          className="btn btn-primary"
          style={{ marginLeft: "auto", fontSize: 12, padding: "5px 12px", display: "inline-flex", alignItems: "center", gap: 6 }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
          Fullscreen
        </button>
        <a
          href={game.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ fontSize: 12, padding: "5px 12px" }}
        >
          Open in Tab ↗
        </a>
      </div>

      <div style={{ padding: "20px", maxWidth: 1200, margin: "0 auto" }}>
        <div
          ref={frameRef}
          className="game-frame"
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
                background: "#0d0d1a",
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
                {controls.length > 0 && (
                  <div style={{ marginTop: 14, display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center", maxWidth: 340 }}>
                    {controls.slice(0, 3).flatMap((row) => row.keys).slice(0, 6).map((k, i) => (
                      <kbd key={`${k}-${i}`} className="kbd">{k}</kbd>
                    ))}
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", alignSelf: "center" }}>
                      to play
                    </span>
                  </div>
                )}
              </div>
            </button>
          ) : game.proxyUrl ? (
            <ProxyFrame gameUrl={game.proxyUrl} title={game.title} />
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
              background: "#0d0d1a",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={`/thumbs/${game.slug}.png`}
              alt={game.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
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

        {controls.length > 0 && (
          <section style={{ marginTop: 32 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
              <span>🎮</span> Controls
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: 12,
              }}
            >
              {controls.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "12px 14px",
                  }}
                >
                  <span style={{ display: "flex", gap: 5, flexWrap: "wrap", flexShrink: 0 }}>
                    {row.keys.map((k) => (
                      <kbd key={k} className="kbd">
                        {k}
                      </kbd>
                    ))}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{row.action}</span>
                </div>
              ))}
            </div>
          </section>
        )}

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
