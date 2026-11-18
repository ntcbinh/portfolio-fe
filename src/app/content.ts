/*
 * All copy comes from the source deck:
 * docs/Portfolio – Nguyen Thi Cam Binh – Frontend Engineer (2).html
 */

export type Card = {
  /** Small label above the title. */
  eyebrow?: string;
  /**
   * The deck reserves the brand colour for numbers and metrics, so
   * categorical eyebrows ("Constraint", a year) are rendered dim instead.
   */
  eyebrowTone?: "accent" | "dim";
  title: string;
  body?: string;
  accent?: boolean;
};

export type Stat = {
  value: string;
  label: string;
};

export const profile = {
  eyebrow: "Senior Frontend Engineer",
  name: "Nguyen Thi Cam Binh",
  tagline:
    "Senior Frontend Engineer · 7+ years building enterprise web applications with React, Next.js, Vue and Svelte",
  stack: [
    "TypeScript",
    "React / Next.js",
    "Vue / Nuxt",
    "Svelte",
    "GraphQL",
    "NestJS",
  ],
  email: "ntcbinh16@gmail.com",
  linkedin: "linkedin.com/in/ntcbinh16",
} as const;

export const nav = [
  { label: "About", href: "#about" },
  { label: "Case 01", href: "#case-01" },
  { label: "Case 02", href: "#case-02" },
  { label: "Case 03", href: "#case-03" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const about = {
  eyebrow: "About me",
  title: "From desktop systems to enterprise frontends",
  stats: [
    { value: "7+", label: "years in software, 2019 → 2026" },
    {
      value: "11",
      label: "frontend engineers I reviewed code for as primary reviewer",
    },
    { value: "20+", label: "shared components used across 10+ modules" },
    { value: "<300ms", label: "form load time, down from 3s+" },
  ] satisfies Stat[],
  footnote:
    "B.Eng. Control Engineering & Automation, Can Tho University · Japanese JLPT N3 · English: professional working proficiency",
} as const;

export const ndaNote = {
  eyebrow: "A note before we start",
  title: "Every project here is under NDA.",
  body: "All of them were built for Japanese clients. Client names and confidential details are removed, and the flows are simplified for illustration. I'm happy to go deep on decisions, trade-offs and code patterns.",
} as const;

export const agenda = {
  eyebrow: "What follows",
  title: "Three case studies",
  items: [
    {
      eyebrow: "01",
      title: "Sales Management System",
      body: "Real-time drag-and-drop scheduling · form load 3s+ → <300ms",
      href: "#case-01",
    },
    {
      eyebrow: "02",
      title: "Recruitment Agent System",
      body: "Full hiring lifecycle · a custom block editor built on Tiptap",
      href: "#case-02",
    },
    {
      eyebrow: "03",
      title: "Frontend architecture at team scale",
      body: "Component library · feature-based structure · review culture",
      href: "#case-03",
    },
  ],
} as const;

export const caseSales = {
  id: "case-01",
  eyebrow: "Case 01 · Sungrove Tech Vietnam · 2024–2026",
  title: "Sales Management System",
  lead: "A scalable dashboard and calendar-based interface for managing the sales workflow.",
  role: "Senior engineer on the 11-person frontend team. I owned the drag-and-drop calendar module, the complex forms, the dashboard and the shared component library.",
  scale: "35–40 people · 11 frontend engineers",
  stack: [
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Chakra UI",
    "GraphQL",
    "FullCalendar",
    "dnd-kit",
  ],
  hardPart: {
    eyebrow: "Case 01 · The hard part",
    title: "Real-time drag-and-drop scheduling",
    steps: [
      {
        eyebrow: "01",
        title: "Drag",
        body: "User moves an event on a customized dnd-kit calendar",
      },
      {
        eyebrow: "02",
        title: "Optimistic update",
        body: "UI moves instantly; the previous state is kept for rollback",
        accent: true,
      },
      {
        eyebrow: "03",
        title: "Conflict check",
        body: "Overlaps caught on the client first, then verified on the server",
      },
      {
        eyebrow: "04",
        title: "Persist",
        body: "Save through a GraphQL mutation",
      },
      {
        eyebrow: "05",
        title: "Sync",
        body: "Other users receive the change through GraphQL subscriptions",
        accent: true,
      },
    ] satisfies Card[],
    notes: [
      {
        title: "On conflict or error",
        body: "The optimistic change is rolled back to the last saved position.",
      },
      {
        title: "Why customize dnd-kit?",
        body: "We needed to drag items from outside into the calendar, and full control of the UI while dragging: previews, conflict highlighting, validation before drop.",
      },
    ] satisfies Card[],
  },
  result: {
    eyebrow: "Case 01 · Result",
    metric: "3s+ → <300ms",
    metricLabel:
      "Form loading time, after reworking how the form loads its code and data",
    cards: [
      {
        title: "Dependency optimization",
        body: "Cut what each form component pulls in on first render",
      },
      {
        title: "Code splitting",
        body: "Moved heavy parts of the form out of the initial bundle",
      },
      {
        title: "Lazy loading",
        body: "Loaded sections and widgets only when they're needed",
      },
      {
        title: "Smarter data fetching",
        body: "Changed how and when the form requests its data",
      },
    ] satisfies Card[],
    footnote:
      "Measured with Chrome DevTools Performance tab and React Profiler",
  },
} as const;

export const caseRecruitment = {
  id: "case-02",
  eyebrow: "Case 02 · Sungrove Tech Vietnam · 2024–2026",
  title: "Recruitment Agent System",
  lead: "UI for the full recruitment lifecycle · 20–25 people, 8–10 frontend engineers",
  lifecycle: [
    {
      title: "Job posting",
      body: "Draft → published, written in a block editor",
    },
    {
      title: "Candidate profiles",
      body: "Large datasets, server-side filter, sort and paging",
      accent: true,
    },
    { title: "Interview scheduling", body: "Calendar-based scheduling" },
    { title: "Feedback", body: "Collecting interviewers' feedback" },
    { title: "Onboarding handoff", body: "Passed on once a candidate is hired" },
  ] satisfies Card[],
  stack: [
    "Svelte",
    "TypeScript",
    "TailwindCSS",
    "BitsUI",
    "FullCalendar",
    "TanStack Query",
    "TanStack Table",
    "REST · NestJS",
  ],
  hardPart: {
    eyebrow: "Case 02 · The hard part",
    title: "A block editor when the library didn't support Svelte",
    cards: [
      {
        eyebrow: "Constraint",
        eyebrowTone: "dim",
        title: "BlockNote has no Svelte support",
        body: "We wanted BlockNote-style block editing for composing job postings.",
      },
      {
        eyebrow: "Decision",
        eyebrowTone: "dim",
        title: "Rebuild it on Tiptap",
        body: "Reimplemented BlockNote-style editing from scratch on Tiptap, which is headless and framework-agnostic.",
        accent: true,
      },
      {
        eyebrow: "Trade-off",
        eyebrowTone: "dim",
        title: "More code to own",
        body: "I built the slash menu, drag-and-drop block reordering, custom block types, and saving and loading content myself.",
      },
    ] satisfies Card[],
    also: {
      title: "Also in this project",
      body: "TanStack Query + Table with server-side filtering, sorting and pagination across large candidate datasets.",
    },
  },
} as const;

export const caseArchitecture = {
  id: "case-03",
  eyebrow: "Case 03 · Sungrove Tech Vietnam",
  title: "Keeping one frontend consistent across 11 engineers",
  cards: [
    {
      title: "Shared component library",
      body: "20+ Storybook-documented components adopted across 10+ modules, replacing duplicate implementations.",
    },
    {
      title: "Feature-based structure",
      body: "Applied across 10+ modules, so teams develop and ship features independently without cross-module conflicts.",
    },
    {
      title: "Stricter TypeScript and API contracts",
      body: "Stricter compiler settings, shared type contracts, no any in shared layers; REST and GraphQL contracts agreed with backend.",
    },
    {
      title: "Review culture and mentoring",
      body: "Primary reviewer for all 11 engineers; wrote the team's review checklist; mentored 2–3 junior and mid-level engineers.",
    },
  ] satisfies Card[],
} as const;

export const experience = {
  id: "experience",
  eyebrow: "Career · 2019–2026",
  title: "Japanese clients in every role since 2019",
  items: [
    {
      eyebrow: "2019–2020",
      eyebrowTone: "dim",
      title: "System Gear Vietnam",
      body: "Transport and warehouse systems for Japanese clients (VB6, SQL Server). Specs written in Japanese. Best Employee, Q3 and Q4 2019.",
    },
    {
      eyebrow: "2020–2022",
      eyebrowTone: "dim",
      title: "YC Solutions",
      body: "ERP web apps for Japanese clients with React, Next.js, Vue and Nuxt. Clarified requirements directly with clients.",
    },
    {
      eyebrow: "2022–2023",
      eyebrowTone: "dim",
      title: "Techbase Vietnam",
      body: "Enterprise data-processing systems for Japanese clients. Fullstack on microservices: Vue, Nuxt, NestJS.",
    },
    {
      eyebrow: "2023–2024",
      eyebrowTone: "dim",
      title: "I-Enter Asia",
      body: "Tech lead for 4–5 developers on a booking platform. Reported directly to Japanese clients and PMs.",
    },
    {
      eyebrow: "2024–2026",
      eyebrowTone: "dim",
      title: "Sungrove Tech Vietnam",
      body: "Senior frontend engineer on enterprise products for Japanese clients: Cases 01–03.",
      accent: true,
    },
  ] satisfies Card[],
} as const;

export const fit = {
  eyebrow: "Why MakinaRocks",
  title: "Where my experience meets industrial AI products",
  cards: [
    {
      title: "Data-heavy interfaces",
      body: "Dashboards, large server-side tables and real-time scheduling are what I've built for the last two years.",
    },
    {
      title: "An automation background",
      body: "My degree is in Control Engineering and Automation, so the factory side of the data isn't foreign to me.",
    },
    {
      title: "AI-assisted development",
      body: "I use Claude Code, Cursor and Copilot for code generation, refactoring and debugging.",
    },
    {
      title: "Cross-border collaboration",
      body: "7+ years building for Japanese clients, in every company I've worked at; JLPT N3; professional working English.",
    },
  ] satisfies Card[],
} as const;

export const contact = {
  id: "contact",
  eyebrow: "Thank you",
  title: "Questions are very welcome.",
} as const;
