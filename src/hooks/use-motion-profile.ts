import { useEffect, useState } from "react";

export interface MotionProfile {
  hydrated: boolean;
  reducedMotion: boolean;
  /** Small viewport or coarse pointer — reduce 3D complexity. */
  compact: boolean;
  webgl: boolean;
  /** True when the full WebGL experience should render. */
  immersive: boolean;
}

function detectWebgl(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"),
    );
  } catch {
    return false;
  }
}

/**
 * Single source of truth for whether the immersive layers should run.
 * Server render is always the static fallback, so SSR output stays identical
 * for crawlers and low-end clients.
 */
export function useMotionProfile(): MotionProfile {
  const [profile, setProfile] = useState<MotionProfile>({
    hydrated: false,
    reducedMotion: false,
    compact: false,
    webgl: false,
    immersive: false,
  });

  useEffect(() => {
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 900px)");
    const webgl = detectWebgl();
    const lowCores = (navigator.hardwareConcurrency ?? 8) <= 4;

    const update = () => {
      const reducedMotion = reducedQuery.matches;
      const compact = compactQuery.matches || lowCores;
      setProfile({
        hydrated: true,
        reducedMotion,
        compact,
        webgl,
        immersive: webgl && !reducedMotion && !compact,
      });
    };

    update();
    reducedQuery.addEventListener("change", update);
    compactQuery.addEventListener("change", update);
    return () => {
      reducedQuery.removeEventListener("change", update);
      compactQuery.removeEventListener("change", update);
    };
  }, []);

  return profile;
}
