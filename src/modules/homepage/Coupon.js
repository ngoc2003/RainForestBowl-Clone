import React from "react";
import Heading from "../../components/Heading";
import Search from "../../components/search/Search";
import Button from "../../components/button/Button";
import BackgroundAttemp from "../../components/BackgroundAttemp";
const Coupon = () => {
  return (
    <BackgroundAttemp>
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
    </BackgroundAttemp>
  );
};

export default Coupon;
