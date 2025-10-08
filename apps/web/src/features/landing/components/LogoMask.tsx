/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import styles from "../landing.module.css";

type Props = {
  videoSrc: string;
  posterSrc?: string;
  maskSrc?: string;         // default to /masks/134six-logo.svg
  aspectRatio?: string;     // e.g., "16 / 5" if your logo is extra wide
  maskSize?: "contain" | "cover";
  maskPosition?: string;    // e.g., "center", "left center"
};

export function LogoMask({
  videoSrc,
  posterSrc,
  maskSrc = "/masks/134six-logo.svg",
  aspectRatio = "16 / 7",
  maskSize = "contain",
  maskPosition = "center",
}: Props) {
  // CSS custom properties for the mask, plus the actual mask-image URL
  const boxStyle = {
    aspectRatio,
    // variables used by CSS
    ["--mask-size" as any]: maskSize,
    ["--mask-position" as any]: maskPosition,
    ["--mask-image" as any]: `url("${maskSrc}")`,
  } as React.CSSProperties;

  return (
    <div className={`${styles.track} ${styles.fadeOnExit} ${styles.stage}`}>
      <div className={styles.maskBox} style={boxStyle}>
        <video
          className={styles.video}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          {...(posterSrc ? { poster: posterSrc } : {})}
        />
      </div>
    </div>
  );
}
