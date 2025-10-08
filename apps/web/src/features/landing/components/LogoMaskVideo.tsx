"use client";

import styles from "../maskVideo.module.css";

type Props = {
  videoSrc: string;
  posterSrc?: string;
  maskSrc?: string;            // default /masks/134six-logo.svg
  aspectRatio?: string;        // e.g., "16 / 6"
  progress?: number;           // 0..1
  minPercent?: number;         // 60 -> start size
  maxPercent?: number;         // 120 -> end size
  maskPosition?: string;       // "center", "left center", etc.
  className?: string;
};

export function LogoMaskVideo({
  videoSrc,
  posterSrc,
  maskSrc = "/masks/134six-logo.svg",
  aspectRatio = "16 / 6",
  progress = 0,
  minPercent = 60,
  maxPercent = 120,
  maskPosition = "center",
  className,
}: Props) {
  const clamped = Math.min(1, Math.max(0, progress));
  const pct = Math.round(minPercent + (maxPercent - minPercent) * clamped);
  const sizeVal = `${pct}%`;

  const wrapperStyle: React.CSSProperties = {
    aspectRatio,
    // set mask properties inline (standard + webkit)
    WebkitMaskImage: `url("${maskSrc}")`,
    maskImage: `url("${maskSrc}")`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: maskPosition,
    maskPosition: maskPosition,
    WebkitMaskSize: sizeVal,
    maskSize: sizeVal,
    // smoothen visual steps
    transition: "mask-size 120ms linear, -webkit-mask-size 120ms linear",
  };

  return (
    <div className={`${styles.box} ${className ?? ""}`} style={wrapperStyle}>
      <video
        className={styles.video}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        {...(posterSrc ? { poster: posterSrc } : {})}
      />
    </div>
  );
}
