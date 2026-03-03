"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const BUDGET_OPTIONS = [
  { value: "", label: "All Budgets" },
  { value: "budget", label: "Budget" },
  { value: "mid-range", label: "Mid-Range" },
  { value: "premium", label: "Premium" },
];

const SKILL_OPTIONS = [
  { value: "", label: "All Levels" },
  { value: "complete-beginner", label: "Complete Beginner" },
  { value: "some-experience", label: "Some Experience" },
];

export default function FilterBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const budget = searchParams.get("budget") ?? "";
  const skill = searchParams.get("skill") ?? "";

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams]
  );

  return (
    <div className="flex flex-wrap gap-3 mb-10 p-4 bg-[#f0f7f4] rounded-xl border border-[#e5e5e5]">
      <div className="flex items-center gap-2">
        <span className="text-[#888888] text-sm font-medium whitespace-nowrap">Budget:</span>
        <div className="flex flex-wrap gap-2">
          {BUDGET_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateParam("budget", opt.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                budget === opt.value
                  ? "bg-[#2d6a4f] text-white border-[#2d6a4f]"
                  : "bg-white text-[#333333] border-[#e5e5e5] hover:border-[#2d6a4f] hover:text-[#2d6a4f]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[#888888] text-sm font-medium whitespace-nowrap">Level:</span>
        <div className="flex flex-wrap gap-2">
          {SKILL_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => updateParam("skill", opt.value)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border ${
                skill === opt.value
                  ? "bg-[#2d6a4f] text-white border-[#2d6a4f]"
                  : "bg-white text-[#333333] border-[#e5e5e5] hover:border-[#2d6a4f] hover:text-[#2d6a4f]"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
