import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Check, ChevronRight, ChevronLeft, ShoppingBag, RotateCcw } from 'lucide-react'
import { bowlComponents } from '../../data/menu'
import { cn } from '../../lib/utils'
import type { BowlComponent } from '../../data/menu'

type StepKey = keyof Selection

interface Step {
  id: number
  title: string
  key: StepKey
  max: number
  label: string
}

const STEPS: Step[] = [
  { id: 0, title: 'Base',     key: 'base',      max: 1, label: 'Elige 1' },
  { id: 1, title: 'Proteína',  key: 'proteina',  max: 1, label: 'Elige 1' },
  { id: 2, title: 'Vegetales', key: 'vegetal',   max: 4, label: 'Elige hasta 4' },
  { id: 3, title: 'Cremoso',   key: 'cremoso',   max: 1, label: 'Elige 1' },
  { id: 4, title: 'Crujiente', key: 'crujiente', max: 1, label: 'Elige 1' },
  { id: 5, title: 'Aderezos',  key: 'aderezo',   max: 2, label: 'Elige hasta 2' },
] as const

interface Selection {
  base: BowlComponent[]
  proteina: BowlComponent[]
  vegetal: BowlComponent[]
  cremoso: BowlComponent[]
  crujiente: BowlComponent[]
  aderezo: BowlComponent[]
}

const EMPTY: Selection = {
  base: [],
  proteina: [],
  vegetal: [],
  cremoso: [],
  crujiente: [],
  aderezo: []
}
const STEP_COLORS = [
  '#0891CC',
  '#0AAFF2',
  '#2D5016',
  '#D4A017',
  '#1B5E73',
  '#0AAFF2'
]

export default function BowlBuilder() {
  const [step, setStep] = useState(0)
  const [sel, setSel]   = useState<Selection>(EMPTY)
  const [done, setDone] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-80px' })
  const current  = STEPS[step]
  const options  = bowlComponents.filter((c) => c.category === current.key)
  const selected = sel[current.key]
  const color    = STEP_COLORS[step]

  function toggle(item: BowlComponent) {
    const key  = current.key
    const curr = sel[key]
    const isIn = curr.some((c) => c.id === item.id)
    if (isIn) {
      setSel({ ...sel, [key]: curr.filter((c) => c.id !== item.id) })
    } else {
      setSel({ ...sel, [key]: curr.length >= current.max ? [...curr.slice(1), item] : [...curr, item] })
    }
  }

  const canAdvance = () => sel[current.key].length > 0

  function next() {
    if (step < STEPS.length - 1) setStep(step + 1)
    else setDone(true)
  }

  function reset() { setSel(EMPTY); setStep(0); setDone(false) }

  const totalIngredients = Object.values(sel).flat().length
  return (
    <section id="builder" ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#E8D5B7]/20 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #0AAFF2 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        aria-hidden="true" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }} className="text-center mb-12">
          <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem', letterSpacing: '0.1em' }}
            className="text-[#0AAFF2] mb-3">Hazlo a tu manera</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">Arma tu Bowl</h2>
          <p className="text-[#2D2D2D]/60 max-w-lg mx-auto">
            Selecciona cada ingrediente paso a paso y crea la combinación perfecta para ti.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div key="builder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Stepper */}
              <div className="flex items-center justify-center gap-0 mb-10 overflow-x-auto pb-2">
                {STEPS.map((s, i) => (
                  <div key={s.id} className="flex items-center shrink-0">
                    <button onClick={() => i < step && setStep(i)} disabled={i > step}
                      className={cn('flex flex-col items-center gap-1 cursor-pointer disabled:cursor-default')}>
                      <div className={cn(
                        'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                        i < step  && 'bg-[#2D5016] text-white',
                        i === step && 'text-white shadow-lg scale-110',
                        i > step  && 'bg-[#E8D5B7] text-[#2D2D2D]/40',
                      )} style={i === step ? { backgroundColor: color } : undefined}>
                        {i < step ? <Check size={16} /> : i + 1}
                      </div>
                      <span className={cn('text-[10px] font-semibold uppercase tracking-wide hidden sm:block',
                        i === step ? 'text-[#1A1A1A]' : 'text-[#2D2D2D]/40')}>
                        {s.title}
                      </span>
                    </button>
                    {i < STEPS.length - 1 && (
                      <div className={cn('w-8 sm:w-12 h-px mx-1 transition-colors duration-300',
                        i < step ? 'bg-[#2D5016]' : 'bg-[#E8D5B7]')} aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>

              {/* Panel del paso */}
              <AnimatePresence mode="wait">
                <motion.div key={step}
                  initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.28 }}
                  className="bg-white rounded-3xl border border-[#E8D5B7] shadow-sm overflow-hidden">
                  <div className="px-6 py-5 border-b border-[#E8D5B7]/60" style={{ background: `${color}08` }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color }}>
                          Paso {step + 1} de {STEPS.length}
                        </p>
                        <h3 className="font-display font-bold text-xl text-[#1A1A1A]">{current.title}</h3>
                      </div>
                      <span className="text-sm text-[#2D2D2D]/50 font-medium bg-[#FAF7F0] px-3 py-1.5 rounded-full border border-[#E8D5B7]">
                        {selected.length}/{current.max} — {current.label}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {options.map((opt) => {
                        const isSelected = selected.some((s) => s.id === opt.id)
                        return (
                          <button key={opt.id} onClick={() => toggle(opt)}
                            className={cn(
                              'relative flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all duration-150 cursor-pointer',
                              isSelected ? 'border-2 text-[#1A1A1A] shadow-sm' : 'border-[#E8D5B7] bg-[#FAF7F0]/60 text-[#2D2D2D]/70 hover:bg-white'
                            )}
                            style={isSelected ? { borderColor: color, backgroundColor: `${color}08` } : undefined}
                          >
                            <div className={cn(
                              'w-5 h-5 rounded-full shrink-0 flex items-center justify-center border-2 transition-all duration-150',
                              isSelected ? 'text-white' : 'border-[#E8D5B7] bg-white'
                            )} style={isSelected ? { backgroundColor: color, borderColor: color } : undefined}>
                              {isSelected && <Check size={11} aria-hidden="true" />}
                            </div>
                            <div className="min-w-0">
                              <span className="text-sm font-medium leading-tight block truncate">{opt.name}</span>
                              {opt.isVegan && <span className="text-[10px] text-[#2D5016] font-semibold">Vegano</span>}
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Selección actual */}
              {totalIngredients > 0 && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="mt-4 px-5 py-3 bg-white rounded-2xl border border-[#E8D5B7] flex flex-wrap gap-1.5">
                  {Object.entries(sel).flatMap(([, items]) =>
                    (items as BowlComponent[]).map((item) => (
                      <span key={item.id}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#FAF7F0] border border-[#E8D5B7] text-[#2D2D2D]/70">
                        {item.name}
                      </span>
                    ))
                  )}
                </motion.div>
              )}

              {/* Navegación */}
              <div className="flex items-center justify-between mt-6">
                <button onClick={() => step > 0 ? setStep(step - 1) : undefined} disabled={step === 0}
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#E8D5B7] text-[#2D2D2D]/60 text-sm font-medium hover:bg-white hover:text-[#1A1A1A] transition-all duration-150 cursor-pointer disabled:opacity-30 disabled:cursor-default">
                  <ChevronLeft size={16} /> Anterior
                </button>
                <button onClick={next} disabled={!canAdvance()}
                  className="flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold shadow-md transition-all duration-150 cursor-pointer disabled:opacity-40 disabled:cursor-default"
                  style={{ backgroundColor: canAdvance() ? color : '#E8D5B7' }}>
                  {step === STEPS.length - 1 ? <><ShoppingBag size={16} /> Ver mi bowl</> : <>Siguiente <ChevronRight size={16} /></>}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="result"
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl border border-[#E8D5B7] shadow-sm overflow-hidden">
              <div className="px-6 py-6 bg-gradient-to-r from-[#0AAFF2]/8 to-[#D4A017]/8 border-b border-[#E8D5B7]">
                <p style={{ fontFamily: 'Caveat, cursive' }} className="text-[#0AAFF2] text-lg mb-1">¡Tu bowl está listo!</p>
                <h3 className="font-display font-bold text-2xl text-[#1A1A1A]">Tu Combinación Perfecta</h3>
              </div>
              <div className="p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {STEPS.map((s, i) => {
                    const items = sel[s.key]
                    if (items.length === 0) return null
                    return (
                      <div key={s.key} className="flex flex-col gap-2">
                        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: STEP_COLORS[i] }}>{s.title}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span key={item.id} className="text-sm px-3 py-1 rounded-full font-medium"
                              style={{ backgroundColor: `${STEP_COLORS[i]}10`, color: STEP_COLORS[i] }}>
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="https://www.maspedidos.menu/ohmybowl" target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#0AAFF2] text-white font-semibold rounded-full hover:bg-[#0891CC] transition-colors duration-200 shadow-md cursor-pointer text-center">
                    <ShoppingBag size={18} aria-hidden="true" />
                    Pedir en maspedidos.menu
                  </a>
                  <button onClick={reset}
                    className="flex items-center justify-center gap-2 px-6 py-4 border border-[#E8D5B7] text-[#2D2D2D]/70 font-medium rounded-full hover:bg-[#FAF7F0] transition-colors duration-200 cursor-pointer">
                    <RotateCcw size={16} aria-hidden="true" /> Armar otro
                  </button>
                </div>
                <p className="text-center text-xs text-[#2D2D2D]/40 mt-4">
                  También disponible en Uber Eats · Rappi · DiDi Food
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
