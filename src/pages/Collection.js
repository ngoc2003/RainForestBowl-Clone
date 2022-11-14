import React, { useEffect } from "react";
import Filter from "../modules/collection/Filter";
import Hero from "../modules/collection/Hero";
import Line from "../components/Line";
import Coupon from "../modules/homepage/Coupon";
import FramerDefault from "../layouts/framer-motion/FramerDefault";
const Collection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <FramerDefault className="grid gap-8">
      <Hero></Hero>
      <Line></Line>
      <Filter></Filter>
      <Coupon></Coupon>
    </FramerDefault>
  );
};

export default Collection;
