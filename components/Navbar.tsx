"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#2d6a4f] font-bold text-2xl tracking-tight"
        >
          KitUp
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#hobbies"
            className="text-[#333333] hover:text-[#2d6a4f] font-medium transition-colors"
          >
            Hobbies
          </Link>
          <Link
            href="/blog"
            className="text-[#333333] hover:text-[#2d6a4f] font-medium transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-[#333333] hover:text-[#2d6a4f] font-medium transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-[#333333] hover:text-[#2d6a4f]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#e5e5e5] bg-white px-6 py-4 flex flex-col gap-4">
          <Link
            href="/#hobbies"
            className="text-[#333333] hover:text-[#2d6a4f] font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Hobbies
          </Link>
          <Link
            href="/blog"
            className="text-[#333333] hover:text-[#2d6a4f] font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-[#333333] hover:text-[#2d6a4f] font-medium transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </nav>
      )}
    </header>
  );
}
