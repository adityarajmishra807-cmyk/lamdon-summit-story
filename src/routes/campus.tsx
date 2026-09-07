import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SourceNote, StatusTag } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { Contours } from "@/components/terrain/Contours";
import { Terrain } from "@/components/terrain/Terrain";
import { img } from "@/content/images";
import { architecture, boarding, campusSpaces, scienceLab } from "@/content/school";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "The campus — bioclimatic buildings at 3,600 metres" },
      {
        name: "description",
        content:
          "Twelve classrooms, teacher housing, a multipurpose hall and an eco-responsible boarding house: how Lamdon's campus at Pibiting–Ufti was built for a Himalayan winter.",
      },
      { property: "og:title", content: "The campus at Lamdon Model High School" },
      {
        property: "og:description",
        content:
          "Passive solar, insulation, solar energy and earthquake-resistant construction on a school campus in the Zanskar valley.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/campus" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/campus" }],
  }),
  component: Campus,
});

function Campus() {
  return (
    <>
      <PageHero
        eyebrow="The campus"
        title="Buildings that hold the heat the sun gives them"
        lede="Twelve classrooms across Pibiting and Ufti, housing for teachers, a multipurpose hall, a boarding house, and the open ground the whole school shares."
        image={img("stupa-lmhs")}
      />

      <Section className="bg-background py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-earth">What stands on the ground</p>
        </Reveal>
        <ul className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {campusSpaces.map((space, i) => (
            <li key={space.title} className="bg-background p-8 md:p-10">
              <Reveal delay={i * 60}>
                <p className="eyebrow text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-6 font-display text-2xl leading-tight">{space.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{space.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Full-bleed campus frame */}
      <section className="relative">
        <Photo
          image={img("frisbee")}
          className="h-[70vh] w-full"
          parallax={40}
          sizes="100vw"
        />
        <div className="mx-auto w-full max-w-[1600px] px-6 py-10 md:px-10">
          <p className="max-w-[54ch] text-sm text-muted-foreground">
            {img("frisbee").caption}
          </p>
        </div>
      </section>

      {/* Boarding */}
      <section className="surface-dark relative overflow-hidden py-24 md:py-36" id="boarding">
        <Terrain variant="dark" className="opacity-25" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow text-ochre">Boarding</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 max-w-[16ch] text-on-dark">
                  When home is hours away by mountain road.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="lede mt-8 max-w-[46ch] text-on-dark-muted">{boarding.intro}</p>
              </Reveal>
              <ul className="mt-14 border-t border-on-dark/12">
                {boarding.reasons.map((reason, i) => (
                  <li key={reason.title} className="border-b border-on-dark/12 py-7">
                    <Reveal delay={i * 70}>
                      <h3 className="font-display text-xl text-ochre">{reason.title}</h3>
                      <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-on-dark-muted">
                        {reason.body}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <SourceNote
                data={boarding}
                className="mt-8 text-on-dark-muted/80 [&_a]:text-on-dark-muted"
              />
            </div>
            <Reveal delay={120} className="lg:pt-16">
              <Photo
                image={img("valley-road")}
                caption
                parallax={24}
                className="aspect-[3/4] w-full [&_figcaption]:text-on-dark-muted"
                sizes="(max-width: 1024px) 100vw, 44vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="relative overflow-hidden bg-background py-24 md:py-36" id="architecture">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 opacity-60">
          <Contours lines={14} strokeClassName="text-stone-deep" />
        </div>
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-earth">Architecture &amp; sustainability</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-6 max-w-[20ch]">A building is not a neutral container</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lede mt-8 max-w-[58ch] text-muted-foreground">{architecture.intro}</p>
          </Reveal>

          <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal delay={100}>
              <BuildingDiagram />
            </Reveal>
            <ol className="border-t border-border">
              {architecture.principles.map((p, i) => (
                <li key={p.title} className="border-b border-border py-7">
                  <Reveal delay={i * 60}>
                    <div className="flex items-baseline gap-6">
                      <span className="eyebrow text-muted-foreground/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
                        <p className="mt-3 max-w-[54ch] text-muted-foreground">{p.body}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <SourceNote data={architecture} className="mt-10" />
        </div>
      </section>

      {/* Science laboratory */}
      <section className="bg-secondary/60 py-24 md:py-36" id="science">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-4">
                  <p className="eyebrow text-earth">Science &amp; the future</p>
                  <StatusTag status={scienceLab.projectStatus} />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 max-w-[18ch]">A laboratory, standing on its own</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lede mt-8 max-w-[48ch] text-muted-foreground">{scienceLab.intro}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-10">
                  <Action to="/support" variant="outline">
                    Support a project
                  </Action>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <dl className="border-t border-border">
                {scienceLab.historicalFigures.map((f) => (
                  <div
                    key={f.label}
                    className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-6"
                  >
                    <dt className="text-sm text-muted-foreground">{f.label}</dt>
                    <dd className="font-display text-3xl">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                {scienceLab.caveat}
              </p>
              <SourceNote data={scienceLab} className="mt-6" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Sectional diagram of the passive-solar principle applied on the campus:
 * glazing to the sun, insulated envelope, heat retained overnight.
 */
function BuildingDiagram() {
  return (
    <figure>
      <svg viewBox="0 0 400 300" role="img" aria-labelledby="diagram-title" className="w-full">
        <title id="diagram-title">
          Section diagram of a passive solar classroom: south-facing glazing collects sunlight, an
          insulated envelope and thick floor retain the heat, and solar panels sit on the roof.
        </title>
        <g className="stroke-charcoal" fill="none" strokeWidth="1">
          {/* sun rays */}
          <g className="stroke-saffron" strokeWidth="1.2">
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1={26 + i * 18} y1={22 + i * 6} x2={126 + i * 18} y2={122 + i * 6} />
            ))}
            <polygon points="150,148 142,132 158,136" className="fill-saffron" stroke="none" />
          </g>
          {/* ground */}
          <line x1="20" y1="250" x2="380" y2="250" strokeWidth="1.4" />
          {/* building envelope */}
          <path d="M120 250 L120 140 L200 108 L280 140 L280 250" strokeWidth="1.6" />
          {/* insulated wall hatch */}
          <g className="stroke-stone-deep" strokeWidth="0.7">
            {Array.from({ length: 12 }, (_, i) => (
              <line key={i} x1={122} y1={148 + i * 8} x2={132} y2={142 + i * 8} />
            ))}
            {Array.from({ length: 12 }, (_, i) => (
              <line key={`r${i}`} x1={268} y1={148 + i * 8} x2={278} y2={142 + i * 8} />
            ))}
          </g>
          {/* glazing */}
          <g className="stroke-sky-muted" strokeWidth="1.4">
            <line x1="132" y1="160" x2="132" y2="238" />
            <line x1="140" y1="160" x2="140" y2="238" />
          </g>
          {/* thermal mass floor */}
          <rect x="120" y="238" width="160" height="12" className="fill-stone-deep/40" stroke="none" />
          {/* solar panel */}
          <g className="stroke-slate-deep" strokeWidth="1.3">
            <line x1="206" y1="116" x2="262" y2="138" />
            <line x1="206" y1="116" x2="210" y2="126" />
          </g>
          {/* heat arrows inside */}
          <g className="stroke-earth" strokeWidth="1">
            <path d="M160 220 C 180 200, 200 210, 216 190" />
            <path d="M170 236 C 196 226, 214 234, 244 214" />
          </g>
        </g>
        <g className="fill-muted-foreground font-sans" fontSize="9" letterSpacing="1.6">
          <text x="24" y="16">SOLAR GAIN</text>
          <text x="288" y="130">SOLAR PANEL</text>
          <text x="288" y="182">INSULATED ENVELOPE</text>
          <text x="118" y="272">THERMAL MASS FLOOR</text>
          <text x="150" y="200" className="fill-earth">RETAINED HEAT</text>
        </g>
      </svg>
      <figcaption className="mt-5 max-w-[46ch] text-sm text-muted-foreground">
        Schematic of the passive solar principle applied in the campus buildings. Indicative drawing,
        not a construction document.
      </figcaption>
    </figure>
  );
}
