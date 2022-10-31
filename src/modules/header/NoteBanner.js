import React from "react";
import BannerList from "../../components/banner/BannerList";
import { NoteBannerData } from "../../data/NoteBanner";
import SearchGroup from "./SearchGroup";
const NoteBanner = () => {
  return (
    <div className="relative flex bg-lightFont wrapper">
      <BannerList notebanner data={NoteBannerData} className=""></BannerList>
      <div className="absolute z-20 hidden h-full xl:block right-14">
        <SearchGroup></SearchGroup>
      </div>
    </div>
  );
};

export default NoteBanner;
