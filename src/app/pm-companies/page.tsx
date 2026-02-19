import Link from 'next/link';
import { Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function PMCompaniesPage() {
  const menu = roleMenus.pmCompanies;

  return (
    <PageShell>
      <Hero
        title="PMC hub for portfolio growth and operations"
        subtitle="Property management companies can use this hub to expand inventory, increase bookings, and manage operations with dedicated sections."
        ctaA="Start as PMC"
        ctaB="View manager tools"
      />

      <SidebarLayout title="For PM Companies" menu={menu}>
        <SectionTitle
          eyebrow="PM Companies Hub"
          title="Browse all manager-focused routes"
          subtitle="Explore growth, bookings, operations, and support sections organized by category."
        />

        <div className="space-y-8">
          {menu.map((category) => (
            <section key={category.label}>
              <h3 className="text-xl font-bold text-[#0F2B46] mb-3">{category.label}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {category.items.map((item) => (
                  <Link key={item.href} href={item.href} className="card p-5 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-[#0F2B46]">{item.label}</h4>
                    <p className="text-sm text-slate-500 mt-1">Go to {item.label.toLowerCase()}</p>
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
