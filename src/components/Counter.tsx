import { useEffect, useRef, useState } from "react";
import { useMotionProfile } from "@/hooks/use-motion-profile";

/**
 * Counts a numeric figure up when it first enters view. The final value is the
 * server-rendered text, so the real number is always in the HTML.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { reducedMotion, hydrated } = useMotionProfile();
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  const digits = value.match(/[\d,]+/)?.[0] ?? "";
  const target = Number(digits.replace(/,/g, ""));
  const animatable = digits.length > 0 && Number.isFinite(target) && target > 0;

  useEffect(() => {
    if (!hydrated || reducedMotion || !animatable) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting || started.current) return;
      started.current = true;
      const duration = 1500;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(target * eased).toLocaleString("en-IN");
        setDisplay(value.replace(digits, current));
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(value);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [hydrated, reducedMotion, animatable, target, value, digits]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
