import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'
import HeroShader from '../ui/HeroShader'

const easeCustom: [number, number, number, number] = [0.22, 1, 0.36, 1]

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeCustom } },
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const textY  = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const scrollToMenu     = () => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToDelivery = () => document.querySelector('#delivery')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={sectionRef}
        className="relative min-h-screen flex items-center justify-center overflow-visible"
    >
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* WebGL shader animado */}
        <HeroShader />

        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Acentos de color sutiles */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, #D4A017 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, #1B5E73 0%, transparent 40%)
          `,
        }} />

        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border border-white/8"
        />

        <FloatingElement delay={0}   x="15%" y="25%" size={8}  color="#D4A017" opacity={0.4} />
        <FloatingElement delay={1.5} x="75%" y="70%" size={6}  color="#FAF7F0" opacity={0.25} />
        <FloatingElement delay={3}   x="85%" y="30%" size={10} color="#D4A017" opacity={0.15} />
        <FloatingElement delay={0.8} x="25%" y="75%" size={5}  color="#FAF7F0" opacity={0.2} />
      </div>

      {/* Contenido */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center will-change-transform"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Logo grande en hero */}
          <motion.div variants={fadeUp}>
            <img
              src="/logo.jpg"
              alt="Oh My Bowl"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-xl border-4 border-white/20"
            />
          </motion.div>

          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-sm font-medium">
              <Star size={14} className="fill-[#D4A017] text-[#D4A017]" aria-hidden="true" />
              <span style={{ fontFamily: 'Caveat, cursive' }} className="text-base leading-none">El favorito de Chetumal</span>
              <Star size={14} className="fill-[#D4A017] text-[#D4A017]" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={fadeUp} className="space-y-2">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.08] tracking-tight">
              Arma el bowl
              <br />
              <span className="relative inline-block">
                <span className="text-[#D4A017]">de tus sueños</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.1, duration: 0.6, ease: easeCustom }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white/40 rounded-full origin-left"
                  aria-hidden="true"
                />
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p variants={fadeUp} className="max-w-xl text-lg sm:text-xl text-white/80 leading-relaxed font-light">
            Poke bowls frescos y personalizados en el corazón de{' '}
            <strong className="text-white font-medium">Chetumal, Quintana Roo</strong>
          </motion.p>

          {/* Chips */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2.5">
            {['Ingredientes frescos', 'Opciones veganas', 'Entrega a domicilio'].map((tag) => (
              <span key={tag} className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/85 text-sm backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={scrollToMenu}
              className="group px-8 py-4 bg-white text-[#0AAFF2] font-bold text-base rounded-full hover:bg-[#FAF7F0] transition-all duration-200 shadow-lg cursor-pointer"
            >
              Ver Menú
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
            </button>
            <button
              onClick={scrollToDelivery}
              className="group px-8 py-4 bg-white text-[#0AAFF2] font-bold text-base rounded-full hover:bg-[#FAF7F0] transition-all duration-200 shadow-lg cursor-pointer"
            >
              Pedir Ahora
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        onClick={scrollToMenu}
        aria-label="Desplazarse hacia abajo"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown size={28} aria-hidden="true" />
        </motion.div>
      </motion.button>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#FAF7F0] to-transparent" aria-hidden="true" />
    </section>
  )
}

interface FloatingElementProps {
  delay: number; x: string; y: string; size: number; color: string; opacity: number
}
function FloatingElement({ delay, x, y, size, color, opacity }: FloatingElementProps) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0], opacity: [opacity, opacity * 0.6, opacity] }}
      transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
      className="absolute rounded-full will-change-transform"
      style={{ left: x, top: y, width: size * 4, height: size * 4, backgroundColor: color, opacity, filter: 'blur(1px)' }}
      aria-hidden="true"
    />
  )
}
