import Link from "next/link";
import type { CoreMirrorJob } from "@/lib/coreMirror/types";

export function JobDetailSections({ job }: { job: CoreMirrorJob }) {
  return (
    <div className="mx-auto max-w-[1000px] px-4 py-8">
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/search?intent=jobs" className="hover:text-teal-600">Jobs</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{job.title}</span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">{job.roleType}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{job.category}</span>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${job.status === "open" ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>
                {job.status}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-slate-900">{job.title}</h1>
            <p className="mt-1 text-sm text-slate-500">{job.companyName} - {job.location}, {job.region}</p>
            {job.salaryRange && <p className="mt-2 text-lg font-semibold text-teal-700">{job.salaryRange}</p>}

            <h2 className="mt-6 text-lg font-bold text-slate-900">Description</h2>
            <p className="mt-2 leading-relaxed text-slate-600">{job.description}</p>

            <h2 className="mt-6 text-lg font-bold text-slate-900">Requirements</h2>
            <ul className="mt-2 space-y-2">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-slate-600">
                  <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {r}
                </li>
              ))}
            </ul>

            {job.benefits.length > 0 && (
              <>
                <h2 className="mt-6 text-lg font-bold text-slate-900">Benefits</h2>
                <ul className="mt-2 space-y-2">
                  {job.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-slate-600">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800">Apply Now</h3>
            <a href={`mailto:${job.contactEmail}?subject=Application: ${job.title}`} className="mt-3 block w-full rounded-xl bg-teal-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-teal-700">
              Send Application
            </a>
            <p className="mt-2 text-xs text-slate-500 text-center">{job.contactEmail}</p>
          </div>
          <Link href="/search?intent=jobs" className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-semibold text-teal-700 shadow-sm hover:bg-teal-50">
            Browse All Jobs
          </Link>
        </aside>
      </div>
    </div>
  );
}
