"use client";

import Link from "next/link";
import type { CoreMirrorService } from "@/lib/coreMirror/types";

export function ServiceDetailSections({ service }: { service: CoreMirrorService }) {
  return (
    <div className="mx-auto max-w-[1320px] px-4 py-8">
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/search?intent=services" className="hover:text-teal-600">Services</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{service.businessName}</span>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.75fr_0.95fr]">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <img src={service.media.primaryPhoto} alt={service.businessName} className="h-[400px] w-full object-cover" />
          {service.media.galleryPhotos.length > 0 && (
            <div className="grid grid-cols-3 gap-2 p-2">
              {service.media.galleryPhotos.map((img, i) => (
                <img key={i} src={img} alt="" className="h-28 w-full rounded-lg object-cover" />
              ))}
            </div>
          )}
        </div>

        <aside className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{service.categoryId.replace(/-/g, " ")}</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">{service.businessName}</h1>
          <p className="mt-1 text-sm text-slate-500">{service.location.city}, {service.location.country}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {service.highlights.map((h) => (
              <span key={h} className="rounded-full bg-teal-50 px-3 py-1 text-sm font-medium text-teal-700">{h}</span>
            ))}
          </div>

          <div className="mt-4 text-sm text-slate-600">
            <p>Languages: {service.languagesSupported.join(", ")}</p>
            {service.location.serviceAreaCoverageKm && <p className="mt-1">Coverage: {service.location.serviceAreaCoverageKm}km radius</p>}
          </div>

          <div className="mt-auto flex flex-col gap-2 pt-4">
            {service.pricing.bookingType === "instant_booking" ? (
              <button className="w-full rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">Book Now</button>
            ) : (
              <button className="w-full rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">Request Booking</button>
            )}
            <a href={`mailto:${service.email}`} className="w-full rounded-xl border border-teal-600 px-6 py-3 text-center text-sm font-semibold text-teal-700 hover:bg-teal-50">
              Contact: {service.email}
            </a>
          </div>
        </aside>
      </section>

      {/* Description */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">About</h2>
        <p className="mt-3 leading-relaxed text-slate-600">{service.fullDescription}</p>
      </section>

      {/* Price List */}
      {service.pricing.priceList.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Pricing</h2>
          <div className="mt-4 space-y-3">
            {service.pricing.priceList.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.priceModel.replace(/_/g, " ")}</p>
                </div>
                <span className="text-base font-bold text-teal-700">
                  {item.guestPriceGross ? `EUR ${item.guestPriceGross}` : "Quote"}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
