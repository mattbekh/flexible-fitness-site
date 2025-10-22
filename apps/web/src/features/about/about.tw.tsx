import tw from "tailwind-styled-components";

/* Section wrapper & coach header (unchanged pieces kept) */
export const AboutRoot = tw.section`
  min-h-screen w-full
  flex flex-col gap-10 pt-15
  bg-[var(--site-background)]/5 text-[var(--site-foreground)]
    bg-left bg-cover bg-no-repeat
  bg-[url('/photos/happy1follow2.png')]
`;
export const ContentWrap = tw.div`
  grid place-items-center gap-8
`;
export const SectionTitleRow = tw.div`
  w-screen  /* span full viewport width */
  -mx-[calc((100vw-100%)/2)]  /* cancel out parent horizontal padding (optional if inside padded container) */
  text-center
  py-6 md:py-8
  bg-[var(--site-foreground)] 
  text-[var(--site-background)]
  font-heading font-semibold tracking-tight text-2xl md:text-3xl
`;
export const PhotoWrap = tw.div`
  relative grid place-items-center
  p-0                       /* spacing between mask edge & border */
  rounded-full              /* make border circle */
  border-7
  border-[var(--site-foreground)]/30
  bg-white/30
  w-[250px] h-[250px]       /* optional: fix dimensions for perfect circle */
  overflow-hidden
`;
export const TextCol = tw.div`space-y-4 pl-5 pr-5   
  rounded-4xl 
  p-5
  m-4
  border-7
  border-[var(--site-foreground)]/30
  backdrop-blur
  dark:bg-black/10 dark:border-white/10
  shadow-lg`;
export const Heading = tw.h2`font-heading font-bold text-3xl md:text-5xl tracking-tight`;
export const Subheading = tw.p`font-body text-lg md:text-xl opacity-80 m-0`;
export const Credentials = tw.p`
  font-body text-sm md:text-sm md:text-l opacity-60
  mt-1 mb-10
  leading-snug
   
`;
export const Body = tw.p`
  font-body text-base md:text-lg leading-relaxed
  text-[color-mix(in_srgb,var(--site-foreground)_85%,white_15%)]
`;

/* MaskedPhoto helper (unchanged) */
type MaskedPhotoProps = React.ImgHTMLAttributes<HTMLImageElement> & { maskUrl?: string };

export const MaskedPhoto = ({ maskUrl, className, ...img }: MaskedPhotoProps) => {
  const style = maskUrl
    ? ({
        WebkitMaskImage: `url(${maskUrl})`,
        maskImage: `url(${maskUrl})`,
        WebkitMaskSize: "cover",
        maskSize: "cover",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      } as React.CSSProperties)
    : undefined;

  const base =
    "w-full h-full object-cover " +
    (maskUrl ? "" : "rounded-full shadow-xl");

  return <img {...img} className={[base, className ?? ""].join(" ")} style={style} />;
};

/* ---------- New “Features” layout (icon + text) ---------- */

export const FeaturesGrid = tw.div`
  max-w-6xl mx-auto w-full
  grid gap-y-14 gap-x-10
  sm:grid-cols-2 lg:grid-cols-3
`;

export const FeatureItem = tw.article`
  text-center flex flex-col items-center
  px-4
`;

export const FeatureIconWrap = tw.div`
  grid place-items-center
  w-16 h-16 rounded-[14px]
  bg-[color-mix(in_srgb,var(--site-foreground)_18%,transparent)]
  border border-[color-mix(in_srgb,var(--site-foreground)_22%,transparent)]
  shadow-[0_10px_26px_-12px_rgba(0,0,0,0.25)]
  mb-4
`;

export const FeatureTitle = tw.h4`
  font-heading text-xl md:text-2xl tracking-tight mb-2
  text-[color-mix(in_srgb,var(--site-foreground)_95%,black_5%)]
`;

export const FeatureDesc = tw.p`
  font-body text-sm md:text-base leading-relaxed
  text-[color-mix(in_srgb,var(--site-foreground)_80%,black_20%)]
  max-w-sm
`;

export const FeatureCtaRow = tw.div`
  mt-4 select-none
`;

export const FeatureCtaText = tw.span`
  inline-flex items-center gap-2
  font-heading text-[0.85rem] uppercase tracking-wider
  text-[color-mix(in_srgb,var(--site-foreground)_90%,black_10%)]
`;


/* --- Reviews scroller --- */
export const ReviewsWrap = tw.div`
  max-w-6xl mx-auto w-full
`;

/* no negative margins; pad inside instead */
export const ReviewsTrack = tw.div`
  relative px-4 sm:px-6 md:px-8
`;

/* horizontal scroller (no outer margins!) */
export const ReviewsScroller = tw.div`
  box-border
  flex overflow-x-auto no-scrollbar
  gap-4 sm:gap-6 md:gap-8
  snap-x snap-mandatory
  scroll-px-4 sm:scroll-px-6 md:scroll-px-8
  pb-2
`;

export const ReviewItem = tw.div`
  flex-shrink-0 snap-center
  w-full                 /* 📱 mobile: one card per view */
  sm:w-[60%]             /* tablets */
  md:w-[45%]
  lg:w-[36%]
`;

/* the card simply fills its wrapper */
export const ReviewCard = tw.article`
  w-full
  rounded-3xl p-6 md:p-7
  bg-white/70 dark:bg-black/30 backdrop-blur
  border border-[color-mix(in_srgb,var(--site-foreground)_15%,transparent)]
  shadow-[0_18px_48px_-20px_rgba(0,0,0,0.35)]
`;

export const ReviewQuote = tw.p`
  font-body text-base md:text-lg leading-relaxed
  text-[color-mix(in_srgb,var(--site-foreground)_90%,black_10%)]
`;
export const ReviewMeta = tw.p`
  mt-4 font-heading text-sm uppercase tracking-wide
  text-[color-mix(in_srgb,var(--site-foreground)_70%,black_30%)]
`;

/* Controls wrapper sits over the scroller */


export const ReviewsControls = tw.div`relative`;
export const ArrowBtnBase = tw.button`
  hidden sm:grid /* hide on phones */
  place-items-center
  absolute top-1/2 -translate-y-1/2 z-10
  w-11 h-11 rounded-full
  bg-[var(--site-background)]/80 backdrop-blur border
  border-[color-mix(in_srgb,var(--site-foreground)_20%,transparent)]
  shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]
  hover:bg-[var(--site-background)]
  transition
`;
export const ArrowPrev = tw(ArrowBtnBase)`-left-4 md:-left-6`;
export const ArrowNext = tw(ArrowBtnBase)`-right-4 md:-right-6`;

/* soft fade edges so arrows feel integrated */
export const EdgeFadeLeft = tw.div`
  pointer-events-none absolute inset-y-0 left-0 w-10 md:w-16
  bg-gradient-to-r from-[var(--site-background)] to-transparent
`;
export const EdgeFadeRight = tw.div`
  pointer-events-none absolute inset-y-0 right-0 w-10 md:w-16
  bg-gradient-to-l from-[var(--site-background)] to-transparent
`;
