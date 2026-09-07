import { Link } from "@tanstack/react-router";
import { AAZ_URL, footerNav, site } from "@/content/site";
import { Contours } from "./terrain/Contours";
import { Action } from "./Action";

export function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 opacity-40">
        <Contours lines={12} strokeClassName="text-ochre" />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-14 pt-24 md:px-10 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow text-ochre">Support education in Zanskar</p>
            <h2 className="display-lg mt-6 max-w-[22ch] text-on-dark">
              Help build what comes next.
            </h2>
            <div className="mt-9">
              <Action to="/support" variant="onDark">
                Support Education
              </Action>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 self-end">
            {footerNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="eyebrow text-on-dark-muted transition-colors hover:text-ochre"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-20 grid gap-10 border-t border-on-dark/12 pt-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg tracking-[0.18em] text-on-dark">LAMDON</p>
            <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">
              {site.formalName}
              <br />
              {site.place}
              <br />
              {site.region}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-on-dark-muted">
            Historical material on this site was consolidated from the archive of Association Aide au
            Zanskar (AAZ), the association founded in 1988 that has supported the school's buildings,
            projects and sponsorships.{" "}
            <a
              href={AAZ_URL}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-on-dark/30 underline-offset-4 transition-colors hover:text-ochre"
            >
              aazanskar.fr
            </a>
          </p>
          <p className="text-sm leading-relaxed text-on-dark-muted md:text-right">
            Contact details, staff and current statistics are published only once confirmed by the
            school office.
            <span className="mt-4 block text-xs">
              &copy; {new Date().getFullYear()} Lamdon Model High School
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
