export default function WebappsBar() {
  return (
    <div className="border-t border-[#2a2a2a] py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-sm text-[#666666]">
        {/* Logo — not a link. Using dark variant (white wordmark) for dark footer */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 420 80"
          fill="none"
          className="h-[18px] w-auto opacity-60"
          aria-label="webapps.life"
        >
          {/* Left phone */}
          <rect x="16" y="16" width="26" height="42" rx="4.5" fill="#0F0F1A" stroke="#F97316" strokeWidth="1.5"/>
          <rect x="19.5" y="21" width="19" height="28" rx="1.5" fill="url(#dk-grad-left)"/>
          <circle cx="29" cy="52" r="2" fill="#F97316" opacity="0.7"/>
          <rect x="21.5" y="24" width="14" height="1.5" rx="0.75" fill="#F97316" opacity="0.6"/>
          <rect x="21.5" y="28" width="10" height="1.5" rx="0.75" fill="#F97316" opacity="0.35"/>
          <rect x="21.5" y="35" width="14" height="5" rx="1.5" fill="#F97316" opacity="0.4"/>

          {/* Middle phone (raised) */}
          <rect x="45" y="6" width="26" height="42" rx="4.5" fill="#0F0F1A" stroke="#6366F1" strokeWidth="1.5"/>
          <rect x="48.5" y="11" width="19" height="28" rx="1.5" fill="url(#dk-grad-mid)"/>
          <circle cx="58" cy="42" r="2" fill="#6366F1" opacity="0.9"/>
          <rect x="50.5" y="14" width="14" height="1.5" rx="0.75" fill="#6366F1" opacity="0.7"/>
          <rect x="50.5" y="18" width="10" height="1.5" rx="0.75" fill="#6366F1" opacity="0.4"/>
          <rect x="50.5" y="25" width="14" height="5" rx="1.5" fill="#6366F1" opacity="0.5"/>

          {/* Right phone */}
          <rect x="74" y="16" width="26" height="42" rx="4.5" fill="#0F0F1A" stroke="#10B981" strokeWidth="1.5"/>
          <rect x="77.5" y="21" width="19" height="28" rx="1.5" fill="url(#dk-grad-right)"/>
          <circle cx="87" cy="52" r="2" fill="#10B981" opacity="0.7"/>
          <rect x="79.5" y="24" width="14" height="1.5" rx="0.75" fill="#10B981" opacity="0.6"/>
          <rect x="79.5" y="28" width="10" height="1.5" rx="0.75" fill="#10B981" opacity="0.35"/>
          <rect x="79.5" y="35" width="14" height="5" rx="1.5" fill="#10B981" opacity="0.4"/>

          {/* Wordmark — white on dark */}
          <text
            x="116"
            y="50"
            fontFamily="Syne, 'Space Grotesk', 'DM Sans', sans-serif"
            fontWeight="700"
            fontSize="28"
            letterSpacing="-0.5"
            fill="#F8F8FF"
          >
            webapps<tspan fill="#6366F1">.</tspan>life
          </text>

          <defs>
            <linearGradient id="dk-grad-left" x1="19.5" y1="21" x2="38.5" y2="49" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.08"/>
            </linearGradient>
            <linearGradient id="dk-grad-mid" x1="48.5" y1="11" x2="67.5" y2="39" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1"/>
            </linearGradient>
            <linearGradient id="dk-grad-right" x1="77.5" y1="21" x2="96.5" y2="49" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.08"/>
            </linearGradient>
          </defs>
        </svg>

        <span className="hidden sm:inline">·</span>
        <span>Part of the webapps.life collection</span>
        <span className="hidden sm:inline">·</span>

        <a
          href="https://giftdraw.webapps.life"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#888888] transition-colors"
        >
          Gift Draw ↗
        </a>
        <span className="hidden sm:inline">·</span>

        <span className="text-[#555555]">Kit Up</span>
      </div>
    </div>
  );
}
