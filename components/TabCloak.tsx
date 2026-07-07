"use client";

import { useEffect, useRef, useState } from "react";

interface Preset {
  id: string;
  label: string;
  title: string;
  icon: string; // svg data-uri favicon
}

// Generic, approximate favicons (not exact brand logos) + a disguise title each.
const svg = (inner: string) =>
  "data:image/svg+xml," +
  encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${inner}</svg>`);

const DEFAULT: Preset = {
  id: "off",
  label: "TotallyMath (off)",
  title: "TotallyMath — Free Unblocked Games",
  icon: "/logo.svg",
};

const PRESETS: Preset[] = [
  {
    id: "classroom",
    label: "Classroom",
    title: "Home",
    icon: svg(
      `<rect width="24" height="24" rx="4" fill="#0f9d58"/><circle cx="12" cy="9.2" r="2.1" fill="#fff"/><path d="M6.5 16c0-2.2 2.5-3.4 5.5-3.4S17.5 13.8 17.5 16v.8h-11z" fill="#fff"/>`,
    ),
  },
  {
    id: "docs",
    label: "Docs",
    title: "Untitled document - Google Docs",
    icon: svg(
      `<rect x="4" y="2" width="16" height="20" rx="2" fill="#4285f4"/><rect x="7" y="7" width="10" height="1.6" rx="0.8" fill="#fff"/><rect x="7" y="11" width="10" height="1.6" rx="0.8" fill="#fff"/><rect x="7" y="15" width="7" height="1.6" rx="0.8" fill="#fff"/>`,
    ),
  },
  {
    id: "drive",
    label: "Drive",
    title: "My Drive - Google Drive",
    icon: svg(
      `<path d="M9 3h6l6 10-3 5H6l-3-5z" fill="#ffcf3f"/><path d="M9 3l-6 10 3 5 6-10z" fill="#11a861"/><path d="M15 3l6 10-3 5-6-10z" fill="#2684fc"/>`,
    ),
  },
  {
    id: "slides",
    label: "Slides",
    title: "Untitled presentation - Google Slides",
    icon: svg(
      `<rect x="4" y="2" width="16" height="20" rx="2" fill="#f4b400"/><rect x="7" y="8" width="10" height="8" rx="1" fill="#fff"/>`,
    ),
  },
  {
    id: "search",
    label: "Search",
    title: "Google",
    icon: svg(
      `<rect width="24" height="24" rx="4" fill="#fff"/><text x="12" y="17" font-size="15" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#4285f4">G</text>`,
    ),
  },
  {
    id: "canvas",
    label: "Canvas LMS",
    title: "Dashboard",
    icon: svg(
      `<rect width="24" height="24" rx="4" fill="#e72429"/><circle cx="12" cy="6.5" r="1.6" fill="#fff"/><circle cx="12" cy="17.5" r="1.6" fill="#fff"/><circle cx="6.5" cy="12" r="1.6" fill="#fff"/><circle cx="17.5" cy="12" r="1.6" fill="#fff"/>`,
    ),
  },
];

const STORE_KEY = "tm-cloak";

function setFavicon(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = href;
}

export default function TabCloak() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  // apply saved cloak on load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const { title, icon } = JSON.parse(raw);
        if (title) document.title = title;
        if (icon) setFavicon(icon);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // close on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  function apply(title: string, icon: string) {
    document.title = title;
    setFavicon(icon);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify({ title, icon }));
    } catch {
      /* ignore */
    }
  }

  function reset() {
    apply(DEFAULT.title, DEFAULT.icon);
    try {
      localStorage.removeItem(STORE_KEY);
    } catch {
      /* ignore */
    }
    setOpen(false);
  }

  function applyCustom() {
    const t = custom.trim();
    if (!t) return;
    // generic doc-style favicon with the first letter
    const letter = t[0].toUpperCase().replace(/[<>&]/g, "");
    const icon = svg(
      `<rect width="24" height="24" rx="4" fill="#334155"/><text x="12" y="17" font-size="14" font-family="Arial" font-weight="bold" text-anchor="middle" fill="#fff">${letter}</text>`,
    );
    apply(t, icon);
    setOpen(false);
  }

  // open the site inside an about:blank tab (hides the real URL)
  function openBlank() {
    const win = window.open("about:blank", "_blank");
    if (!win) {
      alert("Please allow pop-ups for this site, then try again.");
      return;
    }
    let title = DEFAULT.title;
    let icon = DEFAULT.icon;
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) {
        const c = JSON.parse(raw);
        title = c.title || title;
        icon = c.icon || icon;
      }
    } catch {
      /* ignore */
    }
    const doc = win.document;
    doc.title = title;
    const link = doc.createElement("link");
    link.rel = "icon";
    link.href = icon;
    doc.head.appendChild(link);
    doc.body.style.margin = "0";
    const iframe = doc.createElement("iframe");
    iframe.style.cssText = "position:fixed;inset:0;border:0;width:100%;height:100%";
    iframe.src = window.location.origin;
    doc.body.appendChild(iframe);
    setOpen(false);
  }

  const btn: React.CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 10px",
    background: "transparent",
    border: "none",
    borderRadius: 8,
    color: "var(--text)",
    fontSize: 13,
    cursor: "pointer",
    textAlign: "left",
  };

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="btn btn-ghost"
        style={{ padding: "6px 12px", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }}
        aria-label="Tab cloak"
        title="Disguise this tab"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        Cloak
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "calc(100% + 8px)",
            width: 250,
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 8,
            boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
            zIndex: 200,
          }}
        >
          <p style={{ fontSize: 11, color: "var(--text-muted)", padding: "4px 10px 8px", lineHeight: 1.4 }}>
            Disguise this browser tab&apos;s name &amp; icon.
          </p>
          {PRESETS.map((p) => (
            <button key={p.id} style={btn} onClick={() => { apply(p.title, p.icon); setOpen(false); }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <img src={p.icon} alt="" width={18} height={18} style={{ borderRadius: 4 }} />
              <span style={{ flex: 1 }}>{p.label}</span>
              <span style={{ fontSize: 11, color: "var(--text-muted)" }}>{p.title.length > 14 ? p.title.slice(0, 14) + "…" : p.title}</span>
            </button>
          ))}

          <div style={{ display: "flex", gap: 6, padding: "8px 6px 4px" }}>
            <input
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && applyCustom()}
              placeholder="Custom tab name…"
              style={{
                flex: 1,
                minWidth: 0,
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "6px 10px",
                fontSize: 12,
                color: "var(--text)",
                outline: "none",
              }}
            />
            <button onClick={applyCustom} className="btn btn-primary" style={{ padding: "6px 12px", fontSize: 12 }}>
              Set
            </button>
          </div>

          <div style={{ borderTop: "1px solid var(--border)", margin: "6px 0", paddingTop: 6 }}>
            <button style={{ ...btn, color: "var(--accent-light)" }} onClick={openBlank}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              🚀 Open in about:blank
            </button>
            <button style={{ ...btn, color: "var(--text-muted)" }} onClick={reset}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-card-hover)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              ✕ Reset to TotallyMath
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
