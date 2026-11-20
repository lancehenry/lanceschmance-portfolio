# lanceschmance.com

Lance Schmittling's portfolio: brand, web, motion, video, and campaign work. A static [Astro](https://astro.build/) site, hosted on Cloudflare (free), with every page built from a few config files and one folder per case study.

Built on the [Maria](https://github.com/xocothemes/maria) theme by Andrei Alba (MIT license, see `LICENSE`).

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org/) 22.12 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321. Pages reload as you save.

Before you push, run `npm run check` (types and content) and `npm run build` (the real production build). If either fails, the error names the file and line.

## 2. Put it on GitHub

1. On github.com, create a new **empty** repository (no README, no license), for example `lanceschmance-portfolio`. Private is fine.
2. In this folder:

```bash
git init
git add -A
git commit -m "First version of the new portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/lanceschmance-portfolio.git
git push -u origin main
```

## 3. Deploy on Cloudflare (free)

1. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com/) and go to **Workers & Pages → Create → Import a repository**.
2. Connect GitHub and pick the repo. Cloudflare reads `wrangler.jsonc`: the build command is `npm run build` and the output folder is `dist`.
3. Deploy. You get a `*.workers.dev` preview address. Every push to `main` redeploys automatically.
4. When you're happy, add your domain under the project's **Settings → Domains & Routes**. If your domain's DNS isn't on Cloudflare yet, Cloudflare walks you through moving it. Only cancel Framer after the new site is live on your domain.

`public/_redirects` sends your old Framer URLs (like `/magical-moments`) to the new case study pages, so links and search rankings carry over.

Prefer Vercel? `vercel.json` is set up too, with the same redirects. Note Vercel's free plan is for non-commercial use.

## 4. Before you launch: replace the placeholders

Search the project for `TODO` and `PLACEHOLDER`. The main ones:

| What | Where |
| --- | --- |
| Project cover images (1600×1000) | `src/content/work/<project>/cover.webp` |
| Cover alt text, years, team | the frontmatter at the top of each `index.mdx` |
| Your photo (4:5) | `src/assets/images/portrait.webp` |
| Bio, principles | `src/config/about.ts` |
| Resume details, MFA school and year, tools | `src/config/resume.ts` |
| Hero facts (keep them true and specific) | `src/config/home.ts` |
| Location (optional) | `src/config/site.ts` → `author.location` |
| Social share image (1200×630) | `public/og-image.png` |
| Resume PDF (optional) | put it in `public/`, set `resumePdf` in `src/config/site.ts` |

Images can be `.webp`, `.jpg`, or `.png`. Astro resizes and compresses them at build time, so export them large.

## 5. Everyday edits

### Add a case study

1. Copy a folder in `src/content/work/` and rename it. The folder name becomes the URL: `src/content/work/new-project/` → `/work/new-project/`.
2. Edit the frontmatter and write the story in Markdown below it.
3. Tag it with `disciplines` from this list (defined in `src/lib/disciplines.ts`):
   `creative-direction`, `brand`, `web`, `motion`, `video`, `campaign`, `print`, `development`.
   The work-page filters and the focus pages use these tags.
4. `featured: true` puts it on the homepage. `order` sets the order (lower first). `draft: true` hides it.

Frontmatter reference:

```yaml
---
title: Headline for the case study
client: Client name
summary: One or two sentences. Also used as the page's search description.
year: 2025
role: Art director
disciplines: [brand, campaign]
services: [Identity, Signage, Social templates]   # deliverables, shown as tags
duration: 8 weeks          # optional
team: 2 designers, 1 dev   # optional
cover: ./cover.webp
coverAlt: Describe the image for screen readers and search engines
preview: /previews/new-project.mp4   # optional hover video, see below
tint: '#e7e2d6'            # background color behind the cover
order: 5
featured: false
url: https://example.com   # optional "Visit" button
---
```

### Components you can use inside a case study

No imports needed:

```mdx
import poster from './poster.webp';

<Figure src={poster} alt="Describe the image" caption="Optional caption" />

<Video url="https://www.youtube.com/watch?v=..." title="What the video is" caption="Optional" />

<Stats items={[
  { value: '38%', label: 'more sign-ups' },
  { value: '2x', label: 'time on page' },
  { value: '12', label: 'venues using the kit' },
]} />
```

`<Video>` takes YouTube or Vimeo links and only loads the player when someone presses play, so pages stay fast.

### Motion

- **Hover previews:** add a short, silent MP4 loop (3 to 6 seconds, under 3 MB) to `public/previews/` and set `preview: /previews/name.mp4` on the case study. It plays when someone hovers the project card.
- **Showreel:** put a muted loop in `public/reel/` and fill in `reel` in `src/config/home.ts`. It appears under the homepage hero with a pause button, plus a link to your full reel.
- **Rotating headline:** the words in `hero.rotating` (`src/config/home.ts`). Visitors who turn off motion see the first word.

All motion respects the "reduce motion" setting.

### Focus pages (one link per kind of job)

`src/config/focus.ts` creates short landing pages for each type of role:

- `/creative-direction/` for creative and art director roles
- `/brand/` for brand manager and brand designer roles
- `/design/` for senior designer, web, and UX/UI roles
- `/motion/` for motion and video roles

Each has its own headline, three proof points, and the projects tagged with matching disciplines. Send the matching link with each application. Each page also has its own search title, so it can rank for that job title. Add, remove, or reword them freely.

### Colors, type, and logo

- Colors: the variables at the top of `:root` in `src/styles/global.css`. The accent is one azure blue (`--accent`, #1f6fe5) in both light and dark mode. Use it for large text, filled buttons (with white text), and small decorative marks. It is not dark enough for small text on light backgrounds or light enough on dark ones, so small labels use `--ink` or `--muted`.
- Type: Albert Sans (variable, all weights plus italics), self-hosted in `public/fonts/albert-sans/` and set as `--font-sans` in `src/styles/global.css`.
- Logo: the "LS" hexagon mark in `src/components/ui/Logomark.astro` (header and footer, drawn in the current text color), `public/favicon.svg` (switches to light for dark browser tabs), and `public/apple-touch-icon.png` (iPhone home screen).

## Where things live

```
src/config/site.ts        name, SEO defaults, email, socials, navigation
src/config/home.ts        homepage hero, reel, capabilities, closing panel
src/config/about.ts       About page
src/config/resume.ts      Resume page
src/config/focus.ts       focus pages
src/content/work/         one folder per case study
src/lib/disciplines.ts    the tags used for filters and focus pages
src/styles/global.css     colors, type scale, shared styles
public/                   favicon, social image, fonts, redirects, videos
```

## SEO already handled

Every page gets a title, description, canonical URL, and social sharing tags. Case study share images are cropped from each cover. The site also has a sitemap, `robots.txt`, structured data (your profile, breadcrumbs, case studies), and redirects from the old URLs. After launch, add the site to [Google Search Console](https://search.google.com/search-console) and submit `https://www.lanceschmance.com/sitemap-index.xml`.
