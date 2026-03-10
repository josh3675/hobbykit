import { MetadataRoute } from "next";
import { getAllHobbySlugs } from "@/lib/hobbies";
import fs from "fs";
import path from "path";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitup.webapps.life";

function getBlogSlugs(): string[] {
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const hobbySlugs = getAllHobbySlugs();
  const blogSlugs = getBlogSlugs();

  const hobbyEntries: MetadataRoute.Sitemap = hobbySlugs.map((slug) => ({
    url: `${BASE_URL}/hobby/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...hobbyEntries,
    ...blogEntries,
  ];
}
