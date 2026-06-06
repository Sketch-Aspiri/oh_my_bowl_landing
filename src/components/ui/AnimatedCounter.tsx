import { useAnimatedCounter, useInView } from '../../hooks/useScrollAnimation'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
}

export default function AnimatedCounter({ target, suffix = '', prefix = '', label, duration = 1600 }: AnimatedCounterProps) {
  const { ref, inView } = useInView(0.3)
  const count = useAnimatedCounter(target, duration, inView)

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <div className="text-4xl sm:text-5xl font-bold font-display text-[#0AAFF2] leading-none">
        {prefix}{count}{suffix}
      </div>
      <div className="mt-2 text-sm text-[#2D2D2D]/60 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}
