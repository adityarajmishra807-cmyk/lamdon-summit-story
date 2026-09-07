import type { ContentStatus, Provenance as ProvenanceData } from "@/content/types";
import { cn } from "@/lib/utils";

const styles: Record<ContentStatus, string> = {
  CURRENT: "border-sky-muted/50 text-sky-muted",
  VERIFIED: "border-sky-muted/50 text-sky-muted",
  HISTORICAL: "border-ochre/60 text-ochre",
  "NEEDS REVIEW": "border-earth/50 text-earth",
  ARCHIVED: "border-border text-muted-foreground",
};

export function StatusTag({
  status,
  className,
}: {
  status: ContentStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center border px-2 py-[3px] align-middle",
        styles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}

/**
 * The provenance line that accompanies sourced material. Historical information
 * consolidated from AAZ stays visibly historical wherever it appears.
 */
export function SourceNote({
  data,
  className,
}: {
  data: ProvenanceData;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-3 gap-y-2 text-xs leading-relaxed text-muted-foreground",
        className,
      )}
    >
      <StatusTag status={data.status} />
      <span>
        {data.source}
        {data.sourceDate ? ` · ${data.sourceDate}` : ""}
        {data.sourceUrl ? (
          <>
            {" · "}
            <a
              href={data.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground"
            >
              source
            </a>
          </>
        ) : null}
        {data.lastReviewed ? ` · reviewed ${data.lastReviewed}` : ""}
      </span>
    </p>
  );
}
