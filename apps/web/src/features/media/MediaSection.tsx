"use client";
import { InfiniteMediaList } from "./components/InfiniteMediaList";

export default function MediaSection() {
  // <InfiniteMediaList />
  return (
    <section
      className="h-screen flex items-center justify-center bg-[var(--site-background)]"
      aria-label="Recent work"
    >
      <h1 className="text-4xl font-bold tracking-tight">Recent Work</h1>
    </section>
  );
}
