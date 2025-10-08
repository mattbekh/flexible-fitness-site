"use client";
import Image from "next/image";

import {
  AboutRoot,
  ContentWrap,
  PhotoWrap,
  MaskedPhoto,
  TextCol,
  Heading,
  Subheading,
  Body,
  SectionTitleRow,
  // NEW:
  FeaturesGrid,
  FeatureItem,
  FeatureIconWrap,
  FeatureTitle,
  FeatureDesc,
  FeatureCtaRow,
  FeatureCtaText,
  Credentials,
  ReviewsWrap,
  ReviewsTrack,
  ReviewsScroller,
  ReviewCard,
  ReviewQuote,
  ReviewMeta,
  ReviewsControls,
  EdgeFadeLeft,
  EdgeFadeRight,
  ArrowPrev,
  ArrowNext,
} from "./about.tw";
import { useEffect, useRef, useState } from "react";

export type Review = {
  quote: string;
  author: string;
  subtitle?: string;
};

export type AboutSectionProps = {
  coach: {
    name: string;
    title?: string;
    photoUrl: string;
    maskUrl?: string;
    description: string;
    credentials?: string[]; 
  };
  features: Feature[];      // ← instead of services
  reviews: Review[];
};

export type Feature = {
  title: string;
  description: string;
  iconSrc?: string; // <- string path like "/icons/1on1.svg"
};

export default function AboutSection({ coach, features, reviews }: AboutSectionProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  // update arrow enable/disable based on scroll position
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
      setCanPrev(scrollLeft > 2);
      setCanNext(scrollLeft < scrollWidth - clientWidth - 2);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const jump = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    // estimate distance = ~2 cards
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const gap = 24; // matches gap-6
    const cardW = card?.offsetWidth ?? Math.round(el.clientWidth * 0.7);
    el.scrollBy({ left: dir * (cardW + gap) * 2, behavior: "smooth" });
  };

  return (
    <AboutRoot id="about">
      {/* Coach header ... (unchanged) */}
      <ContentWrap>
        <PhotoWrap>
          <MaskedPhoto
            src={coach.photoUrl}
            alt={`${coach.name} — ${coach.title ?? "Coach"}`}
            maskUrl={coach.maskUrl}
          />
        </PhotoWrap>

        <TextCol>
          <Heading>{coach.name}</Heading>
          {coach.title ? <Subheading>{coach.title}</Subheading> : null}
          {coach.credentials?.length ? (
            <Credentials>{coach.credentials.join(" | ")}</Credentials>
          ) : null}
          <Body>{coach.description}</Body>
        </TextCol>
      </ContentWrap>

      {/* Features ... (unchanged) */}
      <SectionTitleRow className="mt-6">
        <h3 className="font-heading text-2xl md:text-3xl tracking-tight">What I Offer</h3>
      </SectionTitleRow>

      <FeaturesGrid>
        {features.map((f, i) => (
          <FeatureItem key={i}>
            <FeatureIconWrap>
              {f.iconSrc ? (
                <Image src={f.iconSrc} alt={f.title} width={48} height={48} className="object-contain" />
              ) : (
                <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
                  <circle cx="24" cy="24" r="20" fill="currentColor" opacity="0.12" />
                  <rect x="14" y="14" width="20" height="20" rx="4" fill="currentColor" />
                </svg>
              )}
            </FeatureIconWrap>
            <FeatureTitle>{f.title}</FeatureTitle>
            <FeatureDesc>{f.description}</FeatureDesc>
          </FeatureItem>
        ))}
      </FeaturesGrid>

      {/* Reviews */}
      {reviews?.length ? (
        <ReviewsWrap>
          <SectionTitleRow className="mt-8">
            <h3 className="font-heading text-2xl md:text-3xl tracking-tight">What Clients Say</h3>
          </SectionTitleRow>

          <ReviewsTrack>
            <ReviewsControls>
              {/* fades */}
              <EdgeFadeLeft />
              <EdgeFadeRight />

              {/* scroller */}
              <ReviewsScroller ref={scrollerRef} role="list">
                {reviews.map((r, i) => (
                  <ReviewCard key={i} data-review-card role="listitem" aria-label={`Review by ${r.author}`}>
                    <ReviewQuote>“{r.quote}”</ReviewQuote>
                    <ReviewMeta>
                      {r.author}{r.subtitle ? ` · ${r.subtitle}` : ""}
                    </ReviewMeta>
                  </ReviewCard>
                ))}
              </ReviewsScroller>

              {/* arrows */}
              {canPrev && (
                <ArrowPrev
                  aria-label="Previous reviews"
                  onClick={() => jump(-1)}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </ArrowPrev>
              )}

              {canNext && (
                <ArrowNext
                  aria-label="Next reviews"
                  onClick={() => jump(1)}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </ArrowNext>
              )}
            </ReviewsControls>
          </ReviewsTrack>
        </ReviewsWrap>
      ) : null}
    </AboutRoot>
  );
}
