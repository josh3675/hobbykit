"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/lib/hobbies";

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] p-6 hover:shadow-md transition-shadow flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-square max-w-[200px] mx-auto mb-5 bg-[#f9f9f9] rounded-lg overflow-hidden flex items-center justify-center">
        {!imgError && product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain p-2"
            sizes="200px"
            unoptimized
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-5xl select-none">📦</span>
        )}
      </div>

      {/* Badge */}
      {product.badge && (
        <span className="self-start mb-3 text-xs font-semibold bg-[#2d6a4f] text-white rounded-full px-3 py-1">
          {product.badge}
        </span>
      )}

      {/* Name */}
      <h3 className="text-[#1a1a1a] font-bold text-lg leading-snug mb-2">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-[#333333] text-sm leading-relaxed mb-3">
        {product.description}
      </p>

      {/* Why we picked it */}
      <p className="text-[#888888] text-sm italic leading-relaxed mb-5 flex-1">
        &ldquo;{product.why_we_picked}&rdquo;
      </p>

      {/* Footer */}
      <div className="mt-auto">
        <p className="text-[#2d6a4f] font-semibold text-base mb-3">
          {product.price_range}
        </p>
        <a
          href={product.amazon_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-[#2d6a4f] text-white rounded-lg px-4 py-3 font-semibold hover:bg-[#1b4332] transition-colors"
        >
          View on Amazon →
        </a>
      </div>
    </article>
  );
}
