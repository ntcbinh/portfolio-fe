import { profile } from "../content";
import { Chips, Eyebrow } from "./ui";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="tone-dark relative overflow-hidden bg-page px-6 py-24 text-fg sm:px-10 sm:py-32 lg:min-h-[85vh] lg:py-40"
    >
      {/* The brand spine from the deck's title slide. */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-2 bg-green sm:w-4 lg:w-6"
      />

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:gap-20">
        <Eyebrow>{profile.eyebrow}</Eyebrow>

        <div className="flex flex-col gap-5">
          <h1
            id="hero-title"
            className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.02em] text-fg sm:text-6xl lg:text-8xl"
          >
            {profile.name}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-fg-muted sm:text-2xl">
            {profile.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <Chips items={profile.stack} label="Core technologies" />
          <a
            href="#case-01"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-green px-6 py-3 font-mono text-sm text-night transition-opacity hover:opacity-90"
          >
            See the case studies <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
