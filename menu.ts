// src/data/menu.ts
// Datos del menú verificados — Oh! My Bowl, Chetumal QR
// Fuente: Uber Eats / Rappi (junio 2025)

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "bowl" | "bebida";
  tags: ("vegano" | "favorito" | "premium" | "mariscos" | "pollo")[];
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
  // BOWLS
  {
    id: "pollo-panko",
    name: "Pollo Panko",
    price: 168,
    description:
      "Pollo empanizado estilo japonés. ¡El favorito de la casa! Con tu elección de vegetales, cremoso, crujiente y aderezos.",
    category: "bowl",
    tags: ["favorito", "pollo"],
    emoji: "🍗",
  },
  {
    id: "tofu-fresco",
    name: "Tofu Fresco",
    price: 168,
    description:
      "Proteína vegana 100% fresca. Suave y nutritiva, perfecta para una alimentación equilibrada.",
    category: "bowl",
    tags: ["vegano"],
    emoji: "🌿",
  },
  {
    id: "tofu-marinado",
    name: "Tofu Marinado",
    price: 168,
    description:
      "Tofu marinado en nuestra salsa de ajo, hojuela de chile, jengibre y cilantro. Con pepino, zanahoria, edamames, alga nori, chips de betabel y soya picante.",
    category: "bowl",
    tags: ["vegano"],
    emoji: "🫚",
  },
  {
    id: "salmon-fresco",
    name: "Salmón Fresco",
    price: 229,
    description:
      "Salmón marinado, pepino, zanahoria, edamames, cebolla morada, ensalada de algas, piña y alioli de wasabi.",
    category: "bowl",
    tags: ["premium", "mariscos"],
    emoji: "🐟",
  },
  {
    id: "atun-fresco",
    name: "Atún Fresco",
    price: 229,
    description:
      "Atún marinado, pepino, jengibre encurtido, edamame, cebollín, mango, aguacate, hojuelas de bonito, masago y alioli de chipotle.",
    category: "bowl",
    tags: ["premium", "mariscos"],
    emoji: "🐠",
  },
  {
    id: "camaron-panko",
    name: "Camarón Panko",
    price: 229,
    description:
      "Camarón empanizado al estilo japonés. Crujiente por fuera, jugoso por dentro.",
    category: "bowl",
    tags: ["premium", "mariscos"],
    emoji: "🦐",
  },

  // BEBIDAS
  {
    id: "coca-regular",
    name: "Coca Cola Regular",
    price: 35,
    description: "600 ml",
    category: "bebida",
    tags: [],
    emoji: "🥤",
  },
  {
    id: "coca-light",
    name: "Coca Cola Light",
    price: 35,
    description: "600 ml",
    category: "bebida",
    tags: [],
    emoji: "🥤",
  },
  {
    id: "coca-sin-azucar",
    name: "Coca Cola sin Azúcar",
    price: 35,
    description: "600 ml",
    category: "bebida",
    tags: [],
    emoji: "🥤",
  },
  {
    id: "agua-del-dia",
    name: "Agua del Día",
    price: 35,
    description: "16 oz. Sabores rotativos: Pepino con Menta, Frambuesa, Jamaica, y más.",
    category: "bebida",
    tags: [],
    emoji: "🫙",
  },
  {
    id: "topo-chico",
    name: "Agua Mineral Topo Chico",
    price: 35,
    description: "600 ml. Mineral natural carbonatada.",
    category: "bebida",
    tags: [],
    emoji: "💧",
  },
];

// ──────────────────────────────────────
// COMPONENTES PARA "ARMA TU BOWL"
// ──────────────────────────────────────

export const bowlComponents: BowlComponent[] = [
  //Bases
  { id: "b-arroz",   name: "Arroz Blanco",    category: "base" },
  { id: "b-espinaca", name: "Espinaca",        category: "base" },
  { id: "b-mixta",    name: "Mixta",           category: "base" },
  // Proteínas
  { id: "p-pollo",   name: "Pollo Panko",    category: "proteina" },
  { id: "p-tofu-f",  name: "Tofu Fresco",    category: "proteina", isVegan: true },
  { id: "p-tofu-m",  name: "Tofu Marinado",  category: "proteina", isVegan: true },
  { id: "p-salmon",  name: "Salmón Fresco",  category: "proteina" },
  { id: "p-atun",    name: "Atún Fresco",    category: "proteina" },
  { id: "p-camaron", name: "Camarón Panko",  category: "proteina" },

  // Vegetales
  { id: "v-pepino",     name: "Pepino",             category: "vegetal", isVegan: true },
  { id: "v-zanahoria",  name: "Zanahoria",           category: "vegetal", isVegan: true },
  { id: "v-edamame",    name: "Edamames",            category: "vegetal", isVegan: true },
  { id: "v-alga",       name: "Alga Nori",           category: "vegetal", isVegan: true },
  { id: "v-cebolla",    name: "Cebolla Morada",      category: "vegetal", isVegan: true },
  { id: "v-cebollin",   name: "Cebollín",            category: "vegetal", isVegan: true },
  { id: "v-mango",      name: "Mango",               category: "vegetal", isVegan: true },
  { id: "v-aguacate",   name: "Aguacate",            category: "vegetal", isVegan: true },
  { id: "v-pina",       name: "Piña",                category: "vegetal", isVegan: true },
  { id: "v-jengibre",   name: "Jengibre Encurtido",  category: "vegetal", isVegan: true },

  // Cremosos
  { id: "c-aguacate",  name: "Aguacate",           category: "cremoso", isVegan: true },
  { id: "c-wasabi",    name: "Alioli de Wasabi",    category: "cremoso" },
  { id: "c-chipotle",  name: "Alioli de Chipotle",  category: "cremoso" },
  { id: "c-sriracha",  name: "Alioli de Sriracha",  category: "cremoso" },

  // Crujientes
  { id: "cr-betabel",  name: "Chips de Betabel",   category: "crujiente", isVegan: true },
  { id: "cr-bonito",   name: "Hojuelas de Bonito",  category: "crujiente" },
  { id: "cr-masago",   name: "Masago",              category: "crujiente" },
  { id: "cr-panko",    name: "Pollo Panko Extra",   category: "crujiente" },

  // Aderezos
  { id: "a-soya",      name: "Soya Picante",        category: "aderezo", isVegan: true },
  { id: "a-tamarindo", name: "Tamarindo Serrano",   category: "aderezo", isVegan: true },
  { id: "a-spicy",     name: "Mayo Spicy",           category: "aderezo" },
  { id: "a-tampico",   name: "Tampico de la Casa",  category: "aderezo" },
];

// ──────────────────────────────────────
// INFO DEL RESTAURANTE
// ──────────────────────────────────────

export const restaurantInfo = {
  name: "Oh! My Bowl",
  tagline: "Poke Bowls en Chetumal",
  address: "San Salvador 468, Flamboyanes, Chetumal, QR 77084",
  phone: null, // agregar cuando esté disponible
  facebook: "https://www.facebook.com/p/Oh-My-Bowl-61559907120542/",
  instagram: null, // agregar cuando esté disponible
  hours: {
    "Lunes - Viernes": "13:30 – 20:30",
    Sábado: "13:30 – 19:30",
    Domingo: "13:30 – 19:30",
  },
  delivery: [
    {
      name: "Uber Eats",
      url: "https://www.ubereats.com/mx/store/oh!-my-bowl-poke-bowls/XVyeFdJFVfuoG33C2RPg7w",
      emoji: "🟢",
    },
    {
      name: "Rappi",
      url: "https://www.rappi.com.mx/restaurantes/1930003112-oh-my-bowl",
      emoji: "🔴",
    },
    {
      name: "DiDi Food",
      url: "https://web.didiglobal.com/mx/food/chetumal-yuc/oh-my-bowl/5764607770482182032/",
      emoji: "🟠",
    },
  ],
};
