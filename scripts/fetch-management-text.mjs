const slugs = [
  'management-grow-portfolio',
  'management-promote-services',
  'management-match-properties',
  'management-showcase-white-label',
  'management-increase-bookings',
  'management-vacation-property-pool',
  'management-list-properties',
  'management-allow-agents-book',
  'management-manage-operate',
  'management-dashboard',
  'management-channel-manager',
  'management-tools-center',
  'management-help',
  'management-help-faq',
  'management-help-plans-pricing',
];

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#038;|&amp;/g, '&')
    .replace(/&#8211;|&ndash;/g, '–')
    .replace(/&#8217;|&#039;/g, "'")
    .replace(/&#8220;|&#8221;|&quot;/g, '"')
    .replace(/&#8216;/g, "'")
    .split(/\n+/)
    .map((x) => x.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
}

for (const slug of slugs) {
  const res = await fetch(`https://clickytour.com/wp-json/wp/v2/pages?slug=${slug}`, {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });
  const arr = await res.json();
  if (!arr.length) {
    console.log(`\n=== ${slug} | NO PAGE`);
    continue;
  }
  const p = arr[0];
  const title = p?.title?.rendered || '';
  const html = p?.content?.rendered || '';
  const lines = strip(html);
  console.log(`\n=== ${slug} | ${title} | lines ${lines.length} | html ${html.length}`);
  for (const line of lines.slice(0, 40)) console.log(`- ${line}`);
}
