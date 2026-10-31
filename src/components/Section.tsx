import Reveal from "@/components/Reveal";

export default function Section({ eyebrow, title, children, tone = "paper", id }: {
  eyebrow: string; title: string; children: React.ReactNode; tone?: "paper" | "beige" | "white" | "dark"; id?: string;
}) {
  return <section id={id} className={`content-section tone-${tone}`}>
    <Reveal>
      <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
      {children}
    </Reveal>
  </section>;
}
