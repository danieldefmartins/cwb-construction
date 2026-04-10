import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CWB Construction | General Contractor | Greater Boston & NH",
  description:
    "Greater Boston's trusted general contractor. Home remodeling, kitchen & bathroom renovation, roofing, new construction, fire & water damage restoration. Licensed, insured, quality craftsmanship.",
  keywords: [
    "general contractor",
    "home remodeling",
    "kitchen remodeling",
    "bathroom remodeling",
    "roofing",
    "new construction",
    "fire damage restoration",
    "water damage restoration",
    "Greater Boston",
    "Massachusetts",
    "New Hampshire",
  ],
  metadataBase: new URL("https://cwbconstructioninc.com"),
  openGraph: {
    title: "CWB Construction | General Contractor | Greater Boston & NH",
    description:
      "Quality craftsmanship for home remodeling, roofing, new construction & more. Licensed & insured, serving Greater Boston, MA & NH.",
    url: "https://cwbconstructioninc.com",
    siteName: "CWB Construction",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CWB Construction | General Contractor",
    description:
      "Quality craftsmanship for home remodeling, roofing, new construction & more. Serving Greater Boston, MA & NH.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
