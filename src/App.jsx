import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-canvas">
      <Navbar />

      <main>
        <Hero />
        <Work />
        <Bio />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
