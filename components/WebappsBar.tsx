export default function WebappsBar() {
  return (
    <div className="border-t border-gray-100 py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-sm text-gray-400">
        {/* Logo — not a link */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 420 80"
          fill="none"
          className="h-[18px] w-auto opacity-60"
          aria-label="webapps.life"
        >
          <rect x="4" y="16" width="26" height="42" rx="4.5" fill="#1A1A2E" stroke="#F97316" strokeWidth="1.5"/>
          <rect x="7.5" y="21" width="19" height="28" rx="1.5" fill="url(#lh-grad-left)"/>
          <circle cx="17" cy="52" r="2" fill="#F97316" opacity="0.6"/>
          <rect x="9.5" y="24" width="14" height="1.5" rx="0.75" fill="#F97316" opacity="0.5"/>
          <rect x="9.5" y="28" width="10" height="1.5" rx="0.75" fill="#F97316" opacity="0.3"/>
          <rect x="9.5" y="35" width="14" height="5" rx="1.5" fill="#F97316" opacity="0.35"/>

          <rect x="33" y="6" width="26" height="42" rx="4.5" fill="#1A1A2E" stroke="#6366F1" strokeWidth="1.5"/>
          <rect x="36.5" y="11" width="19" height="28" rx="1.5" fill="url(#lh-grad-mid)"/>
          <circle cx="46" cy="42" r="2" fill="#6366F1" opacity="0.8"/>
          <rect x="38.5" y="14" width="14" height="1.5" rx="0.75" fill="#6366F1" opacity="0.6"/>
          <rect x="38.5" y="18" width="10" height="1.5" rx="0.75" fill="#6366F1" opacity="0.4"/>
          <rect x="38.5" y="25" width="14" height="5" rx="1.5" fill="#6366F1" opacity="0.45"/>

          <rect x="62" y="16" width="26" height="42" rx="4.5" fill="#1A1A2E" stroke="#10B981" strokeWidth="1.5"/>
          <rect x="65.5" y="21" width="19" height="28" rx="1.5" fill="url(#lh-grad-right)"/>
          <circle cx="75" cy="52" r="2" fill="#10B981" opacity="0.6"/>
          <rect x="67.5" y="24" width="14" height="1.5" rx="0.75" fill="#10B981" opacity="0.5"/>
          <rect x="67.5" y="28" width="10" height="1.5" rx="0.75" fill="#10B981" opacity="0.3"/>
          <rect x="67.5" y="35" width="14" height="5" rx="1.5" fill="#10B981" opacity="0.35"/>

          <text
            x="104"
            y="50"
            fontFamily="Syne, 'Space Grotesk', 'DM Sans', sans-serif"
            fontWeight="700"
            fontSize="28"
            letterSpacing="-0.5"
            fill="#1A1A2E"
          >
            webapps<tspan fill="#6366F1">.</tspan>life
          </text>

          <defs>
            <linearGradient id="lh-grad-left" x1="7.5" y1="21" x2="26.5" y2="49" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#F97316" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="lh-grad-mid" x1="36.5" y1="11" x2="55.5" y2="39" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.08"/>
            </linearGradient>
            <linearGradient id="lh-grad-right" x1="65.5" y1="21" x2="84.5" y2="49" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
        </svg>

        <span className="hidden sm:inline text-gray-300">·</span>
        <span>Part of the webapps.life collection</span>
        <span className="hidden sm:inline text-gray-300">·</span>

        <a
          href="https://giftdraw.webapps.life"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 transition-colors"
        >
          Gift Draw ↗
        </a>
        <span className="hidden sm:inline text-gray-300">·</span>

        <span className="font-medium text-gray-500">Kit Up</span>
      </div>
    </div>
  );
}
