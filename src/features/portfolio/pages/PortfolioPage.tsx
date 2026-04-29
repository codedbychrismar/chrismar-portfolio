import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Technologies,
} from '../components'
import { useScrollReveal } from '../hooks'

export function PortfolioPage() {
  useScrollReveal()

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="site-backdrop" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
