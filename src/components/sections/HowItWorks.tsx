import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Elige la base',
    body: 'Arroz blanco, espinaca o mezcla de ambos para comenzar tu bowl.',
    accent: '#0AAFF2',
    bg: 'bg-[#0AAFF2]/6',
    border: 'border-[#0AAFF2]/15',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Elige tu proteína',
    body: 'Pollo Panko, Salmón, Atún, Camarón, Tampico o Tofu fresco.',
    accent: '#0AAFF2',
    bg: 'bg-[#0AAFF2]/6',
    border: 'border-[#0AAFF2]/15',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 5c4 0 7 2.5 7 5.5S16 16 12 16s-7-2.5-7-5.5S8 5 12 5z" />
        <path d="M12 16v3" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Agrega vegetales',
    body: 'Elige hasta 4 ingredientes frescos como mango, pepino, aguacate o edamames.',
    accent: '#2D5016',
    bg: 'bg-[#2D5016]/6',
    border: 'border-[#2D5016]/15',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Elige un cremoso',
    body: 'Añade alioli de wasabi, chipotle o sriracha para darle personalidad a tu bowl.',
    accent: '#D4A017',
    bg: 'bg-[#D4A017]/6',
    border: 'border-[#D4A017]/15',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8 7 7 10 7 13a5 5 0 0 0 10 0c0-3-1-6-5-11z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Añade un crujiente',
    body: 'Complementa la textura con toppings crujientes seleccionados especialmente.',
    accent: '#1B5E73',
    bg: 'bg-[#1B5E73]/6',
    border: 'border-[#1B5E73]/15',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h16" />
        <path d="M8 8l8 8" />
        <path d="M16 8l-8 8" />
      </svg>
    ),
  },
  {
    number: '06',
    title: 'Selecciona aderezos',
    body: 'Elige hasta 2 aderezos como soya picante, tamarindo serrano o anguila.',
    accent: '#0AAFF2',
    bg: 'bg-[#0AAFF2]/6',
    border: 'border-[#0AAFF2]/15',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 2l1.578 8.578A2 2 0 0 0 6.562 12h10.876a2 2 0 0 0 1.984-1.422L21 2H3z" />
        <path d="M12 12v10" />
        <path d="M9 22h6" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-80px' }

  )
  return (
    <section id="como-funciona" ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0891CC 0%, #0AAFF2 40%, #38C5FF 70%, #0891CC 100%)' }}
    >
      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        aria-hidden="true" />

      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4A017, transparent 70%)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-16 sm:mb-20"
        >
          <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem', letterSpacing: '0.1em' }}
            className="text-[#D4A017] mb-3">Así de fácil</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">Arma tu Bowl en 4 pasos</h2>
          <p className="text-white/55 max-w-lg mx-auto text-lg leading-relaxed">Simple, rápido y siempre delicioso.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4">
          {steps.map((step, i) => (
            <motion.div key={step.number}
              initial={{ opacity: 0, y: 32 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: i * 0.12 + 0.4, duration: 0.4 }}
                  className="hidden lg:block absolute top-10 left-[calc(100%-8px)] w-full h-px origin-left"
                  style={{ background: `linear-gradient(to right, ${step.accent}40, transparent)` }}
                  aria-hidden="true" />
              )}
              <div className={`relative p-6 rounded-2xl border ${step.bg} ${step.border} backdrop-blur-sm h-full flex flex-col`}>
                <div className="text-6xl font-bold font-display leading-none mb-4 select-none"
                  style={{ color: step.accent, opacity: 0.15 }} aria-hidden="true">
                  {step.number}
                </div>
                <div className={`w-12 h-12 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center mb-4 -mt-10 relative z-10`}
                  style={{ color: step.accent }}>
                  {step.icon}
                </div>
                <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed flex-1">{step.body}</p>
                <div className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ backgroundColor: `${step.accent}25`, color: step.accent }} aria-hidden="true">
                  {step.number}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }} className="text-center mt-14">
          <button
            onClick={() => document.querySelector('#builder')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-[#0AAFF2] font-bold rounded-full hover:bg-[#FAF7F0] transition-colors duration-200 shadow-lg cursor-pointer"
          >
            Arma tu bowl ahora <span aria-hidden="true">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
