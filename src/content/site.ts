export const site = {
  name: "Lamdon Model School",
  formalName: "Lamdon Model High School (LMHS)",
  place: "Pibiting–Ufti, Padum, Zanskar",
  region: "Ladakh, India",
  tagline: "Education rooted in Zanskar. Opportunity reaching beyond the mountains.",
  description:
    "Lamdon Model High School is a school in the Zanskar valley of Ladakh, India, teaching LKG to Grade 10 on a bioclimatic campus at 3,600 metres.",
};

export const nav = [
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Campus", to: "/campus" },
  { label: "Student Life", to: "/student-life" },
  { label: "Zanskar", to: "/zanskar" },
  { label: "Partners", to: "/partners" },
  { label: "Support", to: "/support" },
] as const;

export const footerNav = [
  { label: "About", to: "/about" },
  { label: "Academics", to: "/academics" },
  { label: "Campus", to: "/campus" },
  { label: "Student Life", to: "/student-life" },
  { label: "Zanskar", to: "/zanskar" },
  { label: "Gallery", to: "/gallery" },
  { label: "Partners", to: "/partners" },
  { label: "AAZ & Lamdon", to: "/aaz-and-lamdon" },
  { label: "Reports", to: "/reports" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
] as const;

/**
 * Contact details are intentionally unpublished. Nothing here is invented:
 * the school's telephone, postal address and email must be supplied by
 * Lamdon before they appear on the site.
 */
export const contactDetails = {
  postalAddress: null,
  email: null,
  telephone: null,
  officeHours: null,
  note: "Awaiting confirmed details from the school office.",
  status: "NEEDS REVIEW" as const,
};

export const AAZ_URL = "https://aazanskar.fr/en/";
