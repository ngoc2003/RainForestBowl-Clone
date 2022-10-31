import React from "react";
import Check from "../../../icons/Check";
import PropTypes from "prop-types";

const PackItemDetailPage = ({
  num_pack,
  price,
  active = false,
  children,
  tab_table = false,
  onClick = () => {},
}) => {
  return (
    <>
      {!tab_table ? (
        <div
          onClick={onClick}
          className={`cursor-pointer border-[2px] md:min-w-[150px] rounded-xl  min-h-[80px] bg-lightNude min-w-[80px] ${
            active ? "border-font" : "border-transparent"
          }`}
        >
          <div className="relative flex flex-col m-3 gap-y-1">
            {active && (
              <span className="absolute right-0 -top-1">
                <Check></Check>
              </span>
            )}
            <p className="text-xs font-thin sm:text-sm ">{num_pack}</p>
            <h4 className="font-semibold xs:text-lg sm:text-xl ">${price}</h4>
            <p className="text-xs text-black truncate sm:text-sm">{`($${
              price / num_pack.slice(0, 1)
            }/piece)`}</p>
            {children}
          </div>
        </div>
      ) : (
        <div
          onClick={onClick}
          className={`cursor-pointer inline-block pb-2 font-semibold capitalize ${
            active ? "border-b-4 border-b-orange" : "text-lightGray"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

PackItemDetailPage.propTypes = {
  tab_table: PropTypes.bool,
  active: PropTypes.bool,
  price: PropTypes.number,
  num_pack: PropTypes.number,
  onClick: PropTypes.func,
};

export default PackItemDetailPage;
