"use client";

import { useEffect, useState } from "react";
import { isFavorite, toggleFavorite, onFavoritesChanged } from "@/lib/favorites";

export default function FavoriteButton({ slug }: { slug: string }) {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    setFav(isFavorite(slug));
    return onFavoritesChanged(() => setFav(isFavorite(slug)));
  }, [slug]);

  function handle(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setFav(toggleFavorite(slug));
  }

  return (
    <button
      onClick={handle}
      aria-label={fav ? "Remove from favorites" : "Add to favorites"}
      className={`fav-btn${fav ? " active" : ""}`}
    >
      {fav ? "♥" : "♡"}
    </button>
  );
}
