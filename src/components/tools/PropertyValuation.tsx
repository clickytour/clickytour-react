"use client";

import { useState, useMemo } from "react";

const REGIONS = [
  { name: "Athens Center", avgSqm: 2800, range: [1800, 4500], rental: 0.045, demand: "Very High" },
  { name: "Athens South (Glyfada, Vouliagmeni)", avgSqm: 4200, range: [3000, 7000], rental: 0.04, demand: "Very High" },
  { name: "Athens North (Kifisia, Marousi)", avgSqm: 3200, range: [2200, 5000], rental: 0.038, demand: "High" },
  { name: "Thessaloniki Center", avgSqm: 2200, range: [1500, 3500], rental: 0.045, demand: "High" },
  { name: "Halkidiki (Kassandra)", avgSqm: 2000, range: [1200, 3500], rental: 0.04, demand: "High" },
  { name: "Halkidiki (Sithonia)", avgSqm: 1800, range: [1000, 3000], rental: 0.035, demand: "Medium" },
  { name: "Crete (Chania)", avgSqm: 2400, range: [1500, 4000], rental: 0.045, demand: "Very High" },
  { name: "Crete (Heraklion)", avgSqm: 2000, range: [1300, 3200], rental: 0.04, demand: "High" },
  { name: "Crete (Rethymno)", avgSqm: 1900, range: [1200, 3000], rental: 0.04, demand: "Medium" },
  { name: "Santorini", avgSqm: 5500, range: [3500, 10000], rental: 0.05, demand: "Very High" },
  { name: "Mykonos", avgSqm: 6500, range: [4000, 12000], rental: 0.05, demand: "Very High" },
  { name: "Rhodes Town", avgSqm: 1800, range: [1200, 3000], rental: 0.04, demand: "High" },
  { name: "Corfu Town", avgSqm: 2200, range: [1400, 3500], rental: 0.04, demand: "High" },
  { name: "Zakynthos", avgSqm: 1600, range: [1000, 2800], rental: 0.04, demand: "Medium" },
  { name: "Kefalonia", avgSqm: 1500, range: [900, 2500], rental: 0.035, demand: "Medium" },
  { name: "Pelion", avgSqm: 1200, range: [800, 2200], rental: 0.035, demand: "Medium" },
  { name: "Peloponnese Coast", avgSqm: 1400, range: [800, 2500], rental: 0.035, demand: "Medium" },
  { name: "Lefkada", avgSqm: 1800, range: [1100, 3000], rental: 0.04, demand: "Medium" },
];

const PROPERTY_TYPES = [
  { name: "Apartment", multiplier: 1.0 },
  { name: "Villa", multiplier: 1.35 },
  { name: "Stone House", multiplier: 1.15 },
  { name: "Townhouse", multiplier: 1.1 },
  { name: "Maisonette", multiplier: 1.2 },
  { name: "Land (buildable)", multiplier: 0.4 },
];

const CONDITIONS = [
  { name: "New Build / Renovated", multiplier: 1.2 },
  { name: "Good Condition", multiplier: 1.0 },
  { name: "Needs Cosmetic Updates", multiplier: 0.85 },
  { name: "Needs Full Renovation", multiplier: 0.65 },
];

const FEATURES = [
  { name: "Sea View", boost: 0.2 },
  { name: "Pool", boost: 0.15 },
  { name: "Garden/Outdoor", boost: 0.08 },
  { name: "Parking", boost: 0.05 },
  { name: "Near Beach (<500m)", boost: 0.12 },
  { name: "Elevator", boost: 0.04 },
  { name: "Storage/Basement", boost: 0.03 },
  { name: "Balcony/Terrace", boost: 0.06 },
];

export default function PropertyValuation() {
  const [regionIdx, setRegionIdx] = useState(0);
  const [propType, setPropType] = useState(0);
  const [condition, setCondition] = useState(1);
  const [sqm, setSqm] = useState(80);
  const [bedrooms, setBedrooms] = useState(2);
  const [yearBuilt, setYearBuilt] = useState(2010);
  const [floor, setFloor] = useState(2);
  const [features, setFeatures] = useState<number[]>([]);

  const region = REGIONS[regionIdx];

  const calc = useMemo(() => {
    const baseSqm = region.avgSqm;
    const typeMul = PROPERTY_TYPES[propType].multiplier;
    const condMul = CONDITIONS[condition].multiplier;
    const featureBoost = features.reduce((sum, i) => sum + FEATURES[i].boost, 0);
    const bedroomMul = 1 + (bedrooms - 1) * 0.05;
    const agePenalty = yearBuilt < 1980 ? 0.85 : yearBuilt < 2000 ? 0.92 : yearBuilt < 2015 ? 1.0 : 1.08;
    const floorBoost = floor === 0 ? 0.95 : floor >= 4 ? 1.06 : 1 + floor * 0.015;

    const adjustedSqm = Math.round(baseSqm * typeMul * condMul * (1 + featureBoost) * bedroomMul * agePenalty * floorBoost);
    const estimatedValue = adjustedSqm * sqm;
    const lowValue = Math.round(region.range[0] * sqm * typeMul * condMul * 0.9);
    const highValue = Math.round(region.range[1] * sqm * typeMul * condMul * 1.1);

    // Rental yield
    const annualRental = estimatedValue * region.rental;
    const monthlyRental = annualRental / 12;

    // Golden Visa eligibility
    const gvThreshold = ["Athens Center", "Athens South (Glyfada, Vouliagmeni)", "Athens North (Kifisia, Marousi)", "Thessaloniki Center", "Santorini", "Mykonos"].includes(region.name) ? 800000 : ["Crete (Chania)", "Crete (Heraklion)", "Crete (Rethymno)", "Rhodes Town", "Corfu Town"].includes(region.name) ? 400000 : 250000;
    const gvEligible = estimatedValue >= gvThreshold;

    return { adjustedSqm, estimatedValue, lowValue, highValue, annualRental, monthlyRental, gvThreshold, gvEligible };
  }, [regionIdx, propType, condition, sqm, bedrooms, yearBuilt, floor, features, region]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Location</label>
          <select value={regionIdx} onChange={(e) => setRegionIdx(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
            {REGIONS.map((r, i) => <option key={i} value={i}>{r.name} (avg {fmt(r.avgSqm)}/m2)</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Property Type</label>
            <select value={propType} onChange={(e) => setPropType(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
              {PROPERTY_TYPES.map((p, i) => <option key={i} value={i}>{p.name}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Condition</label>
            <select value={condition} onChange={(e) => setCondition(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
              {CONDITIONS.map((c, i) => <option key={i} value={i}>{c.name}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Size (m2)</label>
            <input type="number" min={15} max={2000} value={sqm} onChange={(e) => setSqm(Math.max(15, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Bedrooms</label>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4, 5].map((b) => (
                <button key={b} onClick={() => setBedrooms(b)} className={`flex-1 h-10 rounded-lg border text-sm font-bold transition ${bedrooms === b ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                  {b === 0 ? "Studio" : b}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Year Built</label>
            <input type="number" min={1900} max={2026} value={yearBuilt} onChange={(e) => setYearBuilt(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Floor</label>
            <select value={floor} onChange={(e) => setFloor(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
              <option value={0}>Ground</option>
              <option value={1}>1st</option>
              <option value={2}>2nd</option>
              <option value={3}>3rd</option>
              <option value={4}>4th</option>
              <option value={5}>5th+</option>
              <option value={-1}>Penthouse</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Features</label>
          <div className="flex flex-wrap gap-2">
            {FEATURES.map((f, i) => (
              <button key={i} onClick={() => setFeatures((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${features.includes(i) ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>
                {f.name} (+{Math.round(f.boost * 100)}%)
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-6 text-white">
          <p className="text-sm font-medium text-violet-200">Estimated Value</p>
          <p className="text-4xl font-bold mt-1">{fmt(calc.estimatedValue)}</p>
          <p className="text-sm text-violet-200 mt-2">Range: {fmt(calc.lowValue)} - {fmt(calc.highValue)}</p>
          <p className="text-xs text-violet-300 mt-1">{fmt(calc.adjustedSqm)}/m2 x {sqm}m2</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500">Est. Monthly Rental</p>
            <p className="text-xl font-bold text-emerald-600 mt-1">{fmt(calc.monthlyRental)}</p>
            <p className="text-[10px] text-slate-400">{(region.rental * 100).toFixed(1)}% annual yield</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
            <p className="text-xs text-slate-500">Market Demand</p>
            <p className={`text-xl font-bold mt-1 ${region.demand === "Very High" ? "text-emerald-600" : region.demand === "High" ? "text-cyan-600" : "text-amber-600"}`}>{region.demand}</p>
            <p className="text-[10px] text-slate-400">{region.name}</p>
          </div>
        </div>

        <div className={`rounded-xl border-2 p-4 ${calc.gvEligible ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-slate-50"}`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">{calc.gvEligible ? "\u2705" : "\u26A0\uFE0F"}</span>
            <div>
              <p className={`text-sm font-bold ${calc.gvEligible ? "text-emerald-800" : "text-slate-700"}`}>
                Golden Visa: {calc.gvEligible ? "Eligible" : "Below Threshold"}
              </p>
              <p className="text-xs text-slate-500">
                {calc.gvEligible
                  ? `This property meets the ${fmt(calc.gvThreshold)} minimum for ${region.name}.`
                  : `Minimum ${fmt(calc.gvThreshold)} required for this zone. Need ${fmt(calc.gvThreshold - calc.estimatedValue)} more.`}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900 mb-3">Market Context</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Region Avg Price/m2</span><span className="font-semibold">{fmt(region.avgSqm)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Your Price/m2</span><span className={`font-semibold ${calc.adjustedSqm > region.avgSqm ? "text-amber-600" : "text-emerald-600"}`}>{fmt(calc.adjustedSqm)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Region Range/m2</span><span className="font-semibold">{fmt(region.range[0])} - {fmt(region.range[1])}</span></div>
            <hr className="border-slate-100" />
            <div className="flex justify-between"><span className="text-slate-500">Property Type</span><span className="font-semibold">{PROPERTY_TYPES[propType].name}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Condition</span><span className="font-semibold">{CONDITIONS[condition].name}</span></div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs text-slate-500">
            <strong>Disclaimer:</strong> This is an automated estimate based on average market data for {region.name} as of early 2026. 
            Actual property values depend on exact location, street, building, and current market conditions. 
            For an accurate valuation, consult a licensed Greek appraiser.
          </p>
        </div>
      </div>
    </div>
  );
}
