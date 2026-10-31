import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export const metadata: Metadata = { title: "Anugraha | Event Management Training Institute", description: "Learn to plan, lead and deliver events with Anugraha's 45-day Event Management training programme in Vijayanagar, Bengaluru.", metadataBase: new URL("https://anugraha.events") };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>; }
