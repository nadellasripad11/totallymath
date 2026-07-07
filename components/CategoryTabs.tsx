"use client";

import { CATEGORIES, type Category } from "@/lib/games";

interface Props {
  active: Category | "all";
  onChange: (cat: Category | "all") => void;
}

export default function CategoryTabs({ active, onChange }: Props) {
  return (
    <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
      {CATEGORIES.map((c) => (
        <button
          key={c.id}
          className={`pill${active === c.id ? " active" : ""}`}
          onClick={() => onChange(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
