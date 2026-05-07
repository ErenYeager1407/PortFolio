import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import './Navbar.css'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navLinks.map(l => document.getElementById(l.id))
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].getBoundingClientRect().top <= 150) {
          setActive(navLinks[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__inner">
        <button className="navbar__logo" onClick={() => scrollTo('hero')}>
          <span className="navbar__logo-bracket">&lt;</span>
          AM
          <span className="navbar__logo-bracket">/&gt;</span>
        </button>

        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar__link ${active === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map(link => (
              <button
                key={link.id}
                className={`navbar__mobile-link ${active === link.id ? 'navbar__mobile-link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
