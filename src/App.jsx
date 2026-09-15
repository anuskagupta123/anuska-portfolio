import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"

function getInitialTheme() {
  const saved = localStorage.getItem("portfolio-theme")
  if (saved) return saved
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("portfolio-theme", theme)
  }, [theme])

  return (
    <div className="site-shell">
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Anuska Gupta</span>
        <span>Built with React & curiosity.</span>
      </footer>
    </div>
  )
}
