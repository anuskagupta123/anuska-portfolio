import { profile } from "../data/profile"

const facts = [["Education", profile.education], ["Institute", profile.institute], ["Focus", "AI/ML · software · data"], ["Based in", profile.location]]

export default function About() {
  return <section id="about" className="section-shell section-block"><div className="section-heading"><p className="eyebrow">01 / About</p><h2>Curious about systems,<br /><em>serious about craft.</em></h2></div><div className="about-grid"><div className="about-copy"><p>I&apos;m pursuing a B.Tech in Artificial Intelligence and Data Science at KPR Institute of Engineering and Technology.</p><p>My work sits at the intersection of machine learning, software development, and data-driven applications. I enjoy turning a problem into something that can be explored, tested, and used.</p></div><div className="facts-list">{facts.map(([label, value]) => <div className="fact" key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>
}
