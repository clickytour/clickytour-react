import Link from 'next/link';
import { PageShell, Hero, SectionTitle } from '@/components/site';

export default function Page() {
  return (
    <PageShell>
      <Hero title="Tours & Activities" subtitle="Discover unique experiences at every destination." ctaA="Get Started" ctaB="Learn More" />
      <section className="section"><div className="container">
        <SectionTitle title="Explore by Category" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[{icon:'🚤',t:'Boats & Water Sports',d:'Sailing, kayaking, jet ski, and more.',href:'/activities-boats'},{icon:'🏔',t:'Outdoor Adventures',d:'Hiking, climbing, cycling, and nature tours.',href:'/activities-outdoor'},{icon:'🍷',t:'Food & Wine',d:'Tastings, cooking classes, local cuisine.',href:'/activities-food-wine'},{icon:'🧘',t:'Wellness & Spa',d:'Yoga retreats, spas, and relaxation.',href:'/activities-wellness'},{icon:'📍',t:'Destination Tours',d:'Guided tours by local experts.',href:'/activities-destination'},{icon:'🎭',t:'Cultural Experiences',d:'Museums, performances, local traditions.',href:'/discover'}].map(c => (
            <Link key={c.t} href={c.href} className="card p-5 hover:shadow-lg transition-shadow"><p className="text-3xl">{c.icon}</p><h3 className="font-bold mt-2">{c.t}</h3><p className="text-slate-600 text-sm mt-1">{c.d}</p></Link>
          ))}
        </div>
      </div></section>
    </PageShell>
  );
}