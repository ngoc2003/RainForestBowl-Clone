import React from "react";
import Button from "../../components/button/Button";
import banner from "../../images/homepage/Banner.webp";
const Banner = () => {
  return (
    <div className="flex my-8 rounded-[3px] overflow-hidden font-semibold bg-nude2 gap-x-5">
      <div className="flex flex-col justify-center pl-12 pr-10 text-3xl gap-y-4">
        <span>
          One-of-a-Kind Wabi <br />
          Sabi Kitchenware <br />
          (Made Sustainably)
        </span>
        <Button className="text-xl" secondary>
          Create Your Own Set
        </Button>
      </div>
      <div className="flex-1 object-cover">
        <img className="w-full " src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
