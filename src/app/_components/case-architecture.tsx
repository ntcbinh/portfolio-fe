import { caseArchitecture } from "../content";
import { Card, CardGrid, Section, SectionHeader } from "./ui";

export function CaseArchitecture() {
  return (
    <Section
      id={caseArchitecture.id}
      tone="light"
      labelledBy="case-03-title"
    >
      <SectionHeader
        id="case-03-title"
        eyebrow={caseArchitecture.eyebrow}
        title={caseArchitecture.title}
      />
      <CardGrid columns={2}>
        {caseArchitecture.cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </CardGrid>
    </Section>
  );
}
