import type {Metadata} from "next";
import {pageDesign} from "@/lib/page-design";
const routePath=(key:string)=>key==="home"?"/":`/${key}`;
export function getPageMetadata(key:string):Metadata{
 const page=pageDesign[key];
 if(!page)return {title:"Anugraha Training Institute"};
 const path=routePath(key);
 return {title:page.metaTitle,description:page.metaDescription,keywords:page.keywords,alternates:{canonical:path},openGraph:{type:"website",siteName:"Anugraha Training Institute",title:page.metaTitle,description:page.metaDescription,url:path},twitter:{card:"summary_large_image",title:page.metaTitle,description:page.metaDescription}};
}
