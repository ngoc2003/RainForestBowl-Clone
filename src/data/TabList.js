import { Images } from "../images/Images";

const TabListData = [
  {
    name: "bestsellers",
    care: [],
  },
  {
    name: "wooden bowls",
    image: Images.productLine_woodenBowl,
    collectionDes: [
      "Raw materials sourced from regulated, legal plantations",
      "Hand-carved by local artisans from Vietnam, Tunisia, and Indonesia",
      "Durable, elegant, and easy to clean and maintain",
      "Safe to use with food, hot or cold items",
    ],
    collectionImage: Images.woodenBowls_collection,

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
    image: Images.productLine_coconut,
    collectionDes: [
      "Made from organic coconut shells, coated with food-safe coconut oils",
      "Durable and long-lasting, compatible with warm and cold foods",
      "We plant 1 tree for every product sold & have planted over 100K trees.",
    ],
    collectionImage: Images.coconutBowls_collection,
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
    image: Images.productLine_plates,
    collectionDes: [
      "Sustainably processed wood from regulated plantations, not rainforests",
      "Each product sold = 1 tree planted in Vietnam and Africa",
      "Handmade by artisans from developing regions",
      "Easy to maintain to keep the rich wood color and graining",
    ],
    collectionImage: Images.plates_collection,
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
    image: Images.productLine_cuttingBoard,
    collectionDes: [
      "End-grain wood chopping boards to protect knives",
      "Naturally resistant to bacteria, good for raw meat and fresh produce",
      "Made with real olive wood and teak wood harvested from regulated plantations",
    ],
    collectionImage: Images.cuttingBoards_collection,
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
    image: Images.productLine_drinkware,
    collectionDes: [
      "Wooden drinkware for coffee, tea, and wine",
      "Made with non-porous, high-quality wood",
      "Safe to use with hot and cold drinks",
      "Rich in natural wood colors that do not fade over time",
    ],
    collectionImage: Images.drinkware_collection,
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
    image: Images.productLine_garden,
    collectionDes: [
      "Handmade garden decor from upcycled coconut shells",
      "Made in Vietnam by local artisans",
      "Easy setu, non-toxic to humans and animals",
    ],
    collectionImage: Images.garden_collection,
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
    image: Images.productLine_soapDishes,
    collectionDes: [
      "Hand-carved by artisans in Vietnam into one-of-a-kind designs",
      "Comes with drainage holes to preserve soap",
      "Made with eco-friiendly upcycled coconut shells",
      "We plant 1 tree in Vietnam and Africa with each product we sell",
    ],
    collectionImage: Images.soapDishes_collection,
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
    image: Images.productLine_utensils,
    collectionDes: [
      "Stylish and rustic wooden utensils for daily use",
      "Artisan-made from Vietnam, Tunisia, and Indonesia",
      "Baby-friendly and safe to use with food",
    ],
    collectionImage: Images.utensils_collection,
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
