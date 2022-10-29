import AboutUsData from "./AboutUs";

export const TopbarData = [
  {
    id: "topbar/home",
    label: "Home",
    path: "/",
  },
  {
    id: "topbar/cate",
    label: "Shop by categories",
  },
  {
    id: "topbar/wood",
    label: "Shop by Wood Type",
  },
  {
    id: "topbar/sale",
    label: "Wholesale",
    // path: '/wholesale',
  },
  {
    id: "topbar/deals",
    label: "Deals",
    // path: '/deals',
  },
  {
    id: "topbar/about",
    label: "About Us",
    children: [...AboutUsData],
    // path: '/about',
  },
];
