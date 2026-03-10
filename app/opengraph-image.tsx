import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "KitUp — Find Your Perfect Starter Kit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1b4332",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background pattern — subtle circles */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#2d6a4f",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "#2d6a4f",
            opacity: 0.3,
          }}
        />

        {/* Logo mark — backpack icon approximation using shapes */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            height: 100,
            borderRadius: 24,
            background: "#40916c",
            marginBottom: 32,
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Simple kit/toolbox icon */}
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <line x1="12" y1="12" x2="12" y2="16" />
            <line x1="10" y1="14" x2="14" y2="14" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Kit
          <span style={{ color: "#74c69d" }}>Up</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#b7e4c7",
            fontWeight: 400,
            letterSpacing: "0px",
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Starter kits for every hobby
        </div>

        {/* URL pill */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            alignItems: "center",
            background: "#2d6a4f",
            borderRadius: 999,
            padding: "10px 28px",
            color: "#74c69d",
            fontSize: 22,
            letterSpacing: "0.5px",
          }}
        >
          kitup.webapps.life
        </div>
      </div>
    ),
    { ...size }
  );
}
