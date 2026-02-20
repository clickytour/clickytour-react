"use client";

import Link from "next/link";
import type { CoreMirrorHotelRoom, DealMode } from "@/lib/coreMirror/types";
import { GuestRequestInlineForm } from "@/components/forms";

export function HotelRoomDetailSections({
  room,
  activeMode,
}: {
  room: CoreMirrorHotelRoom;
  activeMode?: DealMode;
}) {
  return (
    <div className="mx-auto max-w-[1320px] px-4 py-8">
      <div className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-teal-600">Home</Link>
        <span className="mx-1">/</span>
        <Link href={`/property/hotel/${room.hotelSlug}`} className="hover:text-teal-600">Hotel</Link>
        <span className="mx-1">/</span>
        <span className="text-slate-700">{room.title}</span>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.75fr_0.95fr]">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <img src={room.media.primaryImage} alt={room.title} className="h-[450px] w-full object-cover" />
          {room.media.galleryImages.length > 0 && (
            <div className="grid grid-cols-3 gap-2 p-2">
              {room.media.galleryImages.map((img, i) => (
                <img key={i} src={img} alt="" className="h-28 w-full rounded-lg object-cover" />
              ))}
            </div>
          )}
        </div>

        <aside className="flex flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{room.roomType}</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">{room.title}</h1>
          <p className="mt-2 text-sm text-slate-600">{room.shortSummary}</p>

          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-700">Max Guests: {room.maxGuests}</div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-700">Rooms Available: {room.quantity}</div>
          </div>

          <div className="mt-6 rounded-xl bg-teal-50 p-4">
            <p className="text-sm text-teal-600">Nightly Rate</p>
            <p className="text-3xl font-bold text-teal-700">EUR {room.rates.nightlyEur}<span className="text-lg font-normal">/night</span></p>
            {room.rates.monthlyEur && (
              <p className="mt-1 text-sm text-teal-500">Monthly: EUR {room.rates.monthlyEur}/mo</p>
            )}
          </div>

          <div className="mt-auto flex flex-col gap-2 pt-4">
            <button className="w-full rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-700">Book Room</button>
            <Link href={`/property/hotel/${room.hotelSlug}`} className="w-full rounded-xl border border-teal-600 px-6 py-3 text-center text-sm font-semibold text-teal-700 hover:bg-teal-50">
              View Full Hotel
            </Link>
          </div>
        </aside>
      </section>

      {/* Guest Request Form */}
      <GuestRequestInlineForm
        contextType="property"
        contextId={room.id}
        contextSlug={room.slug}
        contextTitle={room.title}
        propertyMode="short_term_rent"
      />

      {/* Amenities */}
      {room.amenities.length > 0 && (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">Room Amenities</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {room.amenities.map((a) => (
              <div key={a} className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <svg className="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {a}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
