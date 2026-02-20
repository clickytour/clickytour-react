export function ContactFormDiagram() {
  return (
    <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Title */}
      <rect x="60" y="10" width="200" height="36" rx="8" fill="#0891B2" />
      <text x="160" y="33" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Contact Us</text>

      {/* Steps */}
      <rect x="40" y="70" width="240" height="44" rx="10" fill="#0891B2" fillOpacity="0.10" stroke="#0891B2" strokeWidth="1.5" />
      <circle cx="66" cy="92" r="12" fill="#0891B2" />
      <text x="66" y="96" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">1</text>
      <text x="88" y="96" fill="#334155" fontSize="11" fontWeight="500">Your Info</text>

      <line x1="160" y1="114" x2="160" y2="130" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="155,128 160,136 165,128" fill="#0891B2" />

      <rect x="40" y="138" width="240" height="44" rx="10" fill="#0891B2" fillOpacity="0.10" stroke="#0891B2" strokeWidth="1.5" />
      <circle cx="66" cy="160" r="12" fill="#0891B2" />
      <text x="66" y="164" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">2</text>
      <text x="88" y="164" fill="#334155" fontSize="11" fontWeight="500">Message</text>

      <line x1="160" y1="182" x2="160" y2="198" stroke="#0891B2" strokeWidth="1.5" strokeDasharray="4 3" />
      <polygon points="155,196 160,204 165,196" fill="#0891B2" />

      <rect x="40" y="206" width="240" height="44" rx="10" fill="#0891B2" fillOpacity="0.15" stroke="#0891B2" strokeWidth="2" />
      <circle cx="66" cy="228" r="12" fill="#0891B2" />
      <text x="66" y="232" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">3</text>
      <text x="88" y="232" fill="#334155" fontSize="11" fontWeight="600">Send</text>

      {/* Checkmark */}
      <circle cx="268" cy="228" r="10" fill="#0891B2" fillOpacity="0.2" />
      <path d="M262 228l4 4 8-8" stroke="#0891B2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
