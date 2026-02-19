import Link from 'next/link';
import { PageShell } from '@/components/site';

type Section = {
  title: string;
  body?: string;
  points?: string[];
};

type AgentsSubpageProps = {
  title: string;
  subtitle: string;
  cardTitle: string;
  cards: string[];
  sections: Section[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
};

export function AgentsSubpageTemplate({
  title,
  subtitle,
  cardTitle,
  cards,
  sections,
  ctaTitle,
  ctaBody,
  ctaPrimary,
  ctaSecondary,
}: AgentsSubpageProps) {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Agents</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{title}</h1>
          <p className="text-cyan-100 mt-4 max-w-3xl">{subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container max-w-5xl space-y-8">
          <article className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0F2B46]">{cardTitle}</h2>
            <div className="mt-4 grid md:grid-cols-3 gap-3">
              {cards.map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </article>

          {sections.map((section) => (
            <article key={section.title} className="card p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#0F2B46]">{section.title}</h3>
              {section.body && <p className="mt-3 text-slate-600">{section.body}</p>}
              {section.points && (
                <ul className="mt-4 space-y-2 text-slate-700">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-2"><span className="text-cyan-700">•</span><span>{point}</span></li>
                  ))}
                </ul>
              )}
            </article>
          ))}

          <article className="rounded-xl bg-[#0F2B46] text-white p-7 md:p-9">
            <h2 className="text-2xl md:text-3xl font-extrabold">{ctaTitle}</h2>
            <p className="text-cyan-100 mt-2">{ctaBody}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={ctaPrimary.href} className="btn-primary">{ctaPrimary.label}</Link>
              {ctaSecondary && <Link href={ctaSecondary.href} className="btn-secondary">{ctaSecondary.label}</Link>}
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
