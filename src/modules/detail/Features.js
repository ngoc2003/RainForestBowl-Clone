import React from "react";
import FeaturesData from "../../data/Features";

const Features = () => {
  return (
    <div className="flex justify-between py-8 wrapper">
      {FeaturesData.map((feature) => (
        <div className="flex items-center justify-center font-semibold gap-x-3 text-primary">
          <img src={feature.image} alt="" className='h-14' />
          <h4>{feature.text}</h4>
        </div>
      ))}
    </div>
  );
};
export default Features;
