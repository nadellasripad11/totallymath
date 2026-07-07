import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "TotallyMath — Free Unblocked Games",
  description: "Play free unblocked games at school. Arcade, puzzle, racing, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <footer style={{
          borderTop: "1px solid var(--border)",
          padding: "16px 20px",
          textAlign: "center",
          fontSize: 12,
          color: "var(--text-muted)",
        }}>
          © {new Date().getFullYear()} TotallyMath — Free games for everyone
        </footer>
      </body>
    </html>
  );
}
