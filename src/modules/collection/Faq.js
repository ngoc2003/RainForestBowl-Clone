import React from "react";
import FaqData from "../../data/Faq";

const Faq = () => {
  return (
    <div className="">
      <h4 className="mb-3 text-2xl font-semibold">
        Frequently Asked Questions
      </h4>
      {FaqData.map((item) => (
        <div key={item.name}>
          <h4 className="mb-3 font-semibold">{item.name}</h4>
          <p className="text-[#000] opacity-70 mb-3">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
