import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span style={{ color: 'var(--accent-cyan)' }}>&lt;</span>
            AM
            <span style={{ color: 'var(--accent-cyan)' }}>/&gt;</span>
          </span>
          <p className="footer__tagline">Building the web, one line at a time.</p>
        </div>

        <div className="footer__socials">
          <a href="https://github.com/ErenYeager1407" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/akashdeep-maity-99a46a252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          <a href="https://leetcode.com/u/akashdeep_maity/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
          <a href="mailto:akashdeepmaity2005@gmail.com" aria-label="Email"><FiMail /></a>
        </div>

        <div className="footer__copyright">
          <p>
            Built with <FiHeart style={{ color: 'var(--accent-pink)', verticalAlign: 'middle' }} /> by Akashdeep Maity &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
