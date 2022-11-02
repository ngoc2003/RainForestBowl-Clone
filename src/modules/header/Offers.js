import React from "react";
import Cell from "../../components/Cell";
import PrimaryText from "../../components/PrimaryText";

const Offers = () => {
  return (
    <div className="flex flex-wrap justify-around py-3 text-sm border-b shadow-md wrapper border-b-borderColor gap-y-5">
      <div className="flex flex-col items-center ">
        <PrimaryText>4 Straws Free ($10 Value)</PrimaryText>
        on order $25+
      </div>
      <Cell ></Cell>
      <div className="flex flex-col items-center ">
        <PrimaryText>1 Coconut Bowl + 4 Straws FREE ($21 Value)</PrimaryText>
        on orders $50+
      </div>
      <Cell></Cell>
      <div className="flex flex-col items-center ">
        <span>
          <PrimaryText>Get 15% OFF</PrimaryText> on order $75+
        </span>
        <span>
          Code: <span className="font-bold">15OFF</span>
        </span>
      </div>
      <Cell></Cell>
      <div className="flex flex-col items-center ">
        <span>
          <PrimaryText>Get 20% OFF</PrimaryText> on order $120+
        </span>
        <span>
          Code: <span className="font-bold">20OFF</span>
        </span>
      </div>
    </div>
  );
};

export default Offers;
