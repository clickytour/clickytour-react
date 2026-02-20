"use client";

import { useState, useMemo } from "react";

const DESTINATIONS = [
  { name: "Athens & Attica", daily: { budget: 80, mid: 150, luxury: 320 }, ferry: 0 },
  { name: "Thessaloniki", daily: { budget: 65, mid: 130, luxury: 280 }, ferry: 0 },
  { name: "Halkidiki", daily: { budget: 70, mid: 140, luxury: 300 }, ferry: 0 },
  { name: "Crete", daily: { budget: 75, mid: 145, luxury: 310 }, ferry: 45 },
  { name: "Santorini", daily: { budget: 110, mid: 220, luxury: 500 }, ferry: 55 },
  { name: "Mykonos", daily: { budget: 120, mid: 240, luxury: 550 }, ferry: 55 },
  { name: "Rhodes", daily: { budget: 70, mid: 135, luxury: 290 }, ferry: 50 },
  { name: "Corfu", daily: { budget: 70, mid: 140, luxury: 300 }, ferry: 40 },
  { name: "Zakynthos", daily: { budget: 65, mid: 130, luxury: 270 }, ferry: 35 },
  { name: "Kefalonia", daily: { budget: 65, mid: 125, luxury: 260 }, ferry: 35 },
  { name: "Pelion", daily: { budget: 60, mid: 120, luxury: 250 }, ferry: 0 },
  { name: "Peloponnese", daily: { budget: 60, mid: 115, luxury: 240 }, ferry: 0 },
];

const SEASONS: Record<string, number> = { low: 0.75, shoulder: 1.0, peak: 1.35 };
const SEASON_LABELS: Record<string, string> = { low: "Low (Nov-Mar)", shoulder: "Shoulder (Apr-May, Sep-Oct)", peak: "Peak (Jun-Aug)" };

const ACTIVITIES = [
  { name: "Guided tours", daily: 35 },
  { name: "Water sports", daily: 45 },
  { name: "Boat trips", daily: 70 },
  { name: "Wine/food tours", daily: 55 },
  { name: "Spa & wellness", daily: 60 },
  { name: "Scuba diving", daily: 80 },
];

export default function TripCostCalculator() {
  const [dest, setDest] = useState(0);
  const [nights, setNights] = useState(7);
  const [people, setPeople] = useState(2);
  const [tier, setTier] = useState<"budget" | "mid" | "luxury">("mid");
  const [season, setSeason] = useState("shoulder");
  const [carRental, setCarRental] = useState(false);
  const [activities, setActivities] = useState<number[]>([]);
  const [flightCost, setFlightCost] = useState(200);

  const calc = useMemo(() => {
    const d = DESTINATIONS[dest];
    const seasonMul = SEASONS[season];
    const dailyPerPerson = d.daily[tier] * seasonMul;
    const accommodation = dailyPerPerson * nights * people * 0.45;
    const food = dailyPerPerson * nights * people * 0.3;
    const transport = d.ferry * people + (carRental ? nights * 45 : nights * people * 8);
    const flights = flightCost * people;
    const actCost = activities.reduce((sum, i) => sum + ACTIVITIES[i].daily, 0) * Math.ceil(nights / 2) * people;
    const total = accommodation + food + transport + flights + actCost;
    const perPerson = total / people;
    const perDay = total / nights;
    return { accommodation, food, transport, flights, actCost, total, perPerson, perDay };
  }, [dest, nights, people, tier, season, carRental, activities, flightCost]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Inputs */}
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Destination</label>
          <select value={dest} onChange={(e) => setDest(+e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm">
            {DESTINATIONS.map((d, i) => <option key={i} value={i}>{d.name}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Nights</label>
            <input type="number" min={1} max={30} value={nights} onChange={(e) => setNights(Math.max(1, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Travelers</label>
            <input type="number" min={1} max={20} value={people} onChange={(e) => setPeople(Math.max(1, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Accommodation Style</label>
          <div className="flex gap-2">
            {(["budget", "mid", "luxury"] as const).map((t) => (
              <button key={t} onClick={() => setTier(t)} className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition ${tier === t ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {t === "budget" ? "Budget" : t === "mid" ? "Mid-Range" : "Luxury"}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Season</label>
          <div className="flex gap-2">
            {Object.entries(SEASON_LABELS).map(([k, v]) => (
              <button key={k} onClick={() => setSeason(k)} className={`flex-1 rounded-lg border px-2 py-2 text-xs font-medium transition ${season === k ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Flight Cost (per person)</label>
          <input type="number" min={0} max={2000} value={flightCost} onChange={(e) => setFlightCost(Math.max(0, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
        </div>

        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked={carRental} onChange={(e) => setCarRental(e.target.checked)} className="rounded border-slate-300" />
          <span className="text-sm text-slate-700">Car rental (+~45/day)</span>
        </label>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Activities (optional)</label>
          <div className="flex flex-wrap gap-2">
            {ACTIVITIES.map((a, i) => (
              <button key={i} onClick={() => setActivities((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${activities.includes(i) ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>
                {a.name} (~{a.daily}/day)
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 p-6 text-white">
          <p className="text-sm font-medium text-cyan-100">Estimated Total</p>
          <p className="text-4xl font-bold mt-1">{fmt(calc.total)}</p>
          <div className="mt-3 flex gap-6 text-sm text-cyan-100">
            <span>{fmt(calc.perPerson)} / person</span>
            <span>{fmt(calc.perDay)} / day</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-3">
          <h3 className="font-bold text-slate-900">Cost Breakdown</h3>
          {[
            { label: "Accommodation", value: calc.accommodation, color: "bg-cyan-500" },
            { label: "Food & Dining", value: calc.food, color: "bg-emerald-500" },
            { label: "Flights", value: calc.flights, color: "bg-violet-500" },
            { label: "Transport & Ferries", value: calc.transport, color: "bg-amber-500" },
            { label: "Activities", value: calc.actCost, color: "bg-pink-500" },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-600">{item.label}</span>
                <span className="font-semibold text-slate-900">{fmt(item.value)}</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className={`h-full rounded-full ${item.color} transition-all`} style={{ width: `${Math.min(100, (item.value / calc.total) * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs text-slate-500">
            <strong>Note:</strong> Estimates based on 2025-2026 market averages for {DESTINATIONS[dest].name}. 
            Actual costs may vary 10-20%. Accommodation assumes {tier === "budget" ? "hostels & budget hotels" : tier === "mid" ? "3-4 star hotels & quality apartments" : "5-star hotels & premium villas"}.
          </p>
        </div>
      </div>
    </div>
  );
}
