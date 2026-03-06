import Link from "next/link";
import Image from "next/image";
import type { HobbyMeta } from "@/lib/hobbies";

const difficultyLabel: Record<string, string> = {
  "beginner-friendly": "Beginner Friendly",
  "some-experience": "Some Experience",
};

export default function HobbyCard({ hobby }: { hobby: HobbyMeta }) {
  return (
    <Link
      href={`/hobby/${hobby.slug}`}
      className="group bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] bg-[#f0f7f4]">
        <Image
          src={hobby.image}
          alt={`${hobby.name} starter kit`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-[#1a1a1a] font-bold text-lg leading-snug group-hover:text-[#2d6a4f] transition-colors">
            {hobby.name}
          </h3>
          <span className="shrink-0 text-xs font-medium bg-[#f0f7f4] text-[#2d6a4f] rounded-full px-2.5 py-1">
            {difficultyLabel[hobby.difficulty] ?? hobby.difficulty}
          </span>
        </div>
        <p className="text-[#888888] text-sm leading-relaxed mb-4">
          {hobby.tagline}
        </p>
        <span className="text-[#2d6a4f] font-semibold text-sm group-hover:underline">
          View Kit →
        </span>
      </div>
    </Link>
  );
}
