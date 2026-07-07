import type { Metadata } from "next";
import s from "../legal/legal.module.css";

export const metadata: Metadata = { title: "Privacy Policy — TotallyMath" };

const UPDATED = "July 6, 2026";

export default function PrivacyPage() {
  return (
    <div className={s.wrap}>
      <h1>Privacy Policy</h1>
      <p className={s.updated}>Last updated: {UPDATED}</p>

      <div className={s.notice}>
        TotallyMath is a free, hobby website that lets you play browser games. We try to
        collect as little information as possible. We do not sell your data, and we do not
        ask you to create an account.
      </div>

      <h2>1. Information we collect</h2>
      <p>
        We do not require you to sign up or provide any personal information to play games.
        We do not knowingly collect your name, email, or contact details.
      </p>
      <ul>
        <li>
          <strong>Local storage:</strong> Some games save your high scores or progress in
          your own browser using <em>localStorage</em>. This data stays on your device and
          is not sent to us.
        </li>
        <li>
          <strong>Basic technical data:</strong> Like most websites, our hosting provider
          (Vercel) may automatically log standard request data such as your IP address,
          browser type, and pages visited, for security and reliability.
        </li>
      </ul>

      <h2>2. Cookies</h2>
      <p>
        TotallyMath does not set advertising or tracking cookies of its own. See our{" "}
        <a href="/cookies">Cookie Policy</a> for details, including cookies that individual
        embedded games or external game sites may set.
      </p>

      <h2>3. Third-party games</h2>
      <p>
        Some games are hosted on other websites and shown through an embedded frame or opened
        in a new tab. When you play those games, the third-party site&apos;s own privacy
        practices apply. We have no control over data collected by external game providers.
      </p>

      <h2>4. Children&apos;s privacy</h2>
      <p>
        We do not knowingly collect personal information from anyone, including children under
        13. If you believe a child has provided us personal information, contact us and we
        will delete it.
      </p>

      <h2>5. Your choices</h2>
      <p>
        You can clear game save data at any time by clearing your browser&apos;s site data for
        this website. You can block cookies through your browser settings.
      </p>

      <h2>6. Changes</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on this page with
        a new &quot;last updated&quot; date.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions? Reach us via the <a href="/dmca">contact details on our DMCA / Contact page</a>.
      </p>
    </div>
  );
}
