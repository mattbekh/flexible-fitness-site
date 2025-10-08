import tw from "tailwind-styled-components";

export const Page = tw.div`
  min-h-screen grid grid-rows-[auto_1fr] bg-white text-slate-900
`;

export const Header = tw.header`
  sticky top-0 bg-white/80 backdrop-blur border-b
`;

export const Nav = tw.nav`
  container h-16 flex items-center justify-between
`;

export const Brand = tw.a`
  font-heading text-xl font-semibold tracking-tight
`;

export const HappyButton = tw.button`
  bg-brand-accent text-white font-semibold px-4 py-2 rounded-lg
  border border-amber-600 hover:bg-amber-600
`;
