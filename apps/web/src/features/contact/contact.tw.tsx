import tw from "tailwind-styled-components";

export const ContactRoot = tw.section`
  relative h-screen flex flex-col justify-start items-start text-left
  gap-8 px-8 sm:px-12 md:px-20 pt-24 sm:pt-28 md:pt-32   /* top padding for nice offset */
  overflow-hidden
  bg-left bg-cover bg-no-repeat
  bg-[url('/photos/happy4.png')]
`;

export const ContactCard = tw.div`
  w-full max-w-3xl rounded-3xl border border-[color-mix(in_srgb,var(--site-foreground)_15%,transparent)]
  bg-white/70 dark:bg-black/10 dark:border-white/10 backdrop-blur
  p-6 md:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]
`;

export const Heading = tw.h2`
  font-heading text-3xl md:text-4xl tracking-tight
`;

export const Subheading = tw.p`
  font-body text-lg md:text-xl opacity-80 m-0 mt-1
`;

export const Body = tw.p`
  font-body text-base md:text-lg leading-relaxed mt-6
`;

export const Row = tw.div`
  mt-6 flex flex-wrap items-center gap-3
`;

export const PrimaryLink = tw.a`
 relative
  px-8 py-3 rounded-full
  bg-[var(--accent)] text-[var(--site-foreground)]
  font-semibold text-lg
  shadow-[0_8px_20px_-4px_color-mix(in_srgb,var(--site-background)_10%,black_10%)]
  transition duration-200
  hover:brightness-95 active:scale-[0.98]
  hover:ring-4 hover:ring-[var(--site-foreground)] hover:ring-offset-2 hover:ring-offset-[var(--accent)]
`;

export const SecondaryLink = tw.a`
  inline-flex items-center justify-center rounded-full px-6 py-3
  border-2 border-[var(--site-foreground)] text-[var(--site-foreground)] font-semibold
  hover:bg-[var(--site-foreground)] hover:text-[var(--site-background)] transition
`;
