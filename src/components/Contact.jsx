import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import { profile } from "../data/profile"

export default function Contact() {
  return <section id="contact" className="contact-section section-shell section-block"><div className="contact-panel"><div><p className="eyebrow">08 / Contact</p><h2>Let&apos;s build something<br /><em>useful.</em></h2><p className="contact-copy">Open to AI/ML internships, software development opportunities, and thoughtful collaborations.</p></div><div className="contact-links"><a href={`mailto:${profile.email}`}><span><Mail size={18} /> Email</span><ArrowUpRight size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={18} /> LinkedIn</span><ArrowUpRight size={17} /></a><a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={18} /> GitHub</span><ArrowUpRight size={17} /></a></div></div></section>
}
