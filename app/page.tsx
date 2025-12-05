import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Philosophy from '@/components/philosophy'
import Contact from '@/components/contact'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <main className="bg-primary">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Philosophy />
      <Contact />
    </main>
  )
}
