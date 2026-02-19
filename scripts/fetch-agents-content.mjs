import fs from 'node:fs/promises';

const slugs = [
  'agents-book-get-paid','agents-book-net-pricing','agents-vacation-property-pool','agents-explore-services','agents-explore-activities','agents-explore-index','agents-local-activities','agents-real-estate-input','agents-real-estate','agents-real-estate-tools-sales','agents-list-properties','agents-real-estate-tools','agents-tools','agents-tools-advanced-search','agents-tools-white-label-offers','agents-tools-branded-templates','agents-dashboard','agents-grow-promote','agents-offer-no-branding','agents-promote-local-services','agents-affiliate','agents-help','agents-help-contact','agents-help-faq','agents-help-plans-pricing'
];

const decode = (s = '') => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&amp;/g, '&')
  .replace(/&nbsp;/g, ' ')
  .replace(/&quot;/g, '"')
  .replace(/&#8217;/g, "'")
  .replace(/&#8211;/g, '-')
  .replace(/&#8220;|&#8221;/g, '"');

const extract = (html = '') => decode(
  html
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<(h[1-6]|p|li|a|strong|em|div|section|article|span|br)[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n+/g, '\n')
    .trim()
);

async function fetchJson(slug) {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(`https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
      });
      const text = await res.text();
      const data = JSON.parse(text);
      return data;
    } catch (e) {
      if (i === 2) return [];
    }
  }
  return [];
}

const out = [];
for (const slug of slugs) {
  const data = await fetchJson(slug);
  const page = data?.[0] || {};
  const title = decode(page?.title?.rendered || '');
  const content = extract(page?.content?.rendered || '');
  out.push({ slug, title, content });
}

await fs.writeFile('scripts/agents-content.json', JSON.stringify(out, null, 2));
console.log('saved scripts/agents-content.json');