import { motion } from 'framer-motion'
import { FiAward, FiTrendingUp, FiTarget, FiZap, FiCalendar, FiStar } from 'react-icons/fi'
import './Achievements.css'

const achievements = [
  {
    icon: <FiZap />,
    title: '1400+ DSA Problems',
    desc: 'Solved across LeetCode, Codeforces, and other platforms.',
    color: '#f97316',
  },
  {
    icon: <FiAward />,
    title: 'LeetCode Knight Badge',
    desc: 'Achieved Knight badge — Top 5% of all users.',
    color: '#eab308',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Codeforces Pupil',
    desc: 'Achieved Pupil rank with 1200+ rating.',
    color: '#10b981',
  },
  {
    icon: <FiTarget />,
    title: 'Rank 1147 — LeetCode Contest 475',
    desc: 'Among 28K+ participants worldwide.',
    color: '#3b82f6',
  },
  {
    icon: <FiStar />,
    title: 'Rank 1825 — LeetCode Contest 450',
    desc: 'Among 26K+ participants worldwide.',
    color: '#a855f7',
  },
  {
    icon: <FiCalendar />,
    title: '500 Days Badge',
    desc: 'Solved problems on LeetCode for 500+ consecutive days.',
    color: '#ec4899',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Achievements</p>
        <h2 className="section-title">
          Milestones <span className="gradient-text">unlocked</span>
        </h2>
        <p className="section-subtitle">Competitive programming achievements and recognitions.</p>
      </motion.div>

      <div className="achievements__grid">
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            className="achievements__card glass-card gradient-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="achievements__icon" style={{ color: a.color, background: `${a.color}15` }}>
              {a.icon}
            </div>
            <h3 className="achievements__title">{a.title}</h3>
            <p className="achievements__desc">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
