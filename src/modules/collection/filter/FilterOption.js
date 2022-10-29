import React, { useState } from "react";
import { v4 } from "uuid";
import MaterialsData from "../../../data/Materials";
import TabListData from "../../../data/TabList";
function Title({ children }) {
  return (
    <div
      style={{
        textTransform: "uppercase",
        fontWeight: 600,
        marginBottom: "10px",
      }}
    >
      {children}
    </div>
  );
}
const FilterOption = ({ initialCategories = "" }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [materials, setMaterials] = useState(
    new Array(MaterialsData.length).fill().map((item, index) => ({
      name: MaterialsData[index],
      checked: false,
    }))
  );
  function handleSetMaterials(pos) {
    const updatedCheckedState = materials.map(
      (item, index) =>
        index === pos ? { ...item, checked: !item.checked } : item
    );
    setMaterials(updatedCheckedState);
  }

  function handleSetCategories(value) {
    setCategories(value);
  }
  console.log(categories);
  console.log(materials);
  return (
    <div className=" wrapper grid gap-5 ">
      {/* FilterByCategories */}
      <div>
        <Title>Categories</Title>
        {TabListData.map((item) => (
          <div
            className="cursor-pointer text-[#000] opacity-70 capitalize mb-2"
            key={v4()}
            onClick={() => handleSetCategories(item.name)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="border-b border-lightGray"></div>

      {/*Filter by Materials */}
      <div>
        <Title>Materials</Title>
        {MaterialsData.map((item, index) => (
          <div className="mb-2 capitalize flex gap-2 text-[#000] opacity-70 ">
            <input
              type="checkbox"
              name="materials"
              value={item}
              checked={materials[index].checked}
              onChange={() => handleSetMaterials(index)}
              className="outline-none border w-5 h-5"
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterOption;
