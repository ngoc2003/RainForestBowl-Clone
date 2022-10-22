import React from "react";
import Banner from "../modules/homepage/Banner";
import BestSellers from "../modules/homepage/BestSellers";
import PopularOffer from "../modules/homepage/PopularOffer";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-y-13 wrapper">
      <Banner></Banner>
      <PopularOffer></PopularOffer>
      <BestSellers></BestSellers>
    </div>
  );
};

export default Homepage;
