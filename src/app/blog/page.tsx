import Link from 'next/link';
import { AboutPlatformDiagram } from '@/components/diagrams';
import { Hero, PageShell, SectionTitle } from '@/components/site';

const categories = ['All', 'Travel Tips', 'Property Growth', 'Hospitality Ops', 'Affiliate & Marketing', 'Company News'];

const posts = [
  {
    title: 'How Owners Can Increase Booking Conversion in 2026',
    excerpt: 'Five practical improvements that help property owners convert more visitors into confirmed stays.',
    date: 'Jan 28, 2026',
    category: 'Property Growth',
  },
  {
    title: 'Guest Experience Checklist for High-Season Rentals',
    excerpt: 'A pre-arrival and on-stay checklist to improve reviews and repeat bookings.',
    date: 'Jan 19, 2026',
    category: 'Hospitality Ops',
  },
  {
    title: 'Best Local Services to Bundle With Vacation Stays',
    excerpt: 'How providers and managers can package cleaning, transfers, and concierge services.',
    date: 'Jan 10, 2026',
    category: 'Travel Tips',
  },
  {
    title: 'Affiliate Growth Playbook: Turning Content Into Revenue',
    excerpt: 'A starter framework for affiliates promoting travel and property offers through ClickyTour.',
    date: 'Dec 22, 2025',
    category: 'Affiliate & Marketing',
  },
  {
    title: 'ClickyTour Platform Update: New Role Onboarding Flows',
    excerpt: 'An overview of our latest updates across role pages, guidance content, and support links.',
    date: 'Dec 12, 2025',
    category: 'Company News',
  },
  {
    title: 'Operations Metrics PM Companies Should Track Monthly',
    excerpt: 'From occupancy and ADR to maintenance response time — a practical KPI breakdown.',
    date: 'Dec 3, 2025',
    category: 'Hospitality Ops',
  },
];

export default function BlogPage() {
  return (
    <PageShell>
      <Hero
        title="ClickyTour Blog"
        subtitle="Insights, guides, and updates for guests, owners, providers, agents and PM companies."
        ctaA="Read Latest"
        ctaB="Explore Categories"
      />

      <section className="section"><div className="container max-w-lg mx-auto"><AboutPlatformDiagram /></div></section>

      <section className="section section-soft">
        <div className="container grid lg:grid-cols-[260px_minmax(0,1fr)] gap-6">
          <aside className="card p-5 h-max">
            <h3 className="font-bold text-slate-900">Categories</h3>
            <div className="flex flex-wrap lg:flex-col gap-2 mt-4">
              {categories.map((category) => (
                <span key={category} className="pill text-center">{category}</span>
              ))}
            </div>
          </aside>

          <div>
            <SectionTitle title="Latest Articles" subtitle="Fresh content and practical tips from the ClickyTour ecosystem." />
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {posts.map((post) => (
                <article key={post.title} className="card p-5 flex flex-col">
                  <div className="h-36 rounded-lg bg-gradient-to-br from-cyan-100 to-slate-100 border border-cyan-200" />
                  <span className="inline-block text-xs rounded-full bg-cyan-50 text-cyan-700 px-2 py-1 w-fit mt-4">{post.category}</span>
                  <h3 className="font-bold text-lg mt-3 text-slate-900">{post.title}</h3>
                  <p className="text-sm text-slate-600 mt-2 flex-1">{post.excerpt}</p>
                  <div className="text-xs text-slate-400 mt-4">{post.date}</div>
                  <Link href="/blog/" className="text-cyan-700 text-sm font-semibold mt-2 inline-block">Read →</Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
