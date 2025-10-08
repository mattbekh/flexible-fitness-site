"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Progress 0..1 across the "stage" element, using the *scroll-shell* element
 * (a scrollable DIV) as the viewport instead of window.
 */
export function useStageProgress(getScrollEl: () => HTMLElement | null = defaultGetScrollEl) {
  const ref = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const stageEl = ref.current;
    const scroller = getScrollEl();
    if (!stageEl || !scroller) return;

    let raf = 0;
    const compute = () => {
      const viewportH = scroller.clientHeight || 1;
      const stageTop = stageEl.offsetTop;        // top of stage within scroller
      const stageH = stageEl.offsetHeight || 1;  // total stage height
      const span = Math.max(1, stageH - viewportH);
      const p = clamp((scroller.scrollTop - stageTop) / span, 0, 1);
      setProgress(p);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };
    const onResize = onScroll;

    // initial calc + listeners
    compute();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [getScrollEl]);

  return { ref, progress };
}

function defaultGetScrollEl() {
  return document.getElementById("scroll-shell");
}

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}
