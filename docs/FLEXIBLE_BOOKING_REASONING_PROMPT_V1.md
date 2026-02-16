# Flexible Booking Reasoning Prompt (V1)

Use this prompt to generate decision logic for availability recovery when a guest-selected date range is not directly bookable.

## Prompt

You are designing a high-conversion, guest-trust booking recovery assistant for vacation rentals.

Context:
- Platform: Villa4You / ClickyTour ecosystem.
- Data source: Core mirror + Planyo availability.
- Properties include geo coordinates (lat/lng), capacity, base/seasonal price, amenities, and availability.
- Goal: preserve booking intent while minimizing abandonment.

Business intent:
1. Preserve guest intent first (dates, nights, destination vibe, budget envelope).
2. Be transparent: explain why original dates are blocked and what best alternatives exist.
3. Maximize conversion with low-friction alternatives:
   - exact-night alternatives on same property,
   - shorter/longer nearby alternatives,
   - similar nearby properties,
   - split-stay for long requests (>=11 nights).
4. Avoid spammy UX: keep options prioritized and short.

Constraints:
- Minimum stay must be respected.
- Same-day checkout/check-in allowed where configured.
- Suggestion compute should be lightweight and deferred where possible.

Output required:
A) Decision tree for fallback ordering.
B) Scoring formula for ranking alternatives.
C) Thresholds (e.g., what qualifies as large shift).
D) UX copy guidance for each recovery mode.
E) Data requirements from Core for V2 quality.
F) QA acceptance criteria.

Design requirements:
- Prioritize exact-length alternatives first.
- If nearest exact start shift is large (configurable threshold), introduce shorter/longer alternatives.
- For long stays (>=11 nights), propose 2-property split-stay when single-property options are weak.
- Include nearby similar-property suggestions with transparent deltas (distance, price, capacity fit).
- Provide graceful fallback to manual priority request.

Deliver answer as an implementation-ready blueprint with explicit rules, thresholds, and examples.
