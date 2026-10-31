import ContentPage from "@/components/ContentPage";
import {getPageMetadata} from "@/lib/seo";
export function generateMetadata(){return getPageMetadata("about");}
export default function Page(){return <ContentPage pageKey="about"/>;}
