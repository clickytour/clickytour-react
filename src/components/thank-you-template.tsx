import React from 'react';
import { PageShell, Hero, SectionTitle } from '@/components/site';

interface Step {
  icon: string;
  text: string;
}

interface UrgentSection {
  text: string;
  refId?: string;
}

interface ThankYouTemplateProps {
  icon: string;
  title: string;
  subtitle: string;
  steps: Step[];
  urgentSection?: UrgentSection;
  ctaLabel: string;
  ctaHref: string;
  backLabel?: string;
  backHref?: string;
}

export default function ThankYouTemplate({
  icon,
  title,
  subtitle,
  steps,
  urgentSection,
  ctaLabel,
  ctaHref,
  backLabel,
  backHref,
}: ThankYouTemplateProps) {
  return (
    <PageShell>
      <Hero title={`${icon} ${title}`} subtitle={subtitle} ctaA={ctaLabel} ctaB="Contact Us" />

      <div className="container">
        <section className="section section-soft">
          <SectionTitle title="What happens next?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card p-4 flex items-start space-x-4"
                aria-label={`Step ${index + 1}`}
              >
                <div className="text-3xl">{step.icon}</div>
                <div className="text-slate-800 font-semibold">{step.text}</div>
              </div>
            ))}
          </div>
        </section>

        {urgentSection && (
          <section className="section section-soft" id={urgentSection.refId}>
            <SectionTitle title="Need urgent help?" />
            <p className="text-slate-800 font-semibold">{urgentSection.text}</p>
          </section>
        )}

        <section className="section">
          <div className="flex flex-col md:flex-row justify-start space-y-4 md:space-y-0 md:space-x-4">
            <a
              href={ctaHref}
              className="btn btn-primary"
              aria-label={ctaLabel}
            >
              {ctaLabel}
            </a>
            {backLabel && backHref && (
              <a href={backHref} className="btn btn-outline">
                {backLabel}
              </a>
            )}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
