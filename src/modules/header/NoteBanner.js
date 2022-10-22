import React from "react";
import BannerList from "../../components/banner/BannerList";
import Search from "../../components/search/Search";
import { NoteBannerData } from "../../data/NoteBanner";
// import NoteBannerData from
// import { NoteBannerData } from "../../data/Data";

const NoteBanner = () => {
  return (
    <div className="flex bg-lightFont wrapper relative" >
      <BannerList
        notebanner
        data={NoteBannerData}
        className=""
      ></BannerList>
      <Search className='absolute right-14'></Search>
    </div>
  );
};

export default NoteBanner;
