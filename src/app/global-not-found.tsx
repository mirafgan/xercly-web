import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Səhifə tapılmadı · Xercly",
  robots: { index: false, follow: false },
};
export default function GlobalNotFound() {
  return (
    <html lang="az">
      <body>
        <main style={{ maxWidth: 600, margin: "15vh auto", padding: 24 }}>
          <p className="eyebrow">XERCLY / 404</p>
          <h1
            style={{ fontSize: 44, letterSpacing: "-.05em", margin: "24px 0" }}
          >
            Səhifə tapılmadı.
          </h1>
          <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            Bu ünvan mövcud deyil.{" "}
            <span lang="en">This page could not be found.</span>
          </p>
          <div style={{ display: "flex", gap: 24, marginTop: 24 }}>
            <Link
              href="/az"
              style={{ paddingBlock: 14, textDecoration: "underline" }}
            >
              Ana səhifə
            </Link>
            <Link
              href="/en"
              lang="en"
              style={{ paddingBlock: 14, textDecoration: "underline" }}
            >
              English home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
