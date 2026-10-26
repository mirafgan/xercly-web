import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import styles from "./shell.module.css";
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 34"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M14.8 16.6C5.7 17.3 2.2 11.1 3.5 2.2c8.5.8 13.2 5 11.3 14.4Z"
        fill="currentColor"
      />
      <path
        d="M17.4 15.3C16 6.5 22 2.6 30.5 2c.2 8.8-4.3 13.8-13.1 13.3Z"
        fill="currentColor"
      />
      <path
        d="M14.2 20C5 18.2 1.2 24.6 1 32c8.3.5 14.5-3.5 13.2-12Z"
        fill="currentColor"
      />
      <path
        d="m13.5 28 4.2-15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function Brand({ lang }: { lang: Locale }) {
  return (
    <Link href={`/${lang}`} className={styles.brand} aria-label="Xercly">
      <LeafMark />
      <span>xercly</span>
    </Link>
  );
}
