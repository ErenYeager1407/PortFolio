import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import './Hero.css'

const roles = ['Full-Stack Developer', 'Competitive Programmer', 'Problem Solver', 'MERN Stack Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // 'typing' | 'pausing' | 'deleting'

  useEffect(() => {
    const current = roles[roleIndex]

    let delay
    if (phase === 'typing') {
      delay = 80
    } else if (phase === 'pausing') {
      delay = 2000
    } else {
      delay = 40
    }

    const timeout = setTimeout(() => {
      if (phase === 'typing') {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setPhase('pausing')
      } else if (phase === 'pausing') {
        setPhase('deleting')
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setRoleIndex((roleIndex + 1) % roles.length)
          setPhase('typing')
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, phase, roleIndex])

  return (
    <section id="hero" className="hero">
      <div className="hero__bg-orb hero__bg-orb--1" />
      <div className="hero__bg-orb hero__bg-orb--2" />
      <div className="hero__bg-orb hero__bg-orb--3" />

      <div className="hero__inner">
        <div className="hero__content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="hero__greeting">
              <span className="hero__wave">👋</span> Hey there, I'm
            </p>
          </motion.div>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Akashdeep <span className="gradient-text">Maity</span>
          </motion.h1>

          <motion.div
            className="hero__role-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="hero__role-prefix">{'> '}</span>
            <span className="hero__role-text">{text}</span>
            <span className="hero__cursor">|</span>
          </motion.div>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Final-year CSE student who has solved <strong>1400+ DSA problems</strong> and
            builds scalable full-stack apps with the MERN stack.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects <FiArrowDown />
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get In Touch
            </button>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a href="https://github.com/ErenYeager1407" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/akashdeep-maity-99a46a252/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://leetcode.com/u/akashdeep_maity/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LeetCode">
              <SiLeetcode />
            </a>
            <a href="mailto:akashdeepmaity2005@gmail.com" className="hero__social-link" aria-label="Email">
              <FiMail />
            </a>
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div
          className="hero__photo-container"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
        >
          <div className="hero__photo-ring" />
          <div className="hero__photo-ring hero__photo-ring--2" />
          <div className="hero__photo-wrapper">
            <img
              src="/images/10.jpeg"
              alt="Akashdeep Maity"
              className="hero__photo"
            />
          </div>
          <div className="hero__photo-glow" />
        </motion.div>
      </div>

      <div className="hero__scroll-indicator">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FiArrowDown />
        </motion.div>
      </div>
    </section>
  )
}
