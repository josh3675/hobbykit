import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllHobbySlugs,
  getHobbyBySlug,
  getAllHobbies,
  type Product,
} from "@/lib/hobbies";
import FilterBar from "@/components/FilterBar";
import FilteredKits from "@/components/FilteredKits";
import AdPlaceholder from "@/components/AdPlaceholder";
import HobbyCard from "@/components/HobbyCard";
import JsonLd from "@/components/JsonLd";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitup.webapps.life";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllHobbySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const hobby = getHobbyBySlug(params.slug);
  if (!hobby) return {};
  const firstImage = hobby.kits[0]?.products[0]?.image_url;
  return {
    title: hobby.seo.title,
    description: hobby.seo.description,
    keywords: hobby.seo.keywords,
    openGraph: {
      title: hobby.seo.title,
      description: hobby.seo.description,
      url: `/hobby/${params.slug}`,
      type: "website",
      ...(firstImage && {
        images: [{ url: firstImage, alt: `${hobby.name} starter kit` }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: hobby.seo.title,
      description: hobby.seo.description,
      ...(firstImage && { images: [firstImage] }),
    },
  };
}

function buildProductSchema(product: Product, hobbyName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image_url,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: product.price_range,
      availability: "https://schema.org/InStock",
      url: product.amazon_url,
      seller: { "@type": "Organization", name: "Amazon UK" },
    },
    category: `${hobbyName} Equipment`,
  };
}

function buildFaqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function buildBreadcrumbSchema(hobbyName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hobbies",
        item: `${BASE_URL}/#hobbies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${hobbyName} Starter Kit`,
        item: `${BASE_URL}/hobby/${slug}`,
      },
    ],
  };
}

export default function HobbyPage({ params }: Props) {
  const hobby = getHobbyBySlug(params.slug);
  if (!hobby) notFound();

  const allHobbies = getAllHobbies();
  const related = allHobbies.filter((h) => h.slug !== params.slug).slice(0, 3);

  const allProducts = hobby.kits.flatMap((k) => k.products);

  return (
    <>
      {/* Structured data */}
      <JsonLd data={buildBreadcrumbSchema(hobby.name, params.slug)} />
      <JsonLd data={buildFaqSchema(hobby.faqs)} />
      {allProducts.map((product) => (
        <JsonLd
          key={product.id}
          data={buildProductSchema(product, hobby.name)}
        />
      ))}

      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-[#888888] mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2d6a4f] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#hobbies" className="hover:text-[#2d6a4f] transition-colors">Hobbies</Link>
          <span>/</span>
          <span className="text-[#1a1a1a] font-medium">{hobby.name}</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-[#1a1a1a] font-bold text-4xl md:text-5xl mb-3">
            {hobby.name} Starter Kit
          </h1>
          <p className="text-[#888888] text-xl mb-4">{hobby.tagline}</p>
          <p className="text-[#333333] text-base leading-relaxed max-w-[720px]">
            {hobby.intro}
          </p>
        </header>

        {/* FilterBar + Kit sections */}
        <Suspense fallback={null}>
          <FilterBar />
          <FilteredKits kits={hobby.kits} />
        </Suspense>

        {/* Checklist */}
        <section className="mb-14 bg-[#f0f7f4] rounded-xl p-8 border border-[#e5e5e5]">
          <h2 className="text-[#1a1a1a] font-bold text-2xl mb-5">
            What You&apos;ll Need — Full Checklist
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hobby.checklist.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#333333] text-sm">
                <span className="mt-0.5 text-[#2d6a4f] shrink-0">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-14">
          <h2 className="text-[#1a1a1a] font-bold text-2xl mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {hobby.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-[#e5e5e5] rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer text-[#1a1a1a] font-semibold text-base list-none hover:bg-[#f9f9f9] transition-colors">
                  {faq.question}
                  <span className="text-[#888888] shrink-0 group-open:rotate-180 transition-transform duration-200">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-[#333333] text-sm leading-relaxed border-t border-[#e5e5e5]">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* AdSense placeholder */}
        <div className="mb-14">
          <AdPlaceholder />
        </div>

        {/* Related hobbies */}
        {related.length > 0 && (
          <section>
            <h2 className="text-[#1a1a1a] font-bold text-2xl mb-6">
              Explore More Hobbies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((h) => (
                <HobbyCard key={h.slug} hobby={h} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
