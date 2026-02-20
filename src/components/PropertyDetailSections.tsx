"use client";

import Link from "next/link";
import type { CoreMirrorProperty, DealMode } from "@/lib/coreMirror/types";

const ALL_MODES: DealMode[] = ["short_term_rent", "sale", "monthly_rent"];

function modeLabel(mode: DealMode) {
  if (mode === "short_term_rent") return "Vacation";
  if (mode === "sale") return "Sale";
  return "Monthly Rent";
}

function modeHref(property: CoreMirrorProperty, mode: DealMode) {
  const base = property.type === "real-estate" ? "real-estate" : "vacation";
  if (mode === "short_term_rent") return `/property/${base}/${property.slug}/vacation`;
  if (mode === "sale") return `/property/${base}/${property.slug}/sale`;
  return `/property/${base}/${property.slug}/monthly`;
}

export function PropertyDetailSections({
  property,
  activeMode,
}: {
  property: CoreMirrorProperty;
  activeMode?: DealMode;
}) {
  const availableModes = (property.dealTypes.length ? property.dealTypes : ["short_term_rent"]) as DealMode[];
  const currentMode = activeMode && availableModes.includes(activeMode) ? activeMode : availableModes[0];
  const isVacation = currentMode === "short_term_rent";
  const isSale = currentMode === "sale";
  const isMonthly = currentMode === "monthly_rent";
  const isRealEstate = property.type === "real-estate";

  const mapSrc = property.location.lat && property.location.lng
    ? `https://www.openstreetmap.org/export/embed.html?bbox=${property.location.lng! - 0.02}%2C${property.location.lat! - 0.01}%2C${property.location.lng! + 0.02}%2C${property.location.lat! + 0.01}&layer=mapnik&marker=${property.location.lat}%2C${property.location.lng}`
    : null;

  return (
    <div className="mx-auto max-w-[1320px] px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href={isRealEstate ? "/real-estate" : "/vacation-rentals"} className="hover:text-teal-600">
          {isRealEstate ? "Real Estate" : "Vacation Rentals"}
        </Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{property.title}</span>
      </div>

      {/* Deal mode tabs */}
      {availableModes.length > 1 && (
        <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-3">
          <div className="flex flex-wrap gap-2">
            {availableModes.map((mode) => (
              <Link
                key={mode}
                href={modeHref(property, mode)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  currentMode === mode
                    ? "border-teal-600 bg-teal-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-teal-300"
                }`}
              >
                {modeLabel(mode)}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Main grid: Gallery + Sidebar */}
      <section className="grid gap-6 xl:grid-cols-[1.75fr_0.95fr]">
        {/* Gallery */}
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="relative">
            <img src={property.gallery[0]} alt={property.title} className="h-[500px] w-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
              <p className="text-2xl font-semibold text-white">{property.headline}</p>
            </div>
          </div>
          {property.gallery.length > 1 && (
            <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3">
              {property.gallery.slice(1).map((img, i) => (
                <img key={i} src={img} alt={`${property.title} ${i + 2}`} className="h-28 w-full rounded-lg object-cover" />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{property.location.region}</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-slate-900">{property.title}</h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {property.badges.map((b) => (
              <span key={b} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-700">{b}</span>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
            {!isRealEstate && <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">Guests: {property.metrics.guests}</div>}
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">Bedrooms: {property.metrics.bedrooms}</div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">Bathrooms: {property.metrics.bathrooms}</div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2">Area: {property.metrics.areaSqm} sqm</div>
          </div>

          {/* Price display */}
          <div className="mt-6 rounded-xl bg-teal-50 p-4">
            {isVacation && (
              <>
                <p className="text-sm text-teal-600">From</p>
                <p className="text-3xl font-bold text-teal-700">EUR {property.pricing.basicFromPrice}<span className="text-lg font-normal">/night</span></p>
                {property.pricing.seasonalFromPrice && (
                  <p className="mt-1 text-xs text-teal-500">{property.pricing.seasonName}: EUR {property.pricing.seasonalFromPrice}/night</p>
                )}
              </>
            )}
            {isSale && property.realEstateMeta?.salePriceEur && (
              <>
                <p className="text-sm text-teal-600">Sale Price</p>
                <p className="text-3xl font-bold text-teal-700">EUR {property.realEstateMeta.salePriceEur.toLocaleString()}</p>
                {property.realEstateMeta.roiPercent && (
                  <p className="mt-1 text-xs text-teal-500">ROI: {property.realEstateMeta.roiPercent}%</p>
                )}
              </>
            )}
            {isMonthly && property.realEstateMeta?.monthlyRentEur && (
              <>
                <p className="text-sm text-teal-600">Monthly Rent</p>
                <p className="text-3xl font-bold text-teal-700">EUR {property.realEstateMeta.monthlyRentEur.toLocaleString()}<span className="text-lg font-normal">/mo</span></p>
              </>
            )}
          </div>

          <div className="mt-auto flex flex-col gap-2 pt-4">
            <button className="w-full rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">
              {isVacation ? "Book Now" : isSale ? "Request Info" : "Apply"}
            </button>
            <button className="w-full rounded-xl border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50">
              Contact Owner
            </button>
          </div>
        </aside>
      </section>

      {/* Description */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">About This Property</h2>
        <p className="mt-3 leading-relaxed text-slate-600">{property.detailDescription}</p>
        {property.highlights.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {property.highlights.map((h) => (
              <span key={h} className="rounded-full bg-teal-50 px-3 py-1.5 text-sm font-medium text-teal-700">{h}</span>
            ))}
          </div>
        )}
      </section>

      {/* Amenities */}
      {property.amenities.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Amenities</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {property.amenities.map((a) => (
              <div key={a} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {a}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Seasonal Rates / Pricing Table */}
      {isVacation && property.pricing.seasonalRates.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Seasonal Rates</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="pb-2 font-semibold">Season</th>
                  <th className="pb-2 font-semibold">From</th>
                  <th className="pb-2 font-semibold">To</th>
                  <th className="pb-2 font-semibold text-right">Nightly</th>
                </tr>
              </thead>
              <tbody>
                {property.pricing.seasonalRates.map((s) => (
                  <tr key={s.label} className="border-b border-slate-100">
                    <td className="py-2 font-medium text-slate-800">{s.label}</td>
                    <td className="py-2 text-slate-600">{s.from}</td>
                    <td className="py-2 text-slate-600">{s.to}</td>
                    <td className="py-2 text-right font-semibold text-teal-700">EUR {s.nightly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-400">Min stay: {property.pricing.minStayNights} night{property.pricing.minStayNights > 1 ? "s" : ""}</p>
        </section>
      )}

      {/* Sale/Monthly highlights */}
      {isSale && property.realEstateMeta?.saleHighlights && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Investment Highlights</h2>
          <ul className="mt-3 space-y-2">
            {property.realEstateMeta.saleHighlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-slate-600">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {h}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Nearby / Distances */}
      {property.nearby.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Nearby</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
            {property.nearby.map((n) => (
              <div key={n.label} className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                <span className="text-sm text-slate-700">{n.label}</span>
                <span className="text-sm font-semibold text-slate-900">{n.value}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Location Map */}
      {mapSrc && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Location</h2>
          <div className="mt-4 overflow-hidden rounded-xl">
            <iframe src={mapSrc} className="h-[300px] w-full border-0" loading="lazy" />
          </div>
          <p className="mt-2 text-sm text-slate-500">{property.location.area}, {property.location.region}, {property.location.country}</p>
        </section>
      )}

      {/* Policies */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Policies</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <span className="text-sm font-semibold text-slate-700">Smoking</span>
            <p className="text-sm text-slate-600">{property.policies.smokingAllowed ? "Allowed" : "Not allowed"}</p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <span className="text-sm font-semibold text-slate-700">Pets</span>
            <p className="text-sm text-slate-600">{property.policies.petsAllowed ? "Allowed" : "Not allowed"}</p>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50 p-3 md:col-span-2">
            <span className="text-sm font-semibold text-slate-700">Cancellation</span>
            <p className="text-sm text-slate-600">{property.policies.cancellationSummary}</p>
          </div>
          {property.policies.tourismLicense && (
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-3 md:col-span-2">
              <span className="text-sm font-semibold text-slate-700">Tourism License</span>
              <p className="text-sm text-slate-600">{property.policies.tourismLicense}</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {property.faqs.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">FAQs</h2>
          <div className="mt-4 space-y-3">
            {property.faqs.map((faq) => (
              <details key={faq.q} className="rounded-lg border border-slate-200 bg-slate-50">
                <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-800">{faq.q}</summary>
                <p className="px-4 pb-3 text-sm text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Nearby Services */}
      {property.nearbyServices.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Nearby Services</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {property.nearbyServices.map((s) => (
              <Link key={s.href} href={s.href} className="rounded-lg border border-slate-200 bg-white p-3 transition hover:border-teal-300">
                <p className="text-sm font-semibold text-slate-800">{s.name}</p>
                <p className="text-xs text-slate-500">{s.detail}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Properties */}
      {property.related.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Similar Properties</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {property.related.map((r) => (
              <Link key={r.href} href={r.href} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                <img src={r.image} alt={r.title} className="h-36 w-full object-cover transition-transform group-hover:scale-105" />
                <div className="p-3">
                  <h3 className="text-sm font-semibold text-slate-900">{r.title}</h3>
                  <p className="mt-1 text-sm font-bold text-teal-700">From EUR {r.from}/night</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts */}
      {property.blogPosts.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Related Articles</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {property.blogPosts.map((b) => (
              <Link key={b.href} href={b.href} className="group flex gap-3 rounded-lg border border-slate-200 p-3 transition hover:border-teal-300">
                <img src={b.image} alt={b.title} className="h-16 w-24 flex-shrink-0 rounded-lg object-cover" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 group-hover:text-teal-700">{b.title}</h3>
                  <p className="mt-0.5 text-xs text-slate-500">{b.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <section className="mt-8 rounded-2xl bg-teal-600 p-8 text-center text-white">
        <h2 className="text-2xl font-bold">Interested in this property?</h2>
        <p className="mt-2 text-teal-100">Get a personalized proposal or book directly through ClickyTour.</p>
        <div className="mt-4 flex justify-center gap-3">
          <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50">
            {isVacation ? "Book Now" : "Request Info"}
          </button>
          <a
            href="https://pickedfor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            View on PickedFor
          </a>
        </div>
      </section>
    </div>
  );
}
