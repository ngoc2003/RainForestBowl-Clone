import React, { useState } from "react";
import Heading from "../../components/Heading";
import TabItem from "../../components/tab/TabItem";
import TabList from "../../components/tab/TabList";
import ReasonData from "../../data/ReasonData";
import Banner from "../../modules/homepage/Banner";
import {v4} from 'uuid'
const Reason = () => {
  const [activeTab, setActiveTab] = useState(ReasonData[0].name);
  const [data, setData] = useState(ReasonData[0]);
  function handleSetData(tab) {
    let result = ReasonData.find((item) => item.name.toLowerCase() === tab);
    setData(result);
  }
  async function handleChangeTabActive(tabName) {
    setActiveTab(tabName.toLowerCase());
    handleSetData(tabName.toLowerCase());
  }
  return (
    <div className="wrapper">
      <Heading>Why we work with wood</Heading>
      <p className="mx-auto w-[80%] min-w-[300px] text-center">
        We support legal and regulated harvesting of trees to produce our
        products and foster socioeconomic growth in the regions where we source
        raw materials. We work closely with organizations and communities on the
        ground and comply with local and international laws for the sale and
        trading of raw wood and wooden products.
      </p>
      <p className="my-8 font-semibold text-center">
        Click the images below to learn about our different wood collections
      </p>
      <TabList className="gap-x-5">
        {ReasonData.map((tab) => (
          <div className="flex-1" key={v4()}>
            <TabItem
              image={tab.imageTab}
              active={activeTab === tab.name.toLowerCase()}
              key={tab.name}
              onClick={() => handleChangeTabActive(tab.name)}
              className="flex-1 h-16"
            ></TabItem>
            <span className="block mt-2 text-xl font-semibold text-center capitalize">
              {tab.name}
            </span>
          </div>
        ))}
      </TabList>
      <Banner image={data.image} background='bg-lightPink' buttonText={`shop ${data.title} products`}>
        <h4 className="mb-5 text-4xl capitalize">{data.title}</h4>
        <p className="mb-2 text-base font-light">{data.text}</p>
      </Banner>
    </div>
  );
};

export default Reason;
