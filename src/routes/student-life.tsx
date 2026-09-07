import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Action } from "@/components/Action";
import { img, images } from "@/content/images";

export const Route = createFileRoute("/student-life")({
  head: () => ({
    meta: [
      { title: "Student life — the ground, the games, the valley" },
      {
        name: "description",
        content:
          "Classroom, sport, community, culture and friendship at Lamdon Model High School: student life photographed on the school ground at Pibiting–Ufti, Zanskar.",
      },
      { property: "og:title", content: "Student life at Lamdon Model High School" },
      {
        property: "og:description",
        content:
          "A photographic record of daily life at a school in the Zanskar valley, Ladakh.",
      },
      { property: "og:url", content: "https://lamdonschool.vercel.app/student-life" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lamdonschool.vercel.app/student-life" }],
  }),
  component: StudentLife,
});

const chapters = [
  {
    id: "sport",
    label: "Sport",
    heading: "A field of bare earth, and thin air",
    body: "Games period runs on the open ground between the classrooms and the compound wall. There is no turf, no pavilion and no floodlight; there is a frisbee, a ball, and a valley standing at the edge of every fixture. Physical education is on the timetable rather than added to it.",
    imageId: "frisbee",
  },
  {
    id: "improvised",
    label: "Improvisation",
    heading: "Targets painted on a wall",
    body: "Where equipment is scarce, the campus makes what it needs. Rectangles painted onto a concrete wall become a court; a queue of students becomes a rotation. It is a small thing, and it is exactly what a school looks like when it is run by people who intend it to work.",
    imageId: "sports-wall",
  },
  {
    id: "community",
    label: "Community",
    heading: "Families along the field paths",
    body: "Most students walk in from villages along the valley's field paths and irrigation channels. Their families farm barley, peas and alfalfa and keep sheep, yaks and goats. The school year is set around that work and around the weather that governs it.",
    imageId: "family",
  },
  {
    id: "friendship",
    label: "Friendship",
    heading: "The line on the school ground",
    body: "A whole class arranged for a photograph, holding a pose for about as long as children ever do. Lamdon has taught close to gender parity for most of its history — a fact worth stating plainly for a school at this altitude and this distance from anywhere.",
    imageId: "students-line",
  },
] as const;

function StudentLife() {
  return (
    <>
      <PageHero
        eyebrow="Student life"
        title="Everything a school day is, at 3,600 metres"
        lede="These photographs were supplied by the school. Nothing here is stock photography, and nothing here is staged for a website."
        image={img("frisbee")}
      />

      <Section className="bg-background py-20 md:py-28">
        <nav aria-label="Chapters" className="flex flex-wrap gap-x-8 gap-y-3 border-b border-border pb-8">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="eyebrow text-muted-foreground transition-colors hover:text-earth"
            >
              {c.label}
            </a>
          ))}
        </nav>
      </Section>

      {chapters.map((chapter, i) => {
        const image = img(chapter.imageId);
        const flip = i % 2 === 1;
        return (
          <section
            key={chapter.id}
            id={chapter.id}
            className={i % 2 === 1 ? "bg-secondary/50 py-20 md:py-32" : "bg-background py-20 md:py-32"}
          >
            <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
              <div
                className={`grid items-center gap-14 lg:gap-24 ${
                  flip ? "lg:grid-cols-[1fr_1.15fr]" : "lg:grid-cols-[1.15fr_1fr]"
                }`}
              >
                <Reveal className={flip ? "lg:order-2" : ""}>
                  <Photo
                    image={image}
                    caption
                    parallax={24}
                    className={
                      image.orientation === "portrait"
                        ? "aspect-[3/4] w-full"
                        : "aspect-[16/10] w-full"
                    }
                    sizes="(max-width: 1024px) 100vw, 52vw"
                  />
                </Reveal>
                <Reveal delay={120} className={flip ? "lg:order-1" : ""}>
                  <p className="eyebrow text-earth">{chapter.label}</p>
                  <h2 className="display-md mt-6 max-w-[18ch]">{chapter.heading}</h2>
                  <p className="prose-editorial mt-7 text-muted-foreground">{chapter.body}</p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <Section className="bg-background py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <h2 className="display-md max-w-[20ch]">
              {images.length} photographs, and room for the rest
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Action to="/gallery" variant="outline">
              The full archive
            </Action>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <p className="mt-8 max-w-[62ch] text-muted-foreground">
            The visual archive begins with the images the school supplied. Each one carries its own
            caption, alt text, category and usage rights, so the collection can grow — and be replaced
            with high-resolution originals — without touching the design.
          </p>
        </Reveal>
      </Section>
    </>
  );
}
