import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Cart from "../../icons/Cart";
import { TopbarData } from "../../data/Topbar";
import CartButton from "../../modules/header/CartButton";
import DropdownCart from "../../modules/header/DropdownCart";
const Topbar = () => {
  const [showListCart, setShowListCart] = useState(false);
  function handleToggleListCart() {
    console.log(showListCart);
    setShowListCart(!showListCart);
  }
  return (
    <div className="relative flex py-5 border-b wrapper border-b-borderColor">
      <img src={logo} alt="" className="absolute -top-7" />
      <div className="w-[300px]"></div>
      <div className="flex items-center justify-between flex-1 ">
        {TopbarData.map((item) =>
          item.path ? (
            <Link to={item.path} key={item.id} className="link-hover">
              {item.label}
            </Link>
          ) : (
            <span className="link-hover" key={item.id}>
              {item.label}
            </span>
          )
        )}
        <div className="relative">
          <CartButton onMouseOver={handleToggleListCart}></CartButton>
          {showListCart && <DropdownCart></DropdownCart>}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
