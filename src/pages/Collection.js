import React, { useEffect } from "react";
import Filter from "../modules/collection/Filter";
import Hero from "../modules/collection/Hero";
import Line from "../components/Line";
import Coupon from "../modules/homepage/Coupon";
const Collection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className="grid gap-8">
      <Hero></Hero>
      <Line></Line>
      <Filter></Filter>
      <Coupon></Coupon>
    </div>
  );
};

export default Collection;
