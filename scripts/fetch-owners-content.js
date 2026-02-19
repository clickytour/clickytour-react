const fs = require('fs');

const slugs = [
  'owners-vacation',
  'owners-vacation-self-managed',
  'owners-vacation-multi-platform-sync',
  'owners-vacation-full-management',
  'owners-vacation-list-property',
  'owners-vacation-free-evaluation',
  'owners-vacation-become-agent',
  'owners-vacation-promote-rental',
  'owners-vacation-dashboard',
  'owners-real-estate',
  'owners-real-estate-sale-rent',
  'owners-real-estate-list-property',
  'owners-real-estate-full-service',
  'owners-real-estate-invest',
  'owners-real-estate-request-proposals',
  'owners-real-estate-promotion-tools',
  'owners-faq',
  'owners-plans-pricing',
];

function decodeEntities(str) {
  return str
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&#8216;/g, "'")
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8211;|&#8212;/g, '-')
    .replace(/&#038;/g, '&');
}

function clean(html = '') {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<(h1|h2|h3|h4|h5|h6)[^>]*>/gi, '\n## ')
      .replace(/<li[^>]*>/gi, '\n- ')
      .replace(/<\/(p|h1|h2|h3|h4|h5|h6|li|ul|ol|br|div|section|tr|table)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/\n{2,}/g, '\n')
      .trim()
  );
}

(async () => {
  const out = [];
  for (const slug of slugs) {
    const res = await fetch(`https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const json = await res.json();
    const page = json[0] || {};
    out.push({
      slug,
      title: clean(page?.title?.rendered || ''),
      text: clean(page?.content?.rendered || ''),
    });
  }

  fs.writeFileSync('owners-wp-content.json', JSON.stringify(out, null, 2), 'utf8');
})();