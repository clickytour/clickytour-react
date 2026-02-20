"use client";

import { useState, useRef, useEffect, useCallback } from "react";

export type PlaceResult = {
  /** Display label */
  displayName: string;
  label: string;
  area: string;
  region: string;
  country: string;
  placeId: string | null;
  lat: number | null;
  lng: number | null;
  listingCount: number;
};

type PlaceAutocompleteProps = {
  /** Field label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Current value (controlled) */
  value?: string;
  /** Called when user types (free text changes) */
  onTextChange?: (value: string) => void;
  /** Called when user selects a structured suggestion */
  onChange?: (place: PlaceResult | null) => void;
  /** Filter by country (e.g. "Greece") */
  country?: string;
  /** Max suggestions to show */
  limit?: number;
  /** Input name attribute */
  name?: string;
  /** Required field */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Additional className for the wrapper */
  className?: string;
};

export function PlaceAutocomplete({
  label,
  placeholder = "Start typing a destination...",
  value: controlledValue,
  onTextChange,
  onChange,
  country,
  limit = 8,
  name,
  required,
  error,
  className = "",
}: PlaceAutocompleteProps) {
  const [inputValue, setInputValue] = useState(controlledValue ?? "");
  const [suggestions, setSuggestions] = useState<PlaceResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [loading, setLoading] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Sync controlled value
  useEffect(() => {
    if (controlledValue !== undefined) setInputValue(controlledValue);
  }, [controlledValue]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const fetchSuggestions = useCallback(
    async (q: string) => {
      if (q.length < 2) {
        setSuggestions([]);
        setIsOpen(false);
        return;
      }
      setLoading(true);
      try {
        const params = new URLSearchParams({ q, limit: String(limit) });
        if (country) params.set("country", country);
        const res = await fetch(`/api/places/suggest?${params}`);
        const data = await res.json();
        const results: PlaceResult[] = (data.suggestions ?? []).map((s: PlaceResult) => ({
          ...s,
          displayName: s.label,
        }));
        setSuggestions(results);
        setIsOpen(results.length > 0);
        setHighlightIndex(-1);
      } catch {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    },
    [country, limit]
  );

  function handleInputChange(val: string) {
    setInputValue(val);
    onTextChange?.(val);

    // Debounce API call
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => fetchSuggestions(val), 200);
  }

  function handleSelect(place: PlaceResult) {
    setInputValue(place.displayName);
    onTextChange?.(place.displayName);
    onChange?.(place);
    setIsOpen(false);
    setSuggestions([]);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!isOpen || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      e.preventDefault();
      handleSelect(suggestions[highlightIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {label && (
        <label className="mb-1 block text-sm font-medium text-slate-700">
          {label}
          {required && <span className="ml-0.5 text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type="text"
          name={name}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onFocus={() => { if (suggestions.length > 0) setIsOpen(true); }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          required={required}
          autoComplete="off"
          className={`w-full rounded-lg border px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 ${
            error ? "border-red-400" : "border-slate-300"
          }`}
        />
        {loading && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-500 border-t-transparent" />
          </div>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
          {suggestions.map((s, i) => (
            <li
              key={`${s.area}-${s.region}-${s.country}`}
              onMouseDown={() => handleSelect(s)}
              onMouseEnter={() => setHighlightIndex(i)}
              className={`flex cursor-pointer items-center justify-between px-4 py-2 text-sm ${
                i === highlightIndex ? "bg-cyan-50 text-cyan-700" : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              <span>
                <span className="font-medium">{s.displayName}</span>
                {s.country && s.displayName !== s.country && (
                  <span className="ml-1 text-slate-400">{s.country}</span>
                )}
              </span>
              {s.listingCount > 0 && (
                <span className="ml-2 text-xs text-slate-400">
                  {s.listingCount} listing{s.listingCount !== 1 ? "s" : ""}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
