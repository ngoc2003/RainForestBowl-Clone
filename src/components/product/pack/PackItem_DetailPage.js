import React from "react";
import Check from "../../../icons/Check";

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
          className={`cursor-pointer border-[2px] min-w-[150px] rounded-xl  min-h-[80px] bg-lightNude ${
            active ? "border-font" : "border-transparent"
          }`}
        >
          <div className="relative flex flex-col m-3 gap-y-1">
            {active && (
              <span className="absolute right-0 -top-1">
                <Check></Check>
              </span>
            )}
            <p className="text-sm font-thin ">{num_pack}</p>
            <h4 className="text-xl font-semibold ">${price}</h4>
            <p className="text-sm text-black">{`($${
              price / num_pack.slice(0, 1)
            }/piece)`}</p>
            {children}
          </div>
        </div>
      ) : (
        <div onClick={onClick} className={`cursor-pointer inline-block pb-2 font-semibold capitalize ${active ? 'border-b-4 border-b-orange' :'text-lightGray'}`}>{children}</div>
      )}
    </>
  );
};

export default PackItemDetailPage;
