import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiAward, FiBookOpen, FiTrendingUp } from 'react-icons/fi'
import './About.css'

const stats = [
  { icon: <FiCode />, value: 1400, suffix: '+', label: 'DSA Problems' },
  { icon: <FiAward />, value: 8.4, suffix: '', label: 'CGPA', isFloat: true },
  { icon: <FiTrendingUp />, label: 'Knight Badge', isStatic: true, staticText: 'Top 5%', sublabel: 'LeetCode' },
  { icon: <FiBookOpen />, value: 500, suffix: '+', label: 'Day Streak' },
]

function Counter({ target, isFloat, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const step = isFloat ? 0.1 : Math.ceil(target / 60)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(isFloat ? Math.round(current * 10) / 10 : Math.floor(current))
      }
    }, 25)
    return () => clearInterval(timer)
  }, [inView, target, isFloat])

  return <span ref={ref}>{isFloat ? count.toFixed(1) : count}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">About Me</p>
        <h2 className="section-title">
          Turning <span className="gradient-text">ideas</span> into code
        </h2>
      </motion.div>

      <div className="about__grid">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm a final-year Computer Science Engineering student at <strong>Future Institute of Engineering and Management</strong> with a passion for building things that live on the internet. I specialize in full-stack development with the <strong>MERN stack</strong> — React, Node.js, Express, and MongoDB.
          </p>
          <p>
            Beyond web development, I'm deeply invested in <strong>competitive programming</strong>. With 1400+ problems solved across LeetCode and Codeforces, I bring strong algorithmic thinking to every project I build.
          </p>
          <p>
            I'm seeking a <strong>Software Developer role</strong> where I can contribute to enterprise-grade solutions and continue growing as an engineer.
          </p>
        </motion.div>

        <motion.div
          className="about__stats"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="about__stat glass-card gradient-border">
              <div className="about__stat-icon">{stat.icon}</div>
              <div className="about__stat-value">
                {stat.isStatic ? stat.staticText : <Counter target={stat.value} isFloat={stat.isFloat} suffix={stat.suffix} />}
              </div>
              <div className="about__stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
