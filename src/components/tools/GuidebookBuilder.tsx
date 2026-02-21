"use client";

import { useState } from "react";

interface Section {
  id: string;
  title: string;
  icon: string;
  content: string;
  enabled: boolean;
}

const DEFAULT_SECTIONS: Section[] = [
  { id: "welcome", title: "Welcome", icon: "\uD83C\uDFE0", content: "Welcome to our property! We're thrilled to have you as our guest.", enabled: true },
  { id: "checkin", title: "Check-in Instructions", icon: "\uD83D\uDD11", content: "Check-in time: 15:00\nKey collection: Lockbox code will be sent 24h before arrival.\nParking: Free on-site parking available.", enabled: true },
  { id: "checkout", title: "Check-out", icon: "\uD83D\uDEAA", content: "Check-out time: 11:00\nPlease leave keys in the lockbox.\nTake out any trash to the bins outside.", enabled: true },
  { id: "wifi", title: "WiFi & Tech", icon: "\uD83D\uDCF6", content: "Network: Villa_Guest\nPassword: (enter your password)\nSmart TV: Netflix and YouTube pre-installed.", enabled: true },
  { id: "rules", title: "House Rules", icon: "\uD83D\uDCCB", content: "No smoking indoors.\nNo parties or events.\nQuiet hours: 23:00 - 08:00.\nMaximum occupancy as booked.", enabled: true },
  { id: "appliances", title: "Appliances Guide", icon: "\u2699\uFE0F", content: "AC: Remote on bedside table. Set to 24C for comfort.\nWashing machine: Programs guide on the door.\nDishwasher: Tablets under the sink.", enabled: true },
  { id: "emergency", title: "Emergency Contacts", icon: "\uD83D\uDEA8", content: "Emergency: 112\nPolice: 100\nAmbulance: 166\nFire: 199\nHost: +30 xxx xxx xxxx", enabled: true },
  { id: "restaurants", title: "Restaurants", icon: "\uD83C\uDF7D\uFE0F", content: "Taverna Nikos - Traditional Greek, 5 min walk\nBeach Bar Luna - Seafood, beachfront\nOlive Garden Bistro - Mediterranean fusion", enabled: true },
  { id: "beaches", title: "Beaches", icon: "\uD83C\uDFD6\uFE0F", content: "Main Beach - 3 min walk, sunbeds available\nHidden Cove - 10 min drive, secluded\nSurf Beach - 15 min drive, water sports", enabled: false },
  { id: "activities", title: "Activities & Tours", icon: "\uD83E\uDDED", content: "Boat tours: Book at the harbor kiosk\nHiking: Trail starts 2km north\nDiving center: Next to the marina", enabled: false },
  { id: "transport", title: "Getting Around", icon: "\uD83D\uDE97", content: "Car rental: Available at the airport\nLocal bus: Stop 200m from property, every 30 min\nTaxi: Call +30 xxx xxx xxxx", enabled: false },
  { id: "shopping", title: "Shopping & Groceries", icon: "\uD83D\uDED2", content: "Mini market: 2 min walk\nSupermarket: 5 min drive\nLocal market: Saturday mornings at the square", enabled: false },
  { id: "medical", title: "Medical & Pharmacy", icon: "\uD83C\uDFE5", content: "Nearest pharmacy: 5 min walk (open until 22:00)\nHealth center: 10 min drive\nHospital: 30 min drive", enabled: false },
  { id: "custom", title: "Special Tips", icon: "\u2B50", content: "Best sunset spot: Hilltop viewpoint, 5 min drive\nLocal specialty: Try the fresh fish at the harbor\nHidden gem: The old monastery trail", enabled: false },
];

const LANGUAGES = [
  { code: "en", name: "English", flag: "\uD83C\uDDEC\uD83C\uDDE7" },
  { code: "el", name: "Greek", flag: "\uD83C\uDDEC\uD83C\uDDF7" },
  { code: "de", name: "German", flag: "\uD83C\uDDE9\uD83C\uDDEA" },
  { code: "fr", name: "French", flag: "\uD83C\uDDEB\uD83C\uDDF7" },
  { code: "it", name: "Italian", flag: "\uD83C\uDDEE\uD83C\uDDF9" },
  { code: "ru", name: "Russian", flag: "\uD83C\uDDF7\uD83C\uDDFA" },
];

const THEMES = [
  { id: "coastal", name: "Coastal Blue", bg: "bg-gradient-to-br from-sky-50 to-cyan-50", accent: "text-cyan-700", border: "border-cyan-200" },
  { id: "island", name: "Island White", bg: "bg-white", accent: "text-slate-800", border: "border-slate-200" },
  { id: "olive", name: "Olive Grove", bg: "bg-gradient-to-br from-emerald-50 to-lime-50", accent: "text-emerald-800", border: "border-emerald-200" },
  { id: "sunset", name: "Santorini Sunset", bg: "bg-gradient-to-br from-amber-50 to-rose-50", accent: "text-rose-800", border: "border-rose-200" },
];

export default function GuidebookBuilder() {
  const [propertyName, setPropertyName] = useState("My Greek Villa");
  const [sections, setSections] = useState(DEFAULT_SECTIONS);
  const [selectedLangs, setSelectedLangs] = useState(["en"]);
  const [theme, setTheme] = useState(0);
  const [previewMode, setPreviewMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, enabled: !s.enabled } : s));
  };

  const updateContent = (id: string, content: string) => {
    setSections(sections.map(s => s.id === id ? { ...s, content } : s));
  };

  const enabledSections = sections.filter(s => s.enabled);
  const t = THEMES[theme];

  if (previewMode) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Preview: {propertyName}</h3>
          <button onClick={() => setPreviewMode(false)} className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Back to Editor</button>
        </div>

        <div className="flex gap-2 mb-4">
          {selectedLangs.map(code => {
            const lang = LANGUAGES.find(l => l.code === code);
            return <span key={code} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">{lang?.flag} {lang?.name}</span>;
          })}
        </div>

        {/* Phone mockup */}
        <div className="mx-auto max-w-sm">
          <div className="rounded-[2rem] border-4 border-slate-800 bg-slate-800 p-2 shadow-2xl">
            <div className="rounded-[1.5rem] overflow-hidden">
              <div className={`${t.bg} min-h-[600px]`}>
                {/* Header */}
                <div className="bg-white/80 backdrop-blur-sm p-4 text-center border-b border-slate-100">
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Guest Guidebook</p>
                  <h1 className={`text-xl font-bold ${t.accent} mt-1`}>{propertyName}</h1>
                  <div className="mt-2 flex justify-center gap-1">
                    {selectedLangs.map(code => {
                      const lang = LANGUAGES.find(l => l.code === code);
                      return <span key={code} className="text-sm">{lang?.flag}</span>;
                    })}
                  </div>
                </div>

                {/* Sections */}
                <div className="p-4 space-y-3">
                  {enabledSections.map((s) => (
                    <div key={s.id} className={`rounded-xl bg-white border ${t.border} p-4 shadow-sm`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{s.icon}</span>
                        <h3 className={`font-bold text-sm ${t.accent}`}>{s.title}</h3>
                      </div>
                      <div className="text-xs text-slate-600 whitespace-pre-line leading-relaxed">{s.content}</div>
                    </div>
                  ))}
                </div>

                {/* QR Code placeholder */}
                <div className="p-4 text-center">
                  <div className="inline-block rounded-xl bg-white border border-slate-200 p-4">
                    <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center mx-auto">
                      <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
                      </svg>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-2">QR Code generated on publish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Editor - 2 cols */}
      <div className="lg:col-span-2 space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Property Name</label>
          <input type="text" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Languages</label>
          <div className="flex flex-wrap gap-2">
            {LANGUAGES.map((lang) => (
              <button key={lang.code} onClick={() => setSelectedLangs(prev => prev.includes(lang.code) ? prev.filter(l => l !== lang.code) : [...prev, lang.code])} className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${selectedLangs.includes(lang.code) ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Theme</label>
          <div className="grid grid-cols-4 gap-2">
            {THEMES.map((th, i) => (
              <button key={th.id} onClick={() => setTheme(i)} className={`rounded-lg border-2 p-3 text-center transition ${theme === i ? "border-cyan-500 ring-2 ring-cyan-200" : "border-slate-200"}`}>
                <div className={`h-6 rounded ${th.bg} mb-1`} />
                <p className="text-[10px] font-medium text-slate-600">{th.name}</p>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Sections ({enabledSections.length} active)</label>
          <div className="space-y-2">
            {sections.map((s) => (
              <div key={s.id} className={`rounded-xl border p-3 transition ${s.enabled ? "border-cyan-200 bg-cyan-50/50" : "border-slate-200 bg-slate-50 opacity-60"}`}>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 cursor-pointer flex-1">
                    <input type="checkbox" checked={s.enabled} onChange={() => toggleSection(s.id)} className="rounded border-slate-300" />
                    <span className="text-base">{s.icon}</span>
                    <span className="text-sm font-medium text-slate-800">{s.title}</span>
                  </label>
                  {s.enabled && (
                    <button onClick={() => setEditingId(editingId === s.id ? null : s.id)} className="text-xs text-cyan-600 hover:text-cyan-800 font-medium">
                      {editingId === s.id ? "Close" : "Edit"}
                    </button>
                  )}
                </div>
                {editingId === s.id && s.enabled && (
                  <textarea value={s.content} onChange={(e) => updateContent(s.id, e.target.value)} rows={4} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-mono" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-4">
        <button onClick={() => setPreviewMode(true)} className="w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white hover:bg-cyan-700 transition">
          Preview Guidebook
        </button>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold text-slate-900 mb-2">Guidebook Stats</h4>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Sections</span><span className="font-semibold">{enabledSections.length} / {sections.length}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Languages</span><span className="font-semibold">{selectedLangs.length}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Theme</span><span className="font-semibold">{THEMES[theme].name}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">QR Code</span><span className="font-semibold text-amber-600">Generated on publish</span></div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold text-slate-900 mb-2">Publishing Options</h4>
          <div className="space-y-2">
            <button className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 text-left flex items-center gap-2">
              <span>&#128279;</span> Generate shareable link
            </button>
            <button className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 text-left flex items-center gap-2">
              <span>&#128206;</span> Generate QR code (for print)
            </button>
            <button className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 text-left flex items-center gap-2">
              <span>&#128196;</span> Export as PDF
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
          <p className="text-[10px] text-amber-700">
            <strong>Coming soon:</strong> Auto-translation to selected languages via AI, live QR code generation, and embedding on your ClickyTour microsite.
          </p>
        </div>
      </div>
    </div>
  );
}
