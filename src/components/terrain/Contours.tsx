import { cn } from "@/lib/utils";

/**
 * Static contour-line drawing. Used as the graceful fallback wherever the WebGL
 * ridge does not run (reduced motion, no WebGL, mobile, server render) and as a
 * section-transition graphic in its own right.
 */
export function Contours({
  className,
  strokeClassName = "text-border",
  lines = 14,
}: {
  className?: string;
  strokeClassName?: string;
  lines?: number;
}) {
  const paths = Array.from({ length: lines }, (_, i) => {
    const t = i / (lines - 1);
    const base = 210 - t * 132;
    const amp = 26 + t * 44;
    const shift = t * 60;
    return `M -40 ${base + 40} C ${140 + shift} ${base - amp}, ${300 - shift} ${base + amp * 0.7}, ${460} ${base - amp * 0.45} S ${760} ${base + amp * 0.5}, ${1040} ${base - amp * 0.2}`;
  });

  return (
    <svg
      viewBox="0 0 1000 240"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("h-full w-full", className, strokeClassName)}
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth={i % 4 === 0 ? 1.1 : 0.6}
          opacity={0.22 + (i / lines) * 0.55}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}
