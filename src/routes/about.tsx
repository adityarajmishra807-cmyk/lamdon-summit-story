import { createFileRoute } from "@tanstack/react-router";
import { Action } from "@/components/Action";
import { Counter } from "@/components/Counter";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SourceNote, StatusTag } from "@/components/Provenance";
import { Contours } from "@/components/terrain/Contours";
import { img } from "@/content/images";
import { academicYear, foundingFacts, milestones, purpose, results, schoolFacts } from "@/content/school";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lamdon Model School — a history from 1989" },
      {
        name: "description",
        content:
          "How Lamdon Model High School grew from 53 children in two monastery rooms at Pibiting in 1989 to a bioclimatic campus teaching LKG to Grade 10 in Zanskar.",
      },
      { property: "og:title", content: "About Lamdon Model School — a history from 1989" },
      {
        property: "og:description",
        content:
          "The history, purpose and academic record of Lamdon Model High School in the Zanskar valley, Ladakh.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/about" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the school"
        title="A school that begins in a borrowed room"
        lede="Lamdon Model High School was founded in 1989 with fifty-three children, two classrooms lent by the monastery at Pibiting, and a request made by parents in the valley."
        image={img("students-line")}
      />

      <Section className="bg-background py-24 md:py-36">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow text-earth">Purpose</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-md mt-6 max-w-[20ch]">
                A modern education that keeps Zanskar intact
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <div className="prose-editorial mt-8">
                <p>{purpose.body}</p>
                <p>{academicYear.body}</p>
                <p>
                  LMHS is part of the Indian association of the Pibiting/Ufti school and carries the
                  same obligations as a government school in India. Children are admitted from four or
                  five years old into the lower kindergarten year, and the school teaches through to
                  Grade 10.
                </p>
              </div>
            </Reveal>
            <SourceNote data={academicYear} className="mt-8" />
          </div>

          <Reveal delay={120}>
            <Photo
              image={img("frisbee")}
              caption
              parallax={20}
              className="aspect-[4/5] w-full"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-10 gap-y-12 border-t border-border pt-14 md:grid-cols-4">
          {schoolFacts.map((fact, i) => (
            <Reveal key={fact.id} delay={i * 70}>
              <p className="font-display text-4xl md:text-5xl">
                <Counter value={fact.value} />
              </p>
              <p className="mt-3 text-sm leading-snug text-muted-foreground">{fact.label}</p>
              {fact.note ? <p className="mt-2 text-xs text-muted-foreground/80">{fact.note}</p> : null}
            </Reveal>
          ))}
        </div>
        <SourceNote data={schoolFacts[0]!} className="mt-10" />
      </Section>

      {/* Founding numbers */}
      <section className="relative overflow-hidden bg-secondary/60 py-24 md:py-36">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 opacity-60">
          <Contours lines={12} strokeClassName="text-stone-deep" />
        </div>
        <div className="relative mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-earth">1989 · the first intake</p>
          </Reveal>
          <div className="mt-12 flex flex-wrap items-end gap-x-20 gap-y-12">
            {foundingFacts.map((fact, i) => (
              <Reveal key={fact.id} delay={i * 100}>
                <p className="numeral">
                  <Counter value={fact.value} />
                </p>
                <p className="mt-4 max-w-[14ch] text-sm leading-snug text-muted-foreground">
                  {fact.label}
                </p>
              </Reveal>
            ))}
          </div>
          <SourceNote data={foundingFacts[0]!} className="mt-12" />
        </div>
      </section>

      {/* Timeline */}
      <Section className="bg-background py-24 md:py-36" id="history">
        <Reveal>
          <p className="eyebrow text-earth">The record</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-lg mt-6 max-w-[18ch]">Thirty-three years of building</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-8 max-w-[62ch] text-muted-foreground">
            The milestones below are drawn from the archive of Association Aide au Zanskar, the
            association that has supported the school since its founding. They are presented as
            historical record; the school's own current account of itself takes precedence once
            confirmed.
          </p>
        </Reveal>

        <ol className="mt-16 border-t border-border">
          {milestones.map((m, i) => (
            <li key={m.year} className="border-b border-border">
              <Reveal delay={Math.min(i * 40, 200)}>
                <article className="grid gap-6 py-10 md:grid-cols-[10rem_1fr_auto] md:gap-12 md:py-14">
                  <p className="font-display text-3xl text-earth md:text-4xl">{m.year}</p>
                  <div>
                    <h3 className="display-md">{m.title}</h3>
                    <p className="mt-5 max-w-[58ch] text-muted-foreground">{m.body}</p>
                  </div>
                  <StatusTag status={m.status} className="self-start md:justify-self-end" />
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
        <SourceNote data={milestones[0]!} className="mt-10" />
      </Section>

      {/* Results */}
      <section className="surface-dark relative overflow-hidden py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow text-ochre">Examination record</p>
              </Reveal>
              <Reveal delay={80}>
                <p className="numeral mt-8 text-ochre">
                  <Counter value={results.headline} />
                </p>
                <p className="mt-6 max-w-[26ch] text-on-dark-muted">
                  students have sat the Grade 10 examinations at Lamdon, 1999–2025
                </p>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="prose-editorial text-on-dark-muted">
                <p>{results.body}</p>
                <p className="text-sm">{results.claim}</p>
                <p className="text-sm">
                  No pass percentages are published here. Year-by-year results are held by the school
                  and will appear on this page once supplied and verified.
                </p>
              </div>
              <SourceNote
                data={results}
                className="mt-8 text-on-dark-muted/80 [&_a]:text-on-dark-muted"
              />
              <div className="mt-10">
                <Action to="/academics" variant="onDark">
                  Academics
                </Action>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
