import { Link, type LinkProps } from "@tanstack/react-router";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { useMotionProfile } from "@/hooks/use-motion-profile";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "quiet" | "onDark";

const base =
  "group relative inline-flex items-center gap-3 px-7 py-[0.95rem] eyebrow transition-[background-color,color,border-color,transform] duration-500 ease-out";

const variants: Record<Variant, string> = {
  solid: "bg-charcoal text-on-dark hover:bg-earth",
  outline: "border border-charcoal/25 text-foreground hover:border-earth hover:text-earth",
  quiet: "px-0 py-1 text-foreground hover:text-earth",
  onDark: "border border-on-dark/25 text-on-dark hover:border-ochre hover:text-ochre",
};

/**
 * Primary call to action. On pointer devices the label leans a few pixels toward
 * the cursor — enough to feel responsive, not enough to be a toy.
 */
export function Action({
  to,
  href,
  children,
  variant = "solid",
  className,
  arrow = true,
}: {
  to?: LinkProps["to"];
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shift, setShift] = useState({ x: 0, y: 0 });
  const { reducedMotion, compact } = useMotionProfile();
  const magnetic = !reducedMotion && !compact;

  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (!magnetic) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setShift({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 10,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 6,
    });
  };

  const inner = (
    <span
      ref={ref}
      className="flex items-center gap-3 transition-transform duration-300 ease-out"
      style={{ transform: `translate3d(${shift.x}px, ${shift.y}px, 0)` }}
    >
      {children}
      {arrow ? (
        <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
          &#8594;
        </span>
      ) : null}
    </span>
  );

  const classes = cn(base, variants[variant], className);
  const handlers = {
    onMouseMove: onMove,
    onMouseLeave: () => setShift({ x: 0, y: 0 }),
  };

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...handlers}>
        {inner}
      </a>
    );
  }

  return (
    <Link to={to ?? "/"} className={classes} {...handlers}>
      {inner}
    </Link>
  );
}
