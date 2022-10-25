import React from "react";
import { v4 } from "uuid";
import { Images } from "../images/Images";
let id = 123456;
const CategoriesData = [
  {
    id: id++,
    title: "Classic camwood Bowl-Small",
    dimensions: [
      {
        name: "diameter",
        text: 3.5,
      },
      {
        name: "height",
        text: 2.1,
      },
    ],
    type: [
      { name: "2-Pack", cost: 41.95 },
      { name: "4-Pack", cost: 73.95 },
    ],
    categories: "wooden bowls",
    hightlight: [
      {
        title: "rustic feel",
        text: " Lustrous camwood with fine grain and patterns add a rustic look and feel to your meals",
      },
      {
        title: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Vietnam",
      },
      {
        title: "NATURALLY BEAUTIFUL AND FUNCTIONAL",
        text: " Camwood is known for its deep red, orange, and brownish-red hues",
      },
      {
        title: "GREAT FOR SERVING FOOD",
        text: "The hand carved rim keeps food inside the bowl to prevent spillage",
      },
    ],
    image: Images.woodenBowls_1,
  },
  {
    id: id++,
    hightlight: [
      {
        title: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Indonesia",
      },
      {
        title: "TIMELESS LOOK",
        text: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        title: "ELEVATE YOUR RECIPES",
        text: "Carved from teak wood to the shape of a large-sized bowl",
      },
      {
        title: "IDEAL FOR MODERN KITCHENS",
        text: "Great for enjoying salads and other bowl recipes, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "Classic teak wood Bowl-Medium",
    dimensions: [
      {
        name: "diameter",
        text: 7.1,
      },
      {
        name: "height",
        text: 2.4,
      },
      {
        name: "capacity",
        text: 25,
      },
    ],
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
      { name: "8-Pack", cost: 143.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_2,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "RUSTIC FEEL",
        text: "ustrous doussie wood with fine grain and patterns add a rustic look and feel to your meals",
      },
      {
        name: "RARE ARTISANAL PIECE",
        text: " Handmade by master artisans in Vietnam",
      },
      {
        name: "NATURALLY BEAUTIFUL AND FUNCTIONAL",
        text: " Doussie wood is known for its rich orange brown colors and durability",
      },
      {
        name: "GREAT FOR SERVING FOOD",
        text: "The hand carved rim keeps food inside the bowl to prevent spillage",
      },
    ],
    title: "Curved Doussie Wood Bowl-Regular",
    dimensions: [
      {
        name: "diameter",
        text: 5.9,
      },
      {
        name: "height",
        text: 4.7,
      },
    ],
    type: [
      { name: "2-Pack", cost: 80.95 },
      { name: "4-Pack", cost: 143.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_3,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        text: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        name: "ELEVATE YOUR RECIPES",
        text: "Carved from teak wood to the shape of a small breakfast bowl",
      },
      {
        name: "DEAL FOR MODERN KITCHENS",
        text: "Great for enjoying salads and other bowl recipes, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "Pineapple Teak Wood Bowl",
    dimensions: [
      {
        name: "diameter",
        text: 5.9,
      },
      {
        name: "height",
        text: 3.3,
      },
      { name: "capacity", text: 17 },
    ],
    type: [
      { name: "1-Bowl", cost: 32.95 },
      { name: "2-Pack", cost: 57.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_4,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Indonesia. Every piece is unique! The grain will not match the photo exactly, but the shape and dimensions will be extremely close, and your bowl will be one of a kind!",
      },
      {
        name: "TIMELESS LOOK",
        text: "Carries the golden brown colors and lovely grain of teak",
      },

      {
        name: "ELEVATE YOUR RECIPES",
        text: "Carved to the shape of a salad bowl, maintains the live edge of teak wood",
      },
      {
        name: "IDEAL FOR MODERN KITCHENS",
        text: "Great for enjoying salads and other bowl recipes, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "wavy teak wood salad serving bowl",
    dimensions: [
      {
        name: "diameter",
        text: 11.8,
      },
      {
        name: "height",
        text: 5.5,
      },
    ],
    type: [{ name: "1-Bowl", cost: 89.95 }],
    categories: "wooden bowls",
    image: Images.woodenBowls_5,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        text: "arries the golden brown colors and lovely grain of teak",
      },
      {
        name: "ELEVATE YOUR RECIPES",
        text: "Carved from teak wood to the shape of a small breakfast bowl",
      },
      {
        name: "IDEAL FOR MODERN KITCHENS",
        text: "Great for enjoying salads and other bowl recipes, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "star teak wood bowl",
    dimensions: [
      {
        name: "diameter",
        text: 5.11,
      },
      {
        name: "height",
        text: 2.36,
      },
      { name: "capacity", text: 10 },
    ],
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
      { name: "6-Pack", cost: 143.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_6,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "100% NATURAL",
        text: "o artificial materials used",
      },
      {
        name: "ECO-FRIENDLY",
        text: "Made from a reclaimed coconut shell.",
      },
      {
        name: "UNIQUE",
        text: "Regular-sized bowl crafted from real coconut",
      },
      {
        name: "MULTI-PURPOSE",
        text: "Great for holding food, sprucing up your home, or serving as a lovely gift.",
      },
    ],
    title: "regular original coconut bowl",
    dimensions: [
      {
        name: "diameter",
        text: 5,
      },
      {
        name: "height",
        text: 2,
      },
      { name: "capacity", text: 14 },
    ],
    type: [
      { name: "2-Pack", cost: 16.95 },
      { name: "4-Pack", cost: 29.95 },
    ],
    categories: "coconut bowls",
    image: Images.coconutBowls_1,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "100% NATURAL",
        text: "No artificial materials used",
      },
      {
        name: "ECO-FRIENDLY",
        text: "Made from a reclaimed coconut shell.",
      },
      {
        name: "UNIQUE",
        text: "From a rough coconut shell to a gleaming handcrafted bowl.",
      },
      {
        name: "MULTI-PURPOSE",
        text: "Great for holding food, sprucing up your home, or serving as a lovely gift.",
      },
    ],
    title: "small original coconut bowl",
    dimensions: [
      {
        name: "diameter",
        text: 4,
      },
      {
        name: "height",
        text: 2,
      },
      { name: "capacity", text: 10 },
    ],
    type: [
      { name: "2-Pack", cost: 15.95 },
      { name: "4-Pack", cost: 26.95 },
    ],
    categories: "coconut bowls",
    image: Images.coconutBowls_2,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ELEVATE YOUR RECIPES",
        title:
          "Includes one round plate carved to the shape of a pizza board with a handle",
      },
      {
        name: "RARE ARTISANAL PIECE",
        title: "Handmade by master artisans in Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        title: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        name: "IDEAL FOR MODERN KITCHENS",
        title:
          "Great for enjoying desserts, appetizers, and small servings of meals, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "10 inch teak wood pizza board with handle & Rim",
    dimensions: [
      {
        name: "length",
        text: 10.6,
      },
      {
        name: "width",
        text: 14.6,
      },
      {
        name: "height",
        text: 0.8,
      },
    ],
    type: [{ name: "2-Pack", cost: 36.95 }],
    categories: "plates",
    image: Images.plates_1,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ELEVATE YOUR RECIPES",
        title: "Carved to the shape of a round rimmed plate",
      },
      {
        name: "RARE ARTISANAL PIECE",
        title: "Handmade by master artisans in Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        title: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        name: "IDEAL FOR MODERN KITCHENS",
        title:
          "Great for serving small pizzas or other meals, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "10 inch round rimmed teak wood plate",
    dimensions: [
      {
        name: "diameter",
        text: 10,
      },
      {
        name: "height",
        text: 0.78,
      },
    ],
    type: [
      { name: "2-Pack", cost: 59.95 },
      { name: "4-Pack", cost: 105.95 },
      { name: "8-Pack", cost: 191.95 },
    ],
    categories: "plates",
    image: Images.plates_2,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ELEVATE YOUR RECIPES",
        text: "Carved from teak wood to a small rectangular plate",
      },
      {
        name: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        text: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        name: "IDEAL FOR MODERN KITCHENS",
        text: "Great for enjoying everyday meals, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "Rectangular teak wood plate - small",
    dimensions: [
      {
        name: "length",
        text: 7.9,
      },
      {
        name: "width",
        text: 5.9,
      },
      { height: 0.8 },
    ],
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
      { name: "8-Pack", cost: 143.95 },
    ],
    categories: "plates",
    image: Images.plates_3,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ELEGANT DISPLAY PIECE",
        text: "Carefully crafted to the shape of a candle holder with an hourglass shape and teak wood grain patterns",
      },
      {
        name: "SOLID & ECO-FRIENDLY",
        text: "Made with 100% teak wood from Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        text: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        name: "VERSATILE PIECE",
        text: "Great as home decor or as a lovely gift",
      },
    ],
    title: "Hourglass teak wood candle holder set",
    dimensions: [
      {
        name: "small",
        text: '0.7" x 0.7" x 7.9"',
      },
      {
        name: "medium",
        text: '0.7" x 0.7" x 9.8"',
      },
      {
        name: "large",
        text: '0.7" x 0.7" x 11.8"',
      },
    ],
    type: [{ name: "2-Pack", cost: 79.95 }],
    categories: "home",
    image: Images.home_1,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "Great as home decor or as a lovely gift",
        text: "Carved from teak wood to the classic shape of a drinking cup",
      },
      {
        name: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        text: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        name: "IDEAL FOR MODERN KITCHENS",
        text: "Great for enjoying iced tea, holding odds and ends, or gifting to a loved one",
      },
    ],
    title: "Rounded teak wood Cup - tall",
    dimensions: [
      {
        name: "diameter",
        text: 3.5,
      },
      {
        name: "height",
        text: 6,
      },
    ],
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
    ],
    categories: "drinkware",
    image: Images.drinkware_1,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ECO-FRIENDLY",
        text: "Made from a reclaimed coconut shell",
      },
      {
        name: "NATURAL PLANT DECOR",
        text: "With drainage holes and a waterproof finish",
      },
      {
        name: "GARDEN IN STYLE",
        text: "Fiber threading through its mouth; Comes with a jute rope plant hanger",
      },
      {
        name: "IDEAL FOR INDOOR GARDEN & PATIO",
        text: "Great for holding your air plants, succulents, and other plant babies",
      },
    ],
    title: "hanging fiber coconut planter",
    dimensions: [],
    type: [
      { name: "2-Pack", cost: 29.95 },
      { name: "4-Pack", cost: 54.95 },
    ],
    categories: "garden",
    image: Images.garden_1,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ECO-FRIENDLY",
        text: "Made from a reclaimed coconut shell",
      },
      {
        name: "NATURAL PLANT DECOR",
        text: "With drainage holes and a waterproof finish",
      },
      {
        name: "GARDEN IN STYLE",
        text: "Comes with 3 planters with drainage holes & a jute rope plant hanger",
      },
      {
        name: "IDEAL FOR INDOOR GARDEN & PATIO",
        text: "Great for holding your air plants, succulents, and other plant babies",
      },
    ],
    title: "hanging coconut planter (3 Tier)",
    dimensions: [],
    type: [
      { name: "1-Pack", cost: 29.95 },
      { name: "2-Pack", cost: 54.95 },
      { name: "4-Pack", cost: 79.95 },
    ],
    categories: "garden",
    image: Images.garden_2,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ECO-FRIENDLY",
        text: "Made from a reclaimed coconut shell",
      },
      {
        name: "NATURAL PLANT DECOR",
        text: " With drainage holes and a waterproof finish",
      },
      {
        name: "GARDEN IN STYLE",
        text: "Comes with a slotted design at the side and a base at the bottom",
      },
      {
        name: "IDEAL FOR INDOOR GARDEN & PATIO",
        text: "Great for holding your cacti, succulents, and other plants",
      },
    ],
    title: "Horizons coconut planter",
    dimensions: [
      {
        name: "diameter",
        text: "3.9-5",
      },
      {
        name: "height",
        text: "3.5-4.3",
      },
    ],
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
    ],
    categories: "garden",
    image: Images.garden_3,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "ELEVATE YOUR RECIPES",
        text: "Carved from teak wood to the shape of an oval concave soap holder with drainage holes",
      },
      {
        name: "RARE ARTISANAL PIECE",
        text: "Handmade by master artisans in Indonesia",
      },
      {
        name: "TIMELESS LOOK",
        text: "Carries the golden brown colors and lovely grain of teak",
      },
      {
        name: "IDEAL FOR MODERN KITCHENS",
        text: "Great for holding soap bars or dish sponges, sprucing up your kitchen or bathroom sink, or gifting to a loved one",
      },
    ],
    title: "Classic Teak wood soap dish",
    dimensions: [
      {
        name: "length",
        text: 4.7,
      },
      {
        name: "height",
        text: 0.78,
      },
      {
        name: "width",
        text: 3.5,
      },
    ],
    type: [
      { name: "2-Pack", cost: 29.95 },
      { name: "4-Pack", cost: 54.95 },
    ],
    categories: "soap dishes",
    image: Images.soap_dishes_1,
  },
  {
    id: id++,
    hightlight: [
      {
        name: "100% NATURAL",
        text: "No artificial materials used",
      },
      {
        name: "ECO-FRIENDLY",
        text: "Made from coconut timber",
      },
      {
        name: "UNIQUE",
        text: "A coconut wood fork for your everyday healthy meals",
      },
      {
        name: "TIMELESS LOOK",
        text: "A classic piece of cutlery for your kitchen set",
      },
    ],
    title: "Coconut wood fork",
    dimensions: [
      {
        name: "width",
        text: 1.4,
      },
      {
        name: "length",
        text: 7.5,
      },
    ],
    type: [
      { name: "4-Pack", cost: 20.95 },
      { name: "8-Pack", cost: 34.95 },
    ],
    categories: "utensils",
    image: Images.utensils_1,
  },
];

export default CategoriesData;
