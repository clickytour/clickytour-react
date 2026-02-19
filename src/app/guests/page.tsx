import Link from 'next/link';
import { Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function GuestsPage() {
  const menu = roleMenus.guests;
  const links = menu.flatMap((group) => group.items);

  return (
    <PageShell>
      <Hero
        title="Plan your best trip in one place"
        subtitle="From stays and activities to support and premium planning, explore every guest service from the ClickyTour guest hub."
        ctaA="Start planning"
        ctaB="Get assistance"
      />

      <SidebarLayout title="For Guests" menu={menu}>
        <SectionTitle
          eyebrow="Guest Hub"
          title="Everything for guests"
          subtitle="Browse all guest sections below. Each card links to a dedicated internal route from the WordPress menu structure."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="card p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-[#0F2B46]">{item.label}</h3>
              <p className="text-sm text-slate-500 mt-1">Open {item.label.toLowerCase()} section</p>
            </Link>
          ))}
        </div>
      </SidebarLayout>
    </PageShell>
  );
}
