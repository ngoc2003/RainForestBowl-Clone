import React from "react";
import Heading from "../../components/Heading";
import TabListData from "../../data/TabList";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { Images } from "../../images/Images";
const ProductLine = () => {
  return (
    <div>
      <Heading>Browse Our Product Line</Heading>
      <div className=" grid grid-cols-6 gap-10 wrapper">
        {TabListData.map(
          (item) =>
            item.image && (
              <Link
                key={v4()}
                to={item.path}
                state={{
                  categories: item.name,
                  description: item.collectionDes,
                  image: item.collectionImage,
                }}
                style={{
                  background: `url(${Images.productLineBg}) center center/ contain no-repeat`,
                }}
                className=""
              >
                <img
                  src={item.image}
                  className="duration-200 w-full max-w-[180px] hover:scale-110"
                  alt=""
                />
                <h4 className="font-semibold capitalize text-center text-lg">
                  {item.name}
                </h4>
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default ProductLine;
