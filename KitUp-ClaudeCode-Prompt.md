# KitUp — Claude Code Master Prompt

Paste this entire prompt into Claude Code to initialise the KitUp project.

---

## PROJECT OVERVIEW

Build a web app called **KitUp** — a hobby starter kit recommendation website that helps beginners find the right gear for their chosen hobby. Every product recommendation links to Amazon UK via an affiliate link. The site is content-driven, SEO-optimised, and designed to be maintained by a non-technical owner using editable JSON files.

**Live URL:** kitup.webapps.life  
**Stack:** Next.js 14 (App Router) · Tailwind CSS · Vercel deployment  
**Affiliate:** Amazon Associates UK  
**Design:** Clean, minimal, Apple-inspired — lots of white space, sharp typography, subtle shadows  

---

## TECHNICAL REQUIREMENTS

- Next.js 14 with App Router
- Tailwind CSS for all styling
- No database — all content stored in editable JSON files in `/data/`
- TypeScript preferred but not required
- Mobile-first responsive design
- Static generation (SSG) for all hobby pages for maximum SEO performance
- Sitemap and robots.txt auto-generated
- Amazon affiliate links open in a new tab with `rel="noopener noreferrer"`
- All affiliate links must include the Amazon Associates tracking tag as a query parameter

---

## FILE STRUCTURE

```
/
├── app/
│   ├── page.tsx                        # Homepage
│   ├── hobby/
│   │   └── [slug]/
│   │       └── page.tsx                # Dynamic hobby kit page
│   ├── blog/
│   │   ├── page.tsx                    # Blog index
│   │   └── [slug]/
│   │       └── page.tsx                # Blog post page
│   ├── about/
│   │   └── page.tsx
│   └── layout.tsx                      # Root layout with nav + footer
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HobbyCard.tsx                   # Card on homepage grid
│   ├── ProductCard.tsx                 # Individual product recommendation
│   ├── KitSection.tsx                  # Groups products into starter/upgrade kit
│   ├── FilterBar.tsx                   # Budget + skill level filters
│   ├── EmailSignup.tsx                 # Newsletter signup using Resend
│   └── AdPlaceholder.tsx              # AdSense placeholder (easy to activate)
├── data/
│   ├── hobbies.json                    # Master list of all hobbies
│   └── hobbies/
│       ├── guitar.json
│       ├── watercolour-painting.json
│       ├── photography.json
│       ├── woodworking.json
│       ├── 3d-printing.json
│       └── fishing.json
├── lib/
│   └── hobbies.ts                      # Helper functions to read JSON data
├── public/
│   └── images/
│       └── hobbies/                    # Hero images per hobby
└── .env.local                          # RESEND_API_KEY, AMAZON_ASSOCIATE_TAG
```

---

## DATA STRUCTURE

### `/data/hobbies.json` — Master hobby list

```json
[
  {
    "slug": "guitar",
    "name": "Guitar",
    "tagline": "Start strumming from day one",
    "description": "Everything a complete beginner needs to pick up the guitar and start playing.",
    "image": "/images/hobbies/guitar.jpg",
    "emoji": "🎸",
    "difficulty": "beginner-friendly",
    "featured": true
  }
]
```

### `/data/hobbies/guitar.json` — Individual hobby data

```json
{
  "slug": "guitar",
  "name": "Guitar",
  "tagline": "Start strumming from day one",
  "seo": {
    "title": "Best Beginner Guitar Starter Kit UK 2024 | KitUp",
    "description": "Everything a complete beginner needs to start playing guitar. Handpicked starter kits with honest recommendations and Amazon UK links.",
    "keywords": ["beginner guitar kit UK", "starter guitar kit", "what do I need to start playing guitar"]
  },
  "intro": "Starting guitar is exciting but knowing what to buy first can be overwhelming. We've cut through the noise to give you exactly what you need — nothing more.",
  "difficulty_levels": ["complete-beginner", "some-experience"],
  "budget_tiers": ["budget", "mid-range", "premium"],
  "kits": [
    {
      "tier": "starter",
      "label": "Starter Kit",
      "description": "The essentials to get going on a tight budget.",
      "budget_tier": "budget",
      "products": [
        {
          "id": "guitar-001",
          "name": "Yamaha F310 Acoustic Guitar",
          "description": "The most recommended beginner acoustic guitar. Great tone, stays in tune, and built to last. Trusted by music teachers across the UK.",
          "why_we_picked": "Consistently rated the best beginner guitar under £150. You won't outgrow it quickly.",
          "badge": "Best for Beginners",
          "amazon_url": "https://www.amazon.co.uk/dp/XXXXXXXXXX?tag=YOUR_ASSOCIATE_TAG",
          "price_range": "£100–£150",
          "image_url": "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=XXXXXXXXXX&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=YOUR_ASSOCIATE_TAG"
        }
      ]
    },
    {
      "tier": "upgrade",
      "label": "Level Up Kit",
      "description": "Ready to take it further? These upgrades make a real difference.",
      "budget_tier": "mid-range",
      "products": []
    }
  ],
  "checklist": [
    "Acoustic or classical guitar",
    "Set of spare strings",
    "Guitar picks (variety pack)",
    "Clip-on tuner",
    "Guitar strap",
    "Chord chart or beginner book"
  ],
  "faqs": [
    {
      "question": "Should I start on acoustic or electric guitar?",
      "answer": "Acoustic is recommended for most beginners — no amp needed, builds finger strength faster, and is more portable."
    },
    {
      "question": "How much should I spend on a first guitar?",
      "answer": "£100–£200 is the sweet spot for a first guitar. Anything cheaper tends to have tuning and playability issues that put beginners off."
    }
  ]
}
```

---

## PAGES TO BUILD

### 1. Homepage (`/`)

- Full-width hero section with headline, subheadline, and CTA button
- Headline: **"Find Your Perfect Starter Kit"**
- Subheadline: "Handpicked beginner gear for the hobbies you've always wanted to try"
- CTA: "Explore Hobbies" → scrolls to hobby grid
- Hobby grid — responsive card grid (2 cols mobile, 3 cols tablet, 3 cols desktop)
- Each HobbyCard shows: hobby image, emoji, name, tagline, difficulty badge, and "View Kit →" link
- "How it works" section — 3 steps: Choose your hobby → Pick your budget → Shop on Amazon
- Email signup section — "Get new hobby kit guides straight to your inbox"
- No sidebar ads on homepage — keep it clean for first impression

### 2. Hobby Kit Page (`/hobby/[slug]`)

Layout order (critical for affiliate CTR):
1. Breadcrumb nav (Home → Hobbies → Guitar)
2. Hero — hobby name, tagline, short intro paragraph
3. **FilterBar** — Budget filter (Budget / Mid-range / Premium) + Skill level filter
4. **Starter Kit section** — product cards, visible immediately without scrolling
5. "What you'll need" checklist — scannable bullet list
6. **Upgrade Kit section** — higher-value products
7. FAQ accordion section
8. AdSense placeholder (below FAQ — non-intrusive position)
9. Related hobbies section

### 3. ProductCard Component

Each product card must include:
- Product image (from Amazon image URL)
- Product name (bold, large)
- Badge pill if applicable ("Best for Beginners", "Best Value", "Staff Pick")
- Short description (2 sentences max)
- "Why we picked this" — italic, smaller text, builds trust
- Price range (e.g. "£100–£150") — NOT a hardcoded price
- **"View on Amazon →" button** — prominent, full-width on mobile, green (#2d6a4f)
- Button must open affiliate URL in new tab

### 4. Blog Index (`/blog`)

- Simple grid of blog post cards
- Each card: title, excerpt, date, hobby tag, read time
- Blog posts stored as MDX files in `/content/blog/`

### 5. Blog Post (`/blog/[slug]`)

- Full MDX rendering with Tailwind typography plugin
- Product cards embeddable within blog content
- Auto-generated SEO metadata from frontmatter

---

## DESIGN SYSTEM

### Colours
```
Primary green:     #2d6a4f
Light green bg:    #f0f7f4
Dark text:         #1a1a1a
Body text:         #333333
Muted text:        #888888
Border:            #e5e5e5
White:             #ffffff
Button hover:      #1b4332
Badge bg:          #2d6a4f
Badge text:        #ffffff
```

### Typography
- Font: Inter (Google Fonts)
- Hero headline: 48px bold (mobile: 32px)
- Section headings: 28px bold
- Body: 16px regular, 1.6 line height
- Small/muted: 14px

### Spacing
- Section padding: 80px top/bottom (mobile: 48px)
- Card padding: 24px
- Border radius: 12px on cards, 8px on buttons
- Max content width: 1200px, centred

### Button Styles
```
Primary CTA:   bg-[#2d6a4f] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#1b4332]
Secondary:     border border-[#2d6a4f] text-[#2d6a4f] rounded-lg px-6 py-3 hover:bg-[#f0f7f4]
```

### Card Style
```
bg-white rounded-xl shadow-sm border border-[#e5e5e5] p-6 hover:shadow-md transition-shadow
```

---

## NAVBAR

- Logo: "KitUp" in bold green (#2d6a4f)
- Links: Hobbies · Blog · About
- Mobile: hamburger menu
- Sticky on scroll with subtle background blur

## FOOTER

- Logo + tagline
- Links: Hobbies · Blog · About · Privacy Policy
- Amazon affiliate disclosure: "As an Amazon Associate I earn from qualifying purchases."
- Social icons (Pinterest, Instagram, TikTok)
- Copyright

---

## SEO REQUIREMENTS

- Each hobby page must have unique `<title>` and `<meta description>` from JSON data
- Use Next.js `generateMetadata()` for dynamic metadata
- Add JSON-LD structured data (Product schema) for each product card
- Generate `/sitemap.xml` automatically from all hobby slugs and blog posts
- Generate `/robots.txt`
- Use semantic HTML throughout — `<main>`, `<article>`, `<section>`, `<nav>`
- All images must have descriptive `alt` text
- Page must score 90+ on Lighthouse for SEO and Performance

---

## EMAIL SIGNUP (Resend)

- Create a simple API route: `POST /api/subscribe`
- Accept email address and add to Resend audience
- Use environment variable `RESEND_API_KEY`
- Show success/error state inline — no page reload
- Confirmation message: "You're in! We'll send you new hobby kit guides as we publish them."

---

## ENVIRONMENT VARIABLES

Create `.env.local` with:
```
RESEND_API_KEY=your_resend_api_key
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=your-associate-tag-21
NEXT_PUBLIC_SITE_URL=https://kitup.webapps.life
```

All Amazon URLs in JSON files should use the placeholder `YOUR_ASSOCIATE_TAG` — replace with the env variable value when rendering.

---

## AMAZON AFFILIATE DISCLOSURE

Per Amazon Associates rules, include this disclosure:
- In the footer on every page
- At the top of every hobby kit page, above the first product
- Text: *"As an Amazon Associate, KitUp earns from qualifying purchases. Prices shown are approximate and may vary."*

---

## ADSENSE PLACEHOLDER

Create an `AdPlaceholder` component that renders a clearly marked placeholder div now, ready to swap for a real AdSense unit later:

```tsx
// components/AdPlaceholder.tsx
export default function AdPlaceholder() {
  return (
    <div className="w-full h-24 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-sm">
      Advertisement
    </div>
  );
}
```

---

## IMPLEMENTATION ORDER

Build in this exact order — each step should be working before moving to the next:

1. **Project setup** — Next.js 14, Tailwind, folder structure, env vars
2. **Data layer** — `hobbies.json` + one complete hobby JSON file (guitar)
3. **Layout** — Navbar and Footer components
4. **Homepage** — Hero, hobby grid with HobbyCard, How it Works, Email signup
5. **Hobby kit page** — FilterBar, KitSection, ProductCard with affiliate links
6. **Remaining hobby JSON files** — populate all 6 hobbies
7. **SEO** — metadata, sitemap, robots.txt, JSON-LD
8. **Blog** — MDX setup, blog index, blog post template
9. **Email API** — Resend integration
10. **Polish** — hover states, transitions, mobile QA, Lighthouse audit

---

## IMPORTANT NOTES FOR NON-TECHNICAL MAINTENANCE

- All product data lives in `/data/hobbies/[hobby-name].json` — edit these files to update products
- To add a new hobby: create a new JSON file in `/data/hobbies/` and add an entry to `/data/hobbies.json`
- Never hardcode prices — always use `price_range` strings that won't go stale
- Amazon product ASINs change occasionally — keep a note of what each product is so you can find the new ASIN if a link breaks
- Images are pulled directly from Amazon — they stay up to date automatically
- Deploy by pushing to main branch on GitHub — Vercel auto-deploys

---

## README

Generate a `README.md` that explains to a non-technical owner:
- How to add a new product to an existing hobby
- How to add a new hobby
- How to update affiliate links
- How to deploy changes
- How to check affiliate earnings

---

Begin with Step 1. Confirm the project structure has been created before moving on.
