import React, { useCallback, useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import ReviewData from "../../data/Review";
import ReviewItem from "./ReviewItem";
import SwiperCore, { Navigation } from "swiper";
import Prev from "../../icons/Prev";
import Next from "../../icons/Next";

const ReviewList = ({ className }) => {
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.swiper.slideNext();
  }, []);
  SwiperCore.use([Navigation]);
  return (
    <Swiper
      ref={sliderRef}
      grabCursor="true"
      slidesPerView={5}
      spaceBetween={40}
      className={`relative ${className}`}
      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}
    >
      <div className="prev navi" onClick={handlePrev}>
        <Prev></Prev>
      </div>
      {ReviewData.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewItem data={review}></ReviewItem>
        </SwiperSlide>
      ))}
      <div className="next navi" onClick={handleNext}>
        <Next />
      </div>
    </Swiper>
  );
};

export default ReviewList;
