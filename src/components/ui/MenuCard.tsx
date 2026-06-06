import { motion } from 'framer-motion'
import { Leaf, Star, Gem, Sliders } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { MenuItem } from '../../data/menu'

interface MenuCardProps {
  item: MenuItem
  index: number
}

const tagConfig = {
  vegano:   { label: 'Vegano',   icon: Leaf, color: 'text-[#2D5016] bg-[#2D5016]/10 border-[#2D5016]/20' },
  favorito: { label: 'Favorito', icon: Star, color: 'text-[#D4A017] bg-[#D4A017]/10 border-[#D4A017]/20' },
  premium:  { label: 'Premium',  icon: Gem,  color: 'text-[#1B5E73] bg-[#1B5E73]/10 border-[#1B5E73]/20' },
  mariscos: { label: 'Mariscos', icon: null, color: 'text-[#1B5E73] bg-[#1B5E73]/8  border-[#1B5E73]/15' },
  pollo:    { label: 'Pollo',    icon: null, color: 'text-[#0AAFF2] bg-[#0AAFF2]/8  border-[#0AAFF2]/15' },
  nuevo:    { label: 'Nuevo',    icon: null, color: 'text-[#D4A017] bg-[#D4A017]/8  border-[#D4A017]/15' },
} as const

function topBarColor(item: MenuItem) {
  if (item.tags.includes('vegano'))   return 'bg-gradient-to-r from-[#2D5016] to-[#3D6B1F]'
  if (item.tags.includes('favorito')) return 'bg-gradient-to-r from-[#D4A017] to-[#E8B82A]'
  if (item.tags.includes('mariscos') || item.tags.includes('premium'))
    return 'bg-gradient-to-r from-[#1B5E73] to-[#2A7A93]'
  return 'bg-gradient-to-r from-[#0AAFF2] to-[#38C5FF]'
}

export default function MenuCard({ item, index }: MenuCardProps) {
  const isBowl = item.category === 'bowl'
  const isArma = item.subcategory === 'arma'

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        'group relative flex flex-col rounded-2xl border bg-white overflow-hidden cursor-default',
        'border-[#E8D5B7]/70 hover:border-[#0AAFF2]/30',
        'shadow-sm hover:shadow-md transition-all duration-300',
      )}
    >
      <div className={cn('h-1.5 w-full', topBarColor(item))} aria-hidden="true" />

      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            {isBowl && (
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#FAF7F0] border border-[#E8D5B7]/60 flex items-center justify-center text-xl sm:text-2xl shrink-0 group-hover:scale-105 transition-transform duration-200">
                <span role="img" aria-label={item.name}>{item.emoji}</span>
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-display font-bold text-[#1A1A1A] text-sm sm:text-base leading-tight truncate">{item.name}</h3>
              {isBowl && (
                <div className="flex items-center gap-1.5 mt-0.5">
                  {isArma && (
                    <span className="inline-flex items-center gap-1 text-xs text-[#0AAFF2] font-medium">
                      <Sliders size={10} aria-hidden="true" />
                      Personalizable
                    </span>
                  )}
                  {!isArma && item.subcategory === 'armado' && (
                    <span className="text-xs text-[#1B5E73] font-medium">Bowl armado</span>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="shrink-0 text-right">
            {item.pricePrefix && (
              <span className="block text-[10px] text-[#2D2D2D]/40 font-medium leading-none mb-0.5">{item.pricePrefix}</span>
            )}
            <span className="text-lg sm:text-xl font-bold text-[#0AAFF2] font-display">${item.price}</span>
            <span className="text-[10px] sm:text-xs text-[#2D2D2D]/40 ml-0.5">MXN</span>
          </div>
        </div>

        <p className="text-sm text-[#2D2D2D]/65 leading-relaxed line-clamp-3 flex-1">{item.description}</p>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {item.tags.map((tag) => {
              const config = tagConfig[tag as keyof typeof tagConfig]
              if (!config) return null
              const Icon = config.icon
              return (
                <span key={tag} className={cn('inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border', config.color)}>
                  {Icon && <Icon size={10} aria-hidden="true" />}
                  {config.label}
                </span>
              )
            })}
          </div>
        )}
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(10,175,242,0.15)' }}
        aria-hidden="true"
      />
    </motion.article>
  )
}
