import { useState } from "react"
import { ArrowUpRight, Code2, Github, Linkedin, Mail, Send } from "lucide-react"
import { profile } from "../data/profile"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${formState.name}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }
  return <section id="contact" className="contact-section section-shell section-block"><div className="contact-panel"><div><p className="eyebrow">08 / Contact</p><h2>Let&apos;s build something<br /><em>useful.</em></h2><p className="contact-copy">Open to AI/ML internships, software development opportunities, and thoughtful collaborations.</p><div className="contact-links"><a href={`mailto:${profile.email}`}><span><Mail size={18} /> Email</span><ArrowUpRight size={17} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={18} /> LinkedIn</span><ArrowUpRight size={17} /></a><a href={profile.github} target="_blank" rel="noreferrer"><span><Github size={18} /> GitHub</span><ArrowUpRight size={17} /></a><a href={profile.leetcode} target="_blank" rel="noopener noreferrer" aria-label="View Anuska Gupta's LeetCode profile"><span><Code2 size={18} /> LeetCode</span><ArrowUpRight size={17} /></a><a href={profile.codechef} target="_blank" rel="noopener noreferrer" aria-label="View Anuska Gupta's CodeChef profile"><span><Code2 size={18} /> CodeChef</span><ArrowUpRight size={17} /></a></div></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="contact-name">Name</label><input id="contact-name" required value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} /><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" required value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} /><label htmlFor="contact-message">Message</label><textarea id="contact-message" required rows="5" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} /><button className="button button-primary" type="submit"><Send size={16} /> Open email draft</button>{submitted && <p className="form-note" role="status">Your email app should open with a prepared draft. No server-side form submission is configured.</p>}</form></div></section>
}
