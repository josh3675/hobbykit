import fs from "fs";
import path from "path";

export interface HobbyMeta {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  emoji: string;
  difficulty: string;
  featured: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  why_we_picked: string;
  badge: string | null;
  amazon_url: string;
  button_label?: string;
  price_range: string;
  image_url: string;
}

export interface Kit {
  tier: string;
  label: string;
  description: string;
  budget_tier: string;
  products: Product[];
}

export interface HobbyDetail {
  slug: string;
  name: string;
  tagline: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  intro: string;
  difficulty_levels: string[];
  budget_tiers: string[];
  kits: Kit[];
  checklist: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const dataDir = path.join(process.cwd(), "data");

export function getAllHobbies(): HobbyMeta[] {
  const filePath = path.join(dataDir, "hobbies.json");
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as HobbyMeta[];
}

export function getHobbyBySlug(slug: string): HobbyDetail | null {
  const filePath = path.join(dataDir, "hobbies", `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const hobby = JSON.parse(raw) as HobbyDetail;

  // Replace the associate tag placeholder with the env variable
  const tag = (process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG ?? "YOUR_ASSOCIATE_TAG").trim();
  const hydrated = JSON.parse(
    JSON.stringify(hobby).replace(/YOUR_ASSOCIATE_TAG/g, tag)
  ) as HobbyDetail;

  return hydrated;
}

export function getAllHobbySlugs(): string[] {
  return getAllHobbies().map((h) => h.slug);
}

export function getFeaturedHobbies(): HobbyMeta[] {
  return getAllHobbies().filter((h) => h.featured);
}
