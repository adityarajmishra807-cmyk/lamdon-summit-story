import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatusTag } from "@/components/Provenance";
import { Action } from "@/components/Action";
import { img } from "@/content/images";
import { faq } from "@/content/institution";
import { AAZ_URL, contactDetails, site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lamdon Model High School, Zanskar" },
      {
        name: "description",
        content:
          "Admissions, general, sponsorship, partnership and volunteering enquiries for Lamdon Model High School at Pibiting–Ufti, Padum, Zanskar, Ladakh.",
      },
      { property: "og:title", content: "Contact Lamdon Model High School" },
      {
        property: "og:description",
        content: "How to reach the school and its supporting association.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const enquiries = [
  {
    title: "Admissions",
    body: "Places for the coming school year, admission age for the kindergarten years, and enrolment into Grades 1 to 10.",
  },
  {
    title: "General enquiries",
    body: "Anything concerning the school, its teaching or its campus at Pibiting–Ufti.",
  },
  {
    title: "Sponsorship",
    body: "Sponsoring a student's schooling. Sponsorship has historically been administered by Association Aide au Zanskar.",
  },
  {
    title: "Partnership",
    body: "Companies, foundations and institutions wishing to work with the school on a named project.",
  },
  {
    title: "Volunteering",
    body: "Offers of time and specific skills, including work carried out during the summer months.",
  },
] as const;

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reaching a school in the Zanskar valley"
        lede="The school's own telephone, postal address and email are being confirmed by the office and will be published here. Nothing on this page is invented."
        image={img("stupa-lmhs")}
      />

      <Section className="bg-background py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <Reveal>
              <p className="eyebrow text-earth">Enquiries</p>
            </Reveal>
            <ul className="mt-10 border-t border-border">
              {enquiries.map((enquiry, i) => (
                <li key={enquiry.title} className="border-b border-border py-7">
                  <Reveal delay={i * 60}>
                    <h2 className="font-display text-2xl leading-tight">{enquiry.title}</h2>
                    <p className="mt-3 max-w-[52ch] text-muted-foreground">{enquiry.body}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={120}>
            <div className="border border-border p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-4">
                <p className="eyebrow text-earth">School details</p>
                <StatusTag status={contactDetails.status} />
              </div>
              <dl className="mt-8 border-t border-border">
                <Row label="School" value={site.formalName} />
                <Row label="Location" value={`${site.place}, ${site.region}`} />
                <Row label="Postal address" value={contactDetails.postalAddress} />
                <Row label="Telephone" value={contactDetails.telephone} />
                <Row label="Email" value={contactDetails.email} />
                <Row label="Office hours" value={contactDetails.officeHours} />
              </dl>
              <p className="mt-6 text-sm text-muted-foreground">{contactDetails.note}</p>
              <div className="mt-8">
                <Action href={AAZ_URL} variant="outline">
                  Reach AAZ in France
                </Action>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-secondary/60 py-24 md:py-32" id="faq">
        <Reveal>
          <p className="eyebrow text-earth">Questions</p>
        </Reveal>
        <dl className="mt-10 border-t border-border">
          {faq.map((item, i) => (
            <div key={item.question} className="border-b border-border py-8">
              <Reveal delay={i * 50}>
                <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <dt className="font-display text-2xl leading-tight">{item.question}</dt>
                  <dd>
                    <p className="text-muted-foreground">{item.answer}</p>
                    <StatusTag status={item.status} className="mt-4" />
                  </dd>
                </div>
              </Reveal>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-border py-4">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className={value ? "font-display text-lg" : "eyebrow text-earth"}>
        {value ?? "To be confirmed"}
      </dd>
    </div>
  );
}
