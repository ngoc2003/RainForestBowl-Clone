import React from "react";
import motto from "../../images/homepage/site-moto-big.webp";
import goal from "../../images/homepage/goal.webp";
import mottoBg from '../../images/homepage/site-moto-bg.webp'
function HightLightText({ children }) {
  return <span className="text-orange">{children}</span>;
}
const Mission = () => {
  return (
    <div className=" bg-lightPurple">
      <div className="py-20 wrapper">
        <h4 className="text-3xl font-semibold text-center">
          We help restore forests around the world.
          <br />
          For every product you purchase, we plant 1 tree.
        </h4>
        <div className="max-w-[1000px] mx-auto">
          <img src={motto} alt="" className="pt-5 " />
          <div className="mx-auto max-w-[650px] text-center text-green">
            <p className="pb-8">
              As part of our pledge to 1% for the Planet, we donate over 1% of
              our annual revenue to two tree-planting partners: Trees for the
              Future and One Tree Planted.
            </p>
            <img src={goal} alt="" />
            <div className="flex justify-between text-xl font-semibold ">
              <p className="flex-1 text-left">
                We planted <HightLightText>100,000 trees</HightLightText>
                <br /> in Africa and VietNam
              </p>
              <p className="flex-1 text-right">
                Our Goal is to plan
                <br />
                <HightLightText>1 Million Trees</HightLightText>
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={mottoBg} alt="" />
    </div>
  );
};

export default Mission;
