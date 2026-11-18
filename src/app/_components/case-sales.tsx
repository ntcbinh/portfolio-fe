import { caseSales } from "../content";
import { Card, CardGrid, Chips, Eyebrow, Section, SectionHeader } from "./ui";

export function CaseSales() {
  const { hardPart, result } = caseSales;

  return (
    <>
      <Section
        id={caseSales.id}
        tone="light"
        labelledBy="case-01-overview-title"
      >
        <SectionHeader
          id="case-01-overview-title"
          eyebrow={caseSales.eyebrow}
          title={caseSales.title}
          lead={caseSales.lead}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Card title="My role" body={caseSales.role} />
          <Card title="Scale" body={caseSales.scale} />
        </div>
        <div className="flex flex-col gap-4">
          <Eyebrow tone="dim">Stack</Eyebrow>
          <Chips items={caseSales.stack} label="Case 01 stack" />
        </div>
      </Section>

      <Section tone="light" labelledBy="case-01-hard-part-title">
        <SectionHeader
          id="case-01-hard-part-title"
          eyebrow={hardPart.eyebrow}
          title={hardPart.title}
        />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hardPart.steps.map((step) => (
            <li key={step.eyebrow}>
              <Card {...step} />
            </li>
          ))}
        </ol>
        <CardGrid columns={2}>
          {hardPart.notes.map((note) => (
            <Card key={note.title} {...note} />
          ))}
        </CardGrid>
      </Section>

      <Section tone="dark" labelledBy="case-01-result-title">
        <div className="flex max-w-4xl flex-col gap-4">
          <Eyebrow>{result.eyebrow}</Eyebrow>
          <h2
            id="case-01-result-title"
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-accent sm:text-6xl lg:text-7xl"
          >
            {result.metric}
          </h2>
          <p className="text-lg leading-relaxed text-fg-muted sm:text-xl">
            {result.metricLabel}
          </p>
        </div>
        <CardGrid columns={4}>
          {result.cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </CardGrid>
        <p className="text-base leading-relaxed text-fg-dim">
          {result.footnote}
        </p>
      </Section>
    </>
  );
}
