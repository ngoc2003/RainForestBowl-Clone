import React from "react";
import Button from "../../components/button/Button";
import banner from "../../images/homepage/Banner.webp";
const Banner = ({
  children,
  background='bg-nude2',
  buttonText = " Create Your Own Set",
  image = banner,
  className,
}) => {
  return (
    <div className={className}>
      <div className={`flex my-8 rounded-[3px] overflow-hidden font-semibold  gap-x-5 w-full ${background}`}>
        <div className="flex flex-col justify-center max-w-[500px] pl-12 pr-10 text-3xl gap-y-4 py-8">
          <div>{children}</div>
          <Button className="text-xl" secondary fluid>
            {buttonText}
          </Button>
        </div>
        <div className="flex-1 object-cover">
          <img className="w-full " src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
