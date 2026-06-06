import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import BowlAnimation from './components/sections/BowlAnimation'
import About from './components/sections/About'
import MenuSection from './components/sections/MenuSection'
import HowItWorks from './components/sections/HowItWorks'
import BowlBuilder from './components/sections/BowlBuilder'
import Gallery from './components/sections/Gallery'
import Delivery from './components/sections/Delivery'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Navbar />
      <main>
        <Hero />
        <BowlAnimation />
        <About />
        <MenuSection />
        <HowItWorks />
        <BowlBuilder />
        <Gallery />
        <Delivery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
