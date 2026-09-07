import type { ImageCategory, ManagedImage } from "./types";

import studentsLine from "@/assets/students-line.jpg.asset.json";
import stupaLmhs from "@/assets/zanskar-stupa-lmhs.jpg.asset.json";
import family from "@/assets/zanskar-family.jpg.asset.json";
import winter from "@/assets/zanskar-winter.jpg.asset.json";
import frisbee from "@/assets/students-frisbee.jpg.asset.json";
import valleyRoad from "@/assets/zanskar-valley-road.jpg.asset.json";
import sportsWall from "@/assets/students-sports-wall.jpg.asset.json";

/**
 * The initial visual library: the seven photographs supplied by the school.
 * Each record is a managed image — replace `url` with a high-resolution
 * original and the whole site updates. Nothing here is stock photography.
 */
const SUPPLIED_RIGHTS =
  "Supplied by Lamdon Model School for use on the school website. Confirm photographer credit before third-party reuse.";

export const images: ManagedImage[] = [
  {
    id: "students-line",
    url: studentsLine.url,
    title: "Younger classes on the school ground",
    caption:
      "Students of the lower classes lined up on the school ground at Pibiting, the Zanskar range behind them.",
    alt: "A long line of Lamdon students in maroon uniforms laughing on a dusty school ground, with bare Zanskar mountains behind.",
    usageRights: SUPPLIED_RIGHTS,
    category: "Students",
    width: 750,
    height: 487,
    orientation: "landscape",
    source: "Reference image collection supplied by the school",
    sourceDate: "2026",
    status: "CURRENT",
    lastReviewed: "2026-09",
  },
  {
    id: "stupa-lmhs",
    url: stupaLmhs.url,
    title: "The valley above the school",
    caption:
      "A stupa on the approach to the campus. The letters LMHS are laid out in stone on the hillside above.",
    alt: "A white and gold stupa in a broad Himalayan valley, with the letters LMHS marked out in stone on the hillside behind it.",
    usageRights: SUPPLIED_RIGHTS,
    category: "Zanskar",
    width: 657,
    height: 367,
    orientation: "landscape",
    source: "Reference image collection supplied by the school",
    sourceDate: "2026",
    status: "CURRENT",
    lastReviewed: "2026-09",
  },
  {
    id: "family",
    url: family.url,
    title: "A family on the path home",
    caption:
      "A mother and her children on a field path in the Zanskar valley. Most of the school's families live along paths like this one.",
    alt: "A Zanskari mother in traditional maroon dress carries a child on her back while another child walks beside her on a stone path, snow peaks behind.",
    usageRights: SUPPLIED_RIGHTS,
    category: "Culture",
    width: 602,
    height: 768,
    orientation: "portrait",
    source: "Reference image collection supplied by the school",
    sourceDate: "2026",
    status: "CURRENT",
    lastReviewed: "2026-09",
  },
  {
    id: "winter",
    url: winter.url,
    title: "Winter closes the valley",
    caption:
      "Three views of the valley under snow. From November the roads become impassable and Zanskar is reachable only with difficulty.",
    alt: "Three stacked views of a snow-covered Zanskar valley showing a village, a monastery on a hill, and a riverbank.",
    usageRights: SUPPLIED_RIGHTS,
    category: "Zanskar",
    width: 443,
    height: 597,
    orientation: "portrait",
    source: "Reference image collection supplied by the school",
    sourceDate: "2026",
    status: "CURRENT",
    lastReviewed: "2026-09",
  },
  {
    id: "frisbee",
    url: frisbee.url,
    title: "Games period",
    caption:
      "Games period on the open ground beside the classrooms. Physical education is part of the taught timetable.",
    alt: "Lamdon students in blue tracksuits playing with a frisbee on an open school ground with mountains and school buildings behind.",
    usageRights: SUPPLIED_RIGHTS,
    category: "Sports",
    width: 952,
    height: 432,
    orientation: "landscape",
    source: "Reference image collection supplied by the school",
    sourceDate: "2026",
    status: "CURRENT",
    lastReviewed: "2026-09",
  },
  {
    id: "valley-road",
    url: valleyRoad.url,
    title: "The road into Zanskar",
    caption:
      "The road into the valley. Distance and terrain are the reason a boarding house exists on this campus.",
    alt: "A winding mountain road cut into arid ridges above a river in the Zanskar valley.",
    usageRights: SUPPLIED_RIGHTS,
    category: "Zanskar",
    width: 608,
    height: 397,
    orientation: "landscape",
    source: "Reference image collection supplied by the school",
    sourceDate: "2026",
    status: "CURRENT",
    lastReviewed: "2026-09",
  },
  {
    id: "sports-wall",
    url: sportsWall.url,
    title: "Target practice",
    caption:
      "Students take turns at targets painted on a compound wall — an improvised court made from what the campus has.",
    alt: "Students in blue tracksuits throwing a ball at rectangles painted on a concrete wall, mountains rising behind the school ground.",
    usageRights: SUPPLIED_RIGHTS,
    category: "Sports",
    width: 950,
    height: 435,
    orientation: "landscape",
    source: "Reference image collection supplied by the school",
    sourceDate: "2026",
    status: "CURRENT",
    lastReviewed: "2026-09",
  },
];

export const imageCategories: ImageCategory[] = [
  "Students",
  "Campus",
  "Zanskar",
  "Culture",
  "Sports",
  "Boarding",
  "Projects",
  "Historical",
];

const byId = new Map(images.map((i) => [i.id, i]));

export function img(id: string): ManagedImage {
  const found = byId.get(id);
  if (!found) throw new Error(`Unknown managed image: ${id}`);
  return found;
}
