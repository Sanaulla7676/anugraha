import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: { default: "Anugraha | Event Management Training Institute", template: "%s | Anugraha" },
  description: "Learn event planning, client handling, budgeting, vendor coordination and event execution in Anugraha's 45-day offline Event Management programme in Vijayanagar, Bengaluru.",
  keywords: ["Event Management Course in Bangalore","45 Days Event Management Course","Event Management Training Institute","Event Management Course with Industry Exposure"],
  robots: { index: true, follow: true }
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>;
}
