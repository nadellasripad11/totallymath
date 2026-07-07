"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("tm-cookie-ack")) setShow(true);
    } catch {
      // localStorage unavailable — just don't show
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem("tm-cookie-ack", "1");
    } catch {
      // ignore
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(680px, calc(100% - 24px))",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: "14px 18px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
        zIndex: 200,
        boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
      }}
    >
      <p style={{ fontSize: 13, color: "var(--text-muted)", flex: 1, minWidth: 220, lineHeight: 1.5, margin: 0 }}>
        TotallyMath uses only essential storage to save your game progress — no ads or tracking.
        See our{" "}
        <Link href="/cookies" style={{ color: "var(--accent-light)" }}>
          Cookie Policy
        </Link>
        .
      </p>
      <button onClick={dismiss} className="btn btn-primary" style={{ fontSize: 13, padding: "8px 20px" }}>
        Got it
      </button>
    </div>
  );
}
