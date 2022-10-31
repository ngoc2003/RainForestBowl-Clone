import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import Button from "../../components/button/Button";
import Heading from "../../components/Heading";
import PackItemDetailPage from "../../components/product/pack/PackItem_DetailPage";
import Search from "../../components/search/Search";
import CartSlice from "../../redux/reducerSlice/CartSlice";
import WholeSaleTag from "./WholeSaleTag";

const Product = ({ data }) => {
  const [activePack, setActivePack] = useState("");
  const [cost, setCost] = useState("");
  const [amount, setAmount] = useState(1);
  // for detail
  const [activePack_table, setActivePack_table] = useState("");
  const [info, setShowInfo] = useState("hightlight");

  const dispatch = useDispatch();
  function handleChangeAmount(e) {
    setAmount(e.target.value);
  }
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

  function handleAddCart() {
    dispatch(
      CartSlice.actions.add({
        ...data,
        type: { name: activePack, cost: cost },
        amount: amount,
      })
    );
  }
  return (
    <div className="flex flex-col gap-x-14 wrapper lg:flex-row">
      <div className="flex-1">
        <img
          src={data && data.image}
          className="max-w-[530px] mx-auto "
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
            value={amount}
            icon={false}
            right={false}
            onChange={handleChangeAmount}
            className={
              "border text-black font-thin border-gray rounded-lg p-2 px-3  w-16"
            }
          ></Search>
          <Button yellow creative className="sm:text-xl" onClick={handleAddCart}>
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
  );
};

export default Product;
