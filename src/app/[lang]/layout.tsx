import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n";
import { siteContent } from "@/content/site";
import "../globals.css";
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = siteContent[lang].metadata;
  return {
    title: { default: t.title, template: "%s · Xercly" },
    description: t.description,
    applicationName: "Xercly",
    robots: { index: false, follow: false },
    icons: { icon: "/icon.svg" },
    openGraph: {
      title: t.title,
      description: t.description,
      type: "website",
      locale: lang === "az" ? "az_AZ" : "en_US",
      siteName: "Xercly",
    },
  };
}
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return (
    <html lang={lang}>
      <body>
        <a href="#main-content" className="skip-link">
          {siteContent[lang].nav.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
