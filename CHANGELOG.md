# Changelog — tdme GTM Agent

## v0.8.1 — 26 June 2026

### Security
- System prompt (agent knowledge) moved out of browser source code into Cloudflare KV — no longer readable via "View source"
- Worker injects knowledge server-side on every request, with a live date header
- New editor role (separate key) required to view or publish the knowledge base via admin
- Admin: Kennisbasis tab only appears when logged in with the editor key; regular admin key shows Gesprekken + Input only

---

## v0.8 — 26 June 2026

### Added
- Topic progress sidebar: 6 axes shown alongside the chat (active highlighted, completed with checkmark); collapses to a horizontal strip on mobile
- Hidden system marker `<<TDME:active=...;done=...>>` lets the agent signal which topic it is covering; stripped before display, used only to drive the sidebar state

### Improved
- System prompt restructured: agent now runs a structured assessment along the 6 radar axes (Propositie, GTM-gereedheid, Doelgroepfocus, Merkidentiteit, Sales-alignment, Schaalbaarheid), with bounded follow-up (1-2 questions per topic), explicit topic transitions, and a defined conversation ending with summary and Analyseer CTA
- Opening message now announces the structure to the founder in one sentence

---

## v0.7 — 24 June 2026

### Added
- Radar diagram analysis: after 9+ messages an "Analyse" button appears, generating scores on 6 axes (Proposition, GTM-readiness, Target focus, Brand identity, Sales-alignment, Scalability) as an interactive spider chart
- Language selector (NL/EN) on the access screen — UI, intake questions and agent language all switch accordingly

### Improved
- System prompt expanded: new FRAMEWORKS & MODELS section (Jobs-to-be-Done, Value Disciplines, Seth Godin), extended B2B Marketing & Sales and Branding sections, two new common founder mistakes

---

## v0.6 — 24 June 2026

### Fixed
- Conversation saving was never triggered — all conversations are now automatically saved after each exchange

### Added
- Language detection: agent always starts in Dutch, switches to English if the user responds in English and continues consistently in that language

---

## v0.5 — 10 June 2026

### Added
- Structured intake — step-by-step form (12 questions) with progress bar before the conversation starts
- Multiple-choice buttons for phase, geographic scope, budget and team composition
- Summary button — generates structured markdown (company profile, insights, recommendations, next steps) as a download

### Improved
- Token limit increased (1,200 to 2,500) — fixes truncated sentences
- Date instruction strengthened: agent now receives the current year explicitly
- Follow-up instruction tightened: minimum 2–3 deepening moments per topic before drawing conclusions
- Three new intake questions: geographic scope, monthly budget, team size

---

## v0.4 — 5 June 2026

### Added
- Conversations are automatically saved
- Admin page to review saved conversations

---

## v0.3 — 1 June 2026

### Improved
- Version indicator added to the interface
- Fix: summary button always visible
- Fix: download reminder added

---

## v0.1 — 11 May 2026

### Added
- First version of the tdme GTM Agent
- Access code screen
- Chat interface with speech recognition (Dutch)
- File upload (PDF, image, text)
- Download conversation as markdown
- System prompt with tdme core philosophy, go-to-market approach and intake questions
