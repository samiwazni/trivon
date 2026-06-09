import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TRIVON — Smart living for Egypt & MENA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#F4F2EC",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* top accent line */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 48, height: 2, background: "#2436E6" }} />
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#2436E6",
            }}
          >
            Smarter Communities Start Here
          </span>
        </div>

        {/* main wordmark */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 132,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#16140F",
              lineHeight: 1,
              display: "flex",
            }}
          >
            TRIVON
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ fontSize: 26, color: "#6C675C", letterSpacing: "0.04em" }}>
              Robotics · AI · Smart Homes
            </span>
            <span style={{ fontSize: 26, color: "#6C675C", letterSpacing: "0.04em" }}>
              Egypt · New Cairo · MENA
            </span>
          </div>
        </div>

        {/* bottom row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6C675C",
              display: "flex",
            }}
          >
            A Tekniikkatie Venture
          </span>
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#2436E6",
              display: "flex",
            }}
          >
            trivon.vip
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
