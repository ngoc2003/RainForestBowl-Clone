import React from "react";
import Heading from "../../components/Heading";
import bottom from "../../images/homepage/newsletter-bottom-bg.webp";
import top from "../../images/homepage/newsletter-top-bg.webp";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
const Coupon = () => {
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
      <Heading>get 20% off coupon gift code</Heading>
      <p className="pb-5 -mt-8 text-center">
        Enter Your Email to receive 20% off coupon codes, Annoucement, special
        offers and more in the future
      </p>
      <div className="flex justify-center max-w-[700px] gap-x-4 mx-auto">
        <Search
          icon={false}
          placeholder="Enter Your Email Address"
          right={false}
          className={
            "bg-white w-[62%] min-w-[300px] border border-borderForm  p-3 rounded-md"
          }
        ></Search>
        <Button className="px-5 text-xl" primary>
          Get 20% OFF Code
        </Button>
      </div>
    </div>
  );
};

export default Coupon;
