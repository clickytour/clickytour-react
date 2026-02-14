const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/for-guests", label: "For Guests" },
  { href: "/for-owners", label: "For Owners" },
  { href: "/collaborate", label: "Collaborate" },
  { href: "/about", label: "About" },
];

const partnerNav = [
  { href: "/partner-pmc", label: "Partner PMC" },
  { href: "/pmc-apply", label: "PMC Apply" },
  { href: "/partner-service-providers", label: "Service Providers" },
  { href: "/service-apply", label: "Service Apply" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="/" className="text-lg font-semibold text-slate-900">
            Villa4you React
          </a>
          <a href="/free-evaluation" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">
            Free Evaluation
          </a>
        </div>

        <nav className="flex flex-wrap gap-2" aria-label="Primary">
          {primaryNav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-slate-300">
              {item.label}
            </a>
          ))}
        </nav>

        <nav className="flex flex-wrap gap-2" aria-label="Partner flows">
          {partnerNav.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm text-blue-900 hover:border-blue-300">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
