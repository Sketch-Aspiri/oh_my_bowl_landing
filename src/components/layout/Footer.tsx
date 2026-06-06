import { motion } from 'framer-motion'
import { MapPin, Clock, Facebook } from 'lucide-react'

const horarios = [
  { dia: 'Lun – Vie', hora: '13:30 – 20:30' },
  { dia: 'Sáb – Dom', hora: '13:30 – 19:30' },
]

const navLinks = [
  { label: 'Menú', href: '#menu' },
  { label: 'Arma tu Bowl', href: '#builder' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="h-1 bg-gradient-to-r from-[#0AAFF2] via-[#D4A017] to-[#1B5E73]" aria-hidden="true" />

      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #0AAFF2, transparent)', transform: 'translate(30%, -30%)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="Oh My Bowl"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <span className="font-display font-bold text-xl text-white">Oh! My Bowl</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Poke bowls frescos y personalizados en el corazón de Chetumal. Elige tus ingredientes y crea tu bowl ideal.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.facebook.com/p/Oh-My-Bowl-61559907120542/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Oh My Bowl"
                className="w-9 h-9 rounded-lg bg-white/6 hover:bg-[#0AAFF2]/20 border border-white/8 hover:border-[#0AAFF2]/40 flex items-center justify-center text-white/60 hover:text-[#0AAFF2] transition-all duration-200 cursor-pointer"
              >
                <Facebook size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest opacity-60">Navegación</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-white/55 hover:text-white text-sm transition-colors duration-150 cursor-pointer hover:translate-x-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horarios */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest opacity-60">Horarios</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm">
                <Clock size={15} className="text-[#0AAFF2] mt-0.5 shrink-0" aria-hidden="true" />
                <div className="space-y-2">
                  {horarios.map(({ dia, hora }) => (
                    <div key={dia} className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                      <span className="text-white/80 font-medium">{dia}</span>
                      <span className="text-white/45 text-xs sm:text-sm">{hora}</span>
                    </div>
                  ))}
                </div>
              </div>
              <OpenNowBadge />
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest opacity-60">Encuéntranos</h3>
            <div className="space-y-3">
              <a
                href="https://maps.google.com/?q=San+Salvador+468+Chetumal+Quintana+Roo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-white/55 hover:text-white transition-colors duration-150 cursor-pointer group"
              >
                <MapPin size={15} className="text-[#0AAFF2] mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-150" aria-hidden="true" />
                <span>San Salvador 468, Chetumal, Quintana Roo 77084</span>
              </a>
            </div>
            <div className="flex gap-2 pt-1">
              {['Uber Eats', 'Rappi', 'DiDi'].map((app) => (
                <span key={app} className="px-2.5 py-1 rounded-md bg-white/6 border border-white/8 text-white/40 text-xs">{app}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© {currentYear} Oh My Bowl. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <HeartIcon /> en Chetumal, Quintana Roo
          </p>
        </div>
      </div>
    </footer>
  )
}

function OpenNowBadge() {
  const now = new Date()
  const day = now.getDay()
  const time = now.getHours() + now.getMinutes() / 60
  const isWd = day >= 1 && day <= 5
  const isWe = day === 6 || day === 0
  const isOpen = (isWd && time >= 13.5 && time < 20.5) || (isWe && time >= 13.5 && time < 19.5)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
        isOpen ? 'bg-green-500/15 border border-green-500/25 text-green-400' : 'bg-white/6 border border-white/10 text-white/40'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-white/30'}`} aria-hidden="true" />
      {isOpen ? 'Abierto ahora' : 'Cerrado por hoy'}
    </motion.div>
  )
}

function HeartIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#0AAFF2" aria-hidden="true" className="mx-0.5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
