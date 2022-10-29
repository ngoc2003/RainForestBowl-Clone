import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Hero = () => {
  const { state } = useLocation();
  const { collectionName } = useParams();
  const name = collectionName.replace("-", " ");
  const { description, image } = state;
  return (
    <div className="wrapper py-10 flex bg-lightPink gap-x-10 items-center">
      <div className="flex flex-col gap-y-5 flex-1">
        <span className="text-black text-sm">
          <a href="/" className="text-gray inline">
            {"Home > "}
          </a>
          <p className="capitalize inline ml-2">{name}</p>
        </span>
        <h4 className="text-3xl font-semibold capitalize">{name}</h4>
        <div className={`text-black flex flex-col gap-y-2 text-lg font-thin ${description.length<=1 && 'list-none'}`}>
          {description.map((des) => (
            <li>{des}</li>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img src={image} className="w-full rounded-md" alt="" />
      </div>
    </div>
  );
};

export default Hero;
