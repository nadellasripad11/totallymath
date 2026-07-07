import type { Metadata } from "next";
import { getCredits, getOriginals } from "@/lib/games";
import s from "../legal/legal.module.css";

export const metadata: Metadata = { title: "Credits & Licenses — TotallyMath" };

export default function CreditsPage() {
  const credited = getCredits();
  const originals = getOriginals();

  return (
    <div className={s.wrap}>
      <h1>Credits &amp; Licenses</h1>
      <p className={s.updated}>The games that make TotallyMath possible.</p>

      {originals.length > 0 && (
        <>
          <h2 style={{ marginTop: 8 }}>★ Original TotallyMath games</h2>
          <p>
            These games were built from scratch for TotallyMath — original code, made here:
          </p>
          <ul>
            {originals.map((game) => (
              <li key={game.slug}>
                <span style={{ marginRight: 6 }}>{game.icon}</span>
                <strong>{game.title}</strong> — an original TotallyMath game
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Open-source games</h2>
      <div className={s.notice}>
        Every game we host on our own servers is open-source, created by the talented
        developers below and used under its original license. Huge thanks to all of them.
        If you made one of these and want a change to your credit or removal, contact us via
        the <a href="/dmca">DMCA / Contact</a> page.
      </div>

      {credited.map((game) => (
        <div key={game.slug} style={{ marginBottom: 18 }}>
          <h2 style={{ margin: "0 0 4px", fontSize: 17 }}>
            <span style={{ marginRight: 8 }}>{game.icon}</span>
            {game.title}
          </h2>
          <p style={{ margin: 0 }}>
            by <strong>{game.credit!.author}</strong> · {game.credit!.license} license ·{" "}
            <a href={game.credit!.source} target="_blank" rel="noopener noreferrer">
              source
            </a>
          </p>
        </div>
      ))}

      <h2>Externally hosted games</h2>
      <p>
        Games not listed above are hosted on third-party websites and are embedded or linked
        with credit to their original creators. All trademarks and copyrights belong to their
        respective owners.
      </p>
    </div>
  );
}
