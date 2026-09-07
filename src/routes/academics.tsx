import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Counter } from "@/components/Counter";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SourceNote } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { img } from "@/content/images";
import { academicYear, results, subjects } from "@/content/school";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — curriculum and examinations at Lamdon, Zanskar" },
      {
        name: "description",
        content:
          "Mathematics, Sciences, Bodhi, Hindi, English, History and Geography, Civic Education and Physical Education, taught LKG to Grade 10 at Lamdon Model High School.",
      },
      { property: "og:title", content: "Academics at Lamdon Model High School" },
      {
        property: "og:description",
        content:
          "Eight subjects and three languages, taught to the Indian national curriculum in the Zanskar valley.",
      },
      { property: "og:url", content: "/academics" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/academics" }],
  }),
  component: Academics,
});

const slug = (name: string) => name.toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");

function Academics() {
  const [open, setOpen] = useState<string | null>(subjects[0]!.name);

  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Eight subjects, three languages, ten grades"
        lede="Lamdon teaches the official programme of the Ministry of Education, and teaches Bodhi — the language of the valley — inside the same timetable."
        image={img("students-line")}
      />

      <Section className="bg-background py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-3 lg:gap-20">
          <Reveal>
            <p className="font-display text-5xl">
              <Counter value="12" />
            </p>
            <p className="mt-4 text-muted-foreground">
              classes: LKG and UKG, then Grades 1 to 10.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <p className="font-display text-5xl">
              <Counter value="35" />
              <span className="text-2xl"> min</span>
            </p>
            <p className="mt-4 text-muted-foreground">
              per class session, Monday to Saturday.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="font-display text-5xl">March — Nov</p>
            <p className="mt-4 text-muted-foreground">
              the school year, closing earlier or later with the weather.
            </p>
          </Reveal>
        </div>
        <SourceNote data={academicYear} className="mt-12" />
      </Section>

      {/* Typographic curriculum */}
      <section className="surface-dark py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <p className="eyebrow text-ochre">The curriculum</p>
          </Reveal>

          <ul className="mt-14 border-t border-on-dark/12">
            {subjects.map((subject, i) => {
              const isOpen = open === subject.name;
              return (
                <li key={subject.name} id={slug(subject.name)} className="border-b border-on-dark/12">
                  <h2>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : subject.name)}
                      aria-expanded={isOpen}
                      aria-controls={`panel-${slug(subject.name)}`}
                      className="group flex w-full flex-wrap items-baseline justify-between gap-x-10 gap-y-3 py-7 text-left md:py-10"
                    >
                      <span className="flex items-baseline gap-6">
                        <span className="eyebrow text-on-dark-muted/50">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`display-md transition-colors duration-500 ${
                            isOpen ? "text-ochre" : "text-on-dark group-hover:text-ochre"
                          }`}
                        >
                          {subject.name}
                        </span>
                      </span>
                      <span className="flex items-center gap-6 text-sm text-on-dark-muted">
                        <span className="max-w-[40ch] md:text-right">{subject.summary}</span>
                        <span
                          aria-hidden="true"
                          className={`transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </span>
                    </button>
                  </h2>
                  <div
                    id={`panel-${slug(subject.name)}`}
                    hidden={!isOpen}
                    className="pb-10 md:grid md:grid-cols-[10rem_1fr] md:gap-12"
                  >
                    <span aria-hidden="true" />
                    <div>
                      <p className="prose-editorial text-on-dark-muted">{subject.detail}</p>
                      <SourceNote
                        data={subject}
                        className="mt-6 text-on-dark-muted/80 [&_a]:text-on-dark-muted"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <Section className="bg-background py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
          <Reveal>
            <p className="eyebrow text-earth">Grade 10</p>
            <h2 className="display-md mt-6 max-w-[20ch]">
              The Secondary School Certificate closes the school's course
            </h2>
            <div className="prose-editorial mt-8">
              <p>{results.body}</p>
              <p className="text-sm text-muted-foreground">{results.claim}</p>
            </div>
            <SourceNote data={results} className="mt-8" />
            <div className="mt-10">
              <Action to="/support" variant="outline">
                Support a project
              </Action>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Photo
              image={img("sports-wall")}
              caption
              parallax={22}
              className="aspect-[4/3] w-full"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
