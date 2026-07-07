#!/usr/bin/env python3
"""Slice the logo sprite-sheet into one PNG per game.

Usage:  python3 scripts/slice_thumbs.py <path-to-spritesheet.png>

The sheet is an 8-column grid, read left-to-right, top-to-bottom, in the
order below. Output goes to public/thumbs/<slug>.png
"""
import sys
import os
from PIL import Image

# Reading order in the sheet (8 per row). Must match the uploaded image.
ORDER = [
    # row 1
    "math-rush", "neon-dodge", "pacman", "flappy-bird",
    "memory-match", "hextris", "2048", "custom-tetris",
    # row 2
    "astray", "space-invaders", "clumsy-bird", "slime-volleyball",
    "archery", "retro-breakout", "snake-classic", "coffee-snake",
    # row 3
    "simon", "alien-invasion", "sorades", "spashal",
    "save-the-forest", "hexgl", "a-dark-room", "asteroids",
    # row 4
    "duckhunt", "onslaught-arena", "ski-free", "super-mario-clone",
    "lichess", "cookie-clicker", "browserquest", "polybranch",
    # row 5
    "0hh1", "connect-four",
]

COLS = 8

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 scripts/slice_thumbs.py <spritesheet.png>")
        sys.exit(1)

    src = sys.argv[1]
    here = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out_dir = os.path.join(here, "public", "thumbs")
    os.makedirs(out_dir, exist_ok=True)

    sheet = Image.open(src).convert("RGBA")
    W, H = sheet.size
    rows = (len(ORDER) + COLS - 1) // COLS
    cell_w = W / COLS
    cell_h = H / rows
    # trim a few % off each cell to drop the black gutter between tiles
    pad_x = cell_w * 0.04
    pad_y = cell_h * 0.04

    for i, slug in enumerate(ORDER):
        r, c = divmod(i, COLS)
        left = round(c * cell_w + pad_x)
        top = round(r * cell_h + pad_y)
        right = round((c + 1) * cell_w - pad_x)
        bottom = round((r + 1) * cell_h - pad_y)
        tile = sheet.crop((left, top, right, bottom))
        tile.save(os.path.join(out_dir, f"{slug}.png"))
        print(f"  {slug}.png")

    print(f"\nDone — {len(ORDER)} thumbnails written to public/thumbs/")

if __name__ == "__main__":
    main()
