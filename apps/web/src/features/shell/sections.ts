// src/features/shell/sections.ts
import type { ComponentType } from "react";

export type SectionSpec = {
  id: string;
  // dynamic import returning a React component (client)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  loader: () => Promise<{ default: ComponentType<any> }>;
};

export const sections: SectionSpec[] = [
  { id: "catchphrase", loader: () => import("@/features/catchPhrase/CatchPhraseSection") },
  { id: "about",       loader: () => import("@/features/about/AboutSectionWrapper") }, 
  { id: "book", loader: () => import("@/features/book/BookSection") },
  { id: "contact",     loader: () => import("@/features/contact/ContactSection") },
];
