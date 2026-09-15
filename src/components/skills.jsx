import { motion } from "framer-motion"
import { skillGroups } from "../data/skills"
const MotionArticle = motion.article

export default function Skills() {
  return <section id="skills" className="section-shell section-block section-tint"><div className="section-heading section-heading-row"><div><p className="eyebrow">02 / Toolkit</p><h2>The tools I reach for.</h2></div><p className="section-lede">A working toolkit across code, models, analysis, and interfaces.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <MotionArticle className="skill-card" key={group.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.07 }} viewport={{ once: true }}><span className="card-index">0{index + 1}</span><h3>{group.label}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></MotionArticle>)}</div></section>
}
