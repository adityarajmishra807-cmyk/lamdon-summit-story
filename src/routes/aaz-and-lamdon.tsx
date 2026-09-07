import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SourceNote } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { img } from "@/content/images";
import { aazRelationship } from "@/content/institution";
import { AAZ_URL, site } from "@/content/site";

export const Route = createFileRoute("/aaz-and-lamdon")({
  head: () => ({
    meta: [
      { title: "AAZ and Lamdon — two organisations, one school" },
      {
        name: "description",
        content:
          "Lamdon Model High School is the school. Association Aide au Zanskar, founded in France in 1988, is the association that supports it. What each one is responsible for.",
      },
      { property: "og:title", content: "AAZ and Lamdon — two organisations, one school" },
      {
        property: "og:description",
        content:
          "How the school and its French supporting association relate, and why historical material on this site is attributed to AAZ.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/aaz-and-lamdon" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/aaz-and-lamdon" }],
  }),
  component: AazAndLamdon,
});

function AazAndLamdon() {
  return (
    <>
      <PageHero
        eyebrow="AAZ &amp; Lamdon"
        title="Two organisations, one school"
        lede="Lamdon is the school. Association Aide au Zanskar is the association that has supported it since 1988. Keeping the two distinct matters — for accuracy, and out of respect for both."
        image={img("valley-road")}
      />

      <Section className="bg-background py-24 md:py-32">
        <div className="grid gap-px border border-border bg-border md:grid-cols-2">
          <div className="bg-background p-8 md:p-12">
            <Reveal>
              <p className="eyebrow text-earth">{site.name}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {site.place} · {site.region}
              </p>
              <ul className="mt-10 border-t border-border">
                {aazRelationship.lamdon.map((item) => (
                  <li key={item} className="border-b border-border py-4 font-display text-xl">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="bg-secondary/60 p-8 md:p-12">
            <Reveal delay={100}>
              <p className="eyebrow text-slate-deep">Association Aide au Zanskar</p>
              <p className="mt-4 text-sm text-muted-foreground">France · founded 1988</p>
              <ul className="mt-10 border-t border-border">
                {aazRelationship.aaz.map((item) => (
                  <li key={item} className="border-b border-border py-4 font-display text-xl">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-background pb-24 md:pb-32">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr] lg:gap-24">
          <Reveal>
            <h2 className="display-md max-w-[14ch]">The record, and who kept it</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="prose-editorial text-muted-foreground">
              {aazRelationship.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <SourceNote data={aazRelationship} className="mt-8" />
            <div className="mt-10 flex flex-wrap gap-4">
              <Action href={AAZ_URL} variant="outline">
                Visit the AAZ website
              </Action>
              <Action to="/reports" variant="quiet">
                The report archive
              </Action>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
