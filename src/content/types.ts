/**
 * Content layer types.
 *
 * Every record in this project carries provenance and review metadata so that
 * historical material sourced from AAZ stays distinguishable from information
 * verified by Lamdon Model School itself. Editors change content here (or in a
 * future headless CMS mapped to these same shapes) — never in components.
 */

export type ContentStatus =
  | "CURRENT"
  | "VERIFIED"
  | "HISTORICAL"
  | "NEEDS REVIEW"
  | "ARCHIVED";

export interface Provenance {
  /** Where this information came from, in plain language. */
  source: string;
  /** Canonical URL of the source document, when there is one. */
  sourceUrl?: string;
  /** Publication or observation date of the source material. */
  sourceDate?: string;
  status: ContentStatus;
  /** Last time a human reviewed this record. */
  lastReviewed?: string;
}

export interface ManagedImage extends Provenance {
  id: string;
  url: string;
  title: string;
  caption: string;
  alt: string;
  photographer?: string;
  usageRights: string;
  category: ImageCategory;
  /** Intrinsic pixel size of the supplied file, used for layout hints. */
  width: number;
  height: number;
  orientation: "landscape" | "portrait";
}

export type ImageCategory =
  | "Students"
  | "Campus"
  | "Zanskar"
  | "Culture"
  | "Sports"
  | "Boarding"
  | "Projects"
  | "Historical";

export interface Fact extends Provenance {
  id: string;
  value: string;
  label: string;
  note?: string;
}

export interface Milestone extends Provenance {
  year: string;
  title: string;
  body: string;
  imageId?: string;
}

export interface Subject extends Provenance {
  name: string;
  summary: string;
  detail: string;
}

export interface Partner extends Provenance {
  name: string;
  role: string;
  relationship: "Historical project partner" | "Active contributor";
  url?: string;
  note?: string;
}

export interface Report extends Provenance {
  year: string;
  title: string;
  summary: string;
  fileUrl?: string;
  language: string;
}

export interface FaqItem extends Provenance {
  question: string;
  answer: string;
}
