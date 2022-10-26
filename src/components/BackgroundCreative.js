import React from "react";
import imgBg from "../images/homepage/vector-top-pink.webp";

const BackgroundCreative = ({ children }) => {
  return (
    <div>
      <img src={imgBg} className="w-full" alt="" />
      <div className="bg-lightPink py-16  ">{children}</div>
      <img src={imgBg} className="w-full rotate-180" alt="" />
    </div>
  );
};

export default BackgroundCreative;
