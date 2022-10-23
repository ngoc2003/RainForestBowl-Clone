import React from "react";
import { v4 } from "uuid";
import { Images } from "../images/Images";
const CategoriesData = [
  {
    id: v4(),
    title: "Classic camwood Bowl-Small",
    type: [
      { name: "2-Pack", cost: 41.95 },
      { name: "4-Pack", cost: 73.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_1,
  },
  {
    id: v4(),
    title: "Classic teak wood Bowl-Medium",
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
      { name: "8-Pack", cost: 143.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_2,
  },
  {
    id: v4(),
    title: "Curved Doussie Wood Bowl-Regular",
    type: [
      { name: "2-Pack", cost: 80.95 },
      { name: "4-Pack", cost: 143.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_3,
  },
  {
    id: v4(),
    title: "Pineapple Teak Wood Bowl",
    type: [
      { name: "1-Bowl", cost: 32.95 },
      { name: "2-Pack", cost: 57.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_4,
  },
  {
    id: v4(),
    title: "wavy teak wood salad serving bowl",
    type: [{ name: "1-Bowl", cost: 89.95 }],
    categories: "wooden bowls",
    image: Images.woodenBowls_5,
  },
  {
    id: v4(),
    title: "star teak wood bowl",
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
      { name: "6-Pack", cost: 143.95 },
    ],
    categories: "wooden bowls",
    image: Images.woodenBowls_6,
  },
  {
    id: v4(),
    title: "regular original coconut bowl",
    type: [
      { name: "2-Pack", cost: 16.95 },
      { name: "4-Pack", cost: 29.95 },
    ],
    categories: "coconut bowls",
    image: Images.coconutBowls_1,
  },
  {
    id: v4(),
    title: "small original coconut bowl",
    type: [
      { name: "2-Pack", cost: 15.95 },
      { name: "4-Pack", cost: 26.95 },
    ],
    categories: "coconut bowls",
    image: Images.coconutBowls_2,
  },
  {
    id: v4(),
    title: "10 inch teak wood pizza board with handle & Rim",
    type: [{ name: "2-Pack", cost: 36.95 }],
    categories: "plates",
    image: Images.plates_1,
  },
  {
    id: v4(),
    title: "10 inch round rimmed teak wood plate",
    type: [
      { name: "2-Pack", cost: 59.95 },
      { name: "4-Pack", cost: 105.95 },
      { name: "8-Pack", cost: 191.95 },
    ],
    categories: "plates",
    image: Images.plates_2,
  },
  {
    id: v4(),
    title: "Rectangular teak wood plate - small",
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
      { name: "8-Pack", cost: 143.95 },
    ],
    categories: "plates",
    image: Images.plates_3,
  },
  {
    id: v4(),
    title: "Hourglass teak wood candle holder set",
    type: [{ name: "2-Pack", cost: 79.95 }],
    categories: "home",
    image: Images.home_1,
  },
  {
    id: v4(),
    title: "Rounded teak wood Cup - tall",
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
    ],
    categories: "drinkware",
    image: Images.drinkware_1,
  },
  {
    id: v4(),
    title: "hanging fiber coconut planter",
    type: [
      { name: "2-Pack", cost: 29.95 },
      { name: "4-Pack", cost: 54.95 },
    ],
    categories: "garden",
    image: Images.garden_1,
  },
  {
    id: v4(),
    title: "hanging coconut planter (3 Tier) ",
    type: [
      { name: "1-Pack", cost: 29.95 },
      { name: "2-Pack", cost: 54.95 },
      { name: "4-Pack", cost: 79.95 },
    ],
    categories: "garden",
    image: Images.garden_2,
  },
  {
    id: v4(),
    title: "Horizons coconut planter",
    type: [
      { name: "2-Pack", cost: 44.95 },
      { name: "4-Pack", cost: 79.95 },
    ],
    categories: "garden",
    image: Images.garden_3,
  },
  {
    id: v4(),
    title: "Classic Teak wood soap dish",
    type: [
      { name: "2-Pack", cost: 29.95 },
      { name: "4-Pack", cost: 54.95 },
    ],
    categories: "soap dishes",
    image: Images.soap_dishes_1,
  },
  {
    id: v4(),
    title: "Coconut wood fork",
    type: [
      { name: "4-Pack", cost: 20.95 },
      { name: "8-Pack", cost: 34.95 },
    ],
    categories: "utensils",
    image: Images.utensils_1,
  },
];

export default CategoriesData;
