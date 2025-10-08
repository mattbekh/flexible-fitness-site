import tw from "tailwind-styled-components";

/** Root full-screen section with snap behavior handled by the shell */
export const LandingRoot = tw.section`
  min-h-screen flex flex-col
`;

/** Sticky header (optional; remove if you want *only* the logo mask on screen) */
export const StickyHeader = tw.header`
  sticky top-0 z-20 bg-white/70 backdrop-blur border-b
`;

/** Header content container */
export const NavBar = tw.nav`
  container h-16 flex items-center justify-between
`;

/** Main viewport area for the hero/mask */
export const HeroViewport = tw.div`
  relative flex-1 grid place-items-center overflow-hidden
`;

/** The frame that holds the masked video */
export const MaskFrame = tw.div`
  relative w-full max-w-7xl px-4
`;

/** Optional CTA row that can slide in later */
export const CTAStack = tw.div`
  pointer-events-none absolute inset-x-0 bottom-8 flex justify-center
`;
