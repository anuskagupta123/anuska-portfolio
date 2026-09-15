import { Award } from "lucide-react"
import { achievements } from "../data/achievements"

export default function Achievements() {
  return <section id="achievements" className="section-shell section-block section-tint"><div className="section-heading"><p className="eyebrow">06 / Highlights</p><h2>Small milestones,<br /><em>useful momentum.</em></h2></div><div className="achievement-grid">{achievements.map((item) => <article className="achievement-card" key={item.title}><Award size={20} /><div><p className="muted-label">{item.year} · {item.organization}</p><h3>{item.title}</h3><p>{item.detail}</p></div></article>)}</div></section>
}
