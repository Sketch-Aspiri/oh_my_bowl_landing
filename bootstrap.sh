#!/bin/bash
# bootstrap.sh
# Ejecuta esto PRIMERO en Claude Code para inicializar el proyecto

echo "🌺 Inicializando Oh My Bowl Landing Page..."

# 1. Inicializar Vite con React + TypeScript
npm create vite@latest . -- --template react-ts

# 2. Instalar dependencias del proyecto
npm install

# 3. Instalar Tailwind CSS v4
npm install -D tailwindcss @tailwindcss/vite

# 4. Instalar Framer Motion para animaciones
npm install framer-motion

# 5. Instalar Lucide React para iconos
npm install lucide-react

# 6. Utilidades de clase CSS
npm install clsx tailwind-merge

echo "✅ Instalación completa. Ejecuta: npm run dev"
echo "📖 Lee CLAUDE.md para el plan de implementación completo."
