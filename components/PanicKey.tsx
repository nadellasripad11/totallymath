"use client";

import { useEffect } from "react";

/** Where the panic key sends you. A boring, school-safe destination. */
export const PANIC_URL = "https://classroom.google.com";
/** The key that triggers panic. Backtick / tilde — easy to hit, rarely used. */
export const PANIC_KEY = "`";

export default function PanicKey() {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // ignore while typing in a field
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
      if (e.key === PANIC_KEY) {
        e.preventDefault();
        // replace() so the games site doesn't stay in back-button history
        window.location.replace(PANIC_URL);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
