import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import IngredientParticle from '../ui/IngredientParticle'

const ingredients = [
  { emoji: '🍗', name: 'Pollo Panko', color: '#E8B82A' },
  { emoji: '🥑', name: 'Aguacate',   color: '#2D5016' },
  { emoji: '🥭', name: 'Mango',       color: '#F4A460' },
  { emoji: '🐟', name: 'Salmón',      color: '#FA8072' },
  { emoji: '🦐', name: 'Camarón',     color: '#FF7F7F' },
  { emoji: '🌿', name: 'Tofu',        color: '#8FBC8F' },
  { emoji: '🫘', name: 'Edamames',    color: '#6B8E23' },
  { emoji: '🥕', name: 'Zanahoria',   color: '#E8593C' },
]

interface IngredientData {
  emoji: string
  color: string
  angle: number
  radius: number
}

const RING_R = 120
const BOWL_SIZE = 120

function IngredientParticleWrapper({ expansion, item }: { expansion: MotionValue<number>; item: IngredientData }) {
  const x = useTransform(expansion, (e: number) => Math.cos(item.angle) * item.radius * e)
  const y = useTransform(expansion, (e: number) => Math.sin(item.angle) * item.radius * e)
  const pScale = useTransform(expansion, [0, 1], [1.2, 1])
  const pOpacity = useTransform(expansion, [0.15, 0.4], [0.85, 1])

  return (
    <IngredientParticle
      emoji={item.emoji}
      color={item.color}
      x={x}
      y={y}
      scale={pScale}
      opacity={pOpacity}
    />
  )
}

export default function BowlAnimation() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const expansion = useTransform(scrollYProgress, [0, 0.25, 0.55], [1, 0.5, 0])

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  const particles = useMemo(() =>
    ingredients.map((item, i) => ({
      emoji: item.emoji,
      color: item.color,
      angle: (i / ingredients.length) * Math.PI * 2 - Math.PI / 2,
      radius: RING_R + (i % 3) * 20,
    })),
  [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[150vh] sm:h-[250vh] bg-[#FAF7F0]"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.035] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #0AAFF2, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-3xl mx-auto flex items-center justify-center min-h-[320px] sm:min-h-[460px]">

          <motion.p
            style={{ opacity: headlineOpacity }}
            className="absolute top-6 sm:top-10 left-1/2 -translate-x-1/2 text-center pointer-events-none"
          >
            <span className="text-[10px] sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#0AAFF2]">
              Descubre nuestros ingredientes
            </span>
          </motion.p>

          {/* Bowl central — vista superior */}
          <div
            className="relative flex items-center justify-center"
            style={{ width: BOWL_SIZE, height: BOWL_SIZE }}
          >
            {/* Sombra */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-20"
              style={{ backgroundColor: '#D4A017' }}
            />
            {/* Anillo exterior */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #E8D5B7, #D4A017, #C49520, #D4A017, #E8D5B7)',
                mask: 'radial-gradient(circle at 50% 50%, transparent 63%, black 64%)',
                WebkitMask: 'radial-gradient(circle at 50% 50%, transparent 63%, black 64%)',
              }}
            />
            {/* Cuerpo */}
            <div
              className="absolute rounded-full"
              style={{
                width: '74%',
                height: '74%',
                background: 'radial-gradient(circle at 35% 35%, #D4A017, #B8860B 70%, #8B6914)',
                boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.25)',
              }}
            />
            {/* Interior profundo */}
            <div
              className="absolute rounded-full"
              style={{
                width: '48%',
                height: '48%',
                background: 'radial-gradient(circle at 40% 40%, #C49520, #8B6914)',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.3)',
              }}
            />
            {/* Brillo */}
            <div
              className="absolute rounded-full"
              style={{
                width: '28%',
                height: '18%',
                top: '20%',
                left: '24%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.25), transparent)',
              }}
            />
          </div>

          {/* Ingredientes */}
          {particles.map((item) => (
            <IngredientParticleWrapper
              key={item.emoji}
              expansion={expansion}
              item={item}
            />
          ))}


        </div>
      </div>
    </section>
  )
}
