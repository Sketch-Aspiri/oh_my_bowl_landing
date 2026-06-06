import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Sliders, BookOpen, GlassWater, Leaf, Fish, ChefHat } from 'lucide-react'
import { menuItems } from '../../data/menu'
import MenuCard from '../ui/MenuCard'
import type { MenuItem } from '../../data/menu'

type Tab    = 'arma' | 'armados' | 'bebidas'
type Filter = 'todos' | 'vegano' | 'mariscos' | 'pollo'

const tabs: { id: Tab; label: string; icon: typeof Sliders; desc: string }[] = [
  { id: 'arma',    label: 'Arma tu Bowl',  icon: Sliders,    desc: 'Elige tu proteína y personaliza' },
  { id: 'armados', label: 'Bowls Armados', icon: BookOpen,   desc: 'Combinaciones ya diseñadas' },
  { id: 'bebidas', label: 'Bebidas',       icon: GlassWater, desc: 'Para acompañar tu bowl' },
]

const filters: { id: Filter; label: string; icon: typeof Leaf }[] = [
  { id: 'todos',    label: 'Todos',    icon: ChefHat },
  { id: 'vegano',   label: 'Vegano',   icon: Leaf    },
  { id: 'mariscos', label: 'Mariscos', icon: Fish    },
  { id: 'pollo',    label: 'Pollo',    icon: ChefHat },
]

function getItems(tab: Tab, filter: Filter): MenuItem[] {
  let items: MenuItem[] = []
  if (tab === 'arma')    items = menuItems.filter((i) => i.subcategory === 'arma')
  if (tab === 'armados') items = menuItems.filter((i) => i.subcategory === 'armado')
  if (tab === 'bebidas') return menuItems.filter((i) => i.category === 'bebida')
  if (filter === 'todos') return items
  return items.filter((i) => i.tags.includes(filter as never))
}

export default function MenuSection() {
  const [activeTab, setActiveTab]       = useState<Tab>('arma')
  const [activeFilter, setActiveFilter] = useState<Filter>('todos')
  const sectionRef = useRef<HTMLElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-60px' })
  const visibleItems = getItems(activeTab, activeFilter)
  const showFilters  = activeTab !== 'bebidas'

  return (
    <section id="menu" ref={sectionRef} className="relative py-24 sm:py-32 bg-[#FAF7F0] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #0AAFF2 1px, transparent 1px)', backgroundSize: '48px 48px' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <p style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem', letterSpacing: '0.1em' }}
            className="text-[#0AAFF2] mb-3">
            Lo que tenemos para ti
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">Nuestro Menú</h2>
          <p className="text-[#2D2D2D]/60 max-w-xl mx-auto leading-relaxed">
            Todos los bowls incluyen base de arroz, proteína, vegetales, cremoso, crujiente y aderezos.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex flex-wrap justify-center bg-white border border-[#E8D5B7] rounded-2xl p-1.5 shadow-sm gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setActiveFilter('todos') }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive ? 'bg-[#0AAFF2] text-white shadow-sm' : 'text-[#2D2D2D]/60 hover:text-[#1A1A1A] hover:bg-[#FAF7F0]'
                  }`}
                >
                  <Icon size={15} aria-hidden="true" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        <motion.p key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
          className="text-center text-sm text-[#2D2D2D]/50 mb-7 -mt-3">
          {tabs.find((t) => t.id === activeTab)?.desc}
        </motion.p>

        {/* Filtros */}
        <AnimatePresence>
          {showFilters && (
            <motion.div key="filters"
              initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22 }}
              className="flex justify-center gap-2 mb-10 overflow-hidden flex-wrap"
            >
              {filters.map((f) => {
                const Icon = f.icon
                const isActive = activeFilter === f.id
                return (
                  <button key={f.id} onClick={() => setActiveFilter(f.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#1B5E73] text-white border-[#1B5E73] shadow-sm'
                        : 'bg-white text-[#2D2D2D]/60 border-[#E8D5B7] hover:border-[#1B5E73]/40 hover:text-[#1B5E73]'
                    }`}
                  >
                    <Icon size={13} aria-hidden="true" />
                    {f.label}
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={`${activeTab}-${activeFilter}`}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}
          >
            {visibleItems.length === 0 ? (
              <div className="text-center py-16 text-[#2D2D2D]/40">
                <p className="text-lg">No hay platillos en esta categoría.</p>
              </div>
            ) : (
              <div className={`grid gap-5 ${
                activeTab === 'bebidas' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {visibleItems.map((item, i) => <MenuCard key={item.id} item={item} index={i} />)}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Nota bottom */}
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
          className="mt-12 text-center">
          {activeTab === 'arma' && (
            <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#E8D5B7]/40 border border-[#E8D5B7]">
              <div className="w-2 h-2 rounded-full bg-[#D4A017]" aria-hidden="true" />
              <p className="text-sm text-[#2D2D2D]/65">
                Personaliza completamente desde{' '}
                <a href="https://www.maspedidos.menu/ohmybowl" target="_blank" rel="noopener noreferrer"
                  className="text-[#0AAFF2] font-semibold hover:underline cursor-pointer">
                  maspedidos.menu/ohmybowl
                </a>
              </p>
            </div>
          )}
          {activeTab === 'armados' && (
            <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#E8D5B7]/40 border border-[#E8D5B7]">
              <div className="w-2 h-2 rounded-full bg-[#D4A017]" aria-hidden="true" />
              <p className="text-sm text-[#2D2D2D]/65">
                ¿Prefieres diseñar el tuyo?{' '}
                <button onClick={() => { setActiveTab('arma'); setActiveFilter('todos') }}
                  className="text-[#0AAFF2] font-semibold hover:underline cursor-pointer">
                  Arma tu propio bowl
                </button>
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
