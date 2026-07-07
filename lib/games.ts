export interface Game {
  slug: string;
  title: string;
  description: string;
  categories: Category[];
  url: string;
  icon: string;
  grad: [string, string];
  featured?: boolean;
  /** true = game files hosted on our own domain, so it bypasses school filters */
  selfHosted?: boolean;
  /** attribution for the open-source game we self-host */
  credit?: { author: string; source: string; license: string };
}

export type Category =
  | "new"
  | "popular"
  | "action"
  | "racing"
  | "shooting"
  | "sports"
  | "puzzle"
  | "clicker"
  | "arcade"
  | "adventure"
  | "strategy"
  | "board"
  | "platformer";

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All Games" },
  { id: "new", label: "New" },
  { id: "popular", label: "Popular" },
  { id: "action", label: "Action" },
  { id: "arcade", label: "Arcade" },
  { id: "racing", label: "Racing" },
  { id: "shooting", label: "Shooting" },
  { id: "sports", label: "Sports" },
  { id: "puzzle", label: "Puzzle" },
  { id: "platformer", label: "Platformer" },
  { id: "adventure", label: "Adventure" },
  { id: "strategy", label: "Strategy" },
  { id: "board", label: "Board" },
  { id: "clicker", label: "Clicker" },
];

interface Opts {
  featured?: boolean;
  selfHosted?: boolean;
  credit?: { author: string; source: string; license: string };
}

function g(
  slug: string,
  title: string,
  description: string,
  categories: Category[],
  url: string,
  icon: string,
  grad: [string, string],
  opts: Opts = {},
): Game {
  return { slug, title, description, categories, url, icon, grad, ...opts };
}

export const GAMES: Game[] = [
  // ═══════════════════════════════════════════════════════════
  // SELF-HOSTED — files live on OUR domain, so these bypass
  // school filters. The iframe never touches another website.
  // ═══════════════════════════════════════════════════════════
  g("hextris", "Hextris", "Addictive hexagonal puzzle inspired by Tetris. Rotate the hexagon to catch falling blocks and clear layers.", ["new", "popular", "puzzle", "arcade"], "/games/hextris/index.html", "⬡", ["#10b981", "#0891b2"], { featured: true, selfHosted: true, credit: { author: "Garrett Finucane & contributors", source: "https://github.com/Hextris/hextris", license: "GPL-3.0" } }),
  g("2048", "2048", "Slide numbered tiles to combine them and reach 2048. The all-time classic number puzzle.", ["new", "popular", "puzzle"], "/games/2048/index.html", "🔢", ["#f59e0b", "#ef4444"], { featured: true, selfHosted: true, credit: { author: "Gabriele Cirulli", source: "https://github.com/gabrielecirulli/2048", license: "MIT" } }),
  g("custom-tetris", "Tetris", "Classic Tetris — stack the falling blocks, clear lines, and chase a high score.", ["new", "popular", "puzzle", "arcade"], "/games/custom-tetris/index.html", "🧱", ["#8b5cf6", "#3b82f6"], { featured: true, selfHosted: true, credit: { author: "Ondřej Žára", source: "https://github.com/ondras/custom-tetris", license: "MIT" } }),
  g("astray", "Astray", "3D marble maze in WebGL. Tilt and roll through the twisting corridors to reach the exit.", ["new", "adventure", "puzzle"], "/games/astray/index.html", "🌀", ["#6366f1", "#a855f7"], { featured: true, selfHosted: true, credit: { author: "Rye Terrell (wwwtyro)", source: "https://github.com/wwwtyro/Astray", license: "Unlicense" } }),
  g("space-invaders", "Space Invaders", "The retro arcade classic. Blast the descending alien fleet before it reaches Earth.", ["new", "popular", "shooting", "arcade"], "/games/space-invaders/index.html", "👾", ["#22c55e", "#15803d"], { featured: true, selfHosted: true, credit: { author: "StrykerKKD", source: "https://github.com/StrykerKKD/SpaceInvaders", license: "MIT" } }),
  g("clumsy-bird", "Clumsy Bird", "The Flappy Bird clone. Tap to flap through the pipes without crashing. Instantly rage-inducing.", ["popular", "arcade"], "/games/clumsy-bird/index.html", "🐤", ["#facc15", "#f97316"], { featured: true, selfHosted: true, credit: { author: "Ellison Leão", source: "https://github.com/ellisonleao/clumsy-bird", license: "MIT" } }),
  g("slime-volleyball", "Slime Volleyball", "The legendary 2-player volleyball. You vs a friend on one keyboard — first to 7 points wins.", ["new", "popular", "sports"], "/games/slime-volleyball/index.html", "🏐", ["#0ea5e9", "#2563eb"], { featured: true, selfHosted: true, credit: { author: "Clay (clay.io)", source: "https://github.com/claydotio/Slime-Volley", license: "MIT" } }),
  g("archery", "Archery", "Draw the bow, judge the distance, and nail the bullseye. Beat your best score.", ["new", "popular", "arcade", "sports"], "/games/archery/index.html", "🏹", ["#f43f5e", "#b91c1c"], { featured: true, selfHosted: true, credit: { author: "Adnan Toky", source: "https://github.com/Adnan-Toky/archery-game", license: "MIT" } }),
  g("retro-breakout", "Retro Ball", "Retro brick-breaker. Bounce the ball off your paddle, smash every block, don't let it drop.", ["new", "popular", "arcade"], "/games/retro-breakout/index.html", "🕹️", ["#ec4899", "#7c3aed"], { featured: true, selfHosted: true, credit: { author: "Yelle-stack", source: "https://github.com/Yelle-stack/BreakoutGame", license: "MIT" } }),
  g("snake-classic", "Snake", "The Nokia classic. Eat, grow longer, and don't bite your own tail.", ["popular", "arcade"], "/games/snake-classic/index.html", "🐍", ["#84cc16", "#16a34a"], { selfHosted: true, credit: { author: "jrgdiz", source: "https://github.com/jrgdiz/snake", license: "WTFPL" } }),
  g("coffee-snake", "Coffee Snake", "A slick snake remake. Munch coffee beans, grow long, avoid the walls.", ["arcade"], "/games/coffee-snake/index.html", "☕", ["#a16207", "#78350f"], { selfHosted: true, credit: { author: "Dommmel", source: "https://github.com/dommmel/coffee-snake", license: "MIT" } }),
  g("simon", "Simon", "The classic memory game. Watch the color pattern, then repeat it back. Don't slip up.", ["arcade", "puzzle"], "/games/simon/index.html", "🎨", ["#ef4444", "#22c55e"], { selfHosted: true, credit: { author: "gamedolphin", source: "https://github.com/gamedolphin/follow_me_javascript_simon_clone", license: "MIT" } }),
  g("alien-invasion", "Alien Invasion", "Fast HTML5 shooter. Blast the alien wave before it reaches the ground.", ["shooting", "arcade"], "/games/alien-invasion/index.html", "🛸", ["#14b8a6", "#0f766e"], { selfHosted: true, credit: { author: "Cykod / Pascal Rettig", source: "https://github.com/cykod/AlienInvasion", license: "MIT" } }),
  g("sorades", "Sorades 13K", "Intense scrolling shoot-'em-up in the vein of Raptor and Warning Forever.", ["shooting", "arcade"], "/games/sorades/index.html", "🚀", ["#6d28d9", "#1e1b4b"], { selfHosted: true, credit: { author: "Thiemo Mättig", source: "https://github.com/maettig/starship-sorades-13k", license: "MIT" } }),
  g("spashal", "Spashal", "Space arcade action. Danger lurks around every corner — react fast to survive.", ["action", "arcade"], "/games/spashal/index.html", "🌌", ["#4338ca", "#0f172a"], { selfHosted: true, credit: { author: "MrRar", source: "https://github.com/MrRar/spashal", license: "MIT" } }),
  g("save-the-forest", "Save The Forest", "Race against the flames to put out fires and rescue the burning forest.", ["arcade", "adventure"], "/games/save-the-forest/index.html", "🌲", ["#16a34a", "#065f46"], { selfHosted: true, credit: { author: "softvar (Varun Malhotra)", source: "https://github.com/softvar/save-the-forest", license: "MIT" } }),

  // ═══════════════════════════════════════════════════════════
  // EXTERNAL — hosted elsewhere. Great off-campus, but your
  // school filter may block these (they load another domain).
  // ═══════════════════════════════════════════════════════════
  g("hexgl", "HexGL", "Blazing-fast futuristic WebGL racer. F-Zero vibes right in the browser.", ["racing"], "https://hexgl.bkcore.com/play/", "🏎️", ["#06b6d4", "#3b82f6"]),
  g("a-dark-room", "A Dark Room", "Minimalist text adventure that unfolds into something much bigger. Trust the fire.", ["adventure"], "https://adarkroom.doublespeakgames.com/", "🔥", ["#f97316", "#7c2d12"]),
  g("asteroids", "Asteroids", "The classic Atari arcade shooter, faithfully recreated in pure JavaScript.", ["arcade", "shooting"], "https://dougmcinnes.com/html-5-asteroids/", "☄️", ["#64748b", "#1e293b"]),
  g("duckhunt", "Duck Hunt", "The NES classic ported to JavaScript. Includes a level creator.", ["shooting", "arcade"], "https://mattsurabian.com/duckhunt/", "🦆", ["#0ea5e9", "#0369a1"]),
  g("onslaught-arena", "Onslaught Arena", "Fend off hordes of medieval monsters in a fast-paced arcade shooter.", ["action", "shooting"], "https://arcade.lostdecadegames.com/onslaught_arena/", "⚔️", ["#dc2626", "#450a0a"]),
  g("ski-free", "Ski Free", "The Windows classic. Dodge trees, jump ramps, and outrun the yeti.", ["arcade", "racing"], "https://basicallydan.github.io/skifree.js/", "⛷️", ["#38bdf8", "#0c4a6e"]),
  g("super-mario-clone", "Super Mario", "Level 1-1 recreated with a full jump-and-stomp engine.", ["platformer", "arcade"], "https://martindrapeau.github.io/backbone-game-engine/super-mario-bros/index.html", "🍄", ["#ef4444", "#991b1b"]),
  g("lichess", "Lichess", "The world's best free chess site. Play the AI or a real human right now.", ["board", "strategy"], "https://lichess.org/", "♟️", ["#334155", "#0f172a"]),
  g("cookie-clicker", "Cookie Clicker", "The clicker that started it all. Bake cookies, ascend, and rebalance reality.", ["clicker"], "https://orteil.dashnet.org/cookieclicker/", "🍪", ["#b45309", "#78350f"]),
  g("browserquest", "BrowserQuest", "Mozilla's multiplayer mini-MMO. Explore, fight, and party up with strangers.", ["adventure"], "https://browserquest.herokuapp.com/", "🗺️", ["#0d9488", "#134e4a"]),
  g("polybranch", "PolyBranch", "Minimalist 3D dodger. Weave through branches at terminal velocity.", ["racing", "arcade"], "https://gregbatha.com/branches/", "🌿", ["#22c55e", "#14532d"]),
  g("0hh1", "0hh1", "Lovely little logic puzzle. Fill the grid without three of a color in a row.", ["puzzle", "board"], "https://0hh1.com/", "🟥", ["#3b82f6", "#1e40af"]),
  g("connect-four", "Connect Four", "Classic Connect 4 with an AI opponent. Line up four discs to win.", ["board", "puzzle"], "https://kenrick95.github.io/c4/demo/", "🔴", ["#eab308", "#ca8a04"]),
];

export function getGame(slug: string): Game | undefined {
  return GAMES.find((game) => game.slug === slug);
}

export function getGamesByCategory(cat: Category | "all"): Game[] {
  if (cat === "all") return GAMES;
  return GAMES.filter((game) => game.categories.includes(cat));
}

export function getFeatured(): Game[] {
  return GAMES.filter((game) => game.featured);
}

export function getSelfHosted(): Game[] {
  return GAMES.filter((game) => game.selfHosted);
}

export function getCredits(): Game[] {
  return GAMES.filter((game) => game.credit);
}

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return GAMES.filter(
    (game) => game.title.toLowerCase().includes(q) || game.description.toLowerCase().includes(q),
  );
}
