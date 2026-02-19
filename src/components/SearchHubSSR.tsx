/**
 * Server-side rendered fallback for SearchHub.
 * Renders meaningful static content so crawlers see real page structure.
 * The client-side SearchHub hydrates on top of this.
 */
import {
  INTENTS,
  getAllSearchItems,
  type SearchIntent,
} from "@/lib/searchHubEngine";

const INTENT_COLORS: Record<SearchIntent, string> = {
  vacation: "bg-sky-100 text-sky-700",
  "real-estate": "bg-emerald-100 text-emerald-700",
  services: "bg-amber-100 text-amber-700",
  hotels: "bg-violet-100 text-violet-700",
  blog: "bg-rose-100 text-rose-700",
};

export function SearchHubSSR({ intent }: { intent?: string }) {
  const activeIntent = (intent as SearchIntent) || "vacation";
  const allItems = getAllSearchItems();
  const items = allItems.filter((item) => item.intent === activeIntent);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white px-4 py-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Search Hub
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Discover vacation rentals, real estate, services, hotels and travel
            guides — all in one universal search hub.
          </p>
        </div>
      </header>

      {/* Intent tabs */}
      <nav className="border-b border-slate-200 bg-white" aria-label="Search categories">
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2">
          {INTENTS.map((tab) => (
            <a
              key={tab.id}
              href={`/search?intent=${tab.id}`}
              className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                tab.id === activeIntent
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Results */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <p className="mb-4 text-sm text-slate-500">
          {items.length} {activeIntent.replace("-", " ")} results
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 12).map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-md"
            >
              {item.image && (
                <div className="aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-4">
                <span
                  className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                    INTENT_COLORS[item.intent]
                  }`}
                >
                  {item.intent.replace("-", " ")}
                </span>
                <h2 className="mt-2 text-base font-semibold text-slate-900 line-clamp-1">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                  {item.description}
                </p>
                {item.priceLabel && (
                  <p className="mt-2 text-sm font-semibold text-slate-800">
                    {item.priceLabel}
                  </p>
                )}
                {item.location && (
                  <p className="mt-1 text-xs text-slate-400">
                    📍 {item.location}
                    {item.region ? `, ${item.region}` : ""}
                  </p>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {item.facts.slice(0, 3).map((f) => (
                    <span
                      key={f.label}
                      className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-600"
                    >
                      {f.label}: {f.value}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
