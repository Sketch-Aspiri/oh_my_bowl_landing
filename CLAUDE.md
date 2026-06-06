# Oh My Bowl — Landing Page

## Proyecto

Landing page de alta calidad visual para **Oh! My Bowl**, restaurante de poke bowls ubicado en Chetumal, Quintana Roo, México.

- Sitio: `San Salvador 468, Chetumal, QR 77084`
- Horario: Lun–Vie 13:30–20:30 | Sáb–Dom 13:30–19:30
- Facebook: https://www.facebook.com/p/Oh-My-Bowl-61559907120542/
- Delivery: Uber Eats, Rappi, DiDi Food

**Stack:** Vite + React + TypeScript + Tailwind CSS v4 + Framer Motion + shadcn/ui (solo lo necesario)

**Deploy:** Build estático en `/dist` — compatible con Vercel, Netlify, Cloudflare Pages, GitHub Pages.

---

## Arquitectura del sitio

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav con blur backdrop
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx            # Full-screen hero animado
│   │   ├── About.tsx           # Historia y filosofía
│   │   ├── MenuSection.tsx     # Menú interactivo con tabs/filtros
│   │   ├── HowItWorks.tsx      # Proceso: arma tu bowl en 4 pasos
│   │   ├── Gallery.tsx         # Masonry grid de fotos
│   │   ├── Delivery.tsx        # Links a plataformas de delivery
│   │   └── Contact.tsx         # Mapa + horarios + redes
│   └── ui/
│       ├── MenuCard.tsx        # Card individual de platillo
│       ├── AnimatedCounter.tsx # Contadores animados (años, bowls, etc.)
│       └── ParallaxSection.tsx # Wrapper para efectos parallax
├── data/
│   └── menu.ts                 # Datos del menú como constantes TypeScript
├── hooks/
│   └── useScrollAnimation.ts   # Hook para scroll-triggered animations
├── lib/
│   └── utils.ts                # cn() helper
├── App.tsx
├── main.tsx
└── index.css
```

---

## Paleta de colores y estética

### Dirección de diseño: **"Tropical Premium"**
- Inspiración: Hawaiian poke + Caribe mexicano (Quintana Roo)
- Tono: Sofisticado pero accesible, fresco, moderno, apetitoso

### Paleta principal
```css
--color-cream:    #FAF7F0   /* fondo principal */
--color-sand:     #E8D5B7   /* secundario cálido */
--color-coral:    #E8593C   /* acento principal — CTA, hovers */
--color-ocean:    #1B5E73   /* azul profundo — texto, contraste */
--color-forest:   #2D5016   /* verde oscuro — healthy/natural */
--color-gold:     #D4A017   /* dorado — premium details */
--color-charcoal: #1A1A1A   /* texto principal */
```

### Tipografía
```
Display: "Playfair Display" (Google Fonts) — headings hero
Body:    "DM Sans" (Google Fonts) — texto corrido
Accent:  "Caveat" (Google Fonts) — labels fun, badges
```

### Animaciones (Framer Motion)
- Page load: fade + stagger up (0.1s delay entre elementos)
- Scroll reveal: `whileInView` con `once: true`
- Hover en cards: scale 1.03 + shadow lift
- Nav: blur backdrop al scroll > 50px
- Hero: texto reveal letra por letra (o wave)
- Menu cards: flip o slide in desde abajo

---

## Datos del menú (fuente verificada de Uber Eats)

### Poke Bowls
Todos incluyen: base de arroz + proteína + 4 vegetales + 1 cremoso + 1 crujiente + 2 aderezos

| Platillo | Precio | Descripción |
|---|---|---|
| Pollo Panko | $168 | Pollo empanizado estilo japonés. El favorito de la casa |
| Tofu Fresco | $168 | Proteína vegana fresca |
| Tofu Marinado | $168 | Tofu marinado en salsa de ajo, hojuela de chile, jengibre y cilantro. Opción vegana |
| Salmón Fresco | $229 | Salmón marinado, pepino, zanahoria, edamames, cebolla morada, algas, piña, alioli de wasabi |
| Atún Fresco | $229 | Atún marinado, pepino, jengibre encurtido, edamame, cebollín, mango, aguacate, hojuelas de bonito, masago, alioli de chipotle |
| Camarón Panko | $229 | Camarón empanizado |

### Bebidas
| Bebida | Precio |
|---|---|
| Coca Cola Regular 600ml | $35 |
| Coca Cola Light 600ml | $35 |
| Coca Cola sin Azúcar 600ml | $35 |
| Agua del Día 16oz | $35 (sabores rotativos) |
| Agua Mineral Topo Chico 600ml | $35 |

### Ingredientes disponibles (para la sección "Arma tu Bowl")
**Proteínas:** Pollo Panko, Tofu Fresco, Tofu Marinado, Salmón Fresco, Atún Fresco, Camarón Panko

**Vegetales (elige 4):** Pepino · Zanahoria · Edamames · Alga Nori · Cebolla Morada · Cebollín · Mango · Aguacate · Piña · Jengibre Encurtido

**Cremoso (elige 1):** Aguacate · Alioli de Wasabi · Alioli de Chipotle · Alioli de Sriracha

**Crujiente (elige 1):** Chips de Betabel · Hojuelas de Bonito · Masago · Pollo Panko extra

**Aderezos (elige 2):** Soya Picante · Tamarindo Serrano · Mayo Spicy · Tampico de la Casa

---

## Secciones y contenido

### 1. Hero
- Full-screen, fondo oscuro con imagen/video de fondo (placeholder con gradient mesh coral→ocean)
- Headline: "Arma el bowl de tus sueños"
- Subheadline: "Poke bowls frescos y personalizados en el corazón de Chetumal"
- CTAs: "Ver Menú" (scroll) + "Pedir Ahora" (scroll a delivery section)
- Badge animado: "⭐ El favorito de Chetumal"

### 2. About / Filosofía
- "En Oh My Bowl, cada bowl es tuyo"
- Énfasis en personalización, ingredientes frescos, opciones veganas
- Counters animados (al hacer scroll): e.g. "6 proteínas" · "10+ vegetales" · "∞ combinaciones"

### 3. Menú
- Tabs: Bowls | Bebidas
- Cards con: emoji/icon, nombre, precio, descripción, badge (vegano, favorito, premium)
- Filtros opcionales: Vegano | Mariscos | Pollo
- Subtle animation en hover

### 4. Arma Tu Bowl (interactivo)
- Selector visual paso a paso (proteína → vegetales → cremoso → crujiente → aderezos)
- Preview del "bowl" construido (lista de selección, luego botón "Pedir")
- Al finalizar: CTA directo a Uber Eats / Rappi

### 5. Galería
- Masonry grid 3 columnas (placeholder con gradients coloridos si no hay fotos reales)
- Caption on hover
- Botón "Síguenos en Instagram / Facebook"

### 6. Delivery
- Cards de: Uber Eats · Rappi · DiDi Food
- Botones de link a cada plataforma
- Badge "Disponible ahora" / "Entrega en ~30 min"

### 7. Ubicación y Contacto
- Horarios visuales por día de la semana
- Dirección: San Salvador 468, Chetumal, QR
- Embed de Google Maps (o fallback con link)
- Links a Facebook

---

## Comandos de desarrollo

```bash
# Inicializar (solo primera vez)
npm create vite@latest . -- --template react-ts
npm install

# Dependencias clave
npm install framer-motion
npm install @tailwindcss/vite tailwindcss
npm install lucide-react
npm install clsx tailwind-merge

# Dev
npm run dev

# Build para deploy
npm run build
npm run preview
```

## Deploy (cualquiera de estas opciones)

```bash
# Vercel (recomendado — más fácil)
npx vercel --prod

# Netlify
npx netlify deploy --dir=dist --prod

# GitHub Pages (requiere vite.config base: '/repo-name/')
npm run build && gh-pages -d dist
```

---

## Guía de implementación por fases

### Fase 1 — Estructura y Hero (empezar aquí)
1. Inicializar Vite + React + TS
2. Configurar Tailwind CSS v4 con custom tokens de la paleta
3. Configurar Framer Motion
4. Crear `Navbar.tsx` sticky con blur
5. Crear `Hero.tsx` con animaciones de entrada
6. Crear `Footer.tsx`

### Fase 2 — Contenido principal
7. `About.tsx` con counters animados
8. `MenuSection.tsx` con tabs y cards
9. `HowItWorks.tsx` con 4 pasos animados
10. Datos en `src/data/menu.ts`

### Fase 3 — Interactividad y extras
11. `BowlBuilder.tsx` — selector interactivo paso a paso
12. `Gallery.tsx` — masonry grid
13. `Delivery.tsx` — cards de plataformas
14. `Contact.tsx` — mapa + horarios

### Fase 4 — Polish y deploy
15. Responsive (mobile-first review)
16. SEO meta tags (title, description, og:image)
17. Performance (lazy images, bundle analysis)
18. Deploy a Vercel/Netlify

---

## Notas importantes

- **Sin fotos reales aún**: usar gradientes CSS o placeholders de Unsplash (poke bowls) hasta tener assets del cliente
- **Sin dominio aún**: deploy inicial en subdominio de Vercel/Netlify
- **Etapa 2 (NO implementar ahora)**: integración de maspedidos.menu + pasarela de pagos
- Mantener el sitio completamente estático — sin backend, sin base de datos
- Todo el contenido en español mexicano
