import type { FaqItem, Partner, Report } from "./types";

const AAZ = "Association Aide au Zanskar (AAZ) — supporting organisation";
const AAZ_PARTNERS = "https://aazanskar.fr/en/partnership/";
const AAZ_DOWNLOADS = "https://aazanskar.fr/en/downloads/";
const AAZ_DONATE = "https://aazanskar.fr/en/donation-sponsorship/";

export const partners: Partner[] = [
  {
    name: "Architectes Sans Frontières",
    role: "Architecture — Architects Without Borders, France",
    relationship: "Historical project partner",
    note: "Partner on the bioclimatic buildings for the lower classes, 2011–2014, applying earthquake-resistant and passive solar construction.",
    source: AAZ,
    sourceUrl: AAZ_PARTNERS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    name: "Atelier Tanka",
    role: "Architecture",
    relationship: "Active contributor",
    url: "https://www.ateliertanka.com/",
    note: "Architects of the eco-responsible boarding house with AAZ. Their work on the passive school in Zanskar was recognised by the TerraFibra Awards 2021 and AFEX 2020.",
    source: AAZ,
    sourceUrl: AAZ_PARTNERS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    name: "Rencontres au Bout du Monde",
    role: "Fair and solidarity travel",
    relationship: "Active contributor",
    url: "https://boutdumonde.eu/",
    note: "An associative tour operator whose travellers visit the school at Pibiting–Ufti during their Zanskar journeys. Some sponsorships began with those visits.",
    source: AAZ,
    sourceUrl: AAZ_PARTNERS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    name: "Web Hors Piste",
    role: "Digital agency",
    relationship: "Active contributor",
    url: "https://www.webhorspiste.com/",
    note: "Contributes working time to AAZ's online presence.",
    source: AAZ,
    sourceUrl: AAZ_PARTNERS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  ...[
    "Alstom Fondation",
    "CDC Développement Solidaire",
    "Fondation Areva",
    "Fondazione della Comunità Bresciana ONLUS",
    "Association des communes genevoises",
    "Fondation Mazars",
    "Fondation Groupe EDF",
    "Fondation Total",
  ].map<Partner>((name) => ({
    name,
    role: "Foundation / institutional funder",
    relationship: "Historical project partner",
    note: "Listed by AAZ among the organisations that have participated in its projects.",
    source: AAZ,
    sourceUrl: AAZ_PARTNERS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  })),
];

const reportYears = [
  "2023",
  "2022",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
  "2013",
  "2012",
  "2011",
  "2010",
  "2009",
  "2008",
];

const reportFiles: Record<string, string> = {
  "2023": "https://aazanskar.fr/wp-content/uploads/2024/02/Rapport-version-courte.pdf",
  "2022": "https://aazanskar.fr/wp-content/uploads/2022/11/RAPPORT_ETE_2022-Coul-Bdef-1.pdf",
  "2019":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2019-association-aaz-zanskar.pdf",
  "2018":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2018-association-aaz-zanskar.pdf",
  "2017":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2017-association-aaz-zanskar.pdf",
  "2016":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2016-association-aaz-zanskar.pdf",
  "2015":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2015-association-aaz-zanskar.pdf",
  "2014":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2014-association-aaz-zanskar.pdf",
  "2013":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2013-association-aaz-zanskar.pdf",
  "2012":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2012-association-aaz-zanskar.pdf",
  "2011":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2011-association-aaz-zanskar.pdf",
  "2010":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2010-association-aaz-zanskar.pdf",
  "2009":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2009-association-aaz-zanskar.pdf",
  "2008":
    "https://aaz.webhorspiste.ch/wp-content/uploads/2021/11/rapport-ete-2008-association-aaz-zanskar.pdf",
};

export const reports: Report[] = reportYears.map((year) => ({
  year,
  title: `Rapport d'été ${year}`,
  summary:
    "An illustrated report of the work carried out at Lamdon by AAZ members on their summer mission to the school.",
  fileUrl: reportFiles[year],
  language: "French",
  source: "AAZ summer report archive",
  sourceUrl: AAZ_DOWNLOADS,
  sourceDate: year,
  status: "HISTORICAL",
  lastReviewed: "2026-09",
}));

export const supportOptions = [
  {
    slug: "sponsor-a-child",
    title: "Sponsor a Child",
    body: "Follow one student's schooling from the kindergarten years to Grade 10, through the sponsorship programme AAZ administers on the school's behalf.",
    to: "/support/sponsor-a-child",
  },
  {
    slug: "campus",
    title: "Support the Campus",
    body: "Classrooms, teacher housing, the boarding house and the ground they stand on: the buildings that make a school year possible at this altitude.",
  },
  {
    slug: "project",
    title: "Support a Project",
    body: "Named capital projects, of which the science laboratory is the most recent to have been designed.",
  },
  {
    slug: "donate",
    title: "Donate",
    body: "A direct gift, of any size, toward an ongoing project or the running costs of the school.",
  },
  {
    slug: "volunteer",
    title: "Volunteer",
    body: "Give time rather than money, to a specific piece of work. AAZ's model has kept costs low by running on volunteers since 1988.",
  },
  {
    slug: "partner",
    title: "Partner With Lamdon",
    body: "For companies and foundations: institutional partnership on a school that has been sustained for more than thirty years.",
  },
] as const;

export const sponsorship = {
  intro:
    "Sponsorship at Lamdon has historically been arranged through AAZ, the association founded in 1988 at the request of parents in the valley. The description below reflects AAZ's published material and must be confirmed against current policy before a family or donor relies on it.",
  points: [
    {
      title: "One student, followed through",
      body: "A sponsorship follows a student's schooling at Lamdon across the grades the school teaches — from the lower kindergarten year through to Grade 10.",
    },
    {
      title: "Annual support",
      body: "Support is given annually rather than as a one-off gift, so that a student's schooling is not interrupted partway.",
    },
    {
      title: "News of the student",
      body: "Sponsors receive updates on the student they support and on the school's examination results.",
    },
    {
      title: "Correspondence",
      body: "Communication between sponsor and student has been part of the programme.",
    },
    {
      title: "Visits",
      body: "Visits to the school have taken place, including through AAZ's travel partner. Any visit is arranged with the school and on its terms.",
    },
  ],
  caveat:
    "Amounts, tax treatment and the exact terms of sponsorship depend on the country of the donor and the year, and are handled by AAZ. No figure is published here that has not been confirmed by the school.",
  source: AAZ,
  sourceUrl: AAZ_DONATE,
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const faq: FaqItem[] = [
  {
    question: "Is Lamdon a government school?",
    answer:
      "Lamdon Model High School is subject to the same obligations as public schools in India and teaches the official programme of the Ministry of Education. LMHS is part of the Indian association of the Pibiting/Ufti school.",
    source: AAZ,
    sourceUrl: "https://aazanskar.fr/en/our-actions/",
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    question: "When does the school year run?",
    answer:
      "The school year begins in March and ends in November or December depending on the weather. The coldest months are the long holiday. Classes run Monday to Saturday.",
    source: AAZ,
    sourceUrl: "https://aazanskar.fr/en/our-actions/",
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    question: "Which grades does the school teach?",
    answer:
      "Twelve classes: two kindergarten years, LKG and UKG, followed by Grades 1 to 10. Children are admitted from four or five years old.",
    source: AAZ,
    sourceUrl: "https://aazanskar.fr/en/our-actions/",
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    question: "What is AAZ's relationship to the school?",
    answer:
      "AAZ — Association Aide au Zanskar — is a supporting organisation founded in France in 1988. It has funded and helped deliver buildings and projects at Lamdon and administers sponsorship. It is not the school and does not run it.",
    source: AAZ,
    sourceUrl: "https://aazanskar.fr/en/who-are-we/",
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    question: "How do I reach the school?",
    answer:
      "The school's own contact details are being confirmed and will be published here. In the meantime, enquiries can be sent through the contact page and AAZ can be reached through its own website.",
    source: "Lamdon website project",
    sourceDate: "2026",
    status: "NEEDS REVIEW",
    lastReviewed: "2026-09",
  },
];

export const aazRelationship = {
  lamdon: [
    "The school, its principal and its teachers",
    "The students and their families",
    "Teaching, examinations and results",
    "The campus at Pibiting–Ufti",
    "Admissions and daily school life",
  ],
  aaz: [
    "A supporting association, founded in France in 1988",
    "Fundraising and institutional partnerships",
    "Administration of student sponsorship",
    "Funding and delivery of capital projects",
    "Summer missions and published reports",
  ],
  body: [
    "In 1988, on a journey through Zanskar, Marc Damiens was asked by parents in the valley to help their children receive a proper education. Association Aide au Zanskar was founded in France in answer to that request, and the first two classes opened the following year in rooms lent by the monastery at Pibiting.",
    "Almost everything written down about the school's early decades was written down by AAZ — in project files, summer mission reports and its own website. That is why much of the historical material on this site is attributed to AAZ and marked as historical: it is a faithful record kept by the organisation that helped build the campus, not a substitute for the school's own current account of itself.",
    "AAZ operates on volunteers and states three values: volunteering, which keeps costs low; respect, defining needs through dialogue with the local population and inside the Indian school curriculum; and transparency, meaning clear objectives and exemplary account management.",
    "The two identities stay separate. Lamdon is the school. AAZ is the association that supports it.",
  ],
  source: "Association Aide au Zanskar (AAZ)",
  sourceUrl: "https://aazanskar.fr/en/who-are-we/",
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};
