export interface Game {
  slug: string;
  title: string;
  description: string;
  categories: Category[];
  url: string;
  thumbnail: string;
  featured?: boolean;
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

// gradient thumbnail generator — deterministic per slug for consistent look
function thumb(slug: string, title: string): string {
  const palettes = [
    ["7c3aed", "ec4899"],
    ["3b82f6", "06b6d4"],
    ["ef4444", "f97316"],
    ["10b981", "14b8a6"],
    ["f59e0b", "ef4444"],
    ["8b5cf6", "3b82f6"],
    ["ec4899", "f43f5e"],
    ["06b6d4", "3b82f6"],
    ["84cc16", "10b981"],
    ["a855f7", "d946ef"],
  ];
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) | 0;
  const [a, b] = palettes[Math.abs(hash) % palettes.length];
  return `https://placehold.co/600x400/${a}/ffffff/webp?text=${encodeURIComponent(title)}&font=inter`;
}

function g(
  slug: string,
  title: string,
  description: string,
  categories: Category[],
  url: string,
  featured = false,
  customThumb?: string,
): Game {
  return {
    slug,
    title,
    description,
    categories,
    url,
    thumbnail: customThumb ?? thumb(slug, title),
    featured,
  };
}

// All URLs verified to be publicly playable open-source games that permit iframe embedding.
export const GAMES: Game[] = [
  // ─── FEATURED / POPULAR ─────────────────────────────────────
  g("hextris", "Hextris", "Addictive hexagonal puzzle inspired by Tetris. Rotate the hexagon to catch falling blocks.", ["new", "popular", "puzzle", "arcade"], "https://hextris.io/", true),
  g("hexgl", "HexGL", "Blazing-fast futuristic WebGL racing game. F-Zero vibes right in the browser.", ["new", "popular", "racing"], "https://hexgl.bkcore.com/play/", true),
  g("astray", "Astray", "3D maze runner in WebGL. Navigate the twisting corridors and escape.", ["new", "adventure", "puzzle"], "https://wwwtyro.github.io/Astray/", true),
  g("a-dark-room", "A Dark Room", "Minimalist text adventure that unfolds into something much bigger. Trust the fire.", ["popular", "adventure"], "https://adarkroom.doublespeakgames.com/", true),
  g("clumsy-bird", "Clumsy Bird", "The Flappy Bird clone, in your browser. Tap to flap. Rage instantly.", ["popular", "arcade"], "https://ellisonleao.github.io/clumsy-bird/", true),
  g("connect-four", "Connect Four", "Classic Connect 4 with an AI opponent. Line up four discs to win.", ["popular", "board", "puzzle"], "https://kenrick95.github.io/c4/demo/", true),

  // ─── PUZZLE ─────────────────────────────────────────────────
  g("custom-tetris", "Custom Tetris", "Classic Tetris — customize the rules however you like.", ["puzzle", "arcade"], "https://ondras.github.io/custom-tetris/"),
  g("hex-2048", "Hex 2048", "Hexagonal twist on the 2048 sliding puzzle. Combine tiles to hit big numbers.", ["puzzle"], "https://jeffhou.github.io/hex-2048/"),
  g("hexahedral", "Hexahedral", "Push blocks in the minimum number of moves. Deceptively brainy.", ["puzzle"], "https://matthewminer.com/hexahedral"),
  g("0hh1", "0hh1", "Lovely little logic puzzle. Fill the grid without three-in-a-row.", ["puzzle", "board"], "https://0hh1.com/"),
  g("0hn0", "0hh0", "0hh1's companion puzzle. Point dots at each other under strict rules.", ["puzzle", "board"], "https://0hh0.com/"),
  g("cube-composer", "Cube Composer", "Puzzle inspired by functional programming. Chain transformations to solve.", ["puzzle"], "https://david-peter.de/cube-composer/"),
  g("anagramica", "Anagramica", "Rearrange letters to form as many words as you can before time's up.", ["puzzle"], "https://www.anagramica.com/"),
  g("nonogram", "Nonograms Katana", "Japanese picture logic puzzles. Fill cells by the numeric clues.", ["puzzle"], "https://nonograms.org/"),

  // ─── RACING / ARCADE ────────────────────────────────────────
  g("polybranch", "PolyBranch", "Minimalist 3D dodger. Weave through branches as you plummet at terminal velocity.", ["racing", "arcade"], "https://gregbatha.com/branches/"),
  g("ski-free", "Ski Free", "The classic Windows 3.1 Ski Free game. Dodge trees. Escape the yeti.", ["popular", "arcade", "racing"], "https://basicallydan.github.io/skifree.js/"),
  g("save-the-forest", "Save The Forest", "Race to put out fires and rescue the burning forest.", ["arcade", "adventure"], "https://js13kgames.com/games/save-the-forest/index.html"),

  // ─── ARCADE / SHOOTERS ──────────────────────────────────────
  g("asteroids", "Asteroids", "The classic Atari arcade shooter, faithfully recreated in pure JavaScript.", ["popular", "arcade", "shooting"], "https://dougmcinnes.com/html-5-asteroids/"),
  g("space-invaders", "Space Invaders", "Retro Space Invaders remake. Defend Earth from the alien onslaught.", ["popular", "arcade", "shooting"], "https://strykerkkd.github.io/SpaceInvaders/"),
  g("flxteroids", "FlxTeroids", "Fast, tight arcade shooter inspired by the Atari original.", ["arcade", "shooting"], "https://flixel.org/flxteroids/"),
  g("alien-invasion", "Alien Invasion", "Mobile-friendly HTML5 shooter demo. Blast the alien fleet before it lands.", ["arcade", "shooting"], "https://cykod.github.io/AlienInvasion/"),
  g("duckhunt", "Duck Hunt", "The NES classic ported to JavaScript. Includes a level creator.", ["popular", "shooting", "arcade"], "https://mattsurabian.com/duckhunt/"),
  g("sorades", "SORADES 13K", "Scrolling shooter in the vein of Raptor and Warning Forever. Extremely intense.", ["arcade", "shooting"], "https://maettig.com/code/canvas/starship-sorades-13k/"),
  g("coil", "Coil", "Wrap enemies in your trail to defeat them. Beautiful, hypnotic combat.", ["arcade", "action"], "https://hakim.se/experiments/html5/coil/"),

  // ─── PLATFORMERS ────────────────────────────────────────────
  g("mode", "Mode", "Small but complete demo game built on the Flixel framework. Retro platforming.", ["platformer", "arcade"], "https://www.adamatomic.com/mode/"),
  g("jolly-jumper", "Jolly Jumper", "Fast-paced platform jumper made in Phaser. One-more-run addictive.", ["platformer", "arcade"], "https://shohan4556.github.io/jolly-jumper/"),
  g("super-mario-clone", "Super Mario Clone", "Level 1-1 recreated with Backbone Game Engine. Full jump-and-stomp feel.", ["popular", "platformer", "arcade"], "https://martindrapeau.github.io/backbone-game-engine/super-mario-bros/index.html"),
  g("mario-html5", "Infinite Mario", "Infinite Mario in HTML5 — endless procedurally generated levels.", ["platformer", "arcade"], "https://cdn.jsdelivr.net/gh/robertkleffner/mariohtml5/index.html"),
  g("octocat-jump", "Octocat Jump", "GitHub Game Off entry. Bounce the Octocat as high as possible.", ["platformer", "arcade"], "https://ogoshen.github.io/game-off-2012/"),
  g("newton-adventure", "Newton Adventure", "Puzzle-platformer where you flip gravity to solve levels.", ["platformer", "puzzle"], "https://play.bci.im/newton_adventure/"),

  // ─── ADVENTURE / STRATEGY ───────────────────────────────────
  g("browserquest", "BrowserQuest", "Mozilla's multiplayer mini-MMO. Explore, fight, party up with strangers.", ["popular", "adventure"], "https://browserquest.herokuapp.com/"),
  g("hyperspace", "Hyperspace Garbage Collector", "Space-cleanup arcade with clever mechanics. Award-winning Game Off entry.", ["arcade", "adventure"], "https://razh.github.io/game-off-2013/"),
  g("heal-em-all", "Heal 'Em All", "Explore an abandoned graveyard curing zombies with kindness.", ["adventure", "action"], "https://games.myviews.pl/heal-em-all/"),
  g("branching-out", "Branching Out", "Minimalist emotional game about leaving home. Short, striking.", ["adventure"], "https://henryhoffman.com/branchingout/"),
  g("release-cycles", "Release Cycles", "Abstract racing against the product life-cycle clock. Nerdy delight.", ["strategy", "racing"], "https://rothschildgames.github.io/release-cycles/"),

  // ─── SNAKE / IO-STYLE ───────────────────────────────────────
  g("coffee-snake", "Coffee Snake", "Classic snake in CoffeeScript. Eat coffee beans. Grow. Don't crash.", ["popular", "arcade"], "https://dommmel.github.io/coffee-snake/"),
  g("snake-classic", "Snake Classic", "Nokia-style snake for the modern web. Pure and punishing.", ["arcade"], "https://rabiroshan.github.io/snake_game/"),
  g("spashal", "Spashal", "Space arcade with danger around every corner. Fast reflexes needed.", ["arcade", "action"], "https://mrrar.github.io/spashal/"),

  // ─── SPORTS / CASUAL ────────────────────────────────────────
  g("fluid-table-tennis", "Fluid Table Tennis", "Table tennis rendered on top of a live fluid simulation at 60fps.", ["sports", "arcade"], "https://anirudhjoshi.github.io/fluid_table_tennis/"),
  g("simon", "Follow Me (Simon)", "The classic Simon memory game. Watch the pattern. Repeat it. Don't blink.", ["arcade", "puzzle"], "https://gamedolphin.github.io/follow_me_javascript_simon_clone/"),

  // ─── ACTION ─────────────────────────────────────────────────
  g("onslaught-arena", "Onslaught Arena", "Fend off hordes of medieval monsters in a fast-paced arcade shooter.", ["popular", "action", "shooting"], "https://arcade.lostdecadegames.com/onslaught_arena/"),
  g("emberwind", "Emberwind", "HTML5 port of the indie platformer. Beautifully polished.", ["platformer", "adventure"], "https://operasoftware.github.io/Emberwind/"),
  g("swords-and-souls-clone", "Grave Robbers", "GIRP-inspired tower defense. Manage your ropes and defenders.", ["action", "strategy"], "https://adamatomic.com/graverobbers/"),

  // ─── CLICKER / IDLE ─────────────────────────────────────────
  g("doge-miner-lite", "Cookie Clicker Classic", "The clicker that started it all. Bake cookies. Ascend. Rebalance reality.", ["popular", "clicker"], "https://orteil.dashnet.org/cookieclicker/"),

  // ─── BOARD / CHESS ──────────────────────────────────────────
  g("lichess", "Lichess", "The world's best free chess site. Play the AI or a real human right now.", ["popular", "board", "strategy"], "https://lichess.org/"),
  g("chess-3d", "3D Hartwig Chess", "Beautiful 3D chess done entirely in HTML/CSS/JS.", ["board", "strategy"], "https://codepen.io/juliangarnier/full/BsIih"),

  // ─── STRATEGY ───────────────────────────────────────────────
  g("freeciv-web", "Freeciv-web", "Full Civilization-style 4X strategy game, playable in your browser.", ["popular", "strategy", "adventure"], "https://play.freeciv.org/"),
];

export function getGame(slug: string): Game | undefined {
  return GAMES.find((g) => g.slug === slug);
}

export function getGamesByCategory(cat: Category | "all"): Game[] {
  if (cat === "all") return GAMES;
  return GAMES.filter((g) => g.categories.includes(cat));
}

export function getFeatured(): Game[] {
  return GAMES.filter((g) => g.featured);
}

export function searchGames(query: string): Game[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return GAMES.filter(
    (g) => g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q),
  );
}
