
# Project Instructions

## 1. Project Overview

Build a simple application using:
- Next.js App Router
- TypeScript
- Tailwind CSS

Prioritize simplicity, maintainability and good UX.

## 2. Architecture

- Use Next.js App Router.
- Keep the project structure simple.
- Use Server Components by default.
- Use Client Components only when interaction is required.
- Keep components close to the pages that use them.
- Extract shared components only when reused.

Do not introduce unnecessary architectural layers.

## 3. TypeScript

- Enable strict mode.
- Never use `any`.
- Define clear types for component props.
- Avoid unnecessary type assertions.
- Keep types close to where they are used.

## 4. React and Next.js

- Prefer Server Components.
- Use native fetch for data fetching.
- Use Server Actions when appropriate.
- Use React state for simple interactions.
- Avoid unnecessary useEffect.
- Avoid unnecessary global state.
- Use Next.js built-in features where possible.

## 5. Styling

- Use Tailwind CSS.
- Maintain consistent spacing and typography.
- Build responsive layouts.
- Avoid inline styles unless necessary.
- Reuse existing UI components.
- Do not install additional UI libraries without approval.

## 6. Code Quality

- Write clean, readable code.
- Keep components small and focused.
- Avoid premature abstraction.
- Avoid unnecessary custom hooks.
- Do not duplicate logic.
- Follow existing naming conventions.

## 7. Performance

- Optimize images using next/image.
- Avoid unnecessary client-side JavaScript.
- Use dynamic imports only when beneficial.
- Avoid unnecessary dependencies.

## 8. Error Handling

- Handle loading and error states.
- Validate user input when necessary.
- Provide clear user feedback.
- Do not silently swallow errors.

## 9. Workflow

Before implementing:
1. Inspect the existing project.
2. Understand the requested feature.
3. Identify affected files.
4. Implement the simplest maintainable solution.
5. Run lint and typecheck.
6. Run relevant tests.

Do not modify unrelated files.
Do not install dependencies without approval.
Do not rewrite working code without a valid reason.

## 10. Git

- Do not commit without permission.
- Do not overwrite user changes.
- Do not use destructive Git commands.
