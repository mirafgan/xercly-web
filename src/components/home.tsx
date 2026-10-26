import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  PencilLine,
  ChartPie,
  ChartNoAxesColumnIncreasing,
  ShoppingBag,
  Utensils,
  BusFront,
  Coffee,
  Ellipsis,
  Wallet,
  FileSpreadsheet,
  Plus,
  LockKeyhole,
  ShieldCheck,
  Check,
} from "lucide-react";
import { siteContent } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { StoreBadges } from "./store-badges";
import { ParallaxScene } from "./parallax-scene";
import { Phone } from "./phone";
import { LeafMark } from "./brand";
import styles from "./home.module.css";

const categoryIcons = [Utensils, BusFront, Coffee, ShoppingBag, Ellipsis];
const percents = [35, 20, 16, 12, 17];
export function Home({ lang }: { lang: Locale }) {
  const t = siteContent[lang];
  return (
    <main id="main-content">
      <section
        className={`${styles.hero} container`}
        aria-labelledby="hero-title"
      >
        <div className={styles.heroCopy}>
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 id="hero-title">
            {t.hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p className={styles.heroBody}>{t.hero.body}</p>
          <p className={styles.heroSub}>{t.hero.sub}</p>
          <StoreBadges lang={lang} />
          <a className={styles.textLink} href="#how-it-works">
            {t.hero.discover}
            <ArrowDown size={16} aria-hidden="true" />
          </a>
        </div>
        <div className={styles.heroVisual}>
          <ParallaxScene>
            <div className={styles.orbit} aria-hidden="true" />
            <div className={styles.plantBack} aria-hidden="true">
              <Image
                src="/images/botanical.webp"
                alt=""
                width={640}
                height={960}
                sizes="(max-width: 767px) 320px, 470px"
                preload
              />
            </div>
            <div className={styles.plinth} aria-hidden="true" />
            <div className={styles.budgetFloat} aria-hidden="true">
              <span>Aylıq büdcə</span>
              <svg viewBox="0 0 140 84" fill="none">
                <path
                  d="M15 72a55 55 0 0 1 110 0"
                  stroke="#6B8C70"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <path
                  d="M15 72a55 55 0 0 1 74-52"
                  stroke="#E8EEDC"
                  strokeWidth="9"
                  strokeLinecap="round"
                />
                <text
                  x="70"
                  y="69"
                  textAnchor="middle"
                  fill="#FBFCF9"
                  fontSize="26"
                  fontFamily="inherit"
                  fontWeight="600"
                >
                  62%
                </text>
              </svg>
              <strong>1 248,50 ₼</strong>
              <small>/ 2 000,00 ₼</small>
            </div>
            <div className={styles.phoneLayer}>
              <Phone label={t.hero.phoneAlt} />
            </div>
            <div className={styles.receiptFloat} aria-hidden="true">
              <span className={styles.receiptIcon}>
                <ShoppingBag size={22} />
              </span>
              <div>
                <strong>Market</strong>
                <span>Qida · Bu gün</span>
              </div>
              <b>−42,80 ₼</b>
              <span className={styles.receiptCheck}>
                <Check size={12} />
              </span>
            </div>
          </ParallaxScene>
          <p className={styles.sampleNote}>{t.hero.sample}</p>
        </div>
      </section>
      <div className={`${styles.featureStrip} container`}>
        {t.strip.map((item, i) => {
          const Icon = [PencilLine, ChartPie, ChartNoAxesColumnIncreasing][i];
          return (
            <div key={item}>
              <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <section
        className={styles.reportSection}
        id="features"
        aria-labelledby="report-title"
      >
        <div className={`${styles.reportInner} container`}>
          <div className={styles.reportTitle}>
            <p className="eyebrow">{t.report.eyebrow}</p>
            <h2 id="report-title">
              {t.report.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <div
            className={styles.categoryChart}
            role="img"
            aria-label={`${t.report.chartLabel}: ${t.report.categories.map((name, i) => `${name} ${percents[i]}%`).join(", ")}`}
          >
            <div aria-hidden="true">
              {t.report.categories.map((category, i) => {
                const Icon = categoryIcons[i];
                return (
                  <div className={styles.categoryRow} key={category}>
                    <Icon size={20} strokeWidth={1.5} />
                    <span>{category}</span>
                    <div className={styles.categoryTrack}>
                      <i
                        style={{
                          width: `${(percents[i] / 35) * 100}%`,
                          opacity: 1 - i * 0.13,
                        }}
                      />
                    </div>
                    <small>{percents[i]}%</small>
                  </div>
                );
              })}
            </div>
            <p>{t.report.sample}</p>
          </div>
          <div className={styles.reportCopy}>
            <p>{t.report.body}</p>
            <a className={styles.outlineLink} href="#everyday">
              {t.report.link}
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className={styles.reportPlant} aria-hidden="true">
            <Image
              src="/images/botanical.webp"
              alt=""
              width={500}
              height={750}
              sizes="350px"
            />
          </div>
        </div>
      </section>
      <section
        className={`${styles.everyday} container`}
        id="everyday"
        aria-labelledby="everyday-title"
      >
        <p className="eyebrow">{t.features.eyebrow}</p>
        <h2 id="everyday-title">{t.features.title}</h2>
        <div className={styles.featureGrid}>
          {t.features.items.map((item, i) => {
            const Icon = [Wallet, ChartPie, FileSpreadsheet][i];
            return (
              <article key={item.title} className={styles.featureItem}>
                <span className={styles.featureIcon}>
                  <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section
        className={styles.howSection}
        id="how-it-works"
        aria-labelledby="how-title"
      >
        <div className="container">
          <p className="eyebrow">{t.how.eyebrow}</p>
          <h2 id="how-title">{t.how.title}</h2>
          <div className={styles.steps}>
            {t.how.steps.map((step, i) => {
              const Icon = [PencilLine, ChartPie, ChartNoAxesColumnIncreasing][
                i
              ];
              return (
                <article className={styles.step} key={step.title}>
                  <span className={styles.stepNumber}>0{i + 1}</span>
                  <div className={styles.stepIcon}>
                    <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section
        className={styles.privacySection}
        id="privacy"
        aria-labelledby="privacy-title"
      >
        <div className={`${styles.privacyInner} container`}>
          <div className={styles.privacyCopy}>
            <p className="eyebrow">{t.privacy.eyebrow}</p>
            <h2 id="privacy-title">{t.privacy.title}</h2>
            <p className={styles.privacyBody}>{t.privacy.body}</p>
            <Link href={`/${lang}/privacy`} className={styles.privacyLink}>
              {t.privacy.link}
              <ArrowUpRight size={20} aria-hidden="true" />
            </Link>
            <p className={styles.cloudStatus}>
              <ShieldCheck size={17} aria-hidden="true" />
              {t.privacy.status}
            </p>
          </div>
          <div className={styles.lockVisual} aria-hidden="true">
            <div />
            <div />
            <div />
            <span>
              <LockKeyhole size={60} strokeWidth={1.15} />
            </span>
            <i />
            <b />
          </div>
        </div>
      </section>
      <section
        className={`${styles.about} container`}
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 id="about-title">{t.about.title}</h2>
        </div>
        <div>
          <p>{t.about.body}</p>
          <p className={styles.aboutNote}>{t.about.note}</p>
        </div>
        <LeafMark className={styles.aboutLeaf} />
      </section>
      <section
        className={styles.faqSection}
        id="faq"
        aria-labelledby="faq-title"
      >
        <div className={`${styles.faqInner} container`}>
          <div>
            <p className="eyebrow">{t.faq.eyebrow}</p>
            <h2 id="faq-title">{t.faq.title}</h2>
            <p className={styles.faqIntro}>{t.faq.intro}</p>
          </div>
          <div className={styles.faqList}>
            {t.faq.items.map(({ q, a }) => (
              <details className={styles.faqItem} key={q}>
                <summary>
                  {q}
                  <Plus size={20} aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section
        className={styles.downloadSection}
        id="download"
        aria-labelledby="download-title"
      >
        <div className={`${styles.downloadInner} container`}>
          <div>
            <p className="eyebrow">{t.download.eyebrow}</p>
            <h2 id="download-title">
              {t.download.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
          </div>
          <div className={styles.downloadAction}>
            <p>{t.download.body}</p>
            <StoreBadges lang={lang} />
            <p className={styles.downloadNote}>{t.download.note}</p>
          </div>
          <div className={styles.downloadPlant} aria-hidden="true">
            <Image
              src="/images/botanical.webp"
              alt=""
              width={380}
              height={570}
              sizes="300px"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
