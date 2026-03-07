import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About KitUp | Honest Beginner Hobby Recommendations",
  description:
    "KitUp helps beginners find the right gear for their chosen hobby. Honest recommendations, Amazon UK links, and no fluff.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-16">
      <h1 className="text-[#1a1a1a] font-bold text-4xl mb-6">About KitUp</h1>

      <div className="prose prose-slate max-w-none prose-headings:text-[#1a1a1a] prose-headings:font-bold prose-a:text-[#2d6a4f]">
        <p className="text-[#333333] text-lg leading-relaxed mb-6">
          KitUp exists because starting a new hobby is overwhelming. You want to
          try something — guitar, painting, photography — and suddenly you&apos;re
          drowning in forum threads, Reddit arguments, and Amazon listings with
          10,000 reviews.
        </p>

        <p className="text-[#333333] leading-relaxed mb-6">
          We cut through that noise. For every hobby we cover, we identify the
          smallest set of gear that gets you actually doing the thing — not
          researching it for six months.
        </p>

        <h2 className="text-[#1a1a1a] font-bold text-2xl mt-10 mb-4">
          How we choose products
        </h2>
        <p className="text-[#333333] leading-relaxed mb-4">
          Every product on KitUp is chosen based on a simple test: would we
          recommend it to a friend starting from scratch? That means:
        </p>
        <ul className="text-[#333333] space-y-2 mb-6 list-none pl-0">
          {[
            "Genuine beginner-friendliness over gear that impresses experts",
            "Good value — not the cheapest, not the most expensive",
            "Widely available on Amazon UK with reliable delivery",
            "Products we'd actually buy or have bought ourselves",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="text-[#2d6a4f] mt-1 shrink-0">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-[#1a1a1a] font-bold text-2xl mt-10 mb-4">
          A note on affiliate links
        </h2>
        <p className="text-[#333333] leading-relaxed mb-6">
          Some of the links on KitUp are affiliate links, which means if you
          click through and make a purchase, we may earn a small commission from
          Amazon. The important thing to understand is this: <strong>it doesn&apos;t
          cost you a penny more.</strong> You pay exactly the same price you would
          by going directly to Amazon — the commission comes from Amazon&apos;s
          side of the transaction, not yours.
        </p>
        <p className="text-[#333333] leading-relaxed mb-6">
          These commissions are what keep KitUp free and ad-free. Without them,
          we couldn&apos;t justify the time spent researching and maintaining
          the site. We think that&apos;s a fair trade: you get honest, curated
          recommendations with no banner ads or pop-ups, and we earn a modest
          contribution when those recommendations lead to a purchase.
        </p>
        <p className="text-[#333333] leading-relaxed mb-6">
          We want to be clear: affiliate arrangements have zero influence on
          what we recommend. Products are chosen entirely on merit — whether
          they&apos;re the right tool for a beginner, at a fair price. We&apos;d
          rather point you to the best option and earn nothing than recommend
          something mediocre because it pays a higher rate.
        </p>

        <h2 className="text-[#1a1a1a] font-bold text-2xl mt-10 mb-4">
          Get in touch
        </h2>
        <p className="text-[#333333] leading-relaxed">
          Have a hobby you&apos;d like to see covered? Spotted an outdated
          product link? We&apos;d love to hear from you. Drop us a line via the
          newsletter — if you&apos;re subscribed, just reply to any of our emails.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t border-[#e5e5e5]">
        <Link
          href="/"
          className="inline-block bg-[#2d6a4f] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#1b4332] transition-colors"
        >
          Explore Hobby Kits →
        </Link>
      </div>
    </div>
  );
}
