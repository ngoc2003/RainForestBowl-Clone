import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FilterSlice from "../../../redux/reducerSlice/FilterSlice";
import { v4 } from "uuid";
import MaterialsData from "../../../data/Materials";
import TabListData from "../../../data/TabList";
import GetAmount from "../../../utils/GetAmount";
import { Link, useLocation, useParams } from "react-router-dom";
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
const FilterOption = () => {
  const { state } = useLocation();
  const name = state.categories;
  const dispatch = useDispatch();
  const [categories, setCategories] = useState(name);
  const [materials, setMaterials] = useState(
    new Array(MaterialsData.length).fill().map((item, index) => ({
      name: MaterialsData[index],
      checked: false,
    }))
  );
  function handleSetMaterials(pos) {
    const updatedCheckedState = materials.map((item, index) =>
      index === pos ? { ...item, checked: !item.checked } : item
    );
    setMaterials(updatedCheckedState);
    dispatch(
      FilterSlice.actions.materialsFilter(
        updatedCheckedState
          .filter((item) => item.checked)
          .map((item) => item.name)
      )
    );
  }
  function handleSetCategories(cateName) {
    setCategories(cateName);
    dispatch(FilterSlice.actions.categoriesFilter(cateName));
  }
  useEffect(() => {
    handleSetCategories(name);
  }, [name]);
  return (
    <div>
      <div className=" grid gap-5 ">
        {/* FilterByCategories */}
        <div>
          <Title>Categories</Title>
          {TabListData.map((item) => (
            <Link
              to={item.path}
              state={{
                categories: item.name,
                description: item.collectionDes,
                image: item.collectionImage,
              }}
              className={`flex cursor-pointer text-[#000]  capitalize mb-2 justify-between ${
                item.name === categories ? "font-semibold" : "opacity-70"
              }`}
              key={v4()}
            >
              {item.name}
              <span>({GetAmount(item.name)})</span>
            </Link>
          ))}
        </div>
        <div className="border-b border-lightGray"></div>

        {/*Filter by Materials */}
        <div>
          <Title>Materials</Title>
          {MaterialsData.map((item, index) => (
            <div className="mb-2 capitalize flex gap-2 text-[#000] opacity-70 justify-between">
              <span>
                <input
                  type="checkbox"
                  name="materials"
                  value={item}
                  checked={materials[index].checked}
                  onChange={() => handleSetMaterials(index)}
                  className="outline-none border w-5 h-5 mr-2"
                />
                <span>{item}</span>
              </span>
              <span>({GetAmount(item, "materials")})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterOption;
