import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HashHead — Building the X1 Ecosystem";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top cyan line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00ffff, transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              color: "#00ffff",
              letterSpacing: "-2px",
              textShadow: "0 0 30px rgba(0,255,255,0.3)",
            }}
          >
            [HASHHEAD]
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "#555555",
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            Building the X1 Ecosystem
          </div>

          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "20px",
              fontSize: "16px",
              color: "#00ffff",
              opacity: 0.6,
            }}
          >
            <span>x1.ninja</span>
            <span style={{ color: "#555" }}>|</span>
            <span>tools.x1.ninja</span>
            <span style={{ color: "#555" }}>|</span>
            <span>forest.x1.ninja</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            display: "flex",
            gap: "16px",
            fontSize: "14px",
            color: "#555555",
          }}
        >
          <span>hashhead.io</span>
          <span>|</span>
          <span>@treecitywes</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
