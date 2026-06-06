import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, ArrowUpRight, Bike } from 'lucide-react'
import { restaurantInfo } from '../../data/menu'

const platforms = [
  {
    name: 'Uber Eats',
    url: restaurantInfo.delivery[0].url,
    color: '#000000',
    bg: 'bg-black',
    badge: 'Entrega en ~25 min',
    logo: UberEatsLogo,
  },
  {
    name: 'Rappi',
    url: restaurantInfo.delivery[1].url,
    color: '#FF441F',
    bg: 'bg-[#FF441F]',
    badge: 'Entrega en ~30 min',
    logo: RappiLogo,
  },
  {
    name: 'DiDi Food',
    url: restaurantInfo.delivery[2].url,
    color: '#FF6600',
    bg: 'bg-[#FF6600]',
    badge: 'Entrega en ~30 min',
    logo: DidiLogo,
  },
  {
    name: 'Pide en Línea',
    url: restaurantInfo.maspedidos,
    color: '#0AAFF2',
    bg: 'bg-[#0AAFF2]',
    badge: 'Personaliza y pide',
    logo: MaspedidosLogo,
  },
]

export default function Delivery() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-60px' })

  return (
    <section
      id="delivery"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAF7F0 0%, #E8D5B7 50%, #FAF7F0 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0AAFF2 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem', letterSpacing: '0.1em' }}
            className="text-[#0AAFF2] mb-3"
          >
            Sin salir de casa
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
            Delivery
          </h2>
          <p className="text-[#2D2D2D]/60 max-w-xl mx-auto leading-relaxed">
            Pide tu bowl favorito desde las plataformas que ya usas. Llegamos a tu puerta en 25–35 minutos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Bike,  text: 'Entrega a domicilio disponible' },
            { icon: Clock, text: '25–35 minutos promedio' },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E8D5B7] shadow-sm text-sm text-[#2D2D2D]/70 font-medium"
            >
              <Icon size={15} className="text-[#0AAFF2]" aria-hidden="true" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* Cards de plataformas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((platform, i) => {
            const Logo = platform.logo
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative flex flex-col bg-white rounded-2xl border border-[#E8D5B7] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className={`${platform.bg} px-6 py-8 flex items-center justify-center`}>
                  <Logo />
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-[#1A1A1A] text-lg">
                      {platform.name}
                    </h3>
                    <ArrowUpRight
                      size={18}
                      className="text-[#2D2D2D]/30 group-hover:text-[#0AAFF2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                    <span className="text-xs text-[#2D2D2D]/55 font-medium">{platform.badge}</span>
                  </div>
                </div>

                <div
                  className="h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: platform.color }}
                  aria-hidden="true"
                />
              </motion.a>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center text-sm text-[#2D2D2D]/45 mt-10"
        >
          También puedes recoger en restaurante · San Salvador 468, Chetumal QR
        </motion.p>
      </div>
    </section>
  )
}

function UberEatsLogo() {
  return (
    <svg width="120" height="32" viewBox="0 0 120 32" fill="none" aria-label="Uber Eats" role="img">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="white">Uber Eats</text>
    </svg>
  )
}

function RappiLogo() {
  return (
    <svg width="90" height="32" viewBox="0 0 90 32" fill="none" aria-label="Rappi" role="img">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="24" fill="white">rappi</text>
    </svg>
  )
}

function DidiLogo() {
  return (
    <svg width="110" height="32" viewBox="0 0 110 32" fill="none" aria-label="DiDi Food" role="img">
      <text x="0" y="24" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="22" fill="white">DiDi Food</text>
    </svg>
  )
}

function MaspedidosLogo() {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-white font-bold text-lg leading-none">maspedidos</span>
      <span className="text-white/70 text-xs">.menu</span>
    </div>
  )
}
