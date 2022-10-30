import React, { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import logo from "../../images/logo.svg";
import logoText from "../../images/logoText.svg";
import { Link } from "react-router-dom";
import { TopbarData } from "../../data/Topbar";
import CartButton from "../../modules/header/CartButton";
import DropdownCart from "../../modules/header/DropdownCart";
import { useSelector } from "react-redux";
import { cartUserSelector } from "../../redux/selector";
import Bar from "../../icons/Bar";
import SearchGroup from "../../modules/header/SearchGroup";
import SearchIcon from "../../icons/SearchIcon";
import Close from "../../icons/Close";
const Topbar = ({ showLogoText }) => {
  const cartList = useSelector(cartUserSelector);
  const desktop = useMediaQuery("(min-width:991px)");
  const [showListCart, setShowListCart] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSearchPhone, setShowSearchPhone] = useState(false);
  function handleToggleSearchPhone() {
    setShowSearchPhone(true);
  }
  function handleToggleListCart() {
    setShowListCart(!showListCart);
  }
  window.addEventListener("scroll", () => {
    setShowListCart(false);
    setShowSideBar(false);
    setShowSearchPhone(false);
  });
  function handleToggleSideBar() {
    setShowSideBar(true);
  }
  return (
    <div className="flex items-center justify-between py-8 bg-white border-b xl:py-5 xl:justify-start gap-x-10 wrapper border-b-borderColor">
      <Bar
        className="cursor-pointer xl:hidden"
        onClick={handleToggleSideBar}
      ></Bar>
      <Link
        to="/"
        className="absolute flex-1 -translate-x-1/2 left-1/2 xl:top-3 xl:translate-x-0 xl:left-[4%] "
      >
        {showLogoText ? (
          <img className="mx-auto" src={logoText} alt="" />
        ) : (
          <img className="mx-auto" src={logo} alt="" />
        )}
      </Link>
      <div className="xl:block w-[200px] hidden"></div>
      <div
        className={`duration-300 fixed top-0 h-screen xl:h-auto shadow-md xl:shadow-none left-0 flex flex-col items-center flex-1 p-10 -translate-x-full bg-white xl:justify-between xl:static xl:flex-row xl:p-0 gap-y-8 xl:translate-x-0 ${
          showSideBar && "translate-x-0"
        }`}
      >
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
      </div>
      {showSearchPhone && (
        <>
          <div
            className="layer bg-[#000] opacity-60 fixed inset-0 h-screen z-[29]"
            onClick={() => setShowSearchPhone(false)}
          ></div>
          <div className="fixed top-0 left-0 right-0 z-30 bg-white h-[100px] flex items-center">
            <div className="px-5 py-3 mx-auto border rounded-md border-lightGray">
              <SearchGroup
                center
                className="w-[80%] min-w-[350px]"
              ></SearchGroup>
              <Close
                onClick={() => setShowSearchPhone(false)}
                className="absolute top-0 right-0 m-5 "
              ></Close>
            </div>
          </div>
        </>
      )}
      <div className="relative flex items-center gap-x-5">
        {!desktop && <SearchIcon onClick={handleToggleSearchPhone} />}
        <CartButton
          amount={cartList.length}
          onClick={handleToggleListCart}
          text={desktop}
        ></CartButton>
        {showListCart && <DropdownCart data={cartList}></DropdownCart>}
      </div>
    </div>
  );
};

export default Topbar;
