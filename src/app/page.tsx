import Link from "next/link";
import { heroPages } from "@/lib/landingHeroes";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f5f8] px-6 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-semibold">Villa4you React Hero Previews</h1>
        <p className="mt-2 text-slate-600">Open each landing-page hero draft:</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {heroPages.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 hover:bg-slate-100"
            >
              <div className="font-medium">{p.route}</div>
              <div className="mt-1 text-sm text-slate-500">{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
