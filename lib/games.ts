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
  /** true = built from scratch for TotallyMath (original code) */
  original?: boolean;
  /** when set, game is loaded through the UV proxy — school only sees our domain */
  proxyUrl?: string;
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
  | "platformer"
  | "2-player";

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
  { id: "2-player", label: "2-Player" },
];

interface Opts {
  featured?: boolean;
  selfHosted?: boolean;
  original?: boolean;
  proxyUrl?: string;
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
  // ORIGINAL — built from scratch for TotallyMath. Our own code.
  // ═══════════════════════════════════════════════════════════
  g("math-rush", "Math Rush", "An original TotallyMath brain-arcade game. Catch the falling answer that solves the equation — it speeds up the longer you last.", ["new", "popular", "arcade", "puzzle"], "/games/math-rush/index.html", "➕", ["#7c3aed", "#22d3ee"], { featured: true, selfHosted: true, original: true }),
  g("neon-dodge", "Neon Dodge", "An original TotallyMath reflex runner. Weave through endless neon walls that come faster and faster — every second is a point.", ["new", "popular", "arcade", "action"], "/games/neon-dodge/index.html", "⚡", ["#a855f7", "#ec4899"], { featured: true, selfHosted: true, original: true }),
  g("retro-gridiron", "Retro Gridiron", "An original TotallyMath football game. You're the running back — juke the defenders, rack up yards, and score touchdowns before you're tackled out.", ["new", "popular", "sports", "arcade"], "/games/retro-gridiron/index.html", "🏈", ["#4ade80", "#15803d"], { featured: true, selfHosted: true, original: true }),

  // ═══════════════════════════════════════════════════════════
  // SELF-HOSTED — files live on OUR domain, so these bypass
  // school filters. The iframe never touches another website.
  // ═══════════════════════════════════════════════════════════
  g("pacman", "Pac-Man", "The arcade legend. Munch every dot and dodge the four ghosts through the maze.", ["new", "popular", "arcade"], "/games/pacman/index.html", "🟡", ["#facc15", "#1e40af"], { featured: true, selfHosted: true, credit: { author: "Dale Harvey", source: "https://github.com/daleharvey/pacman", license: "MIT" } }),
  g("flappy-bird", "Flappy Bird", "The infuriating classic. Flap between the pipes without crashing — how far can you get?", ["new", "popular", "arcade"], "/games/flappy-bird/index.html", "🐦", ["#38bdf8", "#22c55e"], { selfHosted: true, credit: { author: "CodeExplained", source: "https://github.com/CodeExplainedRepo/Original-Flappy-bird-JavaScript", license: "MIT" } }),
  g("memory-match", "Memory Match", "Flip cards and find every matching pair. Train your brain and beat your best time.", ["new", "puzzle", "arcade"], "/games/memory-match/index.html", "🧠", ["#ec4899", "#8b5cf6"], { selfHosted: true, credit: { author: "vishalqalandari903", source: "https://github.com/vishalqalandari903/MemoryCardGame_Javascript", license: "MIT" } }),
  g("dino-run", "Dino Run", "The Chrome offline dino game. Jump the cacti and duck the birds — it never ends, it only gets faster.", ["new", "popular", "arcade"], "/games/dino-run/index.html", "🦖", ["#4b5563", "#1f2937"], { featured: true, selfHosted: true, credit: { author: "wayou", source: "https://github.com/wayou/t-rex-runner", license: "MIT" } }),
  g("word-guess", "Word Guess", "Six tries to guess the secret five-letter word. Green means right spot, yellow means wrong spot. A Wordle-style brain teaser.", ["new", "popular", "puzzle"], "/games/word-guess/index.html", "🟩", ["#22c55e", "#15803d"], { featured: true, selfHosted: true, credit: { author: "WebDevSimplified", source: "https://github.com/WebDevSimplified/wordle-clone", license: "MIT" } }),
  g("minesweeper", "Minesweeper", "The Windows classic. Clear the grid without detonating a mine — use the numbers to deduce where they hide.", ["new", "popular", "puzzle"], "/games/minesweeper/index.html", "💣", ["#64748b", "#0f172a"], { selfHosted: true, credit: { author: "muan", source: "https://github.com/muan/emoji-minesweeper", license: "MIT" } }),
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
  g("1v1lol", "1v1.LOL", "Build, edit, and gun down your opponent. The ultimate practice mode for battle royale builders.", ["new", "popular", "action", "shooting"], "/games/1v1lol/index.html", "🔨", ["#3b82f6", "#1d4ed8"], { featured: true, selfHosted: true }),
  g("retro-bowl", "Retro Bowl", "Old-school pixel football. Call the plays, manage your team, and drive to the championship.", ["new", "popular", "sports"], "/games/retro-bowl/index.html", "🏈", ["#16a34a", "#166534"], { featured: true, selfHosted: true }),
  g("bitlife", "BitLife", "Live a full life as a text-based simulation. Make choices — go to prison, become a doctor, or just vibe.", ["new", "popular", "adventure", "strategy"], "/games/bitlife/index.html", "👤", ["#8b5cf6", "#6d28d9"], { featured: true, selfHosted: true }),
  g("soccer-random", "Soccer Random", "2-player ragdoll soccer. Same chaos as Basketball Random — but with a net.", ["new", "popular", "sports", "2-player"], "/games/soccer-random/index.html", "⚽", ["#22c55e", "#15803d"], { featured: true, selfHosted: true }),
  g("ovo", "OvO", "Insanely fast speed-running platformer. Slide, smash, and dive through 40+ precision levels.", ["new", "popular", "platformer", "action"], "https://totallymath-games.pages.dev/ovo/index.html", "🥚", ["#f59e0b", "#d97706"], { featured: true }),

  // ═══════════════════════════════════════════════════════════
  // EXTERNAL — hosted elsewhere. Great off-campus, but your
  // school filter may block these (they load another domain).
  // ═══════════════════════════════════════════════════════════
  g("hexgl", "HexGL", "Blazing-fast futuristic WebGL racer. F-Zero vibes right in the browser.", ["racing"], "https://hexgl.bkcore.com/play/", "🏎️", ["#06b6d4", "#3b82f6"], { proxyUrl: "https://hexgl.bkcore.com/play/" }),
  g("a-dark-room", "A Dark Room", "Minimalist text adventure that unfolds into something much bigger. Trust the fire.", ["adventure"], "https://adarkroom.doublespeakgames.com/", "🔥", ["#f97316", "#7c2d12"], { proxyUrl: "https://adarkroom.doublespeakgames.com/" }),
  g("asteroids", "Asteroids", "The classic Atari arcade shooter, faithfully recreated in pure JavaScript.", ["arcade", "shooting"], "/games/asteroids/index.html", "☄️", ["#64748b", "#1e293b"], { selfHosted: true, credit: { author: "Doug McInnes", source: "https://github.com/dmcinnes/HTML5-Asteroids", license: "MIT" } }),
  g("duckhunt", "Duck Hunt", "The NES classic ported to JavaScript. Shoot the ducks before they escape.", ["shooting", "arcade"], "/games/duck-hunt/index.html", "🦆", ["#0ea5e9", "#0369a1"], { selfHosted: true, credit: { author: "Matt Surabian", source: "https://github.com/MattSurabian/DuckHunt-JS", license: "MIT" } }),
  g("snow-rider", "Snow Rider 3D", "Ride Santa's sled down an endless snowy mountain. Dodge trees, collect gifts, survive.", ["new", "popular", "racing", "arcade"], "/games/snow-rider/index.html", "🛷", ["#38bdf8", "#0ea5e9"], { featured: true, selfHosted: true }),
  g("slope", "Slope", "Roll a ball down an infinite neon slope. Don't fall off the edge — it only gets faster.", ["new", "popular", "arcade", "racing"], "/games/slope/index.html", "🔴", ["#22d3ee", "#7c3aed"], { featured: true, selfHosted: true }),
  g("tunnel-rush", "Tunnel Rush", "Blast through a psychedelic tunnel at breakneck speed. Dodge every obstacle or die.", ["new", "popular", "arcade", "racing"], "/games/tunnel-rush/index.html", "🌀", ["#a855f7", "#ec4899"], { featured: true, selfHosted: true }),
  g("drift-boss", "Drift Boss", "Tap to drift a car around endless corners. Simple to learn, impossible to master.", ["new", "popular", "racing"], "/games/drift-boss/index.html", "🚗", ["#f59e0b", "#ef4444"], { featured: true, selfHosted: true }),
  g("motox3m", "Moto X3M", "Insane stunt bike racing. Wheelie, backflip, and bomb through 22 brutal obstacle courses.", ["new", "popular", "racing", "action"], "/games/motox3m/index.html", "🏍️", ["#f97316", "#dc2626"], { featured: true, selfHosted: true }),
  g("basket-random", "Basket Random", "2-player ragdoll basketball. One button each — physics do the rest. Pure chaos.", ["new", "popular", "sports", "2-player"], "/games/basket-random/index.html", "🏀", ["#f97316", "#ea580c"], { featured: true, selfHosted: true }),
  g("run-3", "Run 3", "Run, skate, and float through an endless tunnel in space. Fall off? Try a different path.", ["new", "popular", "platformer", "arcade"], "/games/run-3/index.html", "🏃", ["#6366f1", "#8b5cf6"], { featured: true, selfHosted: true }),
  g("yohoho", "Survival Race", "Fight to be the last pirate standing in a shrinking hexagonal arena. Battle royale chaos — eliminate rivals before the ring closes in.", ["new", "popular", "action", "arcade"], "/games/yohoho/index.html", "🏴‍☠️", ["#f59e0b", "#b45309"], { featured: true, selfHosted: true }),
  g("vex5", "Vex 5", "Brutal stick-figure platformer. Navigate deadly spike traps, lasers, and saw blades through 10 grueling acts.", ["new", "popular", "platformer", "action"], "/games/vex5/index.html", "🏃", ["#ef4444", "#7f1d1d"], { featured: true, selfHosted: true }),
  g("getaway-shootout", "Getaway Shootout", "Race to the helicopter, gun down rivals, and be the last one to escape. 2-player chaos.", ["new", "popular", "action", "shooting"], "/games/getaway-shootout/index.html", "🔫", ["#22c55e", "#14532d"], { featured: true, selfHosted: true }),
  g("rooftop-snipers", "Rooftop Snipers", "2-player rooftop dueling. One shot knocks your opponent off the edge. First to 5 wins.", ["new", "popular", "shooting", "action"], "/games/rooftop-snipers/index.html", "🎯", ["#64748b", "#1e293b"], { featured: true, selfHosted: true }),
  g("boxing-random", "Boxing Random", "2-player ragdoll boxing on one keyboard. One punch sends someone flying.", ["new", "popular", "sports", "action"], "/games/boxing-random/index.html", "🥊", ["#ef4444", "#dc2626"], { featured: true, selfHosted: true }),
  g("volley-random", "Volley Random", "2-player random volleyball with wild physics. One button each — keep it from hitting the ground.", ["new", "popular", "sports"], "/games/volley-random/index.html", "🏐", ["#3b82f6", "#1d4ed8"], { featured: true, selfHosted: true }),
  g("cluster-rush", "Cluster Rush", "Leap from truck to truck at highway speed. Miss one and you're roadkill.", ["new", "popular", "action", "arcade"], "/games/cluster-rush/index.html", "🚛", ["#f97316", "#c2410c"], { featured: true, selfHosted: true }),
  g("stickman-hook", "Stickman Hook", "Swing through 100+ levels with a grappling hook. Perfect your arc, land the next swing.", ["new", "popular", "arcade", "platformer"], "/games/stickman-hook/index.html", "🪝", ["#6366f1", "#4338ca"], { featured: true, selfHosted: true }),
  g("minecraft-classic", "Minecraft Classic", "The original 2009 browser Minecraft. Place and destroy blocks, build whatever you want.", ["new", "popular", "adventure"], "/games/minecraft-classic/index.html", "⛏️", ["#65a30d", "#3f6212"], { featured: true, selfHosted: true }),
  g("idle-breakout", "Idle Breakout", "Idle clicker meets brick breaker. Upgrade your balls, prestige, and watch the bricks crumble forever.", ["new", "popular", "clicker", "arcade"], "/games/idle-breakout/index.html", "🟦", ["#0ea5e9", "#0369a1"], { featured: true, selfHosted: true }),
  g("drift-hunters", "Drift Hunters", "High-speed drifting sim. Tune your car, master the handbrake, and rack up drift points.", ["new", "popular", "racing"], "/games/drift-hunters/index.html", "🚙", ["#f59e0b", "#b45309"], { featured: true, selfHosted: true }),
  g("google-snake", "Google Snake", "The classic Google Snake. Eat apples to grow longer — but don't bite yourself.", ["new", "popular", "arcade"], "/games/google-snake/index.html", "🐍", ["#4ade80", "#15803d"], { featured: true, selfHosted: true }),
  g("chess", "Chess", "Classic chess with an AI opponent at any level — from beginner to brutal.", ["new", "popular", "board", "strategy"], "/games/chess/index.html", "♟️", ["#475569", "#1e293b"], { featured: true, selfHosted: true }),
  g("doodle-jump", "Doodle Jump", "Jump the Doodler higher and higher through infinite platforms. Don't fall!", ["new", "popular", "arcade", "platformer"], "/games/doodle-jump/index.html", "📱", ["#84cc16", "#3f6212"], { featured: true, selfHosted: true }),
  g("onslaught-arena", "Onslaught Arena", "Fend off hordes of medieval monsters in a fast-paced arcade shooter.", ["action", "shooting"], "https://arcade.lostdecadegames.com/onslaught_arena/", "⚔️", ["#dc2626", "#450a0a"], { proxyUrl: "https://arcade.lostdecadegames.com/onslaught_arena/" }),
  g("ski-free", "Ski Free", "The Windows classic. Dodge trees, jump ramps, and outrun the yeti.", ["arcade", "racing"], "https://basicallydan.github.io/skifree.js/", "⛷️", ["#38bdf8", "#0c4a6e"], { proxyUrl: "https://basicallydan.github.io/skifree.js/" }),
  g("super-mario-clone", "Super Mario", "Level 1-1 recreated with a full jump-and-stomp engine.", ["platformer", "arcade"], "https://martindrapeau.github.io/backbone-game-engine/super-mario-bros/index.html", "🍄", ["#ef4444", "#991b1b"], { proxyUrl: "https://martindrapeau.github.io/backbone-game-engine/super-mario-bros/index.html" }),
  g("lichess", "Lichess", "The world's best free chess site. Play the AI or a real human right now.", ["board", "strategy"], "https://lichess.org/", "♟️", ["#334155", "#0f172a"], { proxyUrl: "https://lichess.org/" }),
  g("cookie-clicker", "Cookie Clicker", "The clicker that started it all. Bake cookies, ascend, and rebalance reality.", ["clicker"], "https://orteil.dashnet.org/cookieclicker/", "🍪", ["#b45309", "#78350f"], { proxyUrl: "https://orteil.dashnet.org/cookieclicker/" }),
  g("browserquest", "BrowserQuest", "Mozilla's multiplayer mini-MMO. Explore, fight, and party up with strangers.", ["adventure"], "https://browserquest.herokuapp.com/", "🗺️", ["#0d9488", "#134e4a"], { proxyUrl: "https://browserquest.herokuapp.com/" }),
  g("polybranch", "PolyBranch", "Minimalist 3D dodger. Weave through branches at terminal velocity.", ["racing", "arcade"], "https://gregbatha.com/branches/", "🌿", ["#22c55e", "#14532d"], { proxyUrl: "https://gregbatha.com/branches/" }),
  g("0hh1", "0hh1", "Lovely little logic puzzle. Fill the grid without three of a color in a row.", ["puzzle", "board"], "https://0hh1.com/", "🟥", ["#3b82f6", "#1e40af"], { proxyUrl: "https://0hh1.com/" }),
  g("connect-four", "Connect Four", "Classic Connect 4 with an AI opponent. Line up four discs to win.", ["board", "puzzle"], "https://kenrick95.github.io/c4/demo/", "🔴", ["#eab308", "#ca8a04"], { proxyUrl: "https://kenrick95.github.io/c4/demo/" }),
];

export interface ControlRow {
  keys: string[];
  action: string;
}

// Keyboard / mouse controls per game. "↑ ↓ ← →" are arrow keys.
export const CONTROLS: Record<string, ControlRow[]> = {
  "math-rush": [
    { keys: ["←", "→"], action: "Move the catcher" },
    { keys: ["A", "D"], action: "Move (alternate)" },
  ],
  "neon-dodge": [
    { keys: ["←", "→"], action: "Dodge left / right" },
    { keys: ["A", "D"], action: "Dodge (alternate)" },
  ],
  "retro-gridiron": [
    { keys: ["←", "→"], action: "Juke left / right" },
    { keys: ["A", "D"], action: "Juke (alternate)" },
  ],
  pacman: [
    { keys: ["↑", "↓", "←", "→"], action: "Move Pac-Man" },
    { keys: ["N"], action: "Start a new game" },
  ],
  "flappy-bird": [
    { keys: ["Space"], action: "Flap" },
    { keys: ["Click"], action: "Flap (mouse)" },
  ],
  "memory-match": [{ keys: ["Mouse"], action: "Click cards to flip them" }],
  "dino-run": [
    { keys: ["Space", "↑"], action: "Jump" },
    { keys: ["↓"], action: "Duck" },
  ],
  "word-guess": [
    { keys: ["A–Z"], action: "Type your guess" },
    { keys: ["Enter"], action: "Submit the word" },
    { keys: ["Backspace"], action: "Delete a letter" },
  ],
  minesweeper: [
    { keys: ["Click"], action: "Reveal a tile" },
    { keys: ["Right-click"], action: "Flag a mine" },
  ],
  hextris: [
    { keys: ["←", "→"], action: "Rotate the hexagon" },
    { keys: ["A", "D"], action: "Rotate (alternate)" },
  ],
  "2048": [
    { keys: ["↑", "↓", "←", "→"], action: "Slide all tiles" },
    { keys: ["W", "A", "S", "D"], action: "Slide (alternate)" },
  ],
  "custom-tetris": [
    { keys: ["←", "→"], action: "Move piece" },
    { keys: ["↑"], action: "Rotate piece" },
    { keys: ["↓"], action: "Soft drop" },
    { keys: ["Space"], action: "Hard drop" },
  ],
  astray: [
    { keys: ["↑", "↓", "←", "→"], action: "Roll the marble" },
    { keys: ["W", "A", "S", "D"], action: "Roll (alternate)" },
  ],
  "space-invaders": [
    { keys: ["←", "→"], action: "Move your ship" },
    { keys: ["Space"], action: "Shoot" },
  ],
  "clumsy-bird": [
    { keys: ["Space"], action: "Flap wings" },
    { keys: ["Click"], action: "Flap (mouse)" },
  ],
  "slime-volleyball": [
    { keys: ["W"], action: "Player 1 — jump" },
    { keys: ["A", "D"], action: "Player 1 — move" },
    { keys: ["↑"], action: "Player 2 — jump" },
    { keys: ["←", "→"], action: "Player 2 — move" },
  ],
  archery: [
    { keys: ["Hold Click"], action: "Draw the bow" },
    { keys: ["Release"], action: "Fire the arrow" },
  ],
  "retro-breakout": [
    { keys: ["←", "→"], action: "Move the paddle" },
    { keys: ["Mouse"], action: "Move paddle (alternate)" },
  ],
  "snake-classic": [{ keys: ["↑", "↓", "←", "→"], action: "Steer the snake" }],
  "coffee-snake": [{ keys: ["↑", "↓", "←", "→"], action: "Steer the snake" }],
  simon: [{ keys: ["Mouse"], action: "Click the lit colors in order" }],
  "alien-invasion": [
    { keys: ["←", "→"], action: "Move" },
    { keys: ["Space"], action: "Shoot" },
  ],
  sorades: [
    { keys: ["↑", "↓", "←", "→"], action: "Fly your ship" },
    { keys: ["Space"], action: "Fire" },
  ],
  spashal: [
    { keys: ["↑", "↓", "←", "→"], action: "Move" },
    { keys: ["Space"], action: "Action" },
  ],
  "save-the-forest": [{ keys: ["Mouse"], action: "Click & drag to spray water" }],
  hexgl: [
    { keys: ["↑"], action: "Accelerate" },
    { keys: ["←", "→"], action: "Steer" },
    { keys: ["W", "A", "D"], action: "Alternate controls" },
  ],
  "a-dark-room": [{ keys: ["Mouse"], action: "Click the buttons" }],
  asteroids: [
    { keys: ["←", "→"], action: "Rotate ship" },
    { keys: ["↑"], action: "Thrust" },
    { keys: ["Space"], action: "Fire" },
  ],
  duckhunt: [{ keys: ["Mouse"], action: "Aim and click to shoot" }],
  "onslaught-arena": [
    { keys: ["W", "A", "S", "D"], action: "Move" },
    { keys: ["Mouse"], action: "Aim and shoot" },
    { keys: ["↑", "↓", "←", "→"], action: "Move (alternate)" },
  ],
  "ski-free": [
    { keys: ["←", "→"], action: "Steer downhill" },
    { keys: ["Mouse"], action: "Steer (alternate)" },
  ],
  "super-mario-clone": [
    { keys: ["←", "→"], action: "Walk" },
    { keys: ["↑", "Space"], action: "Jump" },
  ],
  lichess: [{ keys: ["Mouse"], action: "Drag pieces to move" }],
  "cookie-clicker": [{ keys: ["Mouse"], action: "Click the cookie" }],
  browserquest: [{ keys: ["Mouse"], action: "Click to move and fight" }],
  polybranch: [{ keys: ["←", "→"], action: "Steer" }],
  "0hh1": [{ keys: ["Mouse"], action: "Click cells to fill them" }],
  "connect-four": [{ keys: ["Mouse"], action: "Click a column to drop a disc" }],
  "snow-rider": [
    { keys: ["←", "→"], action: "Steer the sled" },
    { keys: ["A", "D"], action: "Steer (alternate)" },
  ],
  slope: [
    { keys: ["←", "→"], action: "Steer the ball" },
    { keys: ["A", "D"], action: "Steer (alternate)" },
  ],
  "tunnel-rush": [
    { keys: ["←", "→"], action: "Dodge obstacles" },
    { keys: ["A", "D"], action: "Dodge (alternate)" },
  ],
  "drift-boss": [
    { keys: ["Click"], action: "Tap / click to drift right" },
    { keys: ["Space"], action: "Drift (keyboard)" },
  ],
  motox3m: [
    { keys: ["↑", "↓"], action: "Accelerate / brake" },
    { keys: ["←", "→"], action: "Lean back / forward" },
    { keys: ["W", "S", "A", "D"], action: "Alternate controls" },
  ],
  "basket-random": [
    { keys: ["W"], action: "Player 1 — jump / shoot" },
    { keys: ["↑"], action: "Player 2 — jump / shoot" },
  ],
  "run-3": [
    { keys: ["←", "→"], action: "Move left / right" },
    { keys: ["Space", "↑"], action: "Jump" },
  ],
  yohoho: [
    { keys: ["A", "D"], action: "Move left / right" },
    { keys: ["W"], action: "Jump / attack" },
  ],
  vex5: [
    { keys: ["W", "A", "D"], action: "Move and jump" },
    { keys: ["S"], action: "Crouch / slide" },
  ],
  "getaway-shootout": [
    { keys: ["W", "E"], action: "P1 — hop / shoot" },
    { keys: ["↑", "↓"], action: "P2 — hop / shoot" },
  ],
  "rooftop-snipers": [
    { keys: ["W", "E"], action: "P1 — jump / fire" },
    { keys: ["↑", "↓"], action: "P2 — jump / fire" },
  ],
  "boxing-random": [
    { keys: ["W"], action: "P1 — punch / jump" },
    { keys: ["↑"], action: "P2 — punch / jump" },
  ],
  "volley-random": [
    { keys: ["W"], action: "P1 — jump" },
    { keys: ["↑"], action: "P2 — jump" },
  ],
  "cluster-rush": [
    { keys: ["Space", "Click"], action: "Jump between trucks" },
  ],
  "stickman-hook": [
    { keys: ["Click", "Space"], action: "Grab / release hook" },
  ],
  "minecraft-classic": [
    { keys: ["W", "A", "S", "D"], action: "Move" },
    { keys: ["Space"], action: "Jump" },
    { keys: ["Mouse"], action: "Look, place, and break blocks" },
    { keys: ["1–9"], action: "Select block type" },
  ],
  "idle-breakout": [
    { keys: ["Mouse"], action: "Click bricks and buy upgrades" },
  ],
  "drift-hunters": [
    { keys: ["↑", "↓"], action: "Accelerate / brake" },
    { keys: ["←", "→"], action: "Steer" },
    { keys: ["Space"], action: "Handbrake (drift)" },
  ],
  "google-snake": [
    { keys: ["↑", "↓", "←", "→"], action: "Steer the snake" },
    { keys: ["W", "A", "S", "D"], action: "Steer (alternate)" },
  ],
  chess: [
    { keys: ["Mouse"], action: "Click a piece, then click to move" },
  ],
  "doodle-jump": [
    { keys: ["←", "→"], action: "Move the Doodler" },
    { keys: ["A", "D"], action: "Move (alternate)" },
  ],
  "1v1lol": [
    { keys: ["W", "A", "S", "D"], action: "Move" },
    { keys: ["Mouse"], action: "Aim and shoot" },
    { keys: ["Z", "X", "C", "V", "G"], action: "Switch build mode (wall/floor/stair/roof/trap)" },
    { keys: ["F"], action: "Toggle pickaxe" },
  ],
  "retro-bowl": [
    { keys: ["Mouse / Touch"], action: "Swipe to pass, tap to run" },
    { keys: ["←", "→"], action: "Move runner" },
  ],
  bitlife: [{ keys: ["Mouse"], action: "Click choices to live your life" }],
  "soccer-random": [
    { keys: ["W"], action: "P1 — jump / kick" },
    { keys: ["↑"], action: "P2 — jump / kick" },
  ],
  ovo: [
    { keys: ["A", "D", "←", "→"], action: "Move" },
    { keys: ["W", "↑", "Space"], action: "Jump" },
    { keys: ["S", "↓"], action: "Slide / smash" },
  ],
};

export function getControls(slug: string): ControlRow[] {
  return CONTROLS[slug] ?? [];
}

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

export function getOriginals(): Game[] {
  return GAMES.filter((game) => game.original);
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
