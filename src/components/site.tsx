'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useMemo, useState } from 'react';
import { MenuCategory, MenuLink, roleMenus } from './site-menu';

const topNavItems: Array<{
  href: string;
  label: string;
  megaMenu?: MenuCategory[];
  children?: MenuLink[];
}> = [
  { href: '/guests/', label: 'For Guests', megaMenu: roleMenus.guests },
  { href: '/owners/', label: 'For Owners', megaMenu: roleMenus.owners },
  { href: '/service-providers/', label: 'For Service Providers', megaMenu: roleMenus.serviceProviders },
  { href: '/agents/', label: 'For Agents', megaMenu: roleMenus.agents },
  { href: '/pm-companies/', label: 'For PM Companies', megaMenu: roleMenus.pmCompanies },
  {
    href: '/work-with-us/',
    label: 'Work With Us',
    children: [
      { href: '/work-with-us-quiz/', label: 'Find Your Role - Quiz' },
      { href: '/find-staff-contractors-job-seekers/', label: 'Job Opportunities' },
      { href: '/find-staff/', label: 'Find Staff & Contractors' },
      { href: '/find-staff-contractors-directory/', label: 'Staff Directory' },
      { href: '/find-staff-contractors-quick-request/', label: 'Quick Staff Request' },
      { href: '/work-with-us-affiliate/', label: 'Affiliate Programme' },
    ],
  },
  {
    href: '/tours-activities/',
    label: 'Explore',
    children: [
      { href: '/tours-activities/', label: 'Tours & Activities' },
      { href: '/vacation-rentals/', label: 'Vacation Rentals' },
      { href: '/search-rentals/', label: 'Search Rentals' },
      { href: '/offers/', label: 'Offers & Deals' },
      { href: '/real-estate/', label: 'Real Estate' },
      { href: '/destinations-2/', label: 'Destinations' },
      { href: '/marketplace/', label: 'Marketplace' },
      { href: '/blog/', label: 'Blog' },
    ],
  },
  {
    href: '/about/',
    label: 'About',
    children: [
      { href: '/about/', label: 'About Us' },
      { href: '/team/', label: 'Our Team' },
      { href: '/contact/', label: 'Contact Us' },
      { href: '/general-faq/', label: 'FAQ' },
      { href: '/support/', label: 'Support' },
    ],
  },
];

function flattenMenu(menu: MenuCategory[]) {
  return menu.flatMap((category) => category.items);
}

function VLogo({ className = 'w-7 h-7' }: { className?: string }) {
  return <Image src="/assets/v-logo-clean.png" alt="" width={120} height={120} className={className} />;
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-[#0F2B46] text-white">
      <div className="container flex items-center justify-between h-12">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <VLogo className="w-9 h-9" />
          <span className="font-bold text-[15px] tracking-tight">ClickyTour</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 ml-8">
          {topNavItems.map((item) => {
            if (item.children) {
              return (
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
              );
            }

            if (item.megaMenu) {
              return (
                <div key={item.href} className="relative group">
                  <Link href={item.href} className="px-2.5 py-1.5 text-[12px] font-medium text-cyan-100/90 hover:text-white transition-colors whitespace-nowrap">
                    {item.label}
                  </Link>
                  <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 absolute left-0 top-full pt-1 z-50">
                    <div className="w-[760px] rounded-xl border border-cyan-800/50 bg-[#0c2339] p-4 shadow-xl">
                      <div className="grid grid-cols-3 gap-4">
                        {item.megaMenu.map((cat) => (
                          <div key={cat.label}>
                            <p className="text-[11px] uppercase tracking-wide text-cyan-300 mb-2">{cat.label}</p>
                            <ul className="space-y-1.5">
                              {cat.items.slice(0, 6).map((sub) => (
                                <li key={sub.href}>
                                  <Link href={sub.href} className="text-[12px] text-cyan-100/90 hover:text-white transition-colors leading-snug">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link key={item.href} href={item.href} className="px-2.5 py-1.5 text-[12px] font-medium text-cyan-100/90 hover:text-white transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/get-started/" className="hidden lg:inline-flex ml-auto items-center px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-[12px] font-semibold transition-colors whitespace-nowrap">
          Get Started
        </Link>

        <button aria-label="Toggle menu" className="lg:hidden p-2 text-cyan-100" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-cyan-900/40 bg-[#0F2B46]">
          <nav className="container py-3 flex flex-col gap-0.5">
            {topNavItems.map((item) => (
              <div key={item.href}>
                {(item.children || item.megaMenu) ? (
                  <>
                    <button className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] text-cyan-100 font-medium" onClick={() => setSubOpen((v) => (v === item.href ? null : item.href))}>
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${subOpen === item.href ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" /></svg>
                    </button>
                    {subOpen === item.href && (
                      <div className="pl-4 pb-1">
                        {(item.children ?? flattenMenu(item.megaMenu || [])).map((sub) => (
                          <Link key={sub.href} href={sub.href} className="block px-3 py-2 text-[12px] text-cyan-100/80 hover:text-white" onClick={() => setMobileOpen(false)}>
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} className="block px-3 py-2.5 text-[13px] text-cyan-100 font-medium hover:text-white" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link href="/get-started/" className="mx-3 mt-2 text-center py-2 rounded-full bg-cyan-500 text-white text-[13px] font-semibold" onClick={() => setMobileOpen(false)}>
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SidebarLayout({
  title,
  menu,
  children,
}: {
  title: string;
  menu: MenuCategory[];
  children: ReactNode;
}) {
  const links = useMemo(() => flattenMenu(menu), [menu]);
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false);

  return (
    <section className="section pt-8">
      <div className="container">
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[#0F2B46]">{title} navigation</p>
            <button className="text-xs px-3 py-1.5 rounded-full border border-cyan-200 text-cyan-800" onClick={() => setMobileTabsOpen((v) => !v)}>
              {mobileTabsOpen ? 'Hide menu' : 'Show menu'}
            </button>
          </div>
          {mobileTabsOpen && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="whitespace-nowrap rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3 py-1.5">
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-8">
          <aside className="hidden lg:block card p-4 h-max sticky top-16">
            <p className="text-xs uppercase tracking-wider text-cyan-700 font-semibold mb-3">{title}</p>
            <div className="space-y-4">
              {menu.map((category) => (
                <div key={category.label}>
                  <p className="text-xs text-slate-500 font-semibold mb-1.5">{category.label}</p>
                  <ul className="space-y-1.5">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-sm text-slate-700 hover:text-cyan-700 transition-colors leading-snug">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>

          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}

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
      t: 'Company',
      l: [
        { href: '/about/', label: 'About ClickyTour' },
        { href: '/contact/', label: 'Contact' },
        { href: '/blog/', label: 'News & Updates' },
      ],
    },
    {
      t: 'Legal',
      l: [
        { href: '/privacy-policy/', label: 'Privacy Policy' },
        { href: '/terms/', label: 'Terms & Conditions' },
        { href: '/cookie-policy/', label: 'Cookie Policy' },
        { href: '/gdpr-compliance/', label: 'GDPR Compliance' },
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

      <div className="container py-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <VLogo className="w-11 h-11" />
            <div>
              <p className="font-bold text-lg">ClickyTour</p>
              <p className="text-[11px] text-cyan-100/70">Travel • Real Estate • Services</p>
            </div>
          </div>
          <p className="mt-3 text-cyan-100/80 text-sm">Where Travelers, Hosts & Partners Connect</p>
        </div>

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

      <div className="border-t border-cyan-900/40 text-cyan-100/60 text-xs py-4 text-center">© 2026 ClickyTour. All rights reserved.</div>
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

export function Hero({ title, subtitle, ctaA = 'Start now', ctaB = 'Book demo', diagram }: { title: string; subtitle: string; ctaA?: string; ctaB?: string; diagram?: React.ReactNode }) {
  return (
    <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
      <div className="container">
        <div className={diagram ? "grid lg:grid-cols-[1fr_auto] gap-8 items-start" : ""}>
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold max-w-4xl">{title}</h1>
            <p className="max-w-3xl mt-4 text-cyan-100 text-lg">{subtitle}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="btn-primary">{ctaA}</button>
              <button className="btn-secondary">{ctaB}</button>
            </div>
          </div>
          {diagram && <div className="hidden lg:block max-w-sm">{diagram}</div>}
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
