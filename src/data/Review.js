import { v4 } from "uuid";
import { Images } from "../images/Images";

const ReviewData = [
  {
    id: v4(),
    image: Images.review_1,
    title: "Gorgeous",
    review:
      "Just when RFB couldn’t get any better, they now have plates and other kitchenware! These plates are my new dish to serve when I have family over. They’ll well-made and look beautiful displaying any food!",
    star: 5,
    author: "Ann C.",
  },
  {
    id: v4(),
    image: Images.review_2,
    title: "I am in love with these bowl",
    review:
      "They fit perfectly in my macrame plant holders and I have air plants and little succulents in them. The perfect addition to my newly remodeled, gorgeous home!!",
    star: 4,
    author: "Tony C.",
  },
  {
    id: v4(),
    image: Images.review_3,
    title: "Such awesomeness",
    review:
      "I have four bowls, utensils and straw. I feel like I’m helping the earth by eating from these. I love them so much I just bought some for my step daughters birthday.",
    star: 5,
    author: "Elizaabeth W.",
  },
  {
    id: v4(),
    image: Images.review_4,
    title: "These bowls are perfect!",
    review:
      "We fill these with healthy breakfast pitaya fruit, or yogurt and granola and they just look amazing. Feels like a tropical vacation when we're eating out of these adorable bowls with our wooden spoons! So fun!",
    star: 5,
    author: "Dev C.",
  },
  {
    id: v4(),
    image: Images.review_5,
    title: "Wooden Bowls",
    review:
      "I love these and so do my adult children. Very nice feel and very sturdy and beautiful to look at. I use frequently for meals that need a bowl such as cut up fruit.",
    star: 5,
    author: "Suzan H.",
  },
  {
    id: v4(),
    image: Images.review_6,
    title: "Exceoptional Quality",
    review:
      "These two bowls are the perfect size for holding a bowl full of fruit or bringing delicious food to the table for everyone to share. I love the beauty of the wood and the ease in storage and cleaning.",
    star: 4,
    author: "Suzan N.",
  },
];

export default ReviewData;
