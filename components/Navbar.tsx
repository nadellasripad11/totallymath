"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav
      style={{
        height: "var(--navbar-h)",
        background: "rgba(8,8,15,0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 20px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", color: "#fff" }}>
            totally<span style={{ color: "var(--accent-light)" }}>math</span>
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link
            href="/"
            className="btn btn-ghost"
            style={{
              padding: "6px 14px",
              fontSize: 13,
              color: path === "/" ? "var(--text)" : "var(--text-muted)",
              borderColor: path === "/" ? "var(--accent)" : "var(--border)",
            }}
          >
            Games
          </Link>
          <Link
            href="/proxy"
            className="btn btn-ghost"
            style={{
              padding: "6px 14px",
              fontSize: 13,
              color: path === "/proxy" ? "var(--text)" : "var(--text-muted)",
              borderColor: path === "/proxy" ? "var(--accent)" : "var(--border)",
            }}
          >
            Proxy
          </Link>
        </div>
      </div>
    </nav>
  );
}
