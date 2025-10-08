"use client";
import Image from "next/image";
import { useInfiniteMedia } from "../hooks/useInfiniteMedia";

export function InfiniteMediaList() {
  const { items, loading, sentinelRef } = useInfiniteMedia();
  return (
    <>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {items.map((it) => (
          <article key={it.id} className="border rounded-xl overflow-hidden">
            <div className="aspect-video relative">
              <Image src={it.thumb} alt={it.title} fill className="object-cover" />
            </div>
            <div className="p-3 text-sm">{it.title}</div>
          </article>
        ))}
      </div>
      <div ref={sentinelRef} className="h-10" />
      {loading && <p className="text-sm text-slate-500 mt-2">Loading…</p>}
    </>
  );
}
