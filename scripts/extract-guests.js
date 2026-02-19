const fs = require('fs');
const slugs=['guests-vacation-assistance','guests-what-to-do','guests-destinations','guests-plans-offers','trip-planer','guests-personalized-planning','guests-real-estate','guests-premium-travel-plan','guests-help','guests-help-how-booking-works','guests-help-rental-policies','guests-help-refunds-cancellation','guests-help-contact'];
const dec=s=>s.replace(/&#038;|&amp;/g,'&').replace(/&#8211;|&ndash;/g,'-').replace(/&#8217;|&#039;/g,"'").replace(/&#8220;|&#8221;|&quot;/g,'"').replace(/&nbsp;/g,' ');
const strip=h=>dec(h).replace(/<\s*br\s*\/?>/gi,'\n').replace(/<\/(p|h[1-6]|li|ul|ol|div|section|article|tr)>/gi,'\n').replace(/<li[^>]*>/gi,'- ').replace(/<[^>]+>/g,' ').replace(/\n{2,}/g,'\n').replace(/[ \t]+/g,' ').split('\n').map(x=>x.trim()).filter(Boolean);
(async()=>{
  let out='';
  for(const slug of slugs){
    const r=await fetch('https://clickytour.com/wp-json/wp/v2/pages?slug='+slug,{headers:{'User-Agent':'Mozilla/5.0'}});
    const j=await r.json(); const p=j[0];
    const title=dec(p?.title?.rendered||slug); const html=p?.content?.rendered||''; const lines=strip(html);
    out += `\n==== ${slug} | ${title} | htmlLen ${html.length} | lines ${lines.length} ====\n`;
    out += lines.slice(0,80).join('\n') + '\n';
  }
  fs.writeFileSync('tmp-guests-content.txt', out);
})();
