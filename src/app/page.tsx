import HomePage from "@/components/HomePage";
import { getPageMetadata } from "@/lib/seo";

export function generateMetadata() { return getPageMetadata("home"); }
export default function Page() { return <HomePage />; }
