import React, { useEffect, useState } from "react";
import PackItem from "./PackItem";
import Button from "../../button/Button";
import PropTypes from "prop-types";

const PackList = ({ data, className = "", setTypeData = () => {} }) => {
  const [activePack, setActivePack] = useState("");
  const [cost, setCost] = useState("");
  function handleSetCost(name, pack) {
    let result = pack.name === name ? pack.cost : "";
    setCost(result);
  }
  function handleActivePack(e, pack) {
    setActivePack(e.target.innerHTML);
    handleSetCost(e.target.innerHTML, pack);
  }
  useEffect(() => {
    setActivePack(data[0].name);
    setCost(data[0].cost);
  }, []);
  useEffect(() => {
    setTypeData({
      cost: cost,
      name: activePack,
    });
  }, [cost, activePack]);
  return (
    <div className={` flex-1 flex justify-end flex-col ${className}`}>
      <h3 className="mt-1 font-semibold">{cost && `$${cost}`}</h3>
      <div className="flex">
        {data.map((pack) => (
          <PackItem
            onClick={(e) => handleActivePack(e, pack)}
            pack={pack}
            active={activePack}
          ></PackItem>
        ))}
      </div>
    </div>
  );
};
PackList.propTypes = {
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  setTypeData: PropTypes.func,
};
export default PackList;
