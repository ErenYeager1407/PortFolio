import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import './Education.css'

const education = [
  {
    period: 'Aug 2022 – Present',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Future Institute of Engineering and Management (MAKAUT)',
    grade: 'CGPA: 8.4 (Till 7th Semester)',
    color: '#00d4ff',
  },
  {
    period: '2020 – 2022',
    degree: 'Higher Secondary (WBCHSE)',
    institution: 'Higher Secondary Education',
    grade: 'Percentage: 90.2%',
    color: '#7c3aed',
  },
  {
    period: '2020',
    degree: 'Secondary (WBBSE)',
    institution: 'Secondary Education',
    grade: 'Percentage: 89.7%',
    color: '#ec4899',
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Education</p>
        <h2 className="section-title">
          Academic <span className="gradient-text">journey</span>
        </h2>
      </motion.div>

      <div className="education__timeline">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="education__item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="education__dot" style={{ background: edu.color, boxShadow: `0 0 20px ${edu.color}40` }} />
            <div className="education__card glass-card gradient-border">
              <span className="education__period">{edu.period}</span>
              <h3 className="education__degree">{edu.degree}</h3>
              <p className="education__institution">{edu.institution}</p>
              <span className="education__grade" style={{ color: edu.color }}>
                <FiBookOpen style={{ marginRight: 6 }} />
                {edu.grade}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
