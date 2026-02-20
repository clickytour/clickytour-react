"use client";

import Link from "next/link";
import type { CoreMirrorHotel, CoreMirrorHotelRoom, DealMode } from "@/lib/coreMirror/types";

function modeLabel(mode: DealMode) {
  if (mode === "short_term_rent") return "Vacation";
  if (mode === "sale") return "Sale";
  return "Monthly Rent";
}

export function HotelDetailSections({
  hotel,
  rooms,
  activeMode,
}: {
  hotel: CoreMirrorHotel;
  rooms: CoreMirrorHotelRoom[];
  activeMode?: DealMode;
}) {
  const availableModes = hotel.dealTypes.length ? hotel.dealTypes : ["short_term_rent"];
  const currentMode = activeMode && availableModes.includes(activeMode) ? activeMode : availableModes[0];

  return (
    <div className="mx-auto max-w-[1320px] px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href="/search?intent=hotels" className="hover:text-teal-600">Hotels</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{hotel.title}</span>
      </div>

      {/* Deal mode tabs */}
      {availableModes.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {availableModes.map((mode) => (
            <Link
              key={mode}
              href={mode === "short_term_rent" ? `/property/hotel/${hotel.slug}/vacation` : mode === "sale" ? `/property/hotel/${hotel.slug}/sale` : `/property/hotel/${hotel.slug}/monthly`}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${currentMode === mode ? "border-teal-600 bg-teal-600 text-white" : "border-slate-300 text-slate-700 hover:border-teal-300"}`}
            >
              {modeLabel(mode as DealMode)}
            </Link>
          ))}
        </div>
      )}

      {/* Hero */}
      <section className="grid gap-6 xl:grid-cols-[1.75fr_0.95fr]">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="relative">
            <img src={hotel.media.primaryImage} alt={hotel.title} className="h-[500px] w-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5">
              <p className="text-2xl font-semibold text-white">{hotel.title}</p>
            </div>
          </div>
          {hotel.media.galleryImages.length > 0 && (
            <div className="grid grid-cols-2 gap-2 p-2 md:grid-cols-3">
              {hotel.media.galleryImages.map((img, i) => (
                <img key={i} src={img} alt={`${hotel.title} ${i + 2}`} className="h-28 w-full rounded-lg object-cover" />
              ))}
            </div>
          )}
        </div>

        <aside className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{hotel.location.region}</p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight text-slate-900">{hotel.title}</h1>
          <p className="mt-1 text-sm text-slate-500">{hotel.hotelType.replace(/_/g, " ")}</p>

          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
            {hotel.distances.map((d) => (
              <div key={d.label} className="rounded-lg border border-slate-200 bg-slate-50 p-2">{d.label}: {d.value}</div>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-teal-50 p-4">
            <p className="text-sm text-teal-600">From</p>
            <p className="text-3xl font-bold text-teal-700">EUR {hotel.prices.fromNightlyEur}<span className="text-lg font-normal">/night</span></p>
            {hotel.prices.saleEur && currentMode === "sale" && (
              <p className="mt-1 text-lg font-bold text-teal-700">Sale: EUR {hotel.prices.saleEur.toLocaleString()}</p>
            )}
            {hotel.prices.monthlyEur && currentMode === "monthly_rent" && (
              <p className="mt-1 text-lg font-bold text-teal-700">EUR {hotel.prices.monthlyEur.toLocaleString()}/month</p>
            )}
          </div>

          <div className="mt-auto flex flex-col gap-2 pt-4">
            <button className="w-full rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">Book Now</button>
            <button className="w-full rounded-xl border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50">Contact Hotel</button>
          </div>
        </aside>
      </section>

      {/* Description */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">About</h2>
        <p className="mt-3 leading-relaxed text-slate-600">{hotel.description}</p>
      </section>

      {/* Amenities */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Amenities</h2>
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {hotel.amenities.map((a) => (
            <div key={a} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700">
              <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              {a}
            </div>
          ))}
        </div>
      </section>

      {/* Rooms */}
      {rooms.length > 0 && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Rooms</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rooms.map((room) => (
              <Link key={room.slug} href={`/property/hotel-room/${room.slug}`} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
                <img src={room.media.primaryImage} alt={room.title} className="h-40 w-full object-cover transition-transform group-hover:scale-105" />
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900">{room.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{room.shortSummary}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm text-slate-500">Max {room.maxGuests} guests</span>
                    <span className="text-base font-bold text-teal-700">EUR {room.rates.nightlyEur}/night</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Video */}
      {hotel.media.videoUrl && (
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Video Tour</h2>
          <div className="mt-4 overflow-hidden rounded-xl">
            <iframe src={hotel.media.videoUrl} className="h-[400px] w-full border-0" allowFullScreen loading="lazy" />
          </div>
        </section>
      )}
    </div>
  );
}
