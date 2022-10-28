import React, { useState } from "react";
import NoteBanner from "../../modules/header/NoteBanner";
import Offers from "../../modules/header/Offers";
import Topbar from "./Topbar";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset >= 200 ? setScroll(true) : setScroll(false);
  });
  return (
    <>
      <div>
        <NoteBanner></NoteBanner>
        <Topbar></Topbar>
        <Offers></Offers>
      </div>
      <div
        className={`fixed  top-0 left-0 right-0  duration-300 ${
          scroll ? "translate-y-0 opacity-1 z-10" : "-translate-y-full -z-10 opacity-0"
        } `}
      >
        <Topbar showLogoText={scroll}></Topbar>
      </div>
    </>
  );
};

export default Header;
