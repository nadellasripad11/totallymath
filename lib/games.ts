export interface Game {
  slug: string;
  title: string;
  description: string;
  categories: Category[];
  url: string;
  thumbnail: string;
  featured?: boolean;
  /** true = game files hosted on our own domain, so it bypasses school filters */
  selfHosted?: boolean;
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

function thumb(slug: string, title: string): string {
  const palettes = [
    ["7c3aed", "ec4899"], ["3b82f6", "06b6d4"], ["ef4444", "f97316"],
    ["10b981", "14b8a6"], ["f59e0b", "ef4444"], ["8b5cf6", "3b82f6"],
    ["ec4899", "f43f5e"], ["06b6d4", "3b82f6"], ["84cc16", "10b981"],
    ["a855f7", "d946ef"],
  ];
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  const [a] = palettes[Math.abs(hash) % palettes.length];
  return `https://placehold.co/600x400/${a}/ffffff/webp?text=${encodeURIComponent(title)}&font=inter`;
}

function g(
  slug: string,
  title: string,
  description: string,
  categories: Category[],
  url: string,
  opts: { featured?: boolean; selfHosted?: boolean } = {},
): Game {
  return {
    slug,
    title,
    description,
    categories,
    url,
    thumbnail: thumb(slug, title),
    featured: opts.featured,
    selfHosted: opts.selfHosted,
  };
}

export const GAMES: Game[] = [
  // ═══════════════════════════════════════════════════════════
  // SELF-HOSTED — files live on OUR domain, so these bypass
  // school filters. The iframe never touches another website.
  // ═══════════════════════════════════════════════════════════
  g("hextris", "Hextris", "Addictive hexagonal puzzle inspired by Tetris. Rotate the hexagon to catch falling blocks.", ["new", "popular", "puzzle", "arcade"], "/games/hextris/index.html", { featured: true, selfHosted: true }),
  g("2048", "2048", "Slide numbered tiles to combine them and reach 2048. The all-time classic.", ["new", "popular", "puzzle"], "/games/2048/index.html", { featured: true, selfHosted: true }),
  g("custom-tetris", "Tetris", "Classic Tetris — stack the blocks, clear the lines, customize the rules.", ["new", "popular", "puzzle", "arcade"], "/games/custom-tetris/index.html", { featured: true, selfHosted: true }),
  g("astray", "Astray", "3D maze runner in WebGL. Navigate the twisting corridors and escape.", ["new", "adventure", "puzzle"], "/games/astray/index.html", { featured: true, selfHosted: true }),
  g("space-invaders", "Space Invaders", "The retro arcade classic. Defend Earth from the descending alien fleet.", ["new", "popular", "shooting", "arcade"], "/games/space-invaders/index.html", { featured: true, selfHosted: true }),
  g("clumsy-bird", "Clumsy Bird", "The Flappy Bird clone. Tap to flap through the pipes. Instantly rage-inducing.", ["popular", "arcade"], "/games/clumsy-bird/index.html", { featured: true, selfHosted: true }),
  g("snake-classic", "Snake", "The Nokia classic. Eat, grow, and don't bite your own tail.", ["popular", "arcade"], "/games/snake-classic/index.html", { selfHosted: true }),
  g("coffee-snake", "Coffee Snake", "A slick snake remake. Munch coffee beans, grow long, avoid the walls.", ["arcade"], "/games/coffee-snake/index.html", { selfHosted: true }),
  g("connect-four", "Connect Four", "Classic Connect 4 with an AI opponent. Line up four discs to win.", ["popular", "board", "puzzle"], "/games/connect-four/index.html", { selfHosted: true }),
  g("simon", "Simon", "The classic memory game. Watch the color pattern, then repeat it. Don't slip.", ["arcade", "puzzle"], "/games/simon/index.html", { selfHosted: true }),
  g("alien-invasion", "Alien Invasion", "Fast HTML5 shooter. Blast the alien wave before it reaches the ground.", ["shooting", "arcade"], "/games/alien-invasion/index.html", { selfHosted: true }),
  g("sorades", "SORADES 13K", "Intense scrolling shoot-'em-up in the vein of Raptor and Warning Forever.", ["shooting", "arcade"], "/games/sorades/index.html", { selfHosted: true }),
  g("spashal", "Spashal", "Space arcade action. Danger lurks around every corner — react fast.", ["action", "arcade"], "/games/spashal/index.html", { selfHosted: true }),
  g("save-the-forest", "Save The Forest", "Race to put out the fires and rescue the burning forest.", ["arcade", "adventure"], "/games/save-the-forest/index.html", { selfHosted: true }),

  // ═══════════════════════════════════════════════════════════
  // EXTERNAL — hosted elsewhere. Great off-campus, but your
  // school filter may block these (they load another domain).
  // ═══════════════════════════════════════════════════════════
  g("hexgl", "HexGL", "Blazing-fast futuristic WebGL racer. F-Zero vibes right in the browser.", ["racing"], "https://hexgl.bkcore.com/play/"),
  g("a-dark-room", "A Dark Room", "Minimalist text adventure that unfolds into something much bigger. Trust the fire.", ["adventure"], "https://adarkroom.doublespeakgames.com/"),
  g("asteroids", "Asteroids", "The classic Atari arcade shooter, faithfully recreated in pure JavaScript.", ["arcade", "shooting"], "https://dougmcinnes.com/html-5-asteroids/"),
  g("duckhunt", "Duck Hunt", "The NES classic ported to JavaScript. Includes a level creator.", ["shooting", "arcade"], "https://mattsurabian.com/duckhunt/"),
  g("onslaught-arena", "Onslaught Arena", "Fend off hordes of medieval monsters in a fast-paced arcade shooter.", ["action", "shooting"], "https://arcade.lostdecadegames.com/onslaught_arena/"),
  g("ski-free", "Ski Free", "The Windows classic. Dodge trees, jump ramps, escape the yeti.", ["arcade", "racing"], "https://basicallydan.github.io/skifree.js/"),
  g("super-mario-clone", "Super Mario", "Level 1-1 recreated with a full jump-and-stomp engine.", ["platformer", "arcade"], "https://martindrapeau.github.io/backbone-game-engine/super-mario-bros/index.html"),
  g("lichess", "Lichess", "The world's best free chess site. Play the AI or a real human right now.", ["board", "strategy"], "https://lichess.org/"),
  g("cookie-clicker", "Cookie Clicker", "The clicker that started it all. Bake cookies. Ascend. Rebalance reality.", ["clicker"], "https://orteil.dashnet.org/cookieclicker/"),
  g("browserquest", "BrowserQuest", "Mozilla's multiplayer mini-MMO. Explore, fight, and party up with strangers.", ["adventure"], "https://browserquest.herokuapp.com/"),
  g("polybranch", "PolyBranch", "Minimalist 3D dodger. Weave through branches at terminal velocity.", ["racing", "arcade"], "https://gregbatha.com/branches/"),
  g("0hh1", "0hh1", "Lovely little logic puzzle. Fill the grid without three-in-a-row.", ["puzzle", "board"], "https://0hh1.com/"),
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

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return GAMES.filter(
    (game) => game.title.toLowerCase().includes(q) || game.description.toLowerCase().includes(q),
  );
}
