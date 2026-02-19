import Link from 'next/link';
import { Hero, PageShell, SectionTitle, SidebarLayout } from '@/components/site';
import { roleMenus } from '@/components/site-menu';

export default function OwnersPage() {
  const menu = roleMenus.owners;

  return (
    <PageShell>
      <Hero
        title="Owner tools, growth paths, and support"
        subtitle="Whether you manage vacation rentals or real estate properties, the owners hub gives you clear paths to list, promote, and grow."
        ctaA="List my property"
        ctaB="View owner plans"
      />

      <SidebarLayout title="For Owners" menu={menu}>
        <SectionTitle
          eyebrow="Owners Hub"
          title="Explore owner sections by category"
          subtitle="Vacation property owners, real estate owners, and support resources are organized below."
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
