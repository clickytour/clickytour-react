import Link from 'next/link';
import { Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function AgentsPage() {
  const menu = roleMenus.agents;

  return (
    <PageShell>
      <Hero
        title="Agent hub for bookings, offers, and growth"
        subtitle="Access agent workflows for booking, real estate, toolkits, promotion, and support in one unified navigation system."
        ctaA="Join as agent"
        ctaB="Explore tools"
      />

      <SidebarLayout title="For Agents" menu={menu}>
        <SectionTitle
          eyebrow="Agents Hub"
          title="Everything agents need"
          subtitle="Use category-based sections to jump directly to booking paths, tools, and support routes."
        />

        <div className="space-y-8">
          {menu.map((category) => (
            <section key={category.label}>
              <h3 className="text-xl font-bold text-[#0F2B46] mb-3">{category.label}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <Link key={item.href} href={item.href} className="card p-5 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#0F2B46]">{item.label}</h4>
                    <p className="text-sm text-slate-500 mt-1">Open {item.label.toLowerCase()}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </SidebarLayout>
    </PageShell>
  );
}
