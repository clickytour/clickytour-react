"use client";

import { useState, useMemo } from "react";

interface Island {
  name: string;
  group: string;
  ferry: Record<string, { duration: string; cost: number }>;
  avgNightly: number;
  highlights: string[];
}

const PORTS: Record<string, string> = {
  piraeus: "Piraeus (Athens)",
  rafina: "Rafina (Athens)",
  thessaloniki: "Thessaloniki",
  volos: "Volos",
  lavrio: "Lavrio",
};

const ISLANDS: Island[] = [
  { name: "Mykonos", group: "Cyclades", ferry: { piraeus: { duration: "4h 30m", cost: 45 }, rafina: { duration: "4h", cost: 42 } }, avgNightly: 200, highlights: ["Nightlife", "Beaches", "Little Venice"] },
  { name: "Santorini", group: "Cyclades", ferry: { piraeus: { duration: "7h 30m", cost: 55 } }, avgNightly: 180, highlights: ["Caldera views", "Sunsets", "Wine tours"] },
  { name: "Paros", group: "Cyclades", ferry: { piraeus: { duration: "4h", cost: 38 } }, avgNightly: 100, highlights: ["Naoussa village", "Water sports", "Antiparos"] },
  { name: "Naxos", group: "Cyclades", ferry: { piraeus: { duration: "5h", cost: 40 } }, avgNightly: 90, highlights: ["Portara", "Hiking", "Kitesurfing"] },
  { name: "Milos", group: "Cyclades", ferry: { piraeus: { duration: "6h", cost: 48 } }, avgNightly: 120, highlights: ["Sarakiniko", "Kleftiko caves", "Volcanic beaches"] },
  { name: "Ios", group: "Cyclades", ferry: { piraeus: { duration: "7h", cost: 50 } }, avgNightly: 85, highlights: ["Homer's tomb", "Nightlife", "Mylopotas beach"] },
  { name: "Crete (Heraklion)", group: "Crete", ferry: { piraeus: { duration: "8h", cost: 40 } }, avgNightly: 90, highlights: ["Knossos", "Old town", "Cuisine"] },
  { name: "Crete (Chania)", group: "Crete", ferry: { piraeus: { duration: "9h", cost: 42 } }, avgNightly: 100, highlights: ["Venetian harbor", "Samaria Gorge", "Elafonisi"] },
  { name: "Rhodes", group: "Dodecanese", ferry: { piraeus: { duration: "15h", cost: 55 } }, avgNightly: 90, highlights: ["Medieval town", "Lindos", "Valley of Butterflies"] },
  { name: "Kos", group: "Dodecanese", ferry: { piraeus: { duration: "11h", cost: 50 } }, avgNightly: 75, highlights: ["Hippocrates Tree", "Thermal springs", "Cycling"] },
  { name: "Corfu", group: "Ionian", ferry: { piraeus: { duration: "10h", cost: 45 } }, avgNightly: 85, highlights: ["Old Town (UNESCO)", "Paleokastritsa", "Canal d'Amour"] },
  { name: "Zakynthos", group: "Ionian", ferry: { piraeus: { duration: "7h", cost: 35 } }, avgNightly: 80, highlights: ["Shipwreck beach", "Blue caves", "Turtle island"] },
  { name: "Kefalonia", group: "Ionian", ferry: { piraeus: { duration: "6h 30m", cost: 32 } }, avgNightly: 80, highlights: ["Myrtos beach", "Melissani cave", "Assos village"] },
  { name: "Hydra", group: "Saronic", ferry: { piraeus: { duration: "1h 30m", cost: 30 } }, avgNightly: 120, highlights: ["Car-free island", "Art galleries", "Swimming rocks"] },
  { name: "Aegina", group: "Saronic", ferry: { piraeus: { duration: "1h 10m", cost: 15 } }, avgNightly: 70, highlights: ["Temple of Aphaia", "Pistachios", "Day trip"] },
  { name: "Skiathos", group: "Sporades", ferry: { volos: { duration: "1h 30m", cost: 30 } }, avgNightly: 100, highlights: ["Koukounaries", "Mamma Mia!", "60+ beaches"] },
  { name: "Skopelos", group: "Sporades", ferry: { volos: { duration: "3h", cost: 35 } }, avgNightly: 80, highlights: ["Mamma Mia church", "Pine forests", "Quiet charm"] },
  { name: "Thassos", group: "Northern Aegean", ferry: { thessaloniki: { duration: "3h", cost: 20 } }, avgNightly: 65, highlights: ["Marble beaches", "Ancient ruins", "Olive oil"] },
];

// Inter-island ferry connections (selected common routes)
const INTER_ISLAND: Record<string, Record<string, { duration: string; cost: number }>> = {
  "Mykonos": { "Santorini": { duration: "2h 30m", cost: 65 }, "Paros": { duration: "45m", cost: 20 }, "Naxos": { duration: "30m", cost: 18 } },
  "Santorini": { "Mykonos": { duration: "2h 30m", cost: 65 }, "Ios": { duration: "35m", cost: 15 }, "Crete (Heraklion)": { duration: "2h", cost: 40 } },
  "Paros": { "Mykonos": { duration: "45m", cost: 20 }, "Naxos": { duration: "30m", cost: 10 }, "Santorini": { duration: "3h", cost: 45 }, "Milos": { duration: "2h 30m", cost: 35 } },
  "Naxos": { "Paros": { duration: "30m", cost: 10 }, "Mykonos": { duration: "30m", cost: 18 }, "Ios": { duration: "1h 15m", cost: 18 }, "Santorini": { duration: "2h", cost: 30 } },
  "Ios": { "Santorini": { duration: "35m", cost: 15 }, "Naxos": { duration: "1h 15m", cost: 18 } },
  "Milos": { "Paros": { duration: "2h 30m", cost: 35 } },
  "Rhodes": { "Kos": { duration: "2h 30m", cost: 25 } },
  "Kos": { "Rhodes": { duration: "2h 30m", cost: 25 } },
  "Corfu": { "Kefalonia": { duration: "5h", cost: 28 } },
  "Kefalonia": { "Zakynthos": { duration: "1h 30m", cost: 12 }, "Corfu": { duration: "5h", cost: 28 } },
  "Zakynthos": { "Kefalonia": { duration: "1h 30m", cost: 12 } },
  "Skiathos": { "Skopelos": { duration: "45m", cost: 12 } },
  "Skopelos": { "Skiathos": { duration: "45m", cost: 12 } },
};

export default function FerryIslandPlanner() {
  const [startPort, setStartPort] = useState("piraeus");
  const [selectedIslands, setSelectedIslands] = useState<number[]>([0, 2, 3]);
  const [nightsPerIsland, setNightsPerIsland] = useState<Record<number, number>>({ 0: 3, 2: 2, 3: 2 });
  const [people, setPeople] = useState(2);
  const [season, setSeason] = useState<"low" | "shoulder" | "peak">("peak");
  const [accomStyle, setAccomStyle] = useState<"budget" | "mid" | "premium">("mid");

  const toggleIsland = (i: number) => {
    if (selectedIslands.includes(i)) {
      setSelectedIslands(selectedIslands.filter((x) => x !== i));
      const n = { ...nightsPerIsland };
      delete n[i];
      setNightsPerIsland(n);
    } else {
      setSelectedIslands([...selectedIslands, i]);
      setNightsPerIsland({ ...nightsPerIsland, [i]: 2 });
    }
  };

  const setNights = (i: number, n: number) => {
    setNightsPerIsland({ ...nightsPerIsland, [i]: Math.max(1, n) });
  };

  const seasonMul = season === "low" ? 0.6 : season === "shoulder" ? 0.85 : 1;
  const accomMul = accomStyle === "budget" ? 0.5 : accomStyle === "mid" ? 1 : 1.8;

  const calc = useMemo(() => {
    const islands = selectedIslands.map((i) => ISLANDS[i]);
    const nights = selectedIslands.map((i) => nightsPerIsland[i] || 2);
    const totalNights = nights.reduce((s, n) => s + n, 0);

    // Ferry costs: port → first island, between islands, last island → port
    let ferryCosts: { from: string; to: string; duration: string; cost: number }[] = [];
    if (islands.length > 0) {
      const first = islands[0];
      const fromPort = first.ferry[startPort];
      if (fromPort) {
        ferryCosts.push({ from: PORTS[startPort], to: first.name, duration: fromPort.duration, cost: fromPort.cost * people });
      }
      for (let j = 0; j < islands.length - 1; j++) {
        const route = INTER_ISLAND[islands[j].name]?.[islands[j + 1].name];
        if (route) {
          ferryCosts.push({ from: islands[j].name, to: islands[j + 1].name, duration: route.duration, cost: route.cost * people });
        } else {
          ferryCosts.push({ from: islands[j].name, to: islands[j + 1].name, duration: "Check schedule", cost: 40 * people });
        }
      }
      const last = islands[islands.length - 1];
      const toPort = last.ferry[startPort];
      if (toPort) {
        ferryCosts.push({ from: last.name, to: PORTS[startPort], duration: toPort.duration, cost: toPort.cost * people });
      }
    }

    const totalFerryCost = ferryCosts.reduce((s, f) => s + f.cost, 0);
    const accommodationCosts = islands.map((isl, j) => {
      const nightlyRate = isl.avgNightly * seasonMul * accomMul;
      return { island: isl.name, nights: nights[j], rate: Math.round(nightlyRate), total: Math.round(nightlyRate * nights[j]) };
    });
    const totalAccom = accommodationCosts.reduce((s, a) => s + a.total, 0);
    const foodPerDay = (accomStyle === "budget" ? 25 : accomStyle === "mid" ? 50 : 90) * people;
    const totalFood = foodPerDay * totalNights;
    const totalCost = totalFerryCost + totalAccom + totalFood;

    return { islands, nights, totalNights, ferryCosts, totalFerryCost, accommodationCosts, totalAccom, foodPerDay, totalFood, totalCost };
  }, [selectedIslands, nightsPerIsland, people, startPort, seasonMul, accomMul]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  const groups = [...new Set(ISLANDS.map((i) => i.group))];

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Island selector - 3 cols */}
        <div className="lg:col-span-3 space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Start From</label>
              <select value={startPort} onChange={(e) => setStartPort(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                {Object.entries(PORTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Travelers</label>
              <input type="number" min={1} max={20} value={people} onChange={(e) => setPeople(Math.max(1, +e.target.value))} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Season</label>
              <select value={season} onChange={(e) => setSeason(e.target.value as any)} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm">
                <option value="low">Low (Nov-Mar)</option>
                <option value="shoulder">Shoulder (Apr/Sep-Oct)</option>
                <option value="peak">Peak (Jun-Aug)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Accommodation Style</label>
            <div className="flex gap-2">
              {(["budget", "mid", "premium"] as const).map((s) => (
                <button key={s} onClick={() => setAccomStyle(s)} className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium transition ${accomStyle === s ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                  {s === "budget" ? "Budget" : s === "mid" ? "Mid-Range" : "Premium"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Select Islands (click to add/remove)</label>
            {groups.map((g) => (
              <div key={g} className="mb-3">
                <p className="text-xs font-bold text-slate-400 uppercase mb-1">{g}</p>
                <div className="flex flex-wrap gap-1.5">
                  {ISLANDS.map((isl, i) => isl.group === g && (
                    <button key={i} onClick={() => toggleIsland(i)} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${selectedIslands.includes(i) ? "border-cyan-600 bg-cyan-600 text-white" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                      {isl.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {selectedIslands.length > 0 && (
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Nights per Island (drag to reorder)</label>
              <div className="space-y-2">
                {selectedIslands.map((idx, pos) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-600 text-white text-xs font-bold flex items-center justify-center">{pos + 1}</span>
                    <span className="flex-1 text-sm font-medium text-slate-800">{ISLANDS[idx].name}</span>
                    <div className="flex items-center gap-1">
                      <button onClick={() => setNights(idx, (nightsPerIsland[idx] || 2) - 1)} className="w-7 h-7 rounded border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm">-</button>
                      <span className="w-8 text-center text-sm font-bold">{nightsPerIsland[idx] || 2}</span>
                      <button onClick={() => setNights(idx, (nightsPerIsland[idx] || 2) + 1)} className="w-7 h-7 rounded border border-slate-300 text-slate-600 hover:bg-slate-50 text-sm">+</button>
                    </div>
                    <span className="text-xs text-slate-400">nights</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results - 2 cols */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 p-5 text-white">
            <p className="text-sm text-cyan-100">Total Trip Cost ({people} {people === 1 ? "person" : "people"})</p>
            <p className="text-3xl font-bold mt-1">{fmt(calc.totalCost)}</p>
            <div className="flex gap-4 text-sm text-cyan-200 mt-2">
              <span>{calc.totalNights} nights</span>
              <span>{calc.islands.length} islands</span>
              <span>{fmt(calc.totalCost / people)} /person</span>
            </div>
          </div>

          {calc.ferryCosts.length > 0 && (
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Ferry Route</h4>
              <div className="space-y-2">
                {calc.ferryCosts.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">{i + 1}</span>
                    <span className="text-slate-600">{f.from}</span>
                    <span className="text-slate-300">&#8594;</span>
                    <span className="font-medium text-slate-800">{f.to}</span>
                    <span className="ml-auto text-slate-400">{f.duration}</span>
                    <span className="font-semibold text-slate-700">{fmt(f.cost)}</span>
                  </div>
                ))}
                <hr className="border-slate-100" />
                <div className="flex justify-between text-sm"><span className="font-semibold">Total Ferries</span><span className="font-bold">{fmt(calc.totalFerryCost)}</span></div>
              </div>
            </div>
          )}

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Accommodation</h4>
            <div className="space-y-1.5">
              {calc.accommodationCosts.map((a, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-slate-600">{a.island} ({a.nights}n x {fmt(a.rate)})</span>
                  <span className="font-semibold">{fmt(a.total)}</span>
                </div>
              ))}
              <hr className="border-slate-100" />
              <div className="flex justify-between text-sm"><span className="font-semibold">Total Accommodation</span><span className="font-bold">{fmt(calc.totalAccom)}</span></div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Cost Breakdown</h4>
            {[
              { label: "Ferries", value: calc.totalFerryCost, color: "bg-blue-500" },
              { label: "Accommodation", value: calc.totalAccom, color: "bg-cyan-500" },
              { label: "Food & Dining", value: calc.totalFood, color: "bg-emerald-500" },
            ].map((item) => (
              <div key={item.label} className="mb-2">
                <div className="flex justify-between text-xs mb-0.5">
                  <span className="text-slate-600">{item.label}</span>
                  <span className="font-semibold">{fmt(item.value)} ({calc.totalCost > 0 ? Math.round((item.value / calc.totalCost) * 100) : 0}%)</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${calc.totalCost > 0 ? (item.value / calc.totalCost) * 100 : 0}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-[10px] text-slate-500">
              <strong>Note:</strong> Ferry prices are approximate. Actual costs vary by operator, speed (conventional vs high-speed), and season. 
              Check ferryhopper.com or directferries.com for real-time schedules. Accommodation estimates based on 2025-2026 average rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
