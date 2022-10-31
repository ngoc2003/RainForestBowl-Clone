import React from "react";
import Button from "../../components/button/Button";
import { Images } from "../../images/Images";

const WholeSaleTag = () => {
  return (
    <div className="flex items-center justify-center p-5 rounded-md bg-lightNude gap-x-3">
      <img src={Images.price_tag} alt="" className="h-8" />
      <h4 className="flex-1 text-xs font-semibold sm:text-base">Get Discounted WholeSale Pricing</h4>
      <Button primary className="sm:text-xl">
        Get Quote
      </Button>
    </div>
  );
};

export default WholeSaleTag;
