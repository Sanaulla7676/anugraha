import ContentPage from "@/components/ContentPage";
import {getPageMetadata} from "@/lib/seo";
export function generateMetadata(){return getPageMetadata("student-stories");}
export default function Page(){return <ContentPage pageKey="student-stories"/>;}
