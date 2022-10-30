import React from "react";
import Heading from "../../components/Heading";
import own_set from "../../images/homepage/Popular-offers-own-set_1000x.webp";
import mystery_boxes from "../../images/homepage/Popular-offers-mystery-boxes_1000x.webp";
import kitchen_set from "../../images/homepage/Popular-offers-kitchen-set_1000x.webp";
import { Link } from "react-router-dom";

const PopularOffer = () => {
  return (
    <div className="wrapper">
      <Heading>our most popular offers</Heading>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex-1">
          <Link to="/">
            <img src={own_set} alt="" className="rounded-2xl hover-img" />
          </Link>
        </div>
        <div className="flex flex-col flex-1 gap-8">
          <Link to="/">
            <img src={kitchen_set} className="rounded-2xl hover-img" alt="" />
          </Link>
          <Link to="/">
            <img src={mystery_boxes} alt="" className="rounded-2xl hover-img" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularOffer;
