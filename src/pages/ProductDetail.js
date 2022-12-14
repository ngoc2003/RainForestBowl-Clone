import React from "react";
import { useParams } from "react-router-dom";
import { Interweave } from "interweave";
import BackgroundCreative from "../components/BackgroundCreative";
import SearchDataById from "../utils/SearchDataById";
import Features from "../modules/detail/Features";
import Commit from "../modules/detail/Commit";
import Video from "../modules/detail/Video";
import Instruction from "../modules/detail/Instruction";
import Coupon from '../modules/homepage/Coupon'
import Product from "../modules/detail/Product";
import ScrollToTop from "../utils/ScrollToTop";
import FramerDefault from "../layouts/framer-motion/FramerDefault";
const ProductDetail = () => {
  const { productId } = useParams();
  const data = SearchDataById(productId);
  
  return (
    <ScrollToTop >
    <FramerDefault className="flex flex-col gap-8 py-14">

      <Product data={data}></Product>
      <Features></Features>
      <BackgroundCreative>
        <div className="flex flex-col wrapper gap-x-8 lg:flex-row gap-y-5">
          <div className="flex-1">
            <img src={data.image} className="w-full" alt="" />
          </div>
          <div className="flex-1">
            <Interweave
              content={data.description}
              className="font-thin product-des "
            />
            <Commit></Commit>
          </div>
        </div>
      </BackgroundCreative>
      <Video video_path={data.video_path}></Video>
      <Instruction categories={data.categories}></Instruction>
      <Coupon></Coupon>
    </FramerDefault>
    </ScrollToTop>
  );
};

export default ProductDetail;
