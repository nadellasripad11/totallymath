"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  gameUrl: string;
  title: string;
}

// Railway backend — set NEXT_PUBLIC_WISP_URL in Vercel env vars after deploy
const WISP_URL =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_WISP_URL) ||
  "wss://totallymath-proxy-production.up.railway.app/wisp/";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

export default function ProxyFrame({ gameUrl, title }: Props) {
  const [proxySrc, setProxySrc] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    (async () => {
      try {
        if (!navigator.serviceWorker)
          throw new Error("Service workers not supported in this browser");

        // Load UV and BareMux as globals (same order as UV-App)
        await loadScript("/baremux/index.js");
        await loadScript("/uv/uv.bundle.js");
        await loadScript("/uv/uv.config.js");

        // Register the UV service worker
        await navigator.serviceWorker.register("/uv/uv.sw.js", {
          scope: "/uv/service/",
        });

        // Set up Wisp transport via BareMux
        const w = (window as any);
        const connection = new w.BareMux.BareMuxConnection("/baremux/worker.js");
        if ((await connection.getTransport()) !== "/epoxy/index.mjs") {
          await connection.setTransport("/epoxy/index.mjs", [{ wisp: WISP_URL }]);
        }

        // Build the proxied URL using UV's XOR encoder
        const src =
          w.__uv$config.prefix + w.__uv$config.encodeUrl(gameUrl);
        setProxySrc(src);
      } catch (e: any) {
        setError(e?.message ?? "Proxy setup failed");
      }
    })();
  }, [gameUrl]);

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "rgba(255,255,255,0.4)",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 13 }}>Proxy unavailable</span>
        <span style={{ fontSize: 11, opacity: 0.6 }}>{error}</span>
      </div>
    );
  }

  if (!proxySrc) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "rgba(255,255,255,0.35)",
          fontSize: 13,
          background: "#0d0d1a",
        }}
      >
        Connecting proxy…
      </div>
    );
  }

  return (
    <iframe
      src={proxySrc}
      title={title}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
      allow="fullscreen"
      sandbox="allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-modals allow-popups"
    />
  );
}
