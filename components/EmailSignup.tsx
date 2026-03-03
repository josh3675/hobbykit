"use client";

import { useState } from "react";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section className="bg-[#f0f7f4] py-20 px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <h2 className="text-[#1a1a1a] font-bold text-3xl mb-3">
          Stay in the loop
        </h2>
        <p className="text-[#888888] text-base mb-8">
          Get new hobby kit guides straight to your inbox. No spam, ever.
        </p>

        {status === "success" ? (
          <p className="text-[#2d6a4f] font-semibold text-base bg-white rounded-xl px-6 py-4 border border-[#2d6a4f]/20 shadow-sm">
            You&apos;re in! We&apos;ll send you new hobby kit guides as we publish them.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg border border-[#e5e5e5] text-[#1a1a1a] bg-white focus:outline-none focus:ring-2 focus:ring-[#2d6a4f]/30 focus:border-[#2d6a4f] placeholder-[#888888]"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#2d6a4f] text-white rounded-lg px-6 py-3 font-semibold hover:bg-[#1b4332] transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-red-600 text-sm">{errorMsg}</p>
        )}
      </div>
    </section>
  );
}
