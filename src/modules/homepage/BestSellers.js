import React, { useState } from "react";
import Heading from "../../components/Heading";
import TabList from "../../components/tab/TabList";
import TabListData from "../../data/TabList";
import TabItem from "../../components/tab/TabItem";
import ProductList from "../../components/product/ProductList";
import CategoriesData from '../../data/Categories'
const BestSellers = () => {
  const [activeTab, setActiveTab] = useState('bestsellers');
  function handleChangeTabActive(e) {
    setActiveTab(e.target.innerHTML.toLowerCase());
  }
  return (
    <div className="text-third">
      <Heading>shop our BestSellers</Heading>
      <TabList>
        {TabListData.map((tab) => (
          <TabItem
            active={activeTab === tab}
            key={tab}
            onClick={(e) => handleChangeTabActive(e)}
          >
            {tab}
          </TabItem>
        ))}
      </TabList>
      <ProductList data={CategoriesData}></ProductList>
    </div>
  );
};

export default BestSellers;
