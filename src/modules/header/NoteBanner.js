import React, { useEffect, useState } from "react";
import BannerList from "../../components/banner/BannerList";
import Search from "../../components/search/Search";
import { NoteBannerData } from "../../data/NoteBanner";
import ProductItem from "../../components/product/ProductItem";
import {v4} from 'uuid'
// import NoteBannerData from
// import { NoteBannerData } from "../../data/Data";
import CategoriesData from "../../data/Categories";
import useDebounce from "../../hooks/useDebounce";
import Button from "../../components/button/Button";
const NoteBanner = () => {
  const [data, setData] = useState(CategoriesData);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const filterDebounce = useDebounce(filter);
   function HandleGetData() {
    const dataTemp =  CategoriesData.filter((item) =>{
      return item.title.toLowerCase().includes(search.toLowerCase())
    }
    );
    setFilter(dataTemp);
  }
  function handleSearch(e) {
    setSearch(e.target.value);
    HandleGetData();
  }
  useEffect(() => {
    setData(filterDebounce);
  }, [filterDebounce, search]);
  return (
    <div className="relative flex bg-lightFont wrapper">
      <BannerList notebanner data={NoteBannerData} className=""></BannerList>
      <div className="absolute z-20 h-full right-14">
        <Search
          value={search}
          onBlur={() => {
            setSearch("");
          }}
          onChange={(e) => handleSearch(e)}
          className=""
        ></Search>
        {search && data.length ? (
          <div className="absolute top-full right-0 mt-5 z-20 grid grid-cols-3 gap-5 p-5  bg-white shadow-md w-screen max-w-[600px]">
            {data.slice(0,6).map((item) => (
              <ProductItem
                search={true}
                key={v4()}
                data={item}
                className="col-span-1"
              ></ProductItem>
            ))}
            {
              data.length>6? <Button fluid={true}>Show more</Button> : ''
            }
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NoteBanner;
