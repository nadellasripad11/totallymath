import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import PanicKey from "@/components/PanicKey";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "TotallyMath — Free Unblocked Games",
  description: "Play free unblocked games at school. Arcade, puzzle, racing, 2-player, and more.",
};

const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/cookies", label: "Cookies" },
  { href: "/terms", label: "Terms" },
  { href: "/credits", label: "Credits" },
  { href: "/dmca", label: "DMCA / Contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <PanicKey />
        <main style={{ flex: 1 }}>{children}</main>
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center" }}>
            {FOOTER_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: 12, color: "var(--accent-light)", textAlign: "center", margin: 0 }}>
            Tip: press the <kbd className="kbd">`</kbd> key any time to instantly bail to Google Classroom.
          </p>
          <p style={{ fontSize: 12, color: "var(--text-muted)", textAlign: "center", margin: 0, maxWidth: 560, lineHeight: 1.5 }}>
            © {new Date().getFullYear()} TotallyMath — a free, non-commercial hobby project. Games are open-source
            or belong to their respective owners. Not affiliated with any other gaming site.
          </p>
        </footer>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
