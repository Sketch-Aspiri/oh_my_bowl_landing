// src/data/menu.ts
// Fuente verificada: maspedidos.menu/ohmybowl (junio 2026)

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  pricePrefix?: string;      // "Desde" cuando el precio es base personalizable
  description: string;
  category: "bowl" | "bebida";
  subcategory?: "arma" | "armado"; // solo para bowls
  tags: ("vegano" | "favorito" | "premium" | "mariscos" | "pollo" | "nuevo")[];
  emoji: string;
}

export interface BowlComponent {
  id: string;
  name: string;
  category: "base" | "proteina" | "vegetal" | "cremoso" | "crujiente" | "aderezo";
  isVegan?: boolean;
}

// ──────────────────────────────────────
// MENÚ PRINCIPAL
// ──────────────────────────────────────

export const menuItems: MenuItem[] = [

  // ── ARMA TU BOWL (personalizables) ──────────────────
  {
    id: "arma-pollo",
    name: "Arma Tu Bowl de Pollo",
    price: 164,
    pricePrefix: "Desde",
    description:
      "Pollo Panko empanizado estilo japonés como base. Personaliza con tus vegetales, cremoso, crujiente y aderezos favoritos.",
    category: "bowl",
    subcategory: "arma",
    tags: ["pollo"],
    emoji: "🍗",
  },
  {
    id: "arma-tampico",
    name: "Arma Tu Bowl de Tampico",
    price: 164,
    description:
      "Ensalada de surimi como proteína principal. Suave, fresca y deliciosa. Personaliza el resto a tu gusto.",
    category: "bowl",
    subcategory: "arma",
    tags: [],
    emoji: "🦀",
  },
  {
    id: "arma-tofu",
    name: "Arma Tu Bowl de Tofu",
    price: 169,
    pricePrefix: "Desde",
    description:
      "Tofu empanizado 100% vegano. Crujiente por fuera, suave por dentro. Personaliza tu bowl completo.",
    category: "bowl",
    subcategory: "arma",
    tags: ["vegano"],
    emoji: "🌿",
  },
  {
    id: "arma-atun",
    name: "Arma Tu Bowl de Atún",
    price: 189,
    pricePrefix: "Desde",
    description:
      "Atún fresco marinado como base. Elige tus acompañamientos y crea la combinación perfecta.",
    category: "bowl",
    subcategory: "arma",
    tags: ["mariscos", "premium"],
    emoji: "🐠",
  },
  {
    id: "arma-camaron",
    name: "Arma Tu Bowl de Camarón",
    price: 189,
    description:
      "Camarón empanizado Panko. Crujiente y jugoso, combinado con los ingredientes que tú elijas.",
    category: "bowl",
    subcategory: "arma",
    tags: ["mariscos", "premium"],
    emoji: "🦐",
  },
  {
    id: "arma-salmon",
    name: "Arma Tu Bowl de Salmón",
    price: 189,
    pricePrefix: "Desde",
    description:
      "Salmón fresco marinado. Rico en Omega-3 y sabor. Personaliza con vegetales y aderezos a tu elección.",
    category: "bowl",
    subcategory: "arma",
    tags: ["mariscos", "premium"],
    emoji: "🐟",
  },

  // ── BOWLS ARMADOS (pre-diseñados) ──────────────────
  {
    id: "bowl-caribeno",
    name: "Bowl Caribeño",
    price: 164,
    description:
      "Arroz al vapor, plátano macho frito, aguacate, cebollín y pollo Panko. El sabor del Caribe mexicano en un bowl.",
    category: "bowl",
    subcategory: "armado",
    tags: ["pollo"],
    emoji: "🌴",
  },
  {
    id: "favorito-bowl",
    name: "Favorito Bowl",
    price: 229,
    description:
      "Arroz, pollo empanizado, surimi, zanahoria, arándano, aguacate, chips de plátano y dos aderezos. ¡El más pedido!",
    category: "bowl",
    subcategory: "armado",
    tags: ["favorito", "pollo"],
    emoji: "⭐",
  },
  {
    id: "camaron-tropical",
    name: "Camarón Tropical",
    price: 199,
    description:
      "Arroz, camarón empanizado, zanahoria, col morada, plátano macho, aguacate, mayo spicy y salsa de anguila.",
    category: "bowl",
    subcategory: "armado",
    tags: ["mariscos"],
    emoji: "🦐",
  },
  {
    id: "crispy-tofu",
    name: "Crispy Tofu",
    price: 199,
    description:
      "Arroz, tofu empanizado, edamames, col morada, zanahoria, plátano macho, aguacate, cebollín y dos aderezos.",
    category: "bowl",
    subcategory: "armado",
    tags: ["vegano"],
    emoji: "🌿",
  },

  // ── BEBIDAS ──────────────────────────────────────
  {
    id: "limonada-natural",
    name: "Limonada Natural",
    price: 40,
    description: "Limonada natural fresca. Refrescante y perfecta para acompañar tu bowl.",
    category: "bebida",
    tags: [],
    emoji: "🍋",
  },
  {
    id: "agua-maracuya",
    name: "Agua de Maracuyá",
    price: 45,
    description: "Agua fresca de maracuyá. Sabor tropical caribeño.",
    category: "bebida",
    tags: [],
    emoji: "🍹",
  },
  {
    id: "felix-manzana",
    name: "Felix Jugo Manzana",
    price: 55,
    description: "Bebida con burbujas a base de fruta natural de manzana. Refrescante y frutal.",
    category: "bebida",
    tags: [],
    emoji: "🍎",
  },
  {
    id: "felix-frambuesa",
    name: "Felix de Frambuesa",
    price: 55,
    description: "Bebida carbonatada con 50% jugo de frambuesa natural. Deliciosamente frutal.",
    category: "bebida",
    tags: [],
    emoji: "🫐",
  },
  {
    id: "topo-chico",
    name: "Agua Mineral Topo Chico",
    price: 40,
    description: "600 ml. Mineral natural carbonatada.",
    category: "bebida",
    tags: [],
    emoji: "💧",
  },
  {
    id: "coca-original",
    name: "Coca Cola Original",
    price: 40,
    description: "600 ml. El clásico de siempre.",
    category: "bebida",
    tags: [],
    emoji: "🥤",
  },
  {
    id: "coca-sin-azucar",
    name: "Coca Cola Sin Azúcar",
    price: 40,
    description: "600 ml. Todo el sabor, sin azúcar.",
    category: "bebida",
    tags: [],
    emoji: "🥤",
  },
  {
    id: "agua-ciel",
    name: "Agua Ciel",
    price: 30,
    description: "Botella de agua purificada 600 ml.",
    category: "bebida",
    tags: [],
    emoji: "🫙",
  },
];

// ──────────────────────────────────────
// COMPONENTES PARA "ARMA TU BOWL"
// ──────────────────────────────────────

export const bowlComponents: BowlComponent[] = [
  // Bases
  { id: "b-arroz",    name: "Arroz Blanco",          category: "base", isVegan: true },
  { id: "b-espinaca", name: "Espinaca",              category: "base", isVegan: true },
  { id: "b-mixta",    name: "Arroz + Espinaca",      category: "base", isVegan: true },

  // Proteínas
  { id: "p-pollo",    name: "Pollo Panko",          category: "proteina" },
  { id: "p-tampico",  name: "Tampico (Surimi)",      category: "proteina" },
  { id: "p-tofu",     name: "Tofu Empanizado",       category: "proteina", isVegan: true },
  { id: "p-salmon",   name: "Salmón Fresco",         category: "proteina" },
  { id: "p-atun",     name: "Atún Fresco",           category: "proteina" },
  { id: "p-camaron",  name: "Camarón Panko",         category: "proteina" },

  // Vegetales
  { id: "v-pepino",     name: "Pepino",              category: "vegetal", isVegan: true },
  { id: "v-zanahoria",  name: "Zanahoria",           category: "vegetal", isVegan: true },
  { id: "v-edamame",    name: "Edamames",            category: "vegetal", isVegan: true },
  { id: "v-alga",       name: "Alga Nori",           category: "vegetal", isVegan: true },
  { id: "v-cebolla",    name: "Cebolla Morada",      category: "vegetal", isVegan: true },
  { id: "v-col",        name: "Col Morada",          category: "vegetal", isVegan: true },
  { id: "v-cebollin",   name: "Cebollín",            category: "vegetal", isVegan: true },
  { id: "v-mango",      name: "Mango",               category: "vegetal", isVegan: true },
  { id: "v-aguacate",   name: "Aguacate",            category: "vegetal", isVegan: true },
  { id: "v-platano",    name: "Plátano Macho Frito", category: "vegetal", isVegan: true },
  { id: "v-arandano",   name: "Arándano",            category: "vegetal", isVegan: true },
  { id: "v-jengibre",   name: "Jengibre Encurtido",  category: "vegetal", isVegan: true },

  // Cremosos
  { id: "c-aguacate",     name: "Aguacate",              category: "cremoso", isVegan: true },
  { id: "c-queso-crema",  name: "Queso Crema",           category: "cremoso" },
  { id: "c-sin-cremoso",  name: "Sin Cremoso",           category: "cremoso", isVegan: true },

  // Crujientes
  { id: "cr-tortilla",    name: "Tira de Tortilla",        category: "crujiente", isVegan: true },
  { id: "cr-cacahuate",   name: "Cacahuate",               category: "crujiente", isVegan: true },
  { id: "cr-platano",     name: "Chips de Plátano",        category: "crujiente", isVegan: true },
  { id: "cr-sin-crujiente", name: "Sin Crujiente",         category: "crujiente", isVegan: true },

  // Aderezos
  { id: "a-anguila",        name: "Anguila",                   category: "aderezo" },
  { id: "a-ponzu",          name: "Ponzu",                     category: "aderezo", isVegan: true },
  { id: "a-soya",           name: "Soya",                      category: "aderezo", isVegan: true },
  { id: "a-soya-picante",   name: "Soya Picante 🌶️",          category: "aderezo", isVegan: true },
  { id: "a-tamarindo",      name: "Tamarillo 🌶️",             category: "aderezo", isVegan: true },
  { id: "a-mayo-spicy",     name: "Mayo Spicy 🌶️",            category: "aderezo" },
  { id: "a-mayo-habanero",  name: "Mayo Habanero 🌶️🌶️",      category: "aderezo" },
  { id: "a-mango-habanero", name: "Mango Habanero 🌶️🌶️",      category: "aderezo" },
  { id: "a-sriracha",       name: "Sriracha",                  category: "aderezo" },
  { id: "a-sin-aderezo",    name: "Sin Aderezo",               category: "aderezo", isVegan: true },
];

// ──────────────────────────────────────
// INFO DEL RESTAURANTE
// ──────────────────────────────────────

export const restaurantInfo = {
  name: "Oh! My Bowl",
  tagline: "Poke Bowls en Chetumal",
  address: "San Salvador 468, Flamboyanes, Chetumal, QR 77084",
  phone: null,
  facebook: "https://www.facebook.com/p/Oh-My-Bowl-61559907120542/",
  maspedidos: "https://www.maspedidos.menu/ohmybowl",
  instagram: null,
  hours: {
    "Lunes – Viernes": "13:30 – 20:30",
    "Sábado":          "13:30 – 19:30",
    "Domingo":         "13:30 – 19:30",
  },
  delivery: [
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/mx/store/oh!-my-bowl-poke-bowls/XVyeFdJFVfuoG33C2RPg7w",
    },
    {
      name: "Rappi",
      url: "https://www.rappi.com.mx/restaurantes/1930003112-oh-my-bowl",
    },
    {
      name: "DiDi Food",
      url: "https://web.didiglobal.com/mx/food/chetumal-yuc/oh-my-bowl/5764607770482182032/",
    },
  ],
};
