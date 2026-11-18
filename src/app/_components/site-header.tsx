import { nav, profile } from "../content";

export function SiteHeader() {
  return (
    <header className="tone-dark sticky top-0 z-10 border-b border-line bg-page/90 backdrop-blur">
      <nav
        aria-label="Sections"
        className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3 sm:px-10"
      >
        <a
          href="#hero-title"
          className="shrink-0 font-display text-sm font-semibold text-fg"
        >
          {profile.name}
        </a>
        {/* Scrolls horizontally on narrow screens instead of needing a toggle. */}
        <ul className="-mx-2 flex min-w-0 items-center gap-1 overflow-x-auto px-2">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block whitespace-nowrap rounded-full px-3 py-1.5 font-mono text-xs text-fg-muted transition-colors hover:bg-chip hover:text-fg sm:text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
