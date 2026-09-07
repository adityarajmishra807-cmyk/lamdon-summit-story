import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";
import { site } from "@/content/site";

function NotFoundComponent() {
  return (
    <div className="surface-dark flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="numeral text-ochre">404</p>
        <h1 className="display-md mt-6 text-on-dark">This page is not here</h1>
        <p className="mt-4 text-sm text-on-dark-muted">
          The page you are looking for does not exist, or has moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="eyebrow border border-on-dark/30 px-6 py-4 text-on-dark transition-colors hover:border-ochre hover:text-ochre"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="surface-dark flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="display-md text-on-dark">This page didn't load</h1>
        <p className="mt-4 text-sm text-on-dark-muted">
          Something went wrong on our end. You can try again, or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="eyebrow border border-on-dark/30 px-6 py-4 text-on-dark transition-colors hover:border-ochre hover:text-ochre"
          >
            Try again
          </button>
          <a
            href="/"
            className="eyebrow border border-on-dark/30 px-6 py-4 text-on-dark transition-colors hover:border-ochre hover:text-ochre"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${site.name} — Zanskar, Ladakh` },
      { name: "description", content: site.description },
      { property: "og:site_name", content: site.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#26282e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&family=Archivo:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "School",
          name: "Lamdon Model High School",
          alternateName: ["Lamdon Model School", "LMHS Zanskar"],
          description: site.description,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pibiting–Ufti, Padum, Zanskar",
            addressRegion: "Ladakh",
            addressCountry: "IN",
          },
          foundingDate: "1989",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <Nav />
      <main id="main">
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
