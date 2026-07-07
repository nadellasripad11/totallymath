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
  | "driving"
  | "shooting"
  | "sports"
  | "puzzle"
  | "io"
  | "clicker"
  | "two-player"
  | "stickman"
  | "arcade"
  | "adventure";

export const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All Games" },
  { id: "new", label: "New" },
  { id: "popular", label: "Popular" },
  { id: "action", label: "Action" },
  { id: "racing", label: "Racing" },
  { id: "driving", label: "Driving" },
  { id: "shooting", label: "Shooting" },
  { id: "sports", label: "Sports" },
  { id: "puzzle", label: "Puzzle" },
  { id: "io", label: "IO" },
  { id: "clicker", label: "Clicker" },
  { id: "two-player", label: "2 Player" },
  { id: "stickman", label: "Stickman" },
  { id: "arcade", label: "Arcade" },
  { id: "adventure", label: "Adventure" },
];

const CDN = "https://d11jzht7mj96rr.cloudfront.net/media/posts";

function g(
  slug: string,
  title: string,
  description: string,
  categories: Category[],
  thumbId: number,
  thumbFile: string,
  featured = false,
): Game {
  return {
    slug,
    title,
    description,
    categories,
    url: `https://d11jzht7mj96rr.cloudfront.net/${slug}/`,
    thumbnail: `${CDN}/${thumbId}/${thumbFile}`,
    featured,
  };
}

export const GAMES: Game[] = [
  g("golf-bit", "Golf Bit", "Precision mini-golf with bite-sized pixel courses. Sink putts across increasingly wild levels.", ["new", "sports", "arcade"], 1001, "golf-bit-unblocked-ts.webp", true),
  g("eagle-duckcraft", "Eagle DuckCraft", "Soar as an eagle in the DuckCraft world, dive-bombing ducks and collecting loot.", ["new", "action", "adventure"], 1000, "eagle-duckcraft-unblocked-ts.webp", true),
  g("cluster-rush", "Cluster Rush", "First-person parkour across a moving cluster of trucks. Don't fall off.", ["new", "action", "arcade"], 999, "cluster-rush-unblocked-ts.webp", true),
  g("velocity-rush", "Velocity Rush", "Blistering-fast checkpoint racer. Chain drifts and boost to hit top speeds.", ["new", "racing", "driving"], 998, "velocity-rush-unblocked-ts.webp", true),
  g("snaker-io", "Snaker io", "Slither, eat, and grow the biggest snake on the server. Cut off rivals to level up.", ["new", "io"], 997, "snaker-io-unblocked-ts.webp"),
  g("jungle-mart", "Jungle Mart", "Run a chaotic jungle convenience store. Stock, sell, and outmaneuver the wildlife.", ["new", "arcade"], 996, "jungle-mart-unblocked-ts.webp"),
  g("geometry-vector", "Geometry Vector", "Rhythm-driven geometry runner with neon obstacles synced to the beat.", ["new", "arcade", "action"], 995, "geometry-vector-unblocked-ts.webp"),
  g("duckcraft", "DuckCraft", "Voxel sandbox with duck physics. Build, quack, survive.", ["new", "adventure"], 994, "duckcraft-ts.webp"),
  g("dublix", "Dublix", "Multiplayer tile-flipping arena. Own the most squares before the timer ends.", ["new", "io", "two-player"], 993, "dublix-ts-2.webp"),
  g("backflip-challenge", "Backflip Challenge", "Ragdoll stunt jumper. Rotate perfectly and stick every landing.", ["new", "sports", "arcade"], 992, "backflip-challenge-ts.webp"),
  g("99-nights-in-the-forest", "99 Nights in the Forest", "Survive 99 nights against creatures lurking in the dark woods.", ["adventure", "action"], 991, "99-nights-in-the-forest-ts.webp"),
  g("run-3-nova", "Run 3 Nova", "The next evolution of Run 3. Sprint through gravity-defying space tunnels.", ["arcade", "adventure"], 990, "run-3-nova-ts.webp"),
  g("steal-brainrot-heist", "Steal Brainrot Heist", "Pull off elaborate heists in the brainrot universe. Grab and run.", ["action", "adventure"], 989, "steal-brainrot-heist-ts.webp"),
  g("steal-brainrot-duel", "Steal Brainrot Duel", "1v1 head-to-head duels to snatch the biggest brainrot stash.", ["two-player", "action"], 988, "steal-brainrot-duel-ts.webp"),
  g("cool-brainrot-clicker", "Cool Brainrot Clicker", "Click for maximum brainrot. Unlock upgrades and absurd multipliers.", ["clicker", "arcade"], 987, "cool-brainrot-clicker-ts.webp"),
  g("bffs-summer-aesthetic", "BFFs Summer Aesthetic", "Style a summer wardrobe for two besties. Mix, match, and photograph.", ["arcade"], 986, "bffs-summer-aesthetic-ts.webp"),
  g("crown-defense", "Crown Defense", "Tower-defense meets castle siege. Guard the crown at all costs.", ["action", "adventure"], 985, "crown-defense-ts.webp"),
  g("davo", "Davo", "A slick physics platformer starring Davo, the world's bounciest hero.", ["arcade", "action"], 984, "davo-ts.webp"),
  g("8-ball-pool-billiard", "8 Ball Pool Billiard", "Classic 8-ball pool with smooth physics. Play solo or against a friend.", ["sports", "two-player"], 983, "8-ball-pool-billiard-ts.webp"),
  g("hook-brawl", "Hook Brawl", "Grapple, swing, and yank opponents off the platform in this hook-only brawler.", ["two-player", "action"], 982, "hook-brawl-ts.webp"),
  g("state-wars-io", "State Wars io", "Command an army across a map of US states. Conquer everything.", ["io", "action"], 981, "state-wars-io-ts.webp"),
  g("stickjet-challenge", "Stickjet Challenge", "Stickman jetpack obstacle course. Time your bursts through tight gaps.", ["stickman", "arcade"], 980, "stickjet-challenge-ts.webp"),
  g("cs-online", "CS Online", "Browser-based tactical FPS. Round-based bomb defusal with buy phases.", ["shooting", "action"], 979, "cs-online-ts.webp"),
  g("snow-rider-3d", "Snow Rider 3D", "Toboggan down endless snowy slopes dodging trees, snowmen, and rocks.", ["popular", "racing", "arcade"], 978, "snow-rider-3d-ts.webp", true),
  g("basketball-stars", "Basketball Stars", "1v1 arcade basketball. Fake, dunk, and buzzer-beat your opponent.", ["popular", "sports", "two-player"], 977, "basketball-stars-ts.webp"),
  g("escape-road", "Escape Road", "Outrun the cops through a chaotic open city. Don't get caught.", ["popular", "driving", "racing"], 976, "escape-road-ts.webp"),
  g("geometry-dash", "Geometry Dash", "Rhythm-based platformer. One tap, perfect timing, punishing spikes.", ["popular", "arcade"], 975, "geometry-dash-ts.webp", true),
  g("love-tester", "Love Tester", "Type two names and let the retro love-o-meter judge your compatibility.", ["arcade"], 974, "love-tester-ts.webp"),
  g("idle-breakout", "Idle Breakout", "Auto-launched balls smash bricks while you buy upgrades. Pure dopamine.", ["popular", "clicker", "arcade"], 973, "idle-breakout-ts.webp"),
  g("moto-x3m", "Moto X3M", "Physics-based motorbike stunts. Backflip through explosions and buzzsaws.", ["popular", "racing", "arcade"], 972, "moto-x3m-ts.webp", true),
  g("checkout-frenzy", "Checkout Frenzy", "Scan, bag, and check out customers before the register melts down.", ["arcade"], 971, "checkout-frenzy-ts.webp"),
  g("drift-boss", "Drift Boss", "One-button drift racer. Time turns perfectly on twisting cliff-edge roads.", ["popular", "driving", "racing"], 970, "drift-boss-ts.webp"),
  g("traffic-jam-3d", "Traffic Jam 3D", "Untangle gridlocked cars by routing them off the map. Puzzle meets traffic.", ["puzzle", "driving"], 969, "traffic-jam-3d-ts.webp"),
  g("real-flight-simulator", "Real Flight Simulator", "Take off, cruise, and land jumbo jets in a browser flight sim.", ["driving"], 968, "real-flight-simulator-ts.webp"),
  g("doge-miner", "Doge Miner", "Mine for dogecoin, buy shibes, blast off to the moon. So idle. Much upgrade.", ["clicker", "arcade"], 967, "doge-miner-ts.webp"),
  g("friday-night-funkin", "Friday Night Funkin", "Rap-battle rhythm game. Hit arrows in time to the funky beat.", ["popular", "arcade"], 966, "friday-night-funkin-ts.webp", true),
  g("a-small-world-cup", "A Small World Cup", "Wobbly ragdoll soccer for a tiny world cup trophy. Chaos ensues.", ["sports", "two-player"], 965, "a-small-world-cup-ts.webp"),
  g("capybara-clicker", "Capybara Clicker", "Click the capybara. Grow it big. Unlock hats. Achieve zen.", ["clicker"], 964, "capybara-clicker-ts.webp"),
  g("highway-traffic", "Highway Traffic", "Weave through dense freeway traffic at insane speeds. Overtake for combos.", ["driving", "racing"], 963, "highway-traffic-ts.webp"),
  g("crazy-cattle-3d", "Crazy Cattle 3D", "Play as a rampaging sheep. Ram everything until the arena is empty.", ["action", "arcade"], 962, "crazy-cattle-3d-ts.webp"),
  g("stickman-destruction", "Stickman Destruction", "Ragdoll a stickman through crashes, explosions, and stunts.", ["stickman", "arcade"], 961, "stickman-destruction-ts.webp"),
  g("tap-tap-shots", "Tap Tap Shots", "Tap to swish basketballs into moving hoops. Chain nothing-but-nets.", ["sports", "arcade"], 960, "tap-tap-shots-ts.webp"),
  g("drift-hunters-2", "Drift Hunters 2", "The sequel to the drift-sim classic. More cars, more tracks, more smoke.", ["popular", "racing", "driving"], 959, "drift-hunters-2-ts.webp", true),
  g("stickman-gta-city", "Stickman GTA City", "Stickman-styled open-world crime spree. Cars, chaos, wanted stars.", ["stickman", "action"], 958, "stickman-gta-city-ts.webp"),
  g("spacebar-clicker", "Spacebar Clicker", "Mash the spacebar. Upgrade your mashing. Break the counter.", ["clicker"], 957, "spacebar-clicker-ts.webp"),
  g("geometry-escape", "Geometry Escape", "Geometry Dash-style rhythm runner with an escape-room twist.", ["arcade"], 956, "geometry-escape-ts.webp"),
  g("papas-scooperia", "Papa's Scooperia", "Scoop ice cream sundaes for demanding customers in Papa's flagship parlor.", ["arcade"], 955, "papas-scooperia-ts.webp"),
  g("run-3", "Run 3", "The classic. Sprint and rotate through crumbling space tunnels.", ["popular", "arcade", "adventure"], 954, "run-3-ts.webp", true),
  g("five-nights-at-freddys", "Five Nights at Freddy's", "Survive five nights as a security guard against animatronic terrors.", ["popular", "action"], 953, "five-nights-at-freddys-ts.webp"),
  g("moto-x3m-pool-party", "Moto X3M Pool Party", "Summer-themed Moto X3M with water slides and inflatables.", ["racing", "arcade"], 952, "moto-x3m-pool-party-ts.webp"),
  g("drift-king", "Drift King", "Rack up the highest drift score on twisty mountain passes.", ["racing", "driving"], 951, "drift-king-ts.webp"),
  g("stackball-io", "StackBall io", "Smash through spinning platform stacks. Don't hit the black.", ["io", "arcade"], 950, "stackball-io-ts.webp"),
  g("su-battle-royale", "Su Battle Royale", "Fast-paced browser BR. Loot, fight, be the last one standing.", ["io", "shooting", "action"], 949, "su-battle-royale-ts.webp"),
  g("bloons-tower-defense-3", "Bloons Tower Defense 3", "Pop waves of balloons with strategically placed monkey towers.", ["puzzle", "action"], 948, "bloons-tower-defense-3-ts.webp"),
  g("drift-hunters", "Drift Hunters", "Deep drift sim with garage tuning, dozens of cars, and iconic tracks.", ["popular", "racing", "driving"], 947, "drift-hunters-ts.webp"),
  g("football-legends", "Football Legends", "Arcade soccer 1v1 or 2v2 with superpowers.", ["sports", "two-player"], 946, "football-legends-ts.webp"),
  g("fast-food-rush", "Fast Food Rush", "Serve burgers, fries, and shakes to a stampede of hungry customers.", ["arcade"], 945, "fast-food-rush-ts.webp"),
  g("moto-x3m-winter", "Moto X3M Winter", "Snow-themed Moto X3M. Icy stunts and frozen loops.", ["racing", "arcade"], 944, "moto-x3m-winter-ts.webp"),
  g("gta-simulator", "GTA Simulator", "Browser take on open-world mayhem. Steal cars, evade cops.", ["action", "driving"], 943, "gta-simulator-ts.webp"),
  g("eggy-car", "Eggy Car", "Drive an egg-carrying car over rolling hills without cracking it.", ["popular", "driving", "arcade"], 942, "eggy-car-ts.webp"),
  g("moto-x3m-spooky-land", "Moto X3M Spooky Land", "Halloween Moto X3M. Pumpkins, ghosts, and gnarly stunts.", ["racing", "arcade"], 941, "moto-x3m-spooky-land-ts.webp"),
  g("stickman-parkour", "Stickman Parkour", "Freerun rooftops as a stickman. Wall-run, flip, and never stop.", ["stickman", "arcade"], 940, "stickman-parkour-ts.webp"),
  g("block-blast", "Block Blast", "Drop tetromino shapes into a grid and clear lines for combos.", ["puzzle"], 939, "block-blast-ts.webp"),
  g("f1-drift-racer", "F1 Drift Racer", "Formula-1 style drift racing on tight technical circuits.", ["racing", "driving"], 938, "f1-drift-racer-ts.webp"),
  g("learn-to-fly-2", "Learn to Fly 2", "Launch a penguin, upgrade the launcher, and fly farther every run.", ["clicker", "arcade"], 937, "learn-to-fly-2-ts.webp"),
  g("stickman-ragdoll", "Stickman Ragdoll", "Physics-driven ragdoll stickman playground. Wreck everything.", ["stickman", "arcade"], 936, "stickman-ragdoll-ts.webp"),
  g("nuts-and-bolts-puzzle", "Nuts and Bolts Puzzle", "Unscrew and sort colored bolts. Deceptively tricky.", ["puzzle"], 935, "nuts-and-bolts-puzzle-ts.webp"),
  g("papas-freezeria", "Papa's Freezeria", "Blend frozen desserts for tropical customers in this Papa Louie classic.", ["arcade"], 934, "papas-freezeria-ts.webp"),
  g("conquer-kingdoms", "Conquer Kingdoms", "Real-time strategy. Build armies and take enemy castles.", ["action", "adventure"], 933, "conquer-kingdoms-ts.webp"),
  g("car-football", "Car Football", "Rocket-League-style car soccer in the browser. 1v1 mayhem.", ["sports", "two-player", "driving"], 932, "car-football-ts.webp"),
  g("minecraft-classic", "Minecraft Classic", "The original 2009 Minecraft. Mine, place, survive — right in the browser.", ["popular", "adventure"], 931, "minecraft-classic-ts.webp", true),
  g("mob-city", "Mob City", "Rise through the mob ranks in an open-city crime sim.", ["action", "driving"], 930, "mob-city-ts.webp"),
  g("basket-random", "Basket Random", "Ragdoll basketball. Chaotic, hilarious, unreasonably fun.", ["sports", "two-player"], 929, "basket-random-ts.webp"),
  g("fnf-vs-whitty-full-week", "FNF vs Whitty Full Week", "Friday Night Funkin' mod. Rap-battle Whitty across an explosive week.", ["arcade"], 928, "fnf-vs-whitty-full-week-ts.webp"),
  g("police-chase-drifter", "Police Chase Drifter", "Drift-heavy police pursuit. Outmaneuver the cops through the city.", ["racing", "driving", "action"], 927, "police-chase-drifter-ts.webp"),
  g("five-nights-at-freddys-2", "Five Nights at Freddy's 2", "The sequel. New animatronics, new mechanics, same dread.", ["action"], 926, "five-nights-at-freddys-2-ts.webp"),
  g("madalin-stunt-cars-pro", "Madalin Stunt Cars Pro", "Open-map supercar stunts with a huge garage of exotics.", ["racing", "driving"], 925, "madalin-stunt-cars-pro-ts.webp"),
  g("papas-bakeria", "Papa's Bakeria", "Roll, fill, and bake custom pies for a line of Papa's customers.", ["arcade"], 924, "papas-bakeria-ts.webp"),
  g("swords-and-souls", "Swords and Souls", "Train a hero across mini-games, then unleash them in wave combat.", ["adventure", "action"], 923, "swords-and-souls-ts.webp"),
  g("infinite-craft", "Infinite Craft", "Combine elements to discover new ones. Emergent, endless crafting.", ["puzzle", "adventure"], 922, "infinite-craft-ts.webp"),
  g("xtreme-paintball-wars", "Xtreme Paintball Wars", "Team-based paintball arenas. Splat everyone in sight.", ["shooting", "action"], 921, "xtreme-paintball-wars-ts.webp"),
  g("burnout-city", "Burnout City", "Open-city drift and destruction. Trash cars, cause carnage.", ["driving", "racing", "action"], 920, "burnout-city-ts.webp"),
  g("drunken-duel", "Drunken Duel", "Wobbly ragdoll gunslinger duels. Aim under the influence.", ["two-player", "shooting"], 919, "drunken-duel-ts.webp"),
  g("neon-moto-driver", "Neon Moto Driver", "Endless neon highway on a moto. Weave through synthwave traffic.", ["racing", "driving"], 918, "neon-moto-driver-ts.webp"),
  g("friday-night-funkin-garcello", "Friday Night Funkin Garcello", "Emotional FNF mod week. Rap-battle Garcello.", ["arcade"], 917, "friday-night-funkin-garcello-ts.webp"),
  g("fast-food-manager", "Fast Food Manager", "Run the whole restaurant. Hire, cook, serve, expand.", ["arcade", "clicker"], 916, "fast-food-manager-ts.webp"),
  g("survival-race", "Survival Race", "Race across collapsing terrain. Finish or fall.", ["racing", "arcade"], 915, "survival-race-ts.webp"),
  g("warstrike", "WarStrike", "Round-based tactical FPS with buy phases and objective play.", ["shooting", "action"], 914, "warstrike-ts.webp"),
  g("basketball-io", "Basketball io", "Multiplayer basketball arena. Bots and players, one hoop, pure madness.", ["io", "sports"], 913, "basketball-io-ts.webp"),
  g("stealing-the-diamond", "Stealing the Diamond", "The Henry Stickmin classic. Pick your heist route to steal the diamond.", ["stickman", "adventure"], 912, "stealing-the-diamond-ts.webp"),
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
