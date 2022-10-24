import React, { useState } from "react";
import Heading from "../../components/Heading";
import TabList from "../../components/tab/TabList";
import TabListData from "../../data/TabList";
import TabItem from "../../components/tab/TabItem";
import ProductList from "../../components/product/ProductList";
import CategoriesData from "../../data/Categories";
import Button from "../../components/button/Button";
const BestSellers = () => {
  const [activeTab, setActiveTab] = useState("bestsellers");
  const [data, setData] = useState(CategoriesData);
  function handleSetData(tab) {
    if (tab === "bestsellers") {
      setData(CategoriesData);
    } else {
      const result = CategoriesData.filter((item) => item.categories === tab);
      setData(result);
    }
  }
  async function handleChangeTabActive(e) {
    setActiveTab(e.target.innerHTML.toLowerCase());
    handleSetData(e.target.innerHTML.toLowerCase());
  }

  return (
    <div className="text-font wrapper">
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
      <ProductList data={data}></ProductList>
      <Button yellow className={'w-full text-xl my-8'} >Shop all best sellers products</Button>
    </div>
  );
};

export default BestSellers;
