import type { ReactNode } from "react";
import type { Card as CardContent, Stat as StatContent } from "../content";

type Tone = "light" | "dark" | "accent";

const toneClass: Record<Tone, string> = {
  light: "tone-light",
  dark: "tone-dark",
  accent: "tone-accent",
};

type SectionProps = {
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  /**
   * Widens the content column to the deck's own canvas width (1920px canvas
   * less its 128px side padding). The career timeline needs it: five cards in
   * the standard 7xl column leave each one too narrow to read comfortably.
   */
  wide?: boolean;
  children: ReactNode;
};

/** A full-width band that carries one palette for everything inside it. */
export function Section({
  id,
  tone = "light",
  labelledBy,
  wide = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${toneClass[tone]} border-t border-line bg-page px-6 py-20 text-fg sm:px-10 sm:py-28`}
    >
      <div
        className={`mx-auto flex w-full flex-col gap-10 sm:gap-14 ${
          wide ? "max-w-[104rem]" : "max-w-7xl"
        }`}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "dim";
}) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.18em] sm:text-sm ${
        tone === "dim" ? "text-fg-dim" : "text-accent"
      }`}
    >
      {children}
    </p>
  );
}

type SectionHeaderProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
}: SectionHeaderProps) {
  return (
    <div className="flex max-w-4xl flex-col gap-4">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className="font-display text-3xl font-bold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl"
      >
        {title}
      </h2>
      {lead ? (
        <p className="text-lg leading-relaxed text-fg-muted sm:text-xl">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/**
 * The deck's one repeating unit: an optional small label, a title and an
 * optional body, in a bordered panel. Passing `href` makes the whole card a
 * link.
 */
export function Card({
  eyebrow,
  eyebrowTone = "accent",
  title,
  body,
  accent,
  href,
}: CardContent & { href?: string }) {
  const content = (
    <>
      {eyebrow ? (
        <span
          className={`font-mono text-sm font-semibold ${
            eyebrowTone === "dim" ? "text-fg-dim" : "text-accent"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h3 className="font-display text-xl font-semibold leading-snug text-fg sm:text-2xl">
        {title}
      </h3>
      {body ? (
        <p className="text-base leading-relaxed text-fg-muted">{body}</p>
      ) : null}
    </>
  );

  const className = `flex h-full flex-col gap-3 rounded-2xl border-2 bg-surface px-7 py-8 ${
    accent ? "border-accent" : "border-line"
  }`;

  if (href) {
    return (
      <a
        href={href}
        className={`${className} transition-colors hover:border-accent`}
      >
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export function Stat({ value, label }: StatContent) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border-2 border-line bg-surface px-7 py-8">
      {/*
       * The size dips back to text-4xl at lg: that is where the grid goes to
       * four columns, and the longest value ("<300ms") does not fit a quarter
       * of the row at text-5xl until xl.
       */}
      <p className="font-display text-4xl font-bold leading-none tracking-tight text-accent sm:text-5xl lg:text-4xl xl:text-5xl">
        {value}
      </p>
      <p className="text-base leading-relaxed text-fg-muted">{label}</p>
    </div>
  );
}

export function Chips({
  items,
  label,
}: {
  items: readonly string[];
  label: string;
}) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-chip px-4 py-1.5 font-mono text-sm text-fg"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Responsive card grid. The deck uses 2- and 4-column layouts. */
export function CardGrid({
  columns,
  children,
}: {
  columns: 2 | 3 | 4;
  children: ReactNode;
}) {
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return <div className={`grid grid-cols-1 gap-6 ${cols}`}>{children}</div>;
}
