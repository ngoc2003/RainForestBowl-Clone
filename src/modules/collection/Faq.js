import React from "react";
import Heading from "../../components/Heading";
import FaqData from "../../data/Faq";

const Faq = () => {
  return (
    <div className="">
      <h4 className="font-semibold text-2xl mb-3">
        Frequently Asked Questions
      </h4>
      {FaqData.map((item) => (
        <div key={item.name}>
          <h4 className="font-semibold mb-3">{item.name}</h4>
          <p className="text-[#000] opacity-70 mb-3">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
