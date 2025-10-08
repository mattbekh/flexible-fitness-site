/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import stage from "./landingStage.module.css";
import { useStageProgress } from "./useStageProgress";
import { LogoMaskVideo } from "./components/LogoMaskVideo";

export default function LandingSection() {
  // explicitly tell the hook where to listen (optional now that we have a default)
  const { ref, progress } = useStageProgress(() => document.getElementById("scroll-shell"));

  return (
    <section ref={ref as any} className={stage.stage} aria-label="Landing">
      <div className={stage.stickyViewport}>
        {/* Debug badge – remove when happy */}
        <div style={{
          position: "fixed", top: 12, right: 12, zIndex: 50,
          background: "rgba(0,0,0,.6)", color: "#fff",
          padding: "4px 8px", borderRadius: 6, fontSize: 12
        }}>
          progress: {progress.toFixed(2)}
        </div>

        <LogoMaskVideo
          videoSrc="/reel/hero.mp4"
          posterSrc="/hero/teaser-poster.jpg"
          maskSrc="/masks/134six-logo.svg"
          aspectRatio="16 / 6"
          progress={progress}     // now updates as you scroll the shell
          minPercent={60}
          maxPercent={130}
          maskPosition="center"
        />
      </div>
    </section>
  );
}
