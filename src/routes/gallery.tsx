import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { StatusTag } from "@/components/Provenance";
import { images, img } from "@/content/images";
import type { ImageCategory } from "@/content/types";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — photographs of Lamdon, Zanskar" },
      {
        name: "description",
        content:
          "Photographs supplied by Lamdon Model High School: students, campus, sport, boarding, culture and the Zanskar valley, each with its own caption and credit.",
      },
      { property: "og:title", content: "Gallery — Lamdon Model High School" },
      {
        property: "og:description",
        content: "A photographic archive of a school in the Zanskar valley, Ladakh.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/gallery" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<ImageCategory | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const present = useMemo(() => {
    const set = new Set(images.map((i) => i.category));
    return ["All", ...Array.from(set)] as const;
  }, []);

  const shown = filter === "All" ? images : images.filter((i) => i.category === filter);
  const open = openId ? img(openId) : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const i = shown.findIndex((s) => s.id === open.id);
        const next = e.key === "ArrowRight" ? i + 1 : i - 1;
        const target = shown[(next + shown.length) % shown.length];
        if (target) setOpenId(target.id);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, shown]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The archive as it stands today"
        lede="Every photograph here was supplied by the school and carries its own caption, credit, category and usage rights. The collection grows as the school sends more."
        image={img("sports-wall")}
      />

      <Section className="bg-background py-16 md:py-20">
        <div
          role="group"
          aria-label="Filter photographs by category"
          className="flex flex-wrap gap-x-7 gap-y-3 border-b border-border pb-7"
        >
          {present.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category as ImageCategory | "All")}
              aria-pressed={filter === category}
              className={`eyebrow transition-colors ${
                filter === category ? "text-earth" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      <Section className="bg-background pb-28 md:pb-36">
        <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-6">
          {shown.map((image, i) => (
            <li key={image.id} className="break-inside-avoid">
              <Reveal delay={Math.min(i, 6) * 60}>
                <button
                  type="button"
                  onClick={() => setOpenId(image.id)}
                  className="group block w-full text-left"
                  aria-label={`Open ${image.title} at full size`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="w-full transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-3 flex items-baseline justify-between gap-4">
                    <span className="font-display text-lg leading-tight">{image.title}</span>
                    <span className="eyebrow text-muted-foreground">{image.category}</span>
                  </div>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          className="fixed inset-0 z-[80] flex flex-col bg-charcoal/96 px-4 py-6 md:px-10 md:py-8"
        >
          <div className="flex items-center justify-between">
            <p className="eyebrow text-ochre">{open.category}</p>
            <button
              type="button"
              onClick={() => setOpenId(null)}
              autoFocus
              className="eyebrow text-on-dark transition-colors hover:text-ochre"
            >
              Close
            </button>
          </div>
          <div className="flex min-h-0 flex-1 items-center justify-center py-6">
            <img
              src={open.url}
              alt={open.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="grid gap-4 border-t border-on-dark/15 pt-5 md:grid-cols-[1.4fr_1fr] md:gap-12">
            <div>
              <p className="font-display text-xl text-on-dark">{open.title}</p>
              <p className="mt-2 max-w-[70ch] text-sm text-on-dark-muted">{open.caption}</p>
            </div>
            <div className="text-xs leading-relaxed text-on-dark-muted/80">
              <StatusTag status={open.status} />
              <p className="mt-2">
                {open.photographer ? `${open.photographer} · ` : ""}
                {open.usageRights}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
