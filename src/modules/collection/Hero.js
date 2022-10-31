import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Hero = () => {
  const { state } = useLocation();
  const { collectionName } = useParams();
  const name = collectionName.replace("-", " ");
  const { description, image } = state;
  return (
    <div className="flex items-center py-10 wrapper bg-lightPink gap-x-10">
      <div className="flex flex-col flex-1 gap-y-5">
        <span className="text-sm text-black">
          <a href="/" className="inline text-gray">
            {"Home > "}
          </a>
          <p className="inline ml-2 capitalize">{name}</p>
        </span>
        <h4 className="text-3xl font-semibold capitalize">{name}</h4>
        <div className={`text-black flex flex-col gap-y-2 min-[1000px]:text-lg font-thin ${description.length<=1 && 'list-none'}`}>
          {description.map((des) => (
            <li>{des}</li>
          ))}
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <img src={image} className="w-full rounded-md" alt="" />
      </div>
    </div>
  );
};

export default Hero;
