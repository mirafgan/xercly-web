"use client";
import { useEffect, useRef, type ReactNode } from "react";
import styles from "./home.module.css";
export function ParallaxScene({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true;
    let frame = 0;
    const update = () => {
      frame = 0;
      if (preference.matches || !visible) return;
      const rect = element.getBoundingClientRect();
      const progress = Math.max(
        -1,
        Math.min(1, -rect.top / Math.max(rect.height, 1)),
      );
      const scale = window.innerWidth < 768 ? 0.5 : 1;
      element.style.setProperty("--back-y", `${progress * 40 * scale}px`);
      element.style.setProperty("--phone-y", `${progress * -16 * scale}px`);
      element.style.setProperty("--card-y", `${progress * 24 * scale}px`);
    };
    const schedule = () => {
      if (!frame && visible && !preference.matches)
        frame = requestAnimationFrame(update);
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      for (const name of ["--back-y", "--phone-y", "--card-y"])
        element.style.removeProperty(name);
      schedule();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      schedule();
    });
    observer.observe(element);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    preference.addEventListener("change", reset);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", reset);
    };
  }, []);
  return (
    <div ref={ref} className={styles.scene} data-parallax-scene>
      {children}
    </div>
  );
}
