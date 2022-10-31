import React from "react";
import { v4 } from "uuid";
import Star from "../../icons/Star";

const ReviewItem = ({ data }) => {
  return (
    <div>
      <div className="h-[190px] rounded-md overflow-hidden mb-5">
        <img src={data.image} alt="" />
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex ">
          {Array(data.star)
            .fill(0)
            .map(() => (
              <Star key={v4()}></Star>
            ))}
        </div>
        <h4 className="text-xl font-semibold capitalize">{data.title}</h4>
        <p>{data.review}</p>
        <p>- {data.author}</p>
        
      </div>
    </div>
  );
};

export default ReviewItem;
