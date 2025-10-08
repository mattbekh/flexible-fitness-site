/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import tw from "tailwind-styled-components";

const Root = tw.section`
  min-h-screen grid place-items-center px-6 py-10
  bg-[var(--site-background)] text-[var(--site-foreground)]
`;
const Card = tw.div`
  w-full max-w-5xl rounded-3xl border border-black/10 bg-white/70 backdrop-blur
  dark:bg-black/30 dark:border-white/10
  p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]
`;
const Title = tw.h2`font-heading text-3xl md:text-4xl tracking-tight mb-1`;
const Sub = tw.p`font-body opacity-80 mb-4`;

export default function BookSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Load Calendly script once
    const w = window as any;
    if (!w.Calendly) {
      const s = document.createElement("script");
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  useEffect(() => {
    // If script exposes API, you can also use the advanced embed later
    // (pre-fill name/email, tracking, open on demand, etc.) :contentReference[oaicite:8]{index=8}
  }, []);

  return (
    <Root data-section-id="book" aria-label="book">
      <Card>
        <Title>Book a Free Consultation</Title>
        <Sub>Pick a time that works. You’ll receive an email confirmation and calendar invite.</Sub>

        {/* Inline embed container */}
        <div
          ref={ref}
          className="calendly-inline-widget"
          // Replace with your real scheduling link (event type):
          data-url="https://calendly.com/sgt_bum/30min"
          style={{ minWidth: "320px", height: "890px" }}
        />
      </Card>
    </Root>
  );
}
