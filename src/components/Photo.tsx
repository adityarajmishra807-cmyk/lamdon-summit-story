import { useEffect, useRef, useState } from "react";
import type { ManagedImage } from "@/content/types";
import { useMotionProfile } from "@/hooks/use-motion-profile";
import { cn } from "@/lib/utils";

interface PhotoProps {
  image: ManagedImage;
  className?: string;
  imgClassName?: string;
  /** Show the managed caption beneath the frame. */
  caption?: boolean;
  /** Vertical drift, in pixels, across the element's travel through the viewport. */
  parallax?: number;
  priority?: boolean;
  sizes?: string;
  /** Slow continuous drift, for full-bleed cinematic frames. */
  drift?: boolean;
}

/**
 * Every photograph on the site goes through here, so alt text, caption, credit
 * and usage rights always travel with the file, and any image can be swapped for
 * a high-resolution original by editing its record in the content layer.
 */
export function Photo({
  image,
  className,
  imgClassName,
  caption = false,
  parallax = 0,
  priority = false,
  sizes = "100vw",
  drift = false,
}: PhotoProps) {
  // The observer sits on the outer figure, not the clipped frame: a target
  // carrying clip-path never reports an intersection while it is masked shut.
  const frame = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [loaded, setLoaded] = useState(false);
  // Priority frames (page openings) are above the fold: mask them open at once
  // so a slow hydration never leaves the opening scene dark.
  const [revealed, setRevealed] = useState(priority);
  const { reducedMotion, compact, hydrated } = useMotionProfile();
  const parallaxOn = parallax !== 0 && hydrated && !reducedMotion && !compact;

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry?.isIntersecting && setRevealed(true),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!parallaxOn) return;
    const el = frame.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2) / (window.innerHeight + rect.height / 2);
        setOffset((0.5 - progress) * parallax * 2);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [parallaxOn, parallax]);

  return (
    <figure ref={frame} className={cn("group relative", className)}>
      <div
        className={cn(
          "relative h-full w-full overflow-hidden bg-secondary",
          "mask-reveal",
          revealed && "mask-reveal-in",
        )}
      >
        <img
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out",
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
            drift && "cine-drift",
            imgClassName,
          )}
          style={
            parallaxOn
              ? { transform: `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.08)` }
              : undefined
          }
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {image.caption}
          <span className="mt-1 block text-xs">
            {image.photographer ? `${image.photographer} · ` : ""}
            {image.category}
          </span>
        </figcaption>
      ) : null}
    </figure>
  );
}
