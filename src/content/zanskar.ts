import type { Fact } from "./types";

const AAZ = "Association Aide au Zanskar (AAZ) — supporting organisation";
const AAZ_ZANSKAR = "https://aazanskar.fr/en/zanskar-india/";

const prov = {
  source: AAZ,
  sourceUrl: AAZ_ZANSKAR,
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const zanskarFacts: Fact[] = [
  { id: "elevation", value: "3,600 m", label: "plateau elevation", ...prov },
  { id: "area", value: "7,000 km²", label: "area of the Zanskar region", ...prov },
  { id: "people", value: "15,000", label: "inhabitants", ...prov },
  { id: "villages", value: "25", label: "villages", ...prov },
  { id: "winter", value: "−20 to −35°C", label: "winter temperatures", ...prov },
  { id: "closed", value: "6 months", label: "of the year effectively closed", ...prov },
];

export const zanskarSections = [
  {
    id: "where",
    heading: "Where it is",
    body: [
      "Zanskar lies in the Union Territory of Ladakh, in the Indian Himalayas. Ladakh is made up of two districts, Leh and Kargil; Zanskar belongs to Kargil. Before 4 August 2019 and the creation of the Union Territory, Zanskar was part of the State of Jammu and Kashmir.",
      "Padum is the administrative centre. The school stands a short distance away at Pibiting–Ufti.",
    ],
    ...prov,
  },
  {
    id: "climate",
    heading: "The climate",
    body: [
      "The combination of mountainous terrain and severe climate makes the region very difficult to reach. From November the roads become impassable and Zanskar is closed for around six months in frozen silence.",
      "It is one of the highest inhabited places in the world — a plateau at roughly 3,600 metres — and one of the coldest, with winter temperatures documented between −20°C and −35°C. Climate change is bringing more precipitation in both winter snow and summer rain.",
    ],
    ...prov,
  },
  {
    id: "living",
    heading: "How people live",
    body: [
      "Around 15,000 people in some 25 villages live from agriculture — barley, peas, alfalfa — from sheep, yaks and goats, and from tourism. There are no fruit trees in Zanskar; fruit is brought in from elsewhere in Ladakh and from Kashmir.",
      "Arable land and water are both scarce, which forced Zanskarpas to build complex irrigation networks. Barley, which tolerates poor soil, is the principal crop, and its flour — tsampa — is the base of the diet.",
    ],
    ...prov,
  },
  {
    id: "river",
    heading: "The river, and the Chadar",
    body: [
      "Zanskar is the name of the river that crosses the region and joins the Indus in Ladakh. In winter, when it freezes, people call it the Chadar. The frozen river then becomes the only way into the valley.",
    ],
    ...prov,
  },
];

export const cultureSections = [
  {
    heading: "Tibetan Buddhism, and Padum's mosques",
    body: [
      "Zanskar is predominantly Buddhist, in the Tibetan tradition. A substantial Muslim community lives in Padum, where there are two Sunni mosques.",
      "In many families the custom is that one child, a boy or a girl, becomes a monk or a nun, with tuition paid by the monastery. Most homes keep a room with a small altar.",
    ],
    ...prov,
  },
  {
    heading: "The year as a sequence of ceremonies",
    body: [
      "Each event in the life of the valley is marked by a Buddhist ceremony: the blessing of seed, of yaks, of the harvest; births, marriages and cremations. The astrologer monk determines the most favourable day to begin ploughing, sowing, harvesting, or a journey.",
    ],
    ...prov,
  },
  {
    heading: "Inheritance and the peyrac",
    body: [
      "An inheritance in Zanskar comprises the fields, the animals, the house — and the peyrac, the headdress worn by Zanskari women, which passes to the eldest daughter of the family.",
      "Polyandry, in which a woman married several men of the same family, kept an estate from being divided into plots too small to farm. It has been prohibited since 1941 and is disappearing.",
    ],
    ...prov,
  },
];
