import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "CWB Construction | General Contractor | Greater Boston & NH";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "og-logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a3a2a",
          padding: "60px",
        }}
      >
        <img src={logoSrc} alt="" width={200} height={200} />
        <div
          style={{
            marginTop: 32,
            fontSize: 48,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          CWB Construction
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 24,
            color: "#c9a84c",
            textAlign: "center",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase" as const,
          }}
        >
          General Contractor
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          Quality craftsmanship for home remodeling, roofing, new construction & more. Serving Greater Boston, MA & NH.
        </div>
      </div>
    ),
    { ...size }
  );
}
