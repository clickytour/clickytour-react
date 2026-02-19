'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

const menu: NavItem[] = [
  { href: '/guests/', label: 'For Guest' },
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
  { href: '/about/', label: 'About Us' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact Us' },
];

const footerRoleLinks = [
  { href: '/guests/', label: 'For Guests' },
  { href: '/owners/', label: 'For Owners' },
  { href: '/service-providers/', label: 'For Service Providers' },
  { href: '/agents/', label: 'For Agents' },
  { href: '/pm-companies/', label: 'For PM Companies' },
];

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden rounded-sm px-3 py-2 text-[13px] font-semibold text-cyan-50/95 transition-colors hover:text-white before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 before:bg-cyan-500/20 before:transition-all before:duration-300 hover:before:w-full"
    >
      {label}
    </Link>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0F2B46] text-white border-b border-cyan-900/40">
      <div className="container py-3.5 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <Image src="/assets/Transparent-Logo-1-e1752933596331.png" alt="ClickyTour" width={100} height={100} className="w-11 h-11" />
          <div className="leading-tight">
            <p className="font-extrabold text-[17px]">ClickyTour</p>
            <p className="text-[11px] text-cyan-100/80">Travel • Real Estate • Services</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {menu.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <NavLink href={item.href} label={item.label} />
                <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full mt-2 min-w-[260px] rounded-xl border border-cyan-800/60 bg-[#0c2339] p-2 shadow-2xl">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block rounded-lg px-3 py-2 text-sm text-cyan-100/95 hover:bg-cyan-500/15 hover:text-white transition-colors"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link href="/get-started/" className="btn-primary text-sm">Get Started</Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-cyan-800/70 text-cyan-100"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-cyan-900/40 bg-[#0f2b46]">
          <nav className="container py-3 flex flex-col gap-1">
            {menu.map((item) =>
              item.children ? (
                <div key={item.href} className="rounded-lg border border-cyan-900/60 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-left text-cyan-100 font-semibold"
                    onClick={() => setMobileWorkOpen((v) => !v)}
                  >
                    <span>{item.label}</span>
                    <span>{mobileWorkOpen ? '−' : '+'}</span>
                  </button>
                  {mobileWorkOpen && (
                    <div className="bg-[#0c2339] p-1.5">
                      <Link href={item.href} className="block rounded-md px-3 py-2 text-sm text-cyan-100/90 hover:bg-cyan-500/15" onClick={() => setMobileOpen(false)}>
                        Overview
                      </Link>
                      {item.children.map((sub) => (
                        <Link key={sub.href} href={sub.href} className="block rounded-md px-3 py-2 text-sm text-cyan-100/90 hover:bg-cyan-500/15" onClick={() => setMobileOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2.5 text-cyan-100 font-semibold hover:bg-cyan-500/15"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link href="/get-started/" className="btn-primary mt-2 text-center" onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const cols = [
    {
      t: 'Partner With Us',
      l: footerRoleLinks,
    },
    {
      t: 'Resources & Help',
      l: [
        { href: '/help-center/', label: 'Help Center' },
        { href: '/faq/', label: 'FAQ' },
        { href: '/support-tickets/', label: 'Support Tickets' },
        { href: '/affiliate-faq/', label: 'Affiliate FAQ' },
        { href: '/blog-updates/', label: 'Blog & Updates' },
      ],
    },
    {
      t: 'Company & Legal',
      l: [
        { href: '/about-clickytour/', label: 'About ClickyTour' },
        { href: '/privacy-policy/', label: 'Privacy Policy' },
        { href: '/terms-conditions/', label: 'Terms & Conditions' },
        { href: '/cookie-policy/', label: 'Cookie Policy' },
        { href: '/contact/', label: 'Contact' },
      ],
    },
  ];

  return (
    <footer className="bg-[#0F2B46] text-white mt-14">
      <div className="section border-b border-cyan-900/40">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-cyan-300 text-sm uppercase tracking-[0.12em]">Explore Our Platform</p>
            <h3 className="text-[30px] md:text-[36px] leading-tight font-extrabold mt-2 max-w-2xl">One ecosystem where travelers, hosts, and partners grow together.</h3>
            <p className="text-cyan-100/80 mt-3 text-[15px]">Built for guests, owners, providers, agents, and property managers.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-start lg:justify-end">
            {footerRoleLinks.map((m) => (
              <Link key={m.href} href={m.href} className="rounded-full border border-cyan-700 bg-cyan-900/35 px-4 py-2 text-sm text-cyan-100 hover:bg-cyan-800/55 transition-colors">
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="container py-11 grid sm:grid-cols-2 lg:grid-cols-4 gap-9">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/assets/Transparent-Logo-1-e1752933596331.png" alt="ClickyTour" width={100} height={100} className="w-14 h-14" />
            <div>
              <p className="font-extrabold text-xl">ClickyTour</p>
              <p className="text-[12px] text-cyan-100/80">Travel • Real Estate • Services</p>
            </div>
          </div>
          <p className="mt-4 text-cyan-100/90 text-sm">Where Travelers, Hosts & Partners Connect</p>
          <div className="mt-4 flex items-center gap-3">
            <Link href="/language/" aria-label="Language" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-700 text-cyan-100 hover:bg-cyan-800/50">🌐</Link>
            <Link href="https://www.facebook.com/" aria-label="Social" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-700 text-cyan-100 hover:bg-cyan-800/50">f</Link>
            <Link href="https://www.youtube.com/" aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-700 text-cyan-100 hover:bg-cyan-800/50">▶</Link>
          </div>
        </div>

        {cols.map((c) => (
          <div key={c.t}>
            <h4 className="font-bold mb-3 text-cyan-50">{c.t}</h4>
            <ul className="space-y-2.5 text-cyan-100/90 text-sm">
              {c.l.map((x) => (
                <li key={x.label}>
                  <Link href={x.href} className="hover:text-white transition-colors">
                    {x.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-cyan-900/40 text-cyan-100/80 text-xs py-4 text-center">© 2026 ClickyTour. All rights reserved.</div>
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
