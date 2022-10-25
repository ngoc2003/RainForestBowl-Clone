import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";
import Heading from "../components/Heading";
import PackItemDetailPage from "../components/product/pack/PackItem_DetailPage";
// import PackList from "../components/product/pack/PackList";
import SearchDataById from "../utils/SearchDataById";
import Search from "../components/search/Search";
import Button from "../components/button/Button";
const ProductDetail = () => {
  const { productId } = useParams();
  const data = SearchDataById(productId);
  const [activePack, setActivePack] = useState("");
  const [cost, setCost] = useState("");
  function handleActivePack({ name, cost }) {
    setActivePack(name);
    setCost(cost);
  }
  useEffect(() => {
    setActivePack(data.type[0].name);
    setCost(data.type[0].cost);
  }, []);
  return (
    <div className="flex wrapper py-14 gap-x-14">
      <div className="flex-1">
        <img src={data && data.image} className="w-full" alt="" />
      </div>
      <div className="flex-1">
        <Heading center={false}>{data.title}</Heading>
        <h4 className="font-semibold capitalize">Pack Quantity: {cost}</h4>
        <div className="flex mt-5 gap-x-2">
          {data.type.map((item) => (
            <PackItemDetailPage
              key={v4()}
              active={item.name === activePack}
              num_pack={item.name}
              price={item.cost}
              onClick={() => handleActivePack(item)}
            ></PackItemDetailPage>
          ))}
        </div>
        <div className="flex mt-5 gap-x-5">
          <Search
            value={1}
            icon={false}
            right={false}
            className={
              "border text-black font-thin border-gray rounded-lg p-2 px-3  w-16"
            }
          ></Search>
          <Button yellow creative className="text-xl">
            Add to cart
          </Button>
        </div>
        <div>
          <PackItemDetailPage tab_table={true}></PackItemDetailPage>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
