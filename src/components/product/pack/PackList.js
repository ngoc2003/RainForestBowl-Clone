import React, { useState } from "react";
import PackItem from "./PackItem";

const PackList = ({ data }) => {
  const [activePack, setActivePack] = useState('2-Pack');
  function handleActivePack(e) {
    setActivePack(e.target.innerHTML);
  }
  return (
    <div className="flex gap-y-5">
      {data.map((pack) => (
        <PackItem
          onClick={(e) => handleActivePack(e)}
          pack={pack}
          active={activePack === pack.name}
        ></PackItem>
      ))}
    </div>
  );
};

export default PackList;
