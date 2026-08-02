import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Work } from './components/Work'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Ai } from './components/Ai'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useRevealObserver } from './hooks/useReveal'

export function App() {
  useRevealObserver()

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Education />
      <Ai />
      <Contact />
      <Footer />
    </>
  )
}
