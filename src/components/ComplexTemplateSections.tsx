"use client";

import { useMemo, useState } from "react";

const unitTypes = ["All", "Villas", "Apartments"] as const;
type UnitType = (typeof unitTypes)[number];

type UnitItem = { name: string; type: Exclude<UnitType, "All">; beds: string; guests: string; image: string; price: string };

const unitList: UnitItem[] = [
  { name: "Luxury Suites Elisa", type: "Apartments", beds: "1 bedroom", guests: "2 guests", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80", price: "from €110/night" },
  { name: "Galini Beachfront Maisonettes", type: "Villas", beds: "2 bedrooms", guests: "5 guests", image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80", price: "from €188/night" },
  { name: "Olea Suites & Apartments", type: "Apartments", beds: "1 bedroom", guests: "3 guests", image: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80", price: "from €120/night" },
  { name: "Sani Club Private Villas", type: "Villas", beds: "3 bedrooms", guests: "7 guests", image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80", price: "from €280/night" },
  { name: "Deluxe Suites Elenia", type: "Apartments", beds: "2 bedrooms", guests: "4 guests", image: "https://images.unsplash.com/photo-1560185008-a33f32c5e8bd?auto=format&fit=crop&w=1200&q=80", price: "from €145/night" },
  { name: "Simantro Beachfront Villas Complex", type: "Villas", beds: "2 bedrooms", guests: "6 guests", image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80", price: "from €205/night" },
  { name: "Tripotamos Beachfront Villas Complex (2)", type: "Villas", beds: "3 bedrooms", guests: "8 guests", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80", price: "from €248/night" },
  { name: "Tripotamos Beachfront Villas Complex (1)", type: "Villas", beds: "2 bedrooms", guests: "6 guests", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80", price: "from €224/night" },
  { name: "Sani Stavronikita Villas Complex", type: "Villas", beds: "4 bedrooms", guests: "10 guests", image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80", price: "from €335/night" },
];

const faqs = [
  { q: "Is this template reusable for all complexes?", a: "Yes. This layout is designed as a reusable detail template for villa/apartment complexes, with modular sections and UI-only demo data." },
  { q: "Can we connect dynamic inventory later?", a: "Absolutely. Unit cards, pricing and availability can be wired to live payloads after design approval." },
  { q: "Can one complex include both villas and apartments?", a: "Yes. The template supports mixed inventory and lets users filter by unit type quickly." },
];

export function ComplexTemplateSections() {
  const [activeType, setActiveType] = useState<UnitType>("All");

  const units = useMemo(() => (activeType === "All" ? unitList : unitList.filter((u) => u.type === activeType)), [activeType]);

  return (
    <section className="mx-auto max-w-[1280px] px-4 pb-8 pt-4">
      <div className="rounded-2xl border border-slate-300 bg-[#091339] px-4 py-10 md:px-8">
        <p className="text-sm text-slate-300">Home › Complexes › <span className="font-semibold text-white">Complex Template</span></p>
        <h1 className="mt-3 text-center text-[56px] font-semibold leading-none text-white">Luxury Complex Template</h1>
        <p className="mx-auto mt-3 max-w-[900px] text-center text-[21px] text-slate-200">Reusable detail-page structure for mixed villa/apartment complexes with marketing, SEO and conversion-ready UI.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button className="rounded-xl bg-emerald-500 px-5 py-2.5 text-base font-semibold text-slate-900">Check availability</button>
          <button className="rounded-xl border border-white/40 bg-white text-slate-900 px-5 py-2.5 text-base font-semibold">Open map</button>
        </div>
      </div>

      <section className="mt-6 rounded-2xl border border-slate-300 bg-white p-5 md:p-6">
        <h2 className="text-[42px] font-semibold leading-none text-slate-900">Complex Highlights</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80" alt="Complex view" className="h-56 w-full rounded-xl object-cover" />
          <img src="https://images.unsplash.com/photo-1560185008-a33f32c5e8bd?auto=format&fit=crop&w=1400&q=80" alt="Interior" className="h-56 w-full rounded-xl object-cover" />
          <img src="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1400&q=80" alt="Beach nearby" className="h-56 w-full rounded-xl object-cover" />
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-300 bg-white p-5 md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_1.4fr]">
          <aside className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-[32px] font-semibold leading-none text-slate-900">Units in this complex</h3>
            <div className="mt-3 space-y-1">
              {unitList.map((u) => (
                <button key={u.name} type="button" className="block w-full rounded-lg border border-transparent px-2 py-2 text-left text-[18px] leading-none text-slate-700 hover:border-slate-200 hover:bg-slate-50">{u.name}</button>
              ))}
            </div>
          </aside>

          <div>
            <div className="flex flex-wrap gap-2">
              {unitTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    activeType === type ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {units.map((u) => (
                <article key={u.name} className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <img src={u.image} alt={u.name} className="h-36 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-3">
                    <p className="text-[24px] font-semibold leading-none text-slate-900">{u.name}</p>
                    <p className="mt-2 text-[18px] leading-none text-slate-600">{u.type} · {u.beds} · {u.guests}</p>
                    <p className="mt-3 text-[20px] font-semibold leading-none text-slate-900">{u.price}</p>
                    <div className="mt-auto flex flex-nowrap items-center gap-2 pt-3">
                      <button className="whitespace-nowrap rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800">View details</button>
                      <button className="whitespace-nowrap rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Check dates</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-300 bg-white p-5 md:p-6">
        <h2 className="text-[42px] font-semibold leading-none text-slate-900">Why guests choose this complex</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4"><p className="text-[24px] font-semibold leading-none text-slate-900">Prime beachfront location</p><p className="mt-2 text-[18px] leading-none text-slate-600">Walk to the sea in minutes and stay close to dining and local attractions.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><p className="text-[24px] font-semibold leading-none text-slate-900">Flexible unit choices</p><p className="mt-2 text-[18px] leading-none text-slate-600">From cozy apartments to multi-bedroom villas for families and groups.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><p className="text-[24px] font-semibold leading-none text-slate-900">High-conversion layout</p><p className="mt-2 text-[18px] leading-none text-slate-600">Clear pricing, strong CTAs and filterable inventory reduce booking friction.</p></div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-300 bg-white p-5 md:p-6">
        <h2 className="text-[42px] font-semibold leading-none text-slate-900">Complex FAQ</h2>
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
          {faqs.map((f, i) => (
            <details key={f.q} className={i < faqs.length - 1 ? "border-b border-slate-200" : ""}>
              <summary className="list-none p-3 marker:content-none">
                <div className="flex items-center justify-between rounded-lg border border-sky-500 px-3 py-2 text-[24px] font-semibold leading-none text-slate-900">
                  <span>{f.q}</span>
                  <span className="text-xl font-normal">+</span>
                </div>
              </summary>
              <p className="px-4 pb-4 text-[18px] leading-none text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-slate-300 bg-white p-6 text-center">
        <h2 className="text-[42px] font-semibold leading-none text-slate-900">Want this template applied to all complex detail pages?</h2>
        <p className="mx-auto mt-2 max-w-[900px] text-[21px] leading-none text-slate-600">After approval, we can reuse this exact structure for each complex with dynamic content mapping.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button className="rounded-xl bg-slate-900 px-5 py-2.5 text-base font-medium text-white">Approve template</button>
          <button className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-base font-medium text-slate-800">Request adjustments</button>
        </div>
      </section>
    </section>
  );
}
