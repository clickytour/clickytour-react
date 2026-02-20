"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { searchRegions, type Preset, type PlaceEntry, type PlaceSelection } from "@/lib/greekRegions";

const inputClass =
  "w-full rounded-xl border border-slate-200 px-4 py-3 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none text-sm";
const labelClass = "block text-sm font-semibold text-slate-700 mb-1";

type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (selection: PlaceSelection | null) => void;
  onTextChange?: (text: string) => void;
  preset?: Preset;
  country?: string | null; // "gr" | null (worldwide)
  mirrorApiUrl?: string;   // Tier 2 endpoint (future)
  enableGoogleFallback?: boolean; // Tier 3 (future)
  name?: string;
};

export function PlaceAutocomplete({
  label = "Destination / Region",
  placeholder = "e.g., Santorini",
  required = false,
  value = "",
  onChange,
  onTextChange,
  preset = "clickytour",
  // country = "gr",         // reserved for Tier 3
  // mirrorApiUrl,           // reserved for Tier 2
  // enableGoogleFallback,   // reserved for Tier 3
  name = "destination",
}: Props) {
  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState<PlaceEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync external value
  useEffect(() => {
    setQuery(value);
  }, [value]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleInput = useCallback(
    (text: string) => {
      setQuery(text);
      onTextChange?.(text);
      setActiveIdx(-1);

      if (text.length < 2) {
        setSuggestions([]);
        setOpen(false);
        return;
      }

      // Tier 1: static region search
      const results = searchRegions(text, preset, 8);
      setSuggestions(results);
      setOpen(results.length > 0);

      // TODO Tier 2: if results < 3, query /api/places/suggest
      // TODO Tier 3: if still < 1, query Google Places API
    },
    [preset, onTextChange]
  );

  function selectPlace(entry: PlaceEntry) {
    setQuery(entry.name);
    setOpen(false);
    setSuggestions([]);

    const selection: PlaceSelection = {
      displayName: entry.name,
      placeId: entry.placeId,
      lat: entry.lat,
      lng: entry.lng,
      country: "GR",
      region: entry.parent || entry.name,
      placeType: entry.type,
      tier: 1,
    };
    onChange?.(selection);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!open || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => (i < suggestions.length - 1 ? i + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => (i > 0 ? i - 1 : suggestions.length - 1));
    } else if (e.key === "Enter" && activeIdx >= 0) {
      e.preventDefault();
      selectPlace(suggestions[activeIdx]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const typeLabel: Record<string, string> = {
    region: "Region",
    island: "Island",
    city: "City",
    area: "Area",
  };

  return (
    <div ref={wrapperRef} className="relative">
      {label && (
        <label className={labelClass}>
          {label}
          {required && " *"}
        </label>
      )}
      <input
        ref={inputRef}
        type="text"
        name={name}
        className={inputClass}
        placeholder={placeholder}
        value={query}
        onChange={(e) => handleInput(e.target.value)}
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true);
        }}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        required={required}
      />

      {open && suggestions.length > 0 && (
        <div className="absolute z-50 mt-1 w-full rounded-xl border border-slate-200 bg-white shadow-lg max-h-64 overflow-y-auto">
          {suggestions.map((s, idx) => (
            <button
              key={s.placeId}
              type="button"
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between gap-2 ${
                idx === activeIdx
                  ? "bg-teal-50 text-teal-900"
                  : "text-slate-700 hover:bg-slate-50"
              } ${idx === 0 ? "rounded-t-xl" : ""} ${idx === suggestions.length - 1 ? "rounded-b-xl" : ""}`}
              onClick={() => selectPlace(s)}
              onMouseEnter={() => setActiveIdx(idx)}
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>
                  <span className="font-medium">{s.name}</span>
                  {s.parent && (
                    <span className="text-slate-400 ml-1 text-xs">({s.parent})</span>
                  )}
                </span>
              </span>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                {typeLabel[s.type] || s.type}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
