export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export const SITE = "https://anugraha-lake.vercel.app";

export const orgLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Anugraha Training Institute",
  description: "Event Management Training Institute offering a 45-day offline Event Management course in Vijayanagar, Bengaluru.",
  url: SITE,
  telephone: "+91 96865 68245",
  address: { "@type": "PostalAddress", addressLocality: "Vijayanagar", addressRegion: "Karnataka", addressCountry: "IN" }
};

export const crumbs = (items: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: SITE + path }))
});

export const faqLd = (qa: [string, string][]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: qa.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } }))
});
