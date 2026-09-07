import type { Fact, Milestone, Subject } from "./types";

const AAZ = "Association Aide au Zanskar (AAZ) — supporting organisation";
const AAZ_ACTIONS = "https://aazanskar.fr/en/our-actions/";
const AAZ_WHO = "https://aazanskar.fr/en/who-are-we/";

export const foundingFacts: Fact[] = [
  {
    id: "students-1989",
    value: "53",
    label: "children in the first two classes",
    source: AAZ,
    sourceUrl: AAZ_WHO,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    id: "girls-1989",
    value: "11",
    label: "girls",
    source: AAZ,
    sourceUrl: AAZ_WHO,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    id: "boys-1989",
    value: "42",
    label: "boys",
    source: AAZ,
    sourceUrl: AAZ_WHO,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
];

export const schoolFacts: Fact[] = [
  {
    id: "students-today",
    value: "300+",
    label: "students on roll",
    note: "Close to parity between girls and boys.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    id: "grades",
    value: "12",
    label: "classes, LKG to Grade 10",
    note: "Two kindergarten years followed by Grades 1 to 10.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    id: "teachers",
    value: "~20",
    label: "teachers",
    note: "With five further staff for stewardship, supervision and maintenance.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    id: "altitude",
    value: "3,600 m",
    label: "altitude of the valley floor",
    source: AAZ,
    sourceUrl: "https://aazanskar.fr/en/zanskar-india/",
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
];

export const academicYear = {
  body: "Lamdon carries the same obligations as a government school in India. The school year opens in March and closes in November or December depending on the weather; the coldest months are the long holiday. Classes run Monday to Saturday, and each period lasts thirty-five minutes.",
  source: AAZ,
  sourceUrl: AAZ_ACTIONS,
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const purpose = {
  body: "The purpose of the school is a modern education that keeps the traditions of Zanskar intact — both held inside the official programme of the Ministry of Education rather than set against it.",
  source: AAZ,
  sourceUrl: AAZ_ACTIONS,
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

const subjectProv = {
  source: AAZ,
  sourceUrl: AAZ_ACTIONS,
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const subjects: Subject[] = [
  {
    name: "Mathematics",
    summary: "Number, measurement and reasoning across all ten grades.",
    detail:
      "Mathematics runs the full length of the school, from counting in the kindergarten years to the Grade 10 examination syllabus. It is one of the subjects most closely watched in the final results, because it is the one that most often decides whether a student can continue into science streams outside the valley.",
    ...subjectProv,
  },
  {
    name: "Sciences",
    summary: "General science, taught largely without laboratory space.",
    detail:
      "Science is taught to the national syllabus. Practical work has historically been limited by the absence of a dedicated laboratory on campus — the reason a separate insulated laboratory building was proposed for the school.",
    ...subjectProv,
  },
  {
    name: "Bodhi",
    summary: "The Tibetan dialect spoken in Zanskar and Ladakh.",
    detail:
      "Bodhi is the language of the valley and of its religious texts. Teaching it inside the timetable is how the school keeps a modern curriculum from arriving at the cost of the language children speak at home.",
    ...subjectProv,
  },
  {
    name: "Hindi",
    summary: "One of India's national languages, widely used in the north.",
    detail:
      "Hindi opens the rest of northern India to students — administration, further study, work. For most Lamdon students it is a third language after Bodhi and English.",
    ...subjectProv,
  },
  {
    name: "English",
    summary: "The language of higher study beyond Zanskar.",
    detail:
      "English is the medium in which most students who continue their education outside the valley will be taught. It is carried from the kindergarten years onward.",
    ...subjectProv,
  },
  {
    name: "History & Geography",
    summary: "India and the wider world, read from a Himalayan vantage point.",
    detail:
      "Students study the standard syllabus in a place where geography is not abstract: watersheds, passes, monsoon shadow and altitude are visible from the classroom window.",
    ...subjectProv,
  },
  {
    name: "Civic Education",
    summary: "Citizenship, institutions and shared responsibility.",
    detail:
      "Civic education carries particular weight in a valley where public services are thin and community organisation does much of the work that institutions do elsewhere.",
    ...subjectProv,
  },
  {
    name: "Physical Education",
    summary: "Games and sport on the open ground beside the classrooms.",
    detail:
      "Physical education is timetabled, not optional. The ground is bare earth, the equipment is simple, and the mountains stand at the edge of every fixture.",
    ...subjectProv,
  },
];

export const results = {
  headline: "476",
  body: "Between 1999 and 2025, 476 students sat the Grade 10 Secondary School Certificate examinations at Lamdon. The certificate marks the completion of studies at the school; the majority of students go on to further education outside Zanskar.",
  claim:
    "AAZ's published material describes these results as ranking Lamdon the best school in Zanskar. That is AAZ's assessment of the record it documents, not an official ranking.",
  source: AAZ,
  sourceUrl: AAZ_ACTIONS,
  sourceDate: "2026-02",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const milestones: Milestone[] = [
  {
    year: "1988",
    title: "The request",
    body: "During a journey through Zanskar, Marc Damiens is asked by parents in the valley to help their children get a proper education. The association Aide au Zanskar is founded in France in response.",
    source: AAZ,
    sourceUrl: AAZ_WHO,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "1989",
    title: "Two rooms at Pibiting",
    body: "The first school opens in two rooms made available by the Buddhist monastery of Pibiting, near Padum, and takes in 53 students — 11 girls and 42 boys.",
    imageId: "stupa-lmhs",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "1991",
    title: "The first school building",
    body: "A purpose-built school is constructed at Pibiting and almost immediately holds close to 200 students.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "2000",
    title: "Recognition as a high school",
    body: "Lamdon Model School is recognised as a high school and becomes Lamdon Model High School. Two further class levels are added.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "2001",
    title: "A second building at Ufti",
    body: "A second building is inaugurated at Ufti, immediately adjacent to Pibiting.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "2011–2014",
    title: "Bioclimatic classrooms",
    body: "New buildings for the lower classes are built with Architectes Sans Frontières. Douchan Palacios and Vanessa de Castro Cerda apply earthquake-resistant construction and passive solar technique at altitude.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "2014",
    title: "The new campus is inaugurated",
    body: "The campus is formally opened: twelve classrooms, housing for teachers, and a multipurpose hall.",
    imageId: "students-line",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "2017–2019",
    title: "An eco-responsible boarding house",
    body: "A bioclimatic boarding house is built with Atelier Tanka — Douchan Palacios and Romain Condomitti — for the students who live furthest from school.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
  {
    year: "2021",
    title: "A science laboratory is proposed",
    body: "At the request of the Union Department of Education, a science laboratory is designed as a separate insulated building outside the main block.",
    source: AAZ,
    sourceUrl: AAZ_ACTIONS,
    sourceDate: "2022",
    status: "HISTORICAL",
    lastReviewed: "2026-09",
  },
];

export const boarding = {
  intro:
    "Some children live a full day's travel from the classroom. Where the walk is long, the road is rough or the winter closes the route entirely, attendance stops being a question of willingness and becomes a question of distance.",
  reasons: [
    {
      title: "Distance",
      body: "The boarding house exists for the students who live furthest from the campus. Integrating it into the campus removes long daily commutes.",
    },
    {
      title: "Terrain and winter",
      body: "The valley's terrain and climate make travel difficult, and from November the roads become impassable. Access, not ambition, is the limiting factor.",
    },
    {
      title: "Study",
      body: "Beyond lodging, the boarding house is a place of study: homework is supervised by the principal.",
    },
    {
      title: "Rest",
      body: "It was designed as a place of study and of relaxation — not a dormitory attached to a timetable.",
    },
  ],
  source: AAZ,
  sourceUrl: AAZ_ACTIONS,
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const architecture = {
  intro:
    "At 3,600 metres, with winter temperatures documented between −20°C and −35°C and a seismic region underfoot, a building is not a neutral container. The campus was designed so that the classrooms hold heat the sun gives them and the walls hold in an earthquake.",
  principles: [
    {
      title: "Passive solar",
      body: "Buildings are oriented and glazed to capture solar gain during the day and release it into the classrooms as the temperature falls.",
    },
    {
      title: "Insulation",
      body: "Heavily insulated envelopes keep the heat that has been gathered, reducing the fuel a school at this altitude would otherwise burn.",
    },
    {
      title: "Solar energy",
      body: "Solar panels supply the boarding house, which was designed as a reproducible energy-saving model for other buildings in the valley.",
    },
    {
      title: "Seismic rules",
      body: "Earthquake-resistant construction was applied across the campus buildings, following seismic rules for the region.",
    },
    {
      title: "Bio-based materials",
      body: "Atelier Tanka's work on the passive school in Zanskar — with Architectes Sans Frontières and AAZ — was recognised by the TerraFibra Awards 2021 and AFEX 2020, for construction anchored in local material culture.",
    },
  ],
  source: AAZ,
  sourceUrl: AAZ_ACTIONS,
  sourceDate: "2022",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const scienceLab = {
  /** Editable status field: PLANNED | IN PROGRESS | COMPLETED */
  projectStatus: "NEEDS REVIEW" as const,
  intro:
    "Science has been taught at Lamdon without a laboratory. At the request of the Union Department of Education, a laboratory was designed as a separate insulated building rather than a room inside the main block.",
  historicalFigures: [
    { label: "Floor area, as designed", value: "15 m²" },
    { label: "Cost, as estimated at the time", value: "€22,000 / US$25,000" },
    { label: "Project initiated", value: "2021" },
  ],
  caveat:
    "These are the figures recorded in AAZ's project material from 2021. They are not a current fundraising target and should not be read as one. Current scope, cost and status are to be confirmed by the school.",
  source: AAZ,
  sourceUrl: AAZ_ACTIONS,
  sourceDate: "2021",
  status: "HISTORICAL" as const,
  lastReviewed: "2026-09",
};

export const campusSpaces = [
  {
    title: "Twelve classrooms",
    body: "Two kindergarten rooms and Grades 1 to 10, across the Pibiting and Ufti buildings and the bioclimatic block built for the lower classes.",
  },
  {
    title: "Teacher housing",
    body: "Housing on campus for teaching staff — in a valley this remote, accommodation is part of being able to recruit and keep teachers.",
  },
  {
    title: "Multipurpose hall",
    body: "One indoor room large enough to hold the school together: assemblies, ceremonies, examinations, winter activity.",
  },
  {
    title: "Boarding house",
    body: "The eco-responsible bioclimatic boarding house, built 2017–2019, for students living furthest from school.",
  },
  {
    title: "Open ground",
    body: "The bare-earth ground used for games, physical education and assembly, bounded by the compound wall and the ridges beyond it.",
  },
  {
    title: "Science laboratory",
    body: "Designed as a separate 15 m² insulated building outside the main block. Status to be confirmed by the school.",
  },
] as const;
