import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'

const navLinks = [
  { label: 'Menú', href: '#menu' },
  { label: 'Arma tu Bowl', href: '#builder' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#E8D5B7]/60'
            : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <img
              src="/logo.jpg"
              alt="Oh My Bowl"
              className="w-10 h-10 rounded-xl object-cover shadow-sm"
            />
            <span
              className={cn(
                'font-display font-bold text-lg leading-none transition-colors duration-300',
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              )}
            >
              Oh! My Bowl
            </span>
          </a>

          {/* Links escritorio */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer group',
                    scrolled
                      ? 'text-[#2D2D2D] hover:text-[#0AAFF2] hover:bg-[#0AAFF2]/8'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[#0AAFF2] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA escritorio */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#delivery')}
              className="px-5 py-2.5 bg-[#0AAFF2] text-white text-sm font-semibold rounded-full hover:bg-[#0891CC] transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
              Pedir Ahora
            </button>
          </div>

          {/* Hamburguesa mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors duration-200 cursor-pointer',
              scrolled
                ? 'text-[#1A1A1A] hover:bg-[#E8D5B7]/60'
                : 'text-white hover:bg-white/10'
            )}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/97 backdrop-blur-lg border-b border-[#E8D5B7] shadow-lg md:hidden"
          >
            <ul className="flex flex-col py-3">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-6 py-3.5 text-[#2D2D2D] font-medium hover:text-[#0AAFF2] hover:bg-[#0AAFF2]/6 transition-colors duration-150 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="px-6 pt-2 pb-4">
                <button
                  onClick={() => handleNavClick('#delivery')}
                  className="w-full px-5 py-3 bg-[#0AAFF2] text-white font-semibold rounded-full hover:bg-[#0891CC] transition-colors duration-200 cursor-pointer"
                >
                  Pedir Ahora
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
