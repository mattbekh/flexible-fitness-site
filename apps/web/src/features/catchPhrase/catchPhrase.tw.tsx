import tw from "tailwind-styled-components";

export const CatchRoot = tw.section`
  relative h-screen flex flex-col justify-center
  items-start text-left gap-8 px-8 sm:px-12 md:px-20
  overflow-hidden
  bg-left bg-cover bg-no-repeat
  bg-[url('/photos/happy1.png')]
  before:absolute before:inset-0 
`;

export const Phrase = tw.h1`
  relative z-[1]
  font-heading font-extrabold tracking-tight leading-[1.1]
  text-[var(--main-light)]
  drop-shadow-[0_3px_12px_rgba(0,0,0,0.2)]
  text-5xl sm:text-6xl md:text-7xl
  whitespace-pre-line
`;

export const Subphrase = tw.p`
  relative z-[1]
  font-body text-lg sm:text-xl max-w-2xl
  text-[color-mix(in_srgb,var(--main-light)_90%,white_10%)]
  drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]
`;

export const ButtonRow = tw.div`
  relative z-[1]
  flex flex-wrap items-center gap-6 mt-4
`;

export const PrimaryButton = tw.button`
  relative
  px-8 py-3 rounded-full
  bg-[var(--accent)] text-[var(--site-foreground)]
  font-semibold text-lg
  shadow-[0_8px_20px_-4px_color-mix(in_srgb,var(--site-background)_10%,black_10%)]
  transition duration-200
  hover:brightness-95 active:scale-[0.98]
  hover:ring-4 hover:ring-[var(--site-foreground)] hover:ring-offset-2 hover:ring-offset-[var(--accent)]
`;

export const SecondaryButton = tw.button`
  px-8 py-3 rounded-full
  border-2 border-[var(--main-light)] text-[var(--main-light)] font-semibold text-lg
  hover:bg-[var(--site-foreground)] hover:text-[var(--site-background)]
  transition active:scale-[0.98]
`;
