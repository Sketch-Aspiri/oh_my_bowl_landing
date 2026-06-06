import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, Facebook, Instagram } from 'lucide-react'

const galleryItems = [
  {
    id: 1,
    caption: 'Salmón fresco con mango y alioli de wasabi',
    gradient: 'from-[#1B5E73] via-[#2A7A93] to-[#D4A017]',
    span: 'row-span-2',
    emoji: '🐟',
  },
  {
    id: 2,
    caption: 'Pollo Panko — el favorito de la casa',
    gradient: 'from-[#0AAFF2] via-[#D4A017] to-[#E8D5B7]',
    span: '',
    emoji: '🍗',
  },
  {
    id: 3,
    caption: 'Crispy Tofu con plátano macho y col morada',
    gradient: 'from-[#2D5016] via-[#3D6B1F] to-[#D4A017]',
    span: '',
    emoji: '🌿',
  },
  {
    id: 4,
    caption: 'Atún marinado con masago y aguacate',
    gradient: 'from-[#0F3D4D] via-[#1B5E73] to-[#0AAFF2]',
    span: 'row-span-2',
    emoji: '🐠',
  },
  {
    id: 5,
    caption: 'Favorito Bowl — el más pedido',
    gradient: 'from-[#D4A017] via-[#E8B82A] to-[#FAF7F0]',
    span: '',
    emoji: '⭐',
  },
  {
    id: 6,
    caption: 'Camarón Tropical con mayo spicy',
    gradient: 'from-[#0AAFF2] via-[#0891CC] to-[#1A1A1A]',
    span: '',
    emoji: '🦐',
  },
  {
    id: 7,
    caption: 'Bowl Caribeño — plátano y aguacate',
    gradient: 'from-[#D4A017] via-[#2D5016] to-[#1B5E73]',
    span: '',
    emoji: '🌴',
  },
  {
    id: 8,
    caption: 'Arma tu bowl a tu manera',
    gradient: 'from-[#FAF7F0] via-[#E8D5B7] to-[#0AAFF2]',
    span: '',
    emoji: '🥣',
  },
] as const

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView   = useInView(sectionRef, { once: true, margin: '-60px' })
  const [lightbox, setLightbox] = useState<typeof galleryItems[number] | null>(null)

  return (
    <section
      id="galeria"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#FAF7F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12"
        >
          <div>
            <p
              style={{ fontFamily: 'Caveat, cursive', fontSize: '1.1rem', letterSpacing: '0.1em' }}
              className="text-[#0AAFF2] mb-3"
            >
              Nuestros bowls
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A]">
              Galería
            </h2>
          </div>

          <div className="flex gap-2 sm:gap-3">
            <a
              href="https://www.facebook.com/p/Oh-My-Bowl-61559907120542/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 rounded-full border border-[#E8D5B7] bg-white text-[#2D2D2D]/70 text-xs sm:text-sm font-medium hover:border-[#0AAFF2]/40 hover:text-[#0AAFF2] transition-all duration-200 cursor-pointer"
            >
              <Facebook size={14} aria-hidden="true" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://www.facebook.com/p/Oh-My-Bowl-61559907120542/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2.5 rounded-full border border-[#E8D5B7] bg-white text-[#2D2D2D]/70 text-xs sm:text-sm font-medium hover:border-[#0AAFF2]/40 hover:text-[#0AAFF2] transition-all duration-200 cursor-pointer"
            >
              <Instagram size={14} aria-hidden="true" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 auto-rows-[130px] sm:auto-rows-[180px]">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              onClick={() => setLightbox(item)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0AAFF2] ${item.span}`}
              aria-label={item.caption}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-25 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300 select-none">
                {item.emoji}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs sm:text-sm font-medium leading-tight drop-shadow">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm text-[#2D2D2D]/40 mt-8"
        >
          Fotos del restaurante próximamente · Síguenos para ver nuestros bowls del día
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${lightbox.gradient}`} />
              <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-30 select-none">
                {lightbox.emoji}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-medium">{lightbox.caption}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                aria-label="Cerrar"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors duration-150 cursor-pointer"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
