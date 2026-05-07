import { motion } from 'framer-motion'
import { SiJavascript, SiNodedotjs, SiExpress, SiMongodb, SiReact, SiTailwindcss, SiHtml5, SiGit, SiGithub, SiPostman, SiCloudinary } from 'react-icons/si'
import { FaJava, FaCopyright } from 'react-icons/fa'
import { VscJson } from 'react-icons/vsc'
import { DiCss3 } from 'react-icons/di'
import { TbLetterC, TbBrandCpp } from 'react-icons/tb'
import './Skills.css'

const categories = [
  {
    title: 'Languages',
    color: '#f97316',
    skills: [
      { name: 'C', icon: <TbLetterC /> },
      { name: 'C++', icon: <TbBrandCpp /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
  },
  {
    title: 'Backend & DB',
    color: '#10b981',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Mongoose', icon: <VscJson /> },
    ],
  },
  {
    title: 'Frontend',
    color: '#3b82f6',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <DiCss3 /> },
    ],
  },
  {
    title: 'Tools',
    color: '#a855f7',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Cloudinary', icon: <SiCloudinary /> },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Skills</p>
        <h2 className="section-title">
          My <span className="gradient-text">tech stack</span>
        </h2>
        <p className="section-subtitle">Technologies and tools I work with on a daily basis.</p>
      </motion.div>

      <div className="skills__grid">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            className="skills__category glass-card gradient-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            <h3 className="skills__category-title" style={{ color: cat.color }}>
              {cat.title}
            </h3>
            <div className="skills__list">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skills__item">
                  <span className="skills__icon" style={{ color: cat.color }}>{skill.icon}</span>
                  <span className="skills__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
