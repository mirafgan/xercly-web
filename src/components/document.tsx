import Link from "next/link";
import { ArrowLeft, FileText, Info, ArrowUpRight } from "lucide-react";
import { documents, type DocumentSlug } from "@/content/documents";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import styles from "./legal.module.css";
export function Document({ lang, slug }: { lang: Locale; slug: DocumentSlug }) {
  const doc = documents[lang][slug];
  const t = siteContent[lang];
  return (
    <main id="main-content" className={styles.main}>
      <div className="container">
        <Link className={styles.back} href={`/${lang}`}>
          <ArrowLeft size={15} aria-hidden="true" />
          {t.footer.back}
        </Link>
        <div className={styles.heading}>
          <p className="eyebrow">{t.legal.eyebrow}</p>
          <div className={styles.titleRow}>
            <h1>{doc.title}</h1>
            <span className={styles.draft}>
              <span />
              {t.legal.draft}
            </span>
          </div>
          <p className={styles.summary}>{doc.summary}</p>
          <p className={styles.updated}>
            {t.legal.updated}
            <span>·</span>
            {t.legal.effective}
          </p>
        </div>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <div className={styles.contents}>
              <p>
                <FileText size={15} aria-hidden="true" />
                {t.legal.contents}
              </p>
              <nav aria-label={t.legal.contents}>
                {doc.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title.replace(/^\d+\. /, "")}
                  </a>
                ))}
              </nav>
            </div>
            <details className={styles.mobileContents}>
              <summary>
                {t.legal.contents}
                <span>+</span>
              </summary>
              <nav aria-label={t.legal.contents}>
                {doc.sections.map((section) => (
                  <a key={section.id} href={`#${section.id}`}>
                    {section.title}
                  </a>
                ))}
              </nav>
            </details>
          </aside>
          <div className={styles.article}>
            <div className={styles.notice}>
              <Info size={19} aria-hidden="true" />
              <p>{t.legal.draftNote}</p>
            </div>
            {(slug === "delete-account" || slug === "support") && (
              <p className={styles.availability}>
                {slug === "delete-account"
                  ? t.legal.unavailable
                  : t.legal.contactPending}
              </p>
            )}
            {doc.sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className={styles.section}
              >
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
            <div className={styles.related}>
              <p>{lang === "az" ? "Əlaqəli səhifələr" : "Related pages"}</p>
              <div>
                {(
                  [
                    "privacy",
                    "terms",
                    "user-agreement",
                    "delete-account",
                    "support",
                  ] as const
                )
                  .filter((item) => item !== slug)
                  .map((item) => (
                    <Link href={`/${lang}/${item}`} key={item}>
                      {documents[lang][item].title}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
