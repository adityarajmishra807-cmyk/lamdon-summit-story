import { useEffect } from "react";
import { useMotionProfile } from "@/hooks/use-motion-profile";

/**
 * Inertial scrolling, enabled only for pointer devices that have not asked for
 * reduced motion. Native scrolling is left untouched everywhere else so that
 * touch and assistive technology behave normally.
 */
export function SmoothScroll() {
  const { hydrated, reducedMotion, compact } = useMotionProfile();

  useEffect(() => {
    if (!hydrated || reducedMotion || compact) return;
    let raf = 0;
    let cancelled = false;
    let instance: { destroy: () => void; raf: (t: number) => void } | null = null;

    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 0.9,
      });
      instance = lenis as unknown as { destroy: () => void; raf: (t: number) => void };
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      instance?.destroy();
    };
  }, [hydrated, reducedMotion, compact]);

  return null;
}
