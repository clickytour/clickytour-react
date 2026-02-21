"use client";

import { useState, useMemo } from "react";

const TONES = [
  { id: "professional", label: "Professional", emoji: "\uD83D\uDC54" },
  { id: "warm", label: "Warm & Friendly", emoji: "\u2764\uFE0F" },
  { id: "casual", label: "Casual", emoji: "\uD83D\uDE0A" },
  { id: "luxury", label: "Luxury & Refined", emoji: "\u2728" },
];

const SENTIMENTS = [
  { id: "positive", label: "Positive (4-5 stars)", color: "emerald" },
  { id: "mixed", label: "Mixed (3 stars)", color: "amber" },
  { id: "negative", label: "Negative (1-2 stars)", color: "red" },
];

const ISSUES = [
  "Cleanliness", "Noise", "WiFi/Internet", "Hot water", "AC/Heating",
  "Check-in process", "Communication", "Amenities missing", "Location accuracy",
  "Value for money", "Kitchen equipment", "Parking", "Pool/Garden",
];

const PRAISES = [
  "Location", "Cleanliness", "Host communication", "Amenities", "Views",
  "Value for money", "Décor/Design", "Kitchen/Cooking", "Pool/Garden",
  "Privacy", "Peaceful/Quiet", "Family-friendly", "Walking distance to beach",
];

const TEMPLATES = {
  positive: {
    professional: (name: string, praises: string[]) =>
      `Dear ${name},\n\nThank you very much for your wonderful review and for choosing our property. We are delighted to know that you enjoyed ${praises.length > 0 ? praises.slice(0, 2).join(" and ").toLowerCase() : "your stay"}.\n\nYour kind words motivate us to maintain the highest standards. We would love to welcome you back for another memorable experience in Greece.\n\nWarm regards,\n[Your Name]`,
    warm: (name: string, praises: string[]) =>
      `Hi ${name}! \uD83D\uDE0A\n\nWhat a lovely review — thank you so much! It truly makes our day to hear you appreciated ${praises.length > 0 ? praises.slice(0, 2).join(" and ").toLowerCase() : "your time with us"}.\n\nWe put a lot of love into making every stay special, and guests like you make it all worthwhile. We hope to see you again soon — Greece has so much more to offer! \u2600\uFE0F\n\nWith gratitude,\n[Your Name]`,
    casual: (name: string, praises: string[]) =>
      `Hey ${name}!\n\nThanks for the awesome review! So glad you loved ${praises.length > 0 ? praises.slice(0, 2).join(" and ").toLowerCase() : "the place"}. That's exactly what we go for!\n\nHope to host you again — next time we'll make sure it's even better. Cheers! \uD83C\uDF1E\n\n[Your Name]`,
    luxury: (name: string, praises: string[]) =>
      `Dear ${name},\n\nWe are deeply grateful for your gracious review. It brings us great pleasure to learn that ${praises.length > 0 ? praises.slice(0, 2).join(" and ").toLowerCase() : "every aspect of your stay"} met your expectations.\n\nProviding an exceptional experience is at the heart of everything we do. We would be honored to welcome you again for another unforgettable sojourn in the Greek isles.\n\nWith our warmest regards,\n[Your Name]`,
  },
  mixed: {
    professional: (name: string, praises: string[], issues: string[]) =>
      `Dear ${name},\n\nThank you for taking the time to share your feedback. We are pleased that you enjoyed ${praises.length > 0 ? praises.slice(0, 1).join("").toLowerCase() : "certain aspects of your stay"}, and we sincerely apologize for the issues with ${issues.length > 0 ? issues.slice(0, 2).join(" and ").toLowerCase() : "some elements that didn't meet expectations"}.\n\nWe take all feedback seriously and have already begun addressing these concerns. We hope you'll give us another opportunity to provide the excellent experience you deserve.\n\nBest regards,\n[Your Name]`,
    warm: (name: string, praises: string[], issues: string[]) =>
      `Hi ${name},\n\nThank you for your honest feedback — we really appreciate it! \uD83D\uDE4F We're glad ${praises.length > 0 ? praises.slice(0, 1).join("").toLowerCase() + " worked well for you" : "you found things to enjoy"}, and we're sorry about ${issues.length > 0 ? issues.slice(0, 2).join(" and ").toLowerCase() : "the parts that fell short"}.\n\nWe've taken your comments to heart and are making improvements. We'd love the chance to welcome you back and show you the experience we know we can deliver!\n\nWarmly,\n[Your Name]`,
    casual: (name: string, praises: string[], issues: string[]) =>
      `Hey ${name},\n\nThanks for keeping it real! Glad ${praises.length > 0 ? praises.slice(0, 1).join("").toLowerCase() + " was a hit" : "there were some highlights"} — sorry about ${issues.length > 0 ? issues.slice(0, 1).join("").toLowerCase() : "the hiccups"} though. Already working on fixing that.\n\nHope you'll come back and see the upgrades! \uD83D\uDCAA\n\n[Your Name]`,
    luxury: (name: string, praises: string[], issues: string[]) =>
      `Dear ${name},\n\nThank you for sharing your candid impressions. We are gratified that ${praises.length > 0 ? praises.slice(0, 1).join("").toLowerCase() + " exceeded expectations" : "certain elements of your stay resonated with you"}.\n\nWe deeply regret that ${issues.length > 0 ? issues.slice(0, 2).join(" and ").toLowerCase() : "some aspects"} did not reflect the standard of excellence we strive for. Rest assured, your feedback has prompted immediate corrective measures.\n\nWe would be privileged to welcome you once more.\n\nMost sincerely,\n[Your Name]`,
  },
  negative: {
    professional: (name: string, _praises: string[], issues: string[]) =>
      `Dear ${name},\n\nThank you for sharing your experience, and please accept our sincere apologies for the issues you encountered${issues.length > 0 ? ", particularly regarding " + issues.slice(0, 2).join(" and ").toLowerCase() : ""}.\n\nThis does not reflect the standard we aim to provide. We have taken immediate steps to address these concerns and prevent them from recurring.\n\nWe understand your frustration and would welcome the opportunity to make things right. Please feel free to contact us directly.\n\nWith our apologies,\n[Your Name]`,
    warm: (name: string, _praises: string[], issues: string[]) =>
      `Hi ${name},\n\nWe're really sorry your stay didn't meet expectations. \uD83D\uDE14 ${issues.length > 0 ? "The issues with " + issues.slice(0, 2).join(" and ").toLowerCase() + " are" : "This is"} absolutely not what we want for our guests.\n\nWe've already started making changes, and we genuinely want to make this right. If you're open to it, we'd love to discuss how we can do better.\n\nSincerely sorry,\n[Your Name]`,
    casual: (name: string, _praises: string[], issues: string[]) =>
      `Hi ${name},\n\nOuch — we hear you, and we're sorry. ${issues.length > 0 ? issues.slice(0, 1).join("") + " issues are" : "That's"} not cool and we're on it.\n\nWe want to do better and would love a chance to make it up. Drop us a line if you're up for it.\n\n[Your Name]`,
    luxury: (name: string, _praises: string[], issues: string[]) =>
      `Dear ${name},\n\nWe are profoundly disappointed to learn of your experience, and we extend our deepest apologies${issues.length > 0 ? " for the inadequacies relating to " + issues.slice(0, 2).join(" and ").toLowerCase() : ""}.\n\nSuch shortcomings are antithetical to the caliber of hospitality we are committed to delivering. We have undertaken a thorough review and implemented corrective measures.\n\nWe would be most grateful for the opportunity to restore your confidence in our property.\n\nWith our sincerest regrets,\n[Your Name]`,
  },
};

export default function ReviewResponseGenerator() {
  const [guestName, setGuestName] = useState("Guest");
  const [sentiment, setSentiment] = useState("positive");
  const [tone, setTone] = useState("professional");
  const [selectedPraises, setSelectedPraises] = useState<string[]>(["Location", "Cleanliness"]);
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const response = useMemo(() => {
    const templates = TEMPLATES[sentiment as keyof typeof TEMPLATES];
    const gen = templates[tone as keyof typeof templates];
    if (sentiment === "positive") {
      return (gen as (n: string, p: string[]) => string)(guestName, selectedPraises);
    }
    return (gen as (n: string, p: string[], i: string[]) => string)(guestName, selectedPraises, selectedIssues);
  }, [guestName, sentiment, tone, selectedPraises, selectedIssues]);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Guest Name</label>
          <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)} className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm" placeholder="Guest name" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Review Sentiment</label>
          <div className="flex gap-2">
            {SENTIMENTS.map((s) => (
              <button key={s.id} onClick={() => setSentiment(s.id)} className={`flex-1 rounded-lg border px-3 py-2.5 text-xs font-medium transition ${sentiment === s.id ? `border-${s.color}-500 bg-${s.color}-50 text-${s.color}-700` : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Response Tone</label>
          <div className="grid grid-cols-4 gap-2">
            {TONES.map((t) => (
              <button key={t.id} onClick={() => setTone(t.id)} className={`rounded-lg border px-2 py-2.5 text-center transition ${tone === t.id ? "border-cyan-600 bg-cyan-50 text-cyan-700" : "border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                <span className="text-lg block">{t.emoji}</span>
                <span className="text-[10px] font-medium">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        {(sentiment === "positive" || sentiment === "mixed") && (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">What did they praise?</label>
            <div className="flex flex-wrap gap-1.5">
              {PRAISES.map((p) => (
                <button key={p} onClick={() => setSelectedPraises(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])} className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${selectedPraises.includes(p) ? "border-emerald-500 bg-emerald-50 text-emerald-700" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {(sentiment === "negative" || sentiment === "mixed") && (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">What issues were mentioned?</label>
            <div className="flex flex-wrap gap-1.5">
              {ISSUES.map((issue) => (
                <button key={issue} onClick={() => setSelectedIssues(prev => prev.includes(issue) ? prev.filter(x => x !== issue) : [...prev, issue])} className={`rounded-full border px-2.5 py-1 text-xs font-medium transition ${selectedIssues.includes(issue) ? "border-red-500 bg-red-50 text-red-700" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`}>
                  {issue}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-900">Generated Response</h3>
            <button onClick={handleCopy} className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition ${copied ? "bg-emerald-500 text-white" : "bg-cyan-600 text-white hover:bg-cyan-700"}`}>
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
            <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">{response}</p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h4 className="text-sm font-bold text-slate-900 mb-2">Tips for Great Review Responses</h4>
          <div className="space-y-1.5 text-xs text-slate-600">
            <p>&#10003; Respond within 24 hours — speed matters for rankings</p>
            <p>&#10003; Always personalize with the guest's name</p>
            <p>&#10003; Address specific feedback, don't be generic</p>
            <p>&#10003; For negative reviews: acknowledge, apologize, explain action taken</p>
            <p>&#10003; Never argue or get defensive publicly</p>
            <p>&#10003; End with an invitation to return</p>
          </div>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3">
          <p className="text-[10px] text-amber-700">
            <strong>Coming soon:</strong> AI-powered responses that analyze the actual review text and generate fully customized replies. Currently using smart templates based on your selections.
          </p>
        </div>
      </div>
    </div>
  );
}
