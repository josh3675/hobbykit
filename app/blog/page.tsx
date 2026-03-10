import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Hobby Guides & Tips | KitUp Blog",
  description:
    "Beginner guides, gear breakdowns, and hobby tips from the KitUp team.",
  openGraph: {
    title: "Hobby Guides & Tips | KitUp Blog",
    description:
      "Beginner guides, gear breakdowns, and hobby tips from the KitUp team.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hobby Guides & Tips | KitUp Blog",
    description:
      "Beginner guides, gear breakdowns, and hobby tips from the KitUp team.",
  },
};

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <header className="mb-12 text-center">
        <h1 className="text-[#1a1a1a] font-bold text-4xl mb-3">Hobby Guides</h1>
        <p className="text-[#888888] text-lg max-w-[560px] mx-auto">
          Beginner guides, gear breakdowns, and tips to help you get started
          with the hobby you&apos;ve been putting off.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-center text-[#888888] py-20">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl border border-[#e5e5e5] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {post.hobbyTag && (
                <span className="self-start mb-3 text-xs font-semibold bg-[#f0f7f4] text-[#2d6a4f] rounded-full px-3 py-1">
                  {post.hobbyTag}
                </span>
              )}
              <h2 className="text-[#1a1a1a] font-bold text-xl leading-snug mb-3 flex-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#2d6a4f] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-[#888888] text-sm leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#888888] mt-auto pt-4 border-t border-[#e5e5e5]">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
