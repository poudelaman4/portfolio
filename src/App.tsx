import { MotionConfig } from "motion/react"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Ticker } from "./components/Ticker"
import { About } from "./components/About"
import { Work } from "./components/Work"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { CursorGlow, ScrollProgress } from "./components/Interactive"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative min-h-screen overflow-x-clip bg-ink text-cream">
        <ScrollProgress />
        <CursorGlow />
        <Nav />
        <main className="relative z-10">
          <Hero />
          <Ticker />
          <About />
          <Work />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
