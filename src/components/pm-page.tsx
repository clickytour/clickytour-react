import Link from 'next/link';
import { PageShell, SectionTitle, FeatureGrid, CheckList, FAQ } from '@/components/site';
import { ReactNode } from 'react';

type FeatureItem = { title: string; desc: string; icon?: string };
type StepItem = { title: string; desc: string };

type PMPageProps = {
  title: string;
  subtitle: string;
  introTitle: string;
  introText: string;
  highlights?: string[];
  features?: FeatureItem[];
  steps?: StepItem[];
  faq?: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
  ctaHrefPrimary?: string;
  ctaHrefSecondary?: string;
  diagram?: ReactNode;
};

export function PMPage({
  title,
  subtitle,
  introTitle,
  introText,
  highlights = [],
  features = [],
  steps = [],
  faq = [],
  ctaTitle,
  ctaText,
  ctaPrimary,
  ctaSecondary,
  ctaHrefPrimary,
  ctaHrefSecondary,
  diagram,
}: PMPageProps) {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-16 md:py-20">
        <div className="container">
          <div className={diagram ? "grid lg:grid-cols-[1fr_auto] gap-8 items-start" : ""}>
            <div>
              <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.12em]">For PM Companies</p>
              <h1 className="text-4xl md:text-5xl font-extrabold mt-2">{title}</h1>
              <p className="max-w-3xl mt-4 text-cyan-100 text-lg">{subtitle}</p>
            </div>
            {diagram && <div className="hidden lg:block max-w-sm">{diagram}</div>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <SectionTitle title={introTitle} />
            <p className="text-slate-600">{introText}</p>
          </div>
          {highlights.length > 0 && (
            <div className="card p-6 md:p-8">
              <h3 className="font-bold text-[#0F2B46] text-xl">Key highlights</h3>
              <div className="mt-4">
                <CheckList items={highlights} />
              </div>
            </div>
          )}
        </div>
      </section>

      {features.length > 0 && (
        <section className="section section-soft">
          <div className="container">
            <SectionTitle title="Core capabilities" subtitle="Built to support growth, control, and better booking outcomes." />
            <FeatureGrid items={features} />
          </div>
        </section>
      )}

      {steps.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionTitle title="How it works" />
            <div className="grid md:grid-cols-3 gap-4">
              {steps.map((step, index) => (
                <article key={step.title} className="card p-5">
                  <p className="text-xs font-semibold text-cyan-700">STEP {index + 1}</p>
                  <h3 className="font-bold mt-2 text-[#0F2B46]">{step.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {faq.length > 0 && (
        <section className="section section-soft">
          <div className="container max-w-4xl">
            <SectionTitle title="Frequently asked questions" />
            <FAQ items={faq} />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="rounded-xl bg-[#0F2B46] text-white p-8 md:p-10">
            <h2 className="text-3xl font-extrabold">{ctaTitle}</h2>
            <p className="text-cyan-100 mt-2">{ctaText}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {ctaHrefPrimary ? <Link href={ctaHrefPrimary} className="btn-primary">{ctaPrimary}</Link> : <button className="btn-primary">{ctaPrimary}</button>}
              {ctaHrefSecondary ? <Link href={ctaHrefSecondary} className="btn-secondary">{ctaSecondary}</Link> : <button className="btn-secondary">{ctaSecondary}</button>}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
