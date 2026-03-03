import Link from "next/link";
import { getAllHobbies } from "@/lib/hobbies";
import HobbyCard from "@/components/HobbyCard";
import EmailSignup from "@/components/EmailSignup";

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Choose your hobby",
    description:
      "Browse our curated list of beginner-friendly hobbies and pick the one that's been calling to you.",
  },
  {
    step: "2",
    title: "Pick your budget",
    description:
      "Filter by budget — whether you want to dip a toe in or go all-in, we have a kit for you.",
  },
  {
    step: "3",
    title: "Shop on Amazon",
    description:
      "Every product links directly to Amazon UK. One click and you're on your way.",
  },
];

export default function HomePage() {
  const hobbies = getAllHobbies();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#f0f7f4] py-24 px-6 text-center">
        <div className="max-w-[800px] mx-auto">
          <h1 className="text-[#1a1a1a] font-bold text-5xl md:text-6xl leading-tight mb-5">
            Find Your Perfect
            <br />
            <span className="text-[#2d6a4f]">Starter Kit</span>
          </h1>
          <p className="text-[#888888] text-lg md:text-xl mb-10 leading-relaxed">
            Handpicked beginner gear for the hobbies you&apos;ve always wanted to try.
            Every recommendation links to Amazon UK.
          </p>
          <Link
            href="#hobbies"
            className="inline-block bg-[#2d6a4f] text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-[#1b4332] transition-colors"
          >
            Explore Hobbies
          </Link>
        </div>
      </section>

      {/* Hobby grid */}
      <section id="hobbies" className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[#1a1a1a] font-bold text-3xl mb-2 text-center">
            Pick a Hobby
          </h2>
          <p className="text-[#888888] text-center mb-12">
            We&apos;ve done the research so you don&apos;t have to.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby) => (
              <HobbyCard key={hobby.slug} hobby={hobby} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#f0f7f4] py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[#1a1a1a] font-bold text-3xl mb-2 text-center">
            How It Works
          </h2>
          <p className="text-[#888888] text-center mb-14">
            From curiosity to first purchase in three easy steps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, title, description }) => (
              <div key={step} className="bg-white rounded-xl border border-[#e5e5e5] p-8 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#2d6a4f] text-white font-bold text-lg flex items-center justify-center mx-auto mb-5">
                  {step}
                </div>
                <h3 className="text-[#1a1a1a] font-bold text-xl mb-3">{title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup */}
      <EmailSignup />
    </>
  );
}
