import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Clock, Facebook, ExternalLink } from 'lucide-react'
import { restaurantInfo } from '../../data/menu'

const DAYS = [
  { label: 'Lunes',     hours: '13:30 – 20:30', open: true  },
  { label: 'Martes',    hours: '13:30 – 20:30', open: true  },
  { label: 'Miércoles', hours: '13:30 – 20:30', open: true  },
  { label: 'Jueves',    hours: '13:30 – 20:30', open: true  },
  { label: 'Viernes',   hours: '13:30 – 20:30', open: true  },
  { label: 'Sábado',    hours: '13:30 – 19:30', open: true  },
  { label: 'Domingo',   hours: '13:30 – 19:30', open: true  },
]

function getTodayIndex() {
  const d = new Date().getDay()
  return d === 0 ? 6 : d - 1
}

function isOpenNow() {
  const now  = new Date()
  const day  = now.getDay()
  const h    = now.getHours() + now.getMinutes() / 60
  const isWd = day >= 1 && day <= 5
  const isWe = day === 0 || day === 6
  return (isWd && h >= 13.5 && h < 20.5) || (isWe && h >= 13.5 && h < 19.5)
}

export default function Contact() {
  const sectionRef  = useRef<HTMLElement>(null)
  const isInView    = useInView(sectionRef, { once: true, margin: '-60px' })
  const todayIndex  = getTodayIndex()
  const openNow     = isOpenNow()

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurantInfo.address)}`
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(restaurantInfo.address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#FAF7F0] overflow-hidden"
    >
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1B5E73, transparent 70%)', transform: 'translate(30%, 30%)' }}
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
            Ven a visitarnos
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">
            Ubicación y Contacto
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${openNow ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}
              aria-hidden="true"
            />
            <span className={`text-sm font-medium ${openNow ? 'text-green-600' : 'text-red-500'}`}>
              {openNow ? 'Abierto ahora' : 'Cerrado en este momento'}
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Columna izquierda — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Dirección */}
            <div className="bg-white rounded-2xl border border-[#E8D5B7] p-5 sm:p-6 flex flex-col gap-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0AAFF2]/10 border border-[#0AAFF2]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#0AAFF2]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#1A1A1A] text-lg mb-1">Dirección</h3>
                  <p className="text-[#2D2D2D]/65 leading-relaxed">{restaurantInfo.address}</p>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#0AAFF2] font-semibold hover:underline cursor-pointer pl-14"
              >
                Abrir en Google Maps
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>

            {/* Horarios */}
            <div className="bg-white rounded-2xl border border-[#E8D5B7] p-5 sm:p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1B5E73]/10 border border-[#1B5E73]/20 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-[#1B5E73]" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-[#1A1A1A] text-lg">Horarios</h3>
              </div>

              <div className="space-y-2">
                {DAYS.map((day, i) => {
                  const isToday = i === todayIndex
                  return (
                    <div
                      key={day.label}
                      className={`flex items-center justify-between py-2 px-3 rounded-xl transition-colors ${
                        isToday ? 'bg-[#0AAFF2]/8 border border-[#0AAFF2]/15' : 'hover:bg-[#FAF7F0]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {isToday && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0AAFF2]" aria-hidden="true" />
                        )}
                        <span className={`text-sm font-medium ${isToday ? 'text-[#0AAFF2]' : 'text-[#2D2D2D]/70'}`}>
                          {day.label}
                          {isToday && <span className="ml-1.5 text-xs text-[#0AAFF2]/60">(hoy)</span>}
                        </span>
                      </div>
                      <span className={`text-sm font-semibold tabular-nums ${isToday ? 'text-[#0AAFF2]' : 'text-[#1A1A1A]'}`}>
                        {day.hours}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-white rounded-2xl border border-[#E8D5B7] p-5 sm:p-6">
              <h3 className="font-display font-bold text-[#1A1A1A] text-lg mb-4">Síguenos</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={restaurantInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl border border-[#E8D5B7] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/4 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1877F2] flex items-center justify-center shrink-0">
                    <Facebook size={18} fill="white" className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#1877F2]">Oh My Bowl</p>
                    <p className="text-xs text-[#2D2D2D]/50">Facebook</p>
                  </div>
                  <ExternalLink size={14} className="text-[#2D2D2D]/30 group-hover:text-[#1877F2] ml-auto" aria-hidden="true" />
                </a>

                <a
                  href={restaurantInfo.maspedidos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 rounded-xl border border-[#E8D5B7] hover:border-[#0AAFF2]/40 hover:bg-[#0AAFF2]/4 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0AAFF2] flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xs leading-none">MP</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1A1A] group-hover:text-[#0AAFF2]">maspedidos.menu/ohmybowl</p>
                    <p className="text-xs text-[#2D2D2D]/50">Pide en línea</p>
                  </div>
                  <ExternalLink size={14} className="text-[#2D2D2D]/30 group-hover:text-[#0AAFF2] ml-auto" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha — mapa */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sticky top-24"
          >
            <div className="bg-white rounded-2xl border border-[#E8D5B7] overflow-hidden shadow-sm">
              <div className="relative w-full" style={{ paddingBottom: '65%' }}>
                <iframe
                  title="Ubicación de Oh My Bowl en Chetumal"
                  src={mapsEmbedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="px-5 py-4 flex items-center justify-between gap-3 border-t border-[#E8D5B7]">
                <div>
                  <p className="text-sm font-bold text-[#1A1A1A]">Oh! My Bowl</p>
                  <p className="text-xs text-[#2D2D2D]/55">San Salvador 468, Chetumal QR</p>
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#0AAFF2] text-white text-xs font-semibold rounded-full hover:bg-[#0891CC] transition-colors duration-200 cursor-pointer whitespace-nowrap"
                >
                  Cómo llegar
                  <ExternalLink size={11} aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
