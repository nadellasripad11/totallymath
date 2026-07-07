"use client";

import { useEffect, useRef, useState } from "react";

export default function ProxyPage() {
  const [url, setUrl] = useState("");
  const [registered, setRegistered] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/uv/uv.sw.js", { scope: "/service/" })
        .then(() => setRegistered(true))
        .catch(() => setRegistered(false));
    }
  }, []);

  function navigate() {
    let raw = url.trim();
    if (!raw) return;
    if (!raw.startsWith("http://") && !raw.startsWith("https://")) {
      raw = "https://" + raw;
    }
    const encoded = encodeURIComponent(raw);
    if (frameRef.current) {
      frameRef.current.src = `/service/${encoded}`;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "calc(100vh - var(--navbar-h) - 49px)" }}>
      {/* top bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 16px",
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          flexShrink: 0,
        }}
      >
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--accent-light)", whiteSpace: "nowrap" }}>
          PROXY
        </span>
        <div style={{ flex: 1, display: "flex", gap: 8 }}>
          <input
            ref={inputRef}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && navigate()}
            placeholder="Enter a URL (e.g. coolmathgames.com)"
            style={{
              flex: 1,
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              padding: "7px 12px",
              fontSize: 13,
              color: "var(--text)",
              outline: "none",
              minWidth: 0,
            }}
          />
          <button
            onClick={navigate}
            className="btn btn-primary"
            style={{ padding: "7px 18px", fontSize: 13 }}
          >
            Go
          </button>
        </div>
        <div style={{ fontSize: 11, color: registered ? "#4ade80" : "#f87171", whiteSpace: "nowrap" }}>
          {registered ? "● Active" : "● Loading..."}
        </div>
      </div>

      {/* proxy frame */}
      <iframe
        ref={frameRef}
        title="proxy"
        style={{ flex: 1, border: "none", width: "100%", background: "#000" }}
        allow="fullscreen"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock"
      />

      {!url && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔒</div>
          <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
            Unblocked Proxy
          </h2>
          <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 320 }}>
            Enter any URL above to browse it through the proxy. Bypasses most school filters.
          </p>
        </div>
      )}
    </div>
  );
}
