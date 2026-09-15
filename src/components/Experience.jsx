import { experience } from "../data/experience"

export default function Experience() {
  return <section id="experience" className="section-shell section-block"><div className="section-heading"><p className="eyebrow">03 / Experience</p><h2>Learning by building<br /><em>in the real world.</em></h2></div><div className="timeline">{experience.map((item) => <article className="timeline-item" key={`${item.role}-${item.period}`}><div className="timeline-marker" /><div className="timeline-period">{item.period}</div><div className="timeline-content"><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>
}
