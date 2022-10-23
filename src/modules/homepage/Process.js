import React from "react";
import imgBg from "../../images/homepage/vector-top-pink.webp";
import process from "../../images/homepage/sustainable-process.webp";
import ProcessData from "../../data/Process";
import ProcessItem from "../../components/process/ProcessItem";
const Process = () => {
  return (
    <div>
      <img src={imgBg} className="w-full" alt="" />
      <div className="flex py-16 bg-lightPink wrapper gap-x-5">
        <div className="flex-1">
          <img src={process} className="object-cover w-full" alt="" />
        </div>
        <div className="flex-1">
          <p className="pb-8 font-semibold">
            Rainforest Bowls prioritizes and implements strategies that support
            earth conservation activities, community development, and
            sustainable product consumption.
          </p>
          <div>
            {ProcessData.map((item) => (
              <ProcessItem
                title={item.title}
                key={item.title}
                titleLink={item.titleLink}
                link={item.link}
              >
                {item.text}
              </ProcessItem>
            ))}
          </div>
        </div>
      </div>
      <img src={imgBg} className="w-full rotate-180" alt="" />
    </div>
  );
};

export default Process;
