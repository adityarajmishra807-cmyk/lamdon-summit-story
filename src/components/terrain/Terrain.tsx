import { Suspense, lazy } from "react";
import { useMotionProfile } from "@/hooks/use-motion-profile";
import { Contours } from "./Contours";
import type { Tone } from "./TerrainScene";
import { cn } from "@/lib/utils";

const TerrainScene = lazy(() => import("./TerrainScene"));

/**
 * Hex equivalents of the palette tokens, because WebGL colour uniforms cannot
 * read oklch custom properties. Kept adjacent to the tokens they mirror.
 */
export const terrainTones: Record<"light" | "dark", Tone> = {
  light: { line: "#3d4756", fill: "#e7e2d8", background: "#f6f3ec", opacity: 0.62 },
  dark: { line: "#c9a25c", fill: "#2b2e35", background: "#26282e", opacity: 0.9 },
};

/**
 * Scroll-reactive topographic terrain. Renders the static contour drawing on the
 * server and on any client that should not run WebGL, then upgrades in place.
 */
export function Terrain({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const { hydrated, immersive, webgl, reducedMotion, compact } = useMotionProfile();
  const lowQuality = webgl && !reducedMotion && compact;

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {!hydrated || (!immersive && !lowQuality) ? (
        <div className="absolute inset-x-0 bottom-0 h-[62%]">
          <Contours
            lines={16}
            strokeClassName={variant === "dark" ? "text-ochre/60" : "text-slate-deep/35"}
          />
        </div>
      ) : (
        <Suspense fallback={null}>
          <TerrainScene tone={terrainTones[variant]} quality={immersive ? "high" : "low"} />
        </Suspense>
      )}
    </div>
  );
}
