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
  /** First-screen content: reveal on mount rather than on scroll. */
  immediate?: boolean;
}

/**
 * Scroll-triggered reveal. Purely presentational: the content is present in the
 * DOM and in the server-rendered HTML, so nothing here affects SEO, and the
 * transition itself is neutralised under prefers-reduced-motion.
 */
export function Reveal({
  children,
  as = "div",
  className,
  delay = 0,
  mask = false,
  once = true,
  immediate = false,
}: RevealProps) {
  // Polymorphic tag. Narrowed to a div's prop signature: every call site passes
  // only className, style, ref and children, which every element accepts.
  const Tag = as as unknown as "div";
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (immediate) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }
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

    // Safety net: anything already inside the viewport once images and fonts
    // have settled is shown regardless, so a first screen never stays blank if
    // the observer's first callback landed before layout was final.
    const settle = window.setTimeout(() => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setShown(true);
    }, 900);

    return () => {
      window.clearTimeout(settle);
      io.disconnect();
    };
  }, [once, immediate]);

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
