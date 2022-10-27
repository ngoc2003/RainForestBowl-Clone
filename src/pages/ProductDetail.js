import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Interweave } from "interweave";
import { v4 } from "uuid";
import Heading from "../components/Heading";
import BackgroundCreative from "../components/BackgroundCreative";
import PackItemDetailPage from "../components/product/pack/PackItem_DetailPage";
import SearchDataById from "../utils/SearchDataById";
import Search from "../components/search/Search";
import Button from "../components/button/Button";
import WholeSaleTag from "../modules/detail/WholeSaleTag";
import Features from "../modules/detail/Features";
import Commit from "../modules/detail/Commit";
import Video from "../modules/detail/Video";
const ProductDetail = () => {
  const { productId } = useParams();
  const data = SearchDataById(productId);
  const [activePack, setActivePack] = useState("");
  const [activePack_table, setActivePack_table] = useState("");
  const [info, setShowInfo] = useState("hightlight");
  const [cost, setCost] = useState("");
  function handleSetActivePack_table(e, in4) {
    setActivePack_table(e.target.innerHTML.toLowerCase());
    setShowInfo(in4);
    console.log(e.target.innerHTML.toLowerCase());
  }
  function handleActivePack({ name, cost }) {
    setActivePack(name);
    setCost(cost);
  }
  useEffect(() => {
    setActivePack(data.type[0].name);
    setActivePack_table("products hightlights");
    setShowInfo("hightlight");
    setCost(data.type[0].cost);
  }, []);
  return (
    <div className=" py-14">
      <div className="flex gap-x-14 wrapper">
        <div className="flex-1">
          <img
            src={data && data.image}
            className="max-w-[530px] mx-auto"
            alt=""
          />
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
            <div className="flex my-5 border-b border-lightGray gap-x-8">
              <PackItemDetailPage
                active={"products hightlights" === activePack_table}
                tab_table={true}
                onClick={(e) => handleSetActivePack_table(e, "hightlight")}
              >
                products hightlights
              </PackItemDetailPage>
              <PackItemDetailPage
                active={"dimensions" === activePack_table}
                tab_table={true}
                onClick={(e) => handleSetActivePack_table(e, "dimensions")}
              >
                dimensions
              </PackItemDetailPage>
            </div>
            <div>
              {activePack_table !== "dimension" &&
                data[info].map((item) => (
                  <li className="my-2 ml-4" key={v4()}>
                    <span className="font-semibold uppercase">{item.name}</span>
                    {" : "}
                    <span>{item.text}</span>
                  </li>
                ))}
            </div>
          </div>

          <WholeSaleTag></WholeSaleTag>
        </div>
      </div>
      <Features></Features>
      <BackgroundCreative>
        <div className="flex wrapper gap-x-8">
          <div className="flex-1">
            <img src={data.image} className="w-full" alt="" />
          </div>
          <div className="flex-1">
            <Interweave
              content={data.description}
              className="font-thin product-des "
            />
            <Commit></Commit>
          </div>
        </div>
      </BackgroundCreative>
      <Video video_path={data.video_path}></Video>
    </div>
  );
};

export default ProductDetail;
