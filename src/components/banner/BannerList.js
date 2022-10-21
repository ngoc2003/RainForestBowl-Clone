import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import NoteBannerItem from "./item/NoteBannerItem";
const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 2,
  slidesToScroll: 1,
};
const BannerList = ({ data = [], notebanner = false, className }) => {
  // console.log(data);
  SwiperCore.use([Autoplay]);
  return (
    // <Slider {...settings}>
    //   {data
    //     ? notebanner
    //       ? data.map((item) => <div key={item.id}>{item.text}</div>)
    //       : data.map(() => <div>Hi</div>)
    //     : ""}
    // </Slider>
    <Swiper
      grabCursor="true"
      slidesPerView={1}
      autoplay={{
        delay: 8000,
      }}
      className={className}
    >
      {data
        ? notebanner
          ? data.map((item) => (
              <SwiperSlide key={item.id}>
              <NoteBannerItem>{item.text}</NoteBannerItem>
              </SwiperSlide>
            ))
          : data.map(() => <SwiperSlide>Hi</SwiperSlide>)
        : ""}
    </Swiper>
  );
};

export default BannerList;
