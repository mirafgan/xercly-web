"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import styles from "./shell.module.css";
export function MobileMenu({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !ref.current?.contains(event.target))
        ref.current?.removeAttribute("open");
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  return (
    <details
      ref={ref}
      className={styles.mobileMenu}
      onKeyDown={(event) => {
        if (event.key === "Escape" && ref.current?.open) {
          ref.current.open = false;
          ref.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary aria-label={label}>
        <Menu className={styles.menuIcon} size={23} />
        <X className={styles.closeIcon} size={23} />
      </summary>
      <div
        className={styles.mobilePanel}
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a") &&
            ref.current
          )
            ref.current.open = false;
        }}
      >
        {children}
      </div>
    </details>
  );
}
