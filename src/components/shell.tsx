import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Brand } from "./brand";
import { MobileMenu } from "./mobile-menu";
import { siteContent } from "@/content/site";
import { localizedPath, type Locale } from "@/lib/i18n";
import styles from "./shell.module.css";

export function Header({ lang, page = "" }: { lang: Locale; page?: string }) {
  const t = siteContent[lang];
  const navigation = [
    ["features", t.nav.features],
    ["how-it-works", t.nav.how],
    ["privacy", t.nav.privacy],
    ["faq", t.nav.faq],
  ];
  const navLinks = navigation.map(([id, label]) => (
    <Link key={id} href={`/${lang}#${id}`}>
      {label}
    </Link>
  ));
  const languages = (
    <div className={styles.languages} aria-label={t.nav.language}>
      {(["az", "en"] as const).map((locale) => (
        <Link
          key={locale}
          href={localizedPath(locale, page)}
          lang={locale}
          hrefLang={locale}
          aria-current={lang === locale ? "page" : undefined}
          aria-label={locale === "az" ? "Azərbaycanca" : "English"}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
  return (
    <header className={styles.header} id="top">
      <div className={`${styles.headerInner} container`}>
        <Brand lang={lang} />
        <nav
          className={styles.desktopNav}
          aria-label={lang === "az" ? "Əsas naviqasiya" : "Main navigation"}
        >
          {navLinks}
        </nav>
        <div className={styles.headerActions}>
          {languages}
          <Link href={`/${lang}#download`} className={styles.explore}>
            {t.nav.explore}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <MobileMenu label={t.nav.menu}>
          <nav
            aria-label={
              lang === "az" ? "Mobil naviqasiya" : "Mobile navigation"
            }
          >
            {navLinks}
            <Link href={`/${lang}#download`}>
              {t.nav.explore}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </nav>
        </MobileMenu>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const t = siteContent[lang].footer;
  const links = [
    ["privacy", t.privacy],
    ["terms", t.terms],
    ["user-agreement", t.agreement],
    ["delete-account", t.deletion],
    ["support", t.support],
  ];
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div>
            <Brand lang={lang} />
            <p>{t.tagline}</p>
          </div>
          <Link className={styles.backTop} href="#top" aria-label={t.top}>
            <ArrowUp size={19} aria-hidden="true" />
          </Link>
        </div>
        <nav
          className={styles.footerLinks}
          aria-label={
            lang === "az" ? "Məlumat və sənədlər" : "Information and documents"
          }
        >
          {links.map(([slug, title]) => (
            <Link key={slug} href={`/${lang}/${slug}`}>
              {title}
            </Link>
          ))}
        </nav>
        <div className={styles.footerBottom}>
          <span>{t.copyright}</span>
          <span className={styles.preview}>
            <i aria-hidden="true" />
            {t.local}
          </span>
          <span>AZ · EN</span>
        </div>
      </div>
    </footer>
  );
}
