import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Delay in ms, staggered reveals. */
  delay?: number;
  /** Wipe the element in from below its own edge instead of fading up. */
  mask?: boolean;
  once?: boolean;
}

/**
 * Scroll-triggered reveal. Purely presentational: the content is present in the
 * DOM and in the server-rendered HTML, so nothing here affects SEO, and the
 * transition itself is neutralised under prefers-reduced-motion.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  mask = false,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={cn(
        mask ? "mask-reveal" : "reveal-base",
        shown && (mask ? "mask-reveal-in" : "reveal-in"),
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
