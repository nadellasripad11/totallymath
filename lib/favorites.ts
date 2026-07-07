const KEY = "tm-favorites";
const EVENT = "tm-favorites-changed";

export function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function isFavorite(slug: string): boolean {
  return getFavorites().includes(slug);
}

export function toggleFavorite(slug: string): boolean {
  const favs = getFavorites();
  const idx = favs.indexOf(slug);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(slug);
  try {
    localStorage.setItem(KEY, JSON.stringify(favs));
    window.dispatchEvent(new Event(EVENT));
  } catch {
    // ignore
  }
  return favs.includes(slug);
}

export function onFavoritesChanged(cb: () => void): () => void {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
}
