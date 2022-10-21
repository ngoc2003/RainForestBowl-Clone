import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import NoteBannerItem from "./item/NoteBannerItem";
import { EffectFade } from "swiper";
  // import 'swiper/css/effect-fade';
const BannerList = ({ data = [], notebanner = false, className }) => {
  SwiperCore.use([Autoplay, EffectFade]);
  return (
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
