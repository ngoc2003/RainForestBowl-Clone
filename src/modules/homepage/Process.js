/* eslint-disable react/jsx-pascal-case */
import React from "react";
import imgBg from "../../images/homepage/vector-top-pink.webp";
import process from "../../images/homepage/sustainable-process.webp";
import ProcessData from "../../data/Process";
import ProcessItem from "../../components/process/ProcessItem";
import BackgroundCreative from "../../components/BackgroundCreative";
const Process = () => {
  return (
    <>
      <BackgroundCreative>
        <div className="flex flex-col gap-8 wrapper lg:flex-row ">
          <div className="flex-1">
            <img src={process} className="object-cover w-full" alt="" />
          </div>
          <div className="flex-1">
            <p className="pb-8 font-semibold">
              Rainforest Bowls prioritizes and implements strategies that
              support earth conservation activities, community development, and
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
      </BackgroundCreative>
    </>
  );
};

export default Process;
