import fs from 'node:fs/promises';
import path from 'node:path';

const slugs = [
  'agents-book-get-paid',
  'agents-book-net-pricing',
  'agents-vacation-property-pool',
  'agents-explore-services',
  'agents-explore-activities',
  'agents-explore-index',
  'agents-local-activities',
  'agents-real-estate-input',
  'agents-real-estate',
  'agents-real-estate-tools-sales',
  'agents-list-properties',
  'agents-real-estate-tools',
  'agents-tools',
  'agents-tools-advanced-search',
  'agents-tools-white-label-offers',
  'agents-tools-branded-templates',
  'agents-dashboard',
  'agents-grow-promote',
  'agents-offer-no-branding',
  'agents-promote-local-services',
  'agents-affiliate',
  'agents-help',
  'agents-help-contact',
  'agents-help-faq',
  'agents-help-plans-pricing',
];

const decodeHtml = (input = '') => input
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&#x([0-9a-fA-F]+);/g, (_, n) => String.fromCharCode(parseInt(n, 16)))
  .replace(/&nbsp;/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#039;/g, "'")
  .replace(/&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>');

const extractLines = (html = '') => {
  const text = decodeHtml(
    html
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<\s*br\s*\/?\s*>/gi, '\n')
      .replace(/<\/(p|h1|h2|h3|h4|h5|h6|li|div|section|article|span)\s*>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
  );

  const lines = text
    .split(/\n+/)
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
    .filter((line) => !/^home$/i.test(line))
    .filter((line) => !/^(for agents|clickytour)$/i.test(line));

  const seen = new Set();
  const deduped = [];
  for (const line of lines) {
    const key = line.toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      deduped.push(line);
    }
  }
  return deduped;
};

const titleFromSlug = (slug) => slug
  .replace(/^agents-/, '')
  .split('-')
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ')
  .replace(/Faq/g, 'FAQ');

const q = (value) => JSON.stringify(value);

const fallbackContent = (slug, title) => {
  const topic = titleFromSlug(slug).toLowerCase();
  return {
    title,
    subtitle: `Use ClickyTour ${topic} tools to deliver a faster, clearer experience for every client you support.`,
    cardTitle: 'What you can do',
    cards: [
      `Set up ${topic} in minutes`,
      'Share branded links with clients',
      'Track views, clicks, and bookings',
      'Keep communication in one dashboard',
      'Save time with reusable templates',
      'Scale your local sales process',
    ],
    sections: [
      {
        title: 'How it works',
        body: `ClickyTour gives agents a practical workflow for ${topic}, from setup to delivery and follow-up.`,
        points: [
          'Pick the right tools for your market and client profile.',
          'Publish and share polished offers or listings quickly.',
          'Measure performance and refine your outreach each week.',
        ],
      },
      {
        title: 'Best practices',
        points: [
          'Keep messaging simple and outcome-focused.',
          'Use consistent branding across every client touchpoint.',
          'Bundle services to increase booking confidence and revenue.',
        ],
      },
      {
        title: 'Why agents use this',
        body: `Agents choose ClickyTour for ${topic} because it reduces manual work while improving conversion and service quality.`,
      },
    ],
  };
};

const toProps = (slug, wpTitle, lines) => {
  const cleanTitle = decodeHtml(wpTitle || '').trim() || titleFromSlug(slug);
  const useful = lines.filter((line) => line.toLowerCase() !== cleanTitle.toLowerCase());

  if (useful.length === 0) {
    return fallbackContent(slug, cleanTitle);
  }

  const subtitle = useful[0] || `Learn how ${cleanTitle} helps agents work smarter with ClickyTour.`;
  const cardPool = useful.slice(1).filter((line) => line.length > 8).slice(0, 6);
  const cards = cardPool.length >= 3
    ? cardPool
    : [...cardPool, ...fallbackContent(slug, cleanTitle).cards].slice(0, 6);

  const pointPool = useful.slice(7).filter((line) => line.length > 12);
  const sections = [
    {
      title: 'Overview',
      body: useful[1] || `Get a clean, practical overview of ${cleanTitle}.`,
      points: useful.slice(2, 5).filter((line) => line.length > 10),
    },
    {
      title: 'How agents apply this',
      body: useful[5] || `Use these features in your day-to-day workflow to move clients from interest to action.`,
      points: pointPool.slice(0, 4),
    },
    {
      title: 'Next steps',
      body: useful[6] || `Start with one offer, test response, then scale the best-performing playbook.`,
      points: pointPool.slice(4, 7),
    },
  ].map((section) => ({
    ...section,
    points: section.points && section.points.length ? section.points : undefined,
  }));

  return {
    title: cleanTitle,
    subtitle,
    cardTitle: 'Highlights',
    cards,
    sections,
  };
};

const buildPage = (props) => `import { AgentsSubpageTemplate } from '@/components/agents-subpage';\n\nexport default function Page() {\n  return (\n    <AgentsSubpageTemplate\n      title={${q(props.title)}}\n      subtitle={${q(props.subtitle)}}\n      cardTitle={${q(props.cardTitle)}}\n      cards={${q(props.cards)}}\n      sections={${q(props.sections)}}\n      ctaTitle={${q('Start growing with ClickyTour')}}\n      ctaBody={${q('Create your agent profile, publish your offers, and help clients book faster with a complete digital journey.')}}\n      ctaPrimary={{ label: 'Get started', href: '/contact' }}\n      ctaSecondary={{ label: 'View agent tools', href: '/for-agents' }}\n    />\n  );\n}\n`;

const root = process.cwd();

for (const slug of slugs) {
  const url = `https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`;
  const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!response.ok) {
    throw new Error(`Failed ${slug}: ${response.status}`);
  }
  const data = await response.json();
  const page = data?.[0];
  const wpTitle = page?.title?.rendered || titleFromSlug(slug);
  const html = page?.content?.rendered || '';
  const lines = extractLines(html);
  const props = toProps(slug, wpTitle, lines);

  const content = buildPage(props);
  const file = path.join(root, 'src', 'app', slug, 'page.tsx');
  await fs.writeFile(file, content, 'utf8');
  console.log(`rebuilt ${slug}`);
}
