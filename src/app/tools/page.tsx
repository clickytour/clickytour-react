"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { PageShell, useNavScopeOverride } from "@/components/site";
import { TOOLS, TOOL_CATEGORIES, TOOL_ROLES } from "@/lib/tools";
import type { Tool } from "@/lib/tools";

const statusColors: Record<string, string> = {
  active: "bg-emerald-100 text-emerald-700",
  preview: "bg-amber-100 text-amber-700",
  comingSoon: "bg-slate-100 text-slate-600",
};

const statusLabels: Record<string, string> = {
  active: "Available",
  preview: "Preview",
  comingSoon: "Coming Soon",
};

const categoryColors: Record<string, string> = {
  creation: "bg-violet-100 text-violet-700",
  optimization: "bg-sky-100 text-sky-700",
  distribution: "bg-green-100 text-green-700",
  insights: "bg-amber-100 text-amber-700",
  system: "bg-slate-100 text-slate-700",
  calculator: "bg-cyan-100 text-cyan-700",
};

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={`/tools/${tool.slug}`} className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between mb-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-${tool.color}-100 text-${tool.color}-600 text-lg`}>
          {tool.icon === "pencil" ? "\u270F\uFE0F" : tool.icon === "chart" ? "\uD83D\uDCC8" : tool.icon === "calculator" ? "\uD83E\uDDEE" : tool.icon === "document" ? "\uD83D\uDCC4" : tool.icon === "camera" ? "\uD83D\uDCF7" : tool.icon === "video" ? "\uD83C\uDFA5" : tool.icon === "share" ? "\uD83D\uDD17" : tool.icon === "briefcase" ? "\uD83D\uDCBC" : tool.icon === "form" ? "\uD83D\uDCDD" : tool.icon === "star" ? "\u2B50" : tool.icon === "upload" ? "\uD83D\uDCE4" : tool.icon === "package" ? "\uD83D\uDCE6" : "\uD83D\uDEE0\uFE0F"}
        </div>
        <div className="flex gap-1.5">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusColors[tool.status]}`}>{statusLabels[tool.status]}</span>
          {tool.hasDemo && <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-700">Demo</span>}
        </div>
      </div>
      <h3 className="font-bold text-slate-900 group-hover:text-cyan-700 transition">{tool.name}</h3>
      <p className="mt-1 text-sm text-slate-500 line-clamp-2 flex-1">{tool.tagline}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${categoryColors[tool.category]}`}>
          {TOOL_CATEGORIES.find((c) => c.slug === tool.category)?.label}
        </span>
        {tool.roles.slice(0, 2).map((r) => (
          <span key={r} className="rounded-full bg-slate-50 border border-slate-200 px-2 py-0.5 text-[10px] text-slate-600">
            {TOOL_ROLES.find((tr) => tr.slug === r)?.label || r}
          </span>
        ))}
        {tool.roles.length > 2 && <span className="text-[10px] text-slate-400">+{tool.roles.length - 2}</span>}
      </div>
    </Link>
  );
}

export default function ToolsHubPage() {
  const { setOverride } = useNavScopeOverride();
  useEffect(() => { setOverride("explore"); return () => setOverride(null); }, [setOverride]);

  const [roleFilter, setRoleFilter] = useState("");
  const [catFilter, setCatFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let result = TOOLS;
    if (roleFilter) result = result.filter((t) => t.roles.includes(roleFilter as any));
    if (catFilter) result = result.filter((t) => t.category === catFilter);
    if (statusFilter) result = result.filter((t) => t.status === statusFilter);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((t) => t.name.toLowerCase().includes(q) || t.tagline.toLowerCase().includes(q));
    }
    return result.sort((a, b) => (a.status === "active" ? 0 : 1) - (b.status === "active" ? 0 : 1));
  }, [roleFilter, catFilter, statusFilter, search]);

  const activeCount = TOOLS.filter((t) => t.status === "active").length;
  const comingSoonCount = TOOLS.filter((t) => t.status === "comingSoon").length;

  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 py-20 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto max-w-6xl px-4 text-center">
          <span className="inline-block rounded-full bg-violet-500/20 px-4 py-1 text-sm font-medium text-violet-300 mb-4">ClickyTour Tools</span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Build, Promote, Automate</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            {TOOLS.length} tools to power your hospitality business. Generate content, optimize listings, analyze investments, and close deals faster.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            <div><span className="block text-3xl font-bold text-cyan-400">{activeCount}</span><span className="text-sm text-slate-400">Available Now</span></div>
            <div><span className="block text-3xl font-bold text-violet-400">{comingSoonCount}</span><span className="text-sm text-slate-400">Coming Soon</span></div>
            <div><span className="block text-3xl font-bold text-amber-400">{TOOL_CATEGORIES.length}</span><span className="text-sm text-slate-400">Categories</span></div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-slate-200 bg-white py-4 sticky top-0 z-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <input type="text" placeholder="Search tools..." value={search} onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-cyan-400 w-full sm:w-52" />
            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none">
              <option value="">All Roles</option>
              {TOOL_ROLES.map((r) => <option key={r.slug} value={r.slug}>{r.label}</option>)}
            </select>
            <select value={catFilter} onChange={(e) => setCatFilter(e.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none">
              <option value="">All Categories</option>
              {TOOL_CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.label}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none">
              <option value="">All Status</option>
              <option value="active">Available</option>
              <option value="comingSoon">Coming Soon</option>
            </select>
            <span className="ml-auto text-sm text-slate-500">{filtered.length} tools</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-slate-600">No tools match your filters.</p>
              <button onClick={() => { setRoleFilter(""); setCatFilter(""); setStatusFilter(""); setSearch(""); }} className="mt-3 text-sm text-cyan-600 hover:underline">Clear filters</button>
            </div>
          )}
        </div>
      </section>

      {/* Categories section */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Tool Categories</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TOOL_CATEGORIES.map((cat) => {
              const count = TOOLS.filter((t) => t.category === cat.slug).length;
              return (
                <button key={cat.slug} onClick={() => setCatFilter(cat.slug)} className="rounded-xl border border-slate-200 bg-white p-5 text-left hover:border-cyan-300 hover:shadow-sm transition">
                  <h3 className="font-bold text-slate-900">{cat.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">{cat.description}</p>
                  <span className="mt-2 inline-block rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">{count} tools</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 p-10 text-white shadow-lg">
            <h2 className="text-2xl font-bold">Ready to Supercharge Your Business?</h2>
            <p className="mt-2 text-violet-100">Sign up for free and start using tools that save hours every week.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition">Get Started Free</Link>
              <Link href="/marketplace" className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Explore Marketplace</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
