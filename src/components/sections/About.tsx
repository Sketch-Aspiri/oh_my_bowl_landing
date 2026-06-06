import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Leaf, Zap, Heart } from 'lucide-react'
import AnimatedCounter from '../ui/AnimatedCounter'

const features = [
  {
    icon: Leaf,
    title: 'Ingredientes frescos',
    body: 'Seleccionamos cada ingrediente con cuidado. Productos frescos, de calidad, listos para armar tu bowl perfecto.',
    color: 'text-[#2D5016]',
    bg: 'bg-[#2D5016]/8',
    border: 'border-[#2D5016]/15',
  },
  {
    icon: Zap,
    title: 'Totalmente personalizable',
    body: 'Tú decides: proteína, vegetales, cremoso, crujiente y aderezos. Millones de combinaciones posibles, un bowl único.',
    color: 'text-[#0AAFF2]',
    bg: 'bg-[#0AAFF2]/8',
    border: 'border-[#0AAFF2]/15',
  },
  {
    icon: Heart,
    title: 'Opciones veganas',
    body: 'Menú inclusivo con proteínas 100% veganas y opciones plant-based para todos los estilos de vida.',
    color: 'text-[#1B5E73]',
    bg: 'bg-[#1B5E73]/8',
    border: 'border-[#1B5E73]/15',
  },
]

const stats = [
  { target: 6,  suffix: '',  label: 'Proteínas',     duration: 1200 },
  { target: 10, suffix: '+', label: 'Vegetales',     duration: 1400 },
  { target: 10, suffix: '+', label: 'Aderezos',      duration: 1000 },
  { target: -1, suffix: '∞', label: 'Combinaciones', duration: 0    },
]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="nosotros" ref={sectionRef} className="relative py-24 sm:py-32 bg-[#FAF7F0] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.035] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0AAFF2, transparent 70%)', transform: 'translate(30%, -30%)' }}
        aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1B5E73, transparent 70%)', transform: 'translate(-30%, 30%)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={containerVariants} initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mb-16 sm:mb-20"
        >
          <motion.p variants={itemVariants} transition={{ duration: 0.6 }}
            style={{ fontFamily: 'Caveat, cursive', fontSize: '1rem', letterSpacing: '0.15em' }}
            className="text-sm font-semibold uppercase tracking-widest text-[#0AAFF2] mb-3"
          >
            Nuestra historia
          </motion.p>
          <motion.h2 variants={itemVariants} transition={{ duration: 0.6 }}
            className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] leading-tight mb-5"
          >
            En Oh My Bowl,{' '}
            <span className="text-[#0AAFF2]">cada bowl</span>
            <br className="hidden sm:block" /> es tuyo
          </motion.h2>
          <motion.p variants={itemVariants} transition={{ duration: 0.6 }}
            className="text-lg text-[#2D2D2D]/65 leading-relaxed max-w-2xl"
          >
            Nacimos en el corazón de Chetumal con una misión simple: que cada persona pueda crear
            su bowl ideal. Con ingredientes frescos del día, proteínas de calidad y aderezos únicos,
            transformamos el poke hawaiano en una experiencia caribeña mexicana.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants} initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-24"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div key={f.title} variants={itemVariants} transition={{ duration: 0.6 }}
                className={`relative p-6 rounded-2xl border bg-white ${f.border} group hover:shadow-md transition-shadow duration-300`}
              >
                <div className={`w-11 h-11 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} className={f.color} aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-[#1A1A1A] text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">{f.body}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="flex items-center gap-4 mb-16 sm:mb-20" aria-hidden="true">
          <div className="flex-1 h-px bg-[#E8D5B7]" />
          <div className="w-2 h-2 rounded-full bg-[#0AAFF2]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4A017]" />
          <div className="w-2 h-2 rounded-full bg-[#1B5E73]" />
          <div className="flex-1 h-px bg-[#E8D5B7]" />
        </div>

        <motion.div
          variants={containerVariants} initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants} transition={{ duration: 0.6 }}>
              {stat.target === -1 ? (
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold font-display text-[#0AAFF2] leading-none">∞</div>
                  <div className="mt-2 text-sm text-[#2D2D2D]/60 font-medium tracking-wide uppercase">{stat.label}</div>
                </div>
              ) : (
                <AnimatedCounter target={stat.target} suffix={stat.suffix} label={stat.label} duration={stat.duration} />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-2xl sm:text-3xl text-[#1A1A1A]/80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Caveat, cursive' }}>
            "Fresco, personalizado y delicioso —<br className="hidden sm:block" />
            <span className="text-[#0AAFF2]"> así es como lo hacemos en Chetumal."</span>
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
