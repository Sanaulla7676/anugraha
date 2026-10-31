import type {Metadata} from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata:Metadata={
 title:{default:"Anugraha | Event Management Training Institute",template:"%s | Anugraha"},
 description:"Learn event planning, client communication, budgeting and coordination in Anugraha’s 45-day offline Event Management course in Vijayanagar, Bengaluru.",
 metadataBase:new URL("https://anugraha-lake.vercel.app"),
 openGraph:{type:"website",siteName:"Anugraha Training Institute",title:"Anugraha | Event Management Training Institute",description:"From Learning to Leading Events.",images:["/anugraha-symbol.svg"]},
 robots:{index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><SiteHeader/><main>{children}</main><SiteFooter/></body></html>;
}
