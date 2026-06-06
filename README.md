# Oh My Bowl — Landing Page

Landing page premium para **Oh! My Bowl**, restaurante de poke bowls en Chetumal, Quintana Roo.

## Stack

- **Vite + React + TypeScript** — build ultrarrápido, deploy estático
- **Tailwind CSS v4** — utilidades, tokens custom de paleta
- **Framer Motion** — animaciones de scroll, hover, entrada de página
- **Lucide React** — iconos

## Quick Start

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build y Deploy

```bash
npm run build     # genera /dist
npm run preview   # preview local del build

# Deploy a Vercel (recomendado)
npx vercel --prod
```

## Estructura

Ver `CLAUDE.md` para arquitectura detallada, paleta de colores, datos del menú y guía de implementación por fases.

## Contenido del menú

Datos del menú verificados de Uber Eats y Rappi (junio 2025). Ver `src/data/menu.ts`.

## Segunda Etapa (pendiente)

Integración de sistema de pedidos en línea con pasarela de pagos para reemplazar maspedidos.menu. **No implementar en esta fase.**
