"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref for the observed element and a progress value (0..1)
 * that increases as the element scrolls out of view (based on viewport height).
 */
export function useScrollProgress() {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // When the section is fully centered, p≈0; as it moves up and out, p→1.
        const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh * 1.2)));
        setProgress(p);
        el.style.setProperty("--progress", String(p));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { ref, progress };
}
