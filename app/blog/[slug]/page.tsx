import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitup.webapps.life";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | KitUp Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "KitUp" },
    publisher: {
      "@type": "Organization",
      name: "KitUp",
      url: BASE_URL,
    },
    url: `${BASE_URL}/blog/${params.slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <div className="max-w-[720px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-[#888888] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d6a4f] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#2d6a4f] transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#1a1a1a] font-medium truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-10">
          {post.hobbyTag && (
            <span className="inline-block mb-4 text-xs font-semibold bg-[#f0f7f4] text-[#2d6a4f] rounded-full px-3 py-1">
              {post.hobbyTag}
            </span>
          )}
          <h1 className="text-[#1a1a1a] font-bold text-3xl md:text-4xl leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-[#888888]">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        {/* MDX content */}
        <article className="prose prose-slate max-w-none prose-headings:text-[#1a1a1a] prose-headings:font-bold prose-a:text-[#2d6a4f] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1a1a1a]">
          <MDXRemote source={post.content} />
        </article>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
          <Link
            href="/blog"
            className="text-[#2d6a4f] font-semibold hover:underline"
          >
            ← Back to all guides
          </Link>
        </div>
      </div>
    </>
  );
}
