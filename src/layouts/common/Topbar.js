import React, { useEffect, useRef, useState } from "react";
import logo from "../../images/logo.svg";
import logoText from "../../images/logoText.svg";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Cart from "../../icons/Cart";
import { TopbarData } from "../../data/Topbar";
import CartButton from "../../modules/header/CartButton";
import DropdownCart from "../../modules/header/DropdownCart";
import { useSelector } from "react-redux";
import { cartUserSelector } from "../../redux/selector";
const Topbar = ({ showLogoText }) => {
  const cartList = useSelector(cartUserSelector);
  // const dropDownRef = useRef();
  // const cartButtonRef = useRef();
  const [showListCart, setShowListCart] = useState(false);
  function handleToggleListCart() {
    setShowListCart(!showListCart);
  }
  window.addEventListener("scroll", () => {
    setShowListCart(false)
  });
  // useEffect(() => {
  //   function handleClickOut(e) {
  //     console.log(dropDownRef.current.contains(e.target));
  //     if (
  //       !cartButtonRef.current.contains(e.target) &&
  //       !dropDownRef.current.contains(e.target)
  //     ) {
  //       setShowListCart(false);
  //     }
  //   }
  //   document.addEventListener("click", (e) => handleClickOut(e));
  //   return () => {
  //     document.removeEventListener("click", handleClickOut);
  //   };
  // }, []);
  return (
    <div className="relative flex items-center py-5 bg-white border-b gap-x-10 wrapper border-b-borderColor">
      <Link to="/">
        {showLogoText ? (
          <img src={logoText} alt="" />
        ) : (
          <img src={logo} alt="" className="absolute -top-7" />
        )}
      </Link>
      {!showLogoText && <div className="w-[200px]"></div>}
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
          <CartButton
            amount={cartList.length}
            onClick={handleToggleListCart}
          ></CartButton>
          {showListCart && <DropdownCart data={cartList}></DropdownCart>}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
