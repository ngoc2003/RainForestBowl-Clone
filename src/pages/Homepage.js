import React from "react";
import Banner from "../modules/homepage/Banner";
import BestSellers from "../modules/homepage/BestSellers";
import PopularOffer from "../modules/homepage/PopularOffer";
import Process from "../modules/homepage/Process";
import Reason from "../modules/homepage/Reason";

const Homepage = () => {
  return (
    <div className="flex flex-col gap-y-[50px]">
      <Banner className='wrapper'>
        One-of-a-Kind Wabi <br />
        Sabi Kitchenware <br />
        (Made Sustainably)
      </Banner>
      <PopularOffer></PopularOffer>
      <BestSellers></BestSellers>
      <Process></Process>
      <Reason></Reason>
    </div>
  );
};

export default Homepage;
