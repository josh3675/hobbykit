import type { Kit } from "@/lib/hobbies";
import ProductCard from "./ProductCard";

export default function KitSection({ kit }: { kit: Kit }) {
  if (kit.products.length === 0) return null;

  return (
    <section className="mb-14">
      <div className="mb-6">
        <h2 className="text-[#1a1a1a] font-bold text-2xl mb-1">{kit.label}</h2>
        <p className="text-[#888888] text-sm">{kit.description}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {kit.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
