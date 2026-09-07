import { createFileRoute } from "@tanstack/react-router";
import { Counter } from "@/components/Counter";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SourceNote } from "@/components/Provenance";
import { Terrain } from "@/components/terrain/Terrain";
import { ZanskarMap } from "@/components/ZanskarMap";
import { img } from "@/content/images";
import { cultureSections, zanskarFacts, zanskarSections } from "@/content/zanskar";

export const Route = createFileRoute("/zanskar")({
  head: () => ({
    meta: [
      { title: "Zanskar — the land we call home" },
      {
        name: "description",
        content:
          "Zanskar, in Ladakh, India: a plateau at 3,600 metres, some 15,000 people in 25 villages across 7,000 km², closed by snow for around six months a year.",
      },
      { property: "og:title", content: "Zanskar — the land we call home" },
      {
        property: "og:description",
        content:
          "Geography, climate, farming and Buddhist culture in the Zanskar valley, and what they mean for a school.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/zanskar" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/zanskar" }],
  }),
  component: Zanskar,
});

function Zanskar() {
  return (
    <>
      <PageHero
        eyebrow="Zanskar · Ladakh · India"
        title="The land we call home"
        lede="One of the highest inhabited places in the world, and one of the coldest. Everything the school does is shaped by it."
        image={img("valley-road")}
      />

      {/* Facts */}
      <section className="relative overflow-hidden bg-background py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <ul className="grid grid-cols-2 gap-x-10 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
            {zanskarFacts.map((fact, i) => (
              <li key={fact.id}>
                <Reveal delay={i * 60}>
                  <p className="font-display text-3xl md:text-4xl">
                    <Counter value={fact.value} />
                  </p>
                  <p className="mt-3 text-sm leading-snug text-muted-foreground">{fact.label}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <SourceNote data={zanskarFacts[0]!} className="mt-12" />
        </div>
      </section>

      {/* Map */}
      <section className="surface-dark relative overflow-hidden py-24 md:py-36">
        <Terrain variant="dark" className="opacity-40" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ochre">The valley</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-6 max-w-[18ch] text-on-dark">
              Padum, Pibiting, and the road in
            </h2>
          </Reveal>
          <div className="mt-16">
            <Reveal delay={140}>
              <ZanskarMap />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Editorial sections */}
      {zanskarSections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={i % 2 === 1 ? "bg-secondary/50 py-20 md:py-28" : "bg-background py-20 md:py-28"}
        >
          <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1fr] lg:gap-24">
              <Reveal>
                <h2 className="display-md max-w-[16ch]">{section.heading}</h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="prose-editorial text-muted-foreground">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
                <SourceNote data={section} className="mt-7" />
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Winter */}
      <section className="relative">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <Photo
            image={img("winter")}
            className="aspect-[3/4] w-full lg:aspect-auto lg:h-[86vh]"
            parallax={20}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="surface-dark flex items-center px-6 py-20 md:px-16 md:py-28">
            <div>
              <Reveal>
                <p className="eyebrow text-ochre">Winter</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 max-w-[16ch] text-on-dark">
                  Six months in frozen silence
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <div className="prose-editorial mt-8 text-on-dark-muted">
                  <p>
                    From November the roads become impassable and the region closes. Winter
                    temperatures are documented between −20°C and −35°C. The school year is set around
                    this: it opens in March and closes in November or December depending on the weather,
                    and the coldest months are the long holiday.
                  </p>
                  <p>
                    When the Zanskar river freezes, people call it the Chadar. Historically that frozen
                    river was the only way in or out of the valley.
                  </p>
                </div>
              </Reveal>
              <p className="mt-8 max-w-[46ch] text-sm text-on-dark-muted/80">
                {img("winter").caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <Section className="bg-background py-24 md:py-36" id="culture">
        <Reveal>
          <p className="eyebrow text-earth">Culture</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-lg mt-6 max-w-[20ch]">A year measured in ceremonies</h2>
        </Reveal>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            {cultureSections.map((section, i) => (
              <Reveal key={section.heading} delay={i * 80} className="border-t border-border py-10">
                <h3 className="display-md max-w-[20ch]">{section.heading}</h3>
                <div className="prose-editorial mt-6 text-muted-foreground">
                  {section.body.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
            <SourceNote data={cultureSections[0]!} className="mt-6" />
          </div>
          <Reveal delay={140} className="lg:pt-10">
            <Photo
              image={img("family")}
              caption
              parallax={26}
              className="aspect-[3/4] w-full"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
