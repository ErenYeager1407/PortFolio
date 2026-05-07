import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheckCircle } from 'react-icons/fi'
import axios from 'axios'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post('/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.response?.data?.message || 'Something went wrong.')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Contact</p>
        <h2 className="section-title">
          Let's <span className="gradient-text">connect</span>
        </h2>
        <p className="section-subtitle">Have a question or want to work together? Drop me a message!</p>
      </motion.div>

      <div className="contact__grid">
        <motion.form
          className="contact__form glass-card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact__field-row">
            <div className="contact__field">
              <label htmlFor="contact-name">Name</label>
              <input id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
            </div>
          </div>
          <div className="contact__field">
            <label htmlFor="contact-subject">Subject</label>
            <input id="contact-subject" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
          </div>
          <div className="contact__field">
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me more..." rows={5} required />
          </div>

          <button type="submit" className="btn-primary contact__submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : status === 'success' ? (
              <><FiCheckCircle /> Sent!</>
            ) : (
              <><FiSend /> Send Message</>
            )}
          </button>

          {status === 'error' && <p className="contact__error">{errorMsg}</p>}
          {status === 'success' && <p className="contact__success">Message sent! I'll get back to you soon.</p>}
        </motion.form>

        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="contact__info-card glass-card">
            <div className="contact__info-icon"><FiMail /></div>
            <div>
              <p className="contact__info-label">Email</p>
              <a href="mailto:akashdeepmaity2005@gmail.com">akashdeepmaity2005@gmail.com</a>
            </div>
          </div>
          <div className="contact__info-card glass-card">
            <div className="contact__info-icon"><FiPhone /></div>
            <div>
              <p className="contact__info-label">Phone</p>
              <a href="tel:+918116950851">+91 8116950851</a>
            </div>
          </div>
          <div className="contact__info-card glass-card">
            <div className="contact__info-icon"><FiMapPin /></div>
            <div>
              <p className="contact__info-label">Location</p>
              <p className="contact__info-value">West Bengal, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
