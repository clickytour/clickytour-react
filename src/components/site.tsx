import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

const menu = [
  { href: '/', label: 'Home' },
  { href: '/guests', label: 'Guests' },
  { href: '/owners', label: 'Owners' },
  { href: '/service-providers', label: 'Service Providers' },
  { href: '/agents', label: 'Agents' },
  { href: '/pm-companies', label: 'PM Companies' },
];

export function Header() {
  return (
    <header className="bg-[#0F2B46] text-white border-b border-cyan-900/40">
      <div className="container py-3.5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/assets/Transparent-Logo-1-e1752933596331.png" alt="ClickyTour" width={44} height={44} />
          <div className="leading-tight">
            <p className="font-extrabold text-[17px]">ClickyTour</p>
            <p className="text-[11px] text-cyan-100/80">Travel • Real Estate • Services</p>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-4 text-[13px] font-semibold">
          {menu.map((item) => (
            <Link key={item.href} href={item.href} className="text-cyan-50/90 hover:text-white transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        <button className="btn-primary text-sm">Get Started</button>
      </div>
    </header>
  );
}

export function Footer() {
  const cols = [
    { t: 'Partner With Us', l: ['For Guests', 'For Owners', 'For Service Providers', 'For Agents', 'For PM Companies'] },
    { t: 'Resources & Help', l: ['Help Center', 'FAQ', 'Support Tickets', 'Affiliate FAQ', 'Blog & Updates'] },
    { t: 'Company & Legal', l: ['About ClickyTour', 'Privacy Policy', 'Terms & Conditions', 'Cookie Policy', 'Contact'] },
  ];
  return (
    <footer className="bg-[#0F2B46] text-white mt-14">
      <div className="section border-b border-cyan-900/40">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-cyan-300 text-sm">Explore Our Platform</p>
            <h3 className="text-[34px] font-extrabold mt-2 max-w-xl">One ecosystem for rentals, real estate, and local services.</h3>
            <p className="text-cyan-100/80 mt-3 text-[15px]">Built for guests, owners, providers, agents and property managers.</p>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-start md:justify-end">
            {menu.slice(1).map((m) => (
              <Link key={m.href} href={m.href} className="pill !bg-cyan-900/40 !text-cyan-100 !border-cyan-700">
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container py-11 grid md:grid-cols-4 gap-8">
        <div>
          <Image src="/assets/Transparent-Logo-1-e1752933596331.png" alt="ClickyTour" width={68} height={68} />
          <p className="mt-3 text-cyan-100/90 text-sm">Where Travelers, Hosts, and Partners Connect.</p>
        </div>
        {cols.map((c) => (
          <div key={c.t}>
            <h4 className="font-bold mb-3">{c.t}</h4>
            <ul className="space-y-2 text-cyan-100/85 text-sm">
              {c.l.map((x) => (
                <li key={x}>• {x}</li>
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
