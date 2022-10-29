import React from "react";
import Banner from "../modules/homepage/Banner";
import BestSellers from "../modules/homepage/BestSellers";
import PopularOffer from "../modules/homepage/PopularOffer";
import Process from "../modules/homepage/Process";
import Reason from "../modules/homepage/Reason";
import Mission from "../modules/homepage/Mission";
import Review from "../modules/homepage/Review";
import Coupon from "../modules/homepage/Coupon";
import ProductLine from "../modules/homepage/ProductLine";
import ScrollToTop from "../utils/ScrollToTop";

const Homepage = () => {
  return (
    <ScrollToTop className="flex flex-col gap-y-[50px]">
      <Banner className="wrapper">
        One-of-a-Kind Wabi <br />
        Sabi Kitchenware <br />
        (Made Sustainably)
      </Banner>
      <PopularOffer></PopularOffer>
      <BestSellers></BestSellers>
      <ProductLine></ProductLine>
      <Process></Process>
      <Reason></Reason>
      <Mission></Mission>
      <Review></Review>
      <Coupon></Coupon>
    </ScrollToTop>
  );
};

export default Homepage;
