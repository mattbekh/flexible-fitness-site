// apps/web/src/features/landing/components/FullScreenVideo.tsx
import styles from "../landingVideo.module.css";

type FullScreenVideoProps = {
  src: string;
  poster?: string;
  children?: React.ReactNode; // (optional) overlay content later
};

export function FullScreenVideo({ src, poster, children }: FullScreenVideoProps) {
  return (
    <section className={styles.root} aria-label="Hero video">
      <video
        className={styles.video}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        {...(poster ? { poster } : {})}
      />
      {children ? <div className={styles.overlay}>{children}</div> : null}
    </section>
  );
}
