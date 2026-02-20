import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell, SectionTitle } from "@/components/site";
import { TOOLS, TOOL_CATEGORIES, TOOL_ROLES, getToolBySlug } from "@/lib/tools";
import ToolCalculatorEmbed from "@/components/tools/ToolCalculatorEmbed";

export async function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} | ClickyTour Tools`,
    description: tool.seoDescription || tool.description.slice(0, 160),
    openGraph: { title: `${tool.name} | ClickyTour Tools`, description: tool.tagline },
  };
}

export default async function ToolDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const cat = TOOL_CATEGORIES.find((c) => c.slug === tool.category);
  const isActive = tool.status === "active";
  const isComingSoon = tool.status === "comingSoon";

  return (
    <PageShell>
      {/* Hero */}
      <section className={`relative overflow-hidden py-20 text-white ${isComingSoon ? "bg-gradient-to-br from-slate-800 to-slate-700" : "bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900"}`}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="container relative mx-auto max-w-5xl px-4">
          <nav className="mb-4 text-sm text-slate-400">
            <Link href="/tools" className="hover:text-cyan-300">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{tool.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            {cat && <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-violet-200">{cat.label}</span>}
            {tool.roles.map((r) => (
              <span key={r} className="rounded-full bg-white/10 px-3 py-0.5 text-xs font-medium text-cyan-200">
                {TOOL_ROLES.find((tr) => tr.slug === r)?.label || r}
              </span>
            ))}
            {isComingSoon && <span className="rounded-full bg-amber-500/30 px-3 py-0.5 text-xs font-bold text-amber-200">Coming Soon</span>}
            {tool.hasDemo && <span className="rounded-full bg-violet-500/30 px-3 py-0.5 text-xs font-bold text-violet-200">Demo Available</span>}
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{tool.name}</h1>
          <p className="mt-3 text-xl text-slate-300">{tool.tagline}</p>
          <p className="mt-4 max-w-3xl text-slate-400 leading-relaxed">{tool.description}</p>

          <div className="mt-8 flex gap-4">
            {isActive && tool.hasDemo ? (
              <>
                <span className="rounded-full bg-cyan-600 px-8 py-3 text-sm font-semibold text-white shadow-lg cursor-pointer hover:bg-cyan-700 transition">Try Demo</span>
                <Link href="/contact" className="rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">Get Full Access</Link>
              </>
            ) : isComingSoon ? (
              <Link href="/contact" className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition">Notify Me When Available</Link>
            ) : (
              <Link href="/contact" className="rounded-full bg-cyan-600 px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition">Get Access</Link>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Calculator (if available) */}
      <ToolCalculatorEmbed slug={tool.slug} />

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <SectionTitle title="What It Does" />
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {tool.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <svg className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      {tool.useCases && tool.useCases.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionTitle title="Use Cases" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {tool.useCases.map((uc) => (
                <div key={uc.role} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-3">For {uc.role}</h3>
                  <ul className="space-y-2">
                    {uc.cases.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-cyan-500 mt-0.5">&#x25B8;</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inputs / Outputs */}
      {(tool.inputs || tool.outputs) && (
        <section className="py-16">
          <div className="container mx-auto max-w-5xl px-4">
            <SectionTitle title="How It Works" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {tool.inputs && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-cyan-600">&#x2192;</span> What Goes In
                  </h3>
                  <ul className="space-y-2">
                    {tool.inputs.map((inp) => (
                      <li key={inp} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" /> {inp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {tool.outputs && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-emerald-600">&#x2190;</span> What Comes Out
                  </h3>
                  <ul className="space-y-2">
                    {tool.outputs.map((out) => (
                      <li key={out} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 flex-shrink-0" /> {out}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Demo placeholder */}
      {tool.hasDemo && isActive && (
        <section className="bg-gradient-to-br from-violet-50 to-cyan-50 py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900">Try It Now</h2>
            <p className="mt-2 text-sm text-slate-600">Interactive demo with sample data. No login required.</p>
            <div className="mt-8 rounded-2xl border-2 border-dashed border-violet-300 bg-white p-16">
              <p className="text-slate-400 text-lg">Interactive demo will be available here</p>
              <p className="mt-2 text-sm text-slate-400">Demo mode: {tool.demoMode}</p>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {tool.faq && tool.faq.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <SectionTitle title="Frequently Asked Questions" />
            <div className="mt-8 space-y-4">
              {tool.faq.map((item) => (
                <details key={item.q} className="group rounded-xl border border-slate-200 bg-white">
                  <summary className="cursor-pointer p-5 font-medium text-slate-900 hover:text-cyan-700 transition">{item.q}</summary>
                  <div className="px-5 pb-5 text-sm text-slate-600">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="pb-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-600 p-10 text-white shadow-lg">
            <h2 className="text-2xl font-bold">{isComingSoon ? `${tool.name} is Coming Soon` : `Start Using ${tool.name}`}</h2>
            <p className="mt-2 text-violet-100">{isComingSoon ? "Be the first to know when this tool launches." : "Join ClickyTour and unlock all tools for your business."}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-violet-700 hover:bg-violet-50 transition">{isComingSoon ? "Notify Me" : "Get Started"}</Link>
              <Link href="/tools" className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">Browse All Tools</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
