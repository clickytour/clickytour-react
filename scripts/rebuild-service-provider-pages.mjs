import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const slugs = [
  'service-providers-list-promote',
  'service-providers-list-service',
  'service-providers-sale-rent-business',
  'service-providers-free-visibility',
  'service-providers-dashboard',
  'service-providers-what-you-can-offer',
  'service-providers-for-guests',
  'service-providers-for-guests-dining-nightlife',
  'service-providers-for-guests-local-activities',
  'service-providers-for-guests-wellness-spa',
  'service-providers-for-guests-transfers-transport',
  'service-providers-for-guests-vehicle-rentals',
  'service-providers-for-guests-concierge-event',
  'service-providers-for-guests-outdoor-activities',
  'service-providers-for-guests-cultural-performances',
  'service-providers-for-guests-attractions-family',
  'service-providers-photo-viewpoint-tours',
  'service-providers-for-guests-medical-health',
  'service-providers-for-guests-retreats-education',
  'service-providers-for-guests-seasonal-events',
  'service-providers-for-guests-volunteer',
  'service-providers-for-owners',
  'service-providers-for-owners-cleaning-services',
  'service-providers-for-owners-plumbing-electrical',
  'service-providers-for-owners-laundry-linen',
  'service-providers-for-owners-checkin-checkout',
  'service-providers-for-owners-technical-repairs',
  'service-providers-for-owners-home-maintenance',
  'service-providers-find-staff',
  'service-providers-grow-your-reach',
  'service-providers-promotion-tools',
  'service-providers-invest-tourism',
  'service-providers-faq-pricing',
  'service-providers-faq',
  'service-providers-plans-overview',
];

const emptyFallback = new Set([
  'service-providers-for-guests-wellness-spa',
  'service-providers-photo-viewpoint-tours',
  'service-providers-promotion-tools',
  'service-providers-invest-tourism',
  'service-providers-faq-pricing',
  'service-providers-faq',
  'service-providers-plans-overview',
]);

const decode = (s = '') => s
  .replace(/&#8217;/g, "'")
  .replace(/&#8211;/g, '–')
  .replace(/&#8220;|&#8221;/g, '"')
  .replace(/&#038;/g, '&')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#[0-9]+;/g, ' ')
  .replace(/&nbsp;/g, ' ');

const cleanText = (s = '') => decode(s)
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const extract = (html, tag) => {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const out = [];
  let m;
  while ((m = re.exec(html))) {
    const t = cleanText(m[1]);
    if (t && t.length > 2) out.push(t);
  }
  return [...new Set(out)];
};

const toTitle = (slug) => slug
  .replace(/^service-providers-/, '')
  .split('-')
  .map((w) => (w === 'faq' ? 'FAQ' : w.charAt(0).toUpperCase() + w.slice(1)))
  .join(' ');

const fallbackContent = (slug) => {
  const title = toTitle(slug);
  return {
    title,
    subtitle: `A clear, practical overview for ${title.toLowerCase()} on ClickyTour.`,
    overview: [
      `This page helps service providers understand how to use ClickyTour for ${title.toLowerCase()}.`,
      'Set up your profile, present your offer clearly, and make it easy for guests or owners to contact you.',
      'Use high-quality photos, transparent pricing, and clear service details to improve trust and conversions.',
    ],
    features: [
      'Structured listing and category placement',
      'Better visibility with complete profile details',
      'Clear communication and inquiry flow',
      'Flexible plans for different growth stages',
      'Actionable insights to improve performance',
      'Support resources for faster onboarding',
    ],
    ctas: ['Get Started', 'Contact Support'],
  };
};

const renderPage = ({ title, subtitle, overview, features, ctas }) => `import { PageShell } from '@/components/site';

const subtitle = ${JSON.stringify(subtitle)};
const overview = ${JSON.stringify(overview, null, 2)};
const features = ${JSON.stringify(features, null, 2)};
const ctas = ${JSON.stringify(ctas, null, 2)};

export default function ServiceProvidersSubpage() {
  return (
    <PageShell>
      <section className="bg-gradient-to-r from-[#0F2B46] to-[#164E73] text-white py-14 md:py-16">
        <div className="container">
          <p className="text-cyan-200 text-xs font-semibold uppercase tracking-[0.1em]">For Service Providers</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">${title}</h1>
          <p className="text-cyan-100 mt-4 max-w-3xl">{subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <article className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0F2B46]">Overview</h2>
            <div className="mt-4 space-y-3 text-slate-600 leading-relaxed">
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>

          <article className="card p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#0F2B46]">Key Highlights</h2>
            <div className="mt-5 grid md:grid-cols-2 gap-4">
              {features.map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 p-4 bg-white">
                  <p className="font-semibold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl bg-[#0F2B46] text-white p-7 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold">Ready to move forward?</h2>
            <p className="text-cyan-100 mt-2">Take the next step and strengthen your provider visibility on ClickyTour.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="btn-primary">{ctas[0] ?? 'Get Started'}</button>
              <button className="btn-secondary">{ctas[1] ?? 'Learn More'}</button>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
`;

for (const slug of slugs) {
  const url = `https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const data = await res.json();
  const page = data?.[0];

  let content;
  if (!page || emptyFallback.has(slug) || !cleanText(page?.content?.rendered || '')) {
    content = fallbackContent(slug);
  } else {
    const html = page.content.rendered;
    const title = cleanText(page.title.rendered) || toTitle(slug);
    const headings = [...extract(html, 'h1'), ...extract(html, 'h2'), ...extract(html, 'h3'), ...extract(html, 'h4')]
      .filter((t) => t.toLowerCase() !== title.toLowerCase());
    const paragraphs = extract(html, 'p').filter((t) => t.length > 30 && !/lorem ipsum/i.test(t));
    const bullets = extract(html, 'li');
    const buttons = [...extract(html, 'button'), ...extract(html, 'a')].filter((t) => t.length < 40);

    const subtitle = paragraphs[0] || headings[0] || `Discover how ${title.toLowerCase()} works on ClickyTour.`;
    const overview = [...new Set([...(paragraphs.slice(0, 3)), ...(headings.slice(0, 2))])].slice(0, 4);
    const featurePool = [...new Set([...bullets, ...headings.slice(0, 8), ...paragraphs.slice(1, 4)])]
      .filter((t) => t.length > 4 && t.length < 120)
      .slice(0, 8);
    const ctas = [...new Set(buttons)].slice(0, 2);

    content = {
      title,
      subtitle,
      overview: overview.length ? overview : fallbackContent(slug).overview,
      features: featurePool.length ? featurePool : fallbackContent(slug).features,
      ctas: ctas.length ? ctas : fallbackContent(slug).ctas,
    };
  }

  const filePath = join(process.cwd(), 'src', 'app', slug, 'page.tsx');
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, renderPage(content));
  console.log('Rebuilt', slug);
}
