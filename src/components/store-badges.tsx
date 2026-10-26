import { siteConfig } from "@/lib/site-config";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import styles from "./home.module.css";
function AppleLogo() {
  return (
    <svg
      width="23"
      height="27"
      viewBox="0 0 24 28"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.9 14.2c0-2.4 1.9-3.6 2-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.7 0-1.9-.9-3.2-.9-1.6 0-3 .9-3.9 2.2-1.7 2.8-.5 6.9 1.1 9.2.8 1.1 1.6 2.3 2.8 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7 2-1.1 2.7-2.2c.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.6-1-2.6-3.3ZM15.5 7c.6-.8 1.1-1.9 1-3-.9 0-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.8 1 .1 2-.5 2.7-1.2Z" />
    </svg>
  );
}
function PlayLogo() {
  return (
    <svg width="25" height="27" viewBox="0 0 28 30" aria-hidden="true">
      <path d="M2 1.5v27l15-13.5Z" fill="#66C5F7" />
      <path d="m2 1.5 18 10.1-3 3.4Z" fill="#5BD197" />
      <path d="m17 15 3 3.4L2 28.5Z" fill="#F27077" />
      <path d="m20 11.6 5.3 3c.3.2.3.6 0 .8l-5.3 3L17 15Z" fill="#FFD264" />
    </svg>
  );
}
export function StoreBadges({ lang }: { lang: Locale }) {
  const coming = siteContent[lang].hero.coming;
  return (
    <div className={styles.stores}>
      {(
        [
          ["apple", "App Store", <AppleLogo key="apple" />],
          ["google", "Google Play", <PlayLogo key="google" />],
        ] as const
      ).map(([key, label, logo]) => {
        const store = siteConfig.stores[key];
        const badge = (
          <>
            {logo}
            <span>{label}</span>
          </>
        );
        return (
          <div className={styles.store} key={key}>
            {store.url ? (
              <a
                className={styles.storeBadge}
                href={store.url}
                rel="noopener noreferrer"
              >
                {badge}
              </a>
            ) : (
              <div
                className={styles.storeBadge}
                aria-label={`${label}: ${coming}`}
              >
                {badge}
              </div>
            )}
            <span className={styles.storeStatus}>{coming}</span>
          </div>
        );
      })}
    </div>
  );
}
