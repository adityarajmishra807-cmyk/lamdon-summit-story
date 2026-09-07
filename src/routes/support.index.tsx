import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { SourceNote } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { img } from "@/content/images";
import { supportOptions } from "@/content/institution";
import { AAZ_URL } from "@/content/site";
import { scienceLab } from "@/content/school";

export const Route = createFileRoute("/support/")({
  head: () => ({
    meta: [
      { title: "Support education at Lamdon — help build what comes next" },
      {
        name: "description",
        content:
          "Sponsor a child, support the campus or a named project, donate, volunteer or partner with Lamdon Model High School in Zanskar, Ladakh.",
      },
      { property: "og:title", content: "Help build what comes next" },
      {
        property: "og:description",
        content:
          "Ways to support a school teaching LKG to Grade 10 at 3,600 metres in the Zanskar valley.",
      },
      { property: "og:url", content: "/support" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/support" }],
  }),
  component: Support,
});

function Support() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Help build what comes next"
        lede="Every building on this campus began as a request from the valley. So does everything still to come."
        image={img("students-line")}
      >
        <div className="mt-12 flex flex-wrap gap-4">
          <Action to="/support/sponsor-a-child" variant="onDark">
            Sponsor a child
          </Action>
          <Action href={AAZ_URL} variant="outline" className="text-on-dark">
            Donate through AAZ
          </Action>
        </div>
      </PageHero>

      <Section className="bg-background py-24 md:py-32">
        <Reveal>
          <p className="eyebrow text-earth">Six ways to help</p>
        </Reveal>
        <ul className="mt-12 border-t border-border">
          {supportOptions.map((option, i) => (
            <li key={option.slug} className="border-b border-border">
              <Reveal delay={i * 60}>
                <div className="grid gap-6 py-9 lg:grid-cols-[0.8fr_1.4fr_auto] lg:items-baseline lg:gap-14">
                  <h2 className="display-md">{option.title}</h2>
                  <p className="max-w-[60ch] text-muted-foreground">{option.body}</p>
                  <div>
                    {option.slug === "sponsor-a-child" ? (
                      <Action to="/support/sponsor-a-child" variant="quiet">
                        Read more
                      </Action>
                    ) : (
                      <Action href={AAZ_URL} variant="quiet">
                        Enquire
                      </Action>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <section className="surface-dark py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            <div>
              <Reveal>
                <p className="eyebrow text-ochre">Where money has gone</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-6 max-w-[20ch] text-on-dark">
                  Classrooms, a boarding house, and a laboratory that was designed
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <div className="prose-editorial mt-8 text-on-dark-muted">
                  <p>
                    Support given to Lamdon has been spent on things that stand: the bioclimatic
                    classrooms of 2011–2014, the campus opened in 2014, the eco-responsible boarding
                    house of 2017–2019, and the science laboratory designed in 2021.
                  </p>
                  <p>{scienceLab.caveat}</p>
                </div>
              </Reveal>
              <SourceNote
                data={scienceLab}
                className="mt-8 text-on-dark-muted/80 [&_a]:text-on-dark-muted"
              />
              <div className="mt-10 flex flex-wrap gap-4">
                <Action to="/reports" variant="onDark">
                  Read the reports
                </Action>
                <Action to="/campus" variant="quiet" className="text-on-dark-muted">
                  See the campus
                </Action>
              </div>
            </div>
            <Reveal delay={120}>
              <Photo
                image={img("sports-wall")}
                caption
                parallax={22}
                className="aspect-[4/5] w-full [&_figcaption]:text-on-dark-muted"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Section className="bg-secondary/60 py-20 md:py-28">
        <Reveal>
          <p className="max-w-[70ch] text-muted-foreground">
            Donations, sponsorships and tax receipts are handled by Association Aide au Zanskar, the
            French association that has supported the school since 1988. Lamdon publishes no amounts,
            fees or tax treatment here that the school has not confirmed.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
