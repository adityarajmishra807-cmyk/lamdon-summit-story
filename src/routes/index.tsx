import { createFileRoute, Link } from "@tanstack/react-router";
import { Action } from "@/components/Action";
import { Counter } from "@/components/Counter";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/PageHero";
import { SourceNote } from "@/components/Provenance";
import { Terrain } from "@/components/terrain/Terrain";
import { Contours } from "@/components/terrain/Contours";
import { ZanskarMap } from "@/components/ZanskarMap";
import { img } from "@/content/images";
import { partners } from "@/content/institution";
import {
  foundingFacts,
  milestones,
  purpose,
  results,
  schoolFacts,
  subjects,
} from "@/content/school";
import { zanskarFacts } from "@/content/zanskar";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lamdon Model School — Education at the roof of the Himalayas" },
      {
        name: "description",
        content:
          "Lamdon Model High School (LMHS) teaches LKG to Grade 10 in the Zanskar valley of Ladakh, India, at 3,600 metres. Its story, its campus, and how to support it.",
      },
      {
        property: "og:title",
        content: "Lamdon Model School — Education at the roof of the Himalayas",
      },
      {
        property: "og:description",
        content:
          "A school in the Zanskar valley of Ladakh, India. From 53 children in two monastery rooms to a bioclimatic campus at 3,600 metres.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ---------- 01 · THE MOUNTAINS ---------- */}
      <section className="surface-dark relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Photo
            image={img("stupa-lmhs")}
            priority
            drift
            className="h-full w-full"
            imgClassName="opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/35 to-charcoal/90" />
        </div>
        <Terrain variant="dark" className="-z-10 opacity-30" />

        <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-6 pb-14 pt-40 md:px-10 md:pb-20">
          <Reveal immediate>
            <p className="eyebrow text-ochre">
              {site.name} <span className="mx-3 text-on-dark/30">/</span> Zanskar, Ladakh
            </p>
          </Reveal>

          <Reveal immediate delay={120}>
            <h1 className="display-xl mt-8 max-w-[16ch] text-on-dark">
              Education at the roof of the Himalayas
            </h1>
          </Reveal>

          <div className="mt-12 flex flex-col gap-10 border-t border-on-dark/12 pt-9 md:flex-row md:items-end md:justify-between">
            <Reveal immediate delay={220}>
              <p className="lede max-w-[38ch] text-on-dark-muted">
                Education rooted in Zanskar.
                <br />
                Opportunity reaching beyond the mountains.
              </p>
            </Reveal>
            <Reveal immediate delay={300} className="flex flex-wrap items-center gap-4">
              <Action to="/about" variant="onDark">
                Explore Lamdon
              </Action>
              <Action to="/support" variant="onDark" className="border-transparent px-0">
                Support education
              </Action>
            </Reveal>
          </div>
        </div>

        <p className="eyebrow absolute bottom-6 right-6 hidden text-[0.5rem] text-on-dark-muted/60 md:block md:right-10">
          Scroll
        </p>
      </section>

      {/* ---------- 02 · ENTER ZANSKAR ---------- */}
      <section className="surface-dark relative overflow-hidden py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow text-ochre">Zanskar · Ladakh · India</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-7 max-w-[15ch] text-on-dark">
                  Where geography shapes possibility
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <div className="prose-editorial mt-9 text-on-dark-muted">
                  <p>
                    The valley sits on a plateau at roughly 3,600 metres, ringed by high peaks. It is one
                    of the highest inhabited places in the world and one of the coldest, with winter
                    temperatures recorded between −20°C and −35°C.
                  </p>
                  <p>
                    From November the roads become impassable and the region is closed for around six
                    months. For a school, that single fact governs everything: when the year can begin,
                    how far a child can reasonably travel each morning, whether a building can hold heat,
                    and why some students need to board.
                  </p>
                </div>
              </Reveal>
              <Reveal immediate delay={220}>
                <div className="mt-10">
                  <Action to="/zanskar" variant="onDark">
                    The land we call home
                  </Action>
                </div>
              </Reveal>
            </div>

            <Reveal immediate delay={120}>
              <ZanskarMap />
            </Reveal>
          </div>

          <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-on-dark/12 pt-12 md:grid-cols-3 lg:grid-cols-6">
            {zanskarFacts.map((fact, i) => (
              <Reveal key={fact.id} delay={i * 60}>
                <p className="font-display text-3xl text-ochre md:text-4xl">
                  <Counter value={fact.value} />
                </p>
                <p className="mt-3 text-sm leading-snug text-on-dark-muted">{fact.label}</p>
              </Reveal>
            ))}
          </div>
          <SourceNote
            data={zanskarFacts[0]!}
            className="mt-10 text-on-dark-muted/80 [&_a]:text-on-dark-muted"
          />
        </div>
      </section>

      {/* ---------- 03 · THE BEGINNING ---------- */}
      <section className="relative overflow-hidden bg-background py-28 md:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 opacity-70">
          <Contours lines={13} strokeClassName="text-stone-deep" />
        </div>
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-earth">1989 · the beginning</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg mt-7 max-w-[20ch]">It started with 53 children.</h2>
          </Reveal>

          <div className="mt-16 grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
            <div>
              <div className="flex flex-wrap items-end gap-x-16 gap-y-10">
                {foundingFacts.map((fact, i) => (
                  <Reveal key={fact.id} delay={i * 110}>
                    <p className="numeral text-charcoal">
                      <Counter value={fact.value} />
                    </p>
                    <p className="mt-4 max-w-[14ch] text-sm leading-snug text-muted-foreground">
                      {fact.label}
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <div className="prose-editorial mt-14">
                  <p>
                    In 1988, travelling through Zanskar, Marc Damiens was asked by parents in the valley
                    to help their children receive a proper education. The following year the first
                    school opened in two rooms lent by the Buddhist monastery of Pibiting, near Padum,
                    and took in fifty-three students — eleven girls and forty-two boys.
                  </p>
                  <p>{purpose.body}</p>
                </div>
              </Reveal>
              <SourceNote data={foundingFacts[0]!} className="mt-8" />
            </div>

            <Reveal delay={140} className="lg:pt-10">
              <Photo
                image={img("students-line")}
                caption
                parallax={26}
                className="aspect-[4/5] w-full [&_figcaption]:mt-5"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 04 · THE STORY OF LAMDON ---------- */}
      <section className="relative bg-secondary/60 py-28 md:py-36">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal>
                <p className="eyebrow text-earth">1988 — 2021 · historical record</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 max-w-[18ch]">Two rooms became a campus</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Action to="/about" variant="outline">
                The full history
              </Action>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 overflow-x-auto pb-6 [scrollbar-width:thin]">
          <ol className="flex min-w-max gap-px px-6 md:px-10">
            {milestones.map((m, i) => (
              <li key={m.year} className="w-[19rem] shrink-0 bg-background p-8 md:w-[23rem]">
                <Reveal delay={i * 50}>
                  <p className="font-display text-4xl text-earth md:text-5xl">{m.year}</p>
                  <h3 className="mt-6 font-display text-xl leading-tight">{m.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <SourceNote data={milestones[0]!} className="mt-8" />
        </div>
      </section>

      {/* ---------- 05 · THE SCHOOL TODAY ---------- */}
      <section className="relative overflow-hidden bg-background py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow text-earth">The school</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-7 max-w-[14ch]">A school built around possibility</h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="lede mt-8 max-w-[46ch] text-muted-foreground">
                  Twelve classes, from the lower kindergarten year through to Grade 10, taught to the
                  Indian national curriculum on a campus built for the altitude it stands at.
                </p>
              </Reveal>

              <div className="mt-14 grid grid-cols-2 gap-x-10 gap-y-10">
                {schoolFacts.map((fact, i) => (
                  <Reveal key={fact.id} delay={i * 80}>
                    <p className="font-display text-4xl md:text-5xl">
                      <Counter value={fact.value} />
                    </p>
                    <p className="mt-3 text-sm leading-snug text-muted-foreground">{fact.label}</p>
                  </Reveal>
                ))}
              </div>
              <SourceNote data={schoolFacts[0]!} className="mt-10" />
            </div>

            <Reveal immediate delay={120}>
              <Photo
                image={img("frisbee")}
                caption
                parallax={22}
                className="aspect-[16/10] w-full"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 06 · ACADEMICS ---------- */}
      <section className="surface-dark relative overflow-hidden py-28 md:py-40">
        <Terrain variant="dark" className="opacity-30" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <Reveal>
                <p className="eyebrow text-ochre">Academics</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 max-w-[18ch] text-on-dark">
                  Eight subjects, three languages
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Action to="/academics" variant="onDark">
                Enter the curriculum
              </Action>
            </Reveal>
          </div>

          <ul className="mt-16 border-t border-on-dark/12">
            {subjects.map((subject, i) => (
              <li key={subject.name} className="border-b border-on-dark/12">
                <Link
                  to="/academics"
                  hash={subject.name.toLowerCase().replace(/[^a-z]+/g, "-")}
                  className="group flex flex-wrap items-baseline justify-between gap-x-10 gap-y-2 py-6 md:py-8"
                >
                  <span className="flex items-baseline gap-6">
                    <span className="eyebrow text-on-dark-muted/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="display-md text-on-dark transition-colors duration-500 group-hover:text-ochre">
                      {subject.name}
                    </span>
                  </span>
                  <span className="max-w-[44ch] text-sm text-on-dark-muted md:text-right">
                    {subject.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- 07 · STUDENT LIFE ---------- */}
      <Section className="bg-background py-28 md:py-40">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow text-earth">Student life</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg mt-6 max-w-[13ch]">The ground, the games, the valley</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 max-w-[42ch] text-muted-foreground">
                Bare earth for a field, targets painted on a compound wall, a frisbee in the thin air at
                3,600 metres. Physical education is timetabled here like any other subject.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10">
                <Action to="/student-life" variant="outline">
                  Student life
                </Action>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6">
            <Photo
              image={img("sports-wall")}
              caption
              parallax={18}
              className="aspect-[16/9] w-full"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <Photo
              image={img("family")}
              caption
              parallax={26}
              className="aspect-[4/5] w-full sm:ml-auto sm:w-3/4"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ---------- 08 · IMPACT ---------- */}
      <section className="relative overflow-hidden bg-secondary/60 py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-earth">Impact · historical record</p>
          </Reveal>

          <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:items-end lg:gap-24">
            <Reveal delay={80}>
              <p className="eyebrow text-muted-foreground">From</p>
              <p className="numeral mt-4">
                <Counter value="53" />
              </p>
              <p className="mt-4 max-w-[22ch] text-muted-foreground">
                students in two borrowed monastery rooms, 1989
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="eyebrow text-earth">To</p>
              <p className="numeral mt-4 text-earth">
                <Counter value={results.headline} />
              </p>
              <p className="mt-4 max-w-[34ch] text-muted-foreground">
                students who have sat the Grade 10 Secondary School Certificate examinations at Lamdon
                between 1999 and 2025
              </p>
            </Reveal>
          </div>

          <Reveal immediate delay={120}>
            <div className="prose-editorial mt-16">
              <p>{results.body}</p>
              <p className="text-sm text-muted-foreground">{results.claim}</p>
            </div>
          </Reveal>
          <SourceNote data={results} className="mt-8" />
        </div>
      </section>

      {/* ---------- 09 · PARTNERS ---------- */}
      <Section className="bg-background py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="display-md max-w-[22ch]">Built with architects, foundations and volunteers</h2>
          </Reveal>
          <Reveal delay={100}>
            <Action to="/partners" variant="outline">
              All partners
            </Action>
          </Reveal>
        </div>
        <ul className="mt-14 grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {partners.slice(0, 8).map((partner, i) => (
            <li key={partner.name} className="bg-background p-7">
              <Reveal delay={i * 40}>
                <p className="font-display text-lg leading-snug">{partner.name}</p>
                <p className="eyebrow mt-4 text-[0.55rem] text-muted-foreground">
                  {partner.relationship}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* ---------- 10 · SUPPORT ---------- */}
      <section className="surface-dark relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Photo
            image={img("valley-road")}
            className="h-full w-full"
            imgClassName="opacity-40"
            sizes="100vw"
            parallax={30}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/50" />
        </div>
        <div className="mx-auto w-full max-w-[1600px] px-6 py-32 md:px-10 md:py-48">
          <Reveal>
            <p className="eyebrow text-ochre">Support</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-xl mt-7 max-w-[16ch] text-on-dark">Help build what comes next.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="lede mt-9 max-w-[48ch] text-on-dark-muted">
              Education here does not happen despite the geography. It happens because people built
              something extraordinary inside it — and keep building.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-12 flex flex-wrap gap-4">
            <Action to="/support" variant="onDark">
              Ways to support
            </Action>
            <Action to="/support/sponsor-a-child" variant="onDark" className="border-transparent px-0">
              Sponsor a child
            </Action>
          </Reveal>
        </div>
      </section>
    </>
  );
}
