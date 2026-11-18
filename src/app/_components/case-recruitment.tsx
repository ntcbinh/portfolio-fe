import { caseRecruitment } from "../content";
import { Card, CardGrid, Chips, Eyebrow, Section, SectionHeader } from "./ui";

export function CaseRecruitment() {
  const { hardPart } = caseRecruitment;

  return (
    <>
      <Section
        id={caseRecruitment.id}
        tone="light"
        labelledBy="case-02-overview-title"
      >
        <SectionHeader
          id="case-02-overview-title"
          eyebrow={caseRecruitment.eyebrow}
          title={caseRecruitment.title}
          lead={caseRecruitment.lead}
        />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseRecruitment.lifecycle.map((stage) => (
            <li key={stage.title}>
              <Card {...stage} />
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-4">
          <Eyebrow tone="dim">Stack</Eyebrow>
          <Chips items={caseRecruitment.stack} label="Case 02 stack" />
        </div>
      </Section>

      <Section tone="dark" labelledBy="case-02-hard-part-title">
        <SectionHeader
          id="case-02-hard-part-title"
          eyebrow={hardPart.eyebrow}
          title={hardPart.title}
        />
        <CardGrid columns={3}>
          {hardPart.cards.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </CardGrid>
        <Card {...hardPart.also} />
      </Section>
    </>
  );
}
