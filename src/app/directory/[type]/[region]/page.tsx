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

function slugToRegion(slug: string): string | undefined {
  return GREEK_REGIONS.find(
    (r) => r.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
  );
}

function regionToSlug(region: string): string {
  return region.toLowerCase().replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  const params: { type: string; region: string }[] = [];
  for (const type of Object.keys(VALID_TYPES)) {
    for (const region of GREEK_REGIONS) {
      params.push({ type, region: regionToSlug(region) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string; region: string }>;
}): Promise<Metadata> {
  const { type, region: regionSlug } = await params;
  const dirType = VALID_TYPES[type];
  const region = slugToRegion(regionSlug);
  if (!dirType || !region) return {};

  const config = DIRECTORY_CONFIG[dirType];
  const title = `${config.pluralLabel} in ${region} | ClickyTour`;
  const description = `Find trusted ${config.pluralLabel.toLowerCase()} in ${region}, Greece. Browse verified listings, compare services, and connect directly through ClickyTour.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function DirectoryRegionPage({
  params,
}: {
  params: Promise<{ type: string; region: string }>;
}) {
  const { type, region: regionSlug } = await params;
  const dirType = VALID_TYPES[type];
  const region = slugToRegion(regionSlug);

  if (!dirType || !region) notFound();

  const config = DIRECTORY_CONFIG[dirType];
  const allItems = getMockDirectoryItems(dirType);
  const regionItems = allItems.filter(
    (item) => item.region.toLowerCase() === region.toLowerCase()
  );

  // Get subcategories for this directory type
  const subcategories =
    dirType === "service" ? SERVICE_CATEGORIES.map((c) => ({ slug: c.slug, label: c.label }))
    : dirType === "agent" ? AGENT_TYPES.map((a) => ({ slug: a.slug, label: a.label }))
    : dirType === "hotel" ? HOTEL_TYPES.map((h) => ({ slug: h.slug, label: h.label }))
    : dirType === "staff" ? STAFF_ROLES.map((s) => ({ slug: s.slug, label: s.label }))
    : dirType === "pmc" ? PMC_SERVICE_TAGS.map((t) => ({ slug: t.toLowerCase().replace(/[\s\/]+/g, "-"), label: t }))
    : [];

  // Related regions (other regions for same type)
  const otherRegions = GREEK_REGIONS.filter((r) => r !== region).slice(0, 8);

  return (
    <PageShell>
      <Hero
        title={`${config.pluralLabel} in ${region}`}
        subtitle={`Find and connect with verified ${config.pluralLabel.toLowerCase()} serving ${region}, Greece. Browse profiles, compare services, and reach out directly.`}
        ctaA={config.sideA.cta}
        ctaHrefA={config.urlBase}
        ctaB={config.sideB.cta}
        ctaHrefB={`${config.urlBase}#get-listed`}
      />

      <section className="section">
        <div className="container max-w-6xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-slate-500">
            <Link href="/marketplace" className="hover:text-cyan-600">Marketplace</Link>
            <span className="mx-2">/</span>
            <Link href={config.urlBase} className="hover:text-cyan-600">{config.pluralLabel}</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{region}</span>
          </nav>

          {/* Results */}
          {regionItems.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {regionItems.map((item) => (
                <Link key={item.id} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-cyan-700 transition">{item.name}</h3>
                      {item.subtitle && <p className="text-xs text-slate-500">{item.subtitle}</p>}
                    </div>
                    {item.verifiedBadge && <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">Verified</span>}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2 mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{t}</span>
                    ))}
                  </div>
                  {item.rating && (
                    <div className="flex items-center gap-1 text-xs text-slate-500">
                      <span className="text-amber-500">&#9733;</span> {item.rating} ({item.reviewCount} reviews)
                    </div>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
              <p className="text-lg font-medium text-slate-700">No {config.pluralLabel.toLowerCase()} listed in {region} yet</p>
              <p className="mt-2 text-sm text-slate-500">Be the first to list your business in this region.</p>
              <Link href={config.urlBase} className="mt-4 inline-block rounded-full bg-cyan-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-cyan-700 transition">Get Listed</Link>
            </div>
          )}
        </div>
      </section>

      {/* Subcategories */}
      {subcategories.length > 0 && (
        <section className="bg-slate-50 py-12">
          <div className="container max-w-6xl">
            <SectionTitle title={`${config.label} Categories in ${region}`} />
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {subcategories.map((cat) => (
                <div key={cat.slug} className="rounded-xl border border-slate-200 bg-white p-4 text-center hover:border-cyan-300 transition">
                  <span className="text-sm font-medium text-slate-700">{cat.label}</span>
                  <p className="mt-1 text-xs text-slate-400">in {region}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other regions */}
      <section className="py-12">
        <div className="container max-w-6xl">
          <SectionTitle title={`${config.pluralLabel} in Other Regions`} />
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherRegions.map((r) => (
              <Link key={r} href={`/directory/${type}/${regionToSlug(r)}`} className="rounded-xl border border-slate-200 bg-white p-4 text-center hover:border-cyan-300 hover:shadow-sm transition">
                <span className="text-sm font-medium text-slate-700">{config.pluralLabel} in {r}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-700 py-12 text-white text-center">
        <div className="container max-w-2xl">
          <h2 className="text-2xl font-bold">List Your Business in {region}</h2>
          <p className="mt-2 text-cyan-100">Join the ClickyTour marketplace and reach thousands of potential clients.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href={config.urlBase} className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-cyan-700 hover:bg-cyan-50 transition">{config.sideB.cta}</Link>
            <Link href="/marketplace" className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition">Explore All</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
