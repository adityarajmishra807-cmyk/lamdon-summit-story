import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SourceNote, StatusTag } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { img } from "@/content/images";
import { reports } from "@/content/institution";
import { AAZ_URL } from "@/content/site";

export const Route = createFileRoute("/reports")({
  head: () => ({
    meta: [
      { title: "Reports — the summer mission archive, 2008 to 2023" },
      {
        name: "description",
        content:
          "Fourteen illustrated reports on work carried out at Lamdon Model High School, published by Association Aide au Zanskar after each summer mission.",
      },
      { property: "og:title", content: "Report archive — Lamdon Model High School" },
      {
        property: "og:description",
        content:
          "AAZ's summer mission reports on the school in Zanskar, 2008 to 2023, in French.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/reports" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/reports" }],
  }),
  component: Reports,
});

function Reports() {
  return (
    <>
      <PageHero
        eyebrow="Reports"
        title="An archive, kept one summer at a time"
        lede="After each summer mission to the school, AAZ published an illustrated report of the work carried out. Fourteen of them survive online, from 2008 to 2023."
        image={img("winter")}
      />

      <Section className="bg-background py-20 md:py-28">
        <Reveal>
          <p className="max-w-[66ch] text-muted-foreground">
            These are AAZ's documents, in French, written for its members and donors. They are the
            primary record of how the campus was built. Lamdon publishes no report here that does not
            exist.
          </p>
        </Reveal>
      </Section>

      <Section className="bg-background pb-24 md:pb-32">
        <ul className="border-t border-border">
          {reports.map((report, i) => (
            <li key={report.year} className="border-b border-border">
              <Reveal delay={Math.min(i, 8) * 40}>
                <div className="grid items-baseline gap-4 py-8 md:grid-cols-[6rem_1fr_auto] md:gap-12">
                  <p className="font-display text-4xl">{report.year}</p>
                  <div>
                    <h2 className="font-display text-2xl leading-tight">{report.title}</h2>
                    <p className="mt-3 max-w-[62ch] text-muted-foreground">{report.summary}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {report.language} · <StatusTag status={report.status} className="ml-1" />
                    </p>
                  </div>
                  <div>
                    {report.fileUrl ? (
                      <Action href={report.fileUrl} variant="outline">
                        PDF
                      </Action>
                    ) : (
                      <span className="eyebrow text-muted-foreground">Not available</span>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <SourceNote data={reports[0]!} className="mt-10" />
        <div className="mt-10">
          <Action href={`${AAZ_URL}downloads/`} variant="quiet">
            AAZ's own downloads page
          </Action>
        </div>
      </Section>
    </>
  );
}
