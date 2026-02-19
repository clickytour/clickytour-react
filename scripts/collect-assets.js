const https = require('https');
const { URL } = require('url');

const pages = [
  'https://clickytour.club/',
  'https://clickytour.club/guests/',
  'https://clickytour.club/owners/',
  'https://clickytour.club/service-providers/',
  'https://clickytour.club/agents/',
  'https://clickytour.club/pm-companies/'
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

(async () => {
  const assets = new Set();
  for (const page of pages) {
    const html = await fetch(page);
    const re = /(?:src|href)=["']([^"']+wp-content\/uploads[^"']+)["']/g;
    let m;
    while ((m = re.exec(html))) {
      assets.add(new URL(m[1], page).href);
    }
  }

  console.log('assets', assets.size);
  for (const a of [...assets].sort()) console.log(a);
})();
