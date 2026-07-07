"use client";

import { useState } from "react";
import FeaturedSlider from "@/components/FeaturedSlider";
import CategoryTabs from "@/components/CategoryTabs";
import GameCard from "@/components/GameCard";
import { getFeatured, getGamesByCategory, searchGames, type Category } from "@/lib/games";

export default function HomePage() {
  const [category, setCategory] = useState<Category | "all">("all");
  const [query, setQuery] = useState("");
  const featured = getFeatured();
  const games = query.trim() ? searchGames(query) : getGamesByCategory(category);

  return (
    <div
      className="dot-bg"
      style={{ minHeight: "100%", padding: "24px 20px 40px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* featured */}
        <FeaturedSlider games={featured} />

        {/* popular strip */}
        <section style={{ marginTop: 40 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 12, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)" }}>
              Browse Games
            </h2>
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

          {!query.trim() && <CategoryTabs active={category} onChange={setCategory} />}

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
