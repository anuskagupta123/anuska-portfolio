import { ExternalLink } from "lucide-react"
import { certificates } from "../data/certificates"

export default function Certificates() {
  return <section id="certificates" className="section-shell section-block"><div className="section-heading section-heading-row"><div><p className="eyebrow">07 / Credentials</p><h2>Proof of<br /><em>practice.</em></h2></div><p className="section-lede">Courses, simulations, and competitions that have shaped the way I learn.</p></div><div className="certificate-grid">{certificates.map((certificate) => <article className="certificate-card" key={`${certificate.title}-${certificate.issuer}`}><div><p className="muted-label">{certificate.year}</p><h3>{certificate.title}</h3><p>{certificate.issuer}</p>{certificate.note && <span className="certificate-note">{certificate.note}</span>}</div><a href={certificate.link} target="_blank" rel="noreferrer" aria-label={`View ${certificate.title} certificate`}><ExternalLink size={17} /></a></article>)}</div></section>
}
