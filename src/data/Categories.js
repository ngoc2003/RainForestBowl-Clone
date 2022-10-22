import React from "react";
import { uuid as uuidV4 } from "uuid";

export const Categories = [
  {
    id: uuidV4(),
    title: "Classic camwood Bowl-Small",
    type: [
      { name: "2-Pack", cost: 41.95 },
      { name: "4-Pack", cost: 73.95 },
    ],
    categories: 'wooden bowls'
  },
];
