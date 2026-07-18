import { ImageResponse } from "next/og";

export const alt = "Synapt, цифровые сервисы под ключ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          position: "relative",
          overflow: "hidden",
          color: "#F4F7FB",
          background: "#05070B",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #355E98",
              background: "#0D1521",
            }}
          >
            S
          </div>
          Synapt
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 950 }}>
          <div style={{ fontSize: 72, lineHeight: 1.02, letterSpacing: "-3px" }}>
            Цифровые сервисы, которые работают на вас
          </div>
          <div style={{ color: "#9AA7B8", fontSize: 26 }}>
            Продукты под ключ, AI-агенты, автоматизация и LMS
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 95,
            right: 95,
            bottom: -330,
            height: 430,
            borderRadius: "50% 50% 0 0 / 60% 60% 0 0",
            borderTop: "4px solid #5C91D5",
            boxShadow: "0 -12px 54px #3F6FB688, 0 -50px 120px #244A7B66",
            background: "#09111D",
          }}
        />
      </div>
    ),
    size,
  );
}
