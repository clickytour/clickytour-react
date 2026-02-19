'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

/* ── Nav data ─────────────────────────────────────────── */
type NavItem = { href: string; label: string; children?: { href: string; label: string }[] };

const navItems: NavItem[] = [
  { href: '/guests/', label: 'For Guests' },
  { href: '/owners/', label: 'For Owners' },
  { href: '/service-providers/', label: 'For Service Providers' },
  { href: '/agents/', label: 'For Agents' },
  { href: '/pm-companies/', label: 'For PM Companies' },
  {
    href: '/work-with-us/',
    label: 'Work With Us',
    children: [
      { href: '/work-with-us-quiz/', label: 'Find Your Role - Quiz' },
      { href: '/find-staff-contractors-job-seekers/', label: 'Job Opportunities' },
      { href: '/work-with-us-affiliate/', label: 'Affiliate Programme' },
    ],
  },
];

/* ── V logo – clean mark without circle ── */
function VLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <Image src="/assets/v-logo-clean.png" alt="" width={120} height={120} className={className} />
  );
}

/* ── Header ────────────────────────────────────────────── */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-[#0F2B46] text-white">
      <div className="container flex items-center justify-between h-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <VLogo className="w-9 h-9" />
          <span className="font-bold text-[15px] tracking-tight">ClickyTour</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 ml-8">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link href={item.href} className="px-2.5 py-1.5 text-[12px] font-medium text-cyan-100/90 hover:text-white transition-colors whitespace-nowrap">
                  {item.label}
                </Link>
                <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 absolute left-0 top-full pt-1 z-50">
                  <div className="min-w-[220px] rounded-lg border border-cyan-800/50 bg-[#0c2339] py-1 shadow-xl">
                    {item.children.map((sub) => (
                      <Link key={sub.href} href={sub.href} className="block px-3.5 py-2 text-[12px] text-cyan-100/90 hover:bg-cyan-500/15 hover:text-white transition-colors">
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="px-2.5 py-1.5 text-[12px] font-medium text-cyan-100/90 hover:text-white transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA */}
        <Link href="/get-started/" className="hidden lg:inline-flex ml-auto items-center px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-[12px] font-semibold transition-colors whitespace-nowrap">
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <button aria-label="Toggle menu" className="lg:hidden p-2 text-cyan-100" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-cyan-900/40 bg-[#0F2B46]">
          <nav className="container py-3 flex flex-col gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <button className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] text-cyan-100 font-medium" onClick={() => setSubOpen((v) => (v === item.href ? null : item.href))}>
                    {item.label}
                    <svg className={`w-4 h-4 transition-transform ${subOpen === item.href ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                  </button>
                  {subOpen === item.href && (
                    <div className="pl-4 pb-1">
                      {item.children.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="block px-3 py-2 text-[12px] text-cyan-100/80 hover:text-white" onClick={() => setMobileOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="px-3 py-2.5 text-[13px] text-cyan-100 font-medium hover:text-white" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/get-started/" className="mx-3 mt-2 text-center py-2 rounded-full bg-cyan-500 text-white text-[13px] font-semibold" onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ── Footer ────────────────────────────────────────────── */
export function Footer() {
  const footerCols = [
    {
      t: 'Partner With Us',
      l: [
        { href: '/guests/', label: 'For Guests' },
        { href: '/owners/', label: 'For Owners' },
        { href: '/service-providers/', label: 'For Service Providers' },
        { href: '/agents/', label: 'For Agents' },
        { href: '/pm-companies/', label: 'For PM Companies' },
      ],
    },
    {
      t: 'Resources & Help',
      l: [
        { href: '/help/', label: 'Help Center' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support/', label: 'Support Tickets' },
        { href: '/work-with-us-affiliate/', label: 'Affiliate FAQ' },
        { href: '/blog/', label: 'Blog & Updates' },
      ],
    },
    {
      t: 'Company & Legal',
      l: [
        { href: '/about/', label: 'About ClickyTour' },
        { href: '/privacy-policy/', label: 'Privacy Policy' },
        { href: '/terms/', label: 'Terms & Conditions' },
        { href: '/cookie-policy/', label: 'Cookie Policy' },
        { href: '/contact/', label: 'Contact' },
      ],
    },
  ];

  const rolePills = [
    { href: '/guests/', label: 'For Guests' },
    { href: '/owners/', label: 'For Owners' },
    { href: '/service-providers/', label: 'For Service Providers' },
    { href: '/agents/', label: 'For Agents' },
    { href: '/pm-companies/', label: 'For PM Companies' },
  ];

  return (
    <footer className="bg-[#0F2B46] text-white mt-14">
      {/* Row 1: Explore banner */}
      <div className="border-b border-cyan-900/40">
        <div className="container py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">Explore Our Platform</p>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-2 leading-tight">Built for guests, owners, providers, agents and property managers.</h3>
            <p className="text-cyan-100/70 mt-2 text-sm">Where Travelers, Hosts, and Partners Connect.</p>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {rolePills.map((p) => (
              <Link key={p.href} href={p.href} className="px-3 py-1.5 text-[11px] font-medium rounded-full border border-cyan-700/60 text-cyan-100/90 hover:bg-cyan-800/40 hover:text-white transition-colors">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: 4-column grid */}
      <div className="container py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo column */}
        <div>
          <div className="flex items-center gap-2">
            <VLogo className="w-11 h-11" />
            <div>
              <p className="font-bold text-lg">ClickyTour</p>
              <p className="text-[11px] text-cyan-100/70">Travel • Real Estate • Services</p>
            </div>
          </div>
          <p className="mt-3 text-cyan-100/80 text-sm">Where Travelers, Hosts & Partners Connect</p>
          <div className="mt-4 flex items-center gap-2.5">
            <Link href="#" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-800/60 text-cyan-200/80 hover:bg-cyan-800/40 hover:text-white transition-colors text-[11px]">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-800/60 text-cyan-200/80 hover:bg-cyan-800/40 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </Link>
            <Link href="#" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-800/60 text-cyan-200/80 hover:bg-cyan-800/40 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z"/></svg>
            </Link>
            <Link href="#" aria-label="YouTube" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-800/60 text-cyan-200/80 hover:bg-cyan-800/40 hover:text-white transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </Link>
          </div>
        </div>

        {/* Link columns */}
        {footerCols.map((c) => (
          <div key={c.t}>
            <h4 className="font-bold text-sm mb-3 text-cyan-50">{c.t}</h4>
            <ul className="space-y-2 text-[13px]">
              {c.l.map((x) => (
                <li key={x.label}>
                  <Link href={x.href} className="text-cyan-100/80 hover:text-white transition-colors">{x.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Row 3: Copyright */}
      <div className="border-t border-cyan-900/40 text-cyan-100/60 text-xs py-4 text-center">
        © 2026 ClickyTour. All rights reserved.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function Hero({ title, subtitle, ctaA = 'Start now', ctaB = 'Book demo' }: { title: string; subtitle: string; ctaA?: string; ctaB?: string }) {
  return (
    <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl">{title}</h1>
        <p className="max-w-3xl mt-4 text-cyan-100 text-lg">{subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="btn-primary">{ctaA}</button>
          <button className="btn-secondary">{ctaB}</button>
        </div>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-7">
      {eyebrow && <p className="text-cyan-700 font-semibold text-sm">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold text-slate-900 mt-1">{title}</h2>
      {subtitle && <p className="text-slate-500 mt-2 max-w-3xl">{subtitle}</p>}
    </div>
  );
}

export function FeatureGrid({ items, cols = 3 }: { items: { title: string; desc: string; icon?: string; tag?: string }[]; cols?: number }) {
  const cls = cols === 4 ? 'md:grid-cols-4' : cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';
  return (
    <div className={`grid ${cls} gap-4`}>
      {items.map((item) => (
        <article key={item.title} className="card p-5">
          <p className="text-2xl">{item.icon || '✨'}</p>
          <h3 className="font-bold mt-3">{item.title}</h3>
          <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
          {item.tag && <span className="inline-block mt-3 text-xs px-2 py-1 rounded-full bg-cyan-50 text-cyan-700">{item.tag}</span>}
        </article>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid md:grid-cols-2 gap-3">
      {items.map((i) => (
        <li key={i} className="card p-4 font-medium text-slate-700">✅ {i}</li>
      ))}
    </ul>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.q} className="card p-4 group">
          <summary className="font-semibold cursor-pointer list-none flex justify-between">{item.q}<span className="text-cyan-700">⌄</span></summary>
          <p className="text-slate-600 mt-3 text-sm">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
