import { Images } from "../images/Images";

const TabListData = [
  {
    name: "bestsellers",
    care: [],
  },
  {
    name: "wooden bowls",
    image: Images.collection_woodenBowl,
    path: "/collections/wooden-bowls",

    care: [
      {
        image: Images.sun_light,
        text: "Store in a cool, dry place. Keep it away from direct sunlight.",
      },
      {
        image: Images.hot_bowl,
        text: "Perfect for warm and cold meals. Do not use with extremely hot water or food.",
      },
      {
        image: Images.hand,
        text: "Not dishwasher-friendly. Hand-wash with soapy lukewarm water. Do not soak for long periods.",
      },
      {
        image: Images.wash,
        text: "Rehydrate your bowls from time to time by polishing it with coconut oil.",
      },
      {
        image: Images.store,
        text: "Do not use in the refrigerator, microwave, oven, or dishwasher.",
      },
    ],
  },
  {
    name: "coconut bowls",
    image: Images.collection_coconut,
    path: "/collections/coconut-bowls",

    care: [
      {
        image: Images.sun_light,
        text: "Store in a cool, dry place. Keep it away from direct sunlight.",
      },
      {
        image: Images.hot_bowl,
        text: "Perfect for warm and cold meals. Do not use with extremely hot water or food.",
      },
      {
        image: Images.hand,
        text: "Not dishwasher-friendly. Hand-wash with soapy lukewarm water. Do not soak for long periods.",
      },
      {
        image: Images.wash,
        text: "Rehydrate your bowls from time to time by polishing it with coconut oil.",
      },
      {
        image: Images.store,
        text: "Do not use in the refrigerator, microwave, oven, or dishwasher.",
      },
    ],
  },
  {
    name: "plates",
    image: Images.collection_plates,
    path: "/collections/wooden-plates",

    care: [
      {
        image: Images.sun_light_plate,
        text: "Store in a cool, dry place. Keep it away from direct sunlight.",
      },
      {
        image: Images.wash_plate,
        text: "Not dishwasher-friendly. Hand-wash with soapy lukewarm water.",
      },
      {
        image: Images.soak_plate,
        text: "Do not soak for long periods.",
      },
      {
        image: Images.dry_plate,
        text: "Restore its luster by polishing it with coconut oil.",
      },
      {
        image: Images.store,
        text: "Do not use in the refrigerator, microwave, oven, or dishwasher.",
      },
    ],
  },
  {
    name: "home",
    image: Images.collection_cuttingBoard,
    path: "/collections/cutting-boards",

    care: [
      {
        image: Images.sun_light,
        text: "Store in a cool, dry place. Keep it away from direct sunlight.",
      },
      {
        image: Images.hand,
        text: "Not dishwasher-friendly. Hand-wash with soapy lukewarm water. Do not soak for long periods.",
      },
      {
        image: Images.rinse_common,
        text: "Do not soak for long periods.",
      },

      {
        image: Images.wash,
        text: "Restore its luster by polishing it with coconut oil.",
      },
      {
        image: Images.store,
        text: "Do not use in the refrigerator, microwave, oven, or dishwasher.",
      },
    ],
  },
  {
    name: "drinkware",
    image: Images.collection_drinkware,
    path: "/collections/drinkware",

    care: [
      {
        image: Images.sun_light,
        text: "Store in a cool, dry place. Keep it away from direct sunlight.",
      },
      {
        image: Images.hot_cup,
        text: "Perfect for warm and cold drinks. Do not use with extremely hot water or drinks.",
      },
      {
        image: Images.hand,
        text: "Not dishwasher-friendly. Hand-wash with soapy lukewarm water. Do not soak for long periods.",
      },

      {
        image: Images.wash,
        text: "Restore its luster by polishing it with coconut oil.",
      },
      {
        image: Images.store,
        text: "Do not use in the refrigerator, microwave, oven, or dishwasher.",
      },
    ],
  },
  {
    name: "garden",
    image: Images.collection_garden,
    path: "/collections/garden",
    care: [
      {
        image: Images.water_clean,
        text: "Wash it by hand with water to clean it.",
      },
      {
        image: Images.keep_dry,
        text: "Allow it to completely dry if you’re planning to store it.",
      },
      {
        image: Images.harsh_sunlight,
        text: "DO NOT put the planter under harsh sunlight. Place your planter in a shaded area to maintain its beauty and quality.",
      },
      {
        image: Images.over_water,
        text: "DO NOT overwater or put too much soil inside to avoid breaking your planter.",
      },
    ],
  },
  {
    name: "soap dishes",
    image: Images.collection_soapDishes,
    path: "/collections/coconut-soap-dishes",

    care: [
      {
        image: Images.rinse_dish,
        text: "Rinse with room temperature water before using it for the first time.",
      },

      {
        image: Images.wash_dish,
        text: "Wash it by hand with water to clean it.",
      },
      {
        image: Images.dry_dish,
        text: "Allow it to completely dry if you’re planning to store it",
      },
      {
        image: Images.coat_dish,
        text: "Coat it with coconut oil once it becomes dry or dull.",
      },
    ],
  },
  {
    name: "utensils",
    image: Images.collection_utensils,
    path: "/collections/wooden-utensils",
    care: [
      {
        image: Images.rinse_utensils,
        text: "Rinse with room temperature water before using it for the first time.",
      },
      {
        image: Images.wash_utensils,
        text: "Wash by hand with soap and water right after using it. Do not soak for long periods.",
      },
      {
        image: Images.dry_utensils,
        text: "Allow it to completely dry before storing it.",
      },
      {
        image: Images.coat_utensils,
        text: "Coat with coconut oil or other food-safe oil once it becomes dry or dull.",
      },
      {
        image: Images.store,
        text: "Do not use in the refrigerator, microwave, oven, or dishwasher.",
      },
    ],
  },
];

export default TabListData;
