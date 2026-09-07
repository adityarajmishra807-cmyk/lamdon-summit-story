import { useState } from "react";
import { cn } from "@/lib/utils";

interface MapPlace {
  id: string;
  name: string;
  kind: string;
  x: number;
  y: number;
  note: string;
}

/**
 * A schematic terrain map of the valley — deliberately not a survey drawing.
 * Relief is built from layered contour bands so it reads with depth without
 * asking a phone to run a second WebGL context; every marker is a real
 * keyboard-reachable button.
 */
const places: MapPlace[] = [
  {
    id: "school",
    name: "Lamdon Model High School",
    kind: "Pibiting–Ufti",
    x: 52,
    y: 58,
    note: "The campus stands at Pibiting–Ufti, a short distance from Padum. The first two classes opened in rooms of the Pibiting monastery in 1989.",
  },
  {
    id: "padum",
    name: "Padum",
    kind: "Administrative centre",
    x: 44,
    y: 66,
    note: "The administrative centre of Zanskar, and the valley's largest settlement. Two Sunni mosques stand here alongside the Buddhist community.",
  },
  {
    id: "river",
    name: "The Zanskar river",
    kind: "Chadar in winter",
    x: 70,
    y: 40,
    note: "The river gives the region its name and joins the Indus in Ladakh. Frozen in winter it becomes the Chadar — historically the only route in.",
  },
  {
    id: "villages",
    name: "Twenty-five villages",
    kind: "Settlement pattern",
    x: 26,
    y: 44,
    note: "Around 15,000 people live in some 25 villages across roughly 7,000 km², farming barley, peas and alfalfa and keeping sheep, yaks and goats.",
  },
  {
    id: "passes",
    name: "The high passes",
    kind: "Access",
    x: 80,
    y: 72,
    note: "Terrain and climate make the region very difficult to reach. From November the roads become impassable and the valley closes for around six months.",
  },
];

const bands = [
  { d: "M0 78 C 14 70, 26 82, 40 74 S 68 84, 84 72 S 96 80, 100 74 L100 100 L0 100 Z", opacity: 0.9 },
  { d: "M0 64 C 16 54, 30 68, 46 58 S 70 70, 86 56 S 96 64, 100 58 L100 100 L0 100 Z", opacity: 0.72 },
  { d: "M0 50 C 18 38, 32 54, 48 42 S 72 56, 88 40 S 97 50, 100 44 L100 100 L0 100 Z", opacity: 0.54 },
  { d: "M0 36 C 20 22, 34 40, 50 26 S 74 42, 90 24 S 98 34, 100 30 L100 100 L0 100 Z", opacity: 0.38 },
  { d: "M0 22 C 22 8, 36 26, 52 12 S 76 28, 92 10 S 99 20, 100 16 L100 100 L0 100 Z", opacity: 0.24 },
];

export function ZanskarMap() {
  const [activeId, setActiveId] = useState(places[0]!.id);
  const active = places.find((p) => p.id === activeId)!;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
      <div className="relative aspect-[4/3] w-full overflow-hidden border border-on-dark/12 bg-slate-deep/40">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {bands.map((band, i) => (
            <path
              key={i}
              d={band.d}
              className="fill-charcoal"
              opacity={band.opacity}
              stroke="currentColor"
              strokeWidth={0.18}
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {/* river */}
          <path
            d="M92 18 C 78 30, 74 40, 62 48 S 48 60, 40 72 S 30 86, 18 96"
            fill="none"
            className="stroke-sky-muted"
            strokeWidth={0.7}
            opacity={0.75}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <ul className="absolute inset-0">
          {places.map((place) => {
            const isActive = place.id === activeId;
            return (
              <li key={place.id} className="absolute" style={{ left: `${place.x}%`, top: `${place.y}%` }}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveId(place.id)}
                  onFocus={() => setActiveId(place.id)}
                  onClick={() => setActiveId(place.id)}
                  aria-pressed={isActive}
                  className="group flex -translate-x-1/2 -translate-y-1/2 items-center gap-2"
                >
                  <span
                    className={cn(
                      "block size-2 rounded-full border transition-all duration-500",
                      isActive
                        ? "scale-[1.6] border-ochre bg-ochre"
                        : "border-on-dark/70 bg-transparent group-hover:border-ochre",
                    )}
                  />
                  <span
                    className={cn(
                      "eyebrow whitespace-nowrap text-[0.55rem] transition-colors duration-500",
                      isActive ? "text-ochre" : "text-on-dark-muted",
                    )}
                  >
                    {place.id === "school" ? "LAMDON" : place.name.split(" ")[0]}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="eyebrow absolute bottom-4 right-5 text-[0.5rem] text-on-dark-muted/70">
          Schematic · not to scale
        </p>
      </div>

      <div className="min-h-[13rem]">
        <p className="eyebrow text-ochre">{active.kind}</p>
        <h3 className="display-md mt-4 text-on-dark">{active.name}</h3>
        <p key={active.id} className="reveal-base reveal-in mt-5 max-w-[42ch] text-on-dark-muted">
          {active.note}
        </p>
      </div>
    </div>
  );
}
