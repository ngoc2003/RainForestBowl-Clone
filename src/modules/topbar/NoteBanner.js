import React from "react";
import BannerList from "../../components/banner/BannerList";
import { NoteBannerData } from "../../data/NoteBanner";
// import NoteBannerData from 
// import { NoteBannerData } from "../../data/Data";

const NoteBanner = () => {
  return <BannerList notebanner data={NoteBannerData} className ='bg-lightFont'></BannerList>;
};

export default NoteBanner;
