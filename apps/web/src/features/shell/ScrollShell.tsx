// src/features/shell/ScrollShell.tsx
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import "simplebar-react/dist/simplebar.min.css";
import { Suspense, useEffect, useRef, useState } from "react";
import SimpleBar from "simplebar-react";
import styles from "./shell.simplebar.module.css";
import { sections as registry, SectionSpec } from "./sections";

export default function ScrollShell() {
  // Load everything (simplest & most stable)
  const [loaded] = useState<SectionSpec[]>(registry);
  const barRef = useRef<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sections = loaded.map(({ id, loader }) => (
    <SectionLoader key={id} id={id} loader={loader} />
  ));

  // Recalculate SimpleBar when inner content layout changes (iframes, images, fonts)
  useEffect(() => {
    const sb = barRef.current;
    const el: HTMLElement | null = sb?.getScrollElement?.() ?? null;
    if (!sb || !el) return;

    const content = el.querySelector(".simplebar-content") as HTMLElement | null;
    if (!content) return;

    const ro = new ResizeObserver(() => sb.recalculate?.());
    ro.observe(content);
    return () => ro.disconnect();
  }, []);

  // Simple nav event: scroll to a section id
  useEffect(() => {
    function onNavGo(e: Event) {
      const { id } = (e as CustomEvent).detail ?? {};
      if (!id) return;
      const el: HTMLElement | null = barRef.current?.getScrollElement?.() ?? null;
      if (!el) return;
      const node = el.querySelector<HTMLElement>(`[data-section-id="${id}"]`);
      if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    window.addEventListener("nav:go", onNavGo as EventListener);
    return () => window.removeEventListener("nav:go", onNavGo as EventListener);
  }, []);

  return (
    <div className={styles.root}>
      {isMobile ? (
        <div className="h-dvh overflow-y-auto overflow-x-hidden">
          {sections}
        </div>
      ) : (
      <SimpleBar
        className={styles.bar}
        autoHide={false}
        ref={barRef}
        scrollableNodeProps={{ id: "scroll-shell" }}
      >
        {loaded.map(({ id, loader }) => (
          <SectionLoader key={id} id={id} loader={loader} />
        ))}
        {/* tiny spacer to guarantee the thumb can reach absolute bottom */}
        <div style={{ height: 2 }} />
      </SimpleBar>
      )}
    </div>
  );
}

function SectionLoader({ id, loader }: { id: string; loader: SectionSpec["loader"] }) {
  const Lazy = useLazy(loader);
  return (
    <section
      data-section-id={id}
      className="min-h-[100svh] flex items-stretch"
      aria-label={id}
    >
      <div className="flex-1">
        <Suspense
          fallback={
            <div className="grid place-items-center min-h-[100svh] text-slate-500">
              Loading…
            </div>
          }
        >
          <Lazy />
        </Suspense>
      </div>
    </section>
  );
}

function useLazy(loader: SectionSpec["loader"]) {
  const [Comp, setComp] = useState<any>(null);
  useEffect(() => {
    let mounted = true;
    loader().then((m) => mounted && setComp(() => m.default));
    return () => {
      mounted = false;
    };
  }, [loader]);
  return Comp ?? (() => null);
}
