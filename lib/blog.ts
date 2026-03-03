import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDir = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  hobbyTag: string;
  readTime: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  hobbyTag: string;
  readTime: string;
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(blogDir, filename), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ?? "",
        hobbyTag: data.hobbyTag ?? "",
        readTime: data.readTime ?? estimateReadTime(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const mdxPath = path.join(blogDir, `${slug}.mdx`);
  const mdPath = path.join(blogDir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: data.date ?? "",
    hobbyTag: data.hobbyTag ?? "",
    readTime: data.readTime ?? estimateReadTime(content),
    content,
  };
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((p) => p.slug);
}
