import React from "react";
import NoteBanner from "../../modules/header/NoteBanner";
import Offers from "../../modules/header/Offers";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div>
      <NoteBanner></NoteBanner>
      <Topbar></Topbar>
      <Offers></Offers>
    </div>
  );
};

export default Header;
