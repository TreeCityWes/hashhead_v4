import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HashHead — TreeMiner for XenBlocks and x1.ninja for X1";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050b10",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(111,244,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(82,213,255,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, transparent, #6ff4c4, #52d5ff, transparent)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", zIndex: 1 }}>
          <div style={{ fontSize: "22px", color: "#6ff4c4", letterSpacing: "6px" }}>
            HASHHEAD.IO
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              color: "#6ff4c4",
              letterSpacing: "-2px",
            }}
          >
            TREEMINER
          </div>
          <div style={{ fontSize: "28px", color: "#eef4fb", maxWidth: "920px" }}>
            Outage-proof XenBlocks GPU mining for the X1 blockchain
          </div>
          <div
            style={{
              display: "flex",
              gap: "28px",
              marginTop: "18px",
              fontSize: "20px",
              color: "#52d5ff",
            }}
          >
            <span>github.com/TreeCityWes/tree_miner</span>
            <span style={{ color: "#8d9cb1" }}>|</span>
            <span>x1.ninja</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
