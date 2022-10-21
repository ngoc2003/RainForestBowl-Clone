import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Cart from "../../icons/Cart";
import { TopbarData } from "../../data/Topbar";
const Topbar = () => {
  return (
    <div className="wrapper relative py-5 flex">
      <img src={logo} alt="" className="absolute -top-7" />
      <div className="w-[300px]"></div>
      <div className="flex items-center justify-between flex-1 ">
        {TopbarData.map((item) => 
          item.path ? (
            <Link to={item.path} key={item.id} className='link-hover'>
              {item.label}
            </Link>
          ) : (
            <span className="link-hover" key={item.id}>{item.label}</span>
          )
        )}

        <Button primary rounded>
          <Cart></Cart>
          Cart
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
