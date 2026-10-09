# Precision Lawn Care — Marketing Website

A polished, zero-build static marketing site for **Precision Lawn Care**, a solo lawn care operator. Plain HTML + CSS + minimal JS — open locally or upload anywhere.

## Quick start (preview locally)

**Option A — open the file**

1. Open `index.html` in your browser (double-click or drag into Chrome/Firefox/Safari/Edge).
2. Relative links work when opened as files; for the contact form and smoother routing, Option B is nicer.

**Option B — local server (recommended)**

```bash
cd precision-lawn-care
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

Any static server works (`npx serve`, VS Code Live Server, etc.).

## Site structure

```
precision-lawn-care/
├── index.html      # Home
├── services.html   # Service details
├── gallery.html    # Job-type photo placeholders
├── contact.html    # Quote form (validated + success state)
├── css/styles.css
├── js/main.js
└── README.md
```

## Contact details (live)

| Detail | Value |
|--------|-------|
| Phone (display) | `250-863-0059` |
| Phone (`tel:`) | `+12508630059` |
| Email | `Bradypritchard92@gmail.com` |

## Placeholders still to replace before launch

| Placeholder | Where it appears | Replace with |
|-------------|------------------|--------------|
| `West Kelowna` | Hero, about, footer, contact | Your service area |
| Gallery / photo strip / about portrait | Gallery, home, about | Real photos |

Pricing is quote-only (no price list page). Search the project for `Your city` to catch remaining placeholders. Google reviews/GBP links use `https://share.google/43t8ysO9PD0ju9nMb`.

## Brand notes

- **Voice:** First person throughout (I / me / my) — solo operator.
- **Spelling:** Canadian English (e.g. neighbours, personalised, colour-adjacent copy avoided where unused).
- **Services included:** Lawn mowing, Edging and trimming, Spring and fall cleanup, Leaf removal, Hedge trimming, Snow/winter services, Dethatching.
- **Not offered on this site:** Aeration, fertilizer / fertiliser programs.

## Contact form

The quote form on `contact.html` validates in the browser and shows a success state. It does **not** send email yet. To go live, wire it to one of:

- [Formspree](https://formspree.io/) — set `action` to your Formspree endpoint
- [Netlify Forms](https://docs.netlify.com/forms/setup/) — add `netlify` attribute to the form
- Your own backend / email API

## Deploy

### GitHub Pages

1. Create a repo and push this folder (or the repo root = site root).
2. Settings → Pages → Deploy from branch → `main` / root (or `/docs` if you nest it).
3. Site will be at `https://<user>.github.io/<repo>/`.

```bash
git init
git add .
git commit -m "Add Precision Lawn Care marketing site"
git remote add origin https://github.com/YOU/precision-lawn-care.git
git push -u origin main
```

### Netlify

1. Drag the `precision-lawn-care` folder onto [Netlify Drop](https://app.netlify.com/drop), **or**
2. Connect the GitHub repo → publish directory = site root (`.`) → Deploy.
3. Optional: enable Netlify Forms on the contact form.

### Vercel

1. Import the GitHub repo in Vercel, **or** use the CLI:

```bash
npx vercel
```

2. Framework preset: Other / static. Output = project root. No build command needed.

## Customisation tips

- Colours and spacing live in CSS custom properties at the top of `css/styles.css`.
- Sticky header + mobile bottom CTA (Call me / Get a quote) are shared on every page.
- Gallery cards are CSS placeholders — swap the coloured blocks for `<img>` tags when you have photos.

## Licence

Site for Precision Lawn Care. Phone and email are set; replace remaining branding placeholders (city, photos) before public use. Google Business Profile / reviews: https://share.google/43t8ysO9PD0ju9nMb
