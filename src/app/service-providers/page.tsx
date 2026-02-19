import Link from 'next/link';
import { Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function ServiceProvidersPage() {
  const menu = roleMenus.serviceProviders;

  return (
    <PageShell>
      <Hero
        title="Grow your visibility as a service provider"
        subtitle="List, promote, and scale your services for guests, owners, and partners through one structured service-provider hub."
        ctaA="List my service"
        ctaB="Get free visibility review"
      />

      <SidebarLayout title="For Service Providers" menu={menu}>
        <SectionTitle
          eyebrow="Service Providers Hub"
          title="Find every service-provider route"
          subtitle="Navigate by main setup items, guest-facing offers, owner-facing offers, and support resources."
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
