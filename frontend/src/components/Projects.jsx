import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import './Projects.css'

const projects = [
  {
    title: 'NextHire — AI Powered Job Portal',
    description: 'A full-stack job portal with role-based access control for recruiters and job seekers, featuring AI-powered interview report generation.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'GenAI'],
    features: [
      'Role-based access control with JWT authentication',
      'RESTful APIs with full CRUD for jobs, applications & users',
      'AI interview report generation using Google Gemini API',
      'Job filtering & search by role, location, and keywords',
      'Secure resume upload with Multer and Cloudinary',
      'Axios integration with error handling & protected routes',
    ],
    color: '#00d4ff',
    github: 'https://github.com/ErenYeager1407/NextHire',
    live: 'https://next-hire-psi.vercel.app/',
  },
  {
    title: 'Expense Tracker',
    description: 'A full-stack expense tracking application with real-time balance calculation and responsive UI.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Real-time balance calculation across transactions',
      'RESTful APIs with validation and structured MongoDB schemas',
      'Responsive React UI with reusable components',
    ],
    color: '#10b981',
    github: 'https://github.com/ErenYeager1407/Expense-Tracker',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Projects</p>
        <h2 className="section-title">
          Things I've <span className="gradient-text">built</span>
        </h2>
        <p className="section-subtitle">Featured projects that showcase my full-stack development skills.</p>
      </motion.div>

      <div className="projects__list">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="projects__card glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="projects__card-accent" style={{ background: project.color }} />
            <div className="projects__card-content">
              <div className="projects__card-header">
                <h3 className="projects__card-title" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <div className="projects__card-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="projects__link" aria-label="View code">
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="projects__link" aria-label="Live demo">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <p className="projects__card-desc">{project.description}</p>

              <ul className="projects__features">
                {project.features.map((feat, fi) => (
                  <li key={fi} className="projects__feature">
                    <span className="projects__feature-dot" style={{ background: project.color }} />
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="projects__tech-row">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
