import type { Metadata } from "next";
import s from "../legal/legal.module.css";

export const metadata: Metadata = { title: "Cookie Policy — TotallyMath" };

const UPDATED = "July 6, 2026";

export default function CookiePage() {
  return (
    <div className={s.wrap}>
      <h1>Cookie Policy</h1>
      <p className={s.updated}>Last updated: {UPDATED}</p>

      <div className={s.notice}>
        Short version: TotallyMath itself does not use cookies to track you or show ads. Some
        games save your progress in your browser, and external games opened from our site may
        set their own cookies.
      </div>

      <h2>What are cookies?</h2>
      <p>
        Cookies are small text files a website can store in your browser. Related technologies
        like <em>localStorage</em> work similarly. They can remember settings, save game
        progress, or track activity across sites.
      </p>

      <h2>Cookies we use</h2>
      <ul>
        <li>
          <strong>Essential / functional only.</strong> TotallyMath does not set advertising,
          analytics, or cross-site tracking cookies of its own.
        </li>
        <li>
          <strong>Game save data.</strong> Some self-hosted games store your high score or
          progress in your browser&apos;s local storage. This never leaves your device.
        </li>
        <li>
          <strong>Cookie notice preference.</strong> We may store a single value in your
          browser to remember that you dismissed the cookie notice, so it stops reappearing.
        </li>
      </ul>

      <h2>Third-party cookies</h2>
      <p>
        Games hosted on external websites (for example, Lichess or Cookie Clicker) may set
        their own cookies when you play them. Those cookies are controlled by the third-party
        provider, not by TotallyMath, and are governed by that provider&apos;s own policies.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can delete or block cookies through your browser settings, and clear this
        site&apos;s stored data at any time. Blocking cookies may reset your saved game
        progress.
      </p>
    </div>
  );
}
