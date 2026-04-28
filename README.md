# 808jobs.org

A free, no-signup civic tool that helps Hawaiʻi residents navigate registered apprenticeship and trade-training pathways.

Sister project to [808housing.org](https://808housing.org).

## What's here

```
site/
  index.html        single-page app, all routes inline
  data.js           the data layer (programs, pathways, funding)
  vercel.json       cleanUrls config (so /pathways works without .html)
```

That's it. No build step, no framework, no node_modules. Edit and deploy.

## Run locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

(Any static file server works.)

## Deploy to Vercel

1. Push this repo to GitHub
2. Import to Vercel (one-click)
3. Domain: 808jobs.org (DNS already configured at GoDaddy)
4. **Critical:** disable Bot Protection in Settings → Firewall (Facebook scraper otherwise gets 403'd)

## Update the data

The data layer is `site/data.js`. The source of truth is the spreadsheet `808jobs_apprenticeships_v3.1.xlsx` (kept separately, not in this repo).

When the spreadsheet updates:
1. Edit `data.js` to reflect changes
2. Update `meta.lastSweep` to today's date
3. Commit and push — Vercel auto-deploys

For larger updates, write a script that exports from the .xlsx to data.js — not needed yet.

## The staleness doctrine

Every listing has a `lastVerified` date and a `tier` field:

- `verified-2026` — confirmed in 2026 (green badge)
- `dlir-2021` — last public confirmation Jan 2021 (yellow/amber badge)
- `possibly-inactive` — 2021 data + dead URL (gray badge)

Programs that are paused or wound down (Maui NDWG, TAA, etc.) get red/wound-down status and are honest about it.

This is the ethical core of the site. The badges and dates are the design.

## Design

- Typography: Fraunces (display + body) + JetBrains Mono (data)
- Color: warm paper-cream + ink black + deep ocean teal accent
- Layout: editorial, civic-broadsheet aesthetic
- Mobile-first, single HTML file
- No images required (background texture is CSS gradients + inline SVG noise)

## Setup checklist (lessons from 808housing)

- [x] `vercel.json` with cleanUrls
- [ ] OG image: 1200×630 PNG at `/og-image.png` (referenced in meta tags)
- [ ] Vercel Bot Protection disabled at team-level (Settings → Firewall)
- [ ] Anthropic spending cap set to $25/month BEFORE generating API key (when AI feature added)
- [ ] At least $5 of credits loaded on Anthropic before first API call
- [ ] Email forwarding: `report@808jobs.org` and `hello@808jobs.org` → real inbox you check
- [ ] Vercel Analytics enabled

## Roadmap

**v1 (current):** static site, ~15 verified programs, 12 pathways, 10 funding sources, how-to-call guide, about page.

**v2 (later):** sub-tools at `/maui-recovery`, `/justice-impacted`, `/veterans`, `/native-hawaiian`, `/pacific-islander`. AI-assisted "describe your situation, get pointed to relevant programs" feature using Claude Haiku 4.5 via Edge function.

**v3 (much later):** spreadsheet → data.js build script. Quarterly sweep automation. User-submitted updates via Vercel form.

## License

Source code: MIT (or whatever — TBD).
Data: public sources, compiled from State Apprenticeship Council minutes, DLIR Act 17 list, and direct sponsor websites. Free to use.

## Contact

Listing corrections: `report@808jobs.org`
Other: `hello@808jobs.org`
