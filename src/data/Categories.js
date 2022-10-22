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
];

export default CategoriesData;
