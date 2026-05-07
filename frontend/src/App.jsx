import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'

function App() {
  return (
    <>
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
