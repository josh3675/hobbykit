"use client";

import { useSearchParams } from "next/navigation";
import type { Kit } from "@/lib/hobbies";
import KitSection from "./KitSection";

export default function FilteredKits({ kits }: { kits: Kit[] }) {
  const searchParams = useSearchParams();
  const budget = searchParams.get("budget") ?? "";

  const filtered = budget
    ? kits.filter((kit) => kit.budget_tier === budget)
    : kits;

  if (filtered.length === 0) {
    return (
      <p className="text-[#888888] text-sm py-10 text-center">
        No kits match the selected budget. Try a different option.
      </p>
    );
  }

  return (
    <>
      {filtered.map((kit) => (
        <KitSection key={kit.tier} kit={kit} />
      ))}
    </>
  );
}
