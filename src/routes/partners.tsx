import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SourceNote, StatusTag } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { img } from "@/content/images";
import { partners } from "@/content/institution";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — the organisations that built with Lamdon" },
      {
        name: "description",
        content:
          "Architects, foundations and associations that have contributed to buildings and projects at Lamdon Model High School, listed with the period of their involvement.",
      },
      { property: "og:title", content: "Partners of Lamdon Model High School" },
      {
        property: "og:description",
        content:
          "Architectes Sans Frontières, Atelier Tanka and the foundations recorded as project partners in AAZ's published material.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/partners" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/partners" }],
  }),
  component: Partners,
});

function Partners() {
  const architecture = partners.filter((p) => p.role.startsWith("Architecture"));
  const contributors = partners.filter(
    (p) => !p.role.startsWith("Architecture") && p.relationship === "Active contributor",
  );
  const funders = partners.filter((p) => p.role.startsWith("Foundation"));

  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Nothing on this campus was built alone"
        lede="Architects, foundations and associations have carried parts of this school into being. They are listed here with the period of their involvement, and nothing is presented as current unless the school has confirmed it."
        image={img("stupa-lmhs")}
      />

      <Section className="bg-background py-24 md:py-32">
        <Reveal>
          <p className="lede max-w-[62ch] text-muted-foreground">
            The record below comes from AAZ's published partnership material. A historical project
            partner contributed to a specific piece of work at a specific time; it does not imply an
            ongoing relationship today.
          </p>
        </Reveal>
      </Section>

      <PartnerGroup title="Architecture" items={architecture} />
      <PartnerGroup title="Contributors" items={contributors} tinted />
      <PartnerGroup title="Foundations and institutional funders" items={funders} />

      <Section className="bg-secondary/60 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <h2 className="display-md max-w-[24ch]">
              Partner with a school that has been sustained for more than thirty years
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Action to="/support">Support education</Action>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function PartnerGroup({
  title,
  items,
  tinted = false,
}: {
  title: string;
  items: typeof partners;
  tinted?: boolean;
}) {
  if (items.length === 0) return null;
  return (
    <Section className={`${tinted ? "bg-secondary/50" : "bg-background"} py-16 md:py-24`}>
      <Reveal>
        <h2 className="eyebrow text-earth">{title}</h2>
      </Reveal>
      <ul className="mt-10 border-t border-border">
        {items.map((partner, i) => (
          <li key={partner.name} className="border-b border-border py-8">
            <Reveal delay={Math.min(i, 6) * 50}>
              <div className="grid gap-5 lg:grid-cols-[1.1fr_1.4fr_auto] lg:items-start lg:gap-12">
                <div>
                  <h3 className="font-display text-2xl leading-tight">
                    {partner.url ? (
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="underline decoration-border decoration-1 underline-offset-[6px] transition-colors hover:text-earth"
                      >
                        {partner.name}
                      </a>
                    ) : (
                      partner.name
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{partner.role}</p>
                </div>
                <p className="max-w-[62ch] text-muted-foreground">{partner.note}</p>
                <div className="flex flex-col items-start gap-2 lg:items-end">
                  <StatusTag status={partner.status} />
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {partner.relationship}
                  </span>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
      <SourceNote data={items[0]!} className="mt-8" />
    </Section>
  );
}
