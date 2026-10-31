import ContentPage from "@/components/ContentPage";
import {getPageMetadata} from "@/lib/seo";
export function generateMetadata(){return getPageMetadata("roadmap");}
export default function Page(){return <ContentPage pageKey="roadmap"/>;}
