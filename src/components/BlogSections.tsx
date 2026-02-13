export function BlogSections() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-8 pt-4">
      <div className="rounded-2xl border border-slate-300 bg-white p-5 md:p-8">
        <p className="text-sm text-slate-500">Home › <span className="font-semibold text-slate-700">Blog</span></p>

        <h1 className="mt-3 text-[56px] font-semibold leading-none text-slate-900">
          Villa travel tips, owner growth & partner playbooks
        </h1>

        <p className="mt-3 text-[21px] text-slate-600">
          Actionable guides for guests, owners and collaborators across Greece.
        </p>

        <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
          <input
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 md:flex-1"
            placeholder="Search articles (e.g., Santorini, pricing, transfers)..."
          />

          <div className="flex flex-wrap gap-2">
            {["All", "Travel Tips", "Owners", "Agents & Partners"].map((chip, idx) => (
              <button
                key={chip}
                className={`rounded-full border px-4 py-2 text-sm ${
                  idx === 0 ? "border-emerald-600 text-emerald-700" : "border-slate-300 text-slate-700"
                } bg-white`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
