"use client";

import { useState, useMemo } from "react";

interface Expense {
  id: number;
  date: string;
  category: string;
  description: string;
  amount: number;
  property: string;
}

const CATEGORIES = [
  { id: "cleaning", name: "Cleaning", icon: "\uD83E\uDDF9", color: "bg-sky-100 text-sky-700" },
  { id: "maintenance", name: "Maintenance", icon: "\uD83D\uDD27", color: "bg-amber-100 text-amber-700" },
  { id: "utilities", name: "Utilities", icon: "\u26A1", color: "bg-yellow-100 text-yellow-700" },
  { id: "supplies", name: "Supplies & Amenities", icon: "\uD83D\uDED2", color: "bg-emerald-100 text-emerald-700" },
  { id: "insurance", name: "Insurance", icon: "\uD83D\uDEE1\uFE0F", color: "bg-violet-100 text-violet-700" },
  { id: "tax", name: "Property Tax (ENFIA)", icon: "\uD83C\uDFDB\uFE0F", color: "bg-red-100 text-red-700" },
  { id: "platform", name: "Platform Fees", icon: "\uD83D\uDCBB", color: "bg-indigo-100 text-indigo-700" },
  { id: "marketing", name: "Marketing & Ads", icon: "\uD83D\uDCE3", color: "bg-pink-100 text-pink-700" },
  { id: "furnishing", name: "Furnishing & Décor", icon: "\uD83D\uDECB\uFE0F", color: "bg-orange-100 text-orange-700" },
  { id: "professional", name: "Professional Services", icon: "\uD83D\uDC54", color: "bg-slate-100 text-slate-700" },
  { id: "other", name: "Other", icon: "\uD83D\uDCC1", color: "bg-gray-100 text-gray-700" },
];

const SAMPLE_PROPERTIES = ["Villa Azure", "Seaside Apartment", "City Studio"];

const SAMPLE_EXPENSES: Expense[] = [
  { id: 1, date: "2026-01-05", category: "cleaning", description: "Post-guest deep clean", amount: 80, property: "Villa Azure" },
  { id: 2, date: "2026-01-10", category: "utilities", description: "Electricity bill (Dec)", amount: 145, property: "Villa Azure" },
  { id: 3, date: "2026-01-15", category: "maintenance", description: "Plumber - leaky faucet", amount: 120, property: "Seaside Apartment" },
  { id: 4, date: "2026-01-20", category: "supplies", description: "Towels, toiletries, coffee", amount: 65, property: "Villa Azure" },
  { id: 5, date: "2026-01-25", category: "insurance", description: "Annual property insurance", amount: 450, property: "Villa Azure" },
  { id: 6, date: "2026-02-01", category: "tax", description: "ENFIA property tax installment", amount: 280, property: "Seaside Apartment" },
  { id: 7, date: "2026-02-05", category: "platform", description: "Airbnb host service fee", amount: 95, property: "City Studio" },
  { id: 8, date: "2026-02-10", category: "cleaning", description: "Bi-weekly cleaning", amount: 60, property: "City Studio" },
  { id: 9, date: "2026-02-12", category: "maintenance", description: "AC maintenance service", amount: 90, property: "Villa Azure" },
  { id: 10, date: "2026-02-15", category: "utilities", description: "Water bill (Jan-Feb)", amount: 55, property: "Seaside Apartment" },
];

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>(SAMPLE_EXPENSES);
  const [filterProperty, setFilterProperty] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newExpense, setNewExpense] = useState({ date: "", category: "cleaning", description: "", amount: 0, property: SAMPLE_PROPERTIES[0] });
  const [annualRevenue, setAnnualRevenue] = useState(25000);

  const addExpense = () => {
    if (!newExpense.date || !newExpense.description || newExpense.amount <= 0) return;
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
    setNewExpense({ date: "", category: "cleaning", description: "", amount: 0, property: SAMPLE_PROPERTIES[0] });
    setShowAddForm(false);
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const filtered = useMemo(() => {
    return expenses.filter(e =>
      (!filterProperty || e.property === filterProperty) &&
      (!filterCategory || e.category === filterCategory)
    ).sort((a, b) => b.date.localeCompare(a.date));
  }, [expenses, filterProperty, filterCategory]);

  const stats = useMemo(() => {
    const total = filtered.reduce((s, e) => s + e.amount, 0);
    const byCategory = CATEGORIES.map(cat => {
      const amount = filtered.filter(e => e.category === cat.id).reduce((s, e) => s + e.amount, 0);
      return { ...cat, amount, pct: total > 0 ? (amount / total) * 100 : 0 };
    }).filter(c => c.amount > 0).sort((a, b) => b.amount - a.amount);

    const byProperty = SAMPLE_PROPERTIES.map(prop => {
      const amount = filtered.filter(e => e.property === prop).reduce((s, e) => s + e.amount, 0);
      return { property: prop, amount };
    }).filter(p => p.amount > 0);

    const byMonth: Record<string, number> = {};
    filtered.forEach(e => {
      const month = e.date.substring(0, 7);
      byMonth[month] = (byMonth[month] || 0) + e.amount;
    });

    const taxDeductible = total;
    const estimatedTaxSaving = taxDeductible * 0.22;
    const netProfitAfterExpenses = annualRevenue - total;
    const expenseRatio = annualRevenue > 0 ? (total / annualRevenue) * 100 : 0;

    return { total, byCategory, byProperty, byMonth, taxDeductible, estimatedTaxSaving, netProfitAfterExpenses, expenseRatio };
  }, [filtered, annualRevenue]);

  const fmt = (n: number) => new Intl.NumberFormat("en", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Filter Property</label>
          <select value={filterProperty} onChange={(e) => setFilterProperty(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
            <option value="">All Properties</option>
            {SAMPLE_PROPERTIES.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Filter Category</label>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="rounded-lg border border-slate-300 px-3 py-2 text-sm">
            <option value="">All Categories</option>
            {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon} {c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Annual Revenue (for ratio)</label>
          <input type="number" min={0} step={1000} value={annualRevenue} onChange={(e) => setAnnualRevenue(+e.target.value)} className="w-32 rounded-lg border border-slate-300 px-3 py-2 text-sm" />
        </div>
        <button onClick={() => setShowAddForm(!showAddForm)} className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700">
          + Add Expense
        </button>
      </div>

      {/* Add form */}
      {showAddForm && (
        <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <input type="date" value={newExpense.date} onChange={(e) => setNewExpense({ ...newExpense, date: e.target.value })} className="rounded-lg border border-slate-300 px-2 py-2 text-sm" />
            <select value={newExpense.category} onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })} className="rounded-lg border border-slate-300 px-2 py-2 text-sm">
              {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
            <input type="text" placeholder="Description" value={newExpense.description} onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })} className="rounded-lg border border-slate-300 px-2 py-2 text-sm" />
            <input type="number" placeholder="Amount" min={0} value={newExpense.amount || ""} onChange={(e) => setNewExpense({ ...newExpense, amount: +e.target.value })} className="rounded-lg border border-slate-300 px-2 py-2 text-sm" />
            <button onClick={addExpense} className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Save</button>
          </div>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Expense list - 2 cols */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="max-h-[400px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 sticky top-0">
                  <tr>
                    <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">Date</th>
                    <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">Category</th>
                    <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">Description</th>
                    <th className="text-left px-4 py-2 text-xs font-semibold text-slate-500">Property</th>
                    <th className="text-right px-4 py-2 text-xs font-semibold text-slate-500">Amount</th>
                    <th className="px-2 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((e) => {
                    const cat = CATEGORIES.find(c => c.id === e.category);
                    return (
                      <tr key={e.id} className="border-t border-slate-100 hover:bg-slate-50">
                        <td className="px-4 py-2.5 text-xs text-slate-500">{e.date}</td>
                        <td className="px-4 py-2.5"><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${cat?.color}`}>{cat?.icon} {cat?.name}</span></td>
                        <td className="px-4 py-2.5 text-slate-700">{e.description}</td>
                        <td className="px-4 py-2.5 text-xs text-slate-500">{e.property}</td>
                        <td className="px-4 py-2.5 text-right font-semibold">{fmt(e.amount)}</td>
                        <td className="px-2 py-2.5"><button onClick={() => removeExpense(e.id)} className="text-xs text-red-400 hover:text-red-600">x</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-50 px-4 py-2 flex justify-between border-t">
              <span className="text-sm text-slate-500">{filtered.length} expenses</span>
              <span className="text-sm font-bold">{fmt(stats.total)}</span>
            </div>
          </div>
        </div>

        {/* Stats sidebar */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gradient-to-br from-red-500 to-red-600 p-4 text-white">
              <p className="text-[10px] text-red-200">Total Expenses</p>
              <p className="text-xl font-bold mt-1">{fmt(stats.total)}</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 text-white">
              <p className="text-[10px] text-emerald-200">Net Profit</p>
              <p className="text-xl font-bold mt-1">{fmt(stats.netProfitAfterExpenses)}</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-sm font-bold text-slate-900 mb-2">By Category</h4>
            <div className="space-y-2">
              {stats.byCategory.slice(0, 6).map((c) => (
                <div key={c.id}>
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-slate-600">{c.icon} {c.name}</span>
                    <span className="font-semibold">{fmt(c.amount)} ({c.pct.toFixed(0)}%)</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-cyan-500" style={{ width: `${c.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Tax Insights</h4>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between"><span className="text-slate-500">Expense Ratio</span><span className="font-semibold">{stats.expenseRatio.toFixed(1)}%</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Tax Deductible</span><span className="font-semibold">{fmt(stats.taxDeductible)}</span></div>
              <div className="flex justify-between"><span className="text-emerald-600">Est. Tax Saving (22%)</span><span className="font-bold text-emerald-600">{fmt(stats.estimatedTaxSaving)}</span></div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-[10px] text-slate-500">
              <strong>Note:</strong> Tax calculations use simplified 22% rate. Greek rental income tax has progressive brackets. Consult an accountant for accurate deductions and AADE e-books compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
