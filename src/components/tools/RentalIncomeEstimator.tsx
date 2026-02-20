"use client";

import { useState, useMemo } from "react";

const REGIONS = [
  { name: "Athens", low: 55, mid: 85, high: 140, occ: 0.72, growth: 0.05 },
  { name: "Thessaloniki", low: 45, mid: 70, high: 110, occ: 0.65, growth: 0.04 },
  { name: "Halkidiki", low: 60, mid: 95, high: 160, occ: 0.55, growth: 0.06 },
  { name: "Crete (Chania)", low: 65, mid: 100, high: 170, occ: 0.6, growth: 0.05 },
  { name: "Crete (Heraklion)", low: 55, mid: 90, high: 150, occ: 0.58, growth: 0.05 },
  { name: "Santorini", low: 100, mid: 180, high: 350, occ: 0.65, growth: 0.03 },
  { name: "Mykonos", low: 110, mid: 200, high: 400, occ: 0.6, growth: 0.03 },
  { name: "Rhodes", low: 55, mid: 90, high: 150, occ: 0.58, growth: 0.04 },
  { name: "Corfu", low: 55, mid: 85, high: 145, occ: 0.55, growth: 0.04 },
  { name: "Zakynthos", low: 50, mid: 80, high: 135, occ: 0.53, growth: 0.05 },
  { name: "Kefalonia", low: 50, mid: 80, high: 130, occ: 0.5, growth: 0.04 },
  { name: "Peloponnese", low: 45, mid: 75, high: 120, occ: 0.48, growth: 0.06 },
];

const AMENITIES = [
  { name: "Private Pool", boost: 0.25 },
  { name: "Sea View", boost: 0.15 },
  { name: "Hot Tub / Jacuzzi", boost: 0.1 },
  { name: "Parking", boost: 0.05 },
  { name: "BBQ / Outdoor Kitchen", boost: 0.05 },
  { name: "Smart Home / AC", boost: 0.03 },
];

export default function RentalIncomeEstimator() {
  const [regionIdx, setRegionIdx] = useState(0);
  const [bedrooms, setBedrooms] = useState(2);
  const [propStyle, setPropStyle] = useState<"budget" | "standard" | "premium">("standard");
  const [amenities, setAmenities] = useState<number[]>([]);
  const [currentRate, setCurrentRate] = useState(0);

  const region = REGIONS[regionIdx];

  const calc = useMemo(() => {
    const baseRate = propStyle === "budget" ? region.low : propStyle === "standard" ? region.mid : region.high;
    const bedroomMul = 1 + (bedrooms - 1) * 0.3;
    const amenityBoost = amenities.reduce((sum, i) => sum + AMENITIES[i].boost, 0);

    const estimatedRate = Math.round(baseRate * bedroomMul * (1 + amenityBoost));
    const nightsBooked = Math.round(365 * region.occ);
    const grossAnnual = estimatedRate * nightsBooked;
    const expenses = grossAnnual * 0.25; // cleaning, maintenance, platform fees, utilities
    const taxes = grossAnnual * 0.15;
    const netAnnual = grossAnnual - expenses - taxes;
    const netMonthly = netAnnual / 12;

    // 3-year projection
    const years = [0, 1, 2].map((y) => {
      const yearRate = estimatedRate * Math.pow(1 + region.growth, y);
      const yearGross = yearRate * nightsBooked;
      const yearNet = yearGross * 0.6; // net ratio
      return { year: 2026 + y, rate: Math.round(yearRate), gross: Math.round(yearGross), net: Math.round(yearNet) };
    });

    // Comparison
    const comparison = currentRate > 0 ? {
      diff: estimatedRate - currentRate,
      pctDiff: ((estimatedRate - currentRate) / currentRate) * 100,
      annualDiff: (estimatedRate - currentRate) * nightsBooked,
    } : null;

    return { estimatedRate, nightsBooked, grossAnnual, expenses, taxes, netAnnual, netMonthly, years, comparison };
  }, [regionIdx, bedrooms, propStyle, amenities, currentRate, region]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Region</label>
          <select value={regionIdx} onChange={(e) => setRegionIdx(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
            {REGIONS.map((r, i) => <option key={i} value={i}>{r.name} ({fmt(r.mid)}/night avg)</option>)}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Bedrooms</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5, 6].map((b) => (
              <button key={b} onClick={() => setBedrooms(b)} className={`w-10 h-10 rounded-lg border text-sm font-bold transition ${bedrooms === b ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {b}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Property Style</label>
          <div className="flex gap-2">
            {(["budget", "standard", "premium"] as const).map((s) => (
              <button key={s} onClick={() => setPropStyle(s)} className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-medium transition ${propStyle === s ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {s === "budget" ? "Basic" : s === "standard" ? "Standard" : "Premium"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Amenities</label>
          <div className="flex flex-wrap gap-2">
            {AMENITIES.map((a, i) => (
              <button key={i} onClick={() => setAmenities((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${amenities.includes(i) ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>
                {a.name} (+{Math.round(a.boost * 100)}%)
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Your Current Rate (optional, for comparison)</label>
          <input type="number" min={0} step={5} value={currentRate} onChange={(e) => setCurrentRate(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" placeholder="Leave 0 to skip" />
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 text-white">
          <p className="text-sm font-medium text-emerald-100">Estimated Nightly Rate</p>
          <p className="text-4xl font-bold mt-1">{fmt(calc.estimatedRate)}</p>
          <p className="text-sm text-emerald-200 mt-2">{calc.nightsBooked} nights/year at {Math.round(region.occ * 100)}% occupancy</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500">Gross Annual</p>
            <p className="text-xl font-bold text-slate-900 mt-1">{fmt(calc.grossAnnual)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500">Net Annual</p>
            <p className="text-xl font-bold text-emerald-600 mt-1">{fmt(calc.netAnnual)}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900 mb-3">3-Year Projection</h3>
          <div className="space-y-2">
            {calc.years.map((y) => (
              <div key={y.year} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-700 w-12">{y.year}</span>
                <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${(y.net / calc.years[2].gross) * 100}%` }} />
                </div>
                <span className="text-sm font-semibold text-slate-700 w-20 text-right">{fmt(y.net)}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">Based on {Math.round(region.growth * 100)}% annual growth rate for {region.name}</p>
        </div>

        {calc.comparison && (
          <div className={`rounded-xl border p-4 ${calc.comparison.diff >= 0 ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"}`}>
            <h4 className={`text-sm font-bold ${calc.comparison.diff >= 0 ? "text-emerald-800" : "text-red-800"}`}>
              vs Your Current Rate
            </h4>
            <p className={`text-xs mt-1 ${calc.comparison.diff >= 0 ? "text-emerald-600" : "text-red-600"}`}>
              {calc.comparison.diff >= 0 ? "+" : ""}{fmt(calc.comparison.diff)}/night ({calc.comparison.pctDiff >= 0 ? "+" : ""}{calc.comparison.pctDiff.toFixed(0)}%)
              = {calc.comparison.annualDiff >= 0 ? "+" : ""}{fmt(calc.comparison.annualDiff)}/year
            </p>
          </div>
        )}

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> Estimates based on 2025-2026 market averages. Expenses include ~15% tax + ~10% platform/cleaning fees. 
            Actual results depend on listing quality, reviews, marketing, and market conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
