import type {MetadataRoute} from "next";
const base="https://anugraha-lake.vercel.app";
const paths=["/","/about","/founders","/course","/curriculum","/exposure","/careers","/projects","/roadmap","/student-stories","/gallery","/admissions","/faq","/contact","/counselling","/resources"];
export default function sitemap():MetadataRoute.Sitemap{return paths.map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:path==="/"?"weekly":"monthly",priority:path==="/" ? 1 : ["/course","/curriculum","/admissions","/resources"].includes(path) ? .9 : .7}));}
