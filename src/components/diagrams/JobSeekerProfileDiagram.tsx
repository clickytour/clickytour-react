export function JobSeekerProfileDiagram() {
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Title */}
      <rect x="60" y="10" width="200" height="36" rx="8" fill="#6366F1" />
      <text x="160" y="33" textAnchor="middle" className="fill-white text-[13px] font-bold">Your Profile</text>

      {/* Steps */}
      <rect x="40" y="70" width="240" height="44" rx="10" fill="#6366F1" fillOpacity="0.10" stroke="#6366F1" strokeWidth="1.5" />
      <circle cx="66" cy="92" r="12" fill="#6366F1" />
      <text x="66" y="96" textAnchor="middle" className="fill-white text-[11px] font-bold">1</text>
      <text x="88" y="96" className="fill-slate-700 text-[11px] font-medium">Skills & Bio</text>

      <line x1="160" y1="114" x2="160" y2="130" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="155,128 160,136 165,128" fill="#6366F1" />

      <rect x="40" y="138" width="240" height="44" rx="10" fill="#6366F1" fillOpacity="0.10" stroke="#6366F1" strokeWidth="1.5" />
      <circle cx="66" cy="160" r="12" fill="#6366F1" />
      <text x="66" y="164" textAnchor="middle" className="fill-white text-[11px] font-bold">2</text>
      <text x="88" y="164" className="fill-slate-700 text-[11px] font-medium">Work History</text>

      <line x1="160" y1="182" x2="160" y2="198" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="155,196 160,204 165,196" fill="#6366F1" />

      <rect x="40" y="206" width="240" height="44" rx="10" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="2" />
      <circle cx="66" cy="228" r="12" fill="#6366F1" />
      <text x="66" y="232" textAnchor="middle" className="fill-white text-[11px] font-bold">3</text>
      <text x="88" y="232" className="fill-slate-700 text-[11px] font-semibold">Availability</text>

      {/* Checkmark */}
      <circle cx="268" cy="228" r="10" fill="#6366F1" fillOpacity="0.2" />
      <path d="M262 228l4 4 8-8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
