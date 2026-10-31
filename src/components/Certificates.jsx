import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, X } from "lucide-react"
import { certificates } from "../data/certificates"

const MotionDiv = motion.div

function CertificatePreview({ certificate, onOpen }) {
  const [imageBroken, setImageBroken] = useState(false)
  const canPreview = certificate.previewType === "pdf" || (certificate.previewType === "image" && !imageBroken)

  const handleImageError = () => {
    console.warn(`[Certificates] Preview asset failed to load: ${certificate.preview}`)
    setImageBroken(true)
  }

  const handleKeyDown = (event) => {
    if (canPreview && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault()
      onOpen(certificate)
    }
  }

  return <div className="certificate-preview" role="button" tabIndex={canPreview ? 0 : -1} onClick={() => canPreview && onOpen(certificate)} onKeyDown={handleKeyDown} aria-disabled={!canPreview} aria-label={canPreview ? `Preview ${certificate.title}` : `${certificate.title} preview unavailable`}>
    {certificate.previewType === "pdf" && <iframe src={`${certificate.link}#page=1&view=FitH`} title={`${certificate.title} first page`} tabIndex="-1" />}
    {certificate.previewType === "image" && !imageBroken && <img src={certificate.preview} alt="" loading="lazy" onError={handleImageError} />}
    {!canPreview && <span className="certificate-placeholder">Preview unavailable</span>}
  </div>
}

function CertificateModal({ certificate, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  return <MotionDiv className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
    <MotionDiv className="certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-preview-title" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} onClick={(event) => event.stopPropagation()}>
      <button className="modal-close" type="button" onClick={onClose} aria-label="Close certificate preview"><X size={19} /></button>
      {certificate.previewType === "pdf" ? <iframe className="certificate-modal-document" src={`${certificate.link}#page=1&view=FitH`} title={`${certificate.title} document`} /> : <img src={certificate.preview} alt={`${certificate.title} issued by ${certificate.issuer}`} />}
      <div className="certificate-modal-footer"><h3 id="certificate-preview-title">{certificate.title}</h3><a className="button button-quiet" href={certificate.link} target="_blank" rel="noopener noreferrer">Open original <ExternalLink size={15} /></a></div>
    </MotionDiv>
  </MotionDiv>
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)
  return <section id="certificates" className="section-shell section-block"><div className="section-heading section-heading-row"><div><p className="eyebrow">07 / Credentials</p><h2>Proof of<br /><em>practice.</em></h2></div><p className="section-lede">Courses, simulations, and competitions that have shaped the way I learn.</p></div><div className="certificate-grid">{certificates.map((certificate) => <article className="certificate-card" key={certificate.id}><CertificatePreview certificate={certificate} onOpen={setSelected} /><div><p className="muted-label">{certificate.year}</p><span className="certificate-category">{certificate.category}</span><h3>{certificate.title}</h3><p>{certificate.issuer}</p>{certificate.internship && <p className="certificate-association">{certificate.internship}</p>}{certificate.note && <span className="certificate-note">{certificate.note}</span>}{certificate.completionDate && <p className="certificate-meta">Completed {certificate.completionDate}</p>}{certificate.startDate && <p className="certificate-meta">Starts {certificate.startDate} · {certificate.duration}</p>}{certificate.duration && !certificate.startDate && <p className="certificate-meta">{certificate.duration}</p>}</div><a href={certificate.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${certificate.title} document`}><ExternalLink size={17} /></a></article>)}</div><AnimatePresence>{selected && <CertificateModal certificate={selected} onClose={() => setSelected(null)} />}</AnimatePresence></section>
}
