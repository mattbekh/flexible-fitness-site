// src/features/about/AboutSectionWrapper.tsx
"use client";
import AboutSection, { type AboutSectionProps } from "./AboutSection";

export default function AboutSectionWrapper() {
  const props: AboutSectionProps = {
    coach: {
      name: "Gabriel Baron",
      title: "Strength & Mobility Coach",
      photoUrl: "/photos/coach.jpg",
      maskUrl: "/masks/organic-blob.svg", // optional
      credentials: [
        "National Mens and Women's Gymnastics Coach",
        "2009 Canadian National Gymnastics Silver Medalist",
        "BA in Recreation Management", 
        "NCCP Certified",
        "15+ years of experience",
      ],
      description:
        "I help people build sustainable strength and mobility with simple, effective programming that fits real life.",
    },
    features: [
      {
        title: "Exclusive 1:1 Coaching",
        description:
          "Personalized sessions designed around your goals, body, and schedule — available in person or online.",
        iconSrc: "/icons/1on1.svg",
      },
      {
        title: "Group Sessions",
        description:
          "Train alongside others in focused, high-energy sessions that build strength, mobility, and accountability.",
        iconSrc: "/icons/group.svg",
      },
      {
        title: "Online Programs",
        description:
          "Flexible coaching from anywhere — access structured workouts, feedback, and progress tracking.",
        iconSrc: "/icons/online.svg",
      },
    ],
    reviews: [
      { quote: "More energy and less pain after 6 weeks.", author: "J. Patel" },
      { quote: "Clear plan, visible progress, great accountability.", author: "M. Chen" },
      { quote: "Super practical and motivating.", author: "S. Rivera" },
      { quote: "I finally enjoy working out again—sessions fly by.", author: "A. Nguyen" },
      { quote: "Mobility gains I didn’t think were possible.", author: "K. Wallace" },
      { quote: "Custom plan that fits my chaotic schedule.", author: "L. Romero" },
      { quote: "Strength is up, knee pain is down. Win–win.", author: "C. Thomas" },
      { quote: "Coaching that actually listens and adapts.", author: "N. Singh" },
      { quote: "Detailed feedback and simple cues that work.", author: "B. Alvarez" },
      { quote: "I feel stronger, lighter, and more confident.", author: "T. Morgan" },
    ],
  };

  return <AboutSection {...props} />;
}
