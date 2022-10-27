import React from "react";
import top from "../images/homepage/newsletter-top-bg.webp";
import bottom from "../images/homepage/newsletter-bottom-bg.webp";

const BackgroundAttemp = ({ children }) => {
  return (
    <div
      className="py-14 wrapper bg-lightNude "
      style={{
        backgroundImage: `url(${top}),url(${bottom})`,
        backgroundPosition: "top right, bottom left",
        backgroundSize: "contain, contain",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      {" "}
      {children}
    </div>
  );
};

export default BackgroundAttemp;
