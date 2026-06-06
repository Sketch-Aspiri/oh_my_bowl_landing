import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface IngredientParticleProps {
  emoji: string
  color: string
  x: MotionValue<number>
  y: MotionValue<number>
  scale: MotionValue<number>
  opacity: MotionValue<number>
}

export default function IngredientParticle({
  emoji,
  color,
  x,
  y,
  scale,
  opacity,
}: IngredientParticleProps) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ x, y, scale, opacity }}
    >
      <div
        className="relative flex items-center justify-center rounded-full shadow-lg"
        style={{
          width: 64,
          height: 64,
          backgroundColor: `${color}20`,
          border: `2px solid ${color}40`,
        }}
      >
        <span className="text-2xl select-none" style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))' }}>
          {emoji}
        </span>
        <div
          className="absolute -inset-1 rounded-full -z-10 opacity-40 blur-md"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  )
}
