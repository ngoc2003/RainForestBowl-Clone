import React from "react";
import FeaturesData from "../../data/Features";

const Features = () => {
  return (
    <div className="grid justify-between grid-cols-2 py-8 lg:flex wrapper gap-y-5">
      {FeaturesData.map((feature) => (
        <div className="flex items-center text-xs font-semibold lg:justify-center gap-x-3 text-primary md:text-base">
          <img src={feature.image} alt="" className='h-10 lg:h-14' />
          <h4>{feature.text}</h4>
        </div>
      ))}
    </div>
  );
};
export default Features;
