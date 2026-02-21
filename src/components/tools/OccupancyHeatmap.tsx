"use client";

import { useState, useMemo } from "react";

const REGIONS = [
  { name: "Athens", occ: [0.65,0.60,0.68,0.72,0.78,0.85,0.92,0.95,0.88,0.75,0.62,0.58], avg: 85 },
  { name: "Thessaloniki", occ: [0.50,0.48,0.55,0.62,0.70,0.78,0.85,0.88,0.80,0.65,0.52,0.45], avg: 70 },
  { name: "Halkidiki", occ: [0.15,0.12,0.20,0.35,0.55,0.82,0.95,0.98,0.85,0.45,0.18,0.10], avg: 95 },
  { name: "Crete (Chania)", occ: [0.25,0.22,0.30,0.45,0.65,0.85,0.95,0.97,0.88,0.55,0.28,0.20], avg: 100 },
  { name: "Santorini", occ: [0.18,0.15,0.25,0.45,0.70,0.90,0.98,0.99,0.92,0.55,0.22,0.12], avg: 180 },
  { name: "Mykonos", occ: [0.12,0.10,0.18,0.40,0.65,0.88,0.97,0.99,0.90,0.50,0.18,0.08], avg: 200 },
  { name: "Rhodes", occ: [0.20,0.18,0.28,0.42,0.62,0.82,0.92,0.95,0.85,0.50,0.25,0.15], avg: 90 },
  { name: "Corfu", occ: [0.18,0.15,0.25,0.40,0.60,0.80,0.92,0.95,0.82,0.48,0.22,0.12], avg: 85 },
  { name: "Zakynthos", occ: [0.12,0.10,0.20,0.38,0.58,0.80,0.93,0.96,0.82,0.45,0.18,0.08], avg: 80 },
  { name: "Kefalonia", occ: [0.12,0.10,0.18,0.35,0.55,0.78,0.90,0.94,0.80,0.42,0.15,0.08], avg: 80 },
  { name: "Pelion", occ: [0.35,0.30,0.28,0.32,0.45,0.65,0.82,0.85,0.70,0.40,0.32,0.38], avg: 80 },
  { name: "Peloponnese", occ: [0.15,0.12,0.20,0.30,0.48,0.72,0.85,0.88,0.75,0.40,0.18,0.10], avg: 75 },
];

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAYS_IN_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];

const EVENTS: Record<string, string[]> = {
  "Jan": ["New Year"],
  "Mar": ["Clean Monday"],
  "Apr": ["Orthodox Easter (variable)"],
  "May": ["Labor Day (May 1)"],
  "Jun": ["Summer begins"],
  "Jul": ["Peak season"],
  "Aug": ["Assumption (Aug 15)", "Peak demand"],
  "Oct": ["Ochi Day (Oct 28)"],
  "Dec": ["Christmas / NY Eve"],
};

function occColor(occ: number): string {
  if (occ >= 0.9) return "bg-red-500 text-white";
  if (occ >= 0.75) return "bg-orange-400 text-white";
  if (occ >= 0.6) return "bg-amber-300 text-slate-900";
  if (occ >= 0.4) return "bg-yellow-200 text-slate-900";
  if (occ >= 0.2) return "bg-emerald-100 text-slate-700";
  return "bg-slate-100 text-slate-500";
}

function pricingAdvice(occ: number): string {
  if (occ >= 0.9) return "Premium pricing — max rates, minimum stay 5-7 nights";
  if (occ >= 0.75) return "High demand — strong rates, min 3-4 nights";
  if (occ >= 0.6) return "Solid demand — competitive rates, flexible stays";
  if (occ >= 0.4) return "Moderate — consider 10-15% discount, 2-night min";
  if (occ >= 0.2) return "Low season — 20-30% off, accept short stays";
  return "Off-season — deep discounts or monthly rates recommended";
}

export default function OccupancyHeatmap() {
  const [regionIdx, setRegionIdx] = useState(0);
  const [userRate, setUserRate] = useState(0);
  const [bedrooms, setBedrooms] = useState(2);

  const region = REGIONS[regionIdx];
  const bedroomMul = 1 + (bedrooms - 1) * 0.25;

  const calc = useMemo(() => {
    const monthData = MONTHS.map((m, i) => {
      const occ = region.occ[i];
      const seasonMul = occ >= 0.85 ? 1.4 : occ >= 0.65 ? 1.1 : occ >= 0.4 ? 0.85 : 0.6;
      const suggestedRate = Math.round(region.avg * bedroomMul * seasonMul);
      const nightsBooked = Math.round(DAYS_IN_MONTH[i] * occ);
      const revenue = suggestedRate * nightsBooked;
      const userRevenue = userRate > 0 ? userRate * seasonMul * nightsBooked : 0;
      return { month: m, occ, suggestedRate, nightsBooked, revenue, userRevenue, events: EVENTS[m] || [] };
    });

    const totalNights = monthData.reduce((s, m) => s + m.nightsBooked, 0);
    const totalRevenue = monthData.reduce((s, m) => s + m.revenue, 0);
    const totalUserRevenue = monthData.reduce((s, m) => s + m.userRevenue, 0);
    const avgOcc = monthData.reduce((s, m) => s + m.occ, 0) / 12;
    const peakMonth = monthData.reduce((best, m) => m.occ > best.occ ? m : best, monthData[0]);
    const lowMonth = monthData.reduce((worst, m) => m.occ < worst.occ ? m : worst, monthData[0]);

    // Identify pricing gaps (months where occupancy drops >15% from neighbors)
    const gaps = monthData.filter((m, i) => {
      const prev = i > 0 ? monthData[i - 1].occ : m.occ;
      const next = i < 11 ? monthData[i + 1].occ : m.occ;
      return m.occ < 0.5 && (prev - m.occ > 0.15 || next - m.occ > 0.15);
    });

    return { monthData, totalNights, totalRevenue, totalUserRevenue, avgOcc, peakMonth, lowMonth, gaps };
  }, [regionIdx, userRate, bedrooms, bedroomMul, region]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Region</label>
          <select value={regionIdx} onChange={(e) => setRegionIdx(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
            {REGIONS.map((r, i) => <option key={i} value={i}>{r.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Bedrooms</label>
          <select value={bedrooms} onChange={(e) => setBedrooms(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
            {[1,2,3,4,5].map((b) => <option key={b} value={b}>{b} BR</option>)}
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-semibold text-slate-700 mb-1">Your Current Base Rate (optional)</label>
          <input type="number" min={0} step={5} value={userRate} onChange={(e) => setUserRate(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" placeholder="0 = use suggested" />
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 overflow-x-auto">
        <h3 className="font-bold text-slate-900 mb-3">Monthly Occupancy Heatmap — {region.name}</h3>
        <div className="grid grid-cols-12 gap-1 min-w-[600px]">
          {calc.monthData.map((m) => (
            <div key={m.month} className={`rounded-lg p-2 text-center ${occColor(m.occ)} transition-all`}>
              <p className="text-[10px] font-bold">{m.month}</p>
              <p className="text-lg font-black">{Math.round(m.occ * 100)}%</p>
              <p className="text-[9px] opacity-75">{m.nightsBooked}n</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-3 text-[10px] text-slate-500">
          <span>Low</span>
          <div className="flex gap-0.5">
            {["bg-slate-100","bg-emerald-100","bg-yellow-200","bg-amber-300","bg-orange-400","bg-red-500"].map((c,i) => (
              <div key={i} className={`w-6 h-3 rounded ${c}`} />
            ))}
          </div>
          <span>Peak</span>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Pricing Recommendations */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900 mb-3">Suggested Nightly Rates</h3>
          <div className="space-y-2">
            {calc.monthData.map((m) => (
              <div key={m.month} className="flex items-center gap-3">
                <span className="w-8 text-xs font-bold text-slate-500">{m.month}</span>
                <div className="flex-1 h-4 rounded-full bg-slate-100 overflow-hidden relative">
                  <div className="h-full rounded-full bg-cyan-500 transition-all" style={{ width: `${(m.suggestedRate / (region.avg * bedroomMul * 1.5)) * 100}%` }} />
                </div>
                <span className="text-sm font-bold text-slate-800 w-16 text-right">{fmt(m.suggestedRate)}</span>
                <span className="text-[10px] text-slate-400 w-16 text-right">{fmt(m.revenue)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-4 text-white">
              <p className="text-[10px] text-cyan-200">Annual Revenue (est.)</p>
              <p className="text-2xl font-bold mt-1">{fmt(calc.totalRevenue)}</p>
              <p className="text-xs text-cyan-200">{calc.totalNights} nights</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 p-4 text-white">
              <p className="text-[10px] text-violet-200">Avg Occupancy</p>
              <p className="text-2xl font-bold mt-1">{Math.round(calc.avgOcc * 100)}%</p>
              <p className="text-xs text-violet-200">{region.name}</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Key Insights</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">&#9650;</span>
                <span className="text-slate-600"><strong>Peak:</strong> {calc.peakMonth.month} ({Math.round(calc.peakMonth.occ * 100)}%) — {pricingAdvice(calc.peakMonth.occ)}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">&#9660;</span>
                <span className="text-slate-600"><strong>Low:</strong> {calc.lowMonth.month} ({Math.round(calc.lowMonth.occ * 100)}%) — {pricingAdvice(calc.lowMonth.occ)}</span>
              </div>
              {calc.gaps.length > 0 && (
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#9888;</span>
                  <span className="text-slate-600"><strong>Pricing gaps:</strong> {calc.gaps.map(g => g.month).join(", ")} — consider promotions or events-based pricing</span>
                </div>
              )}
            </div>
          </div>

          {userRate > 0 && (
            <div className={`rounded-xl border p-4 ${calc.totalUserRevenue > calc.totalRevenue ? "border-red-200 bg-red-50" : "border-emerald-200 bg-emerald-50"}`}>
              <h4 className={`text-sm font-bold ${calc.totalUserRevenue > calc.totalRevenue ? "text-red-800" : "text-emerald-800"}`}>Your Rate vs Suggested</h4>
              <p className="text-xs mt-1">
                Your base rate ({fmt(userRate)}) would yield ~{fmt(calc.totalUserRevenue)}/year vs suggested {fmt(calc.totalRevenue)}/year.
                {calc.totalUserRevenue < calc.totalRevenue ? ` You could earn ${fmt(calc.totalRevenue - calc.totalUserRevenue)} more with dynamic seasonal pricing.` : ""}
              </p>
            </div>
          )}

          {/* Events */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h4 className="text-sm font-bold text-slate-700 mb-2">Greek Events & Holidays</h4>
            <div className="flex flex-wrap gap-1.5">
              {calc.monthData.filter(m => m.events.length > 0).map((m) => (
                <span key={m.month} className="rounded-full bg-white border border-slate-200 px-2.5 py-1 text-[10px] text-slate-600">
                  <strong>{m.month}:</strong> {m.events.join(", ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          <strong>Note:</strong> Occupancy data based on 2024-2025 regional averages for vacation rentals. Actual rates depend on property quality, reviews, listing optimization, and local competition. Use this as a starting point for your pricing strategy.
        </p>
      </div>
    </div>
  );
}
