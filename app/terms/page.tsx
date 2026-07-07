import type { Metadata } from "next";
import s from "../legal/legal.module.css";

export const metadata: Metadata = { title: "Terms of Use — TotallyMath" };

const UPDATED = "July 6, 2026";

export default function TermsPage() {
  return (
    <div className={s.wrap}>
      <h1>Terms of Use</h1>
      <p className={s.updated}>Last updated: {UPDATED}</p>

      <div className={s.notice}>
        TotallyMath is a free, non-commercial hobby project that collects and links to free
        browser games. By using the site you agree to these terms.
      </div>

      <h2>1. Acceptance</h2>
      <p>
        By accessing TotallyMath you agree to these Terms of Use and our{" "}
        <a href="/privacy">Privacy Policy</a>. If you do not agree, please do not use the site.
      </p>

      <h2>2. The service</h2>
      <p>
        TotallyMath provides access to open-source and freely available browser games. Some
        games are hosted on our own servers under their open-source licenses; others are
        embedded from or linked to third-party websites. We provide the site &quot;as is&quot;
        with no guarantee that any game will always be available or bug-free.
      </p>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>Use the site for personal, lawful entertainment only.</li>
        <li>Do not use the site to break any law, school policy, or workplace policy.</li>
        <li>Do not attempt to attack, overload, hack, or disrupt the site.</li>
        <li>Do not scrape, resell, or commercially exploit the site or its content.</li>
      </ul>
      <p>
        <strong>School and workplace note:</strong> It is your responsibility to follow the
        rules of your school, employer, or network. TotallyMath is not responsible for how you
        choose to use it.
      </p>

      <h2>4. Intellectual property</h2>
      <p>
        Self-hosted games remain the property of their original authors and are used under
        their open-source licenses, with attribution on our <a href="/credits">Credits</a>{" "}
        page. Third-party games and their trademarks belong to their respective owners.
        TotallyMath claims no ownership over any game it did not create.
      </p>
      <p>
        If you own rights to content you believe is used improperly, see our{" "}
        <a href="/dmca">DMCA / Takedown</a> page.
      </p>

      <h2>5. No warranty</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available&quot; without warranties
        of any kind, express or implied, including fitness for a particular purpose. We do not
        warrant that the site will be uninterrupted, secure, or error-free.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, TotallyMath and its operator are not liable for
        any indirect, incidental, or consequential damages arising from your use of the site or
        any game accessed through it.
      </p>

      <h2>7. Changes</h2>
      <p>
        We may update these terms at any time. Continued use of the site after changes means
        you accept the updated terms.
      </p>
    </div>
  );
}
