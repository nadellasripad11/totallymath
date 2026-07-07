import type { Metadata } from "next";
import s from "../legal/legal.module.css";

export const metadata: Metadata = { title: "DMCA & Contact — TotallyMath" };

export default function DmcaPage() {
  return (
    <div className={s.wrap}>
      <h1>DMCA &amp; Contact</h1>
      <p className={s.updated}>How to report content or reach the site operator.</p>

      <div className={s.notice}>
        TotallyMath respects intellectual property rights. If you own the rights to a game or
        other content and believe it is used improperly on this site, we will remove it
        promptly on request — no legal fight needed.
      </div>

      <h2>Report content for removal</h2>
      <p>To request removal, send a message that includes:</p>
      <ul>
        <li>Your name and your relationship to the content (e.g. creator or rights holder).</li>
        <li>A link to the exact page or game on TotallyMath.</li>
        <li>A short description of the content and your rights to it.</li>
        <li>Your contact email.</li>
      </ul>
      <p>
        We aim to review and act on valid requests within a few days. In most cases we will
        simply take the content down.
      </p>

      <h2>Contact</h2>
      <p>
        Email:{" "}
        <a href="mailto:nadellasripad11@gmail.com">nadellasripad11@gmail.com</a>
      </p>
      <p style={{ fontSize: 13, opacity: 0.75 }}>
        (Replace this with a dedicated contact address if you prefer not to publish a personal
        email.)
      </p>
    </div>
  );
}
