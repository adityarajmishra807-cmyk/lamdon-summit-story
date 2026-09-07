import type { ReactNode } from "react";
import type { ManagedImage } from "@/content/types";
import { Photo } from "./Photo";
import { Contours } from "./terrain/Contours";
import { Reveal } from "./Reveal";

/**
 * Shared page opening: a photographic band deep enough for the overlay
 * navigation to sit on, with the page's single H1.
 */
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  image: ManagedImage;
  children?: ReactNode;
}) {
  return (
    <section className="surface-dark relative isolate flex min-h-[78vh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Photo
          image={image}
          priority
          drift
          className="h-full w-full"
          imgClassName="opacity-[0.55]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/45" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-52 opacity-45">
        <Contours lines={11} strokeClassName="text-ochre" />
      </div>

      <div className="mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <Reveal>
          <p className="eyebrow text-ochre">{eyebrow}</p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="display-lg mt-6 max-w-[20ch] text-on-dark">{title}</h1>
        </Reveal>
        {lede ? (
          <Reveal delay={180}>
            <p className="lede mt-8 max-w-[54ch] text-on-dark-muted">{lede}</p>
          </Reveal>
        ) : null}
        {children ? <Reveal delay={260}>{children}</Reveal> : null}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">{children}</div>
    </section>
  );
}
