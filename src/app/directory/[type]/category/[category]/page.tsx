import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, Hero, SectionTitle } from "@/components/site";
import { DIRECTORY_CONFIG, GREEK_REGIONS, SERVICE_CATEGORIES, AGENT_TYPES, HOTEL_TYPES, STAFF_ROLES, PMC_SERVICE_TAGS } from "@/lib/marketplace/config";
import { getMockDirectoryItems } from "@/lib/marketplace/mockData";
import type { DirectoryType } from "@/lib/marketplace/types";
import Link from "next/link";

const VALID_TYPES: Record<string, DirectoryType> = {
  services: "service",
  agents: "agent",
  "property-managers": "pmc",
  hotels: "hotel",
  staff: "staff",
  partners: "partner",
};

function getCategories(dirType: DirectoryType) {
  switch (dirType) {
    case "service": return SERVICE_CATEGORIES.map((c) => ({ slug: c.slug, label: c.label }));
    case "agent": return AGENT_TYPES.map((a) => ({ slug: a.slug, label: a.label }));
    case "hotel": return HOTEL_TYPES.map((h) => ({ slug: h.slug, label: h.label }));
    case "staff": return STAFF_ROLES.map((s) => ({ slug: s.slug, label: s.label }));
    case "pmc": return PMC_SERVICE_TAGS.map((t) => ({ slug: t.toLowerCase().replace(/[\s\/]+/g, "-"), label: t }));
    default: return [];
  }
}

function regionToSlug(region: string): string {
  return region.toLowerCase().replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const params: { type: string; category: string }[] = [];
  for (const [typeSlug, dirType] of Object.entries(VALID_TYPES)) {
    for (const cat of getCategories(dirType)) {
      params.push({ type: typeSlug, category: cat.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string; category: string }>;
}): Promise<Metadata> {
  const { type, category } = await params;
  const dirType = VALID_TYPES[type];
  if (!dirType) return {};

  const cats = getCategories(dirType);
  const cat = cats.find((c) => c.slug === category);
  if (!cat) return {};

  const config = DIRECTORY_CONFIG[dirType];
  const title = `${cat.label} — ${config.pluralLabel} | ClickyTour`;
  const description = `Browse ${cat.label.toLowerCase()} ${config.pluralLabel.toLowerCase()} across Greece. Compare verified providers, read reviews, and connect directly.`;

  return { title, description, openGraph: { title, description } };
}

export default async function DirectoryCategoryPage({
  params,
}: {
  params: Promise<{ type: string; category: string }>;
}) {
  const { type, category } = await params;
  const dirType = VALID_TYPES[type];
  if (!dirType) notFound();

  const cats = getCategories(dirType);
  const cat = cats.find((c) => c.slug === category);
  if (!cat) notFound();

  const config = DIRECTORY_CONFIG[dirType];
  const allItems = getMockDirectoryItems(dirType);
  const catItems = allItems.filter(
    (item) => item.category?.toLowerCase().replace(/[\s\/]+/g, "-") === category
  );

  const otherCats = cats.filter((c) => c.slug !== category).slice(0, 8);

  return (
    <PageShell>
      <Hero
        title={`${cat.label}`}
        subtitle={`Discover ${cat.label.toLowerCase()} providers across Greece. Verified listings with reviews, ratings, and direct contact.`}
        ctaA={`Browse ${cat.label}`}
        ctaHrefA={config.urlBase}
        ctaB="Get Listed"
        ctaHrefB={`${config.urlBase}#get-listed`}
      />

      <section className="section">
        <div className="container max-w-6xl">
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/marketplace" className="hover:text-cyan-600">Marketplace</Link>
            <span className="mx-2">/</span>
            <Link href={config.urlBase} className="hover:text-cyan-600">{config.pluralLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{cat.label}</span>
          </nav>

          {catItems.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {catItems.map((item) => (
                <Link key={item.id} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-slate-900 group-hover:text-cyan-700">{item.name}</h3>
                    {item.verifiedBadge && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">Verified</span>}
                  </div>
                  {item.subtitle && <p className="text-xs text-slate-500 mb-1">{item.subtitle}</p>}
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">{item.description}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{item.region}</span>
                    {item.rating && <span>&#9733; {item.rating}</span>}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
              <p className="text-lg font-medium text-slate-700">No {cat.label.toLowerCase()} providers listed yet</p>
              <p className="mt-2 text-sm text-slate-500">Be the first to list your {cat.label.toLowerCase()} business.</p>
              <Link href={config.urlBase} className="mt-4 inline-block rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">Get Listed</Link>
            </div>
          )}
        </div>
      </section>

      {/* Regional breakdown */}
      <section className="bg-slate-50 py-12">
        <div className="container max-w-6xl">
          <SectionTitle title={`${cat.label} by Region`} />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {GREEK_REGIONS.map((r) => (
              <Link key={r} href={`/directory/${type}/${regionToSlug(r)}`} className="rounded-xl border border-slate-200 bg-white p-3 text-center text-sm hover:border-cyan-300 transition">
                {r}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      {otherCats.length > 0 && (
        <section className="py-12">
          <div className="container max-w-6xl">
            <SectionTitle title={`Other ${config.label} Categories`} />
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherCats.map((c) => (
                <Link key={c.slug} href={`/directory/${type}/category/${c.slug}`} className="rounded-xl border border-slate-200 bg-white p-4 text-center hover:border-cyan-300 hover:shadow-sm transition">
                  <span className="text-sm font-medium text-slate-700">{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
