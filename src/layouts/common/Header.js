import React from "react";
import NoteBanner from "../../modules/topbar/NoteBanner";
import Topbar from "./Topbar";

const Header = () => {
  return (
    <div>
      <NoteBanner></NoteBanner>
      <Topbar></Topbar>
    </div>
  );
};

export default Header;
