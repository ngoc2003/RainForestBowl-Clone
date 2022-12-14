import React from "react";
import { useLocation } from "react-router-dom";
const progress = [
  {
    name: "cart",
    path: "/checkout/cart",
  },
  {
    name: "information",
    path: "/checkout/information",
  },
  {
    name: "payment",
    path: "/checkout/payment",
  },
];
const Navi = () => {
  const {pathname} = useLocation()
  return (
    <>
      <h4 className="pt-10 mb-5 text-2xl wrapper">Rainforest Bowl</h4>
      <div className="flex items-center pb-8 text-xs capitalize border-b gap-x-3 wrapper border-b-lightGray">
        {progress.map((item, index) => (
          <>
            <span
              key={item.name}
              className={`  ${pathname === item.path && "text-blue"}`}
            >
              {item.name}
            </span>
            {index !== progress.length - 1 && <span className="">{">"}</span>}
          </>
        ))}
      </div>
    </>
  );
};

export default Navi;
