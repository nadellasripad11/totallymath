import Link from "next/link";
import type { Game } from "@/lib/games";
import GameThumb from "./GameThumb";

export default function GameCard({ game }: { game: Game }) {
  const primaryCategory = game.categories.find((c) => c !== "new" && c !== "popular") ?? game.categories[0];

  return (
    <Link href={`/game/${game.slug}`} className="game-card">
      <div className="thumb-wrap">
        <GameThumb game={game} />
        {game.categories.includes("new") && <span className="tag tag-new">NEW</span>}
        {game.categories.includes("popular") && !game.categories.includes("new") && (
          <span className="tag tag-hot">HOT</span>
        )}
        {game.selfHosted && <span className="tag tag-school">✓ SCHOOL</span>}
      </div>
      <div className="info">
        <span className="cat-badge">{primaryCategory}</span>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
    </Link>
  );
}
