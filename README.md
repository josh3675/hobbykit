# KitUp — Owner's Guide

KitUp is a hobby starter kit recommendation website. This guide explains how to manage the site without needing to write code.

---

## How to add a product to an existing hobby

All product data lives in the `/data/hobbies/` folder. Each hobby has its own JSON file (e.g. `guitar.json`).

1. Open the relevant file, e.g. `/data/hobbies/guitar.json`
2. Find the `kits` array and the kit tier you want to add to (`starter` or `upgrade`)
3. Add a new object to the `products` array, following this template:

```json
{
  "id": "guitar-008",
  "name": "Product Name Here",
  "description": "Short description of the product — 1-2 sentences.",
  "why_we_picked": "Why this is a good choice for beginners.",
  "badge": "Best Value",
  "amazon_url": "https://www.amazon.co.uk/dp/ASIN_HERE?tag=YOUR_ASSOCIATE_TAG",
  "price_range": "£20–£30",
  "image_url": "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=ASIN_HERE&Format=_SL250_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=YOUR_ASSOCIATE_TAG"
}
```

**Notes:**
- `id` must be unique — use the hobby slug + a number (e.g. `guitar-008`)
- `badge` can be `"Best for Beginners"`, `"Best Value"`, `"Staff Pick"`, or `null` (no badge)
- Replace `ASIN_HERE` with the product's Amazon ASIN (the 10-character code in the URL)
- Replace `YOUR_ASSOCIATE_TAG` with your actual tag — or just push and Vercel will inject it automatically via the environment variable

4. Save the file and push to GitHub — Vercel deploys automatically

---

## How to add a new hobby

1. **Add an entry to `/data/hobbies.json`:**

```json
{
  "slug": "knitting",
  "name": "Knitting",
  "tagline": "Pick up the needles and get stitching",
  "description": "Everything a complete beginner needs to start knitting.",
  "image": "/images/hobbies/knitting.jpg",
  "emoji": "🧶",
  "difficulty": "beginner-friendly",
  "featured": false
}
```

2. **Create `/data/hobbies/knitting.json`** — copy an existing hobby file as a template and replace all the content.

3. **Add a hobby image** — place a JPEG in `/public/images/hobbies/knitting.jpg`. Recommended size: 800×600px.

4. Push to GitHub — Vercel will automatically pick it up and generate a new page at `/hobby/knitting`.

---

## How to update or fix affiliate links

Amazon ASINs (the product ID in the URL) occasionally change. If a link stops working:

1. Search for the product on Amazon UK
2. Copy the new ASIN from the URL (e.g. `amazon.co.uk/dp/B01234ABCD`)
3. Open the relevant JSON file in `/data/hobbies/`
4. Replace the old ASIN in both `amazon_url` and `image_url`
5. Save and push to GitHub

**Tip:** Keep a note of what each product actually is (brand, model) somewhere, so you can find the replacement ASIN if a listing disappears.

---

## How to write a blog post

1. Create a new `.mdx` file in `/content/blog/`, e.g. `5-reasons-to-try-watercolour-painting.mdx`
2. Start with the frontmatter block:

```
---
title: "5 Reasons to Try Watercolour Painting This Weekend"
excerpt: "Watercolour is the most accessible fine art medium — here's why it's perfect for beginners."
date: "2025-03-01"
hobbyTag: "Watercolour Painting"
readTime: "4 min read"
---
```

3. Write the body in standard Markdown below the `---` line
4. Push to GitHub — the post appears on `/blog` automatically

---

## How to deploy changes

The site auto-deploys whenever you push to the `main` branch on GitHub.

To push a change:
1. Edit files locally or via GitHub's web interface
2. Commit with a description of what you changed
3. Push to `main`
4. Vercel will build and deploy within 1–2 minutes
5. Check the live site at [kitup.webapps.life](https://kitup.webapps.life)

---

## How to set up environment variables (first-time setup)

In the Vercel dashboard for this project, go to **Settings → Environment Variables** and add:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |
| `RESEND_AUDIENCE_ID` | Your Resend Audience ID |
| `NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG` | Your Amazon Associates tag (e.g. `kitup-21`) |
| `NEXT_PUBLIC_SITE_URL` | `https://kitup.webapps.life` |

---

## How to check affiliate earnings

1. Log in to [Amazon Associates](https://affiliate-program.amazon.co.uk/)
2. Go to **Reports → Earnings Report**
3. Select a date range to see clicks, orders, and commissions

Commissions are paid monthly, approximately 60 days after the month they were earned.

---

## Development (for technical users)

```bash
# Install dependencies
npm install

# Run dev server at localhost:3000
npm run dev

# Production build
npm run build
```

Node.js 20+ required. Uses Next.js 14 App Router with TypeScript and Tailwind CSS.
