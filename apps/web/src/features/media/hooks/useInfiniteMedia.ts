"use client";
import { useEffect, useRef, useState, useCallback } from "react";

export function useInfiniteMedia() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [items, setItems] = useState<any[]>([]);
  const [cursor, setCursor] = useState<number | null>(0);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const load = useCallback(async () => {
    if (loading || cursor === null) return;
    setLoading(true);
    const res = await fetch(`/api/media?cursor=${cursor}`, { cache: "no-store" });
    const data = await res.json();
    setItems(prev => [...prev, ...data.items]);
    setCursor(data.nextCursor);
    setLoading(false);
  }, [cursor, loading]);

  useEffect(() => { load(); }, []); // first page

  useEffect(() => {
    if (!sentinelRef.current) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) load();
    }, { rootMargin: "400px" });
    io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [load]);

  return { items, loading, sentinelRef };
}
