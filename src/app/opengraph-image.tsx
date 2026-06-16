import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EV vs Petrol Cost Calculator — ElectricVsPetrol.co.uk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0B132B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(0,102,255,0.15)",
            border: "1px solid rgba(0,102,255,0.4)",
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#0066FF",
            }}
          />
          <span style={{ color: "#0066FF", fontSize: "18px", fontWeight: 600 }}>
            Independent · UK-specific · Data-led
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "24px",
            maxWidth: "900px",
          }}
        >
          {"Would an EV actually "}
          <span style={{ color: "#0066FF" }}>save</span>
          {" you money?"}
        </div>

        {/* Sub-headline */}
        <div
          style={{
            fontSize: "26px",
            color: "rgba(255,255,255,0.65)",
            maxWidth: "780px",
            lineHeight: 1.4,
            marginBottom: "60px",
          }}
        >
          Compare electric vs petrol running costs using real local UK prices.
        </div>

        {/* Stat pills */}
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "Avg. saving/yr", value: "~£900", color: "#16C784" },
            { label: "EV cost/mile", value: "~4.3p", color: "#0066FF" },
            { label: "Data privacy", value: "100%", color: "#FFB020" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "20px 32px",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}
              >
                {stat.label}
              </span>
              <span
                style={{ color: stat.color, fontSize: "32px", fontWeight: 700 }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            right: "80px",
            color: "rgba(255,255,255,0.35)",
            fontSize: "18px",
          }}
        >
          electricvspetrol.co.uk
        </div>
      </div>
    ),
    { ...size }
  );
}
