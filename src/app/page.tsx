import {
  about,
  agenda,
  contact,
  experience,
  fit,
  ndaNote,
  profile,
} from "./content";
import { CaseArchitecture } from "./_components/case-architecture";
import { CaseRecruitment } from "./_components/case-recruitment";
import { CaseSales } from "./_components/case-sales";
import { Hero } from "./_components/hero";
import { SiteHeader } from "./_components/site-header";
import {
  Card,
  CardGrid,
  Eyebrow,
  Section,
  SectionHeader,
  Stat,
} from "./_components/ui";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <Section id="about" tone="light" labelledBy="about-title">
          <SectionHeader
            id="about-title"
            eyebrow={about.eyebrow}
            title={about.title}
          />
          <CardGrid columns={4}>
            {about.stats.map((stat) => (
              <Stat key={stat.value} {...stat} />
            ))}
          </CardGrid>
          <p className="text-base leading-relaxed text-fg-muted">
            {about.footnote}
          </p>
        </Section>

        <Section tone="accent" labelledBy="nda-title">
          <SectionHeader
            id="nda-title"
            eyebrow={ndaNote.eyebrow}
            title={ndaNote.title}
            lead={ndaNote.body}
          />
        </Section>

        <Section tone="light" labelledBy="agenda-title">
          <SectionHeader
            id="agenda-title"
            eyebrow={agenda.eyebrow}
            title={agenda.title}
          />
          <CardGrid columns={3}>
            {agenda.items.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </CardGrid>
        </Section>

        <CaseSales />
        <CaseRecruitment />
        <CaseArchitecture />

        <Section
          id={experience.id}
          tone="light"
          wide
          labelledBy="experience-title"
        >
          <SectionHeader
            id="experience-title"
            eyebrow={experience.eyebrow}
            title={experience.title}
          />
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {experience.items.map((item) => (
              <li key={item.title}>
                <Card {...item} />
              </li>
            ))}
          </ol>
        </Section>

        <Section tone="dark" labelledBy="fit-title">
          <SectionHeader
            id="fit-title"
            eyebrow={fit.eyebrow}
            title={fit.title}
          />
          <CardGrid columns={2}>
            {fit.cards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </CardGrid>
        </Section>
      </main>

      <footer
        id={contact.id}
        aria-labelledby="contact-title"
        className="tone-dark border-t border-line bg-page px-6 py-20 text-fg sm:px-10 sm:py-28"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2
            id="contact-title"
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {contact.title}
          </h2>
          <ul className="flex flex-col gap-3 font-mono text-base sm:flex-row sm:gap-8">
            <li>
              <a
                className="text-accent underline-offset-4 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                className="text-accent underline-offset-4 hover:underline"
                href={`https://${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.linkedin}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
