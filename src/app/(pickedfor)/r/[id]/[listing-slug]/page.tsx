'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { getListingBySlug, samplePartner } from '@/data/mock-proposals';
import { ProposalHeader } from '@/components/pickedfor/ProposalHeader';
import { ProposalFooter } from '@/components/pickedfor/ProposalFooter';

export default function ListingDetail() {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const slug = params['listing-slug'] as string;
  const brandedParam = searchParams.get('branded');
  const modeParam = searchParams.get('mode');
  const branded = brandedParam === 'true' || (brandedParam === null && modeParam === 'brand');
  const listing = getListingBySlug(slug);

  const [liked, setLiked] = useState(false);
  const [photoIdx, setPhotoIdx] = useState(0);

  if (!listing) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-gray-500">Listing not found</p>
      </div>
    );
  }

  const partner = samplePartner;
  const accent = branded ? partner.accentColor : '#1e3a5f';
  const isUnavailable = listing.availability === 'unavailable';
  const brandQuery = modeParam ? `?mode=${modeParam}` : brandedParam === 'true' ? '?branded=true' : '';
  const backHref = id.startsWith('demo-') ? `/r/${id}${brandQuery}` : `/proposal/${id}${brandQuery}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <ProposalHeader partner={partner} branded={branded} />

      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Back */}
        <Link href={backHref} className="mb-6 inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          ← Back to proposal
        </Link>

        {/* Availability + Rating bar */}
        <div className="mb-4 flex items-center gap-4">
          {listing.availability === 'available' && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Available
            </span>
          )}
          {listing.availability === 'unavailable' && (
            <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
              <span className="h-2 w-2 rounded-full bg-red-500" /> No longer available
            </span>
          )}
          {listing.availability === 'new-match' && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-500" /> New Match
            </span>
          )}
          <span className="flex items-center gap-1 text-sm">
            <svg className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">{listing.rating}</span>
            <span className="text-gray-400">({listing.reviewCount} reviews)</span>
          </span>
          <button onClick={() => setLiked(!liked)} className="ml-auto rounded-full p-2 hover:bg-gray-100" aria-label="Like">
            <svg className={`h-6 w-6 ${liked ? 'text-red-500' : 'text-gray-400'}`} fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>

        {/* Photo Gallery with main + thumbnails */}
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="overflow-hidden rounded-xl sm:col-span-2 sm:row-span-2">
            <img src={listing.photos[photoIdx]} alt={listing.title} className="h-full w-full object-cover" style={{ minHeight: '400px' }} />
          </div>
          {listing.photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setPhotoIdx(i)}
              className={`overflow-hidden rounded-xl ring-2 transition-all ${i === photoIdx ? 'ring-blue-500' : 'ring-transparent hover:ring-gray-300'}`}
            >
              <img src={src} alt={`${listing.title} ${i + 1}`} className="h-full w-full object-cover" style={{ minHeight: '196px' }} />
            </button>
          ))}
        </div>

        {/* Title + Price */}
        <div className={`mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between ${isUnavailable ? 'opacity-60' : ''}`}>
          <div>
            <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-600">{listing.type}</span>
            <h1 className={`mt-2 text-3xl font-bold text-gray-900 ${isUnavailable ? 'line-through decoration-red-400' : ''}`}>{listing.title}</h1>
            {listing.location && <p className="mt-1 text-gray-500">{listing.location}</p>}
          </div>
          <div className="text-right">
            <p className={`text-3xl font-bold ${isUnavailable ? 'text-gray-400 line-through' : ''}`} style={isUnavailable ? {} : { color: accent }}>
              {listing.price}
            </p>
            {listing.priceNote && <p className="text-sm text-gray-500">{listing.priceNote}</p>}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Description</h2>
          <p className="mt-3 leading-relaxed text-gray-600">{listing.description}</p>
        </div>

        {/* Features Grid */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Details</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {listing.features.map((f) => (
              <div key={f.label} className="rounded-lg border border-gray-200 bg-white p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{f.label}</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">{f.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900">Location</h2>
          <div className="mt-4 flex h-64 items-center justify-center rounded-xl bg-gray-200 text-gray-400">
            Map placeholder — {listing.location}
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          {isUnavailable ? (
            <a href="#inquire" className="flex-1 rounded-xl py-4 text-center text-lg font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
              Find Similar Options
            </a>
          ) : (
            <>
              <a href="#book" className="flex-1 rounded-xl py-4 text-center text-lg font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: accent }}>
                Book Now
              </a>
              <a href="#inquire" className="flex-1 rounded-xl border-2 py-4 text-center text-lg font-semibold transition-colors hover:bg-gray-50" style={{ borderColor: accent, color: accent }}>
                Inquire
              </a>
            </>
          )}
        </div>

        {/* Similar listings placeholder */}
        <div className="mt-12 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
          <h2 className="text-lg font-semibold text-gray-500">Similar Listings</h2>
          <p className="mt-2 text-sm text-gray-400">More options matching your criteria will appear here</p>
        </div>
      </div>

      <ProposalFooter partner={partner} branded={branded} />
    </div>
  );
}
