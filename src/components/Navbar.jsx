import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { profile } from "../data/profile"

const sections = ["about", "skills", "experience", "projects", "achievements", "certificates", "contact"]

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Anuska Gupta home"><span className="brand-mark">A</span><span>Anuska Gupta</span></a>
        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`} aria-label="Primary navigation">
          {sections.map((section) => <a key={section} href={`#${section}`} onClick={closeMenu}>{section}</a>)}
          <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
    </header>
  )
}
