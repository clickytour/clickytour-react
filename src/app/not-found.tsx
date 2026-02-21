import Link from "next/link";
import { PageShell } from "@/components/site";

export default function NotFound() {
  return (
    <PageShell hideFooterHero>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#0F2B46] to-cyan-900">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 600" fill="none">
            <circle cx="200" cy="150" r="300" stroke="white" strokeWidth="0.5" opacity="0.3" />
            <circle cx="600" cy="450" r="250" stroke="white" strokeWidth="0.5" opacity="0.2" />
            <path d="M0 300 Q200 250 400 300 T800 300" stroke="white" strokeWidth="0.5" opacity="0.15" />
            <path d="M0 350 Q200 300 400 350 T800 350" stroke="white" strokeWidth="0.5" opacity="0.1" />
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          {/* 404 number */}
          <div className="relative inline-block">
            <span className="text-[140px] sm:text-[180px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/25 to-white/5 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl sm:text-7xl font-bold text-white">404</span>
            </div>
          </div>

          {/* Compass icon */}
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 0v2m0 16v2m10-10h-2M4 12H2m15.07-5.07l-1.41 1.41M8.34 15.66l-1.41 1.41m0-11.14l1.41 1.41m7.32 7.32l1.41 1.41" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
              </svg>
            </div>
          </div>

          <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-white">
            Looks like you&apos;ve wandered off the map
          </h1>
          <p className="mt-3 text-slate-300 text-base sm:text-lg max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="rounded-xl bg-cyan-600 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition shadow-lg shadow-cyan-600/25">
              Back to Homepage
            </Link>
            <Link href="/search" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition backdrop-blur-sm">
              Search Properties
            </Link>
          </div>

          {/* Quick links */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/guests" className="text-slate-400 hover:text-cyan-300 transition">For Guests</Link>
            <span className="text-slate-600">|</span>
            <Link href="/owners" className="text-slate-400 hover:text-cyan-300 transition">For Owners</Link>
            <span className="text-slate-600">|</span>
            <Link href="/tools" className="text-slate-400 hover:text-cyan-300 transition">Tools</Link>
            <span className="text-slate-600">|</span>
            <Link href="/contact" className="text-slate-400 hover:text-cyan-300 transition">Contact</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
