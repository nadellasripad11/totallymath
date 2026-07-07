"use client";

import { useState, useEffect } from "react";
import FeaturedSlider from "@/components/FeaturedSlider";
import CategoryTabs from "@/components/CategoryTabs";
import GameCard from "@/components/GameCard";
import { getFeatured, getGamesByCategory, searchGames, GAMES, type Category } from "@/lib/games";
import { getFavorites, onFavoritesChanged } from "@/lib/favorites";

export default function HomePage() {
  const [category, setCategory] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const [showFavs, setShowFavs] = useState(false);
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    setFavs(getFavorites());
    return onFavoritesChanged(() => setFavs(getFavorites()));
  }, []);

  const featured = getFeatured();

  let games;
  if (query.trim()) {
    games = searchGames(query);
  } else if (showFavs) {
    games = GAMES.filter((g) => favs.includes(g.slug));
  } else {
    games = getGamesByCategory(category);
  }

  return (
    <div className="dot-bg" style={{ minHeight: "100%", padding: "24px 20px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FeaturedSlider games={featured} />

        <section style={{ marginTop: 40 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 12, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>Browse Games</h2>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search games..."
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 999,
                  padding: "6px 14px",
                  fontSize: 13,
                  color: "var(--text)",
                  outline: "none",
                  width: 200,
                }}
              />
              <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                {games.length} game{games.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {!query.trim() && (
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <button
                className={`pill${showFavs ? " active" : ""}`}
                onClick={() => setShowFavs((v) => !v)}
                style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
              >
                <span style={{ color: showFavs ? "#fff" : "#f43f5e" }}>♥</span>
                Favorites{favs.length > 0 ? ` (${favs.length})` : ""}
              </button>
              {!showFavs && <CategoryTabs active={category} onChange={setCategory} />}
            </div>
          )}

          {showFavs && games.length === 0 && (
            <p style={{ marginTop: 24, fontSize: 14, color: "var(--text-muted)" }}>
              No favorites yet — tap the ♥ on any game to save it here.
            </p>
          )}

          <div
            style={{
              marginTop: 20,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
