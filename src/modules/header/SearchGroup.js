import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import Button from "../../components/button/Button";
import ProductItem from "../../components/product/ProductItem";
import Search from "../../components/search/Search";
import CategoriesData from "../../data/Categories";
import useDebounce from "../../hooks/useDebounce";

const SearchGroup = ({desktop = true, center =false,className='', ...props}) => {
  const [data, setData] = useState(CategoriesData);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const filterDebounce = useDebounce(filter);
  function HandleGetData() {
    const dataTemp = CategoriesData.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
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
    <>
      <Search
        value={search}
        onBlur={() => {
          setSearch("");
        }}
        onChange={(e) => handleSearch(e)}
        className={className}
        {...props}
      ></Search>
      {search && data.length ? (
        <div className={`absolute z-20  top-full p-5  bg-white shadow-md w-screen  right-0 ${center ? 'w-full mt-0' : 'max-w-[600px] mt-5'}`}>
          <div className="grid grid-cols-5 gap-5 mb-3">
            {data.slice(0, 6).map((item) => (
              <ProductItem
                search={true}
                key={v4()}
                data={item}
                className="col-span-1 w-[100px]"
              ></ProductItem>
            ))}
          </div>
          {data.length > 6 && (
            <Button fluid={true} primary>
              Show more
            </Button>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SearchGroup;
