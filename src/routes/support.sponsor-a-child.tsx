import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SourceNote, StatusTag } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { img } from "@/content/images";
import { sponsorship } from "@/content/institution";
import { AAZ_URL } from "@/content/site";

export const Route = createFileRoute("/support/sponsor-a-child")({
  head: () => ({
    meta: [
      { title: "Sponsor a child — one student, from LKG to Grade 10" },
      {
        name: "description",
        content:
          "How sponsorship at Lamdon Model High School has worked through Association Aide au Zanskar: annual support for one student, with news of their schooling.",
      },
      { property: "og:title", content: "Sponsor a child at Lamdon Model High School" },
      {
        property: "og:description",
        content:
          "Annual sponsorship following one student's schooling in the Zanskar valley, administered by AAZ.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/support/sponsor-a-child" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/support/sponsor-a-child" }],
  }),
  component: SponsorAChild,
});

function SponsorAChild() {
  return (
    <>
      <PageHero
        eyebrow="Support · Sponsor a child"
        title="One student, followed the whole way through"
        lede="From the kindergarten years to the Grade 10 certificate — the schooling of one child in the Zanskar valley, supported year by year."
        image={img("family")}
      />

      <Section className="bg-background py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <p className="eyebrow text-earth">How it has worked</p>
              <StatusTag status={sponsorship.status} />
            </div>
            <p className="lede mt-8 max-w-[48ch] text-muted-foreground">{sponsorship.intro}</p>
            <SourceNote data={sponsorship} className="mt-8" />
          </Reveal>
          <Reveal delay={120}>
            <ol className="border-t border-border">
              {sponsorship.points.map((point, i) => (
                <li key={point.title} className="border-b border-border py-7">
                  <div className="flex items-baseline gap-6">
                    <span className="eyebrow text-muted-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-display text-2xl leading-tight">{point.title}</h2>
                      <p className="mt-3 max-w-[52ch] text-muted-foreground">{point.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Section>

      <section className="surface-dark py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <Reveal>
              <Photo
                image={img("students-line")}
                caption
                parallax={20}
                className="aspect-[4/3] w-full [&_figcaption]:text-on-dark-muted"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display-md max-w-[22ch] text-on-dark">
                What is not published here, and why
              </h2>
              <p className="prose-editorial mt-8 text-on-dark-muted">{sponsorship.caveat}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Action href={AAZ_URL} variant="onDark">
                  Enquire through AAZ
                </Action>
                <Action to="/contact" variant="quiet" className="text-on-dark-muted">
                  Contact the school
                </Action>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
