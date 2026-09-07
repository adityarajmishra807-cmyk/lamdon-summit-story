import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav } from "@/content/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-on-dark"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-700 ease-out",
          scrolled
            ? "border-b border-on-dark/10 bg-charcoal/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6",
        )}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-8 px-6 md:px-10">
          <Link to="/" className="group relative z-10 shrink-0" aria-label="Lamdon Model School — home">
            <span className="block font-display text-[1.35rem] leading-none tracking-[0.2em] text-on-dark">
              LAMDON
            </span>
            <span className="eyebrow mt-1 block text-[0.5rem] text-on-dark-muted">
              Model High School · Zanskar
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="eyebrow relative whitespace-nowrap text-on-dark-muted transition-colors duration-300 hover:text-on-dark"
                activeProps={{ className: "text-on-dark" }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-ochre transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <Link
              to="/contact"
              className="eyebrow text-on-dark-muted transition-colors hover:text-on-dark"
            >
              Contact
            </Link>
            <Link
              to="/support"
              className="eyebrow border border-on-dark/30 px-5 py-3 text-on-dark transition-colors duration-500 hover:border-ochre hover:text-ochre"
            >
              Support Education
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="eyebrow relative z-10 flex items-center gap-3 text-on-dark lg:hidden"
          >
            {open ? "Close" : "Menu"}
            <span className="flex w-6 flex-col gap-[5px]" aria-hidden="true">
              <span
                className={cn(
                  "h-px w-full bg-current transition-transform duration-500",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-current transition-transform duration-500",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-charcoal px-6 pb-10 pt-28 text-on-dark lg:hidden"
      >
        <nav aria-label="Primary, mobile" className="flex flex-col">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="display-md border-b border-on-dark/10 py-5 text-on-dark"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/gallery" className="display-md border-b border-on-dark/10 py-5">
            Gallery
          </Link>
          <Link to="/contact" className="display-md border-b border-on-dark/10 py-5">
            Contact
          </Link>
        </nav>
        <Link
          to="/support"
          className="eyebrow mt-10 flex items-center justify-between border border-ochre/60 px-6 py-5 text-ochre"
        >
          Support Education <span aria-hidden="true">&#8594;</span>
        </Link>
      </div>
    </>
  );
}
