import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FxRoot from "@/components/FxRoot";
import JsonLd, { orgLd, SITE } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: { default: "Anugraha | Event Management Course in Bangalore", template: "%s | Anugraha" },
  description: "Learn event planning, client handling, budgeting, vendors, design and coordination in Anugraha's 45-day offline Event Management course in Vijayanagar, Bengaluru.",
  metadataBase: new URL(SITE),
  openGraph: { type: "website", siteName: "Anugraha Training Institute", title: "Anugraha | Event Management Training Institute", description: "From learning to leading events.", images: ["/anugraha-symbol.svg"] },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = { themeColor: "#3A0C03", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <noscript><style>{".preloader{display:none!important}"}</style></noscript>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FxRoot />
        <JsonLd data={orgLd} />
      </body>
    </html>
  );
}
