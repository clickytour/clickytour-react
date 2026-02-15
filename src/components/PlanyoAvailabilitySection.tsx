"use client";

import Script from "next/script";

export function PlanyoAvailabilitySection({
  calendarId,
  resourceId,
  actionUrl,
}: {
  calendarId: string;
  resourceId: string;
  actionUrl: string;
}) {
  const iframeSrc = `https://www.planyo.com/embed-calendar.php?resource_id=${resourceId}&calendar=${calendarId}`;

  return (
    <section className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3">
      <Script src="https://www.planyo.com/utils.js" strategy="afterInteractive" />
      <Script src="https://www.planyo.com/wrappers.js" strategy="afterInteractive" />
      <Script src="https://www.planyo.com/Plugins/PlanyoFiles/jquery-3.6.4.min.js" strategy="afterInteractive" />
      <Script src="https://www.planyo.com/Plugins/PlanyoFiles/price-preview.js" strategy="afterInteractive" />

      <link rel="stylesheet" href="https://sandbox.planyo.com/Plugins/PlanyoFiles/bootstrap-planyo.min.css" />
      <link rel="stylesheet" href={`https://sandbox.planyo.com/schemes/?calendar=${calendarId}&sel=scheme_css`} />

      <p className="text-xs text-blue-700">Live availability & pricing (Planyo)</p>

      <div className="mt-2 rounded-lg border border-blue-200 bg-white p-3">
        <p className="text-sm text-slate-700">Calendar {calendarId} · Resource {resourceId}</p>
        <a
          href={`${actionUrl}?calendar=${calendarId}&resource_id=${resourceId}`}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white"
        >
          Open reservation flow
        </a>
      </div>

      <iframe
        src={iframeSrc}
        className="mt-2 h-[420px] w-full rounded-lg border border-blue-200 bg-white"
        title="Planyo availability and pricing"
      />
    </section>
  );
}
